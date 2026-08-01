import pg from "pg";

let _pool: pg.Pool | null = null;

function getPool(): pg.Pool {
  if (!_pool) {
    const url = process.env.DATABASE_URL;
    if (!url) {
      throw new Error("DATABASE_URL environment variable is not set");
    }
    _pool = new pg.Pool({ connectionString: url });
  }
  return _pool;
}

/**
 * Execute a raw SQL query with optional params.
 * Returns rows as an array of plain objects.
 */
export async function query<T = Record<string, unknown>>(
  text: string,
  ...params: unknown[]
): Promise<T[]> {
  const pool = getPool();
  const client = await pool.connect();
  try {
    const result = await client.query(text, params);
    return result.rows as T[];
  } finally {
    client.release();
  }
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

  const sort = filters?.sortBy || "rating";
  if (sort === "rating") sqlStr += " ORDER BY rating DESC";
  else if (sort === "year") sqlStr += " ORDER BY year DESC";
  else if (sort === "title") sqlStr += " ORDER BY title ASC";
  else sqlStr += " ORDER BY rating DESC";

  return query<AnimeRow>(sqlStr, ...params);
}

export async function getAnimeById(id: string) {
  const rows = await query<AnimeRow>(`SELECT * FROM anime WHERE id = $1`, id);
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
  return query<AnimeRow>(`SELECT * FROM anime WHERE rating >= 9.0 ORDER BY rating DESC`);
}

export async function getTrendingAnime() {
  return query<AnimeRow>(`SELECT * FROM anime ORDER BY rating DESC LIMIT 8`);
}

export async function getRecentlyAdded() {
  return query<AnimeRow>(`SELECT * FROM anime ORDER BY year DESC LIMIT 8`);
}

// User functions

export async function getUserByEmail(email: string) {
  const rows = await query<UserRow>(`SELECT * FROM users WHERE email = $1`, email);
  return rows[0] || null;
}

export async function getUserById(id: string) {
  const rows = await query<UserRow>(`SELECT * FROM users WHERE id = $1`, id);
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
  await query(`DELETE FROM watchlists WHERE id = $1`, watchlistId);
}

// Recommendations: find similar anime based on shared genres from watchlist
export async function getPersonalizedRecommendations(userId: string, limit = 8) {
  // Get IDs of anime already in user's watchlist
  const watchlistRows = await query<{ anime_id: string }>(
    `SELECT anime_id FROM watchlists WHERE user_id = $1`,
    userId
  );
  const watchedIds = watchlistRows.map((r) => r.anime_id);
  if (watchedIds.length === 0) return [];

  // Get genres from all watched anime
  const watchedAnime = await query<Pick<AnimeRow, "genre" | "id" | "title">>(
    `SELECT id, title, genre FROM anime WHERE id = ANY($1)`,
    watchedIds
  );

  // Collect all unique genres and find the most-watched anime for the "because you watched" highlight
  const genreSet = new Set<string>();
  let bestAnime: { id: string; title: string } | null = null;
  for (const a of watchedAnime) {
    for (const g of a.genre) genreSet.add(g);
    // Pick the first anime as the "because you watched" anchor
    if (!bestAnime) bestAnime = { id: a.id, title: a.title };
  }

  const allGenres = Array.from(genreSet);
  if (allGenres.length === 0) return [];

  // Find anime with overlapping genres that aren't in the watchlist
  const excludeIds = [...watchedIds];

  // Build a query that ranks by genre overlap count
  const rows = await query<AnimeRow & { match_count: number }>(
    `SELECT a.*, (
       SELECT COUNT(*) FROM unnest(a.genre) AS g WHERE g = ANY($2)
     ) as match_count
     FROM anime a
     WHERE a.id != ALL($1)
     AND a.genre && $2
     ORDER BY match_count DESC, a.rating DESC
     LIMIT $3`,
    excludeIds,
    allGenres,
    limit
  );

  return { items: rows, becauseYouWatched: bestAnime };
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