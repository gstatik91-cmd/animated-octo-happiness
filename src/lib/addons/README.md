# AniFlow Addon System

A **Stremio-style addon system** for pluggable stream sources. The app ships two
official addons out of the box and lets users install/enable others client-side.

## Legal-only policy

AniFlow stays a **neutral platform**. We ship only **officially-licensed** free
streams (Muse Asia / Ani-One Asia are official Medialink channels) and official
trailers. We do **not** build, ship, or link pirated episode mirrors or use
anime-scraper APIs. The community may extend the catalog via addons, but
anything we ship ourselves must be verifiably legal.

## Stremio-compatible manifest shape

Every addon exposes a manifest matching Stremio's schema so real community
addons can be dropped in later:

```ts
interface AddonManifest {
  id: string;             // e.g. "org.aniflow.trailers"
  name: string;
  description: string;
  version: string;
  logo?: string;
  resources: ("stream" | "catalog" | "meta")[];
  types: ("anime" | "movie")[];
  catalogs?: { id: string; name: string; type: "anime" | "movie" }[];
}
```

## Transport

For the MVP, addons are **local modules** (TypeScript resolver functions) so
everything works without a server. The shape is kept HTTP-JSON compatible —
a remote addon serves the same manifest at `GET {baseUrl}/manifest.json` and
streams at:

```
GET {baseUrl}/stream/{type}/{id}.json?episode={n}
// -> { "streams": [{ "url": "...", "title": "...", "quality": "1080p", "source": "..." }] }
```

A remote `transportUrl` on an addon is where the HTTP fetcher would be wired in
a future iteration.

## Resolution order

`resolveStreams(animeId, episodeNumber)` queries installed-and-enabled addons in
registry order (official trailers → legal streams → community) and returns a
merged `Stream[]`. Each resolver is individually wrapped so one broken addon
never takes down the player.

## Persistence

Install/enable state persists to `localStorage["aniflow_addons"]`. Resume
position persists to `localStorage["aniflow_resume"]`.
