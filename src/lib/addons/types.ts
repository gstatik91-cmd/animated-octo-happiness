/**
 * AniFlow — Stremio-style addon type definitions.
 *
 * The shape mirrors Stremio's addon manifest so that real community addons
 * can be dropped in later without changing the app. For the MVP we resolve
 * addons client-side as TypeScript modules, but the manifest schema is kept
 * HTTP-JSON compatible (a remote addon exposes the same manifest at
 * `{baseUrl}/manifest.json`).
 */

/** A single playable stream source for a given anime + episode. */
export interface Stream {
  /** Direct media URL (YouTube, HLS, mp4, ...) the player can consume. */
  url: string;
  /** Human-readable label, e.g. "Muse Asia — 1080p" or "Official Trailer". */
  title: string;
  /** Optional quality hint, e.g. "1080p", "720p", "auto". */
  quality?: string;
  /** Which addon produced this stream. */
  source: string;
  /** Optional note surfaced in the UI, e.g. region-lock warnings. */
  note?: string;
}

/** Resources an addon can provide (Stremio-compatible). */
export type AddonResource = "stream" | "catalog" | "meta";

/** Media types an addon supports. */
export type AddonMediaType = "anime" | "movie";

/** The manifest every addon exposes (Stremio-compatible shape). */
export interface AddonManifest {
  id: string;
  name: string;
  description: string;
  version: string;
  /** Icon / logo URL. */
  logo?: string;
  resources: AddonResource[];
  types: AddonMediaType[];
  /** Optional catalog definitions for catalog-providing addons. */
  catalogs?: { id: string; name: string; type: AddonMediaType }[];
}

/** An installed addon as tracked by the client-side manager. */
export interface Addon {
  id: string;
  name: string;
  description: string;
  icon?: string;
  /** Local module id or remote `{baseUrl}` the manager can resolve. */
  transportUrl?: string;
  /** 'official' addons ship with AniFlow; 'community' ones are user-installed. */
  type: "official" | "community";
  installed: boolean;
  enabled: boolean;
  manifest?: AddonManifest;
}

/** Signature every addon resolver function implements. */
export type AddonResolver = (
  animeId: string,
  episodeNumber: number,
  meta?: { audioType?: "sub" | "dub" }
) => Promise<Stream[]> | Stream[];
