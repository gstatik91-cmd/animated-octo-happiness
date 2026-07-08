import { Link } from "@tanstack/react-router";
import type { Anime } from "~/data/anime";
import { getAnimeImagePath, getGradientForAnime, getStatusColor, getStatusLabel } from "~/data/utils";

export function AnimeCard({ anime, index = 0 }: { anime: Anime; index?: number }) {
  return (
    <Link
      to="/anime/$id"
      params={{ id: anime.id }}
      className="group card-hover"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="relative aspect-[2/3] rounded-xl overflow-hidden bg-surface-light">
        {/* Poster Image or Gradient Fallback */}
        {anime.image ? (
          <img
            src={anime.image}
            alt={anime.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${getGradientForAnime(anime)} flex items-center justify-center p-4`}>
            <span className="text-center text-white/80 font-bold text-sm leading-tight">
              {anime.title.split(":")[0]}
            </span>
          </div>
        )}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
            <span className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </div>
        </div>

        {/* Status Badge */}
        <div className="absolute top-2 left-2 flex gap-1">
          <span className={`px-2 py-0.5 rounded text-[10px] font-semibold text-white ${getStatusColor(anime.status)}`}>
            {getStatusLabel(anime.status)}
          </span>
        </div>

        {/* Rating Badge */}
        <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm px-1.5 py-0.5 rounded flex items-center gap-1">
          <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-[10px] font-bold text-white">{anime.rating}</span>
        </div>

        {/* Episode Count */}
        <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-sm px-1.5 py-0.5 rounded">
          <span className="text-[10px] text-gray-300">
            {anime.totalEpisodes > 1 ? `${anime.totalEpisodes} eps` : "Film"}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="mt-2 space-y-0.5">
        <h3 className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors line-clamp-1">
          {anime.title}
        </h3>
        <div className="flex items-center gap-2 text-[11px] text-gray-500">
          <span>{anime.year}</span>
          <span>•</span>
          <span className="capitalize">{anime.type}</span>
          <span>•</span>
          <span className="truncate">{anime.genre[0]}</span>
        </div>
      </div>
    </Link>
  );
}