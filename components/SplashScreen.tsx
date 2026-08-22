"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

/* ─── Types ─── */
type SplashPhase = "dark" | "reveal" | "glow" | "fadeout";

interface ParticleConfig {
  left: number;
  bottom: number;
  size: number;
  yDrift: number;
  xDrift: number;
  duration: number;
  delay: number;
}

/* ─── Constants ─── */
const PARTICLE_COUNT = 24;

/** Timeline durations in ms — single source of truth for the animation sequence */
const TIMING = {
  darkToReveal: 500,
  revealToGlow: 1800,
  glowToFadeout: 3400,
  unmount: 4600,
} as const;

/* ─── Animation configs (extracted to avoid inline object re-creation) ─── */
const TREE_TRANSITION = { duration: 1.2, ease: [0.22, 1, 0.36, 1] } as const;
const GLOW_TRANSITION = { duration: 1.4, ease: "easeInOut" } as const;
const TEXT_TRANSITION = { duration: 0.8, ease: "easeOut", delay: 0.15 } as const;
const RING_TRANSITION = { duration: 2.2, ease: "easeOut" } as const;
const FADE_TRANSITION = { duration: 1.2, ease: "easeInOut" } as const;

/* ─── Helpers ─── */
function generateParticles(): ParticleConfig[] {
  return Array.from({ length: PARTICLE_COUNT }, () => ({
    left: 25 + Math.random() * 50,
    bottom: 25 + Math.random() * 30,
    size: 2 + Math.random() * 3,
    yDrift: -(60 + Math.random() * 140),
    xDrift: (Math.random() - 0.5) * 120,
    duration: 1.8 + Math.random() * 1.5,
    delay: Math.random() * 0.6,
  }));
}

/* ─── Component ─── */
export default function SplashScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [phase, setPhase] = useState<SplashPhase>("dark");
  const [visible, setVisible] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);

  // Generate particle positions only on client (avoids hydration mismatch)
  const particles = useMemo<ParticleConfig[]>(
    () => (hasMounted ? generateParticles() : []),
    [hasMounted]
  );

  // Mark client mount
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Phase timeline
  useEffect(() => {
    if (!hasMounted) return;

    const timers = [
      setTimeout(() => setPhase("reveal"), TIMING.darkToReveal),
      setTimeout(() => setPhase("glow"), TIMING.revealToGlow),
      setTimeout(() => setPhase("fadeout"), TIMING.glowToFadeout),
      setTimeout(() => {
        setVisible(false);
        onComplete();
      }, TIMING.unmount),
    ];

    return () => timers.forEach(clearTimeout);
  }, [hasMounted, onComplete]);

  // SSR & pre-mount: render a static black div for hydration match
  if (!hasMounted) return <div className="splash-screen" />;
  if (!visible) return null;

  const showTree = phase !== "dark";
  const isGlowing = phase === "glow";
  const isFading = phase === "fadeout";

  return (
    <motion.div
      className="splash-screen"
      animate={{ opacity: isFading ? 0 : 1 }}
      transition={FADE_TRANSITION}
    >
      {/* Radial ambient glow */}
      <motion.div
        className="splash-ambient-glow"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: isFading ? 0 : isGlowing ? 0.7 : showTree ? 0.3 : 0,
          scale: isFading ? 1.3 : isGlowing ? 1.15 : showTree ? 0.85 : 0.5,
        }}
        transition={GLOW_TRANSITION}
      />

      {/* Pulsing ring glow (only during glow phase) */}
      {isGlowing && (
        <motion.div
          className="splash-ring-glow"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: [0, 0.5, 0], scale: [0.7, 1.2, 1.5] }}
          transition={RING_TRANSITION}
        />
      )}

      {/* Floating golden particles */}
      <div className="splash-particles" aria-hidden="true">
        {particles.map((p, i) => (
          <motion.span
            key={i}
            className="splash-particle"
            animate={
              isGlowing
                ? {
                    opacity: [0, 0.9, 0],
                    y: [0, p.yDrift],
                    x: [0, p.xDrift],
                  }
                : { opacity: 0 }
            }
            transition={{
              duration: p.duration,
              delay: p.delay,
              ease: "easeOut",
            }}
            style={{
              left: `${p.left}%`,
              bottom: `${p.bottom}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
          />
        ))}
      </div>

      {/* Tree image with golden glow border */}
      <motion.div
        className="splash-tree-wrapper"
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{
          opacity: isFading ? 0 : showTree ? 1 : 0,
          scale: isFading ? 1.05 : showTree ? 1 : 0.88,
        }}
        transition={TREE_TRANSITION}
      >
        {/* Blurred glow layer behind the tree */}
        <motion.div
          className="splash-tree-glow"
          initial={{ opacity: 0 }}
          animate={{ opacity: isGlowing ? 1 : showTree ? 0.3 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Image
            src="/goldentree.png"
            alt=""
            width={600}
            height={600}
            className="splash-tree-glow-img"
            priority
          />
        </motion.div>

        {/* Main tree image */}
        <Image
          src="/goldentree.png"
          alt="Golden Oak Tree"
          width={600}
          height={600}
          className="splash-tree-img"
          priority
        />
      </motion.div>

      {/* Brand text */}
      <motion.p
        className="splash-brand-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: isFading ? 0 : isGlowing ? 1 : showTree ? 0.5 : 0,
          y: isFading ? -10 : showTree ? 0 : 20,
        }}
        transition={TEXT_TRANSITION}
      >
        Creators Oak
      </motion.p>
    </motion.div>
  );
}
