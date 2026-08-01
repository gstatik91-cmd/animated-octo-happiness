import { createFileRoute, Link } from "@tanstack/react-router";
import { useSuspenseQuery, useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { AnimeCard } from "~/components/AnimeCard";
import {
  featuredAnime,
  trendingAnime,
  recentlyAddedAnime,
  getAllAnime,
  apiGetRecommendations,
} from "~/lib/api";

// For MVP, we use a simple user ID from localStorage
function getUserId(): string | null {
  try {
    const session = JSON.parse(localStorage.getItem("aniFlow_session") || "null");
    return session?.id || null;
  } catch {
    return null;
  }
}

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const { data: featured } = useSuspenseQuery({
    queryKey: ["featuredAnime"],
    queryFn: () => featuredAnime(),
  });

  const { data: trending } = useSuspenseQuery({
    queryKey: ["trendingAnime"],
    queryFn: () => trendingAnime(),
  });

  const { data: latest } = useSuspenseQuery({
    queryKey: ["recentlyAdded"],
    queryFn: () => recentlyAddedAnime(),
  });

  const { data: allAnime } = useSuspenseQuery({
    queryKey: ["allAnime"],
    queryFn: () => getAllAnime(),
  });

  // Recommendations: fetch when user is logged in
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const id = getUserId();
    setUserId(id);
  }, []);

  const { data: recommendations } = useQuery({
    queryKey: ["recommendations", userId],
    queryFn: () => (userId ? apiGetRecommendations(userId) : null),
    enabled: !!userId,
  });

  const animeCount = allAnime?.length ?? 0;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/hero-bg.jpg"
            alt=""
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-anime-dark/70 via-anime-dark/60 to-anime-dark" />
          <div className="absolute inset-0 bg-gradient-to-r from-anime-dark/80 to-transparent" />
        </div>

        {/* Animated particles/grid effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(168, 85, 247, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="max-w-3xl">
            <div className="fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-anime-500/10 border border-anime-500/20 text-anime-300 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Now Streaming {animeCount}+ Series
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 slide-up">
              <span className="text-white">Stream the Best </span>
              <span className="text-gradient">Anime</span>
              <br />
              <span className="text-white">Subbed & Dubbed.</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 max-w-xl mb-8 slide-up" style={{ animationDelay: '0.1s' }}>
              Discover curated anime series and films with a clutter-free experience. 
              Personalized recommendations, watchlists, and ad-free premium.
            </p>

            <div className="flex flex-wrap gap-4 slide-up" style={{ animationDelay: '0.2s' }}>
              <Link to="/browse" className="btn-primary text-lg !px-8 !py-4">
                Start Watching Free
              </Link>
              <Link to="/pricing" className="btn-secondary text-lg !px-8 !py-4">
                View Plans
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-12 slide-up" style={{ animationDelay: '0.3s' }}>
              <div>
                <div className="text-2xl font-bold text-white">{animeCount}+</div>
                <div className="text-sm text-gray-500">Anime Series</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">Sub & Dub</div>
                <div className="text-sm text-gray-500">Language Options</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">Free Tier</div>
                <div className="text-sm text-gray-500">Start Watching</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Top Rated
            </h2>
            <Link to="/browse" className="text-sm text-anime-400 hover:text-anime-300 transition-colors">
              View All →
            </Link>
          </div>
          <div className="anime-grid">
            {featured?.map((anime, i) => (
              <AnimeCard key={anime.id} anime={anime} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
            </svg>
            Trending Now
          </h2>
          <Link to="/browse" className="text-sm text-anime-400 hover:text-anime-300 transition-colors">
            View All →
          </Link>
        </div>
        <div className="anime-grid">
          {trending?.map((anime, i) => (
            <AnimeCard key={anime.id} anime={anime} index={i} />
          ))}
        </div>
      </section>

      {/* Recently Added */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <svg className="w-5 h-5 text-neon-blue" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            Recently Added
          </h2>
          <Link to="/browse" className="text-sm text-anime-400 hover:text-anime-300 transition-colors">
            View All →
          </Link>
        </div>
        <div className="anime-grid">
          {latest?.map((anime, i) => (
            <AnimeCard key={anime.id} anime={anime} index={i} />
          ))}
        </div>
      </section>

      {/* Personalized Recommendations — only shown for logged-in users with watchlist */}
      {recommendations && recommendations.items && recommendations.items.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <svg className="w-5 h-5 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              Because you watched{" "}
              <Link to={`/anime/${recommendations.becauseYouWatched?.id}`} className="text-anime-400 hover:text-anime-300 transition-colors underline">
                {recommendations.becauseYouWatched?.title}
              </Link>
            </h2>
            <Link to="/browse" className="text-sm text-anime-400 hover:text-anime-300 transition-colors">
              View All →
            </Link>
          </div>
          <div className="anime-grid">
            {recommendations.items.map((anime: any, i: number) => (
              <AnimeCard key={anime.id} anime={anime} index={i} />
            ))}
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why <span className="text-gradient">AniFlow</span>?
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Everything you need for the ultimate anime experience, nothing you don't.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Curated Selection",
              desc: "Hand-picked anime series and films. No filler, just the best content curated by real fans.",
              icon: (
                <svg className="w-8 h-8 text-anime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
            },
            {
              title: "Sub & Dub Support",
              desc: "Watch how you want. Every show comes with both subbed and dubbed options.",
              icon: (
                <svg className="w-8 h-8 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              ),
            },
            {
              title: "Smart Watchlists",
              desc: "Track your progress, save favorites, and never lose your place across devices.",
              icon: (
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              ),
            },
          ].map((feature) => (
            <div key={feature.title} className="glass-card p-6 card-hover">
              <div className="w-12 h-12 rounded-lg bg-surface-lighter flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Premium perks */}
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {[
            {
              title: "Ad-Free Experience",
              desc: "No interruptions. Just pure anime enjoyment.",
              icon: (
                <svg className="w-8 h-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 12H4" />
                </svg>
              ),
            },
            {
              title: "HD & 4K Quality",
              desc: "Crystal clear visuals. Every scene looks stunning.",
              icon: (
                <svg className="w-8 h-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              ),
            },
            {
              title: "Early Access",
              desc: "Watch new simulcast episodes before everyone else.",
              icon: (
                <svg className="w-8 h-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
            },
          ].map((perk) => (
            <div key={perk.title} className="glass-card p-6 card-hover border border-yellow-500/10">
              <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4">
                {perk.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{perk.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{perk.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-anime-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Start Watching <span className="text-gradient">Free</span>
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto mb-8">
              No credit card required. Upgrade to Premium for just $5.99/month.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/signup" className="btn-primary text-lg !px-8 !py-4">
                Get Started Free
              </Link>
              <Link to="/pricing" className="btn-secondary text-lg !px-8 !py-4">
                See Plans
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom spacing */}
      <div className="h-16" />
    </div>
  );
}