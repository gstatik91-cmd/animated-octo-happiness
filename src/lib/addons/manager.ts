/**
 * AniFlow — addon manager (client-side).
 *
 * Installs/uninstalls/enables addons, persists state to localStorage under
 * `aniflow_addons`, and resolves the merged stream list for a given anime +
 * episode across all installed addons.
 *
 * Resolution order: official trailers first, then legal streams, then any
 * community addons the user has installed. Every resolver is wrapped so a
 * failure in one addon never breaks the whole stream list.
 */

import { addonRegistry, addonResolvers } from "./registry";
import type { Addon, Stream } from "./types";

const STORAGE_KEY = "aniflow_addons";

interface StoredState {
  [addonId: string]: { installed: boolean; enabled: boolean };
}

function readState(): StoredState {
  if (typeof localStorage === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as StoredState) : {};
  } catch {
    return {};
  }
}

function writeState(state: StoredState) {
  if (typeof localStorage === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* storage may be unavailable (private mode) — degrade silently */
  }
}

/** All available addons with persisted install/enable state applied. */
export function listAddons(): Addon[] {
  const state = readState();
  return addonRegistry.map((addon) => {
    const stored = state[addon.id];
    return {
      ...addon,
      installed: stored ? stored.installed : addon.installed,
      enabled: stored ? stored.enabled : addon.enabled,
    };
  });
}

/** Set an addon's installed flag (true = install, false = uninstall). */
export function setAddonInstalled(addonId: string, installed: boolean) {
  const state = readState();
  const current = state[addonId] ?? {
    installed: addonRegistry.find((a) => a.id === addonId)?.installed ?? false,
    enabled: true,
  };
  state[addonId] = { installed, enabled: installed ? current.enabled : false };
  writeState(state);
}

/** Toggle an addon's enabled flag. */
export function setAddonEnabled(addonId: string, enabled: boolean) {
  const state = readState();
  const current = state[addonId] ?? {
    installed: addonRegistry.find((a) => a.id === addonId)?.installed ?? false,
    enabled: true,
  };
  state[addonId] = { installed: current.installed, enabled };
  writeState(state);
}

/**
 * Resolve the merged, ordered list of streams for an anime + episode across
 * all installed-and-enabled addons.
 */
export async function resolveStreams(
  animeId: string,
  episodeNumber: number,
  meta?: { audioType?: "sub" | "dub" }
): Promise<Stream[]> {
  const addons = listAddons().filter((a) => a.installed && a.enabled);
  const streams: Stream[] = [];

  for (const addon of addons) {
    const resolver = addonResolvers[addon.id];
    if (!resolver) continue;
    try {
      const resolved = await resolver(animeId, episodeNumber, meta);
      streams.push(...resolved);
    } catch (err) {
      // A broken addon must never take down the player.
      console.warn(`[addons] resolver failed for ${addon.id}:`, err);
    }
  }

  return streams;
}

/** Read a saved resume position from localStorage, if any. */
export interface ResumePoint {
  animeId: string;
  episode: number;
  currentTime: number;
}

const RESUME_KEY = "aniflow_resume";

export function getResume(animeId: string, episodeNumber: number): number | null {
  if (typeof localStorage === "undefined") return null;
  try {
    const raw = localStorage.getItem(RESUME_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ResumePoint;
    if (parsed.animeId === animeId && parsed.episode === episodeNumber) {
      return parsed.currentTime || 0;
    }
    return null;
  } catch {
    return null;
  }
}

export function saveResume(animeId: string, episodeNumber: number, currentTime: number) {
  if (typeof localStorage === "undefined") return;
  try {
    localStorage.setItem(
      RESUME_KEY,
      JSON.stringify({ animeId, episode: episodeNumber, currentTime } satisfies ResumePoint)
    );
  } catch {
    /* ignore */
  }
}

export function clearResume() {
  if (typeof localStorage === "undefined") return;
  try {
    localStorage.removeItem(RESUME_KEY);
  } catch {
    /* ignore */
  }
}
