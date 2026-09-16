/**
 * AniFlow — addon registry.
 *
 * Ships two official addons out of the box:
 *   1. "Official Trailers" — resolves YouTube trailer URLs via `src/data/trailers.ts`.
 *   2. "Muse Asia / Ani-One (Legal)" — the default legal free-stream addon.
 *
 * LEGAL-ONLY POLICY: only officially-licensed sources may be added. We do not
 * build or ship piracy addons. For the MVP the legal addon resolves the same
 * official trailer (safe everywhere) and documents where to plug in verified
 * official full-episode channel/playlist URLs as they are confirmed.
 */

import type { Addon, AddonResolver, Stream } from "./types";
import { getTrailerEmbedUrl } from "~/data/trailers";

// ── Official Trailers addon ────────────────────────────────────
const trailersResolver: AddonResolver = (animeId) => {
  const url = getTrailerEmbedUrl(animeId);
  if (!url) return [];
  const stream: Stream = {
    url: `${url}?rel=0&modestbranding=1`,
    title: "Official Trailer",
    quality: "HD",
    source: "official-trailers",
  };
  return [stream];
};

// ── Muse Asia / Ani-One (Legal) addon ──────────────────────────
//
// Transport protocol (Stremio-compatible HTTP JSON):
//   GET {baseUrl}/manifest.json         -> AddonManifest
//   GET {baseUrl}/stream/{type}/{id}.json?episode={n}
//                                       -> { streams: Stream[] }
//
// For the MVP this addon is a local module. As officially-licensed full
// episodes are verified (Muse Asia / Ani-One are Medialink channels and their
// uploads are region-locked to parts of Asia), their channel/playlist URLs can
// be dropped into the map below. Until then we return the official trailer so
// the player always has a legal, globally-available fallback — never a dead
// player or a pirated mirror.

// TODO(legal-streams): add verified official full-episode YouTube playlist URLs
// keyed by AniFlow anime slug. Every entry MUST be verified against the official
// channel (youtube.com/@MuseAsia / @AniOneAsia) before shipping.
const legalEpisodeMap: Record<string, string> = {};

const legalStreamsResolver: AddonResolver = (animeId) => {
  const streams: Stream[] = [];

  const episodeUrl = legalEpisodeMap[animeId];
  if (episodeUrl) {
    streams.push({
      url: episodeUrl,
      title: "Muse Asia / Ani-One — Full Episode",
      quality: "1080p",
      source: "legal-streams",
      note: "Official licensed stream — may be region-locked.",
    });
  }

  // Graceful fallback: official trailer, which is globally playable.
  const trailerUrl = getTrailerEmbedUrl(animeId);
  if (trailerUrl) {
    streams.push({
      url: `${trailerUrl}?rel=0&modestbranding=1`,
      title: "Official Trailer (fallback)",
      quality: "HD",
      source: "legal-streams",
    });
  }

  return streams;
};

// ── Registry ───────────────────────────────────────────────────
export const addonRegistry: Addon[] = [
  {
    id: "official-trailers",
    name: "Official Trailers",
    description: "Official anime trailers from YouTube for every title.",
    icon: "🎬",
    type: "official",
    installed: true,
    enabled: true,
    manifest: {
      id: "org.aniflow.trailers",
      name: "Official Trailers",
      description: "Official anime trailers from YouTube for every title.",
      version: "1.0.0",
      resources: ["stream"],
      types: ["anime", "movie"],
    },
  },
  {
    id: "muse-ani-one-legal",
    name: "Muse Asia / Ani-One (Legal)",
    description:
      "Official, licensed free episodes from Muse Asia and Ani-One Asia.",
    icon: "🇸🇬",
    type: "official",
    installed: true,
    enabled: true,
    manifest: {
      id: "org.aniflow.legal-streams",
      name: "Muse Asia / Ani-One (Legal)",
      description:
        "Official, licensed free episodes from Muse Asia and Ani-One Asia.",
      version: "1.0.0",
      resources: ["stream", "catalog"],
      types: ["anime"],
      catalogs: [{ id: "aniflow-legal", name: "Legal Free Streams", type: "anime" }],
    },
  },
];

/** Map of addon id -> resolver (local-module transport for the MVP). */
export const addonResolvers: Record<string, AddonResolver> = {
  "official-trailers": trailersResolver,
  "muse-ani-one-legal": legalStreamsResolver,
};

export function getAddon(id: string): Addon | undefined {
  return addonRegistry.find((a) => a.id === id);
}
