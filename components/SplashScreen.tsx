"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export default function SplashScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const [isFading, setIsFading] = useState(false);
  const [visible, setVisible] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);

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

  // Auto-play the video once mounted
  useEffect(() => {
    if (!hasMounted || !videoRef.current) return;
    videoRef.current.playbackRate = 1.2;
    if (bgVideoRef.current) bgVideoRef.current.playbackRate = 1.2;

    // Attempt autoplay (muted is required for autoplay in most browsers)
    const playPromise = videoRef.current.play();
    if (bgVideoRef.current) bgVideoRef.current.play().catch(() => {});

    playPromise.catch(() => {
      // If autoplay fails (e.g. browser policy), skip the intro
      setIsFading(true);
      setTimeout(() => {
        setVisible(false);
        onComplete();
      }, 800);
    });
  }, [hasMounted, onComplete]);

  const handleVideoEnd = useCallback(() => {
    setIsFading(true);
    // Allow the fade-out animation to complete before unmounting
    setTimeout(() => {
      setVisible(false);
      onComplete();
    }, 800);
  }, [onComplete]);

  // SSR & pre-mount: render a static black div for hydration match (hidden on mobile)
  if (!hasMounted) return <div className="splash-screen hidden md:flex" />;
  if (!visible) return null;

  return (
    <div
      className="splash-screen hidden md:flex relative overflow-hidden bg-black"
      style={{
        opacity: isFading ? 0 : 1,
        transition: "opacity 0.8s ease-in-out",
      }}
    >
      {/* Background Ambient Video */}
      <video
        ref={bgVideoRef}
        src="/newIntro.mp4"
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30 blur-sm scale-110 pointer-events-none"
      />

      {/* Main Video with Vignette */}
      <div className="relative z-10 w-full h-full">
        <video
          ref={videoRef}
          src="/newIntro.mp4"
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
