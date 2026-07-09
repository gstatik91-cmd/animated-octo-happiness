import { neon } from "@neondatabase/serverless";

let _sql: ReturnType<typeof neon> | null = null;

export function getDb() {
  if (!_sql) {
    const url = process.env.DATABASE_URL;
    if (!url) {
      throw new Error("DATABASE_URL environment variable is not set");
    }
    _sql = neon(url);
  }
  return _sql;
}

/**
 * Execute a raw SQL query with optional params.
 * Returns rows as an array of plain objects.
 */
export async function query<T = Record<string, unknown>>(
  strings: TemplateStringsArray | string,
  ...params: unknown[]
): Promise<T[]> {
  const sql = getDb();
  if (typeof strings === "string") {
    return sql(strings, ...params) as Promise<T[]>;
  }
  // Template literal tag form
  const combined = strings.reduce((acc, str, i) => {
    return acc + str + (i < params.length ? `$${i + 1}` : "");
  }, "");
  return sql(combined, ...params) as Promise<T[]>;
}

// Convenience helpers

export async function getAnimeList(filters?: {
  search?: string;
  genre?: string;
  status?: string;
  type?: string;
  sortBy?: string;
}) {
  let sqlStr = `SELECT * FROM anime WHERE 1=1`;
  const params: unknown[] = [];
  let paramIdx = 0;

  if (filters?.search) {
    paramIdx++;
    sqlStr += ` AND LOWER(title) LIKE $${paramIdx}`;
    params.push(`%${filters.search.toLowerCase()}%`);
  }
  if (filters?.genre) {
    paramIdx++;
    sqlStr += ` AND $${paramIdx} = ANY(genre)`;
    params.push(filters.genre);
  }
  if (filters?.status) {
    paramIdx++;
    sqlStr += ` AND status = $${paramIdx}`;
    params.push(filters.status);
  }
  if (filters?.type) {
    paramIdx++;
    sqlStr += ` AND (type = $${paramIdx} OR type = 'both')`;
    params.push(filters.type);
  }

  // Sort
  const sort = filters?.sortBy || "rating";
  if (sort === "rating") sqlStr += " ORDER BY rating DESC";
  else if (sort === "year") sqlStr += " ORDER BY year DESC";
  else if (sort === "title") sqlStr += " ORDER BY title ASC";
  else sqlStr += " ORDER BY rating DESC";

  return query<AnimeRow>(sqlStr, ...params);
}

export async function getAnimeById(id: string) {
  const rows = await query<AnimeRow>(
    `SELECT * FROM anime WHERE id = $1`,
    id
  );
  return rows[0] || null;
}

export async function getAnimeWithEpisodes(animeId: string) {
  const anime = await getAnimeById(animeId);
  if (!anime) return null;
  const episodes = await query<EpisodeRow>(
    `SELECT * FROM episodes WHERE anime_id = $1 ORDER BY number ASC`,
    animeId
  );
  return { ...anime, episodes };
}

export async function getEpisode(animeId: string, episodeNumber: number) {
  const rows = await query<EpisodeRow>(
    `SELECT * FROM episodes WHERE anime_id = $1 AND number = $2`,
    animeId,
    episodeNumber
  );
  return rows[0] || null;
}

export async function getFeaturedAnime() {
  return query<AnimeRow>(
    `SELECT * FROM anime WHERE rating >= 9.0 ORDER BY rating DESC`
  );
}

export async function getTrendingAnime() {
  return query<AnimeRow>(
    `SELECT * FROM anime ORDER BY rating DESC LIMIT 8`
  );
}

export async function getRecentlyAdded() {
  return query<AnimeRow>(
    `SELECT * FROM anime ORDER BY year DESC LIMIT 8`
  );
}

// User functions

export async function getUserByEmail(email: string) {
  const rows = await query<UserRow>(
    `SELECT * FROM users WHERE email = $1`,
    email
  );
  return rows[0] || null;
}

export async function createUser(name: string, email: string, hashedPassword: string) {
  const rows = await query<UserRow>(
    `INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *`,
    name,
    email,
    hashedPassword
  );
  return rows[0];
}

// Watchlist functions

export async function getWatchlist(userId: string) {
  return query<WatchlistJoinRow>(
    `SELECT w.id as watchlist_id, w.added_at, a.* 
     FROM watchlists w 
     JOIN anime a ON w.anime_id = a.id 
     WHERE w.user_id = $1 
     ORDER BY w.added_at DESC`,
    userId
  );
}

export async function addToWatchlist(userId: string, animeId: string) {
  const rows = await query<WatchlistRow>(
    `INSERT INTO watchlists (user_id, anime_id) VALUES ($1, $2) RETURNING *`,
    userId,
    animeId
  );
  return rows[0];
}

export async function removeFromWatchlist(watchlistId: string) {
  await query(
    `DELETE FROM watchlists WHERE id = $1`,
    watchlistId
  );
}

// Types

export interface AnimeRow {
  id: string;
  title: string;
  title_japanese: string | null;
  synopsis: string;
  genre: string[];
  rating: number;
  year: number;
  status: "airing" | "complete" | "upcoming";
  total_episodes: number;
  image: string;
  banner: string;
  type: "sub" | "dub" | "both";
  studio: string;
  duration: string;
}

export interface EpisodeRow {
  id: number;
  anime_id: string;
  number: number;
  title: string;
  duration: string;
  release_date: string;
}

export interface UserRow {
  id: string;
  email: string;
  password: string;
  name: string;
  is_premium: boolean;
  created_at: string;
}

export interface WatchlistRow {
  id: string;
  user_id: string;
  anime_id: string;
  added_at: string;
}

export interface WatchlistJoinRow extends AnimeRow {
  watchlist_id: string;
  added_at: string;
}