import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/pricing")({
  component: Pricing,
});

const features = [
  { name: "Streaming Quality", free: "Standard (720p)", premium: "HD (1080p) & 4K" },
  { name: "Ads", free: "Ad-supported", premium: "Ad-free" },
  { name: "Simulcast Access", free: "24h delay", premium: "Immediate" },
  { name: "Offline Downloads", free: false, premium: true },
  { name: "Watchlist", free: true, premium: true },
  { name: "Sub & Dub", free: true, premium: true },
  { name: "Simultaneous Streams", free: "1", premium: "4" },
];

function Pricing() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          Simple, <span className="text-gradient">Transparent</span> Pricing
        </h1>
        <p className="text-xl text-gray-400 max-w-lg mx-auto">
          Start free. Upgrade when you're ready for the premium experience.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {/* Free */}
        <div className="glass-card p-8">
          <h2 className="text-lg font-semibold text-gray-400 mb-2">Free</h2>
          <div className="mb-6">
            <span className="text-4xl font-extrabold text-white">$0</span>
            <span className="text-gray-500">/month</span>
          </div>
          <p className="text-sm text-gray-500 mb-6">Perfect for getting started with anime</p>
          <Link to="/signup" className="btn-secondary w-full text-center">
            Get Started Free
          </Link>
          <ul className="mt-6 space-y-3">
            {features.map((f) => (
              <li key={f.name} className="flex items-center gap-3 text-sm">
                {f.free === true ? (
                  <svg className="w-4 h-4 text-green-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : f.free === false ? (
                  <svg className="w-4 h-4 text-gray-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-green-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
                <span className="text-gray-400">{f.name}</span>
                <span className="ml-auto text-gray-500 text-xs">{f.free}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Premium */}
        <div className="glass-card p-8 border border-yellow-500/20 relative overflow-hidden">
          {/* Popular badge */}
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-xs font-bold text-gray-900">
              POPULAR
            </span>
          </div>

          <h2 className="text-lg font-semibold text-yellow-400 mb-2">Premium</h2>
          <div className="mb-6">
            <span className="text-4xl font-extrabold text-white">$5.99</span>
            <span className="text-gray-500">/month</span>
          </div>
          <p className="text-sm text-gray-500 mb-6">The ultimate anime experience</p>
          <Link to="/signup" className="btn-premium w-full text-center">
            Start Free Trial
          </Link>
          <ul className="mt-6 space-y-3">
            {features.map((f) => (
              <li key={f.name} className="flex items-center gap-3 text-sm">
                {f.premium === true ? (
                  <svg className="w-4 h-4 text-yellow-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-yellow-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
                <span className="text-gray-300">{f.name}</span>
                <span className="ml-auto text-yellow-400 text-xs font-medium">{f.premium}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-12 text-center">
        <div className="glass-card p-6 inline-flex items-center gap-3">
          <svg className="w-5 h-5 text-anime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-sm text-gray-400">
            Cancel anytime. No long-term contracts. <Link to="/signup" className="text-anime-400 hover:text-anime-300">Start your free trial →</Link>
          </p>
        </div>
      </div>

      <div className="h-16" />
    </div>
  );
}