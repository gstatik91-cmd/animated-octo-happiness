import { createServerFn } from "@tanstack/react-start";
import {
  getAnimeList,
  getAnimeWithEpisodes,
  getEpisode,
  getFeaturedAnime,
  getTrendingAnime,
  getRecentlyAdded,
  getWatchlist,
  addToWatchlist,
  removeFromWatchlist,
} from "~/db";
import { signUp, logIn, getMe } from "~/lib/auth";

// --- Anime API ---

export const listAnime = createServerFn({ method: "GET" })
  .validator((data: {
    search?: string;
    genre?: string;
    status?: string;
    type?: string;
    sortBy?: string;
  }) => data)
  .handler(async ({ data }) => {
    return getAnimeList(data);
  });

export const getAnime = createServerFn({ method: "GET" })
  .validator((id: string) => id)
  .handler(async ({ data: id }) => {
    return getAnimeWithEpisodes(id);
  });

export const getEpisodeData = createServerFn({ method: "GET" })
  .validator((data: { animeId: string; episodeNumber: number }) => data)
  .handler(async ({ data }) => {
    const anime = await getAnimeWithEpisodes(data.animeId);
    if (!anime) return null;
    const episode = await getEpisode(data.animeId, data.episodeNumber);
    if (!episode) return null;
    return { anime, episode };
  });

export const featuredAnime = createServerFn({ method: "GET" })
  .handler(async () => {
    return getFeaturedAnime();
  });

export const trendingAnime = createServerFn({ method: "GET" })
  .handler(async () => {
    return getTrendingAnime();
  });

export const recentlyAddedAnime = createServerFn({ method: "GET" })
  .handler(async () => {
    return getRecentlyAdded();
  });

export const getAllAnime = createServerFn({ method: "GET" })
  .handler(async () => {
    return getAnimeList();
  });

// --- Auth API ---

export const apiSignUp = createServerFn({ method: "POST" })
  .validator((data: { name: string; email: string; password: string }) => data)
  .handler(async ({ data }) => {
    return signUp(data.name, data.email, data.password);
  });

export const apiLogIn = createServerFn({ method: "POST" })
  .validator((data: { email: string; password: string }) => data)
  .handler(async ({ data }) => {
    return logIn(data.email, data.password);
  });

export const apiGetMe = createServerFn({ method: "GET" })
  .validator((token: string) => token)
  .handler(async ({ data: token }) => {
    return getMe(token);
  });

// --- Watchlist API ---

export const fetchWatchlist = createServerFn({ method: "GET" })
  .validator((userId: string) => userId)
  .handler(async ({ data: userId }) => {
    return getWatchlist(userId);
  });

export const addWatchlistItem = createServerFn({ method: "POST" })
  .validator((data: { userId: string; animeId: string }) => data)
  .handler(async ({ data }) => {
    return addToWatchlist(data.userId, data.animeId);
  });

export const removeWatchlistItem = createServerFn({ method: "POST" })
  .validator((watchlistId: string) => watchlistId)
  .handler(async ({ data: watchlistId }) => {
    await removeFromWatchlist(watchlistId);
    return { success: true };
  });

// --- Simulcast check (1-week delay for free users) ---

export const checkEpisodeAccess = createServerFn({ method: "GET" })
  .validator((data: { animeId: string; episodeNumber: number; isPremium: boolean }) => data)
  .handler(async ({ data }) => {
    if (data.isPremium) {
      return { allowed: true, reason: null };
    }

    const episode = await getEpisode(data.animeId, data.episodeNumber);
    if (!episode) {
      return { allowed: false, reason: "Episode not found" };
    }

    const releaseDate = new Date(episode.release_date);
    const now = new Date();
    const diffDays = Math.floor((now.getTime() - releaseDate.getTime()) / (1000 * 60 * 60 * 24));

    if (diffDays < 7) {
      const daysRemaining = 7 - diffDays;
      return {
        allowed: false,
        reason: "premium_early_access",
        daysRemaining,
        unlockDate: new Date(releaseDate.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString(),
      };
    }

    return { allowed: true, reason: null };
  });