"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export default function SplashScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isFading, setIsFading] = useState(false);
  const [visible, setVisible] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);

  // Mark client mount
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Auto-play the video once mounted
  useEffect(() => {
    if (!hasMounted || !videoRef.current) return;
    videoRef.current.playbackRate = 1.2;
    // Attempt autoplay (muted is required for autoplay in most browsers)
    videoRef.current.play().catch(() => {
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

  // SSR & pre-mount: render a static black div for hydration match
  if (!hasMounted) return <div className="splash-screen" />;
  if (!visible) return null;

  return (
    <div
      className="splash-screen"
      style={{
        opacity: isFading ? 0 : 1,
        transition: "opacity 0.8s ease-in-out",
      }}
    >
      <video
        ref={videoRef}
        src="/newintro.mp4"
        muted
        playsInline
        onEnded={handleVideoEnd}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
}
