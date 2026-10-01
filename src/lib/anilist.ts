/**
 * AniList integration — client-side GraphQL helpers + OAuth URL builder.
 *
 * IMPORTANT: this module runs in the BROWSER. It must never contain the
 * AniList client secret. The OAuth token exchange (code -> access_token)
 * happens SERVER-side via `exchangeAnilistCode` in `src/lib/api.ts`, which
 * reads ANILIST_CLIENT_SECRET from the server environment.
 *
 * Public, safe-in-browser values:
 *   - ANILIST_CLIENT_ID      (public OAuth client id)
 *   - ANILIST_REDIRECT_URI   (public callback URL)
 */

export const ANILIST_GRAPHQL = "https://graphql.anilist.co";
export const ANILIST_AUTHORIZE = "https://anilist.co/api/v2/oauth/authorize";
export const ANILIST_TOKEN_URL = "https://anilist.co/api/v2/oauth/token";

export interface AniListUser {
  id: number;
  name: string;
  avatar?: string;
}

export interface AniListMedia {
  id: number;
  title: { romaji?: string; english?: string };
  coverImage?: { large?: string };
}

function clientId(): string {
  return process.env.ANILIST_CLIENT_ID || "";
}

function redirectUri(): string {
  return (
    process.env.ANILIST_REDIRECT_URI ||
    "https://1c82ccfad8a7cab709fa37ade0f5d2f5.ctonew.app/auth/anilist/callback"
  );
}

/** True when the required client config is present. */
export function isAniListConfigured(): boolean {
  return clientId().length > 0;
}

/** Build the OAuth authorize URL the user is redirected to. */
export function buildAniListAuthorizeUrl(): string {
  const params = new URLSearchParams({
    client_id: clientId(),
    response_type: "code",
    redirect_uri: redirectUri(),
  });
  return `${ANILIST_AUTHORIZE}?${params.toString()}`;
}

async function graphql<T>(
  query: string,
  variables: Record<string, unknown>,
  token?: string
): Promise<T> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  if (token) headers.Authorization = `Bearer ${token}`;
  const res = await fetch(ANILIST_GRAPHQL, {
    method: "POST",
    headers,
    body: JSON.stringify({ query, variables }),
  });
  if (!res.ok) {
    throw new Error(`AniList API error ${res.status}`);
  }
  const json = (await res.json()) as { data: T; errors?: unknown };
  if (json.errors) {
    throw new Error("AniList API returned errors");
  }
  return json.data;
}

/** Fetch the authenticated user (used to confirm a token works). */
export async function getViewer(token: string): Promise<AniListUser> {
  const data = await graphql<{ Viewer: { id: number; name: string; avatar: { large: string } } }>(
    `query { Viewer { id name avatar { large } } }`,
    {},
    token
  );
  return { id: data.Viewer.id, name: data.Viewer.name, avatar: data.Viewer.avatar.large };
}

/** Search for an anime by title (returns the best match). */
export async function searchMedia(title: string): Promise<AniListMedia | null> {
  const data = await graphql<{ Media: AniListMedia | null }>(
    `query ($t: String) { Media(search: $t, type: ANIME) { id title { romaji english } coverImage { large } } }`,
    { t: title }
  );
  return data.Media;
}

/** Update (or create) the user's list entry with watch progress. */
export async function saveMediaListEntry(
  token: string,
  args: { mediaId: number; status: string; progress: number }
): Promise<{ id: number; progress: number; status: string }> {
  const data = await graphql<{
    SaveMediaListEntry: { id: number; progress: number; status: string };
  }>(
    `mutation ($mediaId: Int, $status: MediaListStatus, $progress: Int) {
      SaveMediaListEntry(mediaId: $mediaId, status: $status, progress: $progress) {
        id progress status
      }
    }`,
    { mediaId: args.mediaId, status: args.status, progress: args.progress },
    token
  );
  return data.SaveMediaListEntry;
}
