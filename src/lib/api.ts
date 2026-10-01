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

// --- AniList OAuth token exchange (server-side only) ---
// The AniList client secret lives in the server environment and must never
// ship to the browser. This server function exchanges an authorization code
// for an access token using that secret.

export const exchangeAnilistCode = createServerFn({ method: "POST" })
  .validator((data: { code: string }) => data)
  .handler(async ({ data }) => {
    const clientId = process.env.ANILIST_CLIENT_ID;
    const clientSecret = process.env.ANILIST_CLIENT_SECRET;
    const redirectUri =
      process.env.ANILIST_REDIRECT_URI ||
      "https://1c82ccfad8a7cab709fa37ade0f5d2f5.ctonew.app/auth/anilist/callback";

    if (!clientId || !clientSecret) {
      return { success: false as const, error: "AniList is not configured" };
    }

    try {
      const res = await fetch("https://anilist.co/api/v2/oauth/token", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          grant_type: "authorization_code",
          client_id: clientId,
          client_secret: clientSecret,
          redirect_uri: redirectUri,
          code: data.code,
        }),
      });

      if (!res.ok) {
        return { success: false as const, error: `Token exchange failed (${res.status})` };
      }

      const json = (await res.json()) as {
        access_token?: string;
        token_type?: string;
        expires_in?: number;
      };

      if (!json.access_token) {
        return { success: false as const, error: "No access token returned" };
      }

      return {
        success: true as const,
        accessToken: json.access_token,
        tokenType: json.token_type ?? "Bearer",
        expiresIn: json.expires_in ?? null,
      };
    } catch (e) {
      return { success: false as const, error: e instanceof Error ? e.message : "Unknown error" };
    }
  });