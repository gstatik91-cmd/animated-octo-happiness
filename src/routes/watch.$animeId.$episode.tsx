import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getAnime, checkEpisodeAccess } from "~/lib/api";
import { getGradientForAnime } from "~/data/utils";
import { getTrailerEmbedUrl } from "~/data/trailers";

export const Route = createFileRoute("/watch/$animeId/$episode")({
  loader: ({ params }) => ({ animeId: params.animeId, episodeNumber: Number(params.episode) }),
  component: WatchPage,
});

function WatchPage() {
  const { animeId, episodeNumber } = Route.useLoaderData();

  const { data: anime } = useSuspenseQuery({
    queryKey: ["anime", animeId],
    queryFn: () => getAnime(animeId),
  });

  if (!anime) throw notFound();

  const episodes = (anime as any).episodes || [];
  const episode = episodes.find((e: any) => e.number === episodeNumber);
  if (!episode) throw notFound();

  const [audioType, setAudioType] = useState<"sub" | "dub">(
    anime.type === "dub" ? "dub" : "sub"
  );

  const [session, setSession] = useState<{ email: string; name: string; id: string; isPremium: boolean } | null>(null);
  useEffect(() => {
    const stored = localStorage.getItem("aniFlow_session");
    if (stored) {
      try {
        setSession(JSON.parse(stored));
      } catch {}
    }
  }, []);

  const isPremium = session?.isPremium ?? false;

  const { data: access } = useSuspenseQuery({
    queryKey: ["episode-access", animeId, episodeNumber, isPremium],
    queryFn: () => checkEpisodeAccess({ animeId, episodeNumber, isPremium }),
  });

  const trailerUrl = getTrailerEmbedUrl(animeId);
  const accessAllowed = !access || access.allowed;
  const accessDeniedPremium = access && !access.allowed && access.reason === "premium_early_access";

  const currentEpIndex = episodes.findIndex((e: any) => e.id === episode.id);
  const prevEp = currentEpIndex > 0 ? episodes[currentEpIndex - 1] : null;
  const nextEp = currentEpIndex < episodes.length - 1 ? episodes[currentEpIndex + 1] : null;

  return (
    <div className="bg-black min-h-screen">
      {/* Video Player Section */}
      <div className="relative bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
            {/* YouTube Trailer Embed */}
            {trailerUrl && accessAllowed && (
              <iframe
                src={`${trailerUrl}?autoplay=0&rel=0&modestbranding=1&showinfo=0`}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`${anime.title} - Trailer`}
              />
            )}

            {/* Fallback Placeholder */}
            {!trailerUrl && accessAllowed && (
              <>
                <div className={`absolute inset-0 bg-gradient-to-br ${getGradientForAnime(anime)} opacity-30`} />
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mx-auto mb-6 hover:bg-white/20 transition-colors cursor-pointer">
                    <svg className="w-12 h-12 text-white ml-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-gray-400 text-sm">Video player placeholder — streaming will be connected later</p>
                  <p className="text-gray-600 text-xs mt-2">{anime.title} — {episode.title}</p>
                </div>
              </>
            )}

            {/* Subtle gradient overlay for trailer */}
            {trailerUrl && accessAllowed && (
              <div className={`absolute inset-0 bg-gradient-to-br ${getGradientForAnime(anime)} opacity-10 pointer-events-none`} />
            )}

            {/* Access Denied Overlay */}
            {accessDeniedPremium && (
              <div className="absolute inset-0 z-20 bg-black/80 backdrop-blur-sm flex items-center justify-center">
                <div className={`absolute inset-0 bg-gradient-to-br ${getGradientForAnime(anime)} opacity-20`} />
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
                      ? `Free users get access in ${access.daysRemaining} day${access.daysRemaining > 1 ? 's' : ''}.`
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
                        weekday: "long", month: "long", day: "numeric"
                      })}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Video overlay controls */}
            {!accessDeniedPremium && (
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent z-10">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="w-2 h-2 rounded-full bg-gray-600" />
                    <div className="w-2 h-2 rounded-full bg-gray-600" />
                  </div>
                  <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
                    <div className="w-1/3 h-full bg-anime-500 rounded-full" />
                  </div>
                  <span className="text-xs text-gray-500">0:00 / {episode.duration}</span>
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
            <Link to="/anime/$id" params={{ id: anime.id }} className="text-sm text-anime-400 hover:text-anime-300 transition-colors mb-1 inline-block">
              ← Back to {anime.title}
            </Link>
            <h1 className="text-xl font-bold text-white">Episode {episode.number}: {episode.title}</h1>
            <p className="text-sm text-gray-500">{anime.title} • {audioType === "sub" ? "Subbed" : "Dubbed"}</p>
          </div>
          <div className="flex items-center gap-3">
            {prevEp ? (
              <Link to="/watch/$animeId/$episode" params={{ animeId: anime.id, episode: String(prevEp.number) }} className="btn-secondary text-sm !px-4 !py-2">
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
              <Link to="/watch/$animeId/$episode" params={{ animeId: anime.id, episode: String(nextEp.number) }} className="btn-primary text-sm !px-4 !py-2">
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
                params={{ animeId: anime.id, episode: String(ep.number) }}
                className={`flex items-center gap-4 p-3 rounded-lg transition-colors ${
                  ep.id === episode.id ? "bg-anime-500/20 border border-anime-500/30" : "bg-surface border border-white/5 hover:bg-surface-light"
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
      <div className="h-16" />
    </div>
  );
}
