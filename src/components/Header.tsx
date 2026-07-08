import { Link } from "@tanstack/react-router";
import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-anime-dark/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="AniFlow"
              className="w-8 h-8 rounded-lg object-cover group-hover:scale-105 transition-transform"
            />
            <span className="text-xl font-bold text-gradient">AniFlow</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className="text-sm text-gray-400 hover:text-white transition-colors"
              activeProps={{ className: "text-white font-medium" }}
              activeOptions={{ exact: true }}
            >
              Home
            </Link>
            <Link
              to="/browse"
              className="text-sm text-gray-400 hover:text-white transition-colors"
              activeProps={{ className: "text-white font-medium" }}
            >
              Browse
            </Link>
            <Link
              to="/watchlist"
              className="text-sm text-gray-400 hover:text-white transition-colors"
              activeProps={{ className: "text-white font-medium" }}
            >
              Watchlist
            </Link>
            <Link
              to="/pricing"
              className="text-sm text-gray-400 hover:text-white transition-colors"
              activeProps={{ className: "text-white font-medium" }}
            >
              Pricing
            </Link>
          </nav>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/login" className="btn-secondary text-sm !px-4 !py-2">
              Log In
            </Link>
            <Link to="/signup" className="btn-primary text-sm !px-4 !py-2">
              Sign Up Free
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface border-t border-white/5 animate-fade-in">
          <div className="px-4 py-4 space-y-3">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-gray-400 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              to="/browse"
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-gray-400 hover:text-white transition-colors"
            >
              Browse
            </Link>
            <Link
              to="/watchlist"
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-gray-400 hover:text-white transition-colors"
            >
              Watchlist
            </Link>
            <Link
              to="/pricing"
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-gray-400 hover:text-white transition-colors"
            >
              Pricing
            </Link>
            <div className="pt-3 border-t border-white/5 flex gap-3">
              <Link to="/login" onClick={() => setMenuOpen(false)} className="btn-secondary text-sm !px-4 !py-2 flex-1 text-center">
                Log In
              </Link>
              <Link to="/signup" onClick={() => setMenuOpen(false)} className="btn-primary text-sm !px-4 !py-2 flex-1 text-center">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}