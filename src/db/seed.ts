import { query } from "./index";
import { animeList } from "~/data/anime";

/**
 * Seed the database with anime data from the existing mock data file.
 * Safe to run multiple times — it upserts (INSERT ON CONFLICT).
 */
export async function seedDatabase() {
  console.log(`Seeding ${animeList.length} anime titles...`);

  for (const anime of animeList) {
    // Insert anime
    await query(
      `INSERT INTO anime (id, title, title_japanese, synopsis, genre, rating, year, status, total_episodes, image, banner, type, studio, duration)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
       ON CONFLICT (id) DO UPDATE SET
         title = EXCLUDED.title,
         title_japanese = EXCLUDED.title_japanese,
         synopsis = EXCLUDED.synopsis,
         genre = EXCLUDED.genre,
         rating = EXCLUDED.rating,
         year = EXCLUDED.year,
         status = EXCLUDED.status,
         total_episodes = EXCLUDED.total_episodes,
         image = EXCLUDED.image,
         banner = EXCLUDED.banner,
         type = EXCLUDED.type,
         studio = EXCLUDED.studio,
         duration = EXCLUDED.duration`,
      anime.id,
      anime.title,
      anime.titleJapanese || null,
      anime.synopsis,
      // Convert string[] to Postgres TEXT[] format: {item1,item2}
      `{${anime.genre.join(",")}}`,
      anime.rating,
      anime.year,
      anime.status,
      anime.totalEpisodes,
      anime.image,
      anime.banner,
      anime.type,
      anime.studio,
      anime.duration
    );

    // Insert episodes with release dates
    // Backdate older episodes by days, set latest episodes to recent times
    // to demonstrate the 1-week simulcast delay feature
    const now = new Date();
    const episodeCount = anime.episodes.length;

    for (const episode of anime.episodes) {
      // Calculate release date: backdate episodes progressively
      // The most recent episode (last one) is released recently
      // Older episodes are further in the past
      const daysAgo = (episodeCount - episode.number) * 7 + 3; // 3 days buffer for most recent
      const releaseDate = new Date(now.getTime() - daysAgo * 24 * 60 * 60 * 1000);

      await query(
        `INSERT INTO episodes (id, anime_id, number, title, duration, release_date)
         VALUES ($1, $2, $3, $4, $5, $6)
         ON CONFLICT (id, anime_id) DO UPDATE SET
           title = EXCLUDED.title,
           duration = EXCLUDED.duration,
           number = EXCLUDED.number,
           release_date = EXCLUDED.release_date`,
        episode.id,
        anime.id,
        episode.number,
        episode.title,
        episode.duration,
        releaseDate.toISOString()
      );
    }

    console.log(`  ✓ ${anime.title} (${episodeCount} episodes)`);
  }

  // Create a demo user for testing
  await query(
    `INSERT INTO users (email, password, name, is_premium)
     VALUES ($1, $2, $3, $4)
     ON CONFLICT (email) DO NOTHING`,
    "demo@aniflow.app",
    // bcrypt hash of "password123" — for demo only
    "$2b$10$8K1p/a0dL1LXMIgoEDFrwOfMQkf9Rn6bm1FZwOJK3v0pMl0R5GqqK",
    "Demo User",
    false
  );

  await query(
    `INSERT INTO users (email, password, name, is_premium)
     VALUES ($1, $2, $3, $4)
     ON CONFLICT (email) DO NOTHING`,
    "premium@aniflow.app",
    "$2b$10$8K1p/a0dL1LXMIgoEDFrwOfMQkf9Rn6bm1FZwOJK3v0pMl0R5GqqK",
    "Premium User",
    true
  );

  console.log("✓ Demo users created (demo@aniflow.app / premium@aniflow.app)");
  console.log("✓ Seed complete!");
}

// Run if executed directly
const isMain = process.argv[1]?.endsWith("seed.ts") || process.argv[1]?.includes("seed");
if (isMain) {
  import("./schema").then(({ createSchema }) =>
    createSchema()
      .then(() => seedDatabase())
      .then(() => process.exit(0))
      .catch((err) => {
        console.error("Seed failed:", err);
        process.exit(1);
      })
  );
}