import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { getAnimeById } from "~/data/anime";
import { getGradientForAnime } from "~/data/utils";

export const Route = createFileRoute("/watch/$animeId/$episode")({
  loader: ({ params }) => {
    const anime = getAnimeById(params.animeId);
    if (!anime) throw notFound();
    const episode = anime.episodes.find(
      (e) => e.number === Number(params.episode)
    );
    if (!episode) throw notFound();
    return { anime, episode };
  },
  component: WatchPage,
});

function WatchPage() {
  const { anime, episode } = Route.useLoaderData();
  const [audioType, setAudioType] = useState<"sub" | "dub">(
    anime.type === "dub" ? "dub" : "sub"
  );

  const currentEpIndex = anime.episodes.findIndex(
    (e) => e.id === episode.id
  );
  const prevEp = currentEpIndex > 0 ? anime.episodes[currentEpIndex - 1] : null;
  const nextEp =
    currentEpIndex < anime.episodes.length - 1
      ? anime.episodes[currentEpIndex + 1]
      : null;

  return (
    <div className="bg-black min-h-screen">
      {/* Video Player Section */}
      <div className="relative bg-black">
        <div className="max-w-7xl mx-auto">
          {/* Video Player Placeholder */}
          <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-surface flex items-center justify-center">
            {/* Background gradient from anime */}
            <div className={`absolute inset-0 bg-gradient-to-br ${getGradientForAnime(anime)} opacity-30`} />

            {/* Center Play Button / Placeholder */}
            <div className="relative z-10 text-center">
              <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mx-auto mb-6 hover:bg-white/20 transition-colors cursor-pointer">
                <svg className="w-12 h-12 text-white ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-gray-400 text-sm">
                Video player placeholder — streaming will be connected later
              </p>
              <p className="text-gray-600 text-xs mt-2">
                {anime.title} — {episode.title}
              </p>
            </div>

            {/* Video overlay controls */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button className="text-white/80 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
                    </svg>
                  </button>
                  <button className="text-white/80 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                  <button className="text-white/80 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 6v12H6V6h12zM4 4v16h16V4H4z" />
                    </svg>
                  </button>
                  {/* Progress bar placeholder */}
                  <div className="w-64 h-1 bg-white/20 rounded-full">
                    <div className="w-1/3 h-full bg-anime-400 rounded-full" />
                  </div>
                  <span className="text-xs text-gray-400">
                    {episode.duration}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  {/* Sub/Dub toggle */}
                  {anime.type !== "sub" && (
                    <div className="flex bg-white/10 rounded-md p-0.5">
                      <button
                        onClick={() => setAudioType("sub")}
                        className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                          audioType === "sub"
                            ? "bg-anime-500 text-white"
                            : "text-gray-400 hover:text-white"
                        }`}
                      >
                        SUB
                      </button>
                      <button
                        onClick={() => setAudioType("dub")}
                        className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                          audioType === "dub"
                            ? "bg-anime-500 text-white"
                            : "text-gray-400 hover:text-white"
                        }`}
                      >
                        DUB
                      </button>
                    </div>
                  )}
                  <button className="text-white/80 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Episode Info & Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Info */}
          <div>
            <Link
              to="/anime/$id"
              params={{ id: anime.id }}
              className="text-sm text-anime-400 hover:text-anime-300 transition-colors mb-1 inline-block"
            >
              ← Back to {anime.title}
            </Link>
            <h1 className="text-xl font-bold text-white">
              Episode {episode.number}: {episode.title}
            </h1>
            <p className="text-sm text-gray-500">
              {anime.title} • {audioType === "sub" ? "Subbed" : "Dubbed"}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-3">
            {prevEp ? (
              <Link
                to="/watch/$animeId/$episode"
                params={{ animeId: anime.id, episode: String(prevEp.number) }}
                className="btn-secondary text-sm !px-4 !py-2"
              >
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
                Previous
              </Link>
            ) : (
              <button disabled className="btn-secondary text-sm !px-4 !py-2 opacity-30 cursor-not-allowed">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
                Previous
              </button>
            )}

            {nextEp ? (
              <Link
                to="/watch/$animeId/$episode"
                params={{ animeId: anime.id, episode: String(nextEp.number) }}
                className="btn-primary text-sm !px-4 !py-2"
              >
                Next
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
              </Link>
            ) : (
              <button disabled className="btn-primary text-sm !px-4 !py-2 opacity-30 cursor-not-allowed">
                Next
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Episode List */}
        <div className="mt-8">
          <h2 className="text-lg font-bold text-white mb-4">Episodes</h2>
          <div className="grid gap-2 max-h-80 overflow-y-auto">
            {anime.episodes.map((ep) => (
              <Link
                key={ep.id}
                to="/watch/$animeId/$episode"
                params={{ animeId: anime.id, episode: String(ep.number) }}
                className={`flex items-center gap-4 p-3 rounded-lg transition-colors ${
                  ep.id === episode.id
                    ? "bg-anime-500/20 border border-anime-500/30"
                    : "bg-surface border border-white/5 hover:bg-surface-light"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    ep.id === episode.id
                      ? "bg-anime-500 text-white"
                      : "bg-surface-lighter text-gray-400"
                  }`}
                >
                  <span className="text-xs font-bold">{ep.number}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-300 truncate">{ep.title}</p>
                </div>
                <span className="text-xs text-gray-500">{ep.duration}</span>
                {ep.id === episode.id && (
                  <svg className="w-4 h-4 text-anime-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
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