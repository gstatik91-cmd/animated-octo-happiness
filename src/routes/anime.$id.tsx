import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { getAnimeById } from "~/data/anime";
import { getGradientForAnime, getStatusColor, getStatusLabel } from "~/data/utils";

export const Route = createFileRoute("/anime/$id")({
  loader: ({ params }) => {
    const anime = getAnimeById(params.id);
    if (!anime) throw notFound();
    return anime;
  },
  component: AnimeDetail,
});

function AnimeDetail() {
  const anime = Route.useLoaderData();
  const [audioType, setAudioType] = useState<"sub" | "dub">(
    anime.type === "dub" ? "dub" : "sub"
  );

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={anime.banner} alt="" className="w-full h-full object-cover opacity-30" />
          <div className={`absolute inset-0 bg-gradient-to-b ${getGradientForAnime(anime)} opacity-60`} />
          <div className="absolute inset-0 bg-gradient-to-t from-anime-dark via-anime-dark/60 to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="flex flex-col md:flex-row gap-8 items-end">
            <div className="w-48 shrink-0 hidden md:block">
              <div className="aspect-[2/3] rounded-xl overflow-hidden shadow-2xl border border-white/10">
                {anime.image ? (
                  <img src={anime.image} alt={anime.title} className="w-full h-full object-cover" />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${getGradientForAnime(anime)} flex items-center justify-center p-4`}>
                    <span className="text-center text-white/80 font-bold">{anime.title}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className={`px-3 py-0.5 rounded-full text-xs font-semibold text-white ${getStatusColor(anime.status)}`}>
                  {getStatusLabel(anime.status)}
                </span>
                <span className="text-sm text-gray-400">{anime.year}</span>
                <span className="text-sm text-gray-400">•</span>
                <span className="text-sm text-gray-400">{anime.studio}</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2">{anime.title}</h1>
              {anime.titleJapanese && <p className="text-lg text-gray-500 mb-4">{anime.titleJapanese}</p>}
              <div className="flex flex-wrap gap-2 mb-4">
                {anime.genre.map((g) => (
                  <Link key={g} to="/browse" className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 hover:bg-anime-500/20 hover:border-anime-500/30 transition-colors">{g}</Link>
                ))}
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1.5">
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-lg font-bold text-white">{anime.rating}</span>
                  <span className="text-sm text-gray-500">/ 10</span>
                </div>
                <span className="text-gray-600">|</span>
                <span className="text-sm text-gray-400">{anime.totalEpisodes} {anime.totalEpisodes > 1 ? "Episodes" : "Film"}</span>
                <span className="text-gray-600">|</span>
                <span className="text-sm text-gray-400">{anime.duration}</span>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                {anime.type !== "sub" && (
                  <div className="flex bg-surface rounded-lg p-0.5 border border-white/5">
                    <button onClick={() => setAudioType("sub")} className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${audioType === "sub" ? "bg-anime-500 text-white" : "text-gray-400 hover:text-white"}`}>Sub</button>
                    <button onClick={() => setAudioType("dub")} className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${audioType === "dub" ? "bg-anime-500 text-white" : "text-gray-400 hover:text-white"}`}>Dub</button>
                  </div>
                )}
                <Link to="/watch/$animeId/$episode" params={{ animeId: anime.id, episode: "1" }} className="btn-primary">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  {anime.status === "airing" ? "Watch Latest" : "Start Watching"}
                </Link>
                <button className="btn-secondary">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                  Add to Watchlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold text-white mb-4">Synopsis</h2>
            <p className="text-gray-400 leading-relaxed">{anime.synopsis}</p>
          </div>
          <div className="glass-card p-6 h-fit">
            <h3 className="text-sm font-semibold text-gray-300 mb-4">Information</h3>
            <div className="space-y-3">
              {[
                ["Studio", anime.studio],
                ["Year", String(anime.year)],
                ["Status", getStatusLabel(anime.status)],
                ["Episodes", String(anime.totalEpisodes)],
                ["Duration", anime.duration],
                ["Audio", anime.type === "both" ? "Sub & Dub" : anime.type],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between">
                  <span className="text-sm text-gray-500">{label}</span>
                  <span className="text-sm text-gray-300">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-bold text-white mb-6">Episodes</h2>
          <div className="space-y-2">
            {anime.episodes.map((ep) => (
              <Link key={ep.id} to="/watch/$animeId/$episode" params={{ animeId: anime.id, episode: String(ep.number) }}
                className="flex items-center gap-4 p-4 rounded-lg bg-surface border border-white/5 hover:bg-surface-light transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-surface-lighter flex items-center justify-center shrink-0 group-hover:bg-anime-500/20 transition-colors">
                  <span className="text-sm font-bold text-gray-400 group-hover:text-anime-300">{ep.number}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors truncate">{ep.title}</h4>
                  <span className="text-xs text-gray-600">{ep.duration}</span>
                </div>
                <svg className="w-5 h-5 text-gray-600 group-hover:text-anime-400 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <div className="h-16" />
    </div>
  );
}