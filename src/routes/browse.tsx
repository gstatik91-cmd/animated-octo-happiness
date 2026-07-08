import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { animeList, genres } from "~/data/anime";
import { AnimeCard } from "~/components/AnimeCard";
import type { Anime } from "~/data/anime";

export const Route = createFileRoute("/browse")({
  component: Browse,
});

function Browse() {
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [selectedStatus, setSelectedStatus] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("rating");

  const filtered = animeList
    .filter((a) => {
      if (search && !a.title.toLowerCase().includes(search.toLowerCase())) return false;
      if (selectedGenre && !a.genre.includes(selectedGenre)) return false;
      if (selectedStatus && a.status !== selectedStatus) return false;
      if (selectedType && a.type !== selectedType && !(selectedType === "both" && a.type === "both")) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "year") return b.year - a.year;
      if (sortBy === "title") return a.title.localeCompare(b.title);
      return 0;
    });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          Browse <span className="text-gradient">Anime</span>
        </h1>
        <p className="text-gray-400">Discover your next favorite series</p>
      </div>

      {/* Search & Filters */}
      <div className="glass-card p-4 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search anime..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-surface rounded-lg border border-white/5 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-anime-400 transition-colors"
            />
          </div>

          {/* Genre Filter */}
          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            className="px-4 py-2.5 bg-surface rounded-lg border border-white/5 text-gray-200 focus:outline-none focus:border-anime-400 transition-colors"
          >
            <option value="">All Genres</option>
            {genres.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>

          {/* Status Filter */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-4 py-2.5 bg-surface rounded-lg border border-white/5 text-gray-200 focus:outline-none focus:border-anime-400 transition-colors"
          >
            <option value="">All Status</option>
            <option value="airing">Airing</option>
            <option value="complete">Completed</option>
            <option value="upcoming">Upcoming</option>
          </select>

          {/* Type Filter */}
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-4 py-2.5 bg-surface rounded-lg border border-white/5 text-gray-200 focus:outline-none focus:border-anime-400 transition-colors"
          >
            <option value="">Sub & Dub</option>
            <option value="sub">Subbed</option>
            <option value="dub">Dubbed</option>
          </select>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2.5 bg-surface rounded-lg border border-white/5 text-gray-200 focus:outline-none focus:border-anime-400 transition-colors"
          >
            <option value="rating">Highest Rated</option>
            <option value="year">Newest</option>
            <option value="title">Alphabetical</option>
          </select>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <span className="text-sm text-gray-500">
          Showing {filtered.length} of {animeList.length} titles
        </span>
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="anime-grid">
          {filtered.map((anime, i) => (
            <AnimeCard key={anime.id} anime={anime} index={i} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <h3 className="text-xl font-semibold text-gray-400 mb-2">No results found</h3>
          <p className="text-gray-600">Try adjusting your search or filters</p>
        </div>
      )}

      <div className="h-16" />
    </div>
  );
}