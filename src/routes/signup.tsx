import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { signUp } from "~/lib/api";

export const Route = createFileRoute("/signup")({
  component: Signup,
});

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const result = await signUp({ name, email, password });
      if (result.success && result.user) {
        // Store session in localStorage
        localStorage.setItem(
          "aniFlow_session",
          JSON.stringify({
            id: result.user.id,
            email: result.user.email,
            name: result.user.name,
            isPremium: result.user.isPremium,
          })
        );
        navigate({ to: "/" });
      } else {
        setError(result.error || "An error occurred during signup");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <img src="/logo.png" alt="AniFlow" className="w-10 h-10 rounded-lg" />
            <span className="text-2xl font-bold text-gradient">AniFlow</span>
          </Link>
          <h1 className="text-2xl font-bold text-white">Create your account</h1>
          <p className="text-gray-400 mt-1">Start streaming anime for free</p>
        </div>

        <div className="glass-card p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                {error}
              </div>
            )}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2.5 bg-surface rounded-lg border border-white/5 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-anime-400 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2.5 bg-surface rounded-lg border border-white/5 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-anime-400 transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1.5">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="w-full px-4 py-2.5 bg-surface rounded-lg border border-white/5 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-anime-400 transition-colors"
                placeholder="At least 6 characters"
              />
            </div>
            <p className="text-xs text-gray-600">
              By signing up, you agree to our Terms of Service and Privacy Policy.
            </p>
            <button type="submit" className="btn-primary w-full">
              Create Free Account
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <Link to="/login" className="text-anime-400 hover:text-anime-300 transition-colors">
                Sign in
              </Link>
            </p>
          </div>

          {/* Free Tier Notice */}
          <div className="mt-6 glass-card p-4 flex items-start gap-3">
            <svg className="w-5 h-5 text-green-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-xs text-gray-500">
              Free account includes ad-supported streaming, standard quality, and limited simulcast delay. 
              <Link to="/pricing" className="text-anime-400 hover:text-anime-300 ml-1">Upgrade to Premium</Link> for ad-free, HD/4K, early access, and offline downloads.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}