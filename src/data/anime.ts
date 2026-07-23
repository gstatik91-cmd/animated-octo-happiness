export interface Episode {
  id: number;
  number: number;
  title: string;
  thumbnail: string;
  duration: string;
}

export interface Anime {
  id: string;
  title: string;
  titleJapanese?: string;
  synopsis: string;
  genre: string[];
  rating: number;
  year: number;
  status: "airing" | "complete" | "upcoming";
  episodes: Episode[];
  totalEpisodes: number;
  image: string;
  banner: string;
  type: "sub" | "dub" | "both";
  studio: string;
  duration: string;
}

export const animeList: Anime[] = [
  {
    "id": "frieren-beyond-journeys-end",
    "title": "Frieren: Beyond Journey's End",
    "titleJapanese": "葬送のフリーレン",
    "synopsis": "During their decade-long quest to defeat the Demon King, the members of the hero's party—Himmel himself, the priest Heiter, the dwarf warrior Eisen, and the elven mage Frieren—forge bonds through adventures and battles, creating unforgettable precious memories for most of them.\n\nHowever, the time that Frieren spends with her comrades is equivalent to merely a fraction of her life, which has lasted over a thousand years. When the party disbands after their victory, Frieren casually returns to her \"usual\" routine of collecting spells across the continent. Due to her different sense of time, she seemingly holds no strong feelings toward the experiences she went through.\n\nAs the years pass, Frieren gradually realizes how her days in the hero's party truly impacted her. Witnessing the deaths of two of her former companions, Frieren begins to regret having taken their presence for granted; she vows to better understand humans and create real personal connections. Although the story of that o",
    "genre": [
      "Adventure",
      "Award Winning",
      "Drama",
      "Fantasy"
    ],
    "rating": 9.3,
    "year": 2023,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 25,
        "number": 25,
        "title": "Episode 25",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 26,
        "number": 26,
        "title": "Episode 26",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 27,
        "number": 27,
        "title": "Episode 27",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 28,
        "number": 28,
        "title": "Episode 28",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 28,
    "image": "https://cdn.myanimelist.net/images/anime/1015/138006.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1015/138006l.jpg",
    "type": "both",
    "studio": "Madhouse",
    "duration": "24 min"
  },
  {
    "id": "rezero-starting-life-in-another-world-season-4",
    "title": "Re:ZERO -Starting Life in Another World- Season 4",
    "titleJapanese": "Re:ゼロから始める異世界生活 4th season",
    "synopsis": "In the deadly battle at the Watergate City of Priestella, Subaru and his allies barely emerged victorious—but their triumph came at a great cost. Through the \"Authority of Gluttony,\" Rem was put into suspended animation, while Crusch's memories and even Julius’s name were devoured. As he searches for a way to save them, Subaru learns of the \"Sage\" Shaula—an all-seeing being said to possess every form of knowledge. His next destination is the Pleiades Watchtower, home to the Sage, the farthest tower standing in the vast, uncharted desert known as the Auguria Dunes—a place so perilous that even the mightiest \"Sword Saint,\" Reinhard, failed to conquer it. The fury of nature, unknown magical beasts, and unimaginable dangers lie ahead. Together with his friends, Subaru embarks on a life-risking journey to reclaim what was lost.\n\n(Source: Kadokawa, edited)",
    "genre": [
      "Drama",
      "Fantasy",
      "Suspense"
    ],
    "rating": 9.2,
    "year": 2026,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 19,
    "image": "https://cdn.myanimelist.net/images/anime/1540/155824.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1540/155824l.jpg",
    "type": "both",
    "studio": "White Fox",
    "duration": "23 min"
  },
  {
    "id": "fullmetal-alchemist-brotherhood",
    "title": "Fullmetal Alchemist: Brotherhood",
    "titleJapanese": "鋼の錬金術師 FULLMETAL ALCHEMIST",
    "synopsis": "After a horrific alchemy experiment goes wrong in the Elric household, brothers Edward and Alphonse are left in a catastrophic new reality. Ignoring the alchemical principle banning human transmutation, the boys attempted to bring their recently deceased mother back to life. Instead, they suffered brutal personal loss: Alphonse's body disintegrated while Edward lost a leg and then sacrificed an arm to keep Alphonse's soul in the physical realm by binding it to a hulking suit of armor.\n\nThe brothers are rescued by their neighbor Pinako Rockbell and her granddaughter Winry. Known as a bio-mechanical engineering prodigy, Winry creates prosthetic limbs for Edward by utilizing \"automail,\" a tough, versatile metal used in robots and combat armor. After years of training, the Elric brothers set off on a quest to restore their bodies by locating the Philosopher's Stone—a powerful gem that allows an alchemist to defy the traditional laws of Equivalent Exchange.\n\nAs Edward becomes an infamous al",
    "genre": [
      "Action",
      "Adventure",
      "Drama",
      "Fantasy"
    ],
    "rating": 9.1,
    "year": 2009,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 25,
        "number": 25,
        "title": "Episode 25",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 26,
        "number": 26,
        "title": "Episode 26",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 27,
        "number": 27,
        "title": "Episode 27",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 28,
        "number": 28,
        "title": "Episode 28",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 29,
        "number": 29,
        "title": "Episode 29",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 30,
        "number": 30,
        "title": "Episode 30",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 31,
        "number": 31,
        "title": "Episode 31",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 32,
        "number": 32,
        "title": "Episode 32",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 33,
        "number": 33,
        "title": "Episode 33",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 34,
        "number": 34,
        "title": "Episode 34",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 35,
        "number": 35,
        "title": "Episode 35",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 36,
        "number": 36,
        "title": "Episode 36",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 37,
        "number": 37,
        "title": "Episode 37",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 38,
        "number": 38,
        "title": "Episode 38",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 39,
        "number": 39,
        "title": "Episode 39",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 40,
        "number": 40,
        "title": "Episode 40",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 41,
        "number": 41,
        "title": "Episode 41",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 42,
        "number": 42,
        "title": "Episode 42",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 43,
        "number": 43,
        "title": "Episode 43",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 44,
        "number": 44,
        "title": "Episode 44",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 45,
        "number": 45,
        "title": "Episode 45",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 46,
        "number": 46,
        "title": "Episode 46",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 47,
        "number": 47,
        "title": "Episode 47",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 48,
        "number": 48,
        "title": "Episode 48",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 49,
        "number": 49,
        "title": "Episode 49",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 50,
        "number": 50,
        "title": "Episode 50",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 50,
    "image": "https://cdn.myanimelist.net/images/anime/1208/94745.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1208/94745l.jpg",
    "type": "both",
    "studio": "Bones",
    "duration": "24 min"
  },
  {
    "id": "steel-ball-run-jojos-bizarre-adventure",
    "title": "Steel Ball Run: JoJo's Bizarre Adventure",
    "titleJapanese": "スティール・ボール・ラン ジョジョの奇妙な冒険",
    "synopsis": "In the American Old West, the world's greatest race is about to begin. Thousands line up in San Diego to travel over six thousand kilometers for a chance to win the grand prize of fifty million dollars. With the era of the horse reaching its end, contestants are allowed to use any kind of vehicle they wish. Competitors will have to endure grueling conditions, traveling up to a hundred kilometers a day through uncharted wastelands. The Steel Ball Run is truly a one-of-a-kind event.\n\nThe youthful Johnny Joestar, a crippled former horse racer, has come to San Diego to watch the start of the race. There he encounters Gyro Zeppeli, a racer with two steel balls at his waist instead of a gun. Johnny witnesses Gyro using one of his steel balls to unleash a fantastical power, compelling a man to fire his gun at himself during a duel. In the midst of the action, Johnny happens to touch the steel ball and feels a power surging through his legs, allowing him to stand up for the first time in two y",
    "genre": [
      "Action",
      "Adventure",
      "Mystery",
      "Supernatural"
    ],
    "rating": 9.1,
    "year": 2026,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "47 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "47 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "47 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "47 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "47 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "47 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "47 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "47 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "47 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "47 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "47 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "47 min"
      }
    ],
    "totalEpisodes": 12,
    "image": "https://cdn.myanimelist.net/images/anime/1448/154111.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1448/154111l.jpg",
    "type": "both",
    "studio": "David Production",
    "duration": "47 min"
  },
  {
    "id": "steinsgate",
    "title": "Steins;Gate",
    "titleJapanese": "STEINS;GATE",
    "synopsis": "Eccentric scientist Rintarou Okabe has a never-ending thirst for scientific exploration. Together with his ditzy but well-meaning friend Mayuri Shiina and his roommate Itaru Hashida, Okabe founds the Future Gadget Laboratory in the hopes of creating technological innovations that baffle the human psyche. Despite claims of grandeur, the only notable \"gadget\" the trio have created is a microwave that has the mystifying power to turn bananas into green goo.\n\nHowever, when Okabe attends a conference on time travel, he experiences a series of strange events that lead him to believe that there is more to the \"Phone Microwave\" gadget than meets the eye. Apparently able to send text messages into the past using the microwave, Okabe dabbles further with the \"time machine,\" attracting the ire and attention of the mysterious organization SERN.\n\nDue to the novel discovery, Okabe and his friends find themselves in an ever-present danger. As he works to mitigate the damage his invention has caused t",
    "genre": [
      "Drama",
      "Sci-Fi",
      "Suspense"
    ],
    "rating": 9.1,
    "year": 2011,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 24,
    "image": "https://cdn.myanimelist.net/images/anime/1935/127974.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1935/127974l.jpg",
    "type": "both",
    "studio": "White Fox",
    "duration": "24 min"
  },
  {
    "id": "chainsaw-man-the-movie-reze-arc",
    "title": "Chainsaw Man – The Movie: Reze Arc",
    "titleJapanese": "劇場版 チェンソーマン レゼ篇",
    "synopsis": "Despite the immediate challenges following becoming a devil hunter with the Public Safety Bureau, Denji has quickly adapted to his new life and responsibilities. As the chaos of Denji's first ordeal with Public Safety settles down, the elite devil hunter Makima decides to take Denji out on a date. Although the date strengthens his affection for Makima and he swears to not fall in love with anyone else, Denji soon finds himself in a tricky situation when he meets a seemingly innocent cafe worker named Reze.\n\nWith her forward and flirty demeanor, Reze immediately captures Denji's heart, driving him to frequent the cafe where she works and deepen his relationship with her. However, Denji is completely oblivious to the fact that meeting Reze might have grave consequences beyond simply deciding which woman his heart belongs to. \n\n[Written by MAL Rewrite]",
    "genre": [
      "Action",
      "Fantasy"
    ],
    "rating": 9.1,
    "year": 2025,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "39 min"
      }
    ],
    "totalEpisodes": 1,
    "image": "https://cdn.myanimelist.net/images/anime/1763/150638.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1763/150638l.jpg",
    "type": "both",
    "studio": "MAPPA",
    "duration": "39 min"
  },
  {
    "id": "attack-on-titan-season-3-part-2",
    "title": "Attack on Titan Season 3 Part 2",
    "titleJapanese": "進撃の巨人 Season3 Part.2",
    "synopsis": "Seeking to restore humanity's diminishing hope, the Survey Corps embark on a mission to retake Wall Maria, where the battle against the merciless \"Titans\" takes the stage once again.\n\nReturning to the tattered Shiganshina District that was once his home, Eren Yeager and the Corps find the town oddly unoccupied by Titans. Even after the outer gate is plugged, they strangely encounter no opposition. The mission progresses smoothly until Armin Arlert, highly suspicious of the enemy's absence, discovers distressing signs of a potential scheme against them. \n\nShingeki no Kyojin Season 3 Part 2 follows Eren as he vows to take back everything that was once his. Alongside him, the Survey Corps strive—through countless sacrifices—to carve a path towards victory and uncover the secrets locked away in the Yeager family's basement.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Action",
      "Drama",
      "Suspense"
    ],
    "rating": 9.1,
    "year": 2019,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 10,
    "image": "https://cdn.myanimelist.net/images/anime/1517/100633.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1517/100633l.jpg",
    "type": "both",
    "studio": "Wit Studio",
    "duration": "23 min"
  },
  {
    "id": "gintama-season-4",
    "title": "Gintama Season 4",
    "titleJapanese": "銀魂°",
    "synopsis": "Gintoki, Shinpachi, and Kagura return as the fun-loving but broke members of the Yorozuya team! Living in an alternate-reality Edo, where swords are prohibited and alien overlords have conquered Japan, they try to thrive on doing whatever work they can get their hands on. However, Shinpachi and Kagura still haven't been paid... Does Gin-chan really spend all that cash playing pachinko?\n\nMeanwhile, when Gintoki drunkenly staggers home one night, an alien spaceship crashes nearby. A fatally injured crew member emerges from the ship and gives Gintoki a strange, clock-shaped device, warning him that it is incredibly powerful and must be safeguarded. Mistaking it for his alarm clock, Gintoki proceeds to smash the device the next morning and suddenly discovers that the world outside his apartment has come to a standstill. With Kagura and Shinpachi at his side, he sets off to get the device fixed; though, as usual, nothing is ever that simple for the Yorozuya team.\n\nFilled with tongue-in-chee",
    "genre": [
      "Action",
      "Comedy",
      "Sci-Fi"
    ],
    "rating": 9.1,
    "year": 2015,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 25,
        "number": 25,
        "title": "Episode 25",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 26,
        "number": 26,
        "title": "Episode 26",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 27,
        "number": 27,
        "title": "Episode 27",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 28,
        "number": 28,
        "title": "Episode 28",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 29,
        "number": 29,
        "title": "Episode 29",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 30,
        "number": 30,
        "title": "Episode 30",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 31,
        "number": 31,
        "title": "Episode 31",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 32,
        "number": 32,
        "title": "Episode 32",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 33,
        "number": 33,
        "title": "Episode 33",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 34,
        "number": 34,
        "title": "Episode 34",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 35,
        "number": 35,
        "title": "Episode 35",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 36,
        "number": 36,
        "title": "Episode 36",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 37,
        "number": 37,
        "title": "Episode 37",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 38,
        "number": 38,
        "title": "Episode 38",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 39,
        "number": 39,
        "title": "Episode 39",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 40,
        "number": 40,
        "title": "Episode 40",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 41,
        "number": 41,
        "title": "Episode 41",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 42,
        "number": 42,
        "title": "Episode 42",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 43,
        "number": 43,
        "title": "Episode 43",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 44,
        "number": 44,
        "title": "Episode 44",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 45,
        "number": 45,
        "title": "Episode 45",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 46,
        "number": 46,
        "title": "Episode 46",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 47,
        "number": 47,
        "title": "Episode 47",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 48,
        "number": 48,
        "title": "Episode 48",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 49,
        "number": 49,
        "title": "Episode 49",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 50,
        "number": 50,
        "title": "Episode 50",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 50,
    "image": "https://cdn.myanimelist.net/images/anime/3/72078.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/3/72078l.jpg",
    "type": "both",
    "studio": "Bandai Namco Pictures",
    "duration": "24 min"
  },
  {
    "id": "gintama-the-very-final",
    "title": "Gintama: The Very Final",
    "titleJapanese": "銀魂 THE FINAL",
    "synopsis": "Two years have passed following the Tendoshuu's invasion of the O-Edo Central Terminal. Since then, the Yorozuya have gone their separate ways. Foreseeing Utsuro's return, Gintoki Sakata begins surveying Earth's ley lines for traces of the other man's Altana. After an encounter with the remnants of the Tendoshuu—who continue to press on in search of immortality—Gintoki returns to Edo.\n\nLater, the regrouped Shinsengumi and Yorozuya begin an attack on the occupied Central Terminal. With the Altana harvested by the wreckage of the Tendoshuu's ship in danger of detonating, the Yorozuya and their allies fight their enemies while the safety of Edo—and the rest of the world—hangs in the balance. Fulfilling the wishes of their teacher, Shouyou Yoshida's former students unite and relive their pasts one final time in an attempt to save their futures.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Action",
      "Comedy",
      "Drama",
      "Sci-Fi"
    ],
    "rating": 9.1,
    "year": 2021,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "44 min"
      }
    ],
    "totalEpisodes": 1,
    "image": "https://cdn.myanimelist.net/images/anime/1245/116760.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1245/116760l.jpg",
    "type": "both",
    "studio": "Bandai Namco Pictures",
    "duration": "44 min"
  },
  {
    "id": "hunter-x-hunter",
    "title": "Hunter x Hunter",
    "titleJapanese": "HUNTER×HUNTER（ハンター×ハンター）",
    "synopsis": "Hunters devote themselves to accomplishing hazardous tasks, all from traversing the world's uncharted territories to locating rare items and monsters. Before becoming a Hunter, one must pass the Hunter Examination—a high-risk selection process in which most applicants end up handicapped or worse, deceased.\n\nAmbitious participants who challenge the notorious exam carry their own reason. What drives 12-year-old Gon Freecss is finding Ging, his father and a Hunter himself. Believing that he will meet his father by becoming a Hunter, Gon takes the first step to walk the same path.\n\nDuring the Hunter Examination, Gon befriends the medical student Leorio Paladiknight, the vindictive Kurapika, and ex-assassin Killua Zoldyck. While their motives vastly differ from each other, they band together for a common goal and begin to venture into a perilous world.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "rating": 9,
    "year": 2011,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 25,
        "number": 25,
        "title": "Episode 25",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 26,
        "number": 26,
        "title": "Episode 26",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 27,
        "number": 27,
        "title": "Episode 27",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 28,
        "number": 28,
        "title": "Episode 28",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 29,
        "number": 29,
        "title": "Episode 29",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 30,
        "number": 30,
        "title": "Episode 30",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 31,
        "number": 31,
        "title": "Episode 31",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 32,
        "number": 32,
        "title": "Episode 32",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 33,
        "number": 33,
        "title": "Episode 33",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 34,
        "number": 34,
        "title": "Episode 34",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 35,
        "number": 35,
        "title": "Episode 35",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 36,
        "number": 36,
        "title": "Episode 36",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 37,
        "number": 37,
        "title": "Episode 37",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 38,
        "number": 38,
        "title": "Episode 38",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 39,
        "number": 39,
        "title": "Episode 39",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 40,
        "number": 40,
        "title": "Episode 40",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 41,
        "number": 41,
        "title": "Episode 41",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 42,
        "number": 42,
        "title": "Episode 42",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 43,
        "number": 43,
        "title": "Episode 43",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 44,
        "number": 44,
        "title": "Episode 44",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 45,
        "number": 45,
        "title": "Episode 45",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 46,
        "number": 46,
        "title": "Episode 46",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 47,
        "number": 47,
        "title": "Episode 47",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 48,
        "number": 48,
        "title": "Episode 48",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 49,
        "number": 49,
        "title": "Episode 49",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 50,
        "number": 50,
        "title": "Episode 50",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 50,
    "image": "https://cdn.myanimelist.net/images/anime/1337/99013.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1337/99013l.jpg",
    "type": "both",
    "studio": "Madhouse",
    "duration": "23 min"
  },
  {
    "id": "gintama-season-2",
    "title": "Gintama Season 2",
    "titleJapanese": "銀魂'",
    "synopsis": "After a one-year hiatus, Shinpachi Shimura returns to Edo, only to stumble upon a shocking surprise: Gintoki and Kagura, his fellow Yorozuya members, have become completely different characters! Fleeing from the Yorozuya headquarters in confusion, Shinpachi finds that all the denizens of Edo have undergone impossibly extreme changes, in both appearance and personality. Most unbelievably, his sister Otae has married the Shinsengumi chief and shameless stalker Isao Kondou and is pregnant with their first child.\n\nBewildered, Shinpachi agrees to join the Shinsengumi at Otae and Kondou's request and finds even more startling transformations afoot both in and out of the ranks of the the organization. However, discovering that Vice Chief Toushirou Hijikata has remained unchanged, Shinpachi and his unlikely Shinsengumi ally set out to return the city of Edo to how they remember it.\n\nWith even more dirty jokes, tongue-in-cheek parodies, and shameless references, Gintama' follows the Yorozuya te",
    "genre": [
      "Action",
      "Comedy",
      "Sci-Fi"
    ],
    "rating": 9,
    "year": 2011,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 25,
        "number": 25,
        "title": "Episode 25",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 26,
        "number": 26,
        "title": "Episode 26",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 27,
        "number": 27,
        "title": "Episode 27",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 28,
        "number": 28,
        "title": "Episode 28",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 29,
        "number": 29,
        "title": "Episode 29",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 30,
        "number": 30,
        "title": "Episode 30",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 31,
        "number": 31,
        "title": "Episode 31",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 32,
        "number": 32,
        "title": "Episode 32",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 33,
        "number": 33,
        "title": "Episode 33",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 34,
        "number": 34,
        "title": "Episode 34",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 35,
        "number": 35,
        "title": "Episode 35",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 36,
        "number": 36,
        "title": "Episode 36",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 37,
        "number": 37,
        "title": "Episode 37",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 38,
        "number": 38,
        "title": "Episode 38",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 39,
        "number": 39,
        "title": "Episode 39",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 40,
        "number": 40,
        "title": "Episode 40",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 41,
        "number": 41,
        "title": "Episode 41",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 42,
        "number": 42,
        "title": "Episode 42",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 43,
        "number": 43,
        "title": "Episode 43",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 44,
        "number": 44,
        "title": "Episode 44",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 45,
        "number": 45,
        "title": "Episode 45",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 46,
        "number": 46,
        "title": "Episode 46",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 47,
        "number": 47,
        "title": "Episode 47",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 48,
        "number": 48,
        "title": "Episode 48",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 49,
        "number": 49,
        "title": "Episode 49",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 50,
        "number": 50,
        "title": "Episode 50",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 50,
    "image": "https://cdn.myanimelist.net/images/anime/4/50361.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/4/50361l.jpg",
    "type": "both",
    "studio": "Sunrise",
    "duration": "24 min"
  },
  {
    "id": "gintama-enchousen",
    "title": "Gintama: Enchousen",
    "titleJapanese": "銀魂' 延長戦",
    "synopsis": "While Gintoki Sakata was away, the Yorozuya found themselves a new leader: Kintoki, Gintoki's golden-haired doppelganger. In order to regain his former position, Gintoki will need the help of those around him, a troubling feat when no one can remember him! Between Kintoki and Gintoki, who will claim the throne as the main character?\n\nIn addition, Yorozuya make a trip back down to red-light district of Yoshiwara to aid an elderly courtesan in her search for her long-lost lover. Although the district is no longer in chains beneath the earth's surface, the trio soon learn of the tragic backstories of Yoshiwara's inhabitants that still haunt them. With flashback after flashback, this quest has Yorozuya witnessing everlasting love and protecting it as best they can with their hearts and souls.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Action",
      "Comedy",
      "Sci-Fi"
    ],
    "rating": 9,
    "year": 2012,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 13,
    "image": "https://cdn.myanimelist.net/images/anime/1452/123686.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1452/123686l.jpg",
    "type": "both",
    "studio": "Sunrise",
    "duration": "24 min"
  },
  {
    "id": "legend-of-the-galactic-heroes",
    "title": "Legend of the Galactic Heroes",
    "titleJapanese": "銀河英雄伝説",
    "synopsis": "The 150-year-long stalemate between the two interstellar superpowers, the Galactic Empire and the Free Planets Alliance, comes to an end when a new generation of leaders arises: the idealistic military genius Reinhard von Lohengramm, and the FPA's reserved historian, Yang Wenli.\n\nWhile Reinhard climbs the ranks of the Empire with the aid of his childhood friend, Siegfried Kircheis, he must fight not only the war, but also the remnants of the crumbling Goldenbaum Dynasty in order to free his sister from the Kaiser and unify humanity under one genuine ruler. Meanwhile, on the other side of the galaxy, Yang—a strong supporter of democratic ideals—has to stand firm in his beliefs, despite the struggles of the FPA, and show his pupil, Julian Mintz, that autocracy is not the solution.\n\nAs ideologies clash amidst the war's many casualties, the two strategic masterminds must ask themselves what the real reason behind their battle is.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Drama",
      "Sci-Fi"
    ],
    "rating": 9,
    "year": 1988,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 25,
        "number": 25,
        "title": "Episode 25",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 26,
        "number": 26,
        "title": "Episode 26",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 27,
        "number": 27,
        "title": "Episode 27",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 28,
        "number": 28,
        "title": "Episode 28",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 29,
        "number": 29,
        "title": "Episode 29",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 30,
        "number": 30,
        "title": "Episode 30",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 31,
        "number": 31,
        "title": "Episode 31",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 32,
        "number": 32,
        "title": "Episode 32",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 33,
        "number": 33,
        "title": "Episode 33",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 34,
        "number": 34,
        "title": "Episode 34",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 35,
        "number": 35,
        "title": "Episode 35",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 36,
        "number": 36,
        "title": "Episode 36",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 37,
        "number": 37,
        "title": "Episode 37",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 38,
        "number": 38,
        "title": "Episode 38",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 39,
        "number": 39,
        "title": "Episode 39",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 40,
        "number": 40,
        "title": "Episode 40",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 41,
        "number": 41,
        "title": "Episode 41",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 42,
        "number": 42,
        "title": "Episode 42",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 43,
        "number": 43,
        "title": "Episode 43",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 44,
        "number": 44,
        "title": "Episode 44",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 45,
        "number": 45,
        "title": "Episode 45",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 46,
        "number": 46,
        "title": "Episode 46",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 47,
        "number": 47,
        "title": "Episode 47",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 48,
        "number": 48,
        "title": "Episode 48",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 49,
        "number": 49,
        "title": "Episode 49",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 50,
        "number": 50,
        "title": "Episode 50",
        "thumbnail": "",
        "duration": "26 min"
      }
    ],
    "totalEpisodes": 50,
    "image": "https://cdn.myanimelist.net/images/anime/1976/142016.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1976/142016l.jpg",
    "type": "both",
    "studio": "K-Factory",
    "duration": "26 min"
  },
  {
    "id": "one-piece-fan-letter",
    "title": "One Piece Fan Letter",
    "titleJapanese": "ONE PIECE FAN LETTER",
    "synopsis": "Although the golden age of piracy is about to reach new heights, most people do not seek the glory of finding the elusive One Piece—a treasure signifying a new conqueror of all seas that was once embodied by the legendary King of the Pirates, Gol D. Roger. However, even if civilians generally despise pirates, they secretly cheer for at least one of them. \n\nOne red-headed girl from Sabaody Archipelago is no exception: She reveres Nami, the ingenious female navigator of Monkey D. Luffy's Straw Hat crew. Determined to deliver a fan letter to her idol, the Sabaody child is prepared to challenge forces of authority who strive to prevent Luffy and his friends from departing for their next destination: the New World. But to succeed, Nami's fan may need to risk her life and interfere with the Marines' plans, potentially causing devastating consequences for the wider world.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "rating": 9,
    "year": 2024,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 1,
    "image": "https://cdn.myanimelist.net/images/anime/1455/146229.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1455/146229l.jpg",
    "type": "both",
    "studio": "Toei Animation",
    "duration": "24 min"
  },
  {
    "id": "gintama-season-5",
    "title": "Gintama Season 5",
    "titleJapanese": "銀魂。",
    "synopsis": "After joining the resistance against the bakufu, Gintoki and the gang are in hiding, along with Katsura and his Joui rebels. The Yorozuya is soon approached by Nobume Imai and two members of the Kiheitai, who explain that the Harusame pirates have turned against 7th Division Captain Kamui and their former ally Takasugi. The Kiheitai present Gintoki with a job: find Takasugi, who has been missing since his ship was ambushed in a Harusame raid. Nobume also makes a stunning revelation regarding the Tendoushuu, a secret organization pulling the strings of numerous factions, and their leader Utsuro, the shadowy figure with an uncanny resemblance to Gintoki's former teacher.\n\nHitching a ride on Sakamoto's space ship, the Yorozuya and Katsura set out for Rakuyou, Kagura's home planet, where the various factions have gathered and tensions are brewing. Long-held grudges, political infighting, and the Tendoushuu's sinister overarching plan finally culminate into a massive, decisive battle on Rak",
    "genre": [
      "Action",
      "Comedy",
      "Sci-Fi"
    ],
    "rating": 9,
    "year": 2017,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 12,
    "image": "https://cdn.myanimelist.net/images/anime/3/83528.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/3/83528l.jpg",
    "type": "both",
    "studio": "Bandai Namco Pictures",
    "duration": "24 min"
  },
  {
    "id": "bleach-thousand-year-blood-war",
    "title": "Bleach: Thousand-Year Blood War",
    "titleJapanese": "BLEACH 千年血戦篇",
    "synopsis": "Substitute Soul Reaper Ichigo Kurosaki spends his days fighting against Hollows, dangerous evil spirits that threaten Karakura Town. Ichigo carries out his quest with his closest allies: Orihime Inoue, his childhood friend with a talent for healing; Yasutora Sado, his high school classmate with superhuman strength; and Uryuu Ishida, Ichigo's Quincy rival.\n\nIchigo's vigilante routine is disrupted by the sudden appearance of Asguiaro Ebern, a dangerous Arrancar who heralds the return of Yhwach, an ancient Quincy king. Yhwach seeks to reignite the historic blood feud between Soul Reaper and Quincy, and he sets his sights on erasing both the human world and the Soul Society for good.\n\nYhwach launches a two-pronged invasion into both the Soul Society and Hueco Mundo, the home of Hollows and Arrancar. In retaliation, Ichigo and his friends must fight alongside old allies and enemies alike to end Yhwach's campaign of carnage before the world itself comes to an end.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Action",
      "Adventure",
      "Supernatural"
    ],
    "rating": 9,
    "year": 2022,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 13,
    "image": "https://cdn.myanimelist.net/images/anime/1908/135431.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1908/135431l.jpg",
    "type": "both",
    "studio": "Studio Pierrot",
    "duration": "24 min"
  },
  {
    "id": "kaguya-sama-love-is-war-ultra-romantic",
    "title": "Kaguya-sama: Love is War -Ultra Romantic-",
    "titleJapanese": "かぐや様は告らせたい-ウルトラロマンティック-",
    "synopsis": "The elite members of Shuchiin Academy's student council continue their competitive day-to-day antics. Council president Miyuki Shirogane clashes daily against vice-president Kaguya Shinomiya, each fighting tooth and nail to trick the other into confessing their romantic love. Kaguya struggles within the strict confines of her wealthy, uptight family, rebelling against her cold default demeanor as she warms to Shirogane and the rest of her friends.\n\nMeanwhile, council treasurer Yuu Ishigami suffers under the weight of his hopeless crush on Tsubame Koyasu, a popular upperclassman who helps to instill a new confidence in him. Miko Iino, the newest student council member, grows closer to the rule-breaking Ishigami while striving to overcome her own authoritarian moral code.\n\nAs love further blooms at Shuchiin Academy, the student council officers drag their outsider friends into increasingly comedic conflicts.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Comedy",
      "Romance"
    ],
    "rating": 9,
    "year": 2022,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 13,
    "image": "https://cdn.myanimelist.net/images/anime/1160/122627.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1160/122627l.jpg",
    "type": "both",
    "studio": "A-1 Pictures",
    "duration": "23 min"
  },
  {
    "id": "fruits-basket-the-final-season",
    "title": "Fruits Basket: The Final Season",
    "titleJapanese": "フルーツバスケット The Final",
    "synopsis": "Hundreds of years ago, the Chinese zodiac spirits and their god swore to stay together eternally. United by this promise, the possessed members of the Souma family shall always return to each other under any circumstances. Yet, when these bonds shackle them from freedom, it becomes an undesirable burden—a curse. As head of the clan, Akito is convinced that he shares a special connection with the other Soumas. While he desperately clings to this fantasy, the rest of the family remains isolated and suppressed by the fear of punishment.\n\nTooru Honda, who has grown attached to the Soumas, is determined to break the chains that bind them. Her companionship with the family and her friends encourages her to move forward with lifting the curse. However, due to confounding revelations, she struggles to find the tenacity to continue her endeavors. With time slowly withering away, Tooru contends with an uncertain future in hopes of reaching the tranquility that may lie beyond all this commotion.\n",
    "genre": [
      "Drama",
      "Romance",
      "Supernatural"
    ],
    "rating": 8.9,
    "year": 2021,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 13,
    "image": "https://cdn.myanimelist.net/images/anime/1085/114792.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1085/114792l.jpg",
    "type": "both",
    "studio": "TMS Entertainment",
    "duration": "23 min"
  },
  {
    "id": "clannad-after-story",
    "title": "Clannad: After Story",
    "titleJapanese": "CLANNAD〜AFTER STORY〜 クラナド アフターストーリー",
    "synopsis": "Tomoya Okazaki and Nagisa Furukawa have graduated from high school, and together, they experience the emotional rollercoaster of growing up. Unable to decide on a course for his future, Tomoya learns the value of a strong work ethic and discovers the strength of Nagisa's support. Through the couple's dedication and unity of purpose, they push forward to confront their personal problems, deepen their old relationships, and create new bonds.\n\nTime also moves on in the Illusionary World. As the plains grow cold with the approach of winter, the Illusionary Girl and the Garbage Doll are presented with a difficult situation that reveals the World's true purpose.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Drama",
      "Romance"
    ],
    "rating": 8.9,
    "year": 2008,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 24,
    "image": "https://cdn.myanimelist.net/images/anime/1299/110774.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1299/110774l.jpg",
    "type": "both",
    "studio": "Kyoto Animation",
    "duration": "24 min"
  },
  {
    "id": "gintama",
    "title": "Gintama",
    "titleJapanese": "銀魂",
    "synopsis": "Edo is a city that was home to the vigor and ambition of samurai across the country. However, following feudal Japan's surrender to powerful aliens known as the \"Amanto,\" those aspirations now seem unachievable. With the once-influential shogunate rebuilt as a puppet government, a new law is passed that promptly prohibits all swords in public. \n\nEnter Gintoki Sakata, an eccentric silver-haired man who always carries around a wooden sword and maintains his stature as a samurai despite the ban. As the founder of Yorozuya, a small business for odd jobs, Gintoki often embarks on endeavors to help other people—though usually in rather strange and unforeseen ways. \n\nAssisted by Shinpachi Shimura, a boy with glasses supposedly learning the way of the samurai; Kagura, a tomboyish girl with superhuman strength and an endless appetite; and Sadaharu, their giant pet dog who loves biting on people's heads, the Yorozuya encounter anything from alien royalty to scuffles with local gangs in the ever-",
    "genre": [
      "Action",
      "Comedy",
      "Sci-Fi"
    ],
    "rating": 8.9,
    "year": 2006,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 25,
        "number": 25,
        "title": "Episode 25",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 26,
        "number": 26,
        "title": "Episode 26",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 27,
        "number": 27,
        "title": "Episode 27",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 28,
        "number": 28,
        "title": "Episode 28",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 29,
        "number": 29,
        "title": "Episode 29",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 30,
        "number": 30,
        "title": "Episode 30",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 31,
        "number": 31,
        "title": "Episode 31",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 32,
        "number": 32,
        "title": "Episode 32",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 33,
        "number": 33,
        "title": "Episode 33",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 34,
        "number": 34,
        "title": "Episode 34",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 35,
        "number": 35,
        "title": "Episode 35",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 36,
        "number": 36,
        "title": "Episode 36",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 37,
        "number": 37,
        "title": "Episode 37",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 38,
        "number": 38,
        "title": "Episode 38",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 39,
        "number": 39,
        "title": "Episode 39",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 40,
        "number": 40,
        "title": "Episode 40",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 41,
        "number": 41,
        "title": "Episode 41",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 42,
        "number": 42,
        "title": "Episode 42",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 43,
        "number": 43,
        "title": "Episode 43",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 44,
        "number": 44,
        "title": "Episode 44",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 45,
        "number": 45,
        "title": "Episode 45",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 46,
        "number": 46,
        "title": "Episode 46",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 47,
        "number": 47,
        "title": "Episode 47",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 48,
        "number": 48,
        "title": "Episode 48",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 49,
        "number": 49,
        "title": "Episode 49",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 50,
        "number": 50,
        "title": "Episode 50",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 50,
    "image": "https://cdn.myanimelist.net/images/anime/10/73274.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/10/73274l.jpg",
    "type": "both",
    "studio": "Sunrise",
    "duration": "24 min"
  },
  {
    "id": "a-silent-voice",
    "title": "A Silent Voice",
    "titleJapanese": "聲の形",
    "synopsis": "As a wild youth, elementary school student Shouya Ishida sought to beat boredom in the cruelest ways. When the deaf Shouko Nishimiya transfers into his class, Shouya and the rest of his class thoughtlessly bully her for fun. However, when her mother notifies the school, he is singled out and blamed for everything done to her. With Shouko transferring out of the school, Shouya is left at the mercy of his classmates. He is heartlessly ostracized all throughout elementary and middle school, while teachers turn a blind eye.\n\nNow in his third year of high school, Shouya is still plagued by his wrongdoings as a young boy. Sincerely regretting his past actions, he sets out on a journey of redemption: to meet Shouko once more and make amends.\n\nKoe no Katachi tells the heartwarming tale of Shouya's reunion with Shouko and his honest attempts to redeem himself, all while being continually haunted by the shadows of his past.\n \n[Written by MAL Rewrite]",
    "genre": [
      "Award Winning",
      "Drama"
    ],
    "rating": 8.9,
    "year": 2016,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "10 min"
      }
    ],
    "totalEpisodes": 1,
    "image": "https://cdn.myanimelist.net/images/anime/1122/96435.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1122/96435l.jpg",
    "type": "both",
    "studio": "Kyoto Animation",
    "duration": "10 min"
  },
  {
    "id": "code-geass-lelouch-of-the-rebellion-r2",
    "title": "Code Geass: Lelouch of the Rebellion R2",
    "titleJapanese": "コードギアス 反逆のルルーシュ R2",
    "synopsis": "One year has passed since the Black Rebellion, a failed uprising against the Holy Britannian Empire led by the masked vigilante Zero, who is now missing. At a loss without their revolutionary leader, Area 11's resistance group—the Black Knights—find themselves too powerless to combat the brutality inflicted upon the Elevens by Britannia, which has increased significantly in order to crush any hope of a future revolt. \n\nLelouch Lamperouge, having lost all memory of his double life, is living peacefully alongside his friends as a high school student at Ashford Academy. His former partner C.C., unable to accept this turn of events, takes it upon herself to remind him of his past purpose, hoping that the mastermind Zero will rise once again to finish what he started.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Award Winning",
      "Drama",
      "Sci-Fi"
    ],
    "rating": 8.9,
    "year": 2008,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 25,
        "number": 25,
        "title": "Episode 25",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 25,
    "image": "https://cdn.myanimelist.net/images/anime/1088/135089.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1088/135089l.jpg",
    "type": "both",
    "studio": "Sunrise",
    "duration": "24 min"
  },
  {
    "id": "mushoku-tensei-jobless-reincarnation-season-3",
    "title": "Mushoku Tensei: Jobless Reincarnation Season 3",
    "titleJapanese": "無職転生 III ～異世界行ったら本気だす～",
    "synopsis": "Third season of Mushoku Tensei: Isekai Ittara Honki Dasu.",
    "genre": [
      "Adventure",
      "Drama",
      "Fantasy",
      "Ecchi"
    ],
    "rating": 8.9,
    "year": 2026,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 14,
    "image": "https://cdn.myanimelist.net/images/anime/1527/158340.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1527/158340l.jpg",
    "type": "both",
    "studio": "Studio Bind",
    "duration": "23 min"
  },
  {
    "id": "the-apothecary-diaries-season-2",
    "title": "The Apothecary Diaries Season 2",
    "titleJapanese": "薬屋のひとりごと 第2期",
    "synopsis": "Using her wit and vast knowledge of medicines and poisons alike, Maomao played a pivotal role in solving a series of mysteries and conspiracies that plagued the imperial court. Having recently come to terms with the secrets of her parents, she returns to fulfill her normal duties on behalf of the emperor's highest-ranking consorts. Maomao also works alongside the eunuch Jinshi to better the consorts' many ladies-in-waiting, including helping them learn to read.\n\nHowever, with the arrival of a merchant caravan comes a new wave of intrigue. A pattern of strange coincidences involving the visitors and their wares unsettles Maomao, driving her to investigate the puzzling circumstances behind the convoy. As dangers from both outside and within threaten the balance between the imperial concubines, Maomao continues to utilize her cunning and medical expertise to keep the women safe from harm.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Drama",
      "Mystery"
    ],
    "rating": 8.9,
    "year": 2025,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 24,
    "image": "https://cdn.myanimelist.net/images/anime/1025/147458.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1025/147458l.jpg",
    "type": "both",
    "studio": "OLM",
    "duration": "24 min"
  },
  {
    "id": "march-comes-in-like-a-lion-2nd-season",
    "title": "March Comes In Like a Lion 2nd Season",
    "titleJapanese": "3月のライオン 第2シリーズ",
    "synopsis": "Now in his second year of high school, Rei Kiriyama continues pushing through his struggles in the professional shogi world as well as his personal life. Surrounded by vibrant personalities at the shogi hall, the school club, and in the local community, his solitary shell slowly begins to crack. Among them are the three Kawamoto sisters—Akari, Hinata, and Momo—who forge an affectionate and familial bond with Rei. Through these ties, he realizes that everyone is burdened by their own emotional hardships and begins learning how to rely on others while supporting them in return. \n\nNonetheless, the life of a professional is not easy. Between tournaments, championships, and title matches, the pressure mounts as Rei advances through the ranks and encounters incredibly skilled opponents. As he manages his relationships with those who have grown close to him, the shogi player continues to search for the reason he plays the game that defines his career.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Drama"
    ],
    "rating": 8.9,
    "year": 2017,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "25 min"
      }
    ],
    "totalEpisodes": 22,
    "image": "https://cdn.myanimelist.net/images/anime/3/88469.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/3/88469l.jpg",
    "type": "both",
    "studio": "Shaft",
    "duration": "25 min"
  },
  {
    "id": "gintama-the-movie-the-final-chapter-be-forever-yorozuya",
    "title": "Gintama: The Movie: The Final Chapter: Be Forever Yorozuya",
    "titleJapanese": "劇場版 銀魂 完結篇 万事屋よ永遠なれ",
    "synopsis": "When Gintoki apprehends a movie pirate at a premiere, he checks the camera's footage and finds himself transported to a bleak, post-apocalyptic version of Edo, where a mysterious epidemic called the \"White Plague\" has ravished the world's population. It turns out that the movie pirate wasn't a pirate after all—it was an android time machine, and Gintoki has been hurtled five years into the future! Shinpachi and Kagura, his Yorozuya cohorts, have had a falling out and are now battle-hardened solo vigilantes and he himself has been missing for years, disappearing without a trace after scribbling a strange message in his journal.\n\nSetting out in the disguise given to him by the android time machine, Gintoki haphazardly reunites the Yorozuya team to investigate the White Plague, and soon discovers that the key to saving the future lies in the darkness of his own past. Determined to confront a powerful foe, he makes an important discovery—with a ragtag band of friends and allies at his side",
    "genre": [
      "Action",
      "Comedy",
      "Sci-Fi"
    ],
    "rating": 8.9,
    "year": 2013,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "50 min"
      }
    ],
    "totalEpisodes": 1,
    "image": "https://cdn.myanimelist.net/images/anime/10/51723.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/10/51723l.jpg",
    "type": "both",
    "studio": "Sunrise",
    "duration": "50 min"
  },
  {
    "id": "monster",
    "title": "Monster",
    "titleJapanese": "モンスター",
    "synopsis": "Dr. Kenzou Tenma, an elite neurosurgeon recently engaged to his hospital director's daughter, is well on his way to ascending the hospital hierarchy. That is until one night, a seemingly small event changes Dr. Tenma's life forever. While preparing to perform surgery on someone, he gets a call from the hospital director telling him to switch patients and instead perform life-saving brain surgery on a famous performer. His fellow doctors, fiancée, and the hospital director applaud his accomplishment; but because of the switch, a poor immigrant worker is dead, causing Dr. Tenma to have a crisis of conscience.\n\nSo when a similar situation arises, Dr. Tenma stands his ground and chooses to perform surgery on the young boy Johan Liebert instead of the town's mayor. Unfortunately, this choice leads to serious ramifications for Dr. Tenma—losing his social standing being one of them. However, with the mysterious death of the director and two other doctors, Dr. Tenma's position is restored. Wit",
    "genre": [
      "Drama",
      "Mystery",
      "Suspense"
    ],
    "rating": 8.9,
    "year": 2004,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 25,
        "number": 25,
        "title": "Episode 25",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 26,
        "number": 26,
        "title": "Episode 26",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 27,
        "number": 27,
        "title": "Episode 27",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 28,
        "number": 28,
        "title": "Episode 28",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 29,
        "number": 29,
        "title": "Episode 29",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 30,
        "number": 30,
        "title": "Episode 30",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 31,
        "number": 31,
        "title": "Episode 31",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 32,
        "number": 32,
        "title": "Episode 32",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 33,
        "number": 33,
        "title": "Episode 33",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 34,
        "number": 34,
        "title": "Episode 34",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 35,
        "number": 35,
        "title": "Episode 35",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 36,
        "number": 36,
        "title": "Episode 36",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 37,
        "number": 37,
        "title": "Episode 37",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 38,
        "number": 38,
        "title": "Episode 38",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 39,
        "number": 39,
        "title": "Episode 39",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 40,
        "number": 40,
        "title": "Episode 40",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 41,
        "number": 41,
        "title": "Episode 41",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 42,
        "number": 42,
        "title": "Episode 42",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 43,
        "number": 43,
        "title": "Episode 43",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 44,
        "number": 44,
        "title": "Episode 44",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 45,
        "number": 45,
        "title": "Episode 45",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 46,
        "number": 46,
        "title": "Episode 46",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 47,
        "number": 47,
        "title": "Episode 47",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 48,
        "number": 48,
        "title": "Episode 48",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 49,
        "number": 49,
        "title": "Episode 49",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 50,
        "number": 50,
        "title": "Episode 50",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 50,
    "image": "https://cdn.myanimelist.net/images/anime/10/18793.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/10/18793l.jpg",
    "type": "both",
    "studio": "Madhouse",
    "duration": "24 min"
  },
  {
    "id": "gintama-silver-soul-arc-second-half-war",
    "title": "Gintama. Silver Soul Arc - Second Half War",
    "titleJapanese": "銀魂. 銀ノ魂篇 後半戦",
    "synopsis": "Following the temporary retreat of the Altana Liberation Army from the Kabuki District, the state of the war has seemingly improved. However, as the Oniwaban, Shinsengumi, and residents of the district combat the army's remnants, Edo's greatest inventor Gengai Hiraga is abducted. Responsible for causing the enemy's withdrawal by rendering their weapons useless, Gengai's nanomachine virus is now at risk of being shut down.\n\nMeanwhile, a laser capable of obliterating a planet is activated in Earth's orbit on the Liberation Army's mother ship. Another battle ensues when Shinsuke Takasugi and the rest of the Kiheitai arrive on the vessel to stop the weapon from firing. Forced to fight a war on two fronts, the Yorozuya and their allies must prevail on both sides to save Edo and the rest of the world.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Action",
      "Comedy",
      "Sci-Fi"
    ],
    "rating": 8.9,
    "year": 2018,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 14,
    "image": "https://cdn.myanimelist.net/images/anime/1776/96566.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1776/96566l.jpg",
    "type": "both",
    "studio": "Bandai Namco Pictures",
    "duration": "24 min"
  },
  {
    "id": "frieren-beyond-journeys-end-season-2",
    "title": "Frieren: Beyond Journey's End Season 2",
    "titleJapanese": "葬送のフリーレン 第2期",
    "synopsis": "Following the First-Class Mage Exam, the trio—elven mage Frieren, warrior Stark, and first-class mage Fern—gains access to the dangerous Northern Plateau. As the party presses onward toward Aureole, formidable adversaries force Stark to confront his insecurities, solidifying his resolve and his role as the party's frontliner. Meanwhile, Fern continues to cherish the gifts she has been blessed with throughout her life, each a reminder of those she holds dear.\n\nFrieren—still honoring her vow to understand humanity—revisits memories of her journey with the Hero's party and her fleeting encounter with a legendary figure. As she reflects on the passage of time, the elven mage quietly questions whether she has truly changed, yet in the small, almost subtle choices that she makes, there are signs that she might have become more human than she realizes.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Adventure",
      "Drama",
      "Fantasy"
    ],
    "rating": 8.9,
    "year": 2026,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 10,
    "image": "https://cdn.myanimelist.net/images/anime/1921/154528.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1921/154528l.jpg",
    "type": "both",
    "studio": "Madhouse",
    "duration": "24 min"
  },
  {
    "id": "attack-on-titan-final-season-the-final-chapters",
    "title": "Attack on Titan: Final Season - The Final Chapters",
    "titleJapanese": "進撃の巨人 The Final Season完結編",
    "synopsis": "In the wake of Eren Yeager's cataclysmic actions, his friends and former enemies form an alliance against his genocidal rampage. Though once bitter foes, Armin Arlert, Mikasa Ackerman, and the remaining members of the Scout Regiment join forces with Reiner Braun and the survivors of the Marleyan military. Their meager united front sets out on a mission to stop Eren's wrath and—if possible—save their old comrade in the process.\n\nAs Eren pushes forward at any cost, he battles his own internal turmoil. Although he feels immense remorse over his horrific invasion, Eren believes he harbors noble intentions: he believes the path ahead is the only way to save his friends and, to a greater extent, his people.\n\nThe opposing battalions spiral toward an inevitable final clash that may claim the lives of millions. Though they face an army of monsters beyond anything they could have previously imagined, Mikasa, Armin, and their allies stand brave in the face of certain doom.\n\n[Written by MAL Rewrit",
    "genre": [
      "Action",
      "Drama",
      "Suspense"
    ],
    "rating": 8.9,
    "year": 2023,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "12 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "12 min"
      }
    ],
    "totalEpisodes": 2,
    "image": "https://cdn.myanimelist.net/images/anime/1279/131078.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1279/131078l.jpg",
    "type": "both",
    "studio": "MAPPA",
    "duration": "12 min"
  },
  {
    "id": "owarimonogatari-second-season",
    "title": "Owarimonogatari Second Season",
    "titleJapanese": "終物語",
    "synopsis": "Following an encounter with oddity specialist Izuko Gaen, third-year high school student Koyomi Araragi wakes up in a strange, deserted void only to be greeted by a joyfully familiar face in an alarmingly unfamiliar place.  \n\nAraragi, with the help of his girlfriend Hitagi Senjougahara, maneuvers through the webs of his past and the perplexities of the present in search of answers. However, fate once again delivers him to the eccentric transfer student Ougi Oshino, who brings forth an unexpected proposal that may unearth the very foundation to which he is anchored. As Araragi peels back the layers of mystery surrounding an apparition, he discovers a truth not meant to be revealed.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Comedy",
      "Mystery",
      "Supernatural"
    ],
    "rating": 8.9,
    "year": 2017,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "22 min"
      }
    ],
    "totalEpisodes": 7,
    "image": "https://cdn.myanimelist.net/images/anime/6/87322.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/6/87322l.jpg",
    "type": "both",
    "studio": "Shaft",
    "duration": "22 min"
  },
  {
    "id": "the-apothecary-diaries",
    "title": "The Apothecary Diaries",
    "titleJapanese": "薬屋のひとりごと",
    "synopsis": "Maomao, an apothecary's daughter, has been plucked from her peaceful life and sold to the lowest echelons of the imperial court. Now merely a maid, Maomao settles into her new mundane life and hides her extensive knowledge of medicine in order to avoid any unwanted attention.\n\nNot long after Maomao's arrival, the emperor's infant children inexplicably begin to experience grave symptoms—almost as if a curse has been cast. The curious Maomao easily solves the mystery and, to remain out of the limelight, attempts to leave an anonymous tip. Unfortunately, the dashing and perceptive eunuch Jinshi sees through it and manages to single her out.\n\nIn recognition of her talent, Maomao is promoted to lady-in-waiting for the emperor's favorite concubine, Gyokuyou. As Maomao continues to remedy the numerous ailments afflicting the imperial court, her pharmaceutical expertise quickly proves indispensable.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Drama",
      "Mystery"
    ],
    "rating": 8.9,
    "year": 2023,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "22 min"
      }
    ],
    "totalEpisodes": 24,
    "image": "https://cdn.myanimelist.net/images/anime/1708/138033.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1708/138033l.jpg",
    "type": "both",
    "studio": "OLM",
    "duration": "22 min"
  },
  {
    "id": "kingdom-season-3",
    "title": "Kingdom Season 3",
    "titleJapanese": "キングダム 第3シリーズ",
    "synopsis": "Following the successful Sanyou campaign, the Qin army, including 1,000-Man Commander Xin, inches ever closer to fulfilling King Ying Zheng's dream of unifying China. With a major geographical foothold in the state of Wei now under its control, Qin sets its sights eastward toward the remaining warring states.\n\nMeanwhile Li Mu—an unparalleled strategist and the newly appointed prime minister of the state of Zhao—has taken advantage of Zhao's temporary truce with Qin to negotiate with the other states without interruption. Seemingly without warning, Ying Zheng receives news that armies from the states of Chu, Zhao, Wei, Han, Yan, and Qi have crossed into Qin territory. Realizing too late the purpose behind Li Mu's truce with Qin, Zheng quickly gathers his advisors to devise a plan to address the six-state coalition army on their doorstep. For the first time in history, the state of Qin faces complete destruction and must use every resource and strategy at their disposal to prevent themse",
    "genre": [
      "Action"
    ],
    "rating": 8.9,
    "year": 2020,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 25,
        "number": 25,
        "title": "Episode 25",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 26,
        "number": 26,
        "title": "Episode 26",
        "thumbnail": "",
        "duration": "25 min"
      }
    ],
    "totalEpisodes": 26,
    "image": "https://cdn.myanimelist.net/images/anime/1443/111830.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1443/111830l.jpg",
    "type": "both",
    "studio": "Studio Pierrot",
    "duration": "25 min"
  },
  {
    "id": "attack-on-titan-the-last-attack",
    "title": "Attack on Titan: The Last Attack",
    "titleJapanese": "劇場版 進撃の巨人 完結編 THE LAST ATTACK",
    "synopsis": "A compilation movie for Shingeki no Kyojin: The Final Season - Kanketsu-hen.",
    "genre": [
      "Action",
      "Drama",
      "Suspense"
    ],
    "rating": 8.8,
    "year": 2024,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 1,
    "image": "https://cdn.myanimelist.net/images/anime/1379/145452.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1379/145452l.jpg",
    "type": "both",
    "studio": "MAPPA",
    "duration": "24 min"
  },
  {
    "id": "vinland-saga-season-2",
    "title": "Vinland Saga Season 2",
    "titleJapanese": "ヴィンランド・サガ SEASON2",
    "synopsis": "After his father's death and the destruction of his village at the hands of English raiders, Einar wishes for a peaceful life with his family on their newly rebuilt farms. However, fate has other plans: his village is invaded once again. Einar watches helplessly as the marauding Danes burn his lands and slaughter his family. The invaders capture Einar and take him back to Denmark as a slave. \n\nEinar clings to his mother's final words to survive. He is purchased by Ketil, a kind slave owner and landlord who promises that Einar can regain his freedom in return for working in the fields. Soon, Einar encounters his new partner in farm cultivation—Thorfinn, a dejected and melancholic slave. As Einar and Thorfinn work together toward their freedom, they are haunted by both sins of the past and the ploys of the present. Yet they carry on, grasping for a glimmer of hope, redemption, and peace in a world that is nothing but unjust and unforgiving.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Action",
      "Adventure",
      "Drama"
    ],
    "rating": 8.8,
    "year": 2023,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "25 min"
      }
    ],
    "totalEpisodes": 24,
    "image": "https://cdn.myanimelist.net/images/anime/1170/124312.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1170/124312l.jpg",
    "type": "both",
    "studio": "MAPPA",
    "duration": "25 min"
  },
  {
    "id": "violet-evergarden-the-movie",
    "title": "Violet Evergarden: The Movie",
    "titleJapanese": "劇場版 ヴァイオレット・エヴァーガーデン",
    "synopsis": "Several years have passed since the end of The Great War. As the radio tower in Leidenschaftlich continues to be built, telephones will soon become more relevant, leading to a decline in demand for \"Auto Memory Dolls.\" Even so, Violet Evergarden continues to rise in fame after her constant success with writing letters. However, sometimes the one thing you long for is the one thing that does not appear.\n\nViolet Evergarden Movie follows Violet as she continues to comprehend the concept of emotion and the meaning of love. At the same time, she pursues a glimmer of hope that the man who once told her, \"I love you,\" may still be alive even after the many years that have passed.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Award Winning",
      "Drama"
    ],
    "rating": 8.8,
    "year": 2020,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "20 min"
      }
    ],
    "totalEpisodes": 1,
    "image": "https://cdn.myanimelist.net/images/anime/1825/110716.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1825/110716l.jpg",
    "type": "both",
    "studio": "Kyoto Animation",
    "duration": "20 min"
  },
  {
    "id": "your-name",
    "title": "Your Name.",
    "titleJapanese": "君の名は。",
    "synopsis": "Mitsuha Miyamizu, a high school girl, yearns to live the life of a boy in the bustling city of Tokyo—a dream that stands in stark contrast to her present life in the countryside. Meanwhile in the city, Taki Tachibana lives a busy life as a high school student while juggling his part-time job and hopes for a future in architecture.\n\nOne day, Mitsuha awakens in a room that is not her own and suddenly finds herself living the dream life in Tokyo—but in Taki's body! Elsewhere, Taki finds himself living Mitsuha's life in the humble countryside. In pursuit of an answer to this strange phenomenon, they begin to search for one another.\n\nKimi no Na wa. revolves around Mitsuha and Taki's actions, which begin to have a dramatic impact on each other's lives, weaving them into a fabric held together by fate and circumstance.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Award Winning",
      "Drama"
    ],
    "rating": 8.8,
    "year": 2016,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "46 min"
      }
    ],
    "totalEpisodes": 1,
    "image": "https://cdn.myanimelist.net/images/anime/5/87048.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/5/87048l.jpg",
    "type": "both",
    "studio": "CoMix Wave Films",
    "duration": "46 min"
  },
  {
    "id": "tomorrows-joe-2",
    "title": "Tomorrow's Joe 2",
    "titleJapanese": "あしたのジョー２",
    "synopsis": "Yabuki Joe is left downhearted and hopeless after a certain tragic event. In attempt to put the past behind him, Joe leaves the gym behind and begins wandering. On his travels he comes across the likes of Wolf Kanagushi and Goromaki Gondo, men who unintentionally fan the dying embers inside him, leading him to putting his wanderings to an end. His return home puts Joe back on the path to boxing, but unknown to himself and his trainer, he now suffers deep-set issues holding him back from fighting. In attempt to quell those issues, Carlos Rivera, a world renowned boxer is invited from Venezuela to help Joe recover.",
    "genre": [
      "Drama",
      "Sports"
    ],
    "rating": 8.8,
    "year": 1980,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 25,
        "number": 25,
        "title": "Episode 25",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 26,
        "number": 26,
        "title": "Episode 26",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 27,
        "number": 27,
        "title": "Episode 27",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 28,
        "number": 28,
        "title": "Episode 28",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 29,
        "number": 29,
        "title": "Episode 29",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 30,
        "number": 30,
        "title": "Episode 30",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 31,
        "number": 31,
        "title": "Episode 31",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 32,
        "number": 32,
        "title": "Episode 32",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 33,
        "number": 33,
        "title": "Episode 33",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 34,
        "number": 34,
        "title": "Episode 34",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 35,
        "number": 35,
        "title": "Episode 35",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 36,
        "number": 36,
        "title": "Episode 36",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 37,
        "number": 37,
        "title": "Episode 37",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 38,
        "number": 38,
        "title": "Episode 38",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 39,
        "number": 39,
        "title": "Episode 39",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 40,
        "number": 40,
        "title": "Episode 40",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 41,
        "number": 41,
        "title": "Episode 41",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 42,
        "number": 42,
        "title": "Episode 42",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 43,
        "number": 43,
        "title": "Episode 43",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 44,
        "number": 44,
        "title": "Episode 44",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 45,
        "number": 45,
        "title": "Episode 45",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 46,
        "number": 46,
        "title": "Episode 46",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 47,
        "number": 47,
        "title": "Episode 47",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 47,
    "image": "https://cdn.myanimelist.net/images/anime/3/45028.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/3/45028l.jpg",
    "type": "both",
    "studio": "Tokyo Movie Shinsha",
    "duration": "24 min"
  },
  {
    "id": "gintama-silver-soul-arc",
    "title": "Gintama. Silver Soul Arc",
    "titleJapanese": "銀魂. 銀ノ魂篇",
    "synopsis": "After the fierce battle on Rakuyou, the untold past and true goal of the immortal Naraku leader, Utsuro, are finally revealed. By corrupting the Altana reserves of several planets, Utsuro has successfully triggered the intervention of the Tendoshuu’s greatest enemy: the Altana Liberation Army. With Earth as the main battleground in this interplanetary war, Utsuro's master plan to destroy the planet—and himself—is nearly complete. \n\nAn attack on the O-Edo Central Terminal marks the beginning of the final battle to take back the land of the samurai. With the Yorozuya nowhere in sight, the bakufu all but collapsed, and the Shogun missing, the people are left completely helpless as the Liberation Army begins pillaging Edo in the name of freeing them from the Tendoshuu's rule. \n\nCaught in the crossfire between two equally imposing forces, can Gintoki, Kagura, Shinpachi, and the former students of Shouyou Yoshida put aside their differences and unite their allies to protect what they hold de",
    "genre": [
      "Action",
      "Comedy",
      "Sci-Fi"
    ],
    "rating": 8.8,
    "year": 2018,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 12,
    "image": "https://cdn.myanimelist.net/images/anime/12/89603.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/12/89603l.jpg",
    "type": "both",
    "studio": "Bandai Namco Pictures",
    "duration": "24 min"
  },
  {
    "id": "attack-on-titan-final-season",
    "title": "Attack on Titan: Final Season",
    "titleJapanese": "進撃の巨人 The Final Season",
    "synopsis": "Gabi Braun and Falco Grice have been training their entire lives to inherit one of the seven Titans under Marley's control and aid their nation in eradicating the Eldians on Paradis. However, just as all seems well for the two cadets, their peace is suddenly shaken by the arrival of Eren Yeager and the remaining members of the Survey Corps.\n\nHaving finally reached the Yeager family basement and learned about the dark history surrounding the Titans, the Survey Corps has at long last found the answer they so desperately fought to uncover. With the truth now in their hands, the group set out for the world beyond the walls.\n\nIn Shingeki no Kyojin: The Final Season, two utterly different worlds collide as each party pursues its own agenda in the long-awaited conclusion to Paradis' fight for freedom.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Action",
      "Drama",
      "Suspense"
    ],
    "rating": 8.8,
    "year": 2021,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 16,
    "image": "https://cdn.myanimelist.net/images/anime/1000/110531.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1000/110531l.jpg",
    "type": "both",
    "studio": "MAPPA",
    "duration": "23 min"
  },
  {
    "id": "mob-psycho-100-ii",
    "title": "Mob Psycho 100 II",
    "titleJapanese": "モブサイコ100 II",
    "synopsis": "Shigeo \"Mob\" Kageyama is now maturing and understanding his role as a supernatural psychic that has the power to drastically affect the livelihood of others. He and his mentor Reigen Arataka continue to deal with supernatural requests from clients, whether it be exorcizing evil spirits or tackling urban legends that haunt the citizens.\n\nWhile the workflow remains the same, Mob isn't just blindly following Reigen around anymore. With all his experiences as a ridiculously strong psychic, Mob's supernatural adventures now have more weight to them. Things take on a serious and darker tone as the dangers Mob and Reigen face are much more tangible and unsettling than ever before.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Action",
      "Comedy",
      "Supernatural"
    ],
    "rating": 8.8,
    "year": 2019,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 13,
    "image": "https://cdn.myanimelist.net/images/anime/1918/96303.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1918/96303l.jpg",
    "type": "both",
    "studio": "Bones",
    "duration": "24 min"
  },
  {
    "id": "kizumonogatari-part-3-cold-blooded",
    "title": "Kizumonogatari Part 3: Cold-Blooded",
    "titleJapanese": "傷物語〈Ⅲ冷血篇〉",
    "synopsis": "After helping revive the legendary vampire Kiss-shot Acerola-orion Heart-under-blade, Koyomi Araragi has become a vampire himself and her servant. Kiss-shot is certain she can turn him back into a human, but only once regaining her full power. \n\nAraragi has hunted down the three vampire hunters that defeated Kiss-shot and retrieved her limbs to return her to full strength. However, now that Araragi has almost accomplished what he’s been fighting for this whole time, he has to consider if this is what he really wants. Once he revives this powerful immortal vampire, there is no telling what she might do, and there would be no way of stopping her.\n\nBut there is more to the story that Araragi doesn’t understand. If a newborn vampire like him could defeat the hunters, how did they overpower Kiss-shot? Can he trust her to turn him back to a human? And how is that even possible in the first place?\n\nAraragi is at his limit but he must come to a decision, and it may not be possible to resolve t",
    "genre": [
      "Action",
      "Mystery",
      "Supernatural"
    ],
    "rating": 8.8,
    "year": 2017,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "22 min"
      }
    ],
    "totalEpisodes": 1,
    "image": "https://cdn.myanimelist.net/images/anime/1084/112813.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1084/112813l.jpg",
    "type": "both",
    "studio": "Shaft",
    "duration": "22 min"
  },
  {
    "id": "vinland-saga",
    "title": "Vinland Saga",
    "titleJapanese": "ヴィンランド・サガ",
    "synopsis": "Young Thorfinn grew up listening to the stories of old sailors that had traveled the ocean and reached the place of legend, Vinland. It's said to be warm and fertile, a place where there would be no need for fighting—not at all like the frozen village in Iceland where he was born, and certainly not like his current life as a mercenary. War is his home now. Though his father once told him, \"You have no enemies, nobody does. There is nobody who it's okay to hurt,\" as he grew, Thorfinn knew that nothing was further from the truth.\n\nThe war between England and the Danes grows worse with each passing year. Death has become commonplace, and the viking mercenaries are loving every moment of it. Allying with either side will cause a massive swing in the balance of power, and the vikings are happy to make names for themselves and take any spoils they earn along the way. Among the chaos, Thorfinn must take his revenge and kill Askeladd, the man who murdered his father. The only paradise for the ",
    "genre": [
      "Action",
      "Adventure",
      "Drama"
    ],
    "rating": 8.8,
    "year": 2019,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 24,
    "image": "https://cdn.myanimelist.net/images/anime/1500/103005.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1500/103005l.jpg",
    "type": "both",
    "studio": "Wit Studio",
    "duration": "24 min"
  },
  {
    "id": "fighting-spirit",
    "title": "Fighting Spirit",
    "titleJapanese": "はじめの一歩 THE FIGHTING!",
    "synopsis": "In his father's absence, teenager Ippo Makunouchi works hard to help his mother run her fishing boat rental business. Ippo's timid nature, his lack of sleep, and the sea smell make him an easy target for relentless bullies who leave him bruised and beaten on a daily basis. Mamoru Takamura, an up-and-coming boxer, rescues Ippo from a violent after-school incident and takes him back to the Kamogawa Boxing Gym for recovery. Takamura and his fellow boxers, Masaru Aoki and Tatsuya Kimura, are stunned by Ippo's powerful punches—a result of strong muscles developed through years serving his physically taxing family business. \n\nFollowing brief training under Takamura, Ippo impresses the other boxers in a practice match against prodigy Ichirou Miyata. He gains a rival in Miyata and a coach in Genji Kamogawa, the gym owner and a former boxer himself. As Ippo takes the first steps in his official boxing career, he faces off against a series of challenging opponents, each more powerful than the la",
    "genre": [
      "Sports"
    ],
    "rating": 8.8,
    "year": 2000,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 25,
        "number": 25,
        "title": "Episode 25",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 26,
        "number": 26,
        "title": "Episode 26",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 27,
        "number": 27,
        "title": "Episode 27",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 28,
        "number": 28,
        "title": "Episode 28",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 29,
        "number": 29,
        "title": "Episode 29",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 30,
        "number": 30,
        "title": "Episode 30",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 31,
        "number": 31,
        "title": "Episode 31",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 32,
        "number": 32,
        "title": "Episode 32",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 33,
        "number": 33,
        "title": "Episode 33",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 34,
        "number": 34,
        "title": "Episode 34",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 35,
        "number": 35,
        "title": "Episode 35",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 36,
        "number": 36,
        "title": "Episode 36",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 37,
        "number": 37,
        "title": "Episode 37",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 38,
        "number": 38,
        "title": "Episode 38",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 39,
        "number": 39,
        "title": "Episode 39",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 40,
        "number": 40,
        "title": "Episode 40",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 41,
        "number": 41,
        "title": "Episode 41",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 42,
        "number": 42,
        "title": "Episode 42",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 43,
        "number": 43,
        "title": "Episode 43",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 44,
        "number": 44,
        "title": "Episode 44",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 45,
        "number": 45,
        "title": "Episode 45",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 46,
        "number": 46,
        "title": "Episode 46",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 47,
        "number": 47,
        "title": "Episode 47",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 48,
        "number": 48,
        "title": "Episode 48",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 49,
        "number": 49,
        "title": "Episode 49",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 50,
        "number": 50,
        "title": "Episode 50",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 50,
    "image": "https://cdn.myanimelist.net/images/anime/4/86334.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/4/86334l.jpg",
    "type": "both",
    "studio": "Madhouse",
    "duration": "23 min"
  },
  {
    "id": "haikyu-3rd-season",
    "title": "Haikyu!! 3rd Season",
    "titleJapanese": "ハイキュー!! 烏野高校 VS 白鳥沢学園高校",
    "synopsis": "After the victory against Aoba Jousai High, Karasuno High School, once called “a fallen powerhouse, a crow that can’t fly,” has finally reached the climax of the heated Spring tournament. Now, to advance to nationals, the Karasuno team has to defeat the powerhouse Shiratorizawa Academy. Karasuno’s greatest hurdle is their adversary’s ace, Wakatoshi Ushijima, the number one player in the Miyagi Prefecture, and one of the country’s top three aces.\n\nOnly the strongest team will make it to the national tournament. Since this match is the third-year players’ last chance to qualify for nationals, Karasuno has to use everything they learned during the training camp and prior matches to attain victory. Filled with restlessness and excitement, both teams are determined to come out on top in the third season of Haikyuu!!.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Sports"
    ],
    "rating": 8.8,
    "year": 2016,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 10,
    "image": "https://cdn.myanimelist.net/images/anime/7/81992.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/7/81992l.jpg",
    "type": "both",
    "studio": "Production I.G",
    "duration": "24 min"
  },
  {
    "id": "spirited-away",
    "title": "Spirited Away",
    "titleJapanese": "千と千尋の神隠し",
    "synopsis": "Stubborn, spoiled, and naïve, 10-year-old Chihiro Ogino is less than pleased when she and her parents discover an abandoned amusement park on the way to their new house. Cautiously venturing inside, she realizes that there is more to this place than meets the eye, as strange things begin to happen once dusk falls. Ghostly apparitions and food that turns her parents into pigs are just the start—Chihiro has unwittingly crossed over into the spirit world. Now trapped, she must summon the courage to live and work amongst spirits, with the help of the enigmatic Haku and the cast of unique characters she meets along the way.\n\nVivid and intriguing, Sen to Chihiro no Kamikakushi tells the story of Chihiro's journey through an unfamiliar world as she strives to save her parents and return home.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Adventure",
      "Award Winning",
      "Fantasy"
    ],
    "rating": 8.8,
    "year": 2001,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "4 min"
      }
    ],
    "totalEpisodes": 1,
    "image": "https://cdn.myanimelist.net/images/anime/6/79597.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/6/79597l.jpg",
    "type": "both",
    "studio": "Studio Ghibli",
    "duration": "4 min"
  },
  {
    "id": "attack-on-titan-final-season-part-2",
    "title": "Attack on Titan: Final Season Part 2",
    "titleJapanese": "進撃の巨人 The Final Season Part 2",
    "synopsis": "Turning against his former allies and enemies alike, Eren Yeager sets a disastrous plan in motion. Under the guidance of the Beast Titan, Zeke, Eren takes extreme measures to end the ancient conflict between Marley and Eldia—but his true intentions remain a mystery. Delving deep into his family's past, Eren fights to control his own destiny.\n\nMeanwhile, the long-feuding nations of Marley and Eldia utilize both soldiers and Titans in a brutal race to eliminate the other. Reiner Braun uses his own powers in a desperate bid to hold off Eren's own militaristic force, and his fellow Eldians—children Falco Grice and Gabi Braun—struggle to survive in the unfolding chaos.\n\nElsewhere, Eren's childhood friends Mikasa Ackerman and Armin Arlert remain imprisoned alongside Eren's former Survey Corps companions, all disturbed by Eren's monstrous transformation. Under the blind belief that Eren still secretly harbors good intentions, Mikasa and the others enter the fray in an attempt to save their fr",
    "genre": [
      "Action",
      "Drama",
      "Suspense"
    ],
    "rating": 8.8,
    "year": 2022,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 12,
    "image": "https://cdn.myanimelist.net/images/anime/1948/120625.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1948/120625l.jpg",
    "type": "both",
    "studio": "MAPPA",
    "duration": "23 min"
  },
  {
    "id": "monogatari-series-second-season",
    "title": "Monogatari Series: Second Season",
    "titleJapanese": "〈物語〉シリーズ セカンドシーズン",
    "synopsis": "Apparitions, oddities, and gods continue to manifest around Koyomi Araragi and his close-knit group of friends: Tsubasa Hanekawa, the group's modest genius; Shinobu Oshino, the resident doughnut-loving vampire; athletic deviant Suruga Kanbaru; bite-happy spirit Mayoi Hachikuji; Koyomi's cute admirer Nadeko Sengoku; and Hitagi Senjougahara, Koyomi's eclectic girlfriend.\n\nA new semester has begun and with graduation looming over Koyomi, he must quickly decide the paths he will walk, as well as the relationships he will form and friends that he will save. But as strange events begin to unfold, Koyomi is nowhere to be found, and a vicious tiger apparition has appeared in his absence. Hanekawa has become its target, and she quickly finds she must fend for herself.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Comedy",
      "Mystery",
      "Romance",
      "Supernatural"
    ],
    "rating": 8.8,
    "year": 2013,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 25,
        "number": 25,
        "title": "Episode 25",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 26,
        "number": 26,
        "title": "Episode 26",
        "thumbnail": "",
        "duration": "25 min"
      }
    ],
    "totalEpisodes": 26,
    "image": "https://cdn.myanimelist.net/images/anime/1807/121534.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1807/121534l.jpg",
    "type": "both",
    "studio": "Shaft",
    "duration": "25 min"
  },
  {
    "id": "takopis-original-sin",
    "title": "Takopi's Original Sin",
    "titleJapanese": "タコピーの原罪",
    "synopsis": "A squid-like creature, known as a Happian, leaves his home planet with the desire to spread happiness across the universe. He lands on Earth, but quickly finds himself in danger of captivity by its inhabitants. Fortunately, he is found by an unsmiling little girl named Shizuka Kuze, who feeds him and names him Takopii. Feeling indebted, Takopii decides to do everything in his power to bring a smile to her face.\n\nThe task is easier said than done, however. Shizuka is bullied by her classmates, she does not have a father, and her mother is never home—though the gravity of these issues flies over the naive Takopii's head. Even so, Shizuka does have one source of happiness: her dog Chappy. The connection Shizuka and Chappy share only increases Takopii's desire to make the girl smile.\n\nWhile Takopii's attempts to lift Shizuka's spirits lead to unintended consequences, he is determined to take things into his own tentacles, test his understanding of human beings, and achieve his goal of spre",
    "genre": [
      "Drama",
      "Sci-Fi"
    ],
    "rating": 8.8,
    "year": 2025,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "26 min"
      }
    ],
    "totalEpisodes": 6,
    "image": "https://cdn.myanimelist.net/images/anime/1182/149879.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1182/149879l.jpg",
    "type": "both",
    "studio": "Enishiya",
    "duration": "26 min"
  },
  {
    "id": "cowboy-bebop",
    "title": "Cowboy Bebop",
    "titleJapanese": "カウボーイビバップ",
    "synopsis": "Crime is timeless. By the year 2071, humanity has expanded across the galaxy, filling the surface of other planets with settlements like those on Earth. These new societies are plagued by murder, drug use, and theft, and intergalactic outlaws are hunted by a growing number of tough bounty hunters.\n\nSpike Spiegel and Jet Black pursue criminals throughout space to make a humble living. Beneath his goofy and aloof demeanor, Spike is haunted by the weight of his violent past. Meanwhile, Jet manages his own troubled memories while taking care of Spike and the Bebop, their ship. The duo is joined by the beautiful con artist Faye Valentine, odd child Edward Wong Hau Pepelu Tivrusky IV, and Ein, a bioengineered Welsh corgi.\n\nWhile developing bonds and working to catch a colorful cast of criminals, the Bebop crew's lives are disrupted by a menace from Spike's past. As a rival's maniacal plot continues to unravel, Spike must choose between life with his newfound family or revenge for his old wou",
    "genre": [
      "Action",
      "Award Winning",
      "Sci-Fi"
    ],
    "rating": 8.8,
    "year": 1998,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 25,
        "number": 25,
        "title": "Episode 25",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 26,
        "number": 26,
        "title": "Episode 26",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 26,
    "image": "https://cdn.myanimelist.net/images/anime/4/19644.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/4/19644l.jpg",
    "type": "both",
    "studio": "Sunrise",
    "duration": "24 min"
  },
  {
    "id": "journal-with-witch",
    "title": "Journal with Witch",
    "titleJapanese": "違国日記",
    "synopsis": "Makio Koudai has always lived life on her own terms. While she maintains a small circle of friends and a steady career as a novelist, she is very introverted and indifferent to social norms. Her relationship with her older sister Minori suffered as a result—her sister's constant criticism during their childhood shaped a lasting estrangement.\n\nAt thirty-five, Makio's life is disrupted when Minori and her husband die suddenly in an accident. In the wake of their deaths, Makio meets Asa Takumi for the first time, her fifteen-year-old niece who feels uncertain of her future. With no relatives willing to care for Asa, Makio takes her in despite her hesitance about building a bond with a stranger. Asa struggles to process the loss of her parents and the loneliness that follows, while reminders of her mother quietly shape aunt and niece's routines and interactions.\n\nThrough writing and the slow unraveling of their assumptions about family, Makio and Asa learn to understand one another and the",
    "genre": [
      "Drama"
    ],
    "rating": 8.7,
    "year": 2026,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 13,
    "image": "https://cdn.myanimelist.net/images/anime/1791/154233.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1791/154233l.jpg",
    "type": "both",
    "studio": "Shuka",
    "duration": "23 min"
  },
  {
    "id": "sound-euphonium-3",
    "title": "Sound! Euphonium 3",
    "titleJapanese": "響け！ユーフォニアム3",
    "synopsis": "With the ensemble contest behind them, the members of the Kitauji High School concert band now aim to win a gold medal at the national competition. For third-year club president Kumiko Oumae and her friends, it is their last chance before graduation. Filled with anticipation and anxiety, Kumiko worries if she can successfully lead the band.\n\nAmid her struggles, Kumiko encounters transfer student Mayu Kuroe. From her gentle demeanor to her talented euphonium skills, Mayu was a member of the Seira Girls' School concert band—a regular at nationals. While Mayu is friendly, Kumiko cannot help but have an indescribable feeling from their meeting.\n\nAs new members arrive and plans are set in motion, the club, with an insatiable hunger for a gold medal, learns what it truly takes to propel themselves to reach the national level.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Drama"
    ],
    "rating": 8.7,
    "year": 2024,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 13,
    "image": "https://cdn.myanimelist.net/images/anime/1216/142086.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1216/142086l.jpg",
    "type": "both",
    "studio": "Kyoto Animation",
    "duration": "24 min"
  },
  {
    "id": "bocchi-the-rock",
    "title": "Bocchi the Rock!",
    "titleJapanese": "ぼっち・ざ・ろっく！",
    "synopsis": "Yearning to make friends and perform live with a band, lonely and socially anxious Hitori \"Bocchi\" Gotou devotes her time to playing the guitar. On a fateful day, Bocchi meets the outgoing drummer Nijika Ijichi, who invites her to join Kessoku Band when their guitarist, Ikuyo Kita, flees before their first show. Soon after, Bocchi meets her final bandmate—the cool bassist Ryou Yamada. \n\nAlthough their first performance together is subpar, the girls feel empowered by their shared love for music, and they are soon rejoined by Kita. Finding happiness in performing, Bocchi and her bandmates put their hearts into improving as musicians while making the most of their fleeting high school days.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Comedy"
    ],
    "rating": 8.7,
    "year": 2022,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 12,
    "image": "https://cdn.myanimelist.net/images/anime/1448/127956.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1448/127956l.jpg",
    "type": "both",
    "studio": "CloverWorks",
    "duration": "23 min"
  },
  {
    "id": "kingdom-season-4",
    "title": "Kingdom Season 4",
    "titleJapanese": "キングダム 第4シリーズ",
    "synopsis": "Following the conclusion of the large-scale coalition campaign, the entirety of China is in a state of economic recovery. The victor of the battle, the state of Qin, is no different. There, the political parties led by Ying Zheng and Buwei Lü continue their inner conflict. Having played the role of king in the coalition battle, Zheng has the trust of the people—but Lü is far from out of the fight. In 18 months, he plans to interrupt Zheng's coming-of-age ceremony.\n\nMeanwhile, a Zhao army numbering 20,000 troops has set out toward Qin. In the royal court, due to the lack of generals capable of responding to the incoming threat, Lü slyly suggests that Zheng take command. However, Cheng Jiao, Zheng's half-brother, volunteers instead. As they grew to trust each other during the coalition battle, Zheng now accepts Jiao as his replacement.\n\nHowever, the Zhao forces retreat a mere half-day after clashing with Jiao's army. With trouble quickly brewing in the shadows, the internal struggle of Q",
    "genre": [
      "Action"
    ],
    "rating": 8.7,
    "year": 2022,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 25,
        "number": 25,
        "title": "Episode 25",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 26,
        "number": 26,
        "title": "Episode 26",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 26,
    "image": "https://cdn.myanimelist.net/images/anime/1566/122794.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1566/122794l.jpg",
    "type": "both",
    "studio": "Studio Pierrot",
    "duration": "24 min"
  },
  {
    "id": "86-eighty-six-part-2",
    "title": "86 Eighty-Six Part 2",
    "titleJapanese": "86―エイティシックス―",
    "synopsis": "The disappearance of the Spearhead Squadron beyond the horizon does little to hide the intensity of the Republic of San Magnolia's endless propaganda. Vladilena Milizé continues to operate as \"Handler One,\" the commander of yet another dehumanized 86th faction's squadron in the continuous war against the Legion.\n\nOn the Western Front, Shinei Nouzen and his squad are quarantined in a military base controlled by the Federal Republic of Giad, formerly known as the Giadian Empire. The newly-established government grants the saved Eighty-Six full citizenship and freedom. Housed by the president Ernst Zimmerman himself, the group meets his adoptive daughter and the last Empress, Augusta Frederica Adel-Adler.\n\nHowever, within the calm of this tender society, Shinei and his team feel that their purpose is on the battlefield. Before long, they are once again in the midst of the Legion's onslaught as a part of the Federacy's Nordlicht Squadron, accompanied by Augusta Frederica. But, as history r",
    "genre": [
      "Drama",
      "Sci-Fi"
    ],
    "rating": 8.7,
    "year": 2021,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 12,
    "image": "https://cdn.myanimelist.net/images/anime/1321/117508.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1321/117508l.jpg",
    "type": "both",
    "studio": "A-1 Pictures",
    "duration": "23 min"
  },
  {
    "id": "one-piece",
    "title": "One Piece",
    "titleJapanese": "ONE PIECE",
    "synopsis": "Barely surviving in a barrel after passing through a terrible whirlpool at sea, carefree Monkey D. Luffy ends up aboard a ship under attack by fearsome pirates. Despite being a naive-looking teenager, he is not to be underestimated. Unmatched in battle, Luffy is a pirate himself who resolutely pursues the coveted One Piece treasure and the King of the Pirates title that comes with it.\n\nThe late King of the Pirates, Gol D. Roger, stirred up the world before his death by disclosing the whereabouts of his hoard of riches and daring everyone to obtain it. Ever since then, countless powerful pirates have sailed dangerous seas for the prized One Piece only to never return. Although Luffy lacks a crew and a proper ship, he is endowed with a superhuman ability and an unbreakable spirit that make him not only a formidable adversary but also an inspiration to many.\n\nAs he faces numerous challenges with a big smile on his face, Luffy gathers one-of-a-kind companions to join him in his ambitious e",
    "genre": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "rating": 8.7,
    "year": 1999,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 12,
    "image": "https://cdn.myanimelist.net/images/anime/1244/138851.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1244/138851l.jpg",
    "type": "both",
    "studio": "Toei Animation",
    "duration": "24 min"
  },
  {
    "id": "lord-of-mysteries-specials",
    "title": "Lord of Mysteries Specials",
    "titleJapanese": "诡秘之主特别篇",
    "synopsis": "City of Silver (Episode 1): Above the undying gray fog, Klein Moretti, the enigmatic The Fool, presided over the Tarot Club when a new, distant prayer echoed through the mists. Reaching across the veil, he summoned Derrick Berg from the City of Silver—a cursed bastion trapped within the Forsaken Land of God. Through Derrick’s haunting tales, the grim history of this sunless city was unveiled. Seeking salvation for his people, Derrick pledged his soul to The Fool’s grace. From the twenty-two Major Arcana, he chose his mantle: \"The Sun.\"\n\nThe Marked Hunt (Episodes 2 and 3): The gathering then turned to matters of blood and ambition. \"The Hanged Man,\" Alger Wilson, proposed a high-stakes exchange. He sought the head of Qilangos, one of the infamous seven Pirate Admirals, and tasked \"Justice,\" Audrey Hall, with leveraging her noble influence in Backlund to hunt the wind-blessed killer.\n\nIn the foggy streets of the Loen capital, Audrey’s quest led her to the Beyonder duo, Fors Wall and Xio ",
    "genre": [
      "Action",
      "Fantasy",
      "Mystery",
      "Suspense"
    ],
    "rating": 8.7,
    "year": 2026,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 3,
    "image": "https://cdn.myanimelist.net/images/anime/1211/157100.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1211/157100l.jpg",
    "type": "both",
    "studio": "B.CMAY PICTURES",
    "duration": "24 min"
  },
  {
    "id": "kingdom-season-5",
    "title": "Kingdom Season 5",
    "titleJapanese": "キングダム 第5シリーズ",
    "synopsis": "Fifth season of Kingdom.",
    "genre": [
      "Action"
    ],
    "rating": 8.7,
    "year": 2024,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 13,
    "image": "https://cdn.myanimelist.net/images/anime/1050/139641.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1050/139641l.jpg",
    "type": "both",
    "studio": "Studio Pierrot",
    "duration": "24 min"
  },
  {
    "id": "orb-on-the-movements-of-the-earth",
    "title": "Orb: On the Movements of the Earth",
    "titleJapanese": "チ。―地球の運動について―",
    "synopsis": "Twelve-year-old prodigy Rafal believes in living rationally, so as to earn praise and respect from society while not being led astray by his emotions. To this end, he publicly states his intention to study theology—the academic field held in highest regard in early 15th century Poland. However, an encounter with a mysterious man upends Rafal's life, sparking an illogical desire to instead pursue his passion for astronomy.\n\nRafal is determined to prove the beauty and rationality of heliocentrism—the theory that the Earth revolves around the Sun. This belief is considered heretical by the powerful Church, which promotes geocentrism—the Sun revolving around the Earth—as the sole truth of the universe. Those whose beliefs do not align with the will of the Church suffer unfathomably gruesome consequences.\n\nIn pursuit of evidence for a heliocentric model of the universe, Rafal grapples with obtaining precise calculations and building empirical theories. His greatest challenge, however, lies ",
    "genre": [
      "Drama"
    ],
    "rating": 8.7,
    "year": 2024,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 25,
        "number": 25,
        "title": "Episode 25",
        "thumbnail": "",
        "duration": "25 min"
      }
    ],
    "totalEpisodes": 25,
    "image": "https://cdn.myanimelist.net/images/anime/1749/145922.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1749/145922l.jpg",
    "type": "both",
    "studio": "Madhouse",
    "duration": "25 min"
  },
  {
    "id": "mushi-shi-next-passage-part-2",
    "title": "Mushi-shi: Next Passage Part 2",
    "titleJapanese": "蟲師 続章",
    "synopsis": "Ghostly, primordial beings known as Mushi continue to cause mysterious changes in the lives of humans. The travelling Mushishi, Ginko, persists in trying to set right the strange and unsettling situations he encounters. Time loops, living shadows, and telepathy are among the overt effects of interference from Mushi, but more subtle symptoms that take years to be noticed also rouse Ginko's concern as he passes from village to village.\n\nThrough circumstance, Ginko has become an arbiter, determining which Mushi are blessings and which are curses. But the lines that he seeks to draw are subjective. Some of his patients would rather exercise their new powers until they are utterly consumed by them; others desperately strive to rid themselves of afflictions which are in fact protecting their lives from devastation. Those who cross paths with Mushi must learn to accept seemingly impossible consequences for their actions, and heal wounds they did not know they had. Otherwise, they risk meeting",
    "genre": [
      "Adventure",
      "Mystery",
      "Slice of Life",
      "Supernatural"
    ],
    "rating": 8.7,
    "year": 2014,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 10,
    "image": "https://cdn.myanimelist.net/images/anime/9/68095.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/9/68095l.jpg",
    "type": "both",
    "studio": "Artland",
    "duration": "23 min"
  },
  {
    "id": "mob-psycho-100-iii",
    "title": "Mob Psycho 100 III",
    "titleJapanese": "モブサイコ100 III",
    "synopsis": "After foiling a world-threatening plot, Shigeo \"Mob\" Kageyama returns to tackle the more exhausting aspects of his mundane life—starting with filling out his school's nerve-racking career form. Meanwhile, he continues to assist his mentor Arataka Reigen and the office's new recruit, Katsuya Serizawa, in solving paranormal cases of their clients. While continuing his duties, Mob also works on gaining more independence in his esper and human lives, as well as trying to integrate better with the people around him.\n\nHowever, new supernatural and ordinary challenges test Mob’s emotional stability and force him to confront the realities around him. As he strives to continue forward on the path to maturity, Mob must resolve his emotional crises and reassess the naivety he has held on for so long.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Action",
      "Comedy",
      "Supernatural"
    ],
    "rating": 8.7,
    "year": 2022,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 12,
    "image": "https://cdn.myanimelist.net/images/anime/1228/125011.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1228/125011l.jpg",
    "type": "both",
    "studio": "Bones",
    "duration": "23 min"
  },
  {
    "id": "my-hero-academia-final-season",
    "title": "My Hero Academia Final Season",
    "titleJapanese": "僕のヒーローアカデミア FINAL SEASON",
    "synopsis": "The final stages of an all-out war between heroes and villains unfold as the world watches its symbols of peace and destruction collide. When All Might is critically injured, global fear takes hold as the fate of society hangs in the balance, and the threat of All For One and Tomura Shigaraki makes it clear that the conflict is far from over.\n\nAs hope begins to fade, Izuku \"Deku\" Midoriya stands at the forefront, refusing to let the war end in despair. Pushed beyond his limits and supported by Katsuki Bakugou and other heroes fighting beside him, Deku becomes the central force opposing collapse. The conflict becomes a defining turning point for society—one where the future will be entrusted to the victorious side.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Action"
    ],
    "rating": 8.7,
    "year": 2025,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 11,
    "image": "https://cdn.myanimelist.net/images/anime/1959/151055.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1959/151055l.jpg",
    "type": "both",
    "studio": "Bones Film",
    "duration": "23 min"
  },
  {
    "id": "kaguya-sama-love-is-war-the-first-kiss-that-never-ends",
    "title": "Kaguya-sama: Love is War -The First Kiss That Never Ends-",
    "titleJapanese": "かぐや様は告らせたい -ファーストキッスは終わらない-",
    "synopsis": "After their first kiss, Kaguya Shinomiya and Miyuki Shirogane are left unsure where their relationship stands. The troubling uncertainty of whether they could be considered an official couple unleashes newfound problems as both Kaguya and Shirogane struggle to sort out their feelings.\n\nWhile the lovestruck student council officers fret, the Christmas season rolls around, and romance is in the air. In the face of widespread tenderness, Kaguya and Shirogane must endure their affectionate battle of wits once more. Should they reconcile their feelings for one another, they may find themselves within reach of what they have both been longing for so long: true love.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "rating": 8.7,
    "year": 2022,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "36 min"
      }
    ],
    "totalEpisodes": 1,
    "image": "https://cdn.myanimelist.net/images/anime/1670/130060.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1670/130060l.jpg",
    "type": "both",
    "studio": "A-1 Pictures",
    "duration": "36 min"
  },
  {
    "id": "code-geass-lelouch-of-the-rebellion",
    "title": "Code Geass: Lelouch of the Rebellion",
    "titleJapanese": "コードギアス 反逆のルルーシュ",
    "synopsis": "In the year 2010, the Holy Empire of Britannia is establishing itself as a dominant military nation, starting with the conquest of Japan. Renamed to Area 11 after its swift defeat, Japan has seen significant resistance against these tyrants in an attempt to regain independence.\n\nLelouch Lamperouge, a Britannian student, unfortunately finds himself caught in a crossfire between the Britannian and the Area 11 rebel armed forces. He is able to escape, however, thanks to the timely appearance of a mysterious girl named C.C., who bestows upon him Geass, the \"Power of Kings.\" Realizing the vast potential of his newfound \"power of absolute obedience,\" Lelouch embarks upon a perilous journey as the masked vigilante known as Zero, leading a merciless onslaught against Britannia in order to get revenge once and for all.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Award Winning",
      "Drama",
      "Sci-Fi"
    ],
    "rating": 8.7,
    "year": 2006,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 25,
        "number": 25,
        "title": "Episode 25",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 25,
    "image": "https://cdn.myanimelist.net/images/anime/1032/135088.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1032/135088l.jpg",
    "type": "both",
    "studio": "Sunrise",
    "duration": "24 min"
  },
  {
    "id": "idol",
    "title": "Idol",
    "titleJapanese": "アイドル",
    "synopsis": "Music video for the song Idol by YOASOBI. The song was used as the opening theme of the anime [Oshi no Ko].",
    "genre": [],
    "rating": 8.7,
    "year": 2023,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "3 min"
      }
    ],
    "totalEpisodes": 1,
    "image": "https://cdn.myanimelist.net/images/anime/1921/135489.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1921/135489l.jpg",
    "type": "both",
    "studio": "Doga Kobo",
    "duration": "3 min"
  },
  {
    "id": "bleach-thousand-year-blood-war-the-separation",
    "title": "Bleach: Thousand-Year Blood War - The Separation",
    "titleJapanese": "BLEACH 千年血戦篇-訣別譚-",
    "synopsis": "After a brutal surprise attack by the forces of Quincy King Yhwach, the resident Reapers of the Soul Society lick their wounds and mourn their losses. Many of the surviving Soul Reaper captains train to battle without their Bankai, the ultimate technique wielded by the fiercest warriors.\n\nIn the previous assault, Ichigo Kurosaki narrowly managed to help fend off Yhwach's fearsome wrath. However, to ultimately defeat his godly adversary and save his allies, Ichigo must now undergo severe training that will push him beyond his physical, emotional, and mental limits.\n\nThough Yhwach already holds the upper hand in this ongoing blood feud, he also successfully recruits Uryuu Ishida, Ichigo's close friend and rival, to be his successor. Yhwach strikes out once again at the weakened Soul Society, intent on finally obliterating his long-standing enemies. As Ichigo struggles to attain new power, the Soul Reaper captains fight for survival and borrowed time.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Action",
      "Adventure",
      "Supernatural"
    ],
    "rating": 8.7,
    "year": 2023,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 13,
    "image": "https://cdn.myanimelist.net/images/anime/1164/138058.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1164/138058l.jpg",
    "type": "both",
    "studio": "Studio Pierrot",
    "duration": "24 min"
  },
  {
    "id": "descending-stories-showa-genroku-rakugo-shinju",
    "title": "Descending Stories: Showa Genroku Rakugo Shinju",
    "titleJapanese": "昭和元禄落語心中～助六再び篇～",
    "synopsis": "Even after having risen to the utmost rank of shin'uchi, Yotarou struggles to find his own identity in the world of rakugo. Caught between his master's teachings and the late Sukeroku's unique style, his performance lacks an important ingredient—ego. And while his popularity packs the theaters, he is but one of the few; rakugo is under threat of being eclipsed.\n\nMeanwhile Yakumo, regarded by many as the last bastion of preserving the popularity of rakugo, struggles to cope with his elderly state. Even though his performances are still stellar, he fears that he is nearing his limits. His doubts grow stronger as an old friend creeps ever closer. Konatsu, for her part, attempts to raise her son as a single mother, which Yotarou is heavily opposed to. Instead, he seeks to persuade her to marry him and in turn raise her son as his own.\n\nIn Shouwa Genroku Rakugo Shinjuu: Sukeroku Futatabi-hen, the curtains fall on Yotarou and Yakumo's story, tasked with restoring the near-obsolete art form a",
    "genre": [
      "Drama"
    ],
    "rating": 8.7,
    "year": 2017,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 12,
    "image": "https://cdn.myanimelist.net/images/anime/1493/124765.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1493/124765l.jpg",
    "type": "both",
    "studio": "Studio Deen",
    "duration": "24 min"
  },
  {
    "id": "the-first-slam-dunk",
    "title": "The First Slam Dunk",
    "titleJapanese": "THE FIRST SLAM DUNK",
    "synopsis": "Shohoku's \"speedster\" and point guard, Ryouta Miyagi, always plays with brains and lightning speed, running circles around his opponents while feigning composure. Born and raised in Okinawa, Ryouta had a brother who was three years older. Following in the footsteps of his older brother, who was a famous local player from a young age, Ryouta also became addicted to basketball.\n\nIn his second year of high school, Ryouta plays with the Shohoku High School basketball team along with Sakuragi, Rukawa, Akagi, and Mitsui as they take the stage at the Inter-High School National Championship. And now, they are on the brink of challenging the reigning champions, Sannoh Kogyo High School.\n\n(Source: GKIDS, edited)",
    "genre": [
      "Award Winning",
      "Sports"
    ],
    "rating": 8.7,
    "year": 2022,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "4 min"
      }
    ],
    "totalEpisodes": 1,
    "image": "https://cdn.myanimelist.net/images/anime/1745/129284.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1745/129284l.jpg",
    "type": "both",
    "studio": "Toei Animation",
    "duration": "4 min"
  },
  {
    "id": "link-click",
    "title": "Link Click",
    "titleJapanese": "时光代理人",
    "synopsis": "It is said that a picture is worth a thousand words. In this case, it holds an infinite amount of secrets. These are secrets that only Cheng Xiaoshi and Lu Guang are able to find. In a small shop called \"Time Photo Studio,\" the two friends provide a special service: using their extraordinary powers that let them enter photographs, they jump into pictures brought to them by clients in order to grant their wishes. Through the eyes of the photographer, they live through the events surrounding the picture and try to decipher how to solve their client's request.\n\nBut every time they jump into a picture, they take a great risk. One wrong move and they could alter the future of the person who took the picture... and possibly countless other events too. So when the events they are forced to live through in these pictures start to become personal, it will take the utmost strength to push their feelings aside and focus on accomplishing the task they were paid to do.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Drama",
      "Mystery",
      "Suspense"
    ],
    "rating": 8.7,
    "year": 2021,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 11,
    "image": "https://cdn.myanimelist.net/images/anime/1135/114867.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1135/114867l.jpg",
    "type": "both",
    "studio": "LAN Studio",
    "duration": "23 min"
  },
  {
    "id": "jujutsu-kaisen-season-2",
    "title": "Jujutsu Kaisen Season 2",
    "titleJapanese": "呪術廻戦 懐玉・玉折／渋谷事変",
    "synopsis": "The year is 2006, and the halls of Tokyo Prefectural Jujutsu High School echo with the endless bickering and intense debate between two inseparable best friends. Exuding unshakeable confidence, Satoru Gojou and Suguru Getou believe there is no challenge too great for young and powerful Special Grade sorcerers such as themselves. They are tasked with safely delivering a sensible girl named Riko Amanai to the entity whose existence is the very essence of the jujutsu world. However, the mission plunges them into an exhausting swirl of moral conflict that threatens to destroy the already feeble amity between sorcerers and ordinary humans.\n\nTwelve years later, students and sorcerers are the frontline defense against the rising number of high-level curses born from humans' negative emotions. As the entities grow in power, their self-awareness and ambition increase too. The curses unite for the common goal of eradicating humans and creating a world of only cursed energy users, led by a danger",
    "genre": [
      "Action",
      "Supernatural"
    ],
    "rating": 8.7,
    "year": 2023,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 23,
    "image": "https://cdn.myanimelist.net/images/anime/1792/138022.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1792/138022l.jpg",
    "type": "both",
    "studio": "MAPPA",
    "duration": "23 min"
  },
  {
    "id": "oshi-no-ko-season-3",
    "title": "[Oshi No Ko] Season 3",
    "titleJapanese": "【推しの子】 第3期",
    "synopsis": "Satisfied with his investigation of Lala Lai Theatrical Company, Aquamarine \"Aqua\" Hoshino shifts his focus from revenge to career growth and becomes a regular on the variety show Dig Deep! Chase the Impawsible. With memories of his mother still lingering in his mind, Aqua cuts contact with Kana Arima, leaving her unable to enjoy the surging popularity of her idol group, B-Komachi.\n\nMeanwhile, following the bone-chilling discovery during B-Komachi's recent music video shoot, Aqua's sister, Ruby, resolves to solve the murders of those dearest to her. With the help of another soul still weighed down by Ai Hoshino's untimely demise, Ruby rises through the ranks, using any means necessary to get her way.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Drama"
    ],
    "rating": 8.7,
    "year": 2026,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "27 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "27 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "27 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "27 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "27 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "27 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "27 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "27 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "27 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "27 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "27 min"
      }
    ],
    "totalEpisodes": 11,
    "image": "https://cdn.myanimelist.net/images/anime/1979/153329.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1979/153329l.jpg",
    "type": "both",
    "studio": "Doga Kobo",
    "duration": "27 min"
  },
  {
    "id": "mushi-shi-next-passage-part-1",
    "title": "Mushi-shi: Next Passage Part 1",
    "titleJapanese": "蟲師 続章",
    "synopsis": "Perceived as strange and feared by man, over time the misshapen ones came to be known as Mushi. Although they harbor no ill intentions towards humans, many suffer from the side effects of their existence and strange nature; exploiting the Mushi without understanding them, even unintentionally, can lead to disaster and strife for any involved. Mushishi Zoku Shou continues the story of Mushishi Ginko on his journey to help the visible world to coexist with the Mushi.\n\nDuring his travels, Ginko discovers various gifted individuals—those cursed by circumstance and those maintaining a fragile symbiosis with the Mushi—inevitably confronting the question of whether humanity, talented and tortured alike, can manage the responsibility of the unseen. Moreover, as a Mushishi, Ginko must learn more about these strange beings and decide if he has the right to interfere with the complex relationships between Mushi and mankind.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Adventure",
      "Mystery",
      "Slice of Life",
      "Supernatural"
    ],
    "rating": 8.7,
    "year": 2014,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 10,
    "image": "https://cdn.myanimelist.net/images/anime/13/58533.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/13/58533l.jpg",
    "type": "both",
    "studio": "Artland",
    "duration": "24 min"
  },
  {
    "id": "violet-evergarden",
    "title": "Violet Evergarden",
    "titleJapanese": "ヴァイオレット・エヴァーガーデン",
    "synopsis": "The Great War finally came to an end after four long years of conflict; fractured in two, the continent of Telesis slowly began to flourish once again. Caught up in the bloodshed was Violet Evergarden, a young girl raised for the sole purpose of decimating enemy lines. Hospitalized and maimed in a bloody skirmish during the War's final leg, she was left with only words from the person she held dearest, but with no understanding of their meaning.\n\nRecovering from her wounds, Violet starts a new life working at CH Postal Services after a falling out with her new intended guardian family. There, she witnesses by pure chance the work of an \"Auto Memory Doll,\" amanuenses that transcribe people's thoughts and feelings into words on paper. Moved by the notion, Violet begins work as an Auto Memory Doll, a trade that will take her on an adventure, one that will reshape the lives of her clients and hopefully lead to self-discovery.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Drama"
    ],
    "rating": 8.7,
    "year": 2018,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 13,
    "image": "https://cdn.myanimelist.net/images/anime/1795/95088.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1795/95088l.jpg",
    "type": "both",
    "studio": "Kyoto Animation",
    "duration": "24 min"
  },
  {
    "id": "samurai-x-trust-and-betrayal",
    "title": "Samurai X: Trust and Betrayal",
    "titleJapanese": "るろうに剣心―明治剣客浪漫譚―追憶編",
    "synopsis": "When mankind's savagery surpasses his fear of death, there is little hope for those who wish to live honest lives. Beneath a full moon, a young boy witnesses the murder of the bandits who had enslaved him, and is then christened with a new name by the man who rescued him. This boy is Shinta, now known as Kenshin Himura, and he is destined to become a swordsman. The softness of his heart does not befit the occupation, but his desire to protect the innocent is absolute.\n\nRurouni Kenshin: Meiji Kenkaku Romantan - Tsuioku-hen details the origins of the man who would bear the name of Hitokiri Battousai long before he swore his oath not to kill and before he earned his reputation as an assassin. The young man's heart is divided between justice and corruption, while the fate of a nation rests on his actions.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Action",
      "Drama",
      "Romance"
    ],
    "rating": 8.7,
    "year": 1999,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "29 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "29 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "29 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "29 min"
      }
    ],
    "totalEpisodes": 4,
    "image": "https://cdn.myanimelist.net/images/anime/1656/137618.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1656/137618l.jpg",
    "type": "both",
    "studio": "Studio Deen",
    "duration": "29 min"
  },
  {
    "id": "demon-slayer-kimetsu-no-yaiba-entertainment-district-arc",
    "title": "Demon Slayer: Kimetsu no Yaiba Entertainment District Arc",
    "titleJapanese": "鬼滅の刃 遊郭編",
    "synopsis": "The devastation of the Mugen Train incident still weighs heavily on the members of the Demon Slayer Corps. Despite being given time to recover, life must go on, as the wicked never sleep: a vicious demon is terrorizing the alluring women of the Yoshiwara Entertainment District. The Sound Hashira, Tengen Uzui, and his three wives are on the case. However, when he soon loses contact with his spouses, Tengen fears the worst and enlists the help of Tanjirou Kamado, Zenitsu Agatsuma, and Inosuke Hashibira to infiltrate the district's most prominent houses and locate the depraved Upper Rank Demon.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Action",
      "Supernatural"
    ],
    "rating": 8.7,
    "year": 2022,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "26 min"
      }
    ],
    "totalEpisodes": 11,
    "image": "https://cdn.myanimelist.net/images/anime/1908/120036.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1908/120036l.jpg",
    "type": "both",
    "studio": "ufotable",
    "duration": "26 min"
  },
  {
    "id": "bleach-thousand-year-blood-war-the-conflict",
    "title": "Bleach: Thousand-Year Blood War - The Conflict",
    "titleJapanese": "BLEACH 千年血戦篇-相剋譚-",
    "synopsis": "After an awe-inspiring battle with Ichibei Hyousube—leader of the Soul Society's Royal Guard—the powerful Yhwach moves into the final stage of his master plan. He aims to slay the Soul King, the being whose very existence maintains the status quo of three worlds: Hueco Mundo, the Soul Society, and the realm of humans that Ichigo Kurosaki and his closest friends hail from. Conquering his own bout with the remainder of the Royal Guard, Uryuu Ishida joins Yhwach in his efforts to create a new world in his image.\n\nWith a flood of resolution and newfound power, Ichigo rushes to stop Yhwach from accomplishing his ultimate goal and save the countless lives within the three existing realms. But Ichigo has a complicated lineage, one that leaves him susceptible to Yhwach's sinister influence.\n\nMeanwhile, in a final desperate gambit, Jirou Sakuranosuke Shunsui Kyouraku, the newly promoted head captain of the Soul Society's combat corps, enlists the help of an old enemy whose immense power may tur",
    "genre": [
      "Action",
      "Adventure",
      "Supernatural"
    ],
    "rating": 8.7,
    "year": 2024,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 14,
    "image": "https://cdn.myanimelist.net/images/anime/1595/144074.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1595/144074l.jpg",
    "type": "both",
    "studio": "Pierrot Films",
    "duration": "24 min"
  },
  {
    "id": "the-dangers-in-my-heart-season-2",
    "title": "The Dangers in My Heart Season 2",
    "titleJapanese": "僕の心のヤバイやつ 第2期",
    "synopsis": "After an eventful winter break, Kyoutarou Ichikawa and Anna Yamada reunite with a stronger bond. They continue to grow in their own ways, with Yamada taking on more challenging photoshoots and Ichikawa maturing both physically and emotionally as he tackles his affections for Yamada. However, spending time together outside of school allows for their relationship to deepen, and it becomes increasingly difficult to deny their budding romantic feelings.\n\nGrappling with these unexpected and new emotions, Ichikawa and Yamada realize that, with the passage of time, their relationship is bound to change—and they must ultimately decide whether they wish to remain close friends or finally become a couple.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Comedy",
      "Romance"
    ],
    "rating": 8.7,
    "year": 2024,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 13,
    "image": "https://cdn.myanimelist.net/images/anime/1643/138581.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1643/138581l.jpg",
    "type": "both",
    "studio": "Shin-Ei Animation",
    "duration": "23 min"
  },
  {
    "id": "great-teacher-onizuka",
    "title": "Great Teacher Onizuka",
    "titleJapanese": "グレート・ティーチャー・オニヅカ",
    "synopsis": "Twenty-two-year-old Eikichi Onizuka—ex-biker gang leader, conqueror of Shonan, and virgin—has a dream: to become the greatest high school teacher in all of Japan. This isn't because of a passion for teaching, but because he wants a loving teenage wife when he's old and gray. Still, for a perverted, greedy, and lazy delinquent, there is more to Onizuka than meets the eye. So when he lands a job as the homeroom teacher of the Class 3-4 at the prestigious Holy Forest Academy—despite suplexing the Vice Principal—all of his talents are put to the test, as this class is particularly infamous.\n\nDue to their utter contempt for all teachers, the class' students use psychological warfare to mentally break any new homeroom teacher they get, forcing them to quit and leave school. However, Onizuka isn't your average teacher, and he's ready for any challenge in his way.\n\nBullying, suicide, and sexual harassment are just a few of the issues his students face daily. By tackling the roots of their prob",
    "genre": [
      "Comedy"
    ],
    "rating": 8.7,
    "year": 1999,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 25,
        "number": 25,
        "title": "Episode 25",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 26,
        "number": 26,
        "title": "Episode 26",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 27,
        "number": 27,
        "title": "Episode 27",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 28,
        "number": 28,
        "title": "Episode 28",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 29,
        "number": 29,
        "title": "Episode 29",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 30,
        "number": 30,
        "title": "Episode 30",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 31,
        "number": 31,
        "title": "Episode 31",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 32,
        "number": 32,
        "title": "Episode 32",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 33,
        "number": 33,
        "title": "Episode 33",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 34,
        "number": 34,
        "title": "Episode 34",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 35,
        "number": 35,
        "title": "Episode 35",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 36,
        "number": 36,
        "title": "Episode 36",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 37,
        "number": 37,
        "title": "Episode 37",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 38,
        "number": 38,
        "title": "Episode 38",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 39,
        "number": 39,
        "title": "Episode 39",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 40,
        "number": 40,
        "title": "Episode 40",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 41,
        "number": 41,
        "title": "Episode 41",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 42,
        "number": 42,
        "title": "Episode 42",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 43,
        "number": 43,
        "title": "Episode 43",
        "thumbnail": "",
        "duration": "25 min"
      }
    ],
    "totalEpisodes": 43,
    "image": "https://cdn.myanimelist.net/images/anime/13/11460.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/13/11460l.jpg",
    "type": "both",
    "studio": "Studio Pierrot",
    "duration": "25 min"
  },
  {
    "id": "umamusume-cinderella-gray-part-2",
    "title": "Umamusume: Cinderella Gray Part 2",
    "titleJapanese": "ウマ娘 シンデレラグレイ 第2クール",
    "synopsis": "Ever since horse girl Oguri Cap left the small town of Kasamatsu to chase greater heights in Tokyo, she has rapidly gained attention with her remarkable results. Her goal to become the best horse girl in Japan seems within reach, but there is a rival in her way—another running prodigy named Tamamo Cross.\n\nHowever, Tamamo is not the only threat to Oguri: several world-class racers from overseas are joining the Japan Cup, pushing the renowned race's competition to unprecedented levels. With the support from the people close to her and her intense desire to win, Oguri will do anything to conquer the Japan Cup and continue sprinting for the top.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Drama",
      "Sports"
    ],
    "rating": 8.7,
    "year": 2025,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 10,
    "image": "https://cdn.myanimelist.net/images/anime/1120/152280.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1120/152280l.jpg",
    "type": "both",
    "studio": "CygamesPictures",
    "duration": "23 min"
  },
  {
    "id": "kingdom-season-6",
    "title": "Kingdom Season 6",
    "titleJapanese": "キングダム 第6シリーズ",
    "synopsis": "In ancient China, during the Warring States period, a former servant named Xin rises through the ranks with a dream: to become the greatest general under the heavens. Fighting alongside King Ying Zheng of Qin—who seeks to unify China and end the chaos—Xin leads his own unit, the Fei Xin Force, onto the battlefield.\n\nWith power reclaimed from the influential Chancellor Buwei Lü, King Ying Zheng begins laying the groundwork for a new, unified legal state with the support of key allies like strategist Changping Jun and legalist Li Si.\n\nAs Qin launches a campaign to seize new territory from the state of Zhao, their advance is halted by the brilliant strategist, Li Mu. In response, Changping Jun devises a bold plan: to bypass Zhao's defenses and strike at the key city of Gyou, near Zhao's capital.\n\nTo carry out this risky maneuver, a powerful coalition army is formed—led by the tacticians Ou Sen (Wang Jian), Kan Ki (Huan Yi), and the warrior queen Yo Tan Wa (Yang Duanhe). Joining them are t",
    "genre": [
      "Action"
    ],
    "rating": 8.7,
    "year": 2025,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 13,
    "image": "https://cdn.myanimelist.net/images/anime/1282/151476.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1282/151476l.jpg",
    "type": "both",
    "studio": "Studio Pierrot",
    "duration": "24 min"
  },
  {
    "id": "to-be-hero-x",
    "title": "To Be Hero X",
    "titleJapanese": "凸变英雄X",
    "synopsis": "This is a world where heroes are created by people's trust, and the hero who has received the most trust is known as \"X.\" In this world, people's trust can be calculated by data, and these values will be reflected on everyone's wrist. As long as enough trust points are obtained, ordinary people can also have superpowers and become superheroes that save the world. However, the ever-changing trust value makes the hero's path full of unknowns...\n\n(Source: Bilibili, translated)",
    "genre": [
      "Action"
    ],
    "rating": 8.7,
    "year": 2025,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 24,
    "image": "https://cdn.myanimelist.net/images/anime/1492/150628.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1492/150628l.jpg",
    "type": "both",
    "studio": "Pb Animation",
    "duration": "23 min"
  },
  {
    "id": "fighting-spirit-new-challenger",
    "title": "Fighting Spirit: New Challenger",
    "titleJapanese": "はじめの一歩 新シリーズ",
    "synopsis": "Japanese Featherweight Champion Ippo Makunouchi has successfully defended and retained his title. Meanwhile, his rival, Ichirou Miyata, has resurfaced in Japan, aiming for his own Featherweight belt in the Oriental Pacific Boxing Federation. When the rest of the world comes knocking, however, will Japan's best fighters rise to the challenge and achieve glory at the top? Or will the small island nation be crushed under the weight of greater entities? This time, champions will become challengers issuing a call to the rest of the world and ready to show off their fighting spirit!\n\n[Written by MAL Rewrite]",
    "genre": [
      "Sports"
    ],
    "rating": 8.7,
    "year": 2009,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 25,
        "number": 25,
        "title": "Episode 25",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 26,
        "number": 26,
        "title": "Episode 26",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 26,
    "image": "https://cdn.myanimelist.net/images/anime/8/56617.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/8/56617l.jpg",
    "type": "both",
    "studio": "Madhouse",
    "duration": "23 min"
  },
  {
    "id": "howls-moving-castle",
    "title": "Howl's Moving Castle",
    "titleJapanese": "ハウルの動く城",
    "synopsis": "That jumbled piece of architecture, that cacophony of hissing steam and creaking joints, with smoke billowing from it as it moves on its own... That castle is home to the magnificent wizard Howl, infamous for both his magical prowess and for being a womanizer—or so the rumor goes in Sophie Hatter's small town. Sophie, as the plain daughter of a hatmaker, does not expect much from her future and is content with working hard in the shop. \n\nHowever, Sophie's simple life takes a turn for the exciting when she is ensnared in a disturbing situation, and the mysterious wizard appears to rescue her. Unfortunately, this encounter, brief as it may be, spurs the vain and vengeful Witch of the Waste—in a fit of jealousy caused by a past discord with Howl—to put a curse on the maiden, turning her into an old woman.\n\nIn an endeavor to return to normal, Sophie must accompany Howl and a myriad of eccentric companions—ranging from a powerful fire demon to a hopping scarecrow—in his living castle, on a ",
    "genre": [
      "Adventure",
      "Award Winning",
      "Drama",
      "Fantasy",
      "Romance"
    ],
    "rating": 8.7,
    "year": 2004,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "59 min"
      }
    ],
    "totalEpisodes": 1,
    "image": "https://cdn.myanimelist.net/images/anime/1470/138723.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1470/138723l.jpg",
    "type": "both",
    "studio": "Studio Ghibli",
    "duration": "59 min"
  },
  {
    "id": "princess-mononoke",
    "title": "Princess Mononoke",
    "titleJapanese": "もののけ姫",
    "synopsis": "When an Emishi village is attacked by a fierce demon boar, the young prince Ashitaka puts his life at stake to defend his tribe. With its dying breath, the beast curses the prince's arm, granting him demonic powers while gradually siphoning his life away. Instructed by the village elders to travel westward for a cure, Ashitaka arrives at Tatara, the Iron Town, where he finds himself embroiled in a fierce conflict: Lady Eboshi of Tatara, promoting constant deforestation, stands against Princess San and the sacred spirits of the forest, who are furious at the destruction brought by the humans. As the opposing forces of nature and mankind begin to clash in a desperate struggle for survival, Ashitaka attempts to seek harmony between the two, all the while battling the latent demon inside of him. Princess Mononoke is a tale depicting the connection of technology and nature, while showing the path to harmony that could be achieved by mutual acceptance.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Action",
      "Adventure",
      "Award Winning",
      "Fantasy"
    ],
    "rating": 8.7,
    "year": 1997,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "13 min"
      }
    ],
    "totalEpisodes": 1,
    "image": "https://cdn.myanimelist.net/images/anime/1355/147277.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1355/147277l.jpg",
    "type": "both",
    "studio": "Studio Ghibli",
    "duration": "13 min"
  },
  {
    "id": "demon-slayer-kimetsu-no-yaiba-the-movie-infinity-castle-part-1-akaza-returns",
    "title": "Demon Slayer: Kimetsu no Yaiba - The Movie: Infinity Castle - Part 1: Akaza Returns",
    "titleJapanese": "劇場版 鬼滅の刃 無限城編 第一章 猗窩座再来",
    "synopsis": "First anime movie of the trilogy adaptation of the Infinity Castle Arc.",
    "genre": [
      "Action",
      "Award Winning",
      "Supernatural"
    ],
    "rating": 8.7,
    "year": 2025,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "35 min"
      }
    ],
    "totalEpisodes": 1,
    "image": "https://cdn.myanimelist.net/images/anime/1681/148216.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1681/148216l.jpg",
    "type": "both",
    "studio": "ufotable",
    "duration": "35 min"
  },
  {
    "id": "the-legend-of-hei-2",
    "title": "The Legend of Hei 2",
    "titleJapanese": "罗小黑战记2",
    "synopsis": "When an attack shatters the fragile peace between the spirit world and humanity, Hei teams up with Luye, the last disciple of his Shifu Wuxian, to expose a conspiracy that threatens both realms—and the bond they've sworn to protect.\n\n(Source: AMC Theatres)",
    "genre": [
      "Adventure",
      "Drama",
      "Fantasy"
    ],
    "rating": 8.7,
    "year": 2025,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "58 min"
      }
    ],
    "totalEpisodes": 1,
    "image": "https://cdn.myanimelist.net/images/anime/1288/151853.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1288/151853l.jpg",
    "type": "both",
    "studio": "HMCH",
    "duration": "58 min"
  },
  {
    "id": "gurren-lagann",
    "title": "Gurren Lagann",
    "titleJapanese": "天元突破グレンラガン",
    "synopsis": "Simon and Kamina were born and raised in a deep, underground village, hidden from the fabled surface. Kamina is a free-spirited loose cannon bent on making a name for himself, while Simon is a timid young boy with no real aspirations. One day while excavating the earth, Simon stumbles upon a mysterious object that turns out to be the ignition key to an ancient artifact of war, which the duo dubs Lagann. Using their new weapon, Simon and Kamina fend off a surprise attack from the surface with the help of Yoko Littner, a hot-blooded redhead wielding a massive gun who wanders the world above.\n\nIn the aftermath of the battle, the sky is now in plain view, prompting Simon and Kamina to set off on a journey alongside Yoko to explore the wastelands of the surface. Soon, they join the fight against the \"Beastmen,\" humanoid creatures that terrorize the remnants of humanity in powerful robots called \"Gunmen.\" Although they face some challenges and setbacks, the trio bravely fights these new enem",
    "genre": [
      "Adventure",
      "Award Winning",
      "Sci-Fi"
    ],
    "rating": 8.7,
    "year": 2007,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 25,
        "number": 25,
        "title": "Episode 25",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 26,
        "number": 26,
        "title": "Episode 26",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 27,
        "number": 27,
        "title": "Episode 27",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 27,
    "image": "https://cdn.myanimelist.net/images/anime/4/5123.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/4/5123l.jpg",
    "type": "both",
    "studio": "Gainax",
    "duration": "24 min"
  },
  {
    "id": "mushi-shi",
    "title": "Mushi-Shi",
    "titleJapanese": "蟲師",
    "synopsis": "Mushi: the most basic forms of life in the world. They exist without any goals or purposes aside from simply \"being.\" They are beyond the shackles of the words \"good\" and \"evil.\" Mushi can exist in countless forms and are capable of mimicking things from the natural world such as plants, diseases, and even phenomena like rainbows.\n\nThis is, however, just a vague definition of these entities that inhabit the vibrant world of Mushishi, as to even call them a form of life would be an oversimplification. Detailed information on Mushi is scarce because the majority of humans are unaware of their existence.\n\nSo what are Mushi and why do they exist? This is the question that a Mushishi, Ginko, ponders constantly. Mushishi are those who research Mushi in hopes of understanding their place in the world's hierarchy of life.\n\nGinko chases rumors of occurrences that could be tied to Mushi, all for the sake of finding an answer.\n\nIt could, after all, lead to the meaning of life itself.\n\n[Written by",
    "genre": [
      "Adventure",
      "Mystery",
      "Slice of Life",
      "Supernatural"
    ],
    "rating": 8.7,
    "year": 2005,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 25,
        "number": 25,
        "title": "Episode 25",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 26,
        "number": 26,
        "title": "Episode 26",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 26,
    "image": "https://cdn.myanimelist.net/images/anime/2/73862.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/2/73862l.jpg",
    "type": "both",
    "studio": "Artland",
    "duration": "23 min"
  },
  {
    "id": "the-master-of-diabolism-3",
    "title": "The Master of Diabolism 3",
    "titleJapanese": "魔道祖师 完结篇",
    "synopsis": "Along an empty road in the rural countryside, Wei Wuxian and Lan Wangji stumble across a stone plaque that reads \"Yi City.\" Still on their quest to unravel the mystery behind the cursed severed arm, they venture into the deserted city to obtain further leads.\n\nHowever, with the appearance of a mysterious new cultivator, the demonic arm investigation leads Wei Wuxian and Lan Wangji to a plot that threatens the cultivation world as they know it. The gravity of the new situation escalates when the two find it involves the chief cultivator of the renowned Lanling Jin Sect—Jin Guangyao.\n\nAs the pair continue to piece together the crucial conspiracies of the cultivation history, their friends and colleagues grow suspicious of their motives. With the world against him, Wei Wuxian must prove he is not the demonic sorcerer people believe him to be to regain their trust and save the cultivation world from the sinister evil lurking within it.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Action",
      "Adventure",
      "Drama",
      "Fantasy",
      "Mystery"
    ],
    "rating": 8.7,
    "year": 2021,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 12,
    "image": "https://cdn.myanimelist.net/images/anime/1634/116782.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1634/116782l.jpg",
    "type": "both",
    "studio": "B.CMAY PICTURES",
    "duration": "24 min"
  },
  {
    "id": "attack-on-titan-season-3",
    "title": "Attack on Titan Season 3",
    "titleJapanese": "進撃の巨人 Season3",
    "synopsis": "Still threatened by the \"Titans\" that rob them of their freedom, mankind remains caged inside the two remaining walls. Efforts to eradicate these monsters continue; however, threats arise not only from the Titans beyond the walls, but from the humans within them as well.\n\nAfter being rescued from the Colossal and Armored Titans, Eren Yaeger devotes himself to improving his Titan form. Krista Lenz struggles to accept the loss of her friend, Captain Levi chooses Eren and his friends to form his new personal squad, and Commander Erwin Smith recovers from his injuries. All seems well for the soldiers, until the government suddenly demands custody of Eren and Krista. The Survey Corps' recent successes have drawn attention, and a familiar face from Levi's past is sent to collect the wanted soldiers. Sought after by the government, Levi and his new squad must evade their adversaries in hopes of keeping Eren and Krista safe.\n\nEren and his fellow soldiers are not only fighting for their surviva",
    "genre": [
      "Action",
      "Drama",
      "Suspense"
    ],
    "rating": 8.7,
    "year": 2018,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 12,
    "image": "https://cdn.myanimelist.net/images/anime/1173/92110.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1173/92110l.jpg",
    "type": "both",
    "studio": "Wit Studio",
    "duration": "23 min"
  },
  {
    "id": "monogatari-series-off-monster-season",
    "title": "Monogatari Series: Off & Monster Season",
    "titleJapanese": "〈物語〉シリーズ オフ&モンスターシーズン",
    "synopsis": "Koyomi Araragi spent his last year of high school helping girls in his town resolve various supernatural afflictions. But now Araragi has departed for university, leaving his friends to fend for themselves against new problems and curses that plague them. Yotsugi Ononoki, once a human corpse and now a living doll, takes residence in Araragi's home, keeping watch over his sister Tsukihi, a girl harboring a mystical secret of her own. As part of her duties, Yotsugi fills Araragi's vacated role as occult expert, assisting others in town with their issues.\n\nOne of these girls, middle school student Nadeko Sengoku, slowly recovers from her own recent brushes with the paranormal. She avoids returning to school, instead spending time alone in her room and pursuing her dream of becoming a professional manga artist. In order to speed up Nadeko's quest for mastery of her craft, Yotsugi convinces her to create four copies of herself, each representing a distinct aspect of Nadeko's personality. Ho",
    "genre": [
      "Comedy",
      "Mystery",
      "Supernatural"
    ],
    "rating": 8.6,
    "year": 2024,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "25 min"
      }
    ],
    "totalEpisodes": 14,
    "image": "https://cdn.myanimelist.net/images/anime/1142/146776.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1142/146776l.jpg",
    "type": "both",
    "studio": "Shaft",
    "duration": "25 min"
  },
  {
    "id": "umamusume-pretty-derby-beginning-of-a-new-era",
    "title": "Umamusume: Pretty Derby - Beginning of a New Era",
    "titleJapanese": "ウマ娘 プリティーダービー 新時代の扉",
    "synopsis": "Running in the highest level of horse racing, the Twinkle Series, is the dream of many horse girls. Although she has only taken part in freestyle racing before, horse girl Jungle Pocket discovers that very same aspiration after she witnesses Fuji Kiseki's tremendous victory on a grand stage. Equipped with unwavering self-confidence, Jungle Pocket is quickly able to accumulate a few victories, allowing her to participate in higher-level races.\n\nWhen Jungle Pocket takes part in her first G1 race alongside another rising racer—the highly intelligent and eccentric Agnes Tachyon—she realizes the enormous gap in their abilities. However, that only motivates Jungle Pocket even further as she resolves to get her revenge against Tachyon by winning the honored Triple Crown Classic title the following year. Although the world of horse racing is never predictable or easy, Jungle Pocket is determined to take down Tachyon and herald the beginning of a new era.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Sports"
    ],
    "rating": 8.6,
    "year": 2024,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "47 min"
      }
    ],
    "totalEpisodes": 1,
    "image": "https://cdn.myanimelist.net/images/anime/1427/142210.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1427/142210l.jpg",
    "type": "both",
    "studio": "CygamesPictures",
    "duration": "47 min"
  },
  {
    "id": "your-lie-in-april",
    "title": "Your Lie in April",
    "titleJapanese": "四月は君の嘘",
    "synopsis": "Kousei Arima is a child prodigy known as the \"Human Metronome\" for playing the piano with precision and perfection. Guided by a strict mother and rigorous training, Kousei dominates every competition he enters, earning the admiration of his musical peers and praise from audiences. When his mother suddenly passes away, the subsequent trauma makes him unable to hear the sound of a piano, and he never takes the stage thereafter.\n\nNowadays, Kousei lives a quiet and unassuming life as a junior high school student alongside his friends Tsubaki Sawabe and Ryouta Watari. While struggling to get over his mother's death, he continues to cling to music. His monochrome life turns upside down the day he encounters the eccentric violinist Kaori Miyazono, who thrusts him back into the spotlight as her accompanist. Through a little lie, these two young musicians grow closer together as Kaori tries to fill Kousei's world with color.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Drama",
      "Romance"
    ],
    "rating": 8.6,
    "year": 2014,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "22 min"
      }
    ],
    "totalEpisodes": 22,
    "image": "https://cdn.myanimelist.net/images/anime/1405/143284.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1405/143284l.jpg",
    "type": "both",
    "studio": "A-1 Pictures",
    "duration": "22 min"
  },
  {
    "id": "heaven-officials-blessing-season-2",
    "title": "Heaven Official's Blessing Season 2",
    "titleJapanese": "天官賜福 貳",
    "synopsis": "Although most gods in the heavenly realm avoid dealing with the forgotten god Xie Lian, Heavenly Emperor Jun Wu holds him in good graces. Xie Lian's luck is otherwise terrible, and adding to his troubles, the gods seem to suspect that Xie Lian's recent companion was the dreaded Ghost King Hua Cheng. Despite what others may think of him, Xie Lian fondly recalls Hua Cheng's promise: the next time they meet, Hua Cheng will appear in his true form.\n\nJun Wu informs Xie Lian of the unsettling news that a god's distress signal was seen coming from the Ghost City—the most prosperous place in the ghost realm, where the only law is Hua Cheng himself. As Xie Lian has no qualms about stepping into Hua Cheng's territory, he infiltrates the city to locate the lost god. There, the genuine Hua Cheng is already waiting. He is the most feared being across the three realms, yet before Xie Lian, his arrogance erodes. Without revealing the reason for his generosity, he spares no power or means to ease the ",
    "genre": [
      "Action",
      "Adventure",
      "Drama",
      "Fantasy"
    ],
    "rating": 8.6,
    "year": 2023,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 12,
    "image": "https://cdn.myanimelist.net/images/anime/1203/139210.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1203/139210l.jpg",
    "type": "both",
    "studio": "Red Dog Culture House",
    "duration": "24 min"
  },
  {
    "id": "fatestay-night-heavens-feel-iii-spring-song",
    "title": "Fate/stay night: Heaven's Feel - III. Spring Song",
    "titleJapanese": "劇場版「Fate/stay night [Heaven's Feel] III.spring song」",
    "synopsis": "The Fifth Holy Grail War in Fuyuki City has reached a turning point in which the lives of all participants are threatened as the hidden enemy finally reveals itself. As Shirou Emiya, Rin Toosaka, and Illyasviel von Einzbern discover the true, corruptive nature of the shadow that has been rampaging throughout the city, they realize just how dire the situation is. In order to protect their beloved ones, the group must hold their own against the seemingly insurmountable enemy force—even if some of those foes were once their allies, or perhaps, something more intimate.\n\nAs the final act of this chaotic war commences, the ideals Shirou believes will soon be challenged by an excruciating dilemma: is it really possible to save a world where everything seems to have gone wrong?\n\n[Written by MAL Rewrite]",
    "genre": [
      "Action",
      "Fantasy"
    ],
    "rating": 8.6,
    "year": 2020,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "2 min"
      }
    ],
    "totalEpisodes": 1,
    "image": "https://cdn.myanimelist.net/images/anime/1142/112957.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1142/112957l.jpg",
    "type": "both",
    "studio": "ufotable",
    "duration": "2 min"
  },
  {
    "id": "natsumes-book-of-friends-season-4",
    "title": "Natsume's Book of Friends Season 4",
    "titleJapanese": "夏目友人帳 肆",
    "synopsis": "Takashi Natsume, the timid youkai expert and master of the Book of Friends, continues his journey towards self-understanding and acceptance with the help of friends both new and old. His most important ally is still his gluttonous and sake-loving bodyguard, the arrogant but fiercely protective wolf spirit Madara—or Nyanko-sensei, as Madara is called when in his usual disguise of an unassuming, pudgy cat.\n\nNatsume, while briefly separated from Nyanko-sensei, is ambushed and kidnapped by a strange group of masked, monkey-like youkai, who have spirited him away to their forest as they desperately search for the Book of Friends. Realizing that his \"servant\" has been taken out from right under his nose, Nyanko-sensei enlists the help of Natsume's youkai friends and mounts a rescue operation. However, the forest of the monkey spirits holds many dangerous enemies, including the Matoba Clan, Natsume's old nemesis.\n\nStretching from the formidable hideout of the Matoba to Natsume's own childhood",
    "genre": [
      "Slice of Life",
      "Supernatural"
    ],
    "rating": 8.6,
    "year": 2012,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 13,
    "image": "https://cdn.myanimelist.net/images/anime/3/37449.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/3/37449l.jpg",
    "type": "both",
    "studio": "Brain's Base",
    "duration": "24 min"
  },
  {
    "id": "ping-pong-the-animation",
    "title": "Ping Pong the Animation",
    "titleJapanese": "ピンポン THE ANIMATION",
    "synopsis": "Despite being polar opposites, Makoto \"Smile\" Tsukimoto and Yutaka \"Peco\" Hoshino have been best friends since childhood. Although the overly confident Peco strives to be the best ping-pong player in the world, he often skips practice, earning the ire of his fellow teammates on the Katase High School ping-pong team. Meanwhile, Smile—in spite of his innate talent for the sport—cannot help but hold back his full strength when playing against others. Through their mutual love for ping-pong, the two have developed a bond that is seemingly unbreakable.\n\nWhen Peco hears that an ex-national team player from China is coming to Japan, he drags Smile over to rival Tsujido High School to observe them. The subsequent trip leads to a clash between Peco and Kong Wenge, who overwhelmingly defeats the former in one game. Stunned by such a comprehensive loss, Peco finds himself questioning why he plays to begin with. Seeing his potential as a player, Katase's coach begins to train Smile to overcome his",
    "genre": [
      "Award Winning",
      "Drama",
      "Sports"
    ],
    "rating": 8.6,
    "year": 2014,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 11,
    "image": "https://cdn.myanimelist.net/images/anime/1586/146565.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1586/146565l.jpg",
    "type": "both",
    "studio": "Tatsunoko Production",
    "duration": "23 min"
  },
  {
    "id": "odd-taxi",
    "title": "Odd Taxi",
    "titleJapanese": "オッドタクシー",
    "synopsis": "Eccentric and blunt, the walrus Hiroshi Odokawa lives a relatively normal life. He drives a taxi for a living, and there he meets several unique individuals: the jobless Taichi Kabasawa who is dead-set on going viral, the mysterious nurse Miho Shirakawa, the struggling comedic duo \"Homo Sapiens,\" and Dobu, a well-known delinquent.\n\nBut Odokawa's simple way of life is about to be turned upside down. The case of a missing girl the police have been tracking leads back to him, and now both the yakuza and a duo of corrupt cops are on his tail.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Award Winning",
      "Drama",
      "Mystery",
      "Suspense"
    ],
    "rating": 8.6,
    "year": 2021,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 13,
    "image": "https://cdn.myanimelist.net/images/anime/1981/113348.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1981/113348l.jpg",
    "type": "both",
    "studio": "OLM",
    "duration": "23 min"
  },
  {
    "id": "haikyu-movie-the-dumpster-battle",
    "title": "Haikyu!! Movie: The Dumpster Battle",
    "titleJapanese": "劇場版ハイキュー!! ゴミ捨て場の決戦",
    "synopsis": "Kenma Kozume has never considered volleyball fun or thrilling: it is merely something he is good at. But now Nekoma High School's volleyball team has qualified for the Spring Nationals and prepares to battle their long-standing rivals—Karasuno. Now, Kenma has to analyze the most confounding and resilient team and lead Nekoma to victory against them. Moreover, he will play against his friend Shouyou Hinata, Karasuno's short but incredibly proficient middle blocker.\n\nKarasuno has never been able to beat Nekoma in practice matches. Even so, despite his usual indifference, Kenma feels a tinge of excitement at the prospect of facing Karasuno in a high-stakes official game with no do-overs. To advance to the semifinals and ultimately restore their team's former glory, Karasuno must find a way to overcome Kenma's brilliant strategy and defeat Nekoma in their own territory.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Sports"
    ],
    "rating": 8.6,
    "year": 2024,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 1,
    "image": "https://cdn.myanimelist.net/images/anime/1665/140360.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1665/140360l.jpg",
    "type": "both",
    "studio": "Production I.G",
    "duration": "24 min"
  },
  {
    "id": "made-in-abyss",
    "title": "Made in Abyss",
    "titleJapanese": "メイドインアビス",
    "synopsis": "The Abyss—a gaping chasm stretching down into the depths of the earth, filled with mysterious creatures and relics from a time long past. How did it come to be? What lies at the bottom? Countless brave individuals, known as Divers, have sought to solve these mysteries of the Abyss, fearlessly descending into its darkest realms. The best and bravest of the Divers, the White Whistles, are hailed as legends by those who remain on the surface.\n\nRiko, daughter of the missing White Whistle Lyza the Annihilator, aspires to become like her mother and explore the furthest reaches of the Abyss. However, just a novice Red Whistle herself, she is only permitted to roam its most upper layer. Even so, Riko has a chance encounter with a mysterious robot with the appearance of an ordinary young boy. She comes to name him Reg, and he has no recollection of the events preceding his discovery. Certain that the technology to create Reg must come from deep within the Abyss, the two decide to venture forth ",
    "genre": [
      "Adventure",
      "Drama",
      "Fantasy",
      "Mystery",
      "Sci-Fi"
    ],
    "rating": 8.6,
    "year": 2017,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "25 min"
      }
    ],
    "totalEpisodes": 13,
    "image": "https://cdn.myanimelist.net/images/anime/6/86733.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/6/86733l.jpg",
    "type": "both",
    "studio": "Kinema Citrus",
    "duration": "25 min"
  },
  {
    "id": "cyberpunk-edgerunners",
    "title": "Cyberpunk: Edgerunners",
    "titleJapanese": "サイバーパンク エッジランナーズ",
    "synopsis": "Dreams are doomed to die in Night City, a futuristic Californian metropolis. As a teenager living in the city's slums, David Martinez is trying to fulfill his mother's lifelong wish for him to reach the top of Arasaka, the world's leading security corporation. To this end, he attends the prestigious Arasaka Academy while his mother works tirelessly to keep their family afloat.\n\nWhen an incident with a street gang leaves David's life in tatters, he stumbles upon Sandevistan cyberware—a prosthetic that grants its wearer superhuman speed. Fueled by rage, David implants the device in his back, using it to exact revenge on one of his tormentors. This gets him expelled from the academy, shattering his hopes of ever making his mother proud.\n\nAfter witnessing David's newfound abilities, the beautiful data thief Lucyna \"Lucy\" Kushinada offers to team up with him, handing him a ticket to salvation. However, associating with Lucy introduces David to the world of Edgerunners—cyborg criminals who w",
    "genre": [
      "Action",
      "Sci-Fi"
    ],
    "rating": 8.6,
    "year": 2022,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "25 min"
      }
    ],
    "totalEpisodes": 10,
    "image": "https://cdn.myanimelist.net/images/anime/1818/126435.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1818/126435l.jpg",
    "type": "both",
    "studio": "Trigger",
    "duration": "25 min"
  },
  {
    "id": "death-note",
    "title": "Death Note",
    "titleJapanese": "デスノート",
    "synopsis": "Brutal murders, petty thefts, and senseless violence pollute the human world. In contrast, the realm of death gods is a humdrum, unchanging gambling den. The ingenious 17-year-old Japanese student Light Yagami and sadistic god of death Ryuk share one belief: their worlds are rotten.\n\nFor his own amusement, Ryuk drops his Death Note into the human world. Light stumbles upon it, deeming the first of its rules ridiculous: the human whose name is written in this note shall die. However, the temptation is too great, and Light experiments by writing a felon's name, which disturbingly enacts his first murder.\n\nAware of the terrifying godlike power that has fallen into his hands, Light—under the alias Kira—follows his wicked sense of justice with the ultimate goal of cleansing the world of all evil-doers. The meticulous mastermind detective L is already on his trail, but as Light's brilliance rivals L's, the grand chase for Kira turns into an intense battle of wits that can only end when one o",
    "genre": [
      "Supernatural",
      "Suspense"
    ],
    "rating": 8.6,
    "year": 2006,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 25,
        "number": 25,
        "title": "Episode 25",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 26,
        "number": 26,
        "title": "Episode 26",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 27,
        "number": 27,
        "title": "Episode 27",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 28,
        "number": 28,
        "title": "Episode 28",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 29,
        "number": 29,
        "title": "Episode 29",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 30,
        "number": 30,
        "title": "Episode 30",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 31,
        "number": 31,
        "title": "Episode 31",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 32,
        "number": 32,
        "title": "Episode 32",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 33,
        "number": 33,
        "title": "Episode 33",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 34,
        "number": 34,
        "title": "Episode 34",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 35,
        "number": 35,
        "title": "Episode 35",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 36,
        "number": 36,
        "title": "Episode 36",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 37,
        "number": 37,
        "title": "Episode 37",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 37,
    "image": "https://cdn.myanimelist.net/images/anime/1079/138100.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1079/138100l.jpg",
    "type": "both",
    "studio": "Madhouse",
    "duration": "23 min"
  },
  {
    "id": "link-click-season-2",
    "title": "Link Click Season 2",
    "titleJapanese": "时光代理人II",
    "synopsis": "The attempt to capture the mysterious perpetrator who possesses people ends tragically: Lu Guang is rushed to the hospital in a critical state, while Cheng Xiaoshi is arrested for the alleged crime. In light of recent events, the father of Liu Min unleashes his skilled, ruthless lawyer—Qian Jin—after Police Chief Li Xiao, who is spearheading the investigation related to the photo studio owned by Qiao Ling.\n\nIt appears that no one is safe from the unpredictable and fatal attacks of the adversary who painstakingly hides their identity. As he tries to learn from his past mistakes, Cheng Xiaoshi must act swiftly and decisively to put an end to this devastating trail of death.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Drama",
      "Mystery",
      "Suspense"
    ],
    "rating": 8.6,
    "year": 2023,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 12,
    "image": "https://cdn.myanimelist.net/images/anime/1897/137108.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1897/137108l.jpg",
    "type": "both",
    "studio": "LAN Studio",
    "duration": "24 min"
  },
  {
    "id": "look-back",
    "title": "Look Back",
    "titleJapanese": "ルックバック",
    "synopsis": "Ayumu Fujino may only be in the fourth grade, but she already basks in high praise for her hand-drawn four-panel comics featured in the school's newspaper. However, when she is asked to share the page with Kyoumoto—a reclusive student she has never met—Fujino feels inadequate for the first time: her free-spirited drawings look embarrassingly amateurish next to Kyoumoto's breathtakingly detailed art.\n\nFor a year, Fujino shuts out the world, obsessively studying manga creation and drawing tirelessly to catch up to her faceless competition. But Kyoumoto's talent far exceeds hers, and Fujino quits it all. Another year passes, and on the day of their graduation, Fujino finally meets Kyoumoto. This unkempt, shy, and stuttering girl has actually been Fujino's biggest fan all along. Their encounter reignites Fujino's passion for art and sparks the beginning of a years-long friendship built on rivalry, admiration, and their shared love of manga.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Award Winning",
      "Drama"
    ],
    "rating": 8.6,
    "year": 2024,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "57 min"
      }
    ],
    "totalEpisodes": 1,
    "image": "https://cdn.myanimelist.net/images/anime/1716/142633.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1716/142633l.jpg",
    "type": "both",
    "studio": "Studio DURIAN",
    "duration": "57 min"
  },
  {
    "id": "jujutsu-kaisen-the-culling-game-part-1",
    "title": "Jujutsu Kaisen: The Culling Game Part 1",
    "titleJapanese": "呪術廻戦 「死滅回游 前編」",
    "synopsis": "Kenjaku, the one known as Noritoshi Kamo and most recently as Suguru Getou, has initiated the next step in his destructive, thousand-year plan of ordinary humans' evolution and eventual eradication. The jujutsu world higher-ups reinstate 15-year-old Yuuji Itadori's execution, as Satoru Gojou is incapacitated as a result of Kenjaku's master plan in Shibuya. While Yuuji is unaware of this, he patrols the abandoned Tokyo streets with Chousou, exterminating any and all cursed spirits in his way.\n\nMeanwhile, the bigoted and arrogant Naoya Zenin's pride takes a hit when Megumi Fushiguro is selected as the Zenin Clan's next head. To draw out Megumi and eliminate him, he goes after Yuuji—but Yuuta Okkotsu is set on being Yuuji's executioner. Kenjaku's \"Culling Game\"—a rigorous battle royale spanning throughout Japan and forcing the jujutsu competitors to kill each other—is set in motion, and the young jujutsu sorcerers join the fray to settle old scores, free Gojou, and liberate the jujutsu wo",
    "genre": [
      "Action",
      "Supernatural"
    ],
    "rating": 8.6,
    "year": 2026,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 12,
    "image": "https://cdn.myanimelist.net/images/anime/1659/154920.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1659/154920l.jpg",
    "type": "both",
    "studio": "MAPPA",
    "duration": "23 min"
  },
  {
    "id": "lord-of-mysteries",
    "title": "Lord of Mysteries",
    "titleJapanese": "诡秘之主 小丑篇",
    "synopsis": "In a Victorian world of steam, dreadnoughts, and occult horrors, Zhou Mingrui awakens as Klein Moretti. He walks a razor's edge between light and darkness, entangled with warring Churches. This is the legend of unlimited potential...and unspeakable danger.\n\n(Source: Crunchyroll)",
    "genre": [
      "Action",
      "Fantasy",
      "Mystery",
      "Suspense"
    ],
    "rating": 8.6,
    "year": 2025,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "35 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "35 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "35 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "35 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "35 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "35 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "35 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "35 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "35 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "35 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "35 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "35 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "35 min"
      }
    ],
    "totalEpisodes": 13,
    "image": "https://cdn.myanimelist.net/images/anime/1952/149229.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1952/149229l.jpg",
    "type": "both",
    "studio": "B.CMAY PICTURES",
    "duration": "35 min"
  },
  {
    "id": "natsumes-book-of-friends-season-6",
    "title": "Natsume's Book of Friends Season 6",
    "titleJapanese": "夏目友人帳 陸",
    "synopsis": "Takashi Natsume has grown accustomed to his encounters with youkai through the Book of Friends, which contains the names of youkai whom his grandmother, Reiko Natsume, has sealed in contracts. These encounters allow Natsume to better understand the youkai, Reiko, and himself. \n\nThe Book of Friends is a powerful tool that can be used to control youkai; it is sought after by both youkai and exorcists alike. Natsume just wants to live out his daily life in peace but is constantly disrupted by these experiences. If he is to end this torment, Natsume must explore more about the book and the world of exorcism, as well as begin to open his heart to those who can help him.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Slice of Life",
      "Supernatural"
    ],
    "rating": 8.6,
    "year": 2017,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 11,
    "image": "https://cdn.myanimelist.net/images/anime/6/84416.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/6/84416l.jpg",
    "type": "both",
    "studio": "Shuka",
    "duration": "23 min"
  },
  {
    "id": "gurren-lagann-the-movie-the-lights-in-the-sky-are-stars",
    "title": "Gurren Lagann The Movie: The Lights in the Sky are Stars",
    "titleJapanese": "劇場版 天元突破グレンラガン 螺巌篇",
    "synopsis": "Humans have enjoyed their lavish, peaceful, and prosperous lives for seven years since the day the almighty Spiral King was defeated—the day they reclaimed their homeland, Earth. However, the boon of this lifestyle leaves them unprepared when an unknown, hostile threat arises due to the ever-growing human population. This calamity is the Anti-Spiral—a fearsome enemy with unparalleled power. \n \nAs the Spiral King's prognosis postulating the destruction of \"The Spiral's World\" begins to come true, the pieces are in place, and Team Dai-Gurren is ready. With his late brother's hope to see a better future for mankind, Simon—along with Nia Teppelin and the rest of the team—is determined to overthrow the mighty Anti-Spiral in order to revive humanity's lost hope.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Sci-Fi"
    ],
    "rating": 8.6,
    "year": 2009,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "5 min"
      }
    ],
    "totalEpisodes": 1,
    "image": "https://cdn.myanimelist.net/images/anime/12/19698.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/12/19698l.jpg",
    "type": "both",
    "studio": "Gainax",
    "duration": "5 min"
  },
  {
    "id": "kaguya-sama-love-is-war",
    "title": "Kaguya-sama: Love is War?",
    "titleJapanese": "かぐや様は告らせたい？～天才たちの恋愛頭脳戦～",
    "synopsis": "After a slow but eventful summer vacation, Shuchiin Academy's second term is now starting in full force. As August transitions into September, Miyuki Shirogane's birthday looms ever closer, leaving Kaguya Shinomiya in a serious predicament as to how to celebrate it. Furthermore, the tenure of the school's 67th student council is coming to an end. Due to the council members being in different classes, the only time Kaguya and Miyuki have to be together will soon disappear, putting all of their cunning plans at risk.\n\nA long and difficult election that will decide the fate of the new student council awaits, as multiple challengers fight for the coveted title of president.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Comedy",
      "Romance"
    ],
    "rating": 8.6,
    "year": 2020,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 12,
    "image": "https://cdn.myanimelist.net/images/anime/1764/106659.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1764/106659l.jpg",
    "type": "both",
    "studio": "A-1 Pictures",
    "duration": "24 min"
  },
  {
    "id": "haikyu-2nd-season",
    "title": "Haikyu!! 2nd Season",
    "titleJapanese": "ハイキュー!! セカンドシーズン",
    "synopsis": "Following their participation at the Inter-High, the Karasuno High School volleyball team attempts to refocus their efforts, aiming to conquer the Spring tournament instead. \n\nWhen they receive an invitation from long-standing rival Nekoma High, Karasuno agrees to take part in a large training camp alongside many notable volleyball teams in Tokyo and even some national level players. By playing with some of the toughest teams in Japan, they hope not only to sharpen their skills, but also come up with new attacks that would strengthen them. Moreover, Hinata and Kageyama attempt to devise a more powerful weapon, one that could possibly break the sturdiest of blocks. \n\nFacing what may be their last chance at victory before the senior players graduate, the members of Karasuno's volleyball team must learn to settle their differences and train harder than ever if they hope to overcome formidable opponents old and new—including their archrival Aoba Jousai and its world-class setter Tooru Oika",
    "genre": [
      "Sports"
    ],
    "rating": 8.6,
    "year": 2015,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 25,
        "number": 25,
        "title": "Episode 25",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 25,
    "image": "https://cdn.myanimelist.net/images/anime/9/76662.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/9/76662l.jpg",
    "type": "both",
    "studio": "Production I.G",
    "duration": "24 min"
  },
  {
    "id": "fighting-spirit-rising",
    "title": "Fighting Spirit: Rising",
    "titleJapanese": "はじめの一歩 Rising",
    "synopsis": "Japanese Featherweight Champion Makunouchi Ippo has defended his title belt once more with the help of his devastating signature move: the Dempsey Roll. However, new challengers are rising up left and right, claiming to have an answer for the move responsible for crushing his opponents. Will Ippo be able to step up to the challenge, or will the weight of his pride destroy him before he finds out just what it means to be strong? Meanwhile, fellow Kamogawa Gym mate Aoki Masaru is just a hop, skip, and a Frog Punch away from claiming his own belt, ready to take on the Japanese Lightweight Champion!\n\nHajime no Ippo: Rising continues Ippo's quest to become stronger, featuring the same cast of loveable dimwits from Kamogawa Gym, as they put their bodies and hearts on the line to make their way in the harsh world of professional boxing. With a will of iron, Ippo steps into the ring once again.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Sports"
    ],
    "rating": 8.6,
    "year": 2013,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 25,
        "number": 25,
        "title": "Episode 25",
        "thumbnail": "",
        "duration": "22 min"
      }
    ],
    "totalEpisodes": 25,
    "image": "https://cdn.myanimelist.net/images/anime/6/56147.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/6/56147l.jpg",
    "type": "both",
    "studio": "Madhouse",
    "duration": "22 min"
  },
  {
    "id": "berserk",
    "title": "Berserk",
    "titleJapanese": "剣風伝奇ベルセルク",
    "synopsis": "Guts, a man who will one day be known as the Black Swordsman, is a young traveling mercenary characterized by the large greatsword he carries. He accepts jobs that offer the most money, but he never stays with one group for long—until he encounters the Band of the Falcon. Ambushed after completing a job, Guts crushes many of its members in combat. Griffith, The Band of the Falcon's leader and founder, takes an interest in Guts and duels him. While the others are no match for Guts, Griffith defeats him in one blow.\n\nIncapacitated and taken into the Band of the Falcon's camp to recover, Guts wakes up two days later. He confronts Griffith, and the two duel yet again, only this time with a condition: Guts will join the Band of the Falcon if he loses. Due to his fresh injuries, Guts loses the fight and is inducted by Griffith.\n\nIn three years' time, Guts has become one of the Band of the Falcon's commanders. On the battlefield, his combat prowess is second only to Griffith as he takes on la",
    "genre": [
      "Action",
      "Adventure",
      "Drama",
      "Fantasy",
      "Horror"
    ],
    "rating": 8.6,
    "year": 1997,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 25,
        "number": 25,
        "title": "Episode 25",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 25,
    "image": "https://cdn.myanimelist.net/images/anime/1384/119988.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1384/119988l.jpg",
    "type": "both",
    "studio": "OLM",
    "duration": "23 min"
  },
  {
    "id": "bungo-stray-dogs-5",
    "title": "Bungo Stray Dogs 5",
    "titleJapanese": "文豪ストレイドッグス",
    "synopsis": "The Armed Detective Agency is still on the run from the Hunting Dogs, but not all hope is lost. Detective Ranpo Edogawa has a plan to prove the Agency's innocence and save the world from chaos: to find and capture Kamui—the leader of the terrorist organization Decay of the Angel. \n\nIn order to determine Kamui's whereabouts, Ranpo and his colleague Atsushi Nakajima must convince Ouchi Fukuchi, the renowned captain of the Hunting Dogs, for amnesty. Although Fukuchi was tasked with arresting the members of the Agency, his past with the Agency's president, Yukichi Fukuzawa, may be the key to earning his trust. But unbeknownst to them, Fukuchi might not be as honorable as he proclaims.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Action",
      "Mystery"
    ],
    "rating": 8.6,
    "year": 2023,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 11,
    "image": "https://cdn.myanimelist.net/images/anime/1161/136691.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1161/136691l.jpg",
    "type": "both",
    "studio": "Bones",
    "duration": "23 min"
  },
  {
    "id": "mushoku-tensei-jobless-reincarnation-part-2",
    "title": "Mushoku Tensei: Jobless Reincarnation Part 2",
    "titleJapanese": "無職転生 ～異世界行ったら本気だす～ 第2クール",
    "synopsis": "After the mysterious mana calamity, Rudeus Greyrat and his fierce student Eris Boreas Greyrat are teleported to the Demon Continent. There, they team up with their newfound companion Ruijerd Supardia—the former leader of the Superd's Warrior group—to form \"Dead End,\" a successful adventurer party. Making a name for themselves, the trio journeys across the continent to make their way back home to Fittoa.\n\nFollowing the advice he received from the faceless god Hitogami, Rudeus saves Kishirika Kishirisu, the Great Emperor of the Demon World, who rewards him by granting him a strange power. Now, as Rudeus masters the powerful ability that offers a number of new opportunities, it might prove to be more than what he bargained for when unexpected dangers threaten to hinder their travels.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Adventure",
      "Drama",
      "Fantasy",
      "Ecchi"
    ],
    "rating": 8.6,
    "year": 2021,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 12,
    "image": "https://cdn.myanimelist.net/images/anime/1028/117777.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1028/117777l.jpg",
    "type": "both",
    "studio": "Studio Bind",
    "duration": "23 min"
  },
  {
    "id": "made-in-abyss-dawn-of-the-deep-soul",
    "title": "Made in Abyss: Dawn of the Deep Soul",
    "titleJapanese": "劇場版メイドインアビス 深き魂の黎明",
    "synopsis": "After bonding over a tragic loss, the long-suffering Nanachi joins Riko and Reg on their journey into the depths of the Abyss. Awaiting the children is the Sea of Corpses—the Abyss's fifth layer, and the deepest level from which a traveler can return without losing their human form.\n\nThe masked sadist Bondrewd stands between the children and the rest of their adventure. Bondrewd's horrific laboratory serves as a final checkpoint for those wishing to traverse deeper into the Abyss, and the sociopathic scientist has no desire to allow Riko's party to pass through at no cost. Deeply scarred by Bondrewd's impact on their childhood, Nanachi is engulfed in turmoil over his resurgence in their life.\n\nBondrewd's only apparent weakness is Prushka, a brash child who claims to be his daughter. Riko, Reg, and Nanachi befriend Prushka and work with the girl to overcome her father's machinations and breach the Abyss's sixth layer.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Adventure",
      "Drama",
      "Fantasy",
      "Mystery",
      "Sci-Fi"
    ],
    "rating": 8.6,
    "year": 2020,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "45 min"
      }
    ],
    "totalEpisodes": 1,
    "image": "https://cdn.myanimelist.net/images/anime/1803/117183.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1803/117183l.jpg",
    "type": "both",
    "studio": "Kinema Citrus",
    "duration": "45 min"
  },
  {
    "id": "chiikawa",
    "title": "Chiikawa",
    "titleJapanese": "ちいかわ",
    "synopsis": "What's a Chiikawa? No one really knows, but everyone can see they're small, they're cute, and they're always having a fun time! Join them as they explore their surreal world with the sharp humor and clever antics that make the Chiikawa irresistible.\n\n(Source: HIDIVE, edited)",
    "genre": [
      "Slice of Life"
    ],
    "rating": 8.6,
    "year": 2022,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "1 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "1 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "1 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "1 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "1 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "1 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "1 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "1 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "1 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "1 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "1 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "1 min"
      }
    ],
    "totalEpisodes": 12,
    "image": "https://cdn.myanimelist.net/images/anime/1783/121944.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1783/121944l.jpg",
    "type": "both",
    "studio": "Doga Kobo",
    "duration": "1 min"
  },
  {
    "id": "rascal-does-not-dream-of-a-dreaming-girl",
    "title": "Rascal Does Not Dream of a Dreaming Girl",
    "titleJapanese": "青春ブタ野郎はゆめみる少女の夢を見ない",
    "synopsis": "Six months ago, Sakuta Azusagawa had a chance encounter with a bunny girl in a library. Ever since then, he's been blissfully happy with his girlfriend: Mai Sakurajima, that same bunny girl. However, the reappearance of his mysterious first crush, the now-adult Shouko Makinohara, adds a new complication to his relationship with Mai. To make matters worse, he then encounters a middle school Shouko in the hospital, suffering from a grave illness. Mysteriously, his old scars begin throbbing whenever he's near her.\n\nWith Shouko's bizarre situation somehow revolving around him, Sakuta will need to come to terms with his own conflicting feelings, for better or worse. With a girl's life in his hands, just what can he do?\n\n[Written by MAL Rewrite]",
    "genre": [
      "Drama",
      "Romance",
      "Supernatural"
    ],
    "rating": 8.6,
    "year": 2019,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "30 min"
      }
    ],
    "totalEpisodes": 1,
    "image": "https://cdn.myanimelist.net/images/anime/1613/102179.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1613/102179l.jpg",
    "type": "both",
    "studio": "CloverWorks",
    "duration": "30 min"
  },
  {
    "id": "the-disappearance-of-haruhi-suzumiya",
    "title": "The Disappearance of Haruhi Suzumiya",
    "titleJapanese": "涼宮ハルヒの消失",
    "synopsis": "On a cold December day, Kyon arrives at school prepared for another outing with his fellow SOS Brigade members. However, much to his surprise, he discovers that almost everything has changed completely: Haruhi Suzumiya and Itsuki Koizumi are nowhere to be found; Mikuru Asahina does not recognize him at all; Yuki Nagato is a regular human; and Ryouko Asakura has mysteriously returned. Although he is no stranger to the supernatural, Kyon is disturbed by this odd turn of events and decides to investigate on his own.\n\nFinding himself to be the only person that is aware of the previous reality, Kyon is now faced with a difficult choice: to finally live the normal life he has always wanted, or uncover a way to turn back the hands of time and restore his chaotic yet familiar world.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Award Winning",
      "Mystery",
      "Sci-Fi",
      "Supernatural"
    ],
    "rating": 8.6,
    "year": 2010,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "41 min"
      }
    ],
    "totalEpisodes": 1,
    "image": "https://cdn.myanimelist.net/images/anime/1248/112352.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1248/112352l.jpg",
    "type": "both",
    "studio": "Kyoto Animation",
    "duration": "41 min"
  },
  {
    "id": "made-in-abyss-the-golden-city-of-the-scorching-sun",
    "title": "Made in Abyss: The Golden City of the Scorching Sun",
    "titleJapanese": "メイドインアビス 烈日の黄金郷",
    "synopsis": "After surviving the brutal challenges of Idofront, Riko now possesses a White Whistle, allowing her to descend into the Abyss's sixth layer—The Capital of the Unreturned. Alongside Reg and Nanachi, Riko begins to explore the uncharted domain, where the ruins of the promised Golden City are located.\n\nAs the trio starts to adapt to the harsh environment, they soon encounter dangerous creatures and treacherous landscapes. Their expedition leads them to a village inhabited by strange beings known as \"hollows.\" Despite the creeping sense of unease that welcomes them, the three venture onward to uncover the mysteries of the settlement and long-lost legacies of the forgotten adventurers who once descended into the horrors of the unexplored Abyss.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Adventure",
      "Drama",
      "Fantasy",
      "Mystery",
      "Sci-Fi"
    ],
    "rating": 8.6,
    "year": 2022,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "25 min"
      }
    ],
    "totalEpisodes": 12,
    "image": "https://cdn.myanimelist.net/images/anime/1864/122519.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1864/122519l.jpg",
    "type": "both",
    "studio": "Kinema Citrus",
    "duration": "25 min"
  },
  {
    "id": "delicious-in-dungeon",
    "title": "Delicious in Dungeon",
    "titleJapanese": "ダンジョン飯",
    "synopsis": "Adventuring knight Laios Touden leads a small party through a seemingly endless dungeon, a subterranean maze full of dangerous monsters and precarious traps. Through the use of advanced magic, an explorer can sometimes be resurrected, allowing them to learn from past mistakes and give traversing the dungeon another go. However, when a powerful dragon eats Falin, Laios' spellcasting sister, she sends her brother and his companions back to the beginning to save them from permanent ends.\n\nThough strapped for cash and equipment, Laios resolves to fight his way through the dungeon and rescue Falin before she can be digested by the dragon. Despite some of Laios' allies abandoning him, two remain by his side: elven mage Marcille Donato and halfling locksmith Chilchuck Tims. Due to their lack of funds, the party faces the daunting prospect of starving before being able to complete their quest. However, they find salvation in Senshi, a dwarven warrior with a penchant for cooking and safely eati",
    "genre": [
      "Adventure",
      "Comedy",
      "Fantasy",
      "Gourmet"
    ],
    "rating": 8.6,
    "year": 2024,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "25 min"
      }
    ],
    "totalEpisodes": 24,
    "image": "https://cdn.myanimelist.net/images/anime/1711/142478.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1711/142478l.jpg",
    "type": "both",
    "studio": "Trigger",
    "duration": "25 min"
  },
  {
    "id": "evangelion-3010-thrice-upon-a-time",
    "title": "Evangelion: 3.0+1.0 Thrice Upon a Time",
    "titleJapanese": "シン・エヴァンゲリオン劇場版𝄇",
    "synopsis": "Following NERV's failed attempt to retrieve the Spears of Longinus and carry out the Human Instrumentality Project, the destruction caused by the Fourth Impact has been largely averted. In a state of disarray, Shinji Ikari, Asuka Langley Shikinami, and Rei Ayanami travel to Village 3—a survivor settlement free from Earth's ruination. There, Shinji slowly comes to terms with his past, developing an entirely different life from his days as an Evangelion pilot.\n\nMeanwhile, NERV makes preparations to continue the Instrumentality Project by means of a new Impact. When WILLE's main aerial battleship arrives at the village, Shinji decides to board, believing that he can help by piloting an Evangelion. As new secrets are uncovered and a battle between WILLE and NERV approaches, the future of Earth hangs in the balance. Can Shinji save humanity and the rest of the world one last time?\n\n[Written by MAL Rewrite]",
    "genre": [
      "Award Winning",
      "Drama",
      "Sci-Fi",
      "Suspense"
    ],
    "rating": 8.6,
    "year": 2021,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "35 min"
      }
    ],
    "totalEpisodes": 1,
    "image": "https://cdn.myanimelist.net/images/anime/1422/113533.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1422/113533l.jpg",
    "type": "both",
    "studio": "Khara",
    "duration": "35 min"
  },
  {
    "id": "jojos-bizarre-adventure-golden-wind",
    "title": "JoJo's Bizarre Adventure: Golden Wind",
    "titleJapanese": "ジョジョの奇妙な冒険 黄金の風",
    "synopsis": "In the coastal city of Naples, corruption is teeming—the police blatantly conspire with outlaws, drugs run rampant around the youth, and the mafia governs the streets with an iron fist. However, various fateful encounters will soon occur.\n\nEnter Giorno Giovanna, a 15-year-old boy with an eccentric connection to the Joestar family, who makes a living out of part-time jobs and pickpocketing. Furthermore, he is gifted with the unexplained Stand ability to give and create life—growing plants from the ground and turning inanimate objects into live animals, an ability he has dubbed \"Gold Experience.\" Fascinated by the might of local gangsters, Giorno has dreamed of rising up in their ranks and becoming a \"Gang-Star,\" a feat made possible by his encounter with Bruno Bucciarati, a member of the Passione gang with his own sense of justice.\n\nJoJo no Kimyou na Bouken: Ougon no Kaze follows the endeavors of Giorno after joining Bruno's team while working under Passione, fending off other gangsters",
    "genre": [
      "Action",
      "Adventure"
    ],
    "rating": 8.6,
    "year": 2018,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 25,
        "number": 25,
        "title": "Episode 25",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 26,
        "number": 26,
        "title": "Episode 26",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 27,
        "number": 27,
        "title": "Episode 27",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 28,
        "number": 28,
        "title": "Episode 28",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 29,
        "number": 29,
        "title": "Episode 29",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 30,
        "number": 30,
        "title": "Episode 30",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 31,
        "number": 31,
        "title": "Episode 31",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 32,
        "number": 32,
        "title": "Episode 32",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 33,
        "number": 33,
        "title": "Episode 33",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 34,
        "number": 34,
        "title": "Episode 34",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 35,
        "number": 35,
        "title": "Episode 35",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 36,
        "number": 36,
        "title": "Episode 36",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 37,
        "number": 37,
        "title": "Episode 37",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 38,
        "number": 38,
        "title": "Episode 38",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 39,
        "number": 39,
        "title": "Episode 39",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 39,
    "image": "https://cdn.myanimelist.net/images/anime/1882/94989.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1882/94989l.jpg",
    "type": "both",
    "studio": "David Production",
    "duration": "23 min"
  },
  {
    "id": "mushi-shi-the-next-chapter-drops-of-bells",
    "title": "Mushi-Shi: The Next Chapter - Drops of Bells",
    "titleJapanese": "蟲師 続章: 鈴の雫",
    "synopsis": "On a warm summer day, a boy heard the sound of bells ringing, as if in celebration, in the mountain near his home. Several years later in that same mountain, the mushishi Ginko encounters a strange girl with weeds growing out of her body. Soon after, Ginko coincidentally runs into the now grown-up boy Yoshiro on his way off the mountain. With Yoshiro's help, Ginko soon begins to uncover who this mysterious girl is and what happened to her.\n\nAn adaptation of the last arc in the manga, Mushishi Zoku Shou: Suzu no Shizuku follows Ginko's peculiar journey amidst the occult to unravel the mystery behind the enigmatic girl called Kaya and the mountain that has become her home.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Adventure",
      "Mystery",
      "Slice of Life",
      "Supernatural"
    ],
    "rating": 8.6,
    "year": 2015,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "47 min"
      }
    ],
    "totalEpisodes": 1,
    "image": "https://cdn.myanimelist.net/images/anime/9/72689.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/9/72689l.jpg",
    "type": "both",
    "studio": "Artland",
    "duration": "47 min"
  },
  {
    "id": "umamusume-cinderella-gray",
    "title": "Umamusume: Cinderella Gray",
    "titleJapanese": "ウマ娘 シンデレラグレイ",
    "synopsis": "Tokyo is the home of national-level horse girls and the next generation of running prodigies. Jou Kitahara, a rookie trainer with big dreams and modest expectations, does not expect to find talent in the quiet town of Kasamatsu—until he meets an ash-gray-haired girl with a wild, unconventional stride.\n\nAs a child with bad knees, Oguri Cap spent much of her early life in pain, struggling to stand. But through relentless perseverance, she overcame her limits and found liberation in the very thing that once seemed impossible: running. While the other horse girls at Kasamatsu chase victory and fame, Oguri runs without ambition, driven only by the joy of movement.\n\nFujimasa March, a rising regional star, commands attention with her discipline, talent, and tenacity. For her, running is a matter of pride. But when a school-organized race brings her face-to-face with Oguri's raw, unpolished stride, March's confidence begins to waver. In turn, something in Oguri shifts after racing March. For t",
    "genre": [
      "Drama",
      "Sports"
    ],
    "rating": 8.6,
    "year": 2025,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 13,
    "image": "https://cdn.myanimelist.net/images/anime/1626/148097.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1626/148097l.jpg",
    "type": "both",
    "studio": "CygamesPictures",
    "duration": "23 min"
  },
  {
    "id": "natsumes-book-of-friends-season-7",
    "title": "Natsume's Book of Friends Season 7",
    "titleJapanese": "夏目友人帳 漆",
    "synopsis": "As a young child, Takashi Natsume believed his ability to see youkai to be nothing but a curse. Now a high school student, Natsume has managed to heal from his old wounds and form unbreakable bonds with humans and youkai alike. Natsume's newfound friendships—including the one with his spirit bodyguard Madara, nicknamed \"Nyanko-sensei\"—are often interlaced with his duty to return the names of the spirits written inside the Book of Friends, his late grandmother Reiko's keepsake. While more remarkable youkai reach out to him, Natsume discovers that he still has much to learn about the world that surrounds him.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Slice of Life",
      "Supernatural"
    ],
    "rating": 8.6,
    "year": 2024,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 12,
    "image": "https://cdn.myanimelist.net/images/anime/1270/145168.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1270/145168l.jpg",
    "type": "both",
    "studio": "Shuka",
    "duration": "23 min"
  },
  {
    "id": "attack-on-titan",
    "title": "Attack on Titan",
    "titleJapanese": "進撃の巨人",
    "synopsis": "Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called Titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying is that their taste for human flesh is not born out of hunger but what appears to be out of pleasure. To ensure their survival, the remnants of humanity began living within defensive barriers, resulting in one hundred years without a single titan encounter. However, that fragile calm is soon shattered when a colossal Titan manages to breach the supposedly impregnable outer wall, reigniting the fight for survival against the man-eating abominations.\n\nAfter witnessing a horrific personal loss at the hands of the invading creatures, Eren Yeager dedicates his life to their eradication by enlisting into the Survey Corps, an elite military unit that combats the merciless humanoids outside the protection of the walls. Eren, his adopted sister Mikasa Ackerman, and his childhood friend A",
    "genre": [
      "Action",
      "Award Winning",
      "Drama",
      "Suspense"
    ],
    "rating": 8.6,
    "year": 2013,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 25,
        "number": 25,
        "title": "Episode 25",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 25,
    "image": "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/10/47347l.jpg",
    "type": "both",
    "studio": "Wit Studio",
    "duration": "24 min"
  },
  {
    "id": "nana",
    "title": "Nana",
    "titleJapanese": "NANA [ナナ]",
    "synopsis": "Departing from their respective hometowns, two young women with identical names are brought together in their pursuit of new beginnings. With their hearts set on going to Tokyo, Nana Komatsu dreams about blissful love, while Nana Osaki aims for a successful music career.\n\nThe former has a cheerful and friendly nature, but her naivety has steered her romantic life astray until she meets her dependable boyfriend—Shouji Endo. Without letting herself be dismayed by Shouji's decision to study in Tokyo, Nana works hard to earn enough money and follow him there. Meanwhile, her namesake is a solitary punk vocalist whose impassioned romance with her band's bassist, Ren Honjou, comes to a sudden end. Though heartbroken, Nana bravely looks forward and travels to the capital with the ambition of becoming a recognized artist.\n\nShortly after they arrive in Tokyo, the girls cross paths again due to an unexpected coincidence that ultimately leads them to live under the same roof. As they grow closer, ",
    "genre": [
      "Drama",
      "Romance"
    ],
    "rating": 8.6,
    "year": 2006,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 25,
        "number": 25,
        "title": "Episode 25",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 26,
        "number": 26,
        "title": "Episode 26",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 27,
        "number": 27,
        "title": "Episode 27",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 28,
        "number": 28,
        "title": "Episode 28",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 29,
        "number": 29,
        "title": "Episode 29",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 30,
        "number": 30,
        "title": "Episode 30",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 31,
        "number": 31,
        "title": "Episode 31",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 32,
        "number": 32,
        "title": "Episode 32",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 33,
        "number": 33,
        "title": "Episode 33",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 34,
        "number": 34,
        "title": "Episode 34",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 35,
        "number": 35,
        "title": "Episode 35",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 36,
        "number": 36,
        "title": "Episode 36",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 37,
        "number": 37,
        "title": "Episode 37",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 38,
        "number": 38,
        "title": "Episode 38",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 39,
        "number": 39,
        "title": "Episode 39",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 40,
        "number": 40,
        "title": "Episode 40",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 41,
        "number": 41,
        "title": "Episode 41",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 42,
        "number": 42,
        "title": "Episode 42",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 43,
        "number": 43,
        "title": "Episode 43",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 44,
        "number": 44,
        "title": "Episode 44",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 45,
        "number": 45,
        "title": "Episode 45",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 46,
        "number": 46,
        "title": "Episode 46",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 47,
        "number": 47,
        "title": "Episode 47",
        "thumbnail": "",
        "duration": "22 min"
      }
    ],
    "totalEpisodes": 47,
    "image": "https://cdn.myanimelist.net/images/anime/2/11232.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/2/11232l.jpg",
    "type": "both",
    "studio": "Madhouse",
    "duration": "22 min"
  },
  {
    "id": "neon-genesis-evangelion-the-end-of-evangelion",
    "title": "Neon Genesis Evangelion: The End of Evangelion",
    "titleJapanese": "新世紀エヴァンゲリオン劇場版 Air / まごころを, 君に",
    "synopsis": "Shinji Ikari is left emotionally comatose after the death of a dear friend. With his son mentally unable to pilot the humanoid robot Evangelion Unit-01, Gendou Ikari's NERV races against the shadow organization SEELE to see who can enact their ultimate plan first. SEELE desires to create a godlike being by fusing their own souls into an Evangelion unit, while Gendou wishes to revert all of humanity into one primordial being so that he can be reunited with Yui, his deceased wife.\n\nSEELE unleashes its military forces in a lethal invasion of NERV headquarters. As SEELE's forces cut down NERV's scientists and security personnel, Asuka Langley Souryuu pilots Evangelion Unit-02 in a desperate last stand against SEELE's heaviest weaponry.\n\nThe battle rages on, and a depressed Shinji hides deep within NERV's headquarters. With the fate of the world resting in Shinji's hands, Captain Misato Katsuragi hunts for the teenage boy as society crumbles around them.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Avant Garde",
      "Drama",
      "Sci-Fi",
      "Suspense"
    ],
    "rating": 8.6,
    "year": 1997,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "26 min"
      }
    ],
    "totalEpisodes": 1,
    "image": "https://cdn.myanimelist.net/images/anime/1404/98182.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1404/98182l.jpg",
    "type": "both",
    "studio": "Gainax",
    "duration": "26 min"
  },
  {
    "id": "nippon-sangoku-the-three-nations-of-the-crimson-sun",
    "title": "Nippon Sangoku: The Three Nations of the Crimson Sun",
    "titleJapanese": "日本三國",
    "synopsis": "The pinnacle of modern civilization known as Japan is now long forgotten. Ravaged by civil war and technological collapse, Japan has regressed into a post-Meiji era society and is now divided into three imperial territories known as Yamato, Buo, and Seii.\n\nHowever, Aoteru Misumi, a 15-year-old literature enthusiast, dreams to bring back the culture and technology that once made the pride of his country. Although unwilling to turn his theoretical knowledge into concrete action at first, a tragic turn of events drives Aoteru to head to Osaka in hopes of enlisting in the army and eventually uniting the country under his own banner.\n\nOsaka—once one of the three jewels of Kansai—has become a crime-ridden city where Aoteru almost loses his life. Luckily, he encounters a fellow ambitious young man named Yoshitsune Asama who pursues the same dream. With Aoteru's strategic prowess and Yoshitsune's masterful swordsmanship, the two now embark on a journey to restore the former glory of Japan.\n\n[W",
    "genre": [
      "Drama"
    ],
    "rating": 8.6,
    "year": 2026,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 12,
    "image": "https://cdn.myanimelist.net/images/anime/1623/156387.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1623/156387l.jpg",
    "type": "both",
    "studio": "Studio Kafka",
    "duration": "24 min"
  },
  {
    "id": "natsumes-book-of-friends-season-5",
    "title": "Natsume's Book of Friends Season 5",
    "titleJapanese": "夏目友人帳 伍",
    "synopsis": "Blessed with eyes that are able to perceive the otherwise invisible youkai, Takashi Natsume hides his ability from his newfound family and friends to protect everyone's peaceful daily life. Nonetheless, Natsume never fails to show the same kindness to the benevolent youkai and happily returns their names by using the infamous Book of Friends he inherited from his late grandmother, Reiko.\n\nMeanwhile, the exorcist clan Matoba still wishes for Natsume to join their ranks due to his overwhelming gift. However, Natsume firmly rejects the clan's invitation since not all exorcists are as reasonable as his friend Shuuichi Natori, and many improperly and indiscriminately seal away every youkai in their way. Unsatisfied with Natsume's answer, Seiji Matoba blackmails Natsume into attending a grand gathering of powerful exorcist families. Natsume soon finds himself in the company of dangerous people and youkai alike. But even then, he continues to defy the exorcists' hard-handed methods and believ",
    "genre": [
      "Slice of Life",
      "Supernatural"
    ],
    "rating": 8.6,
    "year": 2016,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 11,
    "image": "https://cdn.myanimelist.net/images/anime/11/81755.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/11/81755l.jpg",
    "type": "both",
    "studio": "Shuka",
    "duration": "23 min"
  },
  {
    "id": "kizumonogatari-part-2-hot-blooded",
    "title": "Kizumonogatari Part 2: Hot-Blooded",
    "titleJapanese": "傷物語〈Ⅱ熱血篇〉",
    "synopsis": "No longer truly human, Koyomi Araragi decides to retrieve Kiss-shot Acerola-orion Heart-under-blade's severed body parts that were stolen by three powerful vampire hunters. Awaiting him are Dramaturgie, a vampire hunter who is a vampire himself; Episode, a half-vampire with the ability to transform into mist; and Guillotinecutter, a human priest who is the most dangerous of them all.\n\nUnbeknownst to Araragi, each minute he spends trying to retrieve Kiss-shot's limbs makes him less of a human and more of a vampire. Will he be able to keep his wish of becoming human once again by the end of his battles?\n\n[Written by MAL Rewrite]",
    "genre": [
      "Action",
      "Mystery",
      "Supernatural"
    ],
    "rating": 8.6,
    "year": 2016,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "8 min"
      }
    ],
    "totalEpisodes": 1,
    "image": "https://cdn.myanimelist.net/images/anime/1981/112812.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1981/112812l.jpg",
    "type": "both",
    "studio": "Shaft",
    "duration": "8 min"
  },
  {
    "id": "wolf-children",
    "title": "Wolf Children",
    "titleJapanese": "おおかみこどもの雨と雪",
    "synopsis": "Hana, a hard-working college student, falls in love with a mysterious man who attends one of her classes though he is not an actual student. As it turns out, he is not truly human either. On a full moon night, he transforms, revealing that he is the last werewolf alive. Despite this, Hana's love remains strong, and the two ultimately decide to start a family.\n\nHana gives birth to two healthy children—Ame, born during rainfall, and Yuki, born during snowfall—both possessing the ability to turn into wolves, a trait inherited from their father. All too soon, however, the sudden death of her lover devastates Hana's life, leaving her to raise a peculiar family completely on her own. The stress of raising her wild-natured children in a densely populated city, all while keeping their identity a secret, culminates in a decision to move to the countryside, where she hopes Ame and Yuki can live a life free from the judgments of society. Wolf Children is the heartwarming story about the challenge",
    "genre": [
      "Award Winning",
      "Slice of Life",
      "Supernatural"
    ],
    "rating": 8.6,
    "year": 2012,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "57 min"
      }
    ],
    "totalEpisodes": 1,
    "image": "https://cdn.myanimelist.net/images/anime/9/35721.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/9/35721l.jpg",
    "type": "both",
    "studio": "Studio Chizu",
    "duration": "57 min"
  },
  {
    "id": "steinsgate-0",
    "title": "Steins;Gate 0",
    "titleJapanese": "シュタインズ・ゲート ゼロ",
    "synopsis": "The eccentric, self-proclaimed mad scientist Rintarou Okabe has become a shell of his former self. Depressed and traumatized after failing to rescue his friend Makise Kurisu, he has decided to forsake his mad scientist alter ego and live as an ordinary college student. Surrounded by friends who know little of his time travel experiences, Okabe spends his days trying to forget the horrors of his adventures alone. \n\nWhile working as a receptionist at a college technology forum, Okabe meets the short, spunky Maho Hiyajo, who \nlater turns out to be the interpreter at the forum's presentation, conducted by Professor Alexis Leskinen. In front of a stunned crowd, Alexis and Maho unveil Amadeus—a revolutionary AI capable of storing a person's memories and creating a perfect simulation of that person complete with their personality and quirks. Meeting with Maho and Alexis after the presentation, Okabe learns that the two were Kurisu's colleagues in university, and that they have simulated her i",
    "genre": [
      "Drama",
      "Sci-Fi",
      "Suspense"
    ],
    "rating": 8.6,
    "year": 2018,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 23,
    "image": "https://cdn.myanimelist.net/images/anime/1375/93521.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1375/93521l.jpg",
    "type": "both",
    "studio": "White Fox",
    "duration": "23 min"
  },
  {
    "id": "natsumes-book-of-friends-season-3",
    "title": "Natsume's Book of Friends Season 3",
    "titleJapanese": "夏目友人帳 参",
    "synopsis": "Natsume Yuujinchou San follows Takashi Natsume, a boy who is able to see youkai. Natsume and his bodyguard Madara, nicknamed Nyanko-sensei, continue on their quest to release youkai from their contracts in the \"Book of Friends.\"\n\nNatsume comes to terms with his ability to see youkai and stops thinking of it as a curse. As he spends more time with his human and youkai friends, he realizes how much he values them both and decides he doesn't have to choose between the spirit and human worlds to be happy.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Slice of Life",
      "Supernatural"
    ],
    "rating": 8.6,
    "year": 2011,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 13,
    "image": "https://cdn.myanimelist.net/images/anime/8/82394.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/8/82394l.jpg",
    "type": "both",
    "studio": "Brain's Base",
    "duration": "24 min"
  },
  {
    "id": "perfect-blue",
    "title": "Perfect Blue",
    "titleJapanese": "パーフェクトブルー",
    "synopsis": "J-pop idol group CHAM! has spent the last two years entertaining its fans. Sadly, all good things must come to an end, and CHAM! must see one of its members, Mima Kirigoe, leave the group to pursue her acting career. While Mima's choice is met with a mixed response, she hopes her fans will continue to support her.\n\nHowever, Mima's life begins to change drastically after her departure from the group. Wanting to shed her pop-idol image, she takes on a role in a crime drama series, and her career as an actress gradually becomes more demanding and taxing for both Mima and her manager, Rumi Hidaka. To add to Mima's growing unease, an obsessed fan who is incapable of accepting that Mima has quit being an innocent idol, begins stalking her; a new anonymous website begins to impersonate her life with intricate detail; and CHAM! also appears to be doing better without her. One by one, each disturbing development drives Mima to become increasingly unhinged and unable to distinguish reality from ",
    "genre": [
      "Avant Garde",
      "Award Winning",
      "Drama",
      "Horror",
      "Suspense"
    ],
    "rating": 8.6,
    "year": 1998,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "21 min"
      }
    ],
    "totalEpisodes": 1,
    "image": "https://cdn.myanimelist.net/images/anime/1254/134212.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1254/134212l.jpg",
    "type": "both",
    "studio": "Madhouse",
    "duration": "21 min"
  },
  {
    "id": "slam-dunk",
    "title": "Slam Dunk",
    "titleJapanese": "スラムダンク",
    "synopsis": "Hanamichi Sakuragi, infamous for his temper, massive height, and fire-red hair, enrolls in Shohoku High, hoping to finally get a girlfriend and break his record of being rejected 50 consecutive times in middle school. His notoriety precedes him, however, leading to him being avoided by most students. Soon, after certain events, Hanamichi is left with two unwavering thoughts: \"I hate basketball,\" and \"I desperately need a girlfriend.\"\n\nOne day, a girl named Haruko Akagi approaches him without any knowledge of his troublemaking ways and asks him if he likes basketball. Hanamichi immediately falls head over heels in love with her, blurting out a fervent affirmative. She then leads him to the gymnasium, where she asks him if he can do a slam dunk. In an attempt to impress Haruko, he makes the leap, but overshoots, instead slamming his head straight into the blackboard. When Haruko informs the basketball team's captain of Hanamichi's near-inhuman physical capabilities, he slowly finds himse",
    "genre": [
      "Sports"
    ],
    "rating": 8.6,
    "year": 1993,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 25,
        "number": 25,
        "title": "Episode 25",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 26,
        "number": 26,
        "title": "Episode 26",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 27,
        "number": 27,
        "title": "Episode 27",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 28,
        "number": 28,
        "title": "Episode 28",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 29,
        "number": 29,
        "title": "Episode 29",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 30,
        "number": 30,
        "title": "Episode 30",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 31,
        "number": 31,
        "title": "Episode 31",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 32,
        "number": 32,
        "title": "Episode 32",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 33,
        "number": 33,
        "title": "Episode 33",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 34,
        "number": 34,
        "title": "Episode 34",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 35,
        "number": 35,
        "title": "Episode 35",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 36,
        "number": 36,
        "title": "Episode 36",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 37,
        "number": 37,
        "title": "Episode 37",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 38,
        "number": 38,
        "title": "Episode 38",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 39,
        "number": 39,
        "title": "Episode 39",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 40,
        "number": 40,
        "title": "Episode 40",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 41,
        "number": 41,
        "title": "Episode 41",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 42,
        "number": 42,
        "title": "Episode 42",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 43,
        "number": 43,
        "title": "Episode 43",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 44,
        "number": 44,
        "title": "Episode 44",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 45,
        "number": 45,
        "title": "Episode 45",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 46,
        "number": 46,
        "title": "Episode 46",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 47,
        "number": 47,
        "title": "Episode 47",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 48,
        "number": 48,
        "title": "Episode 48",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 49,
        "number": 49,
        "title": "Episode 49",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 50,
        "number": 50,
        "title": "Episode 50",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 50,
    "image": "https://cdn.myanimelist.net/images/anime/12/86890.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/12/86890l.jpg",
    "type": "both",
    "studio": "Toei Animation",
    "duration": "23 min"
  },
  {
    "id": "haikyu-to-the-top-2nd-cour",
    "title": "Haikyu!! To the Top 2nd-cour",
    "titleJapanese": "ハイキュー TO THE TOP 第2クール",
    "synopsis": "Once called a fallen powerhouse and known as \"Flightless Crows,\" Karasuno High School has finally taken flight at nationals. With a comprehensive performance against Tsubakihara Academy in their first match, the team is now facing its toughest opponent yet: the runners-up of the last Spring Tournament, Inarizaki High School. Furthermore, dealing with the formidable twin Miya brothers only makes things more difficult for Karasuno.\n\nAs soon as the match begins, Karasuno is overwhelmed by all the noise and jeers from the supporters of Inarizaki High but rekindles its strength thanks to its own loyal fans. Karasuno also gains some momentum by utilizing an attack centered on Shouyou Hinata, but the eccentric play of Atsumu and Osamu Miya delivers an unexpected blow that leaves their opponent astounded.\n\nThings are bound to get intense as the match progresses between these two teams. Will Karasuno be able to defeat Inarizaki High and overcome the hurdles that threaten its pursuit to the top?",
    "genre": [
      "Sports"
    ],
    "rating": 8.6,
    "year": 2020,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 12,
    "image": "https://cdn.myanimelist.net/images/anime/1453/106768.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1453/106768l.jpg",
    "type": "both",
    "studio": "Production I.G",
    "duration": "23 min"
  },
  {
    "id": "alien-stage",
    "title": "Alien Stage",
    "titleJapanese": "ALIEN STAGE (에일리언스테이지)",
    "synopsis": "Humans once lived like Earth was the center of the universe. Some people embraced religion and believed that God would deliver them from suffering. After humanity was enslaved by aliens, no one spoke of God any longer.\n\nNow the grim truth is that humans are mere property of aliens. Recently, entering pet humans into the entertainment industry has become popular, and the biggest, most thrilling spectacle is known as Alien Stage. In this reality singing competition, alien sponsors flaunt their investments, while human contestants must battle to survive. No matter the relationship between opponents—whether it is love, hate, or something more extreme—only one victor can emerge each round.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Drama",
      "Sci-Fi",
      "Suspense"
    ],
    "rating": 8.6,
    "year": 2022,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "3 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "3 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "3 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "3 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "3 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "3 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "3 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "3 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "3 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "3 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "3 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "3 min"
      }
    ],
    "totalEpisodes": 12,
    "image": "https://cdn.myanimelist.net/images/anime/1524/143502.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1524/143502l.jpg",
    "type": "both",
    "studio": "LICO",
    "duration": "3 min"
  },
  {
    "id": "i-want-to-eat-your-pancreas",
    "title": "I Want To Eat Your Pancreas",
    "titleJapanese": "君の膵臓をたべたい",
    "synopsis": "The aloof protagonist: a bookworm who is deeply detached from the world he resides in. He has no interest in others and is firmly convinced that nobody has any interest in him either. His story begins when he stumbles across a handwritten book, titled Living with Dying. He soon identifies it as a secret diary belonging to his popular, bubbly classmate Sakura Yamauchi. She then confides in him about the pancreatic disease she is suffering from and that her time left is finite. Only her family knows about her terminal illness; not even her best friends are aware. Despite this revelation, he shows zero sympathy for her plight, but caught in the waves of Sakura's persistent buoyancy, he eventually concedes to accompanying her for her remaining days.\n\nAs the pair of polar opposites interact, their connection strengthens, interweaving through their choices made with each passing day. Her apparent nonchalance and unpredictability disrupts the protagonist's impassive flow of life, gradually op",
    "genre": [
      "Drama",
      "Romance"
    ],
    "rating": 8.6,
    "year": 2018,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "48 min"
      }
    ],
    "totalEpisodes": 1,
    "image": "https://cdn.myanimelist.net/images/anime/1768/93291.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1768/93291l.jpg",
    "type": "both",
    "studio": "Studio VOLN",
    "duration": "48 min"
  },
  {
    "id": "fights-break-sphere-special-3-three-years-of-pledge",
    "title": "Fights Break Sphere Special 3: Three Years of Pledge",
    "titleJapanese": "斗破苍穹 三年之约",
    "synopsis": "Three years ago, Nalan Yanran, the young sect leader of the Yunlan Sect, rashly broke off her engagement. Feeling deeply humiliated, Xiao Yan made a three-year pact with Nalan Yanran. For this pact, Xiao Yan cultivated tirelessly, enduring trials from the Magical Beast Mountain Range to the Tagor Desert, from alchemy to the excruciating pain of absorbing a strange fire—all to prove the saying: \"Thirty years east of the river, thirty years west of the river; never underestimate a young man's potential.\" Now, the men of the Xiao family will rise to the challenge, never retreating. Xiao Yan's path of growth continues…\n\n(Source: Tencent, translated)",
    "genre": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "rating": 8.6,
    "year": 2021,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 13,
    "image": "https://cdn.myanimelist.net/images/anime/1029/118861.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1029/118861l.jpg",
    "type": "both",
    "studio": "Motion Magic",
    "duration": "24 min"
  },
  {
    "id": "the-tatami-galaxy",
    "title": "The Tatami Galaxy",
    "titleJapanese": "四畳半神話大系",
    "synopsis": "One autumn evening at a mysterious ramen stand behind the Shimogamo Shrine, a lonely third-year college student bumps into a man with an eggplant-shaped head who calls himself a god of matrimony. Meeting this man causes the student to reflect upon his past two years at college—two years bitterly spent trying to break up couples on campus with his only friend Ozu, a ghoulish-looking man seemingly set on making his life as miserable as possible. Resolving to make the most out of the rest of his college life, the student attempts to ask out the unsociable but kind-hearted underclassman Akashi, yet fails to follow through, prompting him to regret not living out his college life differently. As soon as this thought passes through his head, however, he is hurtled through time and space to the beginning of his years at college and given another chance to live his life.\n\nSurreal, artistic, and mind-bending, Yojouhan Shinwa Taikei chronicles the misadventures of a young man on a journey to make",
    "genre": [
      "Award Winning",
      "Comedy",
      "Mystery",
      "Romance",
      "Suspense"
    ],
    "rating": 8.6,
    "year": 2010,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "22 min"
      }
    ],
    "totalEpisodes": 11,
    "image": "https://cdn.myanimelist.net/images/anime/1633/123689.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1633/123689l.jpg",
    "type": "both",
    "studio": "Madhouse",
    "duration": "22 min"
  },
  {
    "id": "showa-genroku-rakugo-shinju",
    "title": "Showa Genroku Rakugo Shinju",
    "titleJapanese": "昭和元禄落語心中",
    "synopsis": "Yotarou is a former yakuza member fresh out of prison and fixated on just one thing: rather than return to a life of crime, the young man aspires to take to the stage of rakugo, a traditional Japanese form of comedic storytelling. Inspired during his incarceration by the performance of distinguished practitioner Yakumo Yuurakutei, he sets his mind on meeting the man who changed his life. After hearing Yotarou's desperate appeal for his mentorship, Yakumo is left with no choice but to accept his very first apprentice.\n\nAs he eagerly begins his training, Yotarou meets Konatsu, an abrasive young woman who has been under Yakumo's care ever since her beloved father Sukeroku Yuurakutei, another prolific rakugo performer, passed away. Through her hidden passion, Yotarou is drawn to Sukeroku's unique style of rakugo despite learning under contrasting techniques. Upon seeing this, old memories and feelings return to Yakumo who reminisces about a much earlier time when he made a promise with his",
    "genre": [
      "Drama"
    ],
    "rating": 8.5,
    "year": 2016,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "26 min"
      }
    ],
    "totalEpisodes": 13,
    "image": "https://cdn.myanimelist.net/images/anime/1354/124768.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1354/124768l.jpg",
    "type": "both",
    "studio": "Studio Deen",
    "duration": "26 min"
  },
  {
    "id": "attack-on-titan-season-2",
    "title": "Attack on Titan Season 2",
    "titleJapanese": "進撃の巨人 Season2",
    "synopsis": "For centuries, humanity has been hunted by giant, mysterious predators known as the Titans. Three mighty walls—Wall Maria, Rose, and Sheena—provided peace and protection for humanity for over a hundred years. That peace, however, was shattered when the Colossal Titan and Armored Titan appeared and destroyed the outermost wall, Wall Maria. Forced to retreat behind Wall Rose, humanity waited with bated breath for the Titans to reappear and destroy their safe haven once more.\n\nIn Shingeki no Kyojin Season 2, Eren Yeager and others of the 104th Training Corps have just begun to become full members of the Survey Corps. As they ready themselves to face the Titans once again, their preparations are interrupted by the invasion of Wall Rose—but all is not as it seems as more mysteries are unraveled. As the Survey Corps races to save the wall, they uncover more about the invading Titans and the dark secrets of their own members.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Action",
      "Drama",
      "Suspense"
    ],
    "rating": 8.5,
    "year": 2017,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 12,
    "image": "https://cdn.myanimelist.net/images/anime/4/84177.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/4/84177l.jpg",
    "type": "both",
    "studio": "Wit Studio",
    "duration": "24 min"
  },
  {
    "id": "grave-of-the-fireflies",
    "title": "Grave of the Fireflies",
    "titleJapanese": "火垂るの墓",
    "synopsis": "As World War II reaches its conclusion in 1945, Japan faces widespread destruction in the form of American bombings, devastating city after city. Hotaru no Haka, also known as Grave of the Fireflies, is the story of Seita and his sister Setsuko, two Japanese children whose lives are ravaged by the brutal war. They have lost their mother, their father, their home, and the prospect of a bright future—all tragic consequences of the war.\n\nNow orphaned and homeless, Seita and Setsuko have no choice but to drift across the countryside, beset by starvation and disease. Met with the apathy of adults along the way, they find that desperate circumstances can turn even the kindest of people cruel yet their youthful hope shines brightly in the face of unrelenting hardship, preventing the siblings from swiftly succumbing to an inevitable fate.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Drama"
    ],
    "rating": 8.5,
    "year": 1988,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "28 min"
      }
    ],
    "totalEpisodes": 1,
    "image": "https://cdn.myanimelist.net/images/anime/1485/141208.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1485/141208l.jpg",
    "type": "both",
    "studio": "Studio Ghibli",
    "duration": "28 min"
  },
  {
    "id": "a-record-of-mortals-journey-to-immortality-4th-season",
    "title": "A Record Of Mortal's Journey To Immortality 4th Season",
    "titleJapanese": "凡人修仙传 第四季",
    "synopsis": "Fourth season of Fanren Xiu Xian Zhuan.",
    "genre": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "rating": 8.5,
    "year": 2025,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "20 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "20 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "20 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "20 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "20 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "20 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "20 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "20 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "20 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "20 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "20 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "20 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "20 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "20 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "20 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "20 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "20 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "20 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "20 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "20 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "20 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "20 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "20 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "20 min"
      },
      {
        "id": 25,
        "number": 25,
        "title": "Episode 25",
        "thumbnail": "",
        "duration": "20 min"
      },
      {
        "id": 26,
        "number": 26,
        "title": "Episode 26",
        "thumbnail": "",
        "duration": "20 min"
      },
      {
        "id": 27,
        "number": 27,
        "title": "Episode 27",
        "thumbnail": "",
        "duration": "20 min"
      },
      {
        "id": 28,
        "number": 28,
        "title": "Episode 28",
        "thumbnail": "",
        "duration": "20 min"
      },
      {
        "id": 29,
        "number": 29,
        "title": "Episode 29",
        "thumbnail": "",
        "duration": "20 min"
      },
      {
        "id": 30,
        "number": 30,
        "title": "Episode 30",
        "thumbnail": "",
        "duration": "20 min"
      },
      {
        "id": 31,
        "number": 31,
        "title": "Episode 31",
        "thumbnail": "",
        "duration": "20 min"
      },
      {
        "id": 32,
        "number": 32,
        "title": "Episode 32",
        "thumbnail": "",
        "duration": "20 min"
      },
      {
        "id": 33,
        "number": 33,
        "title": "Episode 33",
        "thumbnail": "",
        "duration": "20 min"
      },
      {
        "id": 34,
        "number": 34,
        "title": "Episode 34",
        "thumbnail": "",
        "duration": "20 min"
      },
      {
        "id": 35,
        "number": 35,
        "title": "Episode 35",
        "thumbnail": "",
        "duration": "20 min"
      },
      {
        "id": 36,
        "number": 36,
        "title": "Episode 36",
        "thumbnail": "",
        "duration": "20 min"
      },
      {
        "id": 37,
        "number": 37,
        "title": "Episode 37",
        "thumbnail": "",
        "duration": "20 min"
      },
      {
        "id": 38,
        "number": 38,
        "title": "Episode 38",
        "thumbnail": "",
        "duration": "20 min"
      },
      {
        "id": 39,
        "number": 39,
        "title": "Episode 39",
        "thumbnail": "",
        "duration": "20 min"
      },
      {
        "id": 40,
        "number": 40,
        "title": "Episode 40",
        "thumbnail": "",
        "duration": "20 min"
      },
      {
        "id": 41,
        "number": 41,
        "title": "Episode 41",
        "thumbnail": "",
        "duration": "20 min"
      },
      {
        "id": 42,
        "number": 42,
        "title": "Episode 42",
        "thumbnail": "",
        "duration": "20 min"
      },
      {
        "id": 43,
        "number": 43,
        "title": "Episode 43",
        "thumbnail": "",
        "duration": "20 min"
      },
      {
        "id": 44,
        "number": 44,
        "title": "Episode 44",
        "thumbnail": "",
        "duration": "20 min"
      },
      {
        "id": 45,
        "number": 45,
        "title": "Episode 45",
        "thumbnail": "",
        "duration": "20 min"
      },
      {
        "id": 46,
        "number": 46,
        "title": "Episode 46",
        "thumbnail": "",
        "duration": "20 min"
      },
      {
        "id": 47,
        "number": 47,
        "title": "Episode 47",
        "thumbnail": "",
        "duration": "20 min"
      },
      {
        "id": 48,
        "number": 48,
        "title": "Episode 48",
        "thumbnail": "",
        "duration": "20 min"
      },
      {
        "id": 49,
        "number": 49,
        "title": "Episode 49",
        "thumbnail": "",
        "duration": "20 min"
      },
      {
        "id": 50,
        "number": 50,
        "title": "Episode 50",
        "thumbnail": "",
        "duration": "20 min"
      }
    ],
    "totalEpisodes": 50,
    "image": "https://cdn.myanimelist.net/images/anime/1421/153427.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1421/153427l.jpg",
    "type": "both",
    "studio": "Original Force",
    "duration": "20 min"
  },
  {
    "id": "oshi-no-ko",
    "title": "[Oshi No Ko]",
    "titleJapanese": "【推しの子】",
    "synopsis": "In the entertainment world, celebrities often show exaggerated versions of themselves to the public, concealing their true thoughts and struggles beneath elaborate lies. Fans buy into these fabrications, showering their idols with undying love and support, until something breaks the illusion. Sixteen-year-old rising star Ai Hoshino of pop idol group B Komachi has the world captivated; however, when she announces a hiatus due to health concerns, the news causes many to become worried.\n\nAs a huge fan of Ai, gynecologist Gorou Amemiya cheers her on from his countryside medical practice, wishing he could meet her in person one day. His wish comes true when Ai shows up at his hospital—not sick, but pregnant with twins! While the doctor promises Ai to safely deliver her children, he wonders if this encounter with the idol will forever change the nature of his relationship with her.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Award Winning",
      "Drama"
    ],
    "rating": 8.5,
    "year": 2023,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "30 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "30 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "30 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "30 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "30 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "30 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "30 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "30 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "30 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "30 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "30 min"
      }
    ],
    "totalEpisodes": 11,
    "image": "https://cdn.myanimelist.net/images/anime/1812/134736.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1812/134736l.jpg",
    "type": "both",
    "studio": "Doga Kobo",
    "duration": "30 min"
  },
  {
    "id": "witch-hat-atelier",
    "title": "Witch Hat Atelier",
    "titleJapanese": "とんがり帽子のアトリエ",
    "synopsis": "In a world where witches wield breathtaking magic, Coco, coming from a humble background, often wishes she were born one herself. After all, the secret behind casting magic is strictly guarded from non-witches. But when Coco manages to catch a glimpse of the witch Qifrey casting a spell, her revelation on the truth behind magic drastically alters the course of her life.\n\nHowever, Coco's curiosity pays a steep price when a disastrous spell cast in ignorance brings a tragic fate upon her beloved mother. Qifrey takes the shaken girl in, recognizing both her resolve to save her mother and her link to a group of forbidden magic heretics. Secrets are a heavy burden, and between navigating a society that views her as an uninvited guest and mastering the art of magic, Coco must give her all to prove her worth as a witch.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Fantasy"
    ],
    "rating": 8.5,
    "year": 2026,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 13,
    "image": "https://cdn.myanimelist.net/images/anime/1726/155542.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1726/155542l.jpg",
    "type": "both",
    "studio": "BUG FILMS",
    "duration": "23 min"
  },
  {
    "id": "mushi-shi-the-shadow-that-devours-the-sun",
    "title": "Mushi-shi: The Shadow that Devours the Sun",
    "titleJapanese": "蟲師 特別篇「日蝕む翳」",
    "synopsis": "The entire countryside comes to a halt midday to witness a rare solar eclipse that is rumored to allow the average person to see Mushi. Unable to avert their gaze, the air is full of awe and wonder—but those who know the Mushi are preparing for the eclipse's aftermath.\n\nBased on a prediction from Tanyuu Karibusa, the cursed recorder, Mushishi Ginko finds himself in a very unlucky farming village. Immediately following the solar eclipse, a strange black cloud begins to gather in the sky and blocks the sun once more. Suspecting it to be the work of a Mushi known as Hihami, Ginko seeks to liberate the village from perpetual darkness. However, it seems that not all of the villagers are eager to return to the light.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Adventure",
      "Mystery",
      "Slice of Life",
      "Supernatural"
    ],
    "rating": 8.5,
    "year": 2014,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "44 min"
      }
    ],
    "totalEpisodes": 1,
    "image": "https://cdn.myanimelist.net/images/anime/1559/147521.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1559/147521l.jpg",
    "type": "both",
    "studio": "Artland",
    "duration": "44 min"
  },
  {
    "id": "natsumes-book-of-friends-season-2",
    "title": "Natsume's Book of Friends Season 2",
    "titleJapanese": "続 夏目友人帳",
    "synopsis": "As with its prequel, Zoku Natsume Yuujinchou is about Takashi Natsume, a boy who has had the ability to see youkai since he was young, and his bodyguard youkai Madara, nicknamed Nyanko-sensei. Natsume attempts to return names written in his \"Book of Friends\" (which he inherited from his grandmother Reiko) to youkai in his village. Throughout these adventures, he meets some youkai that are friendly, some that want to steal the Book, and some that want to kill him, as Natsume learns about himself and his relationship with these mysterious beings along the way.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Slice of Life",
      "Supernatural"
    ],
    "rating": 8.5,
    "year": 2009,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 13,
    "image": "https://cdn.myanimelist.net/images/anime/4/79738.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/4/79738l.jpg",
    "type": "both",
    "studio": "Brain's Base",
    "duration": "24 min"
  },
  {
    "id": "fatezero-season-2",
    "title": "Fate/Zero Season 2",
    "titleJapanese": "フェイト/ゼロ 2ndシーズン",
    "synopsis": "As the Fourth Holy Grail War rages on with no clear victor in sight, the remaining Servants and their Masters are called upon by Church supervisor Risei Kotomine, in order to band together and confront an impending threat that could unravel the Grail War and bring about the destruction of Fuyuki City. The uneasy truce soon collapses as Masters demonstrate that they will do anything in their power, no matter how despicable, to win.\n\nSeeds of doubt are sown between Kiritsugu Emiya and Saber, his Servant, as their conflicting ideologies on heroism and chivalry clash. Meanwhile, an ominous bond forms between Kirei Kotomine, who still seeks to find his purpose in life, and one of the remaining Servants. As the countdown to the end of the war reaches zero, the cost of winning begins to blur the line between victory and defeat.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Action",
      "Fantasy"
    ],
    "rating": 8.5,
    "year": 2012,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 12,
    "image": "https://cdn.myanimelist.net/images/anime/1522/117645.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1522/117645l.jpg",
    "type": "both",
    "studio": "ufotable",
    "duration": "24 min"
  },
  {
    "id": "demon-slayer-kimetsu-no-yaiba-the-movie-mugen-train",
    "title": "Demon Slayer: Kimetsu no Yaiba - The Movie: Mugen Train",
    "titleJapanese": "劇場版 鬼滅の刃 無限列車編",
    "synopsis": "After a string of mysterious disappearances begin to plague a train, the Demon Slayer Corps' multiple attempts to remedy the problem prove fruitless. To prevent further casualties, the Flame Pillar, Kyoujurou Rengoku, takes it upon himself to eliminate the threat. Accompanying him are some of the Corps' most promising new blood: Tanjirou Kamado, Zenitsu Agatsuma, and Inosuke Hashibira, who all hope to witness the fiery feats of this model demon slayer firsthand.\n\nUnbeknownst to them, the demonic forces responsible for the disappearances have already put their sinister plan in motion. Under this demonic presence, the group must muster every ounce of their willpower and draw their swords to save all two hundred passengers onboard. As things begin to spiral out of control, Tanjirou's resolve and commitment to duty are put to the test.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Action",
      "Supernatural"
    ],
    "rating": 8.5,
    "year": 2020,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "56 min"
      }
    ],
    "totalEpisodes": 1,
    "image": "https://cdn.myanimelist.net/images/anime/1704/106947.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1704/106947l.jpg",
    "type": "both",
    "studio": "ufotable",
    "duration": "56 min"
  },
  {
    "id": "kaguya-sama-love-is-war-stairway-to-adulthood",
    "title": "Kaguya-sama: Love Is War - Stairway to Adulthood",
    "titleJapanese": "かぐや様は告らせたい 大人への階段",
    "synopsis": "Years after graduating from high school, Kaguya Shinomiya finds her old photo album and reminisces about when she was a part of Shuuchiin Academy's student council. At the time, Kaguya had just started dating the president Miyuki Shirogane, and the two were hopelessly in love. With each wholesome and silly memory from their past, Kaguya is filled with bliss.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Comedy",
      "Romance"
    ],
    "rating": 8.5,
    "year": 2025,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "52 min"
      }
    ],
    "totalEpisodes": 1,
    "image": "https://cdn.myanimelist.net/images/anime/1112/150697.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1112/150697l.jpg",
    "type": "both",
    "studio": "A-1 Pictures",
    "duration": "52 min"
  },
  {
    "id": "solo-leveling-season-2-arise-from-the-shadow",
    "title": "Solo Leveling Season 2: Arise from the Shadow",
    "titleJapanese": "俺だけレベルアップな件 Season 2 -Arise from the Shadow-",
    "synopsis": "Sung Jin-Woo, dubbed the weakest hunter of all mankind, grows stronger by the day with the supernatural powers he has gained. However, keeping his skills hidden becomes more difficult as dungeon-related incidents pile up around him.\n\nWhen Jin-Woo and a few other low-ranked hunters are the only survivors of a dungeon that turns out to be a bigger challenge than initially expected, he draws attention once again, and hunter guilds take an increased interest in him. Meanwhile, a strange hunter who has been lost for ten years returns with a dire warning about an upcoming catastrophic event. As the calamity looms closer, Jin-Woo must continue leveling up to make sure nothing stops him from reaching his ultimate goal—saving the life of his mother.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "rating": 8.5,
    "year": 2025,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 13,
    "image": "https://cdn.myanimelist.net/images/anime/1448/147351.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1448/147351l.jpg",
    "type": "both",
    "studio": "A-1 Pictures",
    "duration": "23 min"
  },
  {
    "id": "gintama-the-movie",
    "title": "Gintama: The Movie",
    "titleJapanese": "劇場版 銀魂 新訳紅桜篇",
    "synopsis": "Gintoki and his Yorozuya friends (or rather, employees suffering under labor violations), Shinpachi and Kagura, continue to scrape by in the futuristic, alien-infested city of Edo. They take on whatever work they can find while trying not to get involved in anything too dangerous. But when Katsura, the leader of the Joui rebels and Gintoki's long-time acquaintance, disappears after being brutally attacked by an unknown assassin, Shinpachi and Kagura begin an investigation into his whereabouts and the identity of the assailant. Meanwhile, Gintoki takes on a seemingly unrelated job: the blacksmith Tetsuya requests that Gin recover a strange and powerful sword called the Benizakura which was recently stolen.\n\nAs the two investigations gradually intersect, the Yorozuya crew find themselves in the midst of a major conspiracy that hinges on the sinister nature of the Benizakura sword. Gintoki resolves to take the fight directly to the enemy headquarters, and together with a few unexpected al",
    "genre": [
      "Action",
      "Comedy",
      "Sci-Fi"
    ],
    "rating": 8.5,
    "year": 2010,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "35 min"
      }
    ],
    "totalEpisodes": 1,
    "image": "https://cdn.myanimelist.net/images/anime/4/28803.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/4/28803l.jpg",
    "type": "both",
    "studio": "Sunrise",
    "duration": "35 min"
  },
  {
    "id": "revue-starlight-the-movie",
    "title": "Revue Starlight: The Movie",
    "titleJapanese": "劇場版 少女☆歌劇 レヴュースタァライト",
    "synopsis": "With the arrival of a new generation of talented girls, another lively year at Seishou Music Academy begins. The graduating 99th class is already preparing for the much-anticipated rendition of Starlight, a bittersweet story about the parting of two girls.\n\nIt seems like all students in the Actor Training Department have their post-graduation future figured out—except for the cheerful Karen Aijou. Having fulfilled her promise of performing in a play with Hikari Kagura, her ambitious childhood friend, Karen struggles to find her purpose. What lies beyond their promise is a mystery to Karen, as Hikari was the fuel that kept her passion for performing aflame. Now alone, Karen must confront the reality of stage girls and find her way toward the future—her very own stage.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Drama"
    ],
    "rating": 8.5,
    "year": 2021,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 1,
    "image": "https://cdn.myanimelist.net/images/anime/1378/119190.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1378/119190l.jpg",
    "type": "both",
    "studio": "Kinema Citrus",
    "duration": "24 min"
  },
  {
    "id": "fruits-basket-2nd-season",
    "title": "Fruits Basket 2nd Season",
    "titleJapanese": "フルーツバスケット 2nd season",
    "synopsis": "A year has passed since Tooru Honda began living in the Souma residence, and she has since created stronger relationships with its inhabitants Shigure, Kyou, and Yuki. She has also grown closer to the rest of the Souma family and has become familiar with their ancestral secret, having helped them with many of their personal issues. The closer Tooru gets, however, the more she begins to realize that their secret holds a darker truth than she first presumed.\n\nSummer is approaching and Tooru is invited to spend her days with the Soumas, mainly Kyou and Yuki. Tooru wishes for an easy-going vacation, but her close relationships with the two boys and the rest of the Soumas may prove to cause trouble. As they grow more intimate, their carefree time together is hindered by older hardships and feelings from the past that begin to resurface. The Eternal Banquet also dawns on the members of the zodiac, and they must tend to their duties alongside the unnerving head of the family, Akito Souma.\n\nWi",
    "genre": [
      "Drama",
      "Romance",
      "Supernatural"
    ],
    "rating": 8.5,
    "year": 2020,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 25,
        "number": 25,
        "title": "Episode 25",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 25,
    "image": "https://cdn.myanimelist.net/images/anime/1972/111635.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1972/111635l.jpg",
    "type": "both",
    "studio": "TMS Entertainment",
    "duration": "23 min"
  },
  {
    "id": "bakuman-season-3",
    "title": "Bakuman. Season 3",
    "titleJapanese": "バクマン。",
    "synopsis": "Onto their third serialization, manga duo Moritaka Mashiro and Akito Takagi—also known by their pen name, Muto Ashirogi—are ever closer to their dream of an anime adaption. However, the real challenge is only just beginning: if they are unable to compete with the artist Eiji Niizuma in the rankings within the span of six months, they will be canceled. To top it off, numerous rivals are close behind and declaring war. They don't even have enough time to spare thinking about an anime!\n\nIn Bakuman. 3rd Season, Muto Ashirogi must find a way to stay atop the colossal mountain known as the Shounen Jack rankings. With new problems and new assistants, the pair continue to strive for their dream.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "rating": 8.5,
    "year": 2012,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 25,
        "number": 25,
        "title": "Episode 25",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 25,
    "image": "https://cdn.myanimelist.net/images/anime/6/41845.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/6/41845l.jpg",
    "type": "both",
    "studio": "J.C.Staff",
    "duration": "24 min"
  },
  {
    "id": "samurai-champloo",
    "title": "Samurai Champloo",
    "titleJapanese": "サムライチャンプルー",
    "synopsis": "Fuu Kasumi is a young and clumsy waitress who spends her days peacefully working in a small teahouse. That is, until she accidentally spills a drink all over one of her customers! With a group of samurai now incessantly harassing her, Fuu desperately calls upon another samurai in the shop, Mugen, who quickly defeats them with his wild fighting technique, utilizing movements reminiscent to that of breakdancing. Unfortunately, Mugen decides to pick a fight with the unwilling ronin Jin, who wields a more precise and traditional style of swordfighting, and the latter proves to be a formidable opponent. The only problem is, they end up destroying the entire shop as well as accidentally killing the local magistrate's son.\n\nFor their crime, the two samurai are captured and set to be executed. However, they are rescued by Fuu, who hires the duo as her bodyguards. Though she no longer has a place to return to, the former waitress wishes to find a certain samurai who smells of sunflowers and enl",
    "genre": [
      "Action",
      "Adventure",
      "Comedy"
    ],
    "rating": 8.5,
    "year": 2004,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 25,
        "number": 25,
        "title": "Episode 25",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 26,
        "number": 26,
        "title": "Episode 26",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 26,
    "image": "https://cdn.myanimelist.net/images/anime/1370/135212.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1370/135212l.jpg",
    "type": "both",
    "studio": "Manglobe",
    "duration": "24 min"
  },
  {
    "id": "dr-stone-science-future-part-2",
    "title": "Dr. Stone: Science Future Part 2",
    "titleJapanese": "Dr.STONE SCIENCE FUTURE 第2クール",
    "synopsis": "After a strategic maneuver, Senkuu Ishigami's team stalls Dr. Xeno's more scientifically advanced forces. A ceasefire between the two factions allows for the establishment of Corn City in North America, a hope for a future thriving population. Meanwhile, Senkuu and some of his teammates rush toward the Amazon in South America—the epicenter of the petrification beam's impact—to create Superalloy City and progress their spaceship project.\n\nWith dangerous enemies still pursuing Senkuu and his companions, it is a race against time to reach the heart of the dense Amazon. As unexpected allies and scientific creations further fuel this leg of their journey, Senkuu is closer than ever to finally uncovering the mystery behind the petrification phenomenon.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Adventure",
      "Comedy"
    ],
    "rating": 8.5,
    "year": 2025,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 12,
    "image": "https://cdn.myanimelist.net/images/anime/1785/151710.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1785/151710l.jpg",
    "type": "both",
    "studio": "TMS Entertainment",
    "duration": "24 min"
  },
  {
    "id": "oshi-no-ko-season-2",
    "title": "[Oshi No Ko] Season 2",
    "titleJapanese": "【推しの子】第2期",
    "synopsis": "With the help of producer Masaya Kaburagi, Aquamarine \"Aqua\" Hoshino and Kana Arima have landed the roles of Touki and Tsurugi in Lala Lai Theatrical Company's stage adaptation of the popular manga series Tokyo Blade. Co-starring with them is Aqua's girlfriend, Akane Kurokawa, who plays Touki's fiancée, Princess Saya. Due to the fanbase preferring Tsurugi as Touki's love interest, Saya has made fewer and fewer appearances in the manga, making it difficult for Akane to fully immerse herself in the role. Her struggles are compounded by differences between the play's script and the original work—differences that also frustrate Tokyo Blade's author, Abiko Samejima.\n\nAqua, however, is more concerned with his personal goals than he is with the play. He has only one objective in mind: to grow closer to director Toshirou Kindaichi and find out what he knows about Aqua's mother, Ai.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Drama"
    ],
    "rating": 8.5,
    "year": 2024,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "25 min"
      }
    ],
    "totalEpisodes": 13,
    "image": "https://cdn.myanimelist.net/images/anime/1006/143302.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1006/143302l.jpg",
    "type": "both",
    "studio": "Doga Kobo",
    "duration": "25 min"
  },
  {
    "id": "puella-magi-madoka-magica-the-movie-rebellion",
    "title": "Puella Magi Madoka Magica the Movie: Rebellion",
    "titleJapanese": "劇場版 魔法少女まどか☆マギカ 叛逆の物語",
    "synopsis": "The young girls of Mitakihara happily live their lives, occasionally fighting off evil, but otherwise going about their peaceful, everyday routines. However, Homura Akemi feels that something is wrong with this unusually pleasant atmosphere—though the others remain oblivious, she can't help but suspect that there is more to what is going on than meets the eye: someone who should not exist is currently present to join in on their activities.\n\nMahou Shoujo Madoka★Magica Movie 3: Hangyaku no Monogatari follows Homura in her struggle to uncover the painful truth behind the mysterious circumstances, as she selfishly and desperately fights for the sake of her undying love in this despair-ridden conclusion to the story of five magical girls.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Award Winning",
      "Drama",
      "Suspense"
    ],
    "rating": 8.5,
    "year": 2013,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "56 min"
      }
    ],
    "totalEpisodes": 1,
    "image": "https://cdn.myanimelist.net/images/anime/5/54231.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/5/54231l.jpg",
    "type": "both",
    "studio": "Shaft",
    "duration": "56 min"
  },
  {
    "id": "jojos-bizarre-adventure-diamond-is-unbreakable",
    "title": "JoJo's Bizarre Adventure: Diamond Is Unbreakable",
    "titleJapanese": "ジョジョの奇妙な冒険 ダイヤモンドは砕けない",
    "synopsis": "The year is 1999. Morioh, a normally quiet and peaceful town, has recently become a hotbed of strange activity. Joutarou Kuujou, now a marine biologist, heads to the mysterious town to meet Jousuke Higashikata. While the two may seem like strangers at first, Jousuke is actually the illegitimate child of Joutarou's grandfather, Joseph Joestar. When they meet, Joutarou realizes that he may have more in common with Jousuke than just a blood relation.\n\nAlong with the mild-mannered Kouichi Hirose and the boisterous Okuyasu Nijimura, the group dedicates themselves to investigating recent disappearances and other suspicious occurrences within Morioh. Aided by the power of Stands, the four men will encounter danger at every street corner, as it is up to them to unravel the town's secrets, before another occurs.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Action",
      "Adventure"
    ],
    "rating": 8.5,
    "year": 2016,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 25,
        "number": 25,
        "title": "Episode 25",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 26,
        "number": 26,
        "title": "Episode 26",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 27,
        "number": 27,
        "title": "Episode 27",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 28,
        "number": 28,
        "title": "Episode 28",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 29,
        "number": 29,
        "title": "Episode 29",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 30,
        "number": 30,
        "title": "Episode 30",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 31,
        "number": 31,
        "title": "Episode 31",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 32,
        "number": 32,
        "title": "Episode 32",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 33,
        "number": 33,
        "title": "Episode 33",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 34,
        "number": 34,
        "title": "Episode 34",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 35,
        "number": 35,
        "title": "Episode 35",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 36,
        "number": 36,
        "title": "Episode 36",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 37,
        "number": 37,
        "title": "Episode 37",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 38,
        "number": 38,
        "title": "Episode 38",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 39,
        "number": 39,
        "title": "Episode 39",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 39,
    "image": "https://cdn.myanimelist.net/images/anime/3/79156.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/3/79156l.jpg",
    "type": "both",
    "studio": "David Production",
    "duration": "23 min"
  },
  {
    "id": "gintama-slip-arc",
    "title": "Gintama. Slip Arc",
    "titleJapanese": "銀魂。ポロリ編",
    "synopsis": "Following the grim events of Iga, Kokujou Island, Rakuyou, and multiple fruitless confrontations with the Tenshouin Naraku and Tendoshuu, Gintama. Porori-hen takes its viewers on a trip down memory lane to when Yorozuya were mostly doing what they did best—odd jobs. The great space hunter Umibouzu has returned to Edo and is livid when he finds out that his daughter Kagura has a boyfriend. He blames Gintoki for being an incompetent guardian, but has the time finally come for him to let go of his daughter?\n\nBack with shameless parodies, risqué humor, and lively camaraderie, Gintoki, Kagura, and Shinpachi are faced with unforeseen situations that manage to be both hilarious and emotionally stirring.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Action",
      "Comedy",
      "Sci-Fi"
    ],
    "rating": 8.5,
    "year": 2017,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 13,
    "image": "https://cdn.myanimelist.net/images/anime/11/88325.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/11/88325l.jpg",
    "type": "both",
    "studio": "Bandai Namco Pictures",
    "duration": "23 min"
  },
  {
    "id": "ghost-in-the-shell-stand-alone-complex-2nd-gig",
    "title": "Ghost in the Shell: Stand Alone Complex 2nd GIG",
    "titleJapanese": "攻殻機動隊 S.A.C. 2nd GIG",
    "synopsis": "Following the closure of the \"Laughing Man\" case, Section 9 is re-established by Japan's newly elected Prime Minister, Youko Kayabuki, to combat the persistent threat of cyber-terrorism.\n\nA group calling themselves \"The Individual Eleven\" has begun committing acts of terror across Japan. While Motoko Kusanagi, Daisuke Aramaki, Batou, and the other members of Section 9 investigate this new menace, the Japanese government faces a separate crisis, as foreign refugees displaced by the Third World War seek asylum in Japan. But as the members of the special-ops team continually encounter Gouda Kazundo—a leading member of the Cabinet Intelligence Service—in their hunt, they begin to suspect that he may be involved, and that the events of the refugee crisis and The Individual Eleven may be more connected than they realize...\n\n[Written by MAL Rewrite]",
    "genre": [
      "Mystery",
      "Sci-Fi"
    ],
    "rating": 8.5,
    "year": 2004,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 25,
        "number": 25,
        "title": "Episode 25",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 26,
        "number": 26,
        "title": "Episode 26",
        "thumbnail": "",
        "duration": "25 min"
      }
    ],
    "totalEpisodes": 26,
    "image": "https://cdn.myanimelist.net/images/anime/1646/135390.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1646/135390l.jpg",
    "type": "both",
    "studio": "Production I.G",
    "duration": "25 min"
  },
  {
    "id": "heaven-officials-blessing-short-films",
    "title": "Heaven Official's Blessing Short Films",
    "titleJapanese": "天官賜福 全新动画短片",
    "synopsis": "A series of short films.\n\nShort film #1: Xie Lian and Hua Cheng's first encounter.\n\nShort film #2: Xie Lian and Hua Cheng enjoy the Lantern Festival at the Ghost Market.\n\nShort film #3: Xie Lian and Hua Cheng are underwater then they return to Ghost City.\n\nShort film #4: A surprise discovery in a mountain cave.",
    "genre": [
      "Action",
      "Adventure",
      "Drama",
      "Fantasy"
    ],
    "rating": 8.5,
    "year": 2025,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "8 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "8 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "8 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "8 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "8 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "8 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "8 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "8 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "8 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "8 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "8 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "8 min"
      }
    ],
    "totalEpisodes": 12,
    "image": "https://cdn.myanimelist.net/images/anime/1174/149943.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1174/149943l.jpg",
    "type": "both",
    "studio": "Red Dog Culture House",
    "duration": "8 min"
  },
  {
    "id": "grand-blue-dreaming-season-2",
    "title": "Grand Blue Dreaming Season 2",
    "titleJapanese": "ぐらんぶる Season 2",
    "synopsis": "Three months have passed since Iori Kitahara began living above Grand Blue, his uncle's scuba diving shop, and joined his university's Diving Club. Alongside the other members, he has spent his days drinking and recklessly having fun. However, when Iori's sister, Shiori, hears about his behavior, she decides to take matters into her own hands—and bring him back home to make him take over their family's inn.\n\nDespite her best efforts, Shiori temporarily gives up as she sees how Iori has grown attached to Grand Blue and his friends. As Iori and the rest of the Diving Club continue to party like there is no tomorrow, they end up in all kinds of bizarrely amusing situations, still somehow managing to hone their scuba diving skills!\n\n[Written by MAL Rewrite]",
    "genre": [
      "Comedy"
    ],
    "rating": 8.5,
    "year": 2025,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 12,
    "image": "https://cdn.myanimelist.net/images/anime/1108/150583.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1108/150583l.jpg",
    "type": "both",
    "studio": "Zero-G",
    "duration": "24 min"
  },
  {
    "id": "given-the-movie-to-the-sea",
    "title": "given The Movie: To the Sea",
    "titleJapanese": "映画 ギヴン 海へ",
    "synopsis": "Second part of Given Movie: Hiiragi Mix.",
    "genre": [
      "Boys Love",
      "Drama"
    ],
    "rating": 8.5,
    "year": 2024,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "20 min"
      }
    ],
    "totalEpisodes": 1,
    "image": "https://cdn.myanimelist.net/images/anime/1663/144261.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1663/144261l.jpg",
    "type": "both",
    "studio": "Lerche",
    "duration": "20 min"
  },
  {
    "id": "renegade-immortal",
    "title": "Renegade Immortal",
    "titleJapanese": "仙逆",
    "synopsis": "Wang Lin is a very smart boy with loving parents. Although he and his parents are shunned by the rest of their relatives, his parents have always held high hopes that he will one day achieve greatness. One day, Wang Lin suddenly gained the chance to walk the path of an immortal but found that he only had mediocre talent at best. Watch Wang Lin as he breaks through his lack of talent and walks the path towards becoming a real immortal!\n\n(Source: Xian Ni Wiki)",
    "genre": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "rating": 8.5,
    "year": 2023,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 25,
        "number": 25,
        "title": "Episode 25",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 26,
        "number": 26,
        "title": "Episode 26",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 27,
        "number": 27,
        "title": "Episode 27",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 28,
        "number": 28,
        "title": "Episode 28",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 29,
        "number": 29,
        "title": "Episode 29",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 30,
        "number": 30,
        "title": "Episode 30",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 31,
        "number": 31,
        "title": "Episode 31",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 32,
        "number": 32,
        "title": "Episode 32",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 33,
        "number": 33,
        "title": "Episode 33",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 34,
        "number": 34,
        "title": "Episode 34",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 35,
        "number": 35,
        "title": "Episode 35",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 36,
        "number": 36,
        "title": "Episode 36",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 37,
        "number": 37,
        "title": "Episode 37",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 38,
        "number": 38,
        "title": "Episode 38",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 39,
        "number": 39,
        "title": "Episode 39",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 40,
        "number": 40,
        "title": "Episode 40",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 41,
        "number": 41,
        "title": "Episode 41",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 42,
        "number": 42,
        "title": "Episode 42",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 43,
        "number": 43,
        "title": "Episode 43",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 44,
        "number": 44,
        "title": "Episode 44",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 45,
        "number": 45,
        "title": "Episode 45",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 46,
        "number": 46,
        "title": "Episode 46",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 47,
        "number": 47,
        "title": "Episode 47",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 48,
        "number": 48,
        "title": "Episode 48",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 49,
        "number": 49,
        "title": "Episode 49",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 50,
        "number": 50,
        "title": "Episode 50",
        "thumbnail": "",
        "duration": "25 min"
      }
    ],
    "totalEpisodes": 50,
    "image": "https://cdn.myanimelist.net/images/anime/1289/149708.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1289/149708l.jpg",
    "type": "both",
    "studio": "BUILD DREAM",
    "duration": "25 min"
  },
  {
    "id": "jojos-bizarre-adventure-stone-ocean-part-3",
    "title": "JoJo's Bizarre Adventure: Stone Ocean Part 3",
    "titleJapanese": "ジョジョの奇妙な冒険 ストーンオーシャン",
    "synopsis": "After finally escaping the confines of Green Dolphin Street Jail, Jolyne Kuujou—alongside her companions Ermes Costello and Emporio Alniño—pursues the villainous priest Enrico Pucci across the state of Florida. Jolyne's allies, Weather Report and Narciso Anasui, struggle to catch up with her in order to help bring an end to Pucci's plot. As both parties pursue the priest, they must battle against Pucci's band of enemy Stand users.\n\nWhile Jolyne's comrades fight for their lives, Pucci races to the Kennedy Space Center. There he hopes to enact his ultimate goal, one he believes God has entrusted to him. He aims to fulfill the will of the Joestars' blood enemy Dio Brando and—by robbing humanity of free will and making them slaves to fate—to create a world where all humans are blissfully happy.\n\nUnable to rely on the aid of her comatose father Joutarou, Jolyne must weaponize all she has learned in prison to confront Pucci in a climactic battle while the world itself hangs in the balance.\n\n",
    "genre": [
      "Action",
      "Adventure"
    ],
    "rating": 8.5,
    "year": 2022,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 14,
    "image": "https://cdn.myanimelist.net/images/anime/1233/128920.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1233/128920l.jpg",
    "type": "both",
    "studio": "David Production",
    "duration": "24 min"
  },
  {
    "id": "laid-back-camp-season-2",
    "title": "Laid-Back Camp Season 2",
    "titleJapanese": "ゆるキャン△ SEASON2",
    "synopsis": "Having spent Christmas camping with her new friends, Rin Shima embarks on a solo-camping trip to see the New Year sunrise by the sea. All goes according to plan until unforeseen weather blocks the roads back home, making a return trip impossible. Rin, who is now stranded for a few days, is invited by Nadeshiko Kagamihara to stay at her grandmother's house. \n\nWhat is supposed to be a two-day trip becomes an extended period of sightseeing and new experiences for Rin, and she encounters some new and old faces along the way. Yuru Camp△ Season 2 continues the story of Rin, Nadeshiko, and their friends as they further explore the joys of camping.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Slice of Life"
    ],
    "rating": 8.5,
    "year": 2021,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 13,
    "image": "https://cdn.myanimelist.net/images/anime/1255/110636.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1255/110636l.jpg",
    "type": "both",
    "studio": "C-Station",
    "duration": "23 min"
  },
  {
    "id": "a-place-further-than-the-universe",
    "title": "A Place Further Than The Universe",
    "titleJapanese": "宇宙よりも遠い場所",
    "synopsis": "Filled with an overwhelming sense of wonder for the world around her, Mari Tamaki has always dreamt of what lies beyond the reaches of the universe. However, despite harboring such large aspirations on the inside, her fear of the unknown and anxiety over her own possible limitations have always held her back from chasing them. But now, in her second year of high school, Mari is more determined than ever to not let any more of her youth go to waste. Still, her fear continues to prevent her from taking that ambitious step forward—that is, until she has a chance encounter with a girl who has grand dreams of her own.\n\nSpurred by her mother's disappearance, Shirase Kobuchizawa has been working hard to fund her trip to Antarctica. Despite facing doubt and ridicule from virtually everyone, Shirase is determined to embark on this expedition to search for her mother in a place further than the universe itself. Inspired by Shirase's resolve, Mari jumps at the chance to join her. Soon, their effo",
    "genre": [
      "Adventure",
      "Comedy",
      "Drama"
    ],
    "rating": 8.5,
    "year": 2018,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 13,
    "image": "https://cdn.myanimelist.net/images/anime/6/89879.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/6/89879l.jpg",
    "type": "both",
    "studio": "Madhouse",
    "duration": "23 min"
  },
  {
    "id": "the-garden-of-sinners-chapter-5-paradox-spiral",
    "title": "The Garden of Sinners Chapter 5: Paradox Spiral",
    "titleJapanese": "劇場版 空の境界 the Garden of sinners 第五章『矛盾螺旋』",
    "synopsis": "In November 1998, a double homicide occurs at the newly constructed Ogawa apartment complex in the heart of Mifune City. The murderer, Tomoe Enjou, has fled in a panic. To his astonishment, he is not pursued by the police and news of the incident has not been reported through media outlets. After Shiki Ryougi defends Tomoe from a group of thugs, she allows him to use her residence as a hideout. However, a few days later, Tomoe is shaken to discover that his mother is alive, even though he is convinced that he killed her.\n \nCoincidentally, Mikiya Kokutou is investigating a tip that his associate Touko Aozaki receives regarding the murder at the unique apartment complex. As he uncovers more information about the incident, Mikiya takes a particular interest in Tomoe. Deciding to investigate him further, Mikiya soon discovers the disturbing truth of the foreboding Ogawa complex.\n\nThe fifth installment of the Kara no Kyoukai film series, Mujun Rasen combines an intricately constructed myste",
    "genre": [
      "Action",
      "Drama",
      "Fantasy",
      "Mystery",
      "Romance",
      "Suspense"
    ],
    "rating": 8.5,
    "year": 2008,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "54 min"
      }
    ],
    "totalEpisodes": 1,
    "image": "https://cdn.myanimelist.net/images/anime/4/75851.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/4/75851l.jpg",
    "type": "both",
    "studio": "ufotable",
    "duration": "54 min"
  },
  {
    "id": "jujutsu-kaisen",
    "title": "Jujutsu Kaisen",
    "titleJapanese": "呪術廻戦",
    "synopsis": "Idly indulging in baseless paranormal activities with the Occult Club, high schooler Yuuji Itadori spends his days at either the clubroom or the hospital, where he visits his bedridden grandfather. However, this leisurely lifestyle soon takes a turn for the strange when he unknowingly encounters a cursed item. Triggering a chain of supernatural occurrences, Yuuji finds himself suddenly thrust into the world of Curses—dreadful beings formed from human malice and negativity—after swallowing the said item, revealed to be a finger belonging to the demon Sukuna Ryoumen, the King of Curses.\n\nYuuji experiences first-hand the threat these Curses pose to society as he discovers his own newfound powers. Introduced to the Tokyo Prefectural Jujutsu High School, he begins to walk down a path from which he cannot return—the path of a Jujutsu sorcerer.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Action",
      "Award Winning",
      "Supernatural"
    ],
    "rating": 8.5,
    "year": 2020,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 24,
    "image": "https://cdn.myanimelist.net/images/anime/1171/109222.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1171/109222l.jpg",
    "type": "both",
    "studio": "MAPPA",
    "duration": "23 min"
  },
  {
    "id": "the-fragrant-flower-blooms-with-dignity",
    "title": "The Fragrant Flower Blooms with Dignity",
    "titleJapanese": "薫る花は凛と咲く",
    "synopsis": "The all-girls Kikyo Private Academy and Chidori Public High School are polar opposites. With its prestigious history, Kikyo is attended by noble young ladies from distinguished families, while Chidori is infamously full of simple-minded delinquents. It is no surprise that their students clash with their differences.\n\nHaving a tall stature and fierce appearance, Chidori student Rintarou Tsumugi is often avoided by others despite his gentle heart. One day, while helping out at his family's patisserie, he meets a customer who, after a brief moment, runs away from him. The next day, the customer returns to apologize to Rintarou, introducing herself as the cheerful Kaoruko Waguri.\n\nAfter spending time with Kaoruko, Rintarou appreciates that she does not judge him based on his appearance and looks forward to when they will meet again. However, when Rintarou discovers Kaoruko attends Kikyo, their relationship will challenge the social expectations and dynamics around them.\n\n[Written by MAL Re",
    "genre": [
      "Drama",
      "Romance"
    ],
    "rating": 8.5,
    "year": 2025,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 13,
    "image": "https://cdn.myanimelist.net/images/anime/1744/150433.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1744/150433l.jpg",
    "type": "both",
    "studio": "CloverWorks",
    "duration": "24 min"
  },
  {
    "id": "mob-psycho-100",
    "title": "Mob Psycho 100",
    "titleJapanese": "モブサイコ100",
    "synopsis": "Eighth-grader Shigeo \"Mob\" Kageyama has tapped into his inner wellspring of psychic prowess at a young age. But the power quickly proves to be a liability when he realizes the potential danger in his skills. Choosing to suppress his power, Mob's only present use for his ability is to impress his longtime crush, Tsubomi, who soon grows bored of the same tricks.\n\nIn order to effectuate control on his skills, Mob enlists himself under the wing of Arataka Reigen, a con artist claiming to be a psychic, who exploits Mob's powers for pocket change. Now, exorcising evil spirits on command has become a part of Mob's daily, monotonous life. However, the psychic energy he exerts is barely the tip of the iceberg; if his vast potential and unrestrained emotions run berserk, a cataclysmic event that would render him completely unrecognizable will be triggered. The progression toward Mob's explosion is rising and attempting to stop it is futile.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Action",
      "Comedy",
      "Supernatural"
    ],
    "rating": 8.5,
    "year": 2016,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 12,
    "image": "https://cdn.myanimelist.net/images/anime/8/80356.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/8/80356l.jpg",
    "type": "both",
    "studio": "Bones",
    "duration": "24 min"
  },
  {
    "id": "space-brothers",
    "title": "Space Brothers",
    "titleJapanese": "宇宙兄弟",
    "synopsis": "On a fateful summer night in 2006, Mutta Nanba and his younger brother Hibito witness what they believe to be a UFO flying toward the Moon. This impressing and unusual phenomenon leads both siblings vowing to become astronauts, with Hibito aiming for the Moon and Mutta, convinced that the eldest brother has to be one step ahead, for Mars.\n\nNow an adult, life hasn't turned out how Mutta had pictured it: he is diligently working in an automotive company, whereas Hibito is on his way to be the very first Japanese man to step on the Moon. However, after losing his job, Mutta is presented with an unexpected opportunity to catch up to his younger brother when the Japanese Aerospace Exploration Agency, commonly known as JAXA, accepts his application to participate in the next astronaut selection. Despite self-doubts about his prospects, Mutta is unwilling to waste this chance of a lifetime, and thus embarks on an ambitious journey to fulfill the promise made 19 years ago.\n\n[Written by MAL Rew",
    "genre": [
      "Comedy"
    ],
    "rating": 8.5,
    "year": 2012,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 25,
        "number": 25,
        "title": "Episode 25",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 26,
        "number": 26,
        "title": "Episode 26",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 27,
        "number": 27,
        "title": "Episode 27",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 28,
        "number": 28,
        "title": "Episode 28",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 29,
        "number": 29,
        "title": "Episode 29",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 30,
        "number": 30,
        "title": "Episode 30",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 31,
        "number": 31,
        "title": "Episode 31",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 32,
        "number": 32,
        "title": "Episode 32",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 33,
        "number": 33,
        "title": "Episode 33",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 34,
        "number": 34,
        "title": "Episode 34",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 35,
        "number": 35,
        "title": "Episode 35",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 36,
        "number": 36,
        "title": "Episode 36",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 37,
        "number": 37,
        "title": "Episode 37",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 38,
        "number": 38,
        "title": "Episode 38",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 39,
        "number": 39,
        "title": "Episode 39",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 40,
        "number": 40,
        "title": "Episode 40",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 41,
        "number": 41,
        "title": "Episode 41",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 42,
        "number": 42,
        "title": "Episode 42",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 43,
        "number": 43,
        "title": "Episode 43",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 44,
        "number": 44,
        "title": "Episode 44",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 45,
        "number": 45,
        "title": "Episode 45",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 46,
        "number": 46,
        "title": "Episode 46",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 47,
        "number": 47,
        "title": "Episode 47",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 48,
        "number": 48,
        "title": "Episode 48",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 49,
        "number": 49,
        "title": "Episode 49",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 50,
        "number": 50,
        "title": "Episode 50",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 50,
    "image": "https://cdn.myanimelist.net/images/anime/1290/135694.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1290/135694l.jpg",
    "type": "both",
    "studio": "A-1 Pictures",
    "duration": "24 min"
  },
  {
    "id": "aria-the-origination",
    "title": "Aria the Origination",
    "titleJapanese": "ARIA The ORIGINATION",
    "synopsis": "In the 24th century on the planet Aqua, three girls—Akari Mizunashi, Alice Carroll, and Aika S. Granzchesta—continue to work hard toward achieving their goal of becoming Prima Undines: professional tour guide gondoliers. Luckily, the girls have the guidance of the three best Prima Undines in Neo-Venezia—Alicia Florence, Athena Glory, and Akira E. Ferrari—who are known as the \"Water Fairies\" in honor of their skill. With their help, the young apprentices train hard and work to overcome any situations that they find themselves in.\n\nAs these three young girls experience both the joys and hardships of life, they do their best to improve as tour gondoliers in Neo-Venezia, a terraformed replica of Venice.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Sci-Fi",
      "Slice of Life"
    ],
    "rating": 8.5,
    "year": 2008,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 13,
    "image": "https://cdn.myanimelist.net/images/anime/1431/132867.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1431/132867l.jpg",
    "type": "both",
    "studio": "HAL Film Maker",
    "duration": "24 min"
  },
  {
    "id": "ranking-of-kings",
    "title": "Ranking of Kings",
    "titleJapanese": "王様ランキング",
    "synopsis": "The people of the kingdom look down on the young Prince Bojji, who can neither hear nor speak. They call him \"The Useless Prince\" while jeering at his supposed foolishness.\n\nHowever, while Bojji may not be physically strong, he is certainly not weak of heart. When a chance encounter with a shadow creature should have left him traumatized, it instead makes him believe that he has found a friend amidst those who only choose to notice his shortcomings. He starts meeting with Kage, the shadow, regularly, to the point where even the otherwise abrasive creature begins to warm up to him.\n\nKage and Bojji's unlikely friendship lays the budding foundations of the prince's journey, one where he intends to conquer his fears and insecurities. Despite the constant ridicule he faces, Bojji resolves to fulfill his desire of becoming the best king he can be.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Adventure",
      "Fantasy"
    ],
    "rating": 8.5,
    "year": 2021,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "22 min"
      }
    ],
    "totalEpisodes": 23,
    "image": "https://cdn.myanimelist.net/images/anime/1347/117616.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1347/117616l.jpg",
    "type": "both",
    "studio": "Wit Studio",
    "duration": "22 min"
  },
  {
    "id": "smoking-behind-the-supermarket-with-you",
    "title": "Smoking Behind the Supermarket with You",
    "titleJapanese": "スーパーの裏でヤニ吸うふたり",
    "synopsis": "The sole thing that gets the middle-aged Sasaki through his soul-sucking job is a cheerful smile from Yamada—the young woman who works at a nearby 24-hour supermarket he frequents. After every tiring day of getting berated by his boss, Sasaki stops by the store to have his spirit healed by his favorite cashier.\n\nAfter a particularly grueling day, Sasaki shows up at the supermarket, only to find that Yamada's shift has already ended. Disappointed, he searches for a place to smoke when a woman from behind the store calls him over to join her. The bold and dangerously playful Tayama is quick to call out Sasaki's peculiar habit of always seeking out her coworker—even going as far as telling Yamada about Sasaki's vested interest in her.\n\nNow, in addition to seeing his adored cashier Yamada, Sasaki also visits the store to see if his new smoking partner Tayama is around. But there is more to Tayama's mischievousness than she initially lets on. With every cigarette, an unlikely friendship beg",
    "genre": [
      "Romance"
    ],
    "rating": 8.4,
    "year": 2026,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 12,
    "image": "https://cdn.myanimelist.net/images/anime/1768/156339.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1768/156339l.jpg",
    "type": "both",
    "studio": "Asahi Production",
    "duration": "23 min"
  },
  {
    "id": "dorohedoro-season-2",
    "title": "Dorohedoro Season 2",
    "titleJapanese": "ドロヘドロ Season2",
    "synopsis": "Second season of Dorohedoro.",
    "genre": [
      "Action",
      "Comedy",
      "Fantasy",
      "Horror"
    ],
    "rating": 8.5,
    "year": 2026,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "26 min"
      }
    ],
    "totalEpisodes": 11,
    "image": "https://cdn.myanimelist.net/images/anime/1603/155354.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1603/155354l.jpg",
    "type": "both",
    "studio": "MAPPA",
    "duration": "26 min"
  },
  {
    "id": "the-promised-neverland",
    "title": "The Promised Neverland",
    "titleJapanese": "約束のネバーランド",
    "synopsis": "Surrounded by a forest and a gated entrance, the Grace Field House is inhabited by orphans happily living together as one big family, looked after by their \"Mama,\" Isabella. Although they are required to take tests daily, the children are free to spend their time as they see fit, usually playing outside, as long as they do not venture too far from the orphanage—a rule they are expected to follow no matter what. However, all good times must come to an end, as every few months, a child is adopted and sent to live with their new family, never to be heard from again.\n\nHowever, the three oldest siblings have their suspicions about what is actually happening at the orphanage, and they are about to discover the cruel fate that awaits the children living at Grace Field, including the twisted nature of their beloved Mama.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Mystery",
      "Suspense"
    ],
    "rating": 8.5,
    "year": 2019,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "22 min"
      }
    ],
    "totalEpisodes": 12,
    "image": "https://cdn.myanimelist.net/images/anime/1830/118780.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1830/118780l.jpg",
    "type": "both",
    "studio": "CloverWorks",
    "duration": "22 min"
  },
  {
    "id": "assassination-classroom-second-season",
    "title": "Assassination Classroom Second Season",
    "titleJapanese": "暗殺教室　第２期",
    "synopsis": "Returning from their summer vacation, the students of Class 3-E at the prestigious Kunugigaoka Middle School find themselves up against unbeatable odds. Faced with the possibility of world annihilation, the students must come up with increasingly elaborate and creative ways to kill their teacher, the cunning yet optimistic and helpful Koro-sensei.\n \nHowever, eliminating Koro-sensei is not the only objective the students need to worry about. Gakuhou Asano, the academy's merciless and cruel principal, seeks to prevent Class 3-E's success by brainwashing his other hard-working pupils into ruthlessly competitive studying machines. Hostility begins to linger in the air as traitors and killers alike attempt to claim the bounty on Koro-sensei's head for themselves.\n \nNagisa Shiota, one of Class 3-E's most skilled assassins, finds himself in the middle of the conflict. While he works to maintain his academic standing and prevent the end of the world, domestic affairs jeopardize his place in Cl",
    "genre": [
      "Action",
      "Comedy"
    ],
    "rating": 8.5,
    "year": 2016,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 25,
        "number": 25,
        "title": "Episode 25",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 25,
    "image": "https://cdn.myanimelist.net/images/anime/8/77966.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/8/77966l.jpg",
    "type": "both",
    "studio": "Lerche",
    "duration": "23 min"
  },
  {
    "id": "one-punch-man",
    "title": "One-Punch Man",
    "titleJapanese": "ワンパンマン",
    "synopsis": "The seemingly unimpressive Saitama has a rather unique hobby: being a hero. In order to pursue his childhood dream, Saitama relentlessly trained for three years, losing all of his hair in the process. Now, Saitama is so powerful, he can defeat any enemy with just one punch. However, having no one capable of matching his strength has led Saitama to an unexpected problem—he is no longer able to enjoy the thrill of battling and has become quite bored.\n\nOne day, Saitama catches the attention of 19-year-old cyborg Genos, who witnesses his power and wishes to become Saitama's disciple. Genos proposes that the two join the Hero Association in order to become certified heroes that will be recognized for their positive contributions to society. Saitama, who is shocked that no one knows who he is, quickly agrees. Meeting new allies and taking on new foes, Saitama embarks on a new journey as a member of the Hero Association to experience the excitement of battle he once felt.\n\n[Written by MAL Rew",
    "genre": [
      "Action",
      "Comedy"
    ],
    "rating": 8.5,
    "year": 2015,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 12,
    "image": "https://cdn.myanimelist.net/images/anime/12/76049.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/12/76049l.jpg",
    "type": "both",
    "studio": "Madhouse",
    "duration": "24 min"
  },
  {
    "id": "heaven-officials-blessing-special",
    "title": "Heaven Official's Blessing Special",
    "titleJapanese": "天官赐福 特别篇",
    "synopsis": "Xie Lian and Hua Cheng recount their recent adventures during a quiet night at Puqi Shrine. Amidst the serenity, the Crimson Rain Sought Flower reveals a little more about Xie Lian's true character, and an embarrassing memory reminds him of how much he has changed since his previous ascensions. However, no matter how much time has passed, Xie Lian never fails to believe in the good he sees in the people around him. Though the heavens may ridicule him, his words and actions have earned him the most devout of followers.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Action",
      "Adventure",
      "Drama",
      "Fantasy"
    ],
    "rating": 8.5,
    "year": 2021,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "21 min"
      }
    ],
    "totalEpisodes": 1,
    "image": "https://cdn.myanimelist.net/images/anime/1043/110306.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1043/110306l.jpg",
    "type": "both",
    "studio": "Haoliners Animation",
    "duration": "21 min"
  },
  {
    "id": "nichijou-my-ordinary-life",
    "title": "Nichijou - My Ordinary Life",
    "titleJapanese": "日常",
    "synopsis": "Nichijou primarily focuses on the daily antics of a trio of childhood friends—high school girls Mio Naganohara, Yuuko Aioi and Mai Minakami—whose stories soon intertwine with the young genius Hakase Shinonome, her robot caretaker Nano, and their talking cat Sakamoto. With every passing day, the lives of these six, as well as of the many people around them, experience both the calms of normal life and the insanity of the absurd. Walking to school, being bitten by a talking crow, spending time with friends, and watching the principal suplex a deer: they are all in a day's work in the extraordinary everyday lives of those in Nichijou. \n\n[Written by MAL Rewrite]",
    "genre": [
      "Comedy"
    ],
    "rating": 8.5,
    "year": 2011,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 25,
        "number": 25,
        "title": "Episode 25",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 26,
        "number": 26,
        "title": "Episode 26",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 26,
    "image": "https://cdn.myanimelist.net/images/anime/3/75617.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/3/75617l.jpg",
    "type": "both",
    "studio": "Kyoto Animation",
    "duration": "23 min"
  },
  {
    "id": "love-through-a-prism",
    "title": "Love Through a Prism",
    "titleJapanese": "プリズム輪舞曲〈ロンド〉",
    "synopsis": "In early-1900s London, Lili Ichijouin, a Japanese exchange student travels to England to enroll in the prestigious Saint Thomas Art Academy. Determined to become a painter, she arrives under pressure: her parents expect her to rise to the top of her class within six months or return home.\n\nLili's drive intensifies when she encounters Kit Church, a gifted aristocratic student known for his talent and detachment. While Kit has devoted himself entirely to painting, Lili's sincerity and resilience begin to shift something in him. The two share little beyond their love for art, yet their relationship quickly becomes central to life at the academy.\n\n(Source: Netflix, edited)",
    "genre": [
      "Drama",
      "Romance"
    ],
    "rating": 8.5,
    "year": 2026,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "26 min"
      }
    ],
    "totalEpisodes": 20,
    "image": "https://cdn.myanimelist.net/images/anime/1862/153881.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1862/153881l.jpg",
    "type": "both",
    "studio": "Wit Studio",
    "duration": "26 min"
  },
  {
    "id": "cosmic-princess-kaguya",
    "title": "Cosmic Princess Kaguya!",
    "titleJapanese": "超かぐや姫！",
    "synopsis": "Tsukuyomi is a virtual realm where hopes and dreams come together. Iroha Sakayori, a 17-year-old high school student in Tokyo, leads an extremely busy life trying to balance part-time work and academics. She finds peace by watching a popular streamer named Yachiyo Runami, who is the administrator of an online virtual space called Tsukuyomi.\n\nIroha frequents Tsukuyomi, where people can live different lives and freely pursue their creativity, and she passes the time by supporting Yachiyo and playing battle games to earn a little extra money. On her way home one day, Iroha finds a telephone pole shining with iridescent hues. To her surprise, an adorable baby emerges from the pole. Unable to abandon it, Iroha takes the infant home and watches her rapidly grow into a girl her own age.\n\n\"Are you Princess Kaguya?\"\n\nThe grown-up Kaguya develops a self-indulgent personality. At Kaguya's fervent request, Iroha helps her start streaming in Tsukuyomi. With Iroha as producer and songwriter and Kagu",
    "genre": [
      "Action",
      "Sci-Fi",
      "Supernatural"
    ],
    "rating": 8.5,
    "year": 2026,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "20 min"
      }
    ],
    "totalEpisodes": 1,
    "image": "https://cdn.myanimelist.net/images/anime/1758/153953.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1758/153953l.jpg",
    "type": "both",
    "studio": "Studio Colorido",
    "duration": "20 min"
  },
  {
    "id": "ne-zha-2",
    "title": "Ne Zha 2",
    "titleJapanese": "哪吒之魔童闹海",
    "synopsis": "After the heavenly lightning, although Ne Zha and Ao Bing survived by becoming Spirits, they would soon dissipate completely. Taiyi plans to rebuild Ne Zha and Ao Bing's mortal bodies with the Seven-colored Precious Lotus. However, during the process of reconstruction, numerous obstacles arise. What will become of the fate of Ne Zha and Ao Bing? \n\n(Source: AMC)",
    "genre": [
      "Action",
      "Comedy",
      "Drama",
      "Fantasy"
    ],
    "rating": 8.5,
    "year": 2025,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 1,
    "image": "https://cdn.myanimelist.net/images/anime/1616/147002.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1616/147002l.jpg",
    "type": "both",
    "studio": "October Media",
    "duration": "23 min"
  },
  {
    "id": "the-master-of-diabolism-2",
    "title": "The Master of Diabolism 2",
    "titleJapanese": "魔道祖师 羡云篇",
    "synopsis": "Continuing his masquerade as the deranged lunatic from the Lanling Jin Clan, Wei Wuxian resides in the Cloud Recesses while his former cultivation classmate, Lan Wangji, searches for answers about the demonic severed arm they have in custody. With an overwhelming dark energy emanating from the arm, the two are forced to work together in order to keep it contained. However, the demonic arm is not the only dark force lurking in the region, and as spiritual tensions rise in the mountains of the Gusu Lan Clan, it is up to the two of them to try and restore the natural order.\n\nThe story of Wei Wuxian's fall from grace continues as more light is shed on his descent into the path of demonic cultivation. The demonic arm only further strains his mischievous spirit. This is the time for him to prove that he has truly broken free from the forbidden path and is not the maniacal sorcerer that everyone remembers him to be.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Action",
      "Adventure",
      "Drama",
      "Fantasy",
      "Mystery"
    ],
    "rating": 8.5,
    "year": 2019,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 8,
    "image": "https://cdn.myanimelist.net/images/anime/1404/106707.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1404/106707l.jpg",
    "type": "both",
    "studio": "B.CMAY PICTURES",
    "duration": "24 min"
  },
  {
    "id": "fatestay-night-heavens-feel-ii-lost-butterfly",
    "title": "Fate/stay night: Heaven's Feel - II. Lost Butterfly",
    "titleJapanese": "劇場版「Fate/stay night [Heaven's Feel] II.lost butterfly」",
    "synopsis": "The Fifth Holy Grail War continues, and the ensuing chaos results in higher stakes for all participants. Shirou Emiya continues to participate in the war, aspiring to be a hero of justice who saves everyone. He sets out in search of the truth behind a mysterious dark shadow and its murder spree, determined to defeat it.\n\nMeanwhile, Shinji Matou sets his own plans into motion, threatening Shirou through his sister Sakura Matou. Shirou and Rin Toosaka battle Shinji, hoping to relieve Sakura from the abuses of her brother. But the ugly truth of the Matou siblings begins to surface, and many dark secrets are exposed.\n\nFate/stay night Movie: Heaven's Feel - II. Lost Butterfly continues to focus on the remaining Masters and Servants as they fight each other in the hopes of obtaining the Holy Grail. However, as darkness arises within Fuyuki City, even the state of their sacred war could be in danger.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Action",
      "Fantasy"
    ],
    "rating": 8.5,
    "year": 2019,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "57 min"
      }
    ],
    "totalEpisodes": 1,
    "image": "https://cdn.myanimelist.net/images/anime/1974/98158.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1974/98158l.jpg",
    "type": "both",
    "studio": "ufotable",
    "duration": "57 min"
  },
  {
    "id": "rainbow",
    "title": "Rainbow",
    "titleJapanese": "RAINBOW 二舎六房の七人",
    "synopsis": "Japan, 1955: Mario Minakami has just arrived at Shounan Special Reform School along with five other teenagers who have been arrested on serious criminal charges. All assigned to the same cell, they meet older inmate Rokurouta Sakuragi—a former boxer—with whom they establish a close bond. Under his guidance, and with the promise that they will meet again on the outside after serving their sentences, the delinquents begin to view their hopeless situation in a better light.\n\nThe seven cellmates struggle together against the brutal suffering and humiliation inflicted upon them by Ishihara, a sadistic guard with a grudge on Rokurouta, and Gisuke Sasaki, a doctor who takes pleasure in violating boys. Facing such hellish conditions, the seven inmates must scrape together all the strength they have to survive until their sentences are up; but even if they do, just what kind of lives are waiting for them on the other side?\n\n[Written by MAL Rewrite]",
    "genre": [
      "Drama",
      "Suspense"
    ],
    "rating": 8.5,
    "year": 2010,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 25,
        "number": 25,
        "title": "Episode 25",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 26,
        "number": 26,
        "title": "Episode 26",
        "thumbnail": "",
        "duration": "22 min"
      }
    ],
    "totalEpisodes": 26,
    "image": "https://cdn.myanimelist.net/images/anime/9/72697.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/9/72697l.jpg",
    "type": "both",
    "studio": "Madhouse",
    "duration": "22 min"
  },
  {
    "id": "yu-yu-hakusho-ghost-files",
    "title": "Yu Yu Hakusho: Ghost Files",
    "titleJapanese": "幽☆遊☆白書",
    "synopsis": "One fateful day, Yuusuke Urameshi, a 14-year-old delinquent with a dim future, gets a miraculous chance to turn it all around when he throws himself in front of a moving car to save a young boy. His ultimate sacrifice is so out of character that the authorities of the spirit realm are not yet prepared to let him pass on. Koenma, heir to the throne of the spirit realm, offers Yuusuke an opportunity to regain his life through completion of a series of tasks. With the guidance of the death god Botan, he is to thwart evil presences on Earth as a Spirit Detective.\n\nTo help him on his venture, Yuusuke enlists ex-rival Kazuma Kuwabara, and two demons, Hiei and Kurama, who have criminal pasts. Together, they train and battle against enemies who would threaten humanity's very existence.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Action",
      "Supernatural"
    ],
    "rating": 8.5,
    "year": 1992,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 25,
        "number": 25,
        "title": "Episode 25",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 26,
        "number": 26,
        "title": "Episode 26",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 27,
        "number": 27,
        "title": "Episode 27",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 28,
        "number": 28,
        "title": "Episode 28",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 29,
        "number": 29,
        "title": "Episode 29",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 30,
        "number": 30,
        "title": "Episode 30",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 31,
        "number": 31,
        "title": "Episode 31",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 32,
        "number": 32,
        "title": "Episode 32",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 33,
        "number": 33,
        "title": "Episode 33",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 34,
        "number": 34,
        "title": "Episode 34",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 35,
        "number": 35,
        "title": "Episode 35",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 36,
        "number": 36,
        "title": "Episode 36",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 37,
        "number": 37,
        "title": "Episode 37",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 38,
        "number": 38,
        "title": "Episode 38",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 39,
        "number": 39,
        "title": "Episode 39",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 40,
        "number": 40,
        "title": "Episode 40",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 41,
        "number": 41,
        "title": "Episode 41",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 42,
        "number": 42,
        "title": "Episode 42",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 43,
        "number": 43,
        "title": "Episode 43",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 44,
        "number": 44,
        "title": "Episode 44",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 45,
        "number": 45,
        "title": "Episode 45",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 46,
        "number": 46,
        "title": "Episode 46",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 47,
        "number": 47,
        "title": "Episode 47",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 48,
        "number": 48,
        "title": "Episode 48",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 49,
        "number": 49,
        "title": "Episode 49",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 50,
        "number": 50,
        "title": "Episode 50",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 50,
    "image": "https://cdn.myanimelist.net/images/anime/1228/111372.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1228/111372l.jpg",
    "type": "both",
    "studio": "Studio Pierrot",
    "duration": "23 min"
  },
  {
    "id": "summer-time-rendering",
    "title": "Summer Time Rendering",
    "titleJapanese": "サマータイムレンダ",
    "synopsis": "Since the death of his parents, Shinpei Ajiro had lived with the Kofune family and their two daughters—Mio and Ushio. Although he then left his home island to continue his education in Tokyo, Shinpei returns after Ushio tragically drowns during the attempted rescue of a little girl. During the funeral, his best friend informs him about bruises found around Ushio's neck, casting doubt over the cause of her death.\n\nSuspecting a murder has taken place, Shinpei reevaluates recent events, but strange incidents only continue to transpire. Disappearing people and other unexplainable occurrences lead Mio to recall an old folktale referring to entities called \"Shadows,\" which may not be entirely fantasy. Supposedly, an encounter with one's Shadow foretells the person's impending demise.\n\nFacing the dark side of Hitogashima Island, Shinpei stands against his grim fate to fulfill Ushio's final will—to protect Mio.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Mystery",
      "Supernatural",
      "Suspense"
    ],
    "rating": 8.5,
    "year": 2022,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 25,
        "number": 25,
        "title": "Episode 25",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 25,
    "image": "https://cdn.myanimelist.net/images/anime/1120/120796.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1120/120796l.jpg",
    "type": "both",
    "studio": "OLM",
    "duration": "23 min"
  },
  {
    "id": "chihayafuru-3",
    "title": "Chihayafuru 3",
    "titleJapanese": "ちはやふる 3",
    "synopsis": "Winning the high school team tournament was a great accomplishment for the Mizusawa members. Each of them has made great strides in improving themselves, and the victory symbolizes how far they have come. But after accomplishing one goal, their individual aims are within reach. Chihaya Ayase has her sights set on Shinobu Wakamiya and the title of Queen, and now that Taichi Mashima has made it into Class A, he can finally compete against Arata Wataya. Everyone in Mizusawa wants to get better, and there is no telling what the future holds if they keep trying.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Drama",
      "Romance",
      "Sports"
    ],
    "rating": 8.5,
    "year": 2019,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "22 min"
      }
    ],
    "totalEpisodes": 24,
    "image": "https://cdn.myanimelist.net/images/anime/1898/110709.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1898/110709l.jpg",
    "type": "both",
    "studio": "Madhouse",
    "duration": "22 min"
  },
  {
    "id": "the-master-of-diabolism",
    "title": "The Master of Diabolism",
    "titleJapanese": "魔道祖师",
    "synopsis": "Xian: the state of immortality that all cultivators strive to achieve. However, there is a dark energy that lies underneath—the forbidden Mo Dao, or demonic path. Through an unfortunate series of tragedies, this is the path that cultivator Wei Wuxian experiments with during his teachings. His rise in power is accompanied by chaos and destruction, but his reign of terror comes to an abrupt end when the cultivation clans overpower him and he is killed by his closest ally.\n\nThirteen years later, Wei Wuxian is reincarnated in the body of a lunatic and reunited with Lan Wangji, a former classmate of his. This marks the beginning of a supernatural mystery that plagues the clans and threatens to disrupt their everyday life.\n\nMo Dao Zu Shi follows these two men on their mission to unravel the mysteries of the spiritual world. Fighting demons, ghosts, and even other cultivators, the two end up forming a bond that neither of them had ever expected.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Action",
      "Adventure",
      "Drama",
      "Fantasy",
      "Mystery"
    ],
    "rating": 8.5,
    "year": 2018,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "25 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "25 min"
      }
    ],
    "totalEpisodes": 15,
    "image": "https://cdn.myanimelist.net/images/anime/1908/153734.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1908/153734l.jpg",
    "type": "both",
    "studio": "B.CMAY PICTURES",
    "duration": "25 min"
  },
  {
    "id": "owarimonogatari",
    "title": "Owarimonogatari",
    "titleJapanese": "終物語",
    "synopsis": "A peculiar transfer student named Ougi Oshino has just arrived at Naoetsu Private High School. She is quickly introduced to senior student Koyomi Araragi by their mutual friend Kanbaru Suruga, in hopes of obtaining advice regarding a strange discovery she has made. After taking a look at the school's layout, Ougi notices that a classroom has appeared in an otherwise empty area—a place that should not exist. \n\nUnsure if this is the work of an apparition, Araragi and Ougi attempt to unravel the truth behind this enigma. But Araragi soon discovers, after finding himself locked in with Ougi, that the room holds the memory of an event he had long since forgotten.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Comedy",
      "Mystery",
      "Supernatural"
    ],
    "rating": 8.5,
    "year": 2015,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "26 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "26 min"
      }
    ],
    "totalEpisodes": 12,
    "image": "https://cdn.myanimelist.net/images/anime/8/76479.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/8/76479l.jpg",
    "type": "both",
    "studio": "Shaft",
    "duration": "26 min"
  },
  {
    "id": "steinsgate-the-movie-load-region-of-dj-vu",
    "title": "Steins;Gate: The Movie - Load Region of Déjà Vu",
    "titleJapanese": "劇場版 シュタインズゲート 負荷領域のデジャヴ",
    "synopsis": "After a year in America, Kurisu Makise returns to Akihabara and reunites with Rintarou Okabe. However, their reunion is cut short when Okabe begins to experience recurring flashes of other timelines as the consequences of his time traveling start to manifest. These side effects eventually culminate in Okabe suddenly vanishing from the world, and only the startled Kurisu has any memory of his existence.\n\nIn the midst of despair, Kurisu is faced with a truly arduous choice that will test both her duty as a scientist and her loyalty as a friend: follow Okabe's advice and stay away from traveling through time to avoid the potential consequences it may have on the world lines, or ignore it to rescue the person that she cherishes most. Regardless of her decision, the path she chooses is one that will affect the past, the present, and the future.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Drama",
      "Sci-Fi"
    ],
    "rating": 8.5,
    "year": 2013,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "30 min"
      }
    ],
    "totalEpisodes": 1,
    "image": "https://cdn.myanimelist.net/images/anime/1611/112806.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1611/112806l.jpg",
    "type": "both",
    "studio": "White Fox",
    "duration": "30 min"
  },
  {
    "id": "banana-fish",
    "title": "Banana Fish",
    "titleJapanese": "BANANA FISH",
    "synopsis": "Aslan Jade Callenreese, known as Ash Lynx, was a runaway picked off the streets of New York City and raised by the infamous godfather of the mafia, Dino Golzine. Now 17 years old and the boss of his own gang, Ash begins investigating the mysterious \"Banana Fish\"—the same two words his older brother, Griffin, has muttered since his return from the Iraq War. However, his inquiries are hindered when Dino sends his men after Ash at an underground bar he uses as a hideout.\n\nAt the bar, Skip, Ash's friend, introduces him to Shunichi Ibe and his assistant, Eiji Okumura, who are Japanese photographers reporting on American street gangs. However, their conversation is interrupted when Shorter Wong, one of Ash's allies, calls to warn him about Dino. Soon, Dino's men storm the bar, and in the ensuing chaos kidnap Skip and Eiji. Now, Ash must find a way to rescue them and continue his investigation into Banana Fish, but will his history with the mafia prevent him from succeeding?\n\n[Written by MAL ",
    "genre": [
      "Action",
      "Adventure",
      "Drama",
      "Suspense"
    ],
    "rating": 8.5,
    "year": 2018,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "22 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "22 min"
      }
    ],
    "totalEpisodes": 24,
    "image": "https://cdn.myanimelist.net/images/anime/1190/93472.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1190/93472l.jpg",
    "type": "both",
    "studio": "MAPPA",
    "duration": "22 min"
  },
  {
    "id": "grand-blue-dreaming",
    "title": "Grand Blue Dreaming",
    "titleJapanese": "ぐらんぶる",
    "synopsis": "Iori Kitahara moves to the coastal town of Izu for his freshman year at its university, taking residence above Grand Blue, his uncle's scuba diving shop. Iori has high hopes and dreams about having the ideal college experience, but when he enters the shop he is sucked into the alcoholic activities of the carefree members of the Diving Club who frequent the place. Persuaded by upperclassmen Shinji Tokita and Ryuujirou Kotobuki, Iori reluctantly joins their bizarre party. His cousin Chisa Kotegawa later walks in and catches him in the act, earning Iori her utter disdain.\n\nBased on Kenji Inoue and Kimitake Yoshioka's popular comedy manga, Grand Blue follows Iori's misadventures with his eccentric new friends as he strives to realize his ideal college dream, while also learning how to scuba dive.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Comedy"
    ],
    "rating": 8.5,
    "year": 2018,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 12,
    "image": "https://cdn.myanimelist.net/images/anime/1302/94882.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1302/94882l.jpg",
    "type": "both",
    "studio": "Zero-G",
    "duration": "24 min"
  },
  {
    "id": "gintama-the-semi-final",
    "title": "Gintama: The Semi-Final",
    "titleJapanese": "銀魂 THE SEMI-FINAL",
    "synopsis": "As the war temporarily calms down and Edo rebuilds, Gintoki finds Shinpachi—who is still unaware of his return—on a bridge. However, as a fight quickly breaks out between the Yorozuya and the Tenshouin Naraku, suspicion grows, forcing Gintoki to use what is nearest—a loincloth—to mask his identity. Saved for the time being, Gintoki enters the Yorozuya office, but unbeknownst to him, someone else is already waiting there...\n\nMeanwhile, Kondou departs Earth to marry Princess Bubbles in an attempt to improve diplomatic relations. After boarding the Gorilla Amanto mother ship, he realizes that he doesn't speak their language. Confused, Kondou tries conversing with them, only to inadvertently gain their support. However, someone associated with the princess crashes the ongoing ceremony. Will the wedding continue, or has Kondou just been saved from becoming the next Gorilla Prince?\n\n[Written by MAL Rewrite]",
    "genre": [
      "Action",
      "Comedy"
    ],
    "rating": 8.5,
    "year": 2021,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 2,
    "image": "https://cdn.myanimelist.net/images/anime/1694/110521.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1694/110521l.jpg",
    "type": "both",
    "studio": "Bandai Namco Pictures",
    "duration": "24 min"
  },
  {
    "id": "medalist-season-2",
    "title": "Medalist Season 2",
    "titleJapanese": "メダリスト 第2期",
    "synopsis": "Ever since the novice coach Tsukasa Akeuraji took Inori Yuitsuka under his mentorship, she has improved her figure skating at a fast pace. After passing a qualifying badge test, she earns a spot to compete in the upcoming Chubu Block Tournament, where only five of the 15 competitors can move forward to the next stage—the prestigious All-Japan Novice Tournament. However, earning a slot will not be easy for Inori: most of her rivals have already experienced trying their luck in the competition.\n\nThe stakes are high as the competition begins, and one by one, each of the competitors strive to perform their very best in front of the big crowd. Moreover, the current figure skating generation's prodigy, Hikaru Kamisaki, is not competing in this block, which raises everyone's determination to qualify. That includes Inori, who must beat the odds if she wants to keep her promise to reach Hikaru and represent Japan in the Olympics with Tsukasa.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Drama",
      "Sports"
    ],
    "rating": 8.4,
    "year": 2026,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 9,
    "image": "https://cdn.myanimelist.net/images/anime/1828/155038.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1828/155038l.jpg",
    "type": "both",
    "studio": "ENGI",
    "duration": "23 min"
  },
  {
    "id": "pluto",
    "title": "Pluto",
    "titleJapanese": "プルートウ",
    "synopsis": "Gesicht, an android police detective of Europol, is tasked with finding the murderer of Montblanc, a retired war hero robot. Although it appears that only a robot could have committed this crime, the murder of a renowned robot rights activist casts doubts on the criminal's identity. Indeed, outside of an isolated and unexplained incident that occurred eight years ago, robots are programmed to be unable to kill human beings. However, the lack of human evidence on the crime scene and the similarity of modus operandi lead Gesicht to suspect that the two murderers might be the same being—be they man or robot.\n\nShortly after Montblanc's passing, another retired elite war robot is mysteriously eliminated. Gesicht notices a pattern in the choice of murder victim: both dead robots belonged to a group of the seven most powerful war machines ever designed. Determined to stop the murderer from eliminating the five remaining veterans, Gesicht seeks help from Atom, a cutting-edge android who resemb",
    "genre": [
      "Action",
      "Mystery",
      "Sci-Fi",
      "Suspense"
    ],
    "rating": 8.4,
    "year": 2023,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "1 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "1 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "1 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "1 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "1 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "1 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "1 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "1 min"
      }
    ],
    "totalEpisodes": 8,
    "image": "https://cdn.myanimelist.net/images/anime/1021/138568.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1021/138568l.jpg",
    "type": "both",
    "studio": "Studio M2",
    "duration": "1 min"
  },
  {
    "id": "zoku-owarimonogatari",
    "title": "Zoku Owarimonogatari",
    "titleJapanese": "続・終物語",
    "synopsis": "Graduation day is finally here, marking the end of Koyomi Araragi's eccentric high school life full of peculiar relationships with otherworldly beings.\n\nHowever, Araragi is unexpectedly absorbed into his own bathroom mirror and trapped inside a bizarre world where everything he knows is completely reversed—the haughty Karen Araragi is shorter than usual, poker-faced Yotsugi Ononoki is brimming with emotion, and cute ghost girl Mayoi Hachikuji is a grown woman! But not everything is as it seems.\n\nZoku Owarimonogatari details the story of Araragi's endeavors in this new world as he struggles to return to his home and understand the nature of this bizarre dimension.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Comedy",
      "Mystery",
      "Supernatural"
    ],
    "rating": 8.4,
    "year": 2019,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "28 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "28 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "28 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "28 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "28 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "28 min"
      }
    ],
    "totalEpisodes": 6,
    "image": "https://cdn.myanimelist.net/images/anime/1022/96168.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1022/96168l.jpg",
    "type": "both",
    "studio": "Shaft",
    "duration": "28 min"
  },
  {
    "id": "jojos-bizarre-adventure-stardust-crusaders-battle-in-egypt",
    "title": "JoJo's Bizarre Adventure: Stardust Crusaders - Battle in Egypt",
    "titleJapanese": "ジョジョの奇妙な冒険 スターダストクルセイダース エジプト編",
    "synopsis": "Joutarou Kuujou and his allies have finally made it to Egypt, where the immortal Dio awaits. Upon their arrival, the group gains a new comrade: Iggy, a mutt who wields the Stand \"The Fool.\" It's not all good news however, as standing in their path is a new group of Stand users who serve Dio, each with a Stand representative of an ancient Egyptian god. As their final battle approaches, it is a race against time to break Joutarou's mother free from her curse and end Dio's reign of terror over the Joestar family once and for all.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Action",
      "Adventure"
    ],
    "rating": 8.4,
    "year": 2015,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 24,
    "image": "https://cdn.myanimelist.net/images/anime/11/75045.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/11/75045l.jpg",
    "type": "both",
    "studio": "David Production",
    "duration": "23 min"
  },
  {
    "id": "hunter-x-hunter",
    "title": "Hunter x Hunter",
    "titleJapanese": "HUNTER×HUNTER（ハンター×ハンター）",
    "synopsis": "Hunters are specialized in a wide variety of fields, ranging from treasure hunting to cooking. They have access to otherwise unavailable funds and information that allow them to pursue their dreams and interests. However, being a hunter is a special privilege, only attained by taking a deadly exam with an extremely low success rate.\n\nGon Freecss, a 12-year-old boy with the hope of finding his missing father, sets out on a quest to take the Hunter Exam. Along the way, he picks up three companions who also aim to take the dangerous test: the revenge-seeking Kurapika, aspiring doctor Leorio Paladiknight, and a mischievous child the same age as Gon, Killua Zoldyck.\n\nAs the four aspiring hunters embark on a perilous adventure, they fight for their dreams while defying the odds.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "rating": 8.4,
    "year": 1999,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 25,
        "number": 25,
        "title": "Episode 25",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 26,
        "number": 26,
        "title": "Episode 26",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 27,
        "number": 27,
        "title": "Episode 27",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 28,
        "number": 28,
        "title": "Episode 28",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 29,
        "number": 29,
        "title": "Episode 29",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 30,
        "number": 30,
        "title": "Episode 30",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 31,
        "number": 31,
        "title": "Episode 31",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 32,
        "number": 32,
        "title": "Episode 32",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 33,
        "number": 33,
        "title": "Episode 33",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 34,
        "number": 34,
        "title": "Episode 34",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 35,
        "number": 35,
        "title": "Episode 35",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 36,
        "number": 36,
        "title": "Episode 36",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 37,
        "number": 37,
        "title": "Episode 37",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 38,
        "number": 38,
        "title": "Episode 38",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 39,
        "number": 39,
        "title": "Episode 39",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 40,
        "number": 40,
        "title": "Episode 40",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 41,
        "number": 41,
        "title": "Episode 41",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 42,
        "number": 42,
        "title": "Episode 42",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 43,
        "number": 43,
        "title": "Episode 43",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 44,
        "number": 44,
        "title": "Episode 44",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 45,
        "number": 45,
        "title": "Episode 45",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 46,
        "number": 46,
        "title": "Episode 46",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 47,
        "number": 47,
        "title": "Episode 47",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 48,
        "number": 48,
        "title": "Episode 48",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 49,
        "number": 49,
        "title": "Episode 49",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 50,
        "number": 50,
        "title": "Episode 50",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 50,
    "image": "https://cdn.myanimelist.net/images/anime/1305/132237.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1305/132237l.jpg",
    "type": "both",
    "studio": "Nippon Animation",
    "duration": "23 min"
  },
  {
    "id": "saga-of-tanya-the-evil-ii",
    "title": "Saga of Tanya the Evil II",
    "titleJapanese": "幼女戦記 II",
    "synopsis": "Second season of Youjo Senki.",
    "genre": [
      "Action",
      "Fantasy"
    ],
    "rating": 8.5,
    "year": 2026,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 12,
    "image": "https://cdn.myanimelist.net/images/anime/1917/158371.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1917/158371l.jpg",
    "type": "both",
    "studio": "Nut",
    "duration": "23 min"
  },
  {
    "id": "violet-evergarden-eternity-and-the-auto-memory-doll",
    "title": "Violet Evergarden: Eternity and the Auto Memory Doll",
    "titleJapanese": "ヴァイオレット・エヴァーガーデン 外伝 -永遠と自動手記人形-",
    "synopsis": "Isabella, the daughter of the noble York family, is enrolled in an all-girls academy to be groomed into a dame worthy of nobility. However, she has given up on her future, seeing the prestigious school as nothing more than a prison from the outside world. Her family notices her struggling in her lessons and decides to hire Violet Evergarden to personally tutor her under the guise of a handmaiden. \n\nAt first, Isabella treats Violet coldly. Violet seems to be able to do everything perfectly, leading Isabella to assume that she was born with a silver spoon. After some time together, Isabella begins to realize that Violet has had her own struggles and starts to open up to her. Isabella soon reveals that she has lost contact with her beloved younger sister, Taylor Bartlett, whom she yearns to see again. \n\nHaving experienced the power of words through her past clientele, Violet asks if Isabella wishes to write a letter to Taylor. Will Violet be able to help Isabella convey her feelings to he",
    "genre": [
      "Drama"
    ],
    "rating": 8.4,
    "year": 2019,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "31 min"
      }
    ],
    "totalEpisodes": 1,
    "image": "https://cdn.myanimelist.net/images/anime/1667/112943.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1667/112943l.jpg",
    "type": "both",
    "studio": "Kyoto Animation",
    "duration": "31 min"
  },
  {
    "id": "haikyu",
    "title": "Haikyu!!",
    "titleJapanese": "ハイキュー!!",
    "synopsis": "Ever since having witnessed the \"Little Giant\" and his astonishing skills on the volleyball court, Shouyou Hinata has been bewitched by the dynamic nature of the sport. Even though his attempt to make his debut as a volleyball regular during a middle school tournament went up in flames, he longs to prove that his less-than-impressive height ceases to be a hindrance in the face of his sheer will and perseverance.\n\nWhen Hinata enrolls in Karasuno High School, the Little Giant's alma mater, he believes that he is one step closer to his goal of becoming a professional volleyball player. Although the school only retains a shadow of its former glory, Hinata's conviction isn't shaken until he learns that Tobio Kageyama—the prodigy who humiliated Hinata's middle school volleyball team in a crushing defeat—is now his teammate.\n\nTo fulfill his desire of leaving a mark on the realm of volleyball—so often regarded as the domain of the tall and the strong—Hinata must smooth out his differences with",
    "genre": [
      "Sports"
    ],
    "rating": 8.4,
    "year": 2014,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 25,
        "number": 25,
        "title": "Episode 25",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 25,
    "image": "https://cdn.myanimelist.net/images/anime/7/76014.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/7/76014l.jpg",
    "type": "both",
    "studio": "Production I.G",
    "duration": "24 min"
  },
  {
    "id": "golden-kamuy-season-3",
    "title": "Golden Kamuy Season 3",
    "titleJapanese": "ゴールデンカムイ",
    "synopsis": "After obtaining information about Asirpa from the foreteller Inkarmat, Saichi Sugimoto, Genjirou Tanigaki, and Cikapasi join the Seventh Division's Otonoshin Koito and Hajime Tsukishima on a journey to Karafuto. Heading further north into the freezing Russian territory, they collect any clues about Asirpa's whereabouts they can find and rush after her.\n\nMeanwhile, Asirpa is unaware of what truly transpired at Abashiri Prison. Deeply disturbed and confused by her father Wilk's past actions, Asirpa follows his old friend Kiroranke to the place where Wilk was born and raised in order to better understand his motives. However, Kiroranke and the master sniper Hyakunosuke Ogata are scheming behind her back.\n\nEven if they were to obtain all 24 tattooed skins that form a map to the lost Ainu gold, the various factions searching for it now understand that the map is useless without Asirpa. Realizing the danger she could be in, Sugimoto desperately hopes to reach Asirpa first and protect her fro",
    "genre": [
      "Action",
      "Adventure"
    ],
    "rating": 8.4,
    "year": 2020,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 12,
    "image": "https://cdn.myanimelist.net/images/anime/1763/108108.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1763/108108l.jpg",
    "type": "both",
    "studio": "Geno Studio",
    "duration": "23 min"
  },
  {
    "id": "rezero-starting-life-in-another-world-season-3",
    "title": "Re:ZERO -Starting Life in Another World- Season 3",
    "titleJapanese": "Re:ゼロから始める異世界生活 3rd season",
    "synopsis": "One year after the events at the Sanctuary, Subaru Natsuki trains hard to better face future challenges. The peaceful days come to an end when Emilia receives an invitation to a meeting in the Watergate City of Priestella from none other than Anastasia Hoshin, one of her rivals in the royal selection. Considering the meeting's significance and the potential dangers Emilia could face, Subaru and his friends accompany her.\n\nHowever, as Subaru reconnects with old associates and companions in Priestella, new formidable foes emerge. Driven by fanatical motivations and engaging in ruthless methods to achieve their ambitions, the new enemy targets Emilia and threaten the very existence of the city. Rallying his allies, Subaru must give his all once more to stop their nefarious goals from becoming a concrete reality.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Drama",
      "Fantasy",
      "Suspense"
    ],
    "rating": 8.4,
    "year": 2024,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "28 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "28 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "28 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "28 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "28 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "28 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "28 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "28 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "28 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "28 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "28 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "28 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "28 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "28 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "28 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "28 min"
      }
    ],
    "totalEpisodes": 16,
    "image": "https://cdn.myanimelist.net/images/anime/1706/144725.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1706/144725l.jpg",
    "type": "both",
    "studio": "White Fox",
    "duration": "28 min"
  },
  {
    "id": "mushi-shi-path-of-thorns",
    "title": "Mushi-shi Path of Thorns",
    "titleJapanese": "蟲師 続章",
    "synopsis": "Mysterious, unknowable creatures alien to the laws of nature—known only to some and feared by others—\"Mushi\" lie behind many of life's strange phenomena.\n\nLong ago, a Mushi of terrifying power threatened to extinguish all life. The Minai clan of Mushishi were born from those who stopped this malevolent force, their members bound by duty to serve as retainers to the Karibusa family, within whom the Mushi remains sealed. The Mushishi Ginko is given a job request from Tanyuu Karibusa: oversee the work of the head of the Minai clan, Kumado Minai, in investigating an abandoned village where dead wood and even houses spring back to life as flourishing plants.\n\nThough the Minai clan are oddly ruthless among Mushishi, even more peculiar is their widespread dull character, with little appreciation for beauty or sentiment. Tanyuu believes there is more to this trend than meets the eye. Ginko aims to answer her curiosity as he follows Kumado into a \"Path of Thorns,\" a place where Mushi flow from ",
    "genre": [
      "Adventure",
      "Mystery",
      "Slice of Life",
      "Supernatural"
    ],
    "rating": 8.4,
    "year": 2014,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "47 min"
      }
    ],
    "totalEpisodes": 1,
    "image": "https://cdn.myanimelist.net/images/anime/8/63539.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/8/63539l.jpg",
    "type": "both",
    "studio": "Artland",
    "duration": "47 min"
  },
  {
    "id": "natsumes-book-of-friends-movie-ephemeral-bond",
    "title": "Natsume's Book of Friends Movie: Ephemeral Bond",
    "titleJapanese": "劇場版 夏目友人帳 ～うつせみに結ぶ～",
    "synopsis": "Takashi Natsume and his spirit companion Madara, nicknamed \"Nyanko,\" continue returning the names of spirits from the Book of Friends given by his late grandmother Reiko Natsume.\n\nOn his way back from school one day, Takashi encounters a lurking spirit named Monmonbou, who recalls memories of Takashi's grandmother after hearing his name. Takashi's natural curiosity leads him to explore a mysterious town where his grandmother used to live. Befriending her old acquaintance Yorie Tsumura and Yorie's son Mukuo, Takashi unveils more of his grandmother's past.\n\nIn the meantime, Nyanko detours for food and stumbles upon a suspicious \"Spirit Seed,\" which miraculously sprouts into a fruit tree overnight. Giving in to temptation, Nyanko consumes the fruit, splitting him into three. Seeking a solution to Nyanko's predicament, Takashi and his friends lend a hand, unexpectedly uncovering more secrets the town holds in the process.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Slice of Life",
      "Supernatural"
    ],
    "rating": 8.4,
    "year": 2018,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "44 min"
      }
    ],
    "totalEpisodes": 1,
    "image": "https://cdn.myanimelist.net/images/anime/1250/94846.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1250/94846l.jpg",
    "type": "both",
    "studio": "Shuka",
    "duration": "44 min"
  },
  {
    "id": "rezero-starting-life-in-another-world-season-2-part-2",
    "title": "Re:ZERO -Starting Life in Another World- Season 2 Part 2",
    "titleJapanese": "Re：ゼロから始める異世界生活 2 part 2",
    "synopsis": "After a stern yet compelling speech by Otto Suwen, Subaru Natsuki solemnly swears that he will successfully make it through this timeline and save everyone he can along the way. The first step toward achieving this goal is to help Emilia work through her past; however, that is easier said than done. Feeling as if she has been lied to by everyone around her, it will be difficult for Emilia to trust anyone, even Subaru, her self-proclaimed knight.\n\nRe:Zero kara Hajimeru Isekai Seikatsu 2nd Season Part 2 presents the culmination of Subaru's experiences with the Sanctuary and its people, along with his unwillingness to give up hope on saving them.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Drama",
      "Fantasy",
      "Suspense"
    ],
    "rating": 8.4,
    "year": 2021,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "29 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "29 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "29 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "29 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "29 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "29 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "29 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "29 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "29 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "29 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "29 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "29 min"
      }
    ],
    "totalEpisodes": 12,
    "image": "https://cdn.myanimelist.net/images/anime/1724/117421.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1724/117421l.jpg",
    "type": "both",
    "studio": "White Fox",
    "duration": "29 min"
  },
  {
    "id": "kono-oto-tomare-sounds-of-life-season-2",
    "title": "Kono Oto Tomare!: Sounds of Life Season 2",
    "titleJapanese": "この音とまれ！",
    "synopsis": "The Tokise High School Koto Club has courageously pushed through their fractured and unsynchronized performance at the Kanto Region Traditional Japanese Music Festival. Club members Chika Kudou, Satowa Houzuki, Takezou Kurata, Hiro Kurusu, Kouta Mizuhara, Saneyasu Adachi, and Michitaka Sakai are devastated to learn the negative results of their performance, leaving them crushed. Nonetheless, the group recognizes their potential and enthusiastically agree to collectively sharpen their skills, improve their flaws, and develop higher caliber playing to succeed in the upcoming national qualifiers in winter.\n\nWith the help of their now willing club advisor Suzuka Takinami, the group's goal gradually becomes achievable as they begin to grasp the foundations of good music and refine their koto-playing abilities, with the suggestion of performing more often to gain what they lack most—experience.\n\nHowever, as their journey to nationals is underway, the koto club members face challenges that ob",
    "genre": [
      "Drama"
    ],
    "rating": 8.4,
    "year": 2019,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "23 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "23 min"
      }
    ],
    "totalEpisodes": 13,
    "image": "https://cdn.myanimelist.net/images/anime/1422/111621.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1422/111621l.jpg",
    "type": "both",
    "studio": "Platinum Vision",
    "duration": "23 min"
  },
  {
    "id": "chainsaw-man",
    "title": "Chainsaw Man",
    "titleJapanese": "チェンソーマン",
    "synopsis": "Denji is robbed of a normal teenage life, left with nothing but his deadbeat father's overwhelming debt. His only companion is his pet, the chainsaw devil Pochita, with whom he slays devils for money that inevitably ends up in the yakuza's pockets. All Denji can do is dream of a good, simple life: one with delicious food and a beautiful girlfriend by his side. But an act of greedy betrayal by the yakuza leads to Denji's brutal, untimely death, crushing all hope of him ever achieving happiness.\n\nRemarkably, an old contract allows Pochita to merge with the deceased Denji and bestow devil powers on him, changing him into a hybrid able to transform his body parts into chainsaws. Because Denji's new abilities pose a significant risk to society, the Public Safety Bureau's elite devil hunter Makima takes him in, letting him live as long as he obeys her command. Guided by the promise of a content life alongside an attractive woman, Denji devotes everything and fights with all his might to make",
    "genre": [
      "Action",
      "Fantasy"
    ],
    "rating": 8.4,
    "year": 2022,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 12,
    "image": "https://cdn.myanimelist.net/images/anime/1806/126216.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1806/126216l.jpg",
    "type": "both",
    "studio": "MAPPA",
    "duration": "24 min"
  },
  {
    "id": "attack-on-titan-no-regrets",
    "title": "Attack on Titan: No Regrets",
    "titleJapanese": "進撃の巨人 悔いなき選択",
    "synopsis": "Many years before becoming the famed captain of the Survey Corps, a young Levi struggles to survive in the capital's garbage dump, the Underground. As the boss of his own criminal operation, Levi attempts to get by with meager earnings while aided by fellow criminals, Isabel Magnolia and Farlan Church. With little hope for the future, Levi accepts a deal from the anti-expedition faction leader Nicholas Lobov, who promises the trio citizenship aboveground if they are able to successfully assassinate Erwin Smith, a squad leader of the Survey Corps.\n\nAs Levi and Erwin cross paths, Erwin acknowledges Levi's agility and skill and gives him the option to either become part of the expedition team, or be turned over to the Military Police, to atone for his crimes. Now closer to the man they are tasked to kill, the group plans to complete their mission and save themselves from a grim demise in the dim recesses of their past home. However, they are about to learn that the surface world is not as",
    "genre": [
      "Action"
    ],
    "rating": 8.4,
    "year": 2014,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "27 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "27 min"
      }
    ],
    "totalEpisodes": 2,
    "image": "https://cdn.myanimelist.net/images/anime/8/69497.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/8/69497l.jpg",
    "type": "both",
    "studio": "Wit Studio",
    "duration": "27 min"
  },
  {
    "id": "ghost-in-the-shell-stand-alone-complex",
    "title": "Ghost in the Shell: Stand Alone Complex",
    "titleJapanese": "攻殻機動隊 STAND ALONE COMPLEX",
    "synopsis": "In the not so distant future, mankind has advanced to a state where complete body transplants from flesh to machine is possible. This allows for great increases in both physical and cybernetic prowess and blurring the lines between the two worlds. However, criminals can also make full use of such technology, leading to new and sometimes, very dangerous crimes. In response to such innovative new methods, the Japanese Government has established Section 9, an independently operating police unit which deals with such highly sensitive crimes.\n\nLed by Daisuke Aramaki and Motoko Kusanagi, Section 9 deals with such crimes over the entire social spectrum, usually with success. However, when faced with a new A level hacker nicknamed \"The Laughing Man,\" the team is thrown into a dangerous cat and mouse game, following the hacker's trail as it leaves its mark on Japan.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Award Winning",
      "Mystery",
      "Sci-Fi"
    ],
    "rating": 8.4,
    "year": 2002,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 13,
        "number": 13,
        "title": "Episode 13",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 14,
        "number": 14,
        "title": "Episode 14",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 15,
        "number": 15,
        "title": "Episode 15",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 16,
        "number": 16,
        "title": "Episode 16",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 17,
        "number": 17,
        "title": "Episode 17",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 18,
        "number": 18,
        "title": "Episode 18",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 19,
        "number": 19,
        "title": "Episode 19",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 20,
        "number": 20,
        "title": "Episode 20",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 21,
        "number": 21,
        "title": "Episode 21",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 22,
        "number": 22,
        "title": "Episode 22",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 23,
        "number": 23,
        "title": "Episode 23",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 24,
        "number": 24,
        "title": "Episode 24",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 25,
        "number": 25,
        "title": "Episode 25",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 26,
        "number": 26,
        "title": "Episode 26",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 26,
    "image": "https://cdn.myanimelist.net/images/anime/11/50857.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/11/50857l.jpg",
    "type": "both",
    "studio": "Production I.G",
    "duration": "24 min"
  },
  {
    "id": "saekano-the-movie-finale",
    "title": "Saekano the Movie: Finale",
    "titleJapanese": "冴えない彼女の育てかた Fine",
    "synopsis": "With the second Winter Comiket just around the corner, Blessing Software has been vigorously producing its new game, \"How to Raise a Boring Girlfriend.\" Despite Utaha Kasumigaoka and Eriri Spencer Sawamura leaving the circle, Megumi Katou and Tomoya Aki are hopeful that, by sticking to Tomoya's original vision for the game, their upcoming creation will exceed Blessing Software's previous installment.\n\nWith the addition of new members Iori and Izumi Hashima, development ensues—but not without its share of setbacks. Things rarely go as planned in the dating sim industry, with numerous obstacles forcing Tomoya to decide between helping his friends or completing the game. \n\nSaenai Heroine no Sodatekata Fine draws the series to a close as Tomoya selects his final route, both within his personal life and Blessing Software.\n\n[Written by MAL Rewrite]",
    "genre": [
      "Comedy",
      "Romance"
    ],
    "rating": 8.4,
    "year": 2019,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "54 min"
      }
    ],
    "totalEpisodes": 1,
    "image": "https://cdn.myanimelist.net/images/anime/1671/111411.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1671/111411l.jpg",
    "type": "both",
    "studio": "CloverWorks",
    "duration": "54 min"
  },
  {
    "id": "grand-blue-dreaming-season-3",
    "title": "Grand Blue Dreaming Season 3",
    "titleJapanese": "ぐらんぶる Season 3",
    "synopsis": "Third season of Grand Blue.",
    "genre": [
      "Comedy"
    ],
    "rating": 8.4,
    "year": 2026,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 12,
    "image": "https://cdn.myanimelist.net/images/anime/1615/158194.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1615/158194l.jpg",
    "type": "both",
    "studio": "Zero-G",
    "duration": "24 min"
  },
  {
    "id": "grand-blue-dreaming-season-3",
    "title": "Grand Blue Dreaming Season 3",
    "titleJapanese": "ぐらんぶる Season 3",
    "synopsis": "Third season of Grand Blue.",
    "genre": [
      "Comedy"
    ],
    "rating": 8.4,
    "year": 2026,
    "status": "upcoming",
    "episodes": [
      {
        "id": 1,
        "number": 1,
        "title": "Episode 1",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 2,
        "number": 2,
        "title": "Episode 2",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 3,
        "number": 3,
        "title": "Episode 3",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 4,
        "number": 4,
        "title": "Episode 4",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 5,
        "number": 5,
        "title": "Episode 5",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 6,
        "number": 6,
        "title": "Episode 6",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 7,
        "number": 7,
        "title": "Episode 7",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 8,
        "number": 8,
        "title": "Episode 8",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 9,
        "number": 9,
        "title": "Episode 9",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 10,
        "number": 10,
        "title": "Episode 10",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 11,
        "number": 11,
        "title": "Episode 11",
        "thumbnail": "",
        "duration": "24 min"
      },
      {
        "id": 12,
        "number": 12,
        "title": "Episode 12",
        "thumbnail": "",
        "duration": "24 min"
      }
    ],
    "totalEpisodes": 12,
    "image": "https://cdn.myanimelist.net/images/anime/1615/158194.jpg",
    "banner": "https://cdn.myanimelist.net/images/anime/1615/158194l.jpg",
    "type": "both",
    "studio": "Zero-G",
    "duration": "24 min"
  }
];

export const genres = [...new Set(animeList.flatMap(a => a.genre))].sort();

export function getAnimeById(id: string): Anime | undefined {
  return animeList.find((a) => a.id === id);
}

export function getFeaturedAnime(): Anime[] {
  return animeList.filter((a) => a.rating >= 8.5).slice(0, 10);
}

export function getTrendingAnime(): Anime[] {
  return [...animeList].sort((a, b) => b.rating - a.rating).slice(0, 12);
}

export function getRecentlyAdded(): Anime[] {
  return [...animeList].sort((a, b) => b.year - a.year).slice(0, 12);
}
