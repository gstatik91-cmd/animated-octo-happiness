import { useEffect, useRef, useState, useCallback } from "react";
import Plyr from "plyr";
import "plyr/dist/plyr.css";
import { getResume, saveResume } from "~/lib/addons/manager";
import type { Stream } from "~/lib/addons/types";

interface EpisodeMeta {
  animeId: string;
  number: number;
  title: string;
  thumbnail?: string;
}

interface VideoPlayerProps {
  /** Primary source URL to play (YouTube or direct video). */
  source: string;
  /** Optional list of alternate sources (used for the Sources menu). */
  streams?: Stream[];
  /** Which stream is currently active, if any. */
  activeStreamTitle?: string;
  title: string;
  poster?: string;
  onEnded?: () => void;
  onTimeUpdate?: (currentTime: number) => void;
  /** Skip-intro window, in seconds. */
  skipIntroAfter?: number;
  skipIntroTo?: number;
  /** Episode metadata for resume + auto-play-next. */
  episodeMeta?: EpisodeMeta;
  /** Auto-play-next metadata. */
  nextEpisode?: (EpisodeMeta & { animeId: string }) | null;
  /** Called when the user opts into navigating to the next episode. */
  onNextEpisode?: () => void;
  /** Called when the user selects a different stream from the Sources menu. */
  onSelectStream?: (stream: Stream) => void;
}

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) seconds = 0;
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  if (h > 0) return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  return `${m}:${String(s).padStart(2, "0")}`;
}

export function VideoPlayer({
  source,
  streams = [],
  activeStreamTitle,
  title,
  poster,
  onEnded,
  onTimeUpdate,
  skipIntroAfter = 85,
  skipIntroTo = 90,
  episodeMeta,
  nextEpisode,
  onNextEpisode,
  onSelectStream,
}: VideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<Plyr | null>(null);
  const onEndedRef = useRef(onEnded);
  const onTimeUpdateRef = useRef(onTimeUpdate);
  const onNextEpisodeRef = useRef(onNextEpisode);

  const [ready, setReady] = useState(false);
  const [error, setError] = useState(false);
  const [buffering, setBuffering] = useState(false);
  const [showSkipIntro, setShowSkipIntro] = useState(false);
  const [resumePoint, setResumePoint] = useState<number | null>(null);
  const [nextCountdown, setNextCountdown] = useState<number | null>(null);
  const [sourcesOpen, setSourcesOpen] = useState(false);

  // Keep latest callbacks in refs so event handlers don't go stale.
  useEffect(() => {
    onEndedRef.current = onEnded;
  }, [onEnded]);
  useEffect(() => {
    onTimeUpdateRef.current = onTimeUpdate;
  }, [onTimeUpdate]);
  useEffect(() => {
    onNextEpisodeRef.current = onNextEpisode;
  }, [onNextEpisode]);

  // ── Initialize Plyr ──────────────────────────────────────────
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const player = new Plyr(el, {
      controls: [
        "play-large",
        "play",
        "progress",
        "current-time",
        "duration",
        "mute",
        "volume",
        "settings",
        "pip",
        "airplay",
        "fullscreen",
      ],
      settings: ["speed"],
      speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5, 2] },
      hideControls: true,
      clickToPlay: true,
      keyboard: { focused: true, global: true },
      tooltips: { controls: true, seek: true },
      ratio: "16:9",
      youtube: { noCookie: true, rel: 0, modestbranding: 1, iv_load_policy: 3 },
      i18n: {
        speed: "Speed",
        normal: "Normal",
      },
    });

    playerRef.current = player;

    // Determine source type from the URL.
    const isYouTube =
      source.includes("youtube.com") || source.includes("youtu.be") ||
      source.includes("youtube-nocookie.com");

    player.source = {
      type: "video",
      title,
      sources: [
        {
          src: source,
          provider: isYouTube ? "youtube" : "html5",
        },
      ],
      poster,
    };

    const onReady = () => setReady(true);
    const onWaiting = () => setBuffering(true);
    const onPlaying = () => setBuffering(false);
    const onCanPlay = () => setBuffering(false);
    const onError = () => {
      setBuffering(false);
      setError(true);
    };

    player.on("ready", onReady);
    player.on("waiting", onWaiting);
    player.on("playing", onPlaying);
    player.on("canplay", onCanPlay);
    player.on("error", onError);

    // Auto-hide / show skip-intro button as time advances.
    const onTime = () => {
      const t = player.currentTime;
      onTimeUpdateRef.current?.(t);
      if (
        skipIntroAfter > 0 &&
        skipIntroTo > skipIntroAfter &&
        t >= skipIntroAfter &&
        t < skipIntroTo
      ) {
        setShowSkipIntro(true);
      } else {
        setShowSkipIntro(false);
      }
    };
    player.on("timeupdate", onTime);

    // Auto-play next.
    const onEndedHandler = () => {
      if (nextEpisode) {
        setNextCountdown(5);
      } else {
        onEndedRef.current?.();
      }
    };
    player.on("ended", onEndedHandler);

    return () => {
      player.destroy();
      playerRef.current = null;
      setReady(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [source]);

  // ── Auto-play-next countdown ─────────────────────────────────
  useEffect(() => {
    if (nextCountdown === null) return;
    if (nextCountdown <= 0) {
      setNextCountdown(null);
      onNextEpisodeRef.current?.();
      return;
    }
    const id = setTimeout(() => setNextCountdown((n) => (n === null ? null : n - 1)), 1000);
    return () => clearTimeout(id);
  }, [nextCountdown]);

  // ── Resume from localStorage ─────────────────────────────────
  useEffect(() => {
    if (!episodeMeta || !ready) return;
    const saved = getResume(episodeMeta.animeId ?? "", episodeMeta.number);
    if (saved && saved > 3) {
      setResumePoint(saved);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready, episodeMeta?.number]);

  const handleResume = useCallback(() => {
    const player = playerRef.current;
    if (player && resumePoint) {
      player.currentTime = resumePoint;
    }
    setResumePoint(null);
  }, [resumePoint]);

  const handleStartOver = useCallback(() => {
    const player = playerRef.current;
    if (player) player.currentTime = 0;
    setResumePoint(null);
  }, []);

  const handleSkipIntro = useCallback(() => {
    const player = playerRef.current;
    if (player) player.currentTime = skipIntroTo;
    setShowSkipIntro(false);
  }, [skipIntroTo]);

  const handleCancelNext = useCallback(() => {
    setNextCountdown(null);
  }, []);

  // ── Persist resume every 5s on timeupdate ────────────────────
  useEffect(() => {
    if (!episodeMeta) return;
    const player = playerRef.current;
    if (!player) return;
    let lastSaved = 0;
    const onTick = () => {
      const now = Date.now();
      if (now - lastSaved >= 5000) {
        lastSaved = now;
        saveResume(episodeMeta.animeId ?? "", episodeMeta.number, player.currentTime);
      }
    };
    player.on("timeupdate", onTick);
    return () => {
      player.off("timeupdate", onTick);
    };
  }, [episodeMeta]);

  const activeStream = streams.find((s) => s.title === activeStreamTitle);

  return (
    <div ref={containerRef} className="relative bg-black w-full aspect-video">
      {/* Skeleton shimmer while initializing */}
      {!ready && !error && (
        <div className="absolute inset-0 z-10 bg-surface-light animate-pulse flex items-center justify-center">
          <div className="w-16 h-16 rounded-full border-4 border-anime-500/30 border-t-anime-500 animate-spin" />
        </div>
      )}

      {/* Buffering spinner */}
      {buffering && !error && (
        <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center bg-black/40">
          <div className="w-14 h-14 rounded-full border-4 border-white/20 border-t-anime-400 animate-spin" />
        </div>
      )}

      {/* Plyr mount point */}
      <video ref={videoRef} playsInline crossOrigin="anonymous" className="w-full h-full" />

      {/* Error state */}
      {error && (
        <div className="absolute inset-0 z-30 bg-black flex flex-col items-center justify-center text-center px-6">
          <div className="w-16 h-16 rounded-full bg-red-500/15 border border-red-500/30 flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-gray-300 font-semibold mb-1">This video is unavailable</p>
          <p className="text-gray-500 text-sm">
            The stream may be region-locked or unavailable in your country. Try another source below.
          </p>
        </div>
      )}

      {/* Skip Intro button */}
      {showSkipIntro && !error && (
        <button
          onClick={handleSkipIntro}
          className="absolute bottom-20 right-4 z-30 px-4 py-2 rounded-md bg-white/15 backdrop-blur-md border border-white/25 text-white text-sm font-semibold hover:bg-white/25 transition-colors"
        >
          Skip Intro
        </button>
      )}

      {/* Resume snackbar */}
      {resumePoint !== null && !error && (
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg px-4 py-3">
          <span className="text-sm text-gray-200">
            Resume from <span className="text-white font-semibold">{formatTime(resumePoint)}</span>?
          </span>
          <button onClick={handleResume} className="btn-primary text-xs !px-3 !py-1.5">Resume</button>
          <button onClick={handleStartOver} className="btn-secondary text-xs !px-3 !py-1.5">Start Over</button>
        </div>
      )}

      {/* Auto-play next overlay */}
      {nextCountdown !== null && nextEpisode && (
        <div className="absolute inset-0 z-40 bg-black/80 backdrop-blur-sm flex items-center justify-center">
          <div className="text-center max-w-sm px-6">
            <div className="mb-4">
              {nextEpisode.thumbnail ? (
                <img src={nextEpisode.thumbnail} alt="" className="w-40 h-24 object-cover rounded-lg mx-auto" />
              ) : (
                <div className="w-40 h-24 rounded-lg bg-surface-lighter mx-auto flex items-center justify-center">
                  <svg className="w-10 h-10 text-gray-500" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </div>
              )}
            </div>
            <p className="text-sm text-gray-400 mb-1">Up next</p>
            <h3 className="text-lg font-bold text-white mb-1">
              Episode {nextEpisode.number}: {nextEpisode.title}
            </h3>
            <p className="text-gray-400 mb-5">
              Next episode in <span className="text-white font-bold">{nextCountdown}</span>...
            </p>
            <div className="flex items-center gap-3 justify-center">
              <button onClick={onNextEpisode} className="btn-primary text-sm !px-5 !py-2.5">
                <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                Play Now
              </button>
              <button onClick={handleCancelNext} className="btn-secondary text-sm !px-5 !py-2.5">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Sources menu */}
      {sourcesOpen && (
        <div className="absolute right-4 top-16 z-40 w-72 bg-surface-lighter border border-white/10 rounded-xl shadow-2xl overflow-hidden">
          <div className="px-4 py-3 border-b border-white/10">
            <p className="text-sm font-semibold text-white">Stream Sources</p>
            {activeStream && <p className="text-xs text-gray-500 mt-0.5">Currently: {activeStream.title}</p>}
          </div>
          <div className="max-h-72 overflow-y-auto py-2">
            {streams.length === 0 && (
              <p className="px-4 py-3 text-sm text-gray-500">No alternate sources available.</p>
            )}
            {streams.map((s, i) => (
              <button
                key={`${s.source}-${i}`}
                onClick={() => {
                  onSelectStream?.(s);
                  setSourcesOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 hover:bg-white/5 transition-colors flex items-center gap-3 ${
                  s.title === activeStreamTitle ? "bg-anime-500/15" : ""
                }`}
              >
                <span className="text-lg shrink-0">{s.source === "legal-streams" ? "🇸🇬" : "🎬"}</span>
                <span className="flex-1 min-w-0">
                  <span className="block text-sm text-gray-200 truncate">{s.title}</span>
                  {s.note && <span className="block text-xs text-gray-500 truncate">{s.note}</span>}
                </span>
                {s.quality && (
                  <span className="text-[10px] font-semibold text-gray-400 border border-white/15 rounded px-1.5 py-0.5 shrink-0">
                    {s.quality}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Sources toggle button */}
      <button
        onClick={() => setSourcesOpen((v) => !v)}
        className="absolute top-4 right-4 z-30 px-3 py-1.5 rounded-md bg-black/60 backdrop-blur-md border border-white/15 text-gray-200 text-xs font-semibold hover:bg-black/80 transition-colors flex items-center gap-1.5"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h10" />
        </svg>
        Sources
      </button>
    </div>
  );
}
