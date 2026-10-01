import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { useState, useEffect, useCallback } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getAnime, checkEpisodeAccess } from "~/lib/api";
import { searchMedia, saveMediaListEntry } from "~/lib/anilist";
import { getGradientForAnime } from "~/data/utils";
import { VideoPlayer } from "~/components/VideoPlayer";
import {
  resolveStreams,
  listAddons,
  setAddonInstalled,
  setAddonEnabled,
} from "~/lib/addons/manager";
import type { Stream, Addon } from "~/lib/addons/types";

export const Route = createFileRoute("/watch/$animeId/$episode")({
  loader: ({ params }) => ({ animeId: params.animeId, episodeNumber: Number(params.episode) }),
  component: WatchPage,
});

function WatchPage() {
  const { animeId, episodeNumber } = Route.useLoaderData();
  const navigate = useNavigate();

  const { data: anime } = useSuspenseQuery({
    queryKey: ["anime", animeId],
    queryFn: () => getAnime(animeId),
  });
  if (!anime) throw notFound();

  const episodes = (anime as any).episodes || [];
  const episode = episodes.find((e: any) => e.number === episodeNumber);
  if (!episode) throw notFound();

  const [audioType, setAudioType] = useState<"sub" | "dub">(
    (anime as any).type === "dub" ? "dub" : "sub"
  );
  const [session, setSession] = useState<{
    email: string;
    name: string;
    id: string;
    isPremium: boolean;
  } | null>(null);

  // Streams resolved from the addon system.
  const [streams, setStreams] = useState<Stream[]>([]);
  const [activeStream, setActiveStream] = useState<Stream | null>(null);

  // Addons modal state.
  const [addonsOpen, setAddonsOpen] = useState(false);
  const [addons, setAddons] = useState<Addon[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("aniFlow_session");
    if (stored) {
      try {
        setSession(JSON.parse(stored));
      } catch {}
    }
  }, []);

  const isPremium = session?.isPremium ?? false;

  // AniList scrobbling: when a connected user watches an episode and
  // auto-sync is enabled, sync watch progress to their AniList list.
  useEffect(() => {
    const token = localStorage.getItem("aniflow_anilist_token");
    const autosync = localStorage.getItem("aniflow_anilist_autosync");
    if (!token || autosync === "false") return;
    const title = (anime as any).title || "";
    if (!title) return;
    let cancelled = false;
    (async () => {
      try {
        // Prefer a cached anilistId; otherwise match by title.
        const cacheKey = `aniflow_anilist_id:${animeId}`;
        let mediaId = Number(localStorage.getItem(cacheKey)) || 0;
        if (!mediaId) {
          const media = await searchMedia(title);
          if (!media) return;
          mediaId = media.id;
          localStorage.setItem(cacheKey, String(mediaId));
        }
        if (!cancelled) {
          await saveMediaListEntry(token, { mediaId, status: "CURRENT", progress: episodeNumber });
        }
      } catch {
        // Scrobble failures are silent — never break playback over tracking.
      }
    })();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animeId, episodeNumber]);
  const { data: access } = useSuspenseQuery({
    queryKey: ["episode-access", animeId, episodeNumber, isPremium],
    queryFn: () => checkEpisodeAccess({ animeId, episodeNumber, isPremium }),
  });

  // Resolve streams from installed addons.
  useEffect(() => {
    let cancelled = false;
    resolveStreams(animeId, episodeNumber, { audioType }).then((resolved) => {
      if (cancelled) return;
      setStreams(resolved);
      setActiveStream((current) => current ?? resolved[0] ?? null);
    });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animeId, episodeNumber]);

  const refreshAddons = useCallback(() => {
    setAddons(listAddons());
  }, []);
  useEffect(() => {
    refreshAddons();
  }, [refreshAddons]);

  const accessAllowed = !access || access.allowed;
  const accessDeniedPremium =
    access && !access.allowed && access.reason === "premium_early_access";

  const currentEpIndex = episodes.findIndex((e: any) => e.id === episode.id);
  const prevEp = currentEpIndex > 0 ? episodes[currentEpIndex - 1] : null;
  const nextEp = currentEpIndex < episodes.length - 1 ? episodes[currentEpIndex + 1] : null;

  const source = activeStream?.url || "";

  const goToNextEpisode = useCallback(() => {
    if (nextEp) {
      navigate({
        to: "/watch/$animeId/$episode",
        params: { animeId, episode: String(nextEp.number) },
      });
    }
  }, [nextEp, animeId, navigate]);

  const handleToggleAddon = (addon: Addon) => {
    if (addon.installed) {
      setAddonInstalled(addon.id, false);
    } else {
      setAddonInstalled(addon.id, true);
    }
    refreshAddons();
  };

  const handleToggleEnabled = (addon: Addon) => {
    setAddonEnabled(addon.id, !addon.enabled);
    refreshAddons();
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Video Player Section */}
      <div className="relative bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="relative aspect-video bg-black overflow-hidden">
            {/* Addons button */}
            <button
              onClick={() => setAddonsOpen(true)}
              className="absolute top-4 left-4 z-40 px-3 py-1.5 rounded-md bg-black/60 backdrop-blur-md border border-white/15 text-gray-200 text-xs font-semibold hover:bg-black/80 transition-colors flex items-center gap-1.5"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Addons
            </button>

            {/* Video player (rendered only when access allowed) */}
            {accessAllowed && (
              <VideoPlayer
                source={source}
                streams={streams}
                activeStreamTitle={activeStream?.title}
                title={`${(anime as any).title} — Episode ${episode.number}`}
                poster={(anime as any).banner || (anime as any).image}
                episodeMeta={{
                  animeId,
                  number: episode.number,
                  title: episode.title,
                  thumbnail: (anime as any).image,
                }}
                nextEpisode={
                  nextEp
                    ? { animeId, number: nextEp.number, title: nextEp.title }
                    : null
                }
                onNextEpisode={goToNextEpisode}
                onSelectStream={(s) => setActiveStream(s)}
              />
            )}

            {/* Access Denied Overlay */}
            {accessDeniedPremium && (
              <div className="absolute inset-0 z-20 bg-black/80 backdrop-blur-sm flex items-center justify-center">
                <div className={`absolute inset-0 bg-gradient-to-br ${getGradientForAnime(anime as any)} opacity-20`} />
                <div className="text-center max-w-md mx-auto px-6 relative z-10">
                  <div className="w-20 h-20 rounded-full bg-yellow-500/20 border border-yellow-500/30 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m0 0v2m0-2h2m-2 0H10m9.364-7.364A9 9 0 1112 3a9 9 0 017.364 4.636z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">Premium Early Access</h2>
                  <p className="text-gray-400 mb-2">This episode is part of our latest simulcast releases.</p>
                  <p className="text-gray-500 mb-6">
                    {access.daysRemaining
                      ? `Free users get access in ${access.daysRemaining} day${access.daysRemaining > 1 ? "s" : ""}.`
                      : "Upgrade to Premium for immediate access."}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link to="/pricing" className="btn-primary !px-6 !py-3">
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Upgrade to Premium — $5.99/mo
                    </Link>
                    <Link to="/signup" className="btn-secondary !px-6 !py-3">Sign Up Free</Link>
                  </div>
                  {access.unlockDate && (
                    <p className="text-xs text-gray-600 mt-4">
                      Unlocks for free users on {new Date(access.unlockDate).toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Episode Info & Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <Link
              to="/anime/$id"
              params={{ id: animeId }}
              className="text-sm text-anime-400 hover:text-anime-300 transition-colors mb-1 inline-block"
            >
              ← Back to {(anime as any).title}
            </Link>
            <h1 className="text-xl font-bold text-white">
              Episode {episode.number}: {episode.title}
            </h1>
            <div className="flex items-center gap-3 mt-1">
              <p className="text-sm text-gray-500">{(anime as any).title}</p>
              {/* Sub/Dub toggle */}
              <div className="flex items-center gap-1 bg-surface border border-white/10 rounded-full p-0.5">
                <button
                  onClick={() => setAudioType("sub")}
                  className={`px-3 py-1 text-xs rounded-full transition-colors ${
                    audioType === "sub" ? "bg-anime-500 text-white" : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  Sub
                </button>
                <button
                  onClick={() => setAudioType("dub")}
                  className={`px-3 py-1 text-xs rounded-full transition-colors ${
                    audioType === "dub" ? "bg-anime-500 text-white" : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  Dub
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {prevEp ? (
              <Link
                to="/watch/$animeId/$episode"
                params={{ animeId, episode: String(prevEp.number) }}
                className="btn-secondary text-sm !px-4 !py-2"
              >
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" /></svg>
                Previous
              </Link>
            ) : (
              <button disabled className="btn-secondary text-sm !px-4 !py-2 opacity-30 cursor-not-allowed">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" /></svg>
                Previous
              </button>
            )}
            {nextEp ? (
              <Link
                to="/watch/$animeId/$episode"
                params={{ animeId, episode: String(nextEp.number) }}
                className="btn-primary text-sm !px-4 !py-2"
              >
                Next
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" /></svg>
              </Link>
            ) : (
              <button disabled className="btn-primary text-sm !px-4 !py-2 opacity-30 cursor-not-allowed">
                Next
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" /></svg>
              </button>
            )}
          </div>
        </div>

        {/* Episode List */}
        <div className="mt-8">
          <h2 className="text-lg font-bold text-white mb-4">Episodes</h2>
          <div className="grid gap-2 max-h-80 overflow-y-auto">
            {episodes.map((ep: any) => (
              <Link
                key={ep.id}
                to="/watch/$animeId/$episode"
                params={{ animeId, episode: String(ep.number) }}
                className={`flex items-center gap-4 p-3 rounded-lg transition-colors ${
                  ep.id === episode.id
                    ? "bg-anime-500/20 border border-anime-500/30"
                    : "bg-surface border border-white/5 hover:bg-surface-light"
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${ep.id === episode.id ? "bg-anime-500 text-white" : "bg-surface-lighter text-gray-400"}`}>
                  <span className="text-xs font-bold">{ep.number}</span>
                </div>
                <div className="flex-1 min-w-0"><p className="text-sm text-gray-300 truncate">{ep.title}</p></div>
                <span className="text-xs text-gray-500">{ep.duration}</span>
                {ep.id === episode.id && (
                  <svg className="w-4 h-4 text-anime-400" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Addons Modal */}
      {addonsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-surface-lighter border border-white/10 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-white">Addons</h2>
                <p className="text-xs text-gray-500">Bring your own stream sources (legal-only).</p>
              </div>
              <button
                onClick={() => setAddonsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4 space-y-3 max-h-[70vh] overflow-y-auto">
              {addons.map((addon) => (
                <div key={addon.id} className="flex items-start gap-3 p-3 rounded-xl bg-surface border border-white/5">
                  <span className="text-2xl shrink-0">{addon.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold text-white">{addon.name}</p>
                      {addon.type === "official" && (
                        <span className="text-[10px] font-semibold text-anime-300 bg-anime-500/15 border border-anime-500/30 rounded px-1.5 py-0.5">
                          OFFICIAL
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5">{addon.description}</p>
                  </div>
                  {addon.installed ? (
                    <div className="flex flex-col gap-1 items-end shrink-0">
                      <button
                        onClick={() => handleToggleEnabled(addon)}
                        className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
                          addon.enabled
                            ? "border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10"
                            : "border-gray-600 text-gray-500 hover:bg-gray-600/10"
                        }`}
                      >
                        {addon.enabled ? "Enabled" : "Disabled"}
                      </button>
                      <button
                        onClick={() => handleToggleAddon(addon)}
                        className="text-xs text-red-400 hover:text-red-300 px-2.5 py-1"
                      >
                        Uninstall
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleToggleAddon(addon)}
                      className="btn-primary text-xs !px-3 !py-1.5 shrink-0"
                    >
                      Install
                    </button>
                  )}
                </div>
              ))}
            </div>
            <div className="px-6 py-3 border-t border-white/10 text-[11px] text-gray-600">
              AniFlow ships legal streams only. Community addons extend the catalog; piracy addons are not built or shipped by us.
            </div>
          </div>
        </div>
      )}

      <div className="h-16" />
    </div>
  );
}
