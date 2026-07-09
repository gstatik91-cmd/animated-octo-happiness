import { neon } from "@neondatabase/serverless";

const url = process.env.DATABASE_URL;
if (!url) {
  console.error("DATABASE_URL environment variable is not set");
  process.exit(1);
}

const sql = neon(url);

async function main() {
  console.log("Creating schema...");

  // Enable UUID generation
  await sql(`CREATE EXTENSION IF NOT EXISTS "pgcrypto"`);

  // Drop tables if they exist (for clean re-seed)
  await sql(`DROP TABLE IF EXISTS watchlists CASCADE`);
  await sql(`DROP TABLE IF EXISTS episodes CASCADE`);
  await sql(`DROP TABLE IF EXISTS anime CASCADE`);
  await sql(`DROP TABLE IF EXISTS users CASCADE`);

  // Anime table
  await sql(`
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

  // Episodes table
  await sql(`
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

  // Users table
  await sql(`
    CREATE TABLE users (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      name TEXT NOT NULL,
      is_premium BOOLEAN NOT NULL DEFAULT false,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);

  // Watchlists table
  await sql(`
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
    {
      id: "attack-on-titan",
      title: "Attack on Titan",
      titleJapanese: "進撃の巨人",
      synopsis: "In a world where humanity lives inside cities surrounded by enormous walls due to the Titans, gigantic humanoid creatures who devour humans seemingly without reason, Eren Yeager vows to exterminate them all after a Titan destroys his hometown and kills his mother.",
      genre: ["Action", "Drama", "Fantasy", "Horror"],
      rating: 9.1, year: 2013, status: "complete", totalEpisodes: 12,
      image: "/thumbnails/attack-on-titan.jpg", banner: "/hero-bg.jpg",
      type: "both", studio: "MAPPA", duration: "24 min",
    },
    {
      id: "demon-slayer",
      title: "Demon Slayer",
      titleJapanese: "鬼滅の刃",
      synopsis: "After his family is attacked by demons and his sister turned into one, Tanjiro Kamado sets out on a journey to become a demon slayer and find a cure for his sister's condition.",
      genre: ["Action", "Adventure", "Fantasy", "Historical"],
      rating: 8.9, year: 2019, status: "complete", totalEpisodes: 26,
      image: "/thumbnails/demon-slayer.jpg", banner: "/hero-bg.jpg",
      type: "both", studio: "ufotable", duration: "24 min",
    },
    {
      id: "jujutsu-kaisen",
      title: "Jujutsu Kaisen",
      titleJapanese: "呪術廻戦",
      synopsis: "Yuji Itadori, a high school student with extraordinary physical strength, swallows a cursed talisman - the finger of a powerful Curse - and becomes cursed himself. He joins a secret organization of Jujutsu Sorcerers to hunt down and destroy the Curses.",
      genre: ["Action", "Supernatural", "Fantasy"],
      rating: 8.8, year: 2020, status: "airing", totalEpisodes: 24,
      image: "/thumbnails/jujutsu-kaisen.jpg", banner: "/hero-bg.jpg",
      type: "both", studio: "MAPPA", duration: "23 min",
    },
    {
      id: "one-piece",
      title: "One Piece",
      titleJapanese: "ワンピース",
      synopsis: "Monkey D. Luffy sets off on an adventure with his pirate crew in hopes of finding the greatest treasure in the world, the One Piece, and becoming the Pirate King.",
      genre: ["Action", "Adventure", "Comedy", "Drama"],
      rating: 8.7, year: 1999, status: "airing", totalEpisodes: 1000,
      image: "/thumbnails/one-piece.jpg", banner: "/hero-bg.jpg",
      type: "both", studio: "Toei Animation", duration: "24 min",
    },
    {
      id: "chainsaw-man",
      title: "Chainsaw Man",
      titleJapanese: "チェンソーマン",
      synopsis: "Denji, a young man burdened by his father's debt, makes a living as a devil hunter with his pet devil Pochita. After being betrayed, he merges with Pochita to become Chainsaw Man.",
      genre: ["Action", "Comedy", "Horror", "Supernatural"],
      rating: 8.6, year: 2022, status: "complete", totalEpisodes: 12,
      image: "/thumbnails/chainsaw-man.jpg", banner: "/hero-bg.jpg",
      type: "both", studio: "MAPPA", duration: "25 min",
    },
    {
      id: "death-note",
      title: "Death Note",
      titleJapanese: "デスノート",
      synopsis: "A high school student discovers a supernatural notebook that allows him to kill anyone whose name he writes in it.",
      genre: ["Thriller", "Mystery", "Supernatural", "Psychological"],
      rating: 9.0, year: 2006, status: "complete", totalEpisodes: 37,
      image: "/thumbnails/death-note.jpg", banner: "/hero-bg.jpg",
      type: "both", studio: "Madhouse", duration: "23 min",
    },
    {
      id: "fullmetal-alchemist",
      title: "Fullmetal Alchemist: Brotherhood",
      titleJapanese: "鋼の錬金術師",
      synopsis: "Two brothers search for the Philosopher's Stone to restore their bodies after a failed alchemical experiment.",
      genre: ["Action", "Adventure", "Drama", "Fantasy"],
      rating: 9.2, year: 2009, status: "complete", totalEpisodes: 64,
      image: "/thumbnails/fullmetal-alchemist.jpg", banner: "/hero-bg.jpg",
      type: "both", studio: "Bones", duration: "24 min",
    },
    {
      id: "steins-gate",
      title: "Steins;Gate",
      titleJapanese: "シュタインズ・ゲート",
      synopsis: "A self-proclaimed mad scientist discovers he can send messages to the past through his microwave.",
      genre: ["Sci-Fi", "Thriller", "Drama"],
      rating: 9.0, year: 2011, status: "complete", totalEpisodes: 24,
      image: "", banner: "/hero-bg.jpg",
      type: "sub", studio: "White Fox", duration: "24 min",
    },
    {
      id: "hunter-x-hunter",
      title: "Hunter x Hunter",
      titleJapanese: "ハンター×ハンター",
      synopsis: "Gon Freecss, a young boy, discovers that his father is a legendary Hunter and sets out to follow in his footsteps.",
      genre: ["Action", "Adventure", "Fantasy"],
      rating: 9.0, year: 2011, status: "complete", totalEpisodes: 148,
      image: "/thumbnails/hunter-x-hunter.jpg", banner: "/hero-bg.jpg",
      type: "both", studio: "Madhouse", duration: "23 min",
    },
    {
      id: "naruto",
      title: "Naruto: Shippuden",
      titleJapanese: "ナルト疾風伝",
      synopsis: "Naruto Uzumaki returns to the Hidden Leaf Village after training with Jiraiya, ready to face the Akatsuki.",
      genre: ["Action", "Adventure", "Martial Arts", "Fantasy"],
      rating: 8.3, year: 2007, status: "complete", totalEpisodes: 500,
      image: "/thumbnails/naruto.jpg", banner: "/hero-bg.jpg",
      type: "both", studio: "Studio Pierrot", duration: "24 min",
    },
    {
      id: "cowboy-bebop",
      title: "Cowboy Bebop",
      titleJapanese: "カウボーイビバップ",
      synopsis: "In the year 2071, a ragtag crew of bounty hunters aboard the spaceship Bebop travel through the solar system chasing criminals.",
      genre: ["Action", "Sci-Fi", "Noir", "Drama"],
      rating: 8.9, year: 1998, status: "complete", totalEpisodes: 26,
      image: "/thumbnails/cowboy-bebop.jpg", banner: "/hero-bg.jpg",
      type: "both", studio: "Sunrise", duration: "24 min",
    },
    {
      id: "frieren",
      title: "Frieren: Beyond Journey's End",
      titleJapanese: "葬送のフリーレン",
      synopsis: "After a party of heroes defeated the Demon King, the elven mage Frieren embarks on a new journey to understand humanity.",
      genre: ["Adventure", "Fantasy", "Drama", "Slice of Life"],
      rating: 9.1, year: 2023, status: "complete", totalEpisodes: 28,
      image: "/thumbnails/frieren.jpg", banner: "/hero-bg.jpg",
      type: "both", studio: "Madhouse", duration: "24 min",
    },
    {
      id: "solo-leveling",
      title: "Solo Leveling",
      titleJapanese: "俺だけレベルアップな件",
      synopsis: "In a world where hunters battle monsters, Sung Jin-Woo, the weakest hunter of all, gains a unique ability to level up.",
      genre: ["Action", "Fantasy", "Adventure"],
      rating: 8.7, year: 2024, status: "airing", totalEpisodes: 12,
      image: "/thumbnails/solo-leveling.jpg", banner: "/hero-bg.jpg",
      type: "both", studio: "A-1 Pictures", duration: "23 min",
    },
    {
      id: "aot-s4",
      title: "Attack on Titan: The Final Season",
      titleJapanese: "進撃の巨人 The Final Season",
      synopsis: "The final season of Attack on Titan. The war for Paradis reaches its climax.",
      genre: ["Action", "Drama", "Fantasy", "War"],
      rating: 9.3, year: 2020, status: "complete", totalEpisodes: 16,
      image: "/thumbnails/attack-on-titan.jpg", banner: "/hero-bg.jpg",
      type: "both", studio: "MAPPA", duration: "24 min",
    },
    {
      id: "dandadan",
      title: "Dandadan",
      titleJapanese: "ダンダダン",
      synopsis: "A high school boy who believes in ghosts but not aliens, and a girl who believes in aliens but not ghosts, challenge each other.",
      genre: ["Action", "Comedy", "Supernatural", "Romance"],
      rating: 8.5, year: 2024, status: "airing", totalEpisodes: 12,
      image: "", banner: "/hero-bg.jpg",
      type: "both", studio: "Science SARU", duration: "24 min",
    },
    {
      id: "parasyte",
      title: "Parasyte: The Maxim",
      titleJapanese: "寄生獣 セイの格率",
      synopsis: "When alien parasites invade Earth, high school student Shinichi Izumi fights to maintain his humanity.",
      genre: ["Action", "Horror", "Sci-Fi", "Drama"],
      rating: 8.4, year: 2014, status: "complete", totalEpisodes: 24,
      image: "", banner: "/hero-bg.jpg",
      type: "dub", studio: "Madhouse", duration: "23 min",
    },
    {
      id: "your-name",
      title: "Your Name.",
      titleJapanese: "君の名は。",
      synopsis: "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
      genre: ["Romance", "Fantasy", "Drama", "Slice of Life"],
      rating: 8.8, year: 2016, status: "complete", totalEpisodes: 1,
      image: "", banner: "/hero-bg.jpg",
      type: "both", studio: "CoMix Wave Films", duration: "1h 46min",
    },
    {
      id: "code-geass",
      title: "Code Geass",
      titleJapanese: "コードギアス",
      synopsis: "Exiled prince Lelouch vi Britannia gains the power of Geass and uses it to lead a rebellion against the Holy Britannian Empire.",
      genre: ["Action", "Mecha", "Thriller", "Drama"],
      rating: 8.8, year: 2006, status: "complete", totalEpisodes: 25,
      image: "", banner: "/hero-bg.jpg",
      type: "both", studio: "Sunrise", duration: "24 min",
    },
    {
      id: "evangelion",
      title: "Neon Genesis Evangelion",
      titleJapanese: "新世紀エヴァンゲリオン",
      synopsis: "In a post-apocalyptic world, teenagers pilot giant bio-machines called Evangelions to defend Earth.",
      genre: ["Action", "Mecha", "Psychological", "Sci-Fi"],
      rating: 8.6, year: 1995, status: "complete", totalEpisodes: 26,
      image: "", banner: "/hero-bg.jpg",
      type: "both", studio: "Gainax", duration: "24 min",
    },
    {
      id: "mob-psycho",
      title: "Mob Psycho 100",
      titleJapanese: "モブサイコ100",
      synopsis: "A powerful psychic middle schooler tries to suppress his emotions to keep his powers in check.",
      genre: ["Action", "Comedy", "Supernatural", "Slice of Life"],
      rating: 8.7, year: 2016, status: "complete", totalEpisodes: 12,
      image: "", banner: "/hero-bg.jpg",
      type: "both", studio: "Bones", duration: "24 min",
    },
    {
      id: "rezero",
      title: "Re:Zero - Starting Life in Another World",
      titleJapanese: "Re:ゼロから始める異世界生活",
      synopsis: "Subaru Natsuki is transported to a fantasy world where he discovers he has the ability to return to a checkpoint upon death.",
      genre: ["Fantasy", "Drama", "Thriller", "Psychological"],
      rating: 8.4, year: 2016, status: "airing", totalEpisodes: 25,
      image: "", banner: "/hero-bg.jpg",
      type: "both", studio: "White Fox", duration: "25 min",
    },
    {
      id: "one-punch-man",
      title: "One Punch Man",
      titleJapanese: "ワンパンマン",
      synopsis: "Saitama, a hero who can defeat any opponent with a single punch, grows bored with his lack of challenge.",
      genre: ["Action", "Comedy", "Superhero", "Parody"],
      rating: 8.7, year: 2015, status: "complete", totalEpisodes: 12,
      image: "", banner: "/hero-bg.jpg",
      type: "both", studio: "Madhouse", duration: "24 min",
    },
    {
      id: "vinland-saga",
      title: "Vinland Saga",
      titleJapanese: "ヴィンランド・サガ",
      synopsis: "After his father is killed in battle, young Thorfinn joins the mercenary group responsible for his death in order to seek revenge.",
      genre: ["Action", "Adventure", "Drama", "Historical"],
      rating: 8.8, year: 2019, status: "airing", totalEpisodes: 24,
      image: "", banner: "/hero-bg.jpg",
      type: "both", studio: "WIT Studio", duration: "25 min",
    },
    {
      id: "spy-x-family",
      title: "Spy x Family",
      titleJapanese: "スパイファミリー",
      synopsis: "A spy, an assassin, and a telepath form a fake family in order to complete their missions.",
      genre: ["Comedy", "Action", "Slice of Life"],
      rating: 8.5, year: 2022, status: "complete", totalEpisodes: 25,
      image: "", banner: "/hero-bg.jpg",
      type: "both", studio: "WIT Studio", duration: "24 min",
    },
    {
      id: "my-hero-academia",
      title: "My Hero Academia",
      titleJapanese: "僕のヒーローアカデミア",
      synopsis: "In a world where superpowers called Quirks are common, Izuku Midoriya dreams of becoming a hero.",
      genre: ["Action", "Comedy", "School", "Superhero"],
      rating: 8.4, year: 2016, status: "airing", totalEpisodes: 25,
      image: "", banner: "/hero-bg.jpg",
      type: "both", studio: "Bones", duration: "24 min",
    },
  ];

  for (const anime of animeData) {
    await sql(
      `INSERT INTO anime (id, title, title_japanese, synopsis, genre, rating, year, status, total_episodes, image, banner, type, studio, duration)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
       ON CONFLICT (id) DO UPDATE SET
         title = EXCLUDED.title, title_japanese = EXCLUDED.title_japanese,
         synopsis = EXCLUDED.synopsis, genre = EXCLUDED.genre,
         rating = EXCLUDED.rating, year = EXCLUDED.year,
         status = EXCLUDED.status, total_episodes = EXCLUDED.total_episodes,
         image = EXCLUDED.image, banner = EXCLUDED.banner,
         type = EXCLUDED.type, studio = EXCLUDED.studio, duration = EXCLUDED.duration`,
      anime.id,
      anime.title,
      anime.titleJapanese || null,
      anime.synopsis,
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

    // Generate episodes with release dates
    const episodeCount = anime.totalEpisodes;
    const episodeTitle = (i: number) => `Episode ${i + 1}`;
    const now = new Date();

    for (let i = 0; i < Math.min(episodeCount, 50); i++) {
      const epNum = i + 1;
      // Backdate: recent episodes close to now, older episodes further back
      const daysAgo = (episodeCount - epNum) * 7 + 3;
      const releaseDate = new Date(now.getTime() - daysAgo * 24 * 60 * 60 * 1000);

      await sql(
        `INSERT INTO episodes (id, anime_id, number, title, duration, release_date)
         VALUES ($1, $2, $3, $4, $5, $6)
         ON CONFLICT (id, anime_id) DO UPDATE SET
           title = EXCLUDED.title, duration = EXCLUDED.duration,
           number = EXCLUDED.number, release_date = EXCLUDED.release_date`,
        i + 1,
        anime.id,
        epNum,
        episodeTitle(i),
        anime.duration,
        releaseDate.toISOString()
      );
    }
    console.log(`  ✓ ${anime.title} (${Math.min(episodeCount, 50)} episodes)`);
  }

  // Create demo users (password: "password123")
  await sql(
    `INSERT INTO users (email, password, name, is_premium) VALUES ($1, $2, $3, $4) ON CONFLICT (email) DO NOTHING`,
    "demo@aniflow.app",
    "mvp_v1:password123", // Simple hash for MVP
    "Demo User",
    false
  );

  await sql(
    `INSERT INTO users (email, password, name, is_premium) VALUES ($1, $2, $3, $4) ON CONFLICT (email) DO NOTHING`,
    "premium@aniflow.app",
    "mvp_v1:password123",
    "Premium User",
    true
  );

  console.log("\n✓ Demo users created:");
  console.log("  Free:    demo@aniflow.app / password123");
  console.log("  Premium: premium@aniflow.app / password123");
  console.log("\n✓ Seed complete!");
}

main().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});