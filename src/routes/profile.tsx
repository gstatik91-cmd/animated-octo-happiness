import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchWatchlist, apiGetMe } from "~/lib/api";

export const Route = createFileRoute("/profile")({
  component: Profile,
});

interface Session {
  id: string;
  email: string;
  name: string;
  isPremium: boolean;
  createdAt?: string;
}

function Profile() {
  const navigate = useNavigate();
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("aniFlow_token");
    const stored = localStorage.getItem("aniFlow_session");

    // No token — redirect to login immediately
    if (!token) {
      navigate({ to: "/login" });
      return;
    }

    // Verify session via apiGetMe
    apiGetMe(token).then((result) => {
      if (result.success && result.user) {
        const userData: Session = {
          id: result.user.id,
          email: result.user.email,
          name: result.user.name,
          isPremium: result.user.isPremium,
          createdAt: (result.user as any).createdAt,
        };
        setSession(userData);
        // Update localStorage with verified data
        localStorage.setItem("aniFlow_session", JSON.stringify(userData));
        setVerified(true);
      } else {
        // Invalid/expired token — clear and redirect
        localStorage.removeItem("aniFlow_token");
        localStorage.removeItem("aniFlow_session");
        navigate({ to: "/login" });
      }
      setLoading(false);
    }).catch(() => {
      localStorage.removeItem("aniFlow_token");
      localStorage.removeItem("aniFlow_session");
      navigate({ to: "/login" });
    });

    // Also set initial session from localStorage for fast first render
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setSession(parsed);
      } catch {}
    }
  }, []);

  // Fetch watchlist count (only after session verified)
  const { data: watchlist } = useQuery({
    queryKey: ["watchlist", session?.id],
    queryFn: () => fetchWatchlist(session!.id),
    enabled: !!session?.id && verified,
  });

  const watchlistCount = watchlist?.length ?? 0;

  const handleLogout = () => {
    localStorage.removeItem("aniFlow_token");
    localStorage.removeItem("aniFlow_session");
    navigate({ to: "/" });
  };

  // Loading state while verifying
  if (loading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-black">
        <div className="w-8 h-8 border-2 border-anime-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // Should never happen (we redirect), but safety fallback
  if (!session) {
    return null;
  }

  return (
    <div className="bg-black min-h-screen">
      {/* Profile Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-anime-900 via-surface to-black opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(140,26,255,0.15),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Avatar */}
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-anime-500 to-accent flex items-center justify-center shrink-0 shadow-lg shadow-anime-500/20">
              <span className="text-4xl font-bold text-white">
                {session.name.charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-white">{session.name}</h1>
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                    session.isPremium
                      ? "bg-yellow-500/20 border border-yellow-500/30 text-yellow-400"
                      : "bg-gray-500/20 border border-gray-500/30 text-gray-400"
                  }`}
                >
                  {session.isPremium ? (
                    <>
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Premium
                    </>
                  ) : (
                    "Free"
                  )}
                </span>
              </div>
              <p className="text-gray-400 text-sm">{session.email}</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleLogout}
                className="btn-secondary text-sm !px-4 !py-2"
              >
                <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content — Left (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Account Tier Card */}
            <div className="glass-card p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-white">Account</h2>
              </div>

              {session.isPremium ? (
                <div>
                  <div className="flex items-center gap-3 mb-4 p-4 rounded-xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Premium Member</h3>
                      <p className="text-sm text-gray-400">You're on the Premium plan at $5.99/month</p>
                    </div>
                  </div>

                  {/* Premium Benefits */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {[
                      { icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z", label: "Ad-Free Experience" },
                      { icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z", label: "Early Simulcast Access" },
                      { icon: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z", label: "Offline Downloads" },
                      { icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z", label: "HD & 4K Quality" },
                    ].map((benefit) => (
                      <div key={benefit.label} className="flex items-center gap-3 p-3 rounded-lg bg-surface">
                        <svg className="w-5 h-5 text-yellow-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d={benefit.icon} />
                        </svg>
                        <span className="text-sm text-gray-300">{benefit.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Manage Subscription */}
                  <div className="border-t border-white/5 pt-4">
                    <h4 className="text-sm font-semibold text-white mb-3">Subscription Management</h4>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button className="btn-secondary text-sm !px-4 !py-2" disabled>
                        <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                        Update Payment Method
                      </button>
                      <button className="btn-secondary text-sm !px-4 !py-2 text-red-400 border-red-500/30 hover:border-red-400" disabled>
                        Cancel Subscription
                      </button>
                    </div>
                    <p className="text-xs text-gray-600 mt-3">Subscription management is coming soon. Contact support for changes.</p>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center gap-3 mb-4 p-4 rounded-xl bg-surface-lighter border border-white/5">
                    <div className="w-12 h-12 rounded-xl bg-gray-700 flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Free Account</h3>
                      <p className="text-sm text-gray-400">You're on the Free tier</p>
                    </div>
                  </div>

                  {/* Free Tier Limitations */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                      <svg className="w-4 h-4 text-red-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Ad-supported viewing
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                      <svg className="w-4 h-4 text-red-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      1-week simulcast delay on new episodes
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                      <svg className="w-4 h-4 text-red-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Standard quality (720p)
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                      <svg className="w-4 h-4 text-red-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      No offline downloads
                    </div>
                  </div>

                  {/* Upgrade CTA */}
                  <div className="p-5 rounded-xl bg-gradient-to-r from-anime-500/10 to-accent/10 border border-anime-500/20">
                    <h4 className="font-bold text-white mb-2">Ready to upgrade?</h4>
                    <p className="text-sm text-gray-400 mb-4">
                      Get ad-free HD streaming, early simulcast access, and offline downloads.
                    </p>
                    <Link to="/pricing" className="btn-premium text-sm !px-5 !py-2.5">
                      <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Upgrade to Premium — $5.99/mo
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Stats Card */}
            <div className="glass-card p-6">
              <h2 className="text-lg font-bold text-white mb-4">Your Stats</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-surface text-center">
                  <p className="text-3xl font-bold text-white mb-1">{watchlistCount}</p>
                  <p className="text-xs text-gray-500">In Watchlist</p>
                </div>
                <div className="p-4 rounded-xl bg-surface text-center">
                  <p className="text-3xl font-bold text-white mb-1">0</p>
                  <p className="text-xs text-gray-500">Watched</p>
                </div>
                <div className="p-4 rounded-xl bg-surface text-center">
                  <p className="text-3xl font-bold text-white mb-1">0</p>
                  <p className="text-xs text-gray-500">Hours</p>
                </div>
                <div className="p-4 rounded-xl bg-surface text-center">
                  <p className="text-3xl font-bold text-white mb-1">0</p>
                  <p className="text-xs text-gray-500">Reviews</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="glass-card p-6">
              <h2 className="text-lg font-bold text-white mb-4">Quick Links</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link to="/watchlist" className="flex items-center gap-3 p-3 rounded-lg bg-surface hover:bg-surface-light transition-colors">
                  <svg className="w-5 h-5 text-anime-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                  </svg>
                  <span className="text-sm text-gray-300">My Watchlist</span>
                </Link>
                <Link to="/browse" className="flex items-center gap-3 p-3 rounded-lg bg-surface hover:bg-surface-light transition-colors">
                  <svg className="w-5 h-5 text-anime-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                  <span className="text-sm text-gray-300">Browse Anime</span>
                </Link>
                <Link to="/pricing" className="flex items-center gap-3 p-3 rounded-lg bg-surface hover:bg-surface-light transition-colors">
                  <svg className="w-5 h-5 text-yellow-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-sm text-gray-300">Plans & Pricing</span>
                </Link>
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg bg-surface hover:bg-surface-light transition-colors">
                  <svg className="w-5 h-5 text-anime-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                  </svg>
                  <span className="text-sm text-gray-300">Help & Support</span>
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar — Right */}
          <div className="space-y-6">
            {/* Account Details Card */}
            <div className="glass-card p-6">
              <h2 className="text-lg font-bold text-white mb-4">Details</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Name</p>
                  <p className="text-sm text-white font-medium">{session.name}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Email</p>
                  <p className="text-sm text-white font-medium">{session.email}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Account Tier</p>
                  <p className={`text-sm font-medium ${session.isPremium ? "text-yellow-400" : "text-gray-400"}`}>
                    {session.isPremium ? "Premium" : "Free"}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Member Since</p>
                  <p className="text-sm text-white font-medium">
                    {session.createdAt
                      ? new Date(session.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
                      : "—"}
                  </p>
                </div>
              </div>
            </div>

            {/* Continue Watching Placeholder */}
            <div className="glass-card p-6">
              <h2 className="text-lg font-bold text-white mb-4">Continue Watching</h2>
              <div className="text-center py-8">
                <svg className="w-12 h-12 text-gray-700 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                </svg>
                <p className="text-sm text-gray-500">Nothing here yet</p>
                <Link to="/browse" className="text-sm text-anime-400 hover:text-anime-300 transition-colors mt-1 inline-block">
                  Start watching →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-16" />
    </div>
  );
}
