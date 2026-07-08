import type { Anime } from "./anime";

const imageBase = "/thumbnails";
const defaultPoster = "/logo.png";

const imageMap: Record<string, string> = {
  "attack-on-titan": "attack-on-titan",
  "demon-slayer": "demon-slayer",
  "jujutsu-kaisen": "jujutsu-kaisen",
  "one-piece": "one-piece",
  "chainsaw-man": "chainsaw-man",
  "frieren": "frieren",
  "death-note": "death-note",
  "solo-leveling": "solo-leveling",
};

export function getAnimeImagePath(anime: Anime): string {
  const key = imageMap[anime.id];
  if (key) {
    return `${imageBase}/${key}.jpg`;
  }
  return defaultPoster;
}

export function getGradientForAnime(anime: Anime): string {
  const gradients: Record<string, string> = {
    "attack-on-titan": "from-emerald-900 via-green-800 to-yellow-900",
    "demon-slayer": "from-blue-900 via-indigo-800 to-teal-900",
    "jujutsu-kaisen": "from-purple-900 via-violet-800 to-indigo-900",
    "one-piece": "from-red-900 via-orange-800 to-yellow-900",
    "chainsaw-man": "from-red-950 via-rose-900 to-orange-900",
    "frieren": "from-sky-900 via-blue-800 to-indigo-900",
    "death-note": "from-slate-900 via-gray-800 to-red-900",
    "solo-leveling": "from-indigo-950 via-purple-900 to-blue-900",
  };
  return gradients[anime.id] || "from-purple-900 via-violet-800 to-indigo-900";
}

export function getStatusColor(status: Anime["status"]): string {
  switch (status) {
    case "airing":
      return "bg-green-500";
    case "complete":
      return "bg-blue-500";
    case "upcoming":
      return "bg-yellow-500";
  }
}

export function getStatusLabel(status: Anime["status"]): string {
  switch (status) {
    case "airing":
      return "Airing";
    case "complete":
      return "Completed";
    case "upcoming":
      return "Upcoming";
  }
}