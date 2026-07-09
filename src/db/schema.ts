import { query } from "./index";

/**
 * Create all tables for the AniFlow application.
 * Safe to run multiple times (uses IF NOT EXISTS).
 */
export async function createSchema() {
  // Enable UUID generation
  await query(`CREATE EXTENSION IF NOT EXISTS "pgcrypto"`);

  // Anime table
  await query(`
    CREATE TABLE IF NOT EXISTS anime (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      title_japanese TEXT,
      synopsis TEXT NOT NULL,
      genre TEXT[] NOT NULL DEFAULT '{}',
      rating NUMERIC(3,1) NOT NULL DEFAULT 0,
      year INTEGER NOT NULL,
      status TEXT NOT NULL CHECK (status IN ('airing', 'complete', 'upcoming')),
      total_episodes INTEGER NOT NULL DEFAULT 0,
      image TEXT NOT NULL DEFAULT '',
      banner TEXT NOT NULL DEFAULT '/hero-bg.jpg',
      type TEXT NOT NULL CHECK (type IN ('sub', 'dub', 'both')),
      studio TEXT NOT NULL DEFAULT '',
      duration TEXT NOT NULL DEFAULT '24 min'
    )
  `);

  // Episodes table
  await query(`
    CREATE TABLE IF NOT EXISTS episodes (
      id INTEGER NOT NULL,
      anime_id TEXT NOT NULL REFERENCES anime(id) ON DELETE CASCADE,
      number INTEGER NOT NULL,
      title TEXT NOT NULL,
      duration TEXT NOT NULL DEFAULT '24 min',
      release_date TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      PRIMARY KEY (id, anime_id)
    )
  `);

  // Users table
  await query(`
    CREATE TABLE IF NOT EXISTS users (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      name TEXT NOT NULL,
      is_premium BOOLEAN NOT NULL DEFAULT false,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);

  // Watchlists table
  await query(`
    CREATE TABLE IF NOT EXISTS watchlists (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      anime_id TEXT NOT NULL REFERENCES anime(id) ON DELETE CASCADE,
      added_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      UNIQUE(user_id, anime_id)
    )
  `);

  console.log("✓ Schema created successfully");
}

// Run if executed directly
const isMain = process.argv[1]?.endsWith("schema.ts");
if (isMain) {
  createSchema()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error("Schema creation failed:", err);
      process.exit(1);
    });
}