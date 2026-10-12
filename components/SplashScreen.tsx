"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

export default function SplashScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const blobUrlRef = useRef<string | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const [isFading, setIsFading] = useState(false);
  const [visible, setVisible] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [videoBlobUrl, setVideoBlobUrl] = useState<string | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Close & clean up helper
  const handleSkip = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    setIsFading(true);
    setTimeout(() => {
      setVisible(false);
      onComplete();
      if (blobUrlRef.current) {
        URL.revokeObjectURL(blobUrlRef.current);
        blobUrlRef.current = null;
      }
    }, 400);
  }, [onComplete]);

  // Mark client mount & check mobile screen
  useEffect(() => {
    if (window.innerWidth < 768) {
      setVisible(false);
      onComplete();
      return;
    }
    setHasMounted(true);

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisible(false);
        onComplete();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [onComplete]);

  // Listen for Escape key to skip
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleSkip();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleSkip]);

  // Fetch the entire intro video into memory before starting playback
  useEffect(() => {
    if (!hasMounted) return;

    const controller = new AbortController();
    abortControllerRef.current = controller;

    const loadVideo = async () => {
      try {
        const response = await fetch("/newIntro.mp4", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Failed to load video: ${response.statusText}`);
        }

        if (!response.body) {
          // Fallback if ReadableStream is not available
          const blob = await response.blob();
          if (controller.signal.aborted) return;
          const url = URL.createObjectURL(blob);
          blobUrlRef.current = url;
          setProgress(100);
          setVideoBlobUrl(url);
          return;
        }

        const contentLength = response.headers.get("content-length");
        // Fallback to approximate size (~29.8MB) if Content-Length is absent
        const totalLength = contentLength ? parseInt(contentLength, 10) : 29846880;

        const reader = response.body.getReader();
        const chunks: BlobPart[] = [];
        let receivedLength = 0;

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          if (controller.signal.aborted) return;

          chunks.push(value);
          receivedLength += value.length;

          if (totalLength > 0) {
            const pct = Math.min(Math.round((receivedLength / totalLength) * 100), 100);
            setProgress(pct);
          }
        }

        const blob = new Blob(chunks, { type: "video/mp4" });
        if (controller.signal.aborted) return;

        const url = URL.createObjectURL(blob);
        blobUrlRef.current = url;
        setProgress(100);
        setVideoBlobUrl(url);
      } catch (err: unknown) {
        if (err instanceof DOMException && err.name === "AbortError") return;
        console.warn("Could not preload intro video fully, proceeding to site:", err);
        // Fallback gracefully so site remains accessible
        setIsFading(true);
        setTimeout(() => {
          setVisible(false);
          onComplete();
        }, 500);
      }
    };

    loadVideo();

    return () => {
      controller.abort();
      if (blobUrlRef.current) {
        URL.revokeObjectURL(blobUrlRef.current);
        blobUrlRef.current = null;
      }
    };
  }, [hasMounted, onComplete]);

  // Once the entire video has been loaded as a blob, attach and play
  useEffect(() => {
    if (!videoBlobUrl || !videoRef.current) return;

    const video = videoRef.current;
    const bgVideo = bgVideoRef.current;

    video.src = videoBlobUrl;
    if (bgVideo) bgVideo.src = videoBlobUrl;

    video.playbackRate = 1.2;
    if (bgVideo) bgVideo.playbackRate = 1.2;

    const startPlayback = () => {
      setIsVideoPlaying(true);
      const playPromise = video.play();
      if (bgVideo) bgVideo.play().catch(() => {});

      playPromise.catch((err) => {
        console.warn("Autoplay blocked or failed:", err);
        setIsFading(true);
        setTimeout(() => {
          setVisible(false);
          onComplete();
        }, 800);
      });
    };

    if (video.readyState >= 3) {
      startPlayback();
    } else {
      video.addEventListener("canplaythrough", startPlayback, { once: true });
      video.load();
      if (bgVideo) bgVideo.load();
      return () => {
        video.removeEventListener("canplaythrough", startPlayback);
      };
    }
  }, [videoBlobUrl, onComplete]);

  const handleVideoEnd = useCallback(() => {
    setIsFading(true);
    // Allow the fade-out animation to complete before unmounting
    setTimeout(() => {
      setVisible(false);
      onComplete();
      if (blobUrlRef.current) {
        URL.revokeObjectURL(blobUrlRef.current);
        blobUrlRef.current = null;
      }
    }, 800);
  }, [onComplete]);

  // SSR & pre-mount: render a static black div for hydration match (hidden on mobile)
  if (!hasMounted) return <div className="splash-screen hidden md:flex" />;
  if (!visible) return null;

  return (
    <div
      className="splash-screen hidden md:flex relative overflow-hidden bg-black select-none"
      style={{
        opacity: isFading ? 0 : 1,
        transition: "opacity 0.8s ease-in-out",
      }}
    >
      {/* Skip Button */}
      <button
        onClick={handleSkip}
        className="absolute top-6 right-8 z-50 px-4 py-2 text-xs uppercase tracking-widest text-[#D4AF6A]/70 hover:text-[#F2C94C] bg-white/5 hover:bg-white/10 border border-[#D4AF6A]/20 hover:border-[#D4AF6A]/50 rounded-full transition-all duration-300 backdrop-blur-md cursor-pointer flex items-center gap-1.5"
        aria-label="Skip intro"
      >
        <span>Skip Intro</span>
        <span className="text-[10px] opacity-60">Esc</span>
      </button>

      {/* Loading Screen Overlay (Visible while preloading the entire video) */}
      <div
        className={`absolute inset-0 z-20 flex flex-col items-center justify-center bg-black transition-opacity duration-700 pointer-events-none ${
          isVideoPlaying ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Ambient Radial Golden Glow */}
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(212,175,106,0.18)_0%,transparent_70%)] blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
          {/* Logo with gentle pulse */}
          <div className="relative w-24 h-24 mb-6 flex items-center justify-center animate-pulse">
            <Image
              src="/goldentree.png"
              alt="Creators Oak"
              width={96}
              height={96}
              priority
              className="object-contain drop-shadow-[0_0_20px_rgba(212,175,106,0.5)]"
            />
          </div>

          {/* Brand Name */}
          <h2 className="font-serif text-2xl tracking-[0.25em] text-[#EBE5DB] uppercase mb-2">
            Creators <span className="text-[#D4AF6A]">Oak</span>
          </h2>

          {/* Status Text & Percentage */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D4AF6A]/80 mb-4 font-mono">
            <span>Loading Experience</span>
            <span>•</span>
            <span className="w-9 text-right font-semibold">{progress}%</span>
          </div>

          {/* Elegant Progress Bar */}
          <div className="w-56 h-[3px] bg-white/10 rounded-full overflow-hidden relative shadow-[0_0_10px_rgba(0,0,0,0.5)]">
            <div
              className="h-full bg-gradient-to-r from-[#D4AF6A] to-[#F2C94C] rounded-full transition-all duration-150 ease-out shadow-[0_0_8px_rgba(212,175,106,0.9)]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Background Ambient Video (Zero network buffering, plays from local blob) */}
      <video
        ref={bgVideoRef}
        muted
        playsInline
        className={`absolute inset-0 w-full h-full object-cover opacity-30 blur-sm scale-110 pointer-events-none transition-opacity duration-700 ${
          isVideoPlaying ? "opacity-30" : "opacity-0"
        }`}
      />

      {/* Main Video with Vignette */}
      <div
        className={`relative z-10 w-full h-full transition-opacity duration-700 ${
          isVideoPlaying ? "opacity-100" : "opacity-0"
        }`}
      >
        <video
          ref={videoRef}
          muted
          playsInline
          onEnded={handleVideoEnd}
          className="w-full h-full object-contain md:object-cover"
        />
        {/* Vignette Overlay for fading edges */}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_100px_rgba(0,0,0,1)] md:shadow-[inset_0_0_150px_100px_rgba(0,0,0,1)]" />
      </div>
    </div>
  );
}
