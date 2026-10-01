import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { exchangeAnilistCode } from "~/lib/api";
import { getViewer } from "~/lib/anilist";

export const Route = createFileRoute("/auth/anilist/callback")({
  component: AniListCallback,
});

function AniListCallback() {
  const navigate = useNavigate();
  const [status, setStatus] = useState<"working" | "success" | "error">("working");
  const [error, setError] = useState("");

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    if (!code) {
      setStatus("error");
      setError("No authorization code was returned by AniList.");
      return;
    }
    exchangeAnilistCode({ code })
      .then(async (res) => {
        if (!res.success) {
          throw new Error(res.error);
        }
        localStorage.setItem("aniflow_anilist_token", res.accessToken);
        try {
          const user = await getViewer(res.accessToken);
          localStorage.setItem(
            "aniflow_anilist_user",
            JSON.stringify({ id: user.id, name: user.name, avatar: user.avatar ?? null })
          );
        } catch {
          // User info is a nicety — the token is what matters.
        }
        setStatus("success");
        setTimeout(() => navigate({ to: "/profile" }), 1200);
      })
      .catch((e) => {
        setStatus("error");
        setError(e instanceof Error ? e.message : "Failed to connect AniList.");
      });
  }, [navigate]);

  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="text-center px-6">
        {status === "working" && (
          <>
            <div className="w-10 h-10 rounded-full border-2 border-anime-500 border-t-transparent animate-spin mx-auto mb-4" />
            <h1 className="text-xl font-bold text-white">Connecting AniList…</h1>
            <p className="text-sm text-gray-500 mt-2">Exchanging your authorization code.</p>
          </>
        )}
        {status === "success" && (
          <>
            <div className="text-3xl mb-3">✓</div>
            <h1 className="text-xl font-bold text-white">AniList connected</h1>
            <p className="text-sm text-gray-500 mt-2">Redirecting to your profile…</p>
          </>
        )}
        {status === "error" && (
          <>
            <div className="text-3xl mb-3">⚠️</div>
            <h1 className="text-xl font-bold text-white">Connection failed</h1>
            <p className="text-sm text-gray-500 mt-2">{error}</p>
            <button
              onClick={() => navigate({ to: "/profile" })}
              className="btn-primary mt-6 !px-5 !py-2"
            >
              Back to profile
            </button>
          </>
        )}
      </div>
    </div>
  );
}
