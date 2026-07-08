import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { animeList } from "~/data/anime";
import type { Anime } from "~/data/anime";
import { AnimeCard } from "~/components/AnimeCard";

export const Route = createFileRoute("/watchlist")({
  component: Watchlist,
});

function Watchlist() {
  // In a real app, this would come from a database. For MVP, we use localStorage.
  const [watchlist, setWatchlist] = useState<string[]>([]);
  const [items, setItems] = useState<Anime[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("aniFlow_watchlist");
    if (saved) {
      try {
        const ids = JSON.parse(saved) as string[];
        setWatchlist(ids);
        setItems(animeList.filter((a) => ids.includes(a.id)));
      } catch {
        setWatchlist([]);
        setItems([]);
      }
    }
  }, []);

  const removeFromWatchlist = (id: string) => {
    const updated = watchlist.filter((w) => w !== id);
    setWatchlist(updated);
    setItems(items.filter((a) => a.id !== id));
    localStorage.setItem("aniFlow_watchlist", JSON.stringify(updated));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          My <span className="text-gradient">Watchlist</span>
        </h1>
        <p className="text-gray-400">
          {items.length > 0
            ? `You have ${items.length} anime in your watchlist`
            : "Your watchlist is empty"}
        </p>
      </div>

      {items.length > 0 ? (
        <div className="space-y-3">
          {items.map((anime) => (
            <div
              key={anime.id}
              className="glass-card p-4 flex items-center gap-4 group"
            >
              {/* Poster */}
              <Link
                to="/anime/$id"
                params={{ id: anime.id }}
                className="w-16 h-22 shrink-0"
              >
                <div className="aspect-[2/3] rounded-lg overflow-hidden bg-surface-light">
                  {anime.image ? (
                    <img
                      src={anime.image}
                      alt={anime.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-purple-900 to-indigo-900 flex items-center justify-center p-1">
                      <span className="text-[8px] text-white/80 text-center leading-tight">
                        {anime.title}
                      </span>
                    </div>
                  )}
                </div>
              </Link>

              {/* Info */}
              <Link
                to="/anime/$id"
                params={{ id: anime.id }}
                className="flex-1 min-w-0"
              >
                <h3 className="font-semibold text-white group-hover:text-anime-300 transition-colors">
                  {anime.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                  <span>{anime.rating}</span>
                  <span>•</span>
                  <span>{anime.genre[0]}</span>
                  <span>•</span>
                  <span className="capitalize">{anime.type}</span>
                </div>
              </Link>

              {/* Actions */}
              <div className="flex items-center gap-2 shrink-0">
                <Link
                  to="/watch/$animeId/$episode"
                  params={{ animeId: anime.id, episode: "1" }}
                  className="btn-primary text-sm !px-4 !py-2"
                >
                  Watch
                </Link>
                <button
                  onClick={() => removeFromWatchlist(anime.id)}
                  className="p-2 rounded-lg text-gray-500 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                  title="Remove from watchlist"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <svg className="w-20 h-20 text-gray-700 mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <h3 className="text-2xl font-bold text-gray-400 mb-2">Your watchlist is empty</h3>
          <p className="text-gray-600 mb-6">Save anime to your watchlist to keep track of what you want to watch</p>
          <Link to="/browse" className="btn-primary">
            Browse Anime
          </Link>
        </div>
      )}
    </div>
  );
}