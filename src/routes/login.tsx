import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { logIn } from "~/lib/api";

export const Route = createFileRoute("/login")({
  component: Login,
});

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const result = await logIn({ email, password });
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
        setError(result.error || "Invalid email or password");
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
          <h1 className="text-2xl font-bold text-white">Welcome back</h1>
          <p className="text-gray-400 mt-1">Sign in to continue watching</p>
        </div>

        <div className="glass-card p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                {error}
              </div>
            )}
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
                className="w-full px-4 py-2.5 bg-surface rounded-lg border border-white/5 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-anime-400 transition-colors"
                placeholder="••••••••"
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Don't have an account?{" "}
              <Link to="/signup" className="text-anime-400 hover:text-anime-300 transition-colors">
                Sign up free
              </Link>
            </p>
          </div>

          {/* Demo accounts hint */}
          <div className="mt-6 p-3 rounded-lg bg-surface-lighter border border-white/5">
            <p className="text-xs text-gray-500 mb-2">Demo accounts:</p>
            <p className="text-xs text-gray-600">Free: demo@aniflow.app / password123</p>
            <p className="text-xs text-gray-600">Premium: premium@aniflow.app / password123</p>
          </div>
        </div>
      </div>
    </div>
  );
}