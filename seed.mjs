import pg from "pg";
import { readFileSync } from "fs";

const url = process.env.DATABASE_URL;
if (!url) {
  console.error("DATABASE_URL environment variable is not set");
  process.exit(1);
}

const pool = new pg.Pool({ connectionString: url });
const db = await pool.connect();

try {
  console.log("Connected to Neon database\n");

  // --- Create Schema ---
  console.log("Creating schema...");
  await db.query(`CREATE EXTENSION IF NOT EXISTS "pgcrypto"`);

  await db.query(`DROP TABLE IF EXISTS watchlists CASCADE`);
  await db.query(`DROP TABLE IF EXISTS episodes CASCADE`);
  await db.query(`DROP TABLE IF EXISTS anime CASCADE`);
  await db.query(`DROP TABLE IF EXISTS users CASCADE`);

  await db.query(`
    CREATE TABLE anime (
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

  await db.query(`
    CREATE TABLE episodes (
      id INTEGER NOT NULL,
      anime_id TEXT NOT NULL REFERENCES anime(id) ON DELETE CASCADE,
      number INTEGER NOT NULL,
      title TEXT NOT NULL,
      duration TEXT NOT NULL DEFAULT '24 min',
      release_date TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      PRIMARY KEY (id, anime_id)
    )
  `);

  await db.query(`
    CREATE TABLE users (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      name TEXT NOT NULL,
      is_premium BOOLEAN NOT NULL DEFAULT false,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);

  await db.query(`
    CREATE TABLE watchlists (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      anime_id TEXT NOT NULL REFERENCES anime(id) ON DELETE CASCADE,
      added_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      UNIQUE(user_id, anime_id)
    )
  `);

  console.log("Schema created ✓\n");

  // --- Seed Anime Data ---
  console.log("Seeding anime data...");

  const animeData = [
    { id: "attack-on-titan", title: "Attack on Titan", titleJapanese: "進撃の巨人", synopsis: "In a world where humanity lives inside cities surrounded by enormous walls due to the Titans, Eren Yeager vows to exterminate them all.", genre: ["Action","Drama","Fantasy","Horror"], rating: 9.1, year: 2013, status: "complete", totalEpisodes: 12, image: "/thumbnails/attack-on-titan.jpg", type: "both", studio: "MAPPA" },
    { id: "demon-slayer", title: "Demon Slayer", titleJapanese: "鬼滅の刃", synopsis: "After his family is attacked by demons and his sister turned into one, Tanjiro Kamado sets out to become a demon slayer.", genre: ["Action","Adventure","Fantasy","Historical"], rating: 8.9, year: 2019, status: "complete", totalEpisodes: 26, image: "/thumbnails/demon-slayer.jpg", type: "both", studio: "ufotable" },
    { id: "jujutsu-kaisen", title: "Jujutsu Kaisen", titleJapanese: "呪術廻戦", synopsis: "Yuji Itadori swallows a cursed talisman and joins a secret organization of Jujutsu Sorcerers.", genre: ["Action","Supernatural","Fantasy"], rating: 8.8, year: 2020, status: "airing", totalEpisodes: 24, image: "/thumbnails/jujutsu-kaisen.jpg", type: "both", studio: "MAPPA" },
    { id: "one-piece", title: "One Piece", titleJapanese: "ワンピース", synopsis: "Monkey D. Luffy sets off on an adventure with his pirate crew to find the One Piece.", genre: ["Action","Adventure","Comedy","Drama"], rating: 8.7, year: 1999, status: "airing", totalEpisodes: 1000, image: "/thumbnails/one-piece.jpg", type: "both", studio: "Toei Animation" },
    { id: "chainsaw-man", title: "Chainsaw Man", titleJapanese: "チェンソーマン", synopsis: "Denji merges with his pet devil Pochita to become Chainsaw Man.", genre: ["Action","Comedy","Horror","Supernatural"], rating: 8.6, year: 2022, status: "complete", totalEpisodes: 12, image: "/thumbnails/chainsaw-man.jpg", type: "both", studio: "MAPPA" },
    { id: "death-note", title: "Death Note", titleJapanese: "デスノート", synopsis: "A high school student discovers a supernatural notebook that allows him to kill anyone.", genre: ["Thriller","Mystery","Supernatural","Psychological"], rating: 9.0, year: 2006, status: "complete", totalEpisodes: 37, image: "/thumbnails/death-note.jpg", type: "both", studio: "Madhouse" },
    { id: "fullmetal-alchemist", title: "Fullmetal Alchemist: Brotherhood", titleJapanese: "鋼の錬金術師", synopsis: "Two brothers search for the Philosopher's Stone to restore their bodies.", genre: ["Action","Adventure","Drama","Fantasy"], rating: 9.2, year: 2009, status: "complete", totalEpisodes: 64, image: "/thumbnails/fullmetal-alchemist.jpg", type: "both", studio: "Bones" },
    { id: "steins-gate", title: "Steins;Gate", titleJapanese: "シュタインズ・ゲート", synopsis: "A mad scientist discovers he can send messages to the past.", genre: ["Sci-Fi","Thriller","Drama"], rating: 9.0, year: 2011, status: "complete", totalEpisodes: 24, image: "", type: "sub", studio: "White Fox" },
    { id: "hunter-x-hunter", title: "Hunter x Hunter", titleJapanese: "ハンター×ハンター", synopsis: "Gon Freecss sets out to become a legendary Hunter.", genre: ["Action","Adventure","Fantasy"], rating: 9.0, year: 2011, status: "complete", totalEpisodes: 148, image: "/thumbnails/hunter-x-hunter.jpg", type: "both", studio: "Madhouse" },
    { id: "naruto", title: "Naruto: Shippuden", titleJapanese: "ナルト疾風伝", synopsis: "Naruto Uzumaki returns to face the Akatsuki.", genre: ["Action","Adventure","Martial Arts","Fantasy"], rating: 8.3, year: 2007, status: "complete", totalEpisodes: 500, image: "/thumbnails/naruto.jpg", type: "both", studio: "Studio Pierrot" },
    { id: "cowboy-bebop", title: "Cowboy Bebop", titleJapanese: "カウボーイビバップ", synopsis: "A ragtag crew of bounty hunters travel through the solar system.", genre: ["Action","Sci-Fi","Noir","Drama"], rating: 8.9, year: 1998, status: "complete", totalEpisodes: 26, image: "/thumbnails/cowboy-bebop.jpg", type: "both", studio: "Sunrise" },
    { id: "frieren", title: "Frieren: Beyond Journey's End", titleJapanese: "葬送のフリーレン", synopsis: "An elven mage embarks on a journey to understand humanity.", genre: ["Adventure","Fantasy","Drama","Slice of Life"], rating: 9.1, year: 2023, status: "complete", totalEpisodes: 28, image: "/thumbnails/frieren.jpg", type: "both", studio: "Madhouse" },
    { id: "solo-leveling", title: "Solo Leveling", titleJapanese: "俺だけレベルアップな件", synopsis: "The weakest hunter gains a unique ability to level up.", genre: ["Action","Fantasy","Adventure"], rating: 8.7, year: 2024, status: "airing", totalEpisodes: 12, image: "/thumbnails/solo-leveling.jpg", type: "both", studio: "A-1 Pictures" },
    { id: "aot-s4", title: "Attack on Titan: The Final Season", titleJapanese: "進撃の巨人 The Final Season", synopsis: "The final season of Attack on Titan.", genre: ["Action","Drama","Fantasy","War"], rating: 9.3, year: 2020, status: "complete", totalEpisodes: 16, image: "/thumbnails/attack-on-titan.jpg", type: "both", studio: "MAPPA" },
    { id: "dandadan", title: "Dandadan", titleJapanese: "ダンダダン", synopsis: "A boy who believes in ghosts and a girl who believes in aliens challenge each other.", genre: ["Action","Comedy","Supernatural","Romance"], rating: 8.5, year: 2024, status: "airing", totalEpisodes: 12, image: "", type: "both", studio: "Science SARU" },
    { id: "parasyte", title: "Parasyte: The Maxim", titleJapanese: "寄生獣 セイの格率", synopsis: "A student fights to maintain his humanity after a parasite takes over his hand.", genre: ["Action","Horror","Sci-Fi","Drama"], rating: 8.4, year: 2014, status: "complete", totalEpisodes: 24, image: "", type: "dub", studio: "Madhouse" },
    { id: "your-name", title: "Your Name.", titleJapanese: "君の名は。", synopsis: "Two strangers find themselves linked in a bizarre way.", genre: ["Romance","Fantasy","Drama","Slice of Life"], rating: 8.8, year: 2016, status: "complete", totalEpisodes: 1, image: "", type: "both", studio: "CoMix Wave Films" },
    { id: "code-geass", title: "Code Geass", titleJapanese: "コードギアス", synopsis: "Exiled prince Lelouch gains the power of Geass.", genre: ["Action","Mecha","Thriller","Drama"], rating: 8.8, year: 2006, status: "complete", totalEpisodes: 25, image: "", type: "both", studio: "Sunrise" },
    { id: "evangelion", title: "Neon Genesis Evangelion", titleJapanese: "新世紀エヴァンゲリオン", synopsis: "Teenagers pilot giant bio-machines to defend Earth.", genre: ["Action","Mecha","Psychological","Sci-Fi"], rating: 8.6, year: 1995, status: "complete", totalEpisodes: 26, image: "", type: "both", studio: "Gainax" },
    { id: "mob-psycho", title: "Mob Psycho 100", titleJapanese: "モブサイコ100", synopsis: "A powerful psychic middle schooler navigates everyday life.", genre: ["Action","Comedy","Supernatural","Slice of Life"], rating: 8.7, year: 2016, status: "complete", totalEpisodes: 12, image: "", type: "both", studio: "Bones" },
    { id: "rezero", title: "Re:Zero - Starting Life in Another World", titleJapanese: "Re:ゼロから始める異世界生活", synopsis: "Subaru Natsuki is transported to a fantasy world.", genre: ["Fantasy","Drama","Thriller","Psychological"], rating: 8.4, year: 2016, status: "airing", totalEpisodes: 25, image: "", type: "both", studio: "White Fox" },
    { id: "one-punch-man", title: "One Punch Man", titleJapanese: "ワンパンマン", synopsis: "Saitama can defeat any opponent with a single punch.", genre: ["Action","Comedy","Superhero","Parody"], rating: 8.7, year: 2015, status: "complete", totalEpisodes: 12, image: "", type: "both", studio: "Madhouse" },
    { id: "vinland-saga", title: "Vinland Saga", titleJapanese: "ヴィンランド・サガ", synopsis: "Thorfinn seeks revenge in medieval Europe.", genre: ["Action","Adventure","Drama","Historical"], rating: 8.8, year: 2019, status: "airing", totalEpisodes: 24, image: "", type: "both", studio: "WIT Studio" },
    { id: "spy-x-family", title: "Spy x Family", titleJapanese: "スパイファミリー", synopsis: "A spy, an assassin, and a telepath form a fake family.", genre: ["Comedy","Action","Slice of Life"], rating: 8.5, year: 2022, status: "complete", totalEpisodes: 25, image: "", type: "both", studio: "WIT Studio" },
    { id: "my-hero-academia", title: "My Hero Academia", titleJapanese: "僕のヒーローアカデミア", synopsis: "Izuku Midoriya dreams of becoming a hero.", genre: ["Action","Comedy","School","Superhero"], rating: 8.4, year: 2016, status: "airing", totalEpisodes: 25, image: "", type: "both", studio: "Bones" },
  ];

  for (const a of animeData) {
    const duration = "24 min";
    await db.query(
      `INSERT INTO anime (id, title, title_japanese, synopsis, genre, rating, year, status, total_episodes, image, banner, type, studio, duration)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)
       ON CONFLICT (id) DO UPDATE SET title=EXCLUDED.title, status=EXCLUDED.status`,
      [a.id, a.title, a.titleJapanese || null, a.synopsis, `{${a.genre.join(",")}}`, a.rating, a.year, a.status, a.totalEpisodes, a.image, "/hero-bg.jpg", a.type, a.studio, duration]
    );

    const now = new Date();
    const episodeCount = Math.min(a.totalEpisodes, 50);
    for (let i = 0; i < episodeCount; i++) {
      const epNum = i + 1;
      const daysAgo = (episodeCount - epNum) * 7 + 3;
      const releaseDate = new Date(now.getTime() - daysAgo * 24 * 60 * 60 * 1000);
      await db.query(
        `INSERT INTO episodes (id, anime_id, number, title, duration, release_date)
         VALUES ($1,$2,$3,$4,$5,$6) ON CONFLICT (id, anime_id) DO UPDATE SET title=EXCLUDED.title`,
        [i + 1, a.id, epNum, `Episode ${epNum}`, duration, releaseDate.toISOString()]
      );
    }
    console.log(`  ✓ ${a.title} (${episodeCount} episodes)`);
  }

  // Create demo users
  await db.query(
    `INSERT INTO users (email, password, name, is_premium) VALUES ($1,$2,$3,$4) ON CONFLICT (email) DO NOTHING`,
    ["demo@aniflow.app", "mvp_v1:password123", "Demo User", false]
  );
  await db.query(
    `INSERT INTO users (email, password, name, is_premium) VALUES ($1,$2,$3,$4) ON CONFLICT (email) DO NOTHING`,
    ["premium@aniflow.app", "mvp_v1:password123", "Premium User", true]
  );

  console.log("\n✓ Demo users:");
  console.log("  Free:    demo@aniflow.app / password123");
  console.log("  Premium: premium@aniflow.app / password123");
  console.log("\n✓ Seed complete!");
} finally {
  db.release();
  await pool.end();
}