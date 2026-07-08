import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "~/styles/app.css?url";
import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "AniFlow — Stream the Best Anime. Subbed & Dubbed." },
      { name: "description", content: "A beautifully simple anime streaming app that curates the best anime series and films — both subbed and dubbed — with personalized recommendations, watchlists, and a clutter-free viewing experience." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/logo.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" },
    ],
  }),
  notFoundComponent: () => (
    <div className="min-h-dvh flex flex-col items-center justify-center bg-anime-dark">
      <h1 className="text-6xl font-bold text-anime-400 mb-4">404</h1>
      <p className="text-gray-400 text-lg mb-6">Page not found</p>
      <a href="/" className="btn-primary">Go Home</a>
    </div>
  ),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body className="font-['Inter',sans-serif]">
        <Header />
        <main className="min-h-dvh pt-16">
          {children}
        </main>
        <Footer />
        <Scripts />
      </body>
    </html>
  );
}