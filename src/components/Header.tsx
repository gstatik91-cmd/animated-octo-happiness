import { Link, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [session, setSession] = useState<{ name: string; isPremium: boolean } | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("aniFlow_session");
    if (stored) {
      try {
        setSession(JSON.parse(stored));
      } catch {}
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("aniFlow_token");
    localStorage.removeItem("aniFlow_session");
    setSession(null);
    navigate({ to: "/" });
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-anime-dark/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 group">
            <img src="/logo.png" alt="AniFlow" className="w-8 h-8 rounded-lg object-cover group-hover:scale-105 transition-transform" />
            <span className="text-xl font-bold text-gradient">AniFlow</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors" activeProps={{ className: "text-white font-medium" }} activeOptions={{ exact: true }}>Home</Link>
            <Link to="/browse" className="text-sm text-gray-400 hover:text-white transition-colors" activeProps={{ className: "text-white font-medium" }}>Browse</Link>
            <Link to="/watchlist" className="text-sm text-gray-400 hover:text-white transition-colors" activeProps={{ className: "text-white font-medium" }}>Watchlist</Link>
            <Link to="/pricing" className="text-sm text-gray-400 hover:text-white transition-colors" activeProps={{ className: "text-white font-medium" }}>Pricing</Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            {session ? (
              <>
                <Link to="/profile" className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface hover:bg-surface-light transition-colors" activeProps={{ className: "bg-surface-light ring-1 ring-anime-500/30" }}>
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-anime-500 to-accent flex items-center justify-center">
                    <span className="text-xs font-bold text-white">{session.name.charAt(0).toUpperCase()}</span>
                  </div>
                  <span className="text-sm text-gray-300">{session.name}</span>
                  {session.isPremium && (
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">PRO</span>
                  )}
                </Link>
                <button onClick={handleLogout} className="text-sm text-gray-500 hover:text-gray-300 transition-colors">Sign Out</button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn-secondary text-sm !px-4 !py-2">Log In</Link>
                <Link to="/signup" className="btn-primary text-sm !px-4 !py-2">Sign Up Free</Link>
              </>
            )}
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-gray-400 hover:text-white transition-colors" aria-label="Toggle menu">
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-surface border-t border-white/5 animate-fade-in">
          <div className="px-4 py-4 space-y-3">
            {session && (
              <div className="flex items-center gap-3 pb-3 border-b border-white/5">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-anime-500 to-accent flex items-center justify-center">
                  <span className="text-sm font-bold text-white">{session.name.charAt(0).toUpperCase()}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-white font-medium truncate">{session.name}</p>
                  <p className="text-xs text-gray-500">{session.isPremium ? "Premium" : "Free"}</p>
                </div>
                <Link to="/profile" onClick={() => setMenuOpen(false)} className="text-xs text-anime-400 hover:text-anime-300">View Profile</Link>
              </div>
            )}
            <Link to="/" onClick={() => setMenuOpen(false)} className="block py-2 text-gray-400 hover:text-white transition-colors">Home</Link>
            <Link to="/browse" onClick={() => setMenuOpen(false)} className="block py-2 text-gray-400 hover:text-white transition-colors">Browse</Link>
            <Link to="/watchlist" onClick={() => setMenuOpen(false)} className="block py-2 text-gray-400 hover:text-white transition-colors">Watchlist</Link>
            <Link to="/pricing" onClick={() => setMenuOpen(false)} className="block py-2 text-gray-400 hover:text-white transition-colors">Pricing</Link>
            {session ? (
              <div className="pt-3 border-t border-white/5">
                <button onClick={handleLogout} className="btn-secondary text-sm !px-4 !py-2 w-full">Sign Out</button>
              </div>
            ) : (
              <div className="pt-3 border-t border-white/5 flex gap-3">
                <Link to="/login" onClick={() => setMenuOpen(false)} className="btn-secondary text-sm !px-4 !py-2 flex-1 text-center">Log In</Link>
                <Link to="/signup" onClick={() => setMenuOpen(false)} className="btn-primary text-sm !px-4 !py-2 flex-1 text-center">Sign Up</Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
