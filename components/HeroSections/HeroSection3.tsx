"use client";

import { useState, useRef, MouseEvent, TouchEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
  "/hero_section_3_pics/1.png",
  "/hero_section_3_pics/2.png",
  "/hero_section_3_pics/3.png",
  "/hero_section_3_pics/4.png",
  "/hero_section_3_pics/5.png",
  "/hero_section_3_pics/6.png",
  "/hero_section_3_pics/7.png",
  "/hero_section_3_pics/8.png",
  "/hero_section_3_pics/9.png",
  "/hero_section_3_pics/10.png",
  "/hero_section_3_pics/11.png",
  "/hero_section_3_pics/12.png",
  "/hero_section_3_pics/13.png",
  "/hero_section_3_pics/14.png"
];

type TrailImage = {
  id: string;
  x: number;
  y: number;
  src: string;
  rotation: number;
};

export default function HeroSection3() {
  const [trail, setTrail] = useState<TrailImage[]>([]);
  const lastPointRef = useRef<{ x: number; y: number } | null>(null);
  const indexRef = useRef(0);

  const spawnImage = (x: number, y: number) => {
    if (lastPointRef.current) {
      const dx = x - lastPointRef.current.x;
      const dy = y - lastPointRef.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 80) return;
    }

    lastPointRef.current = { x, y };

    const id = Math.random().toString(36).substring(7);
    const src = images[indexRef.current % images.length];
    const rotation = 0;
    
    indexRef.current += 1;

    setTrail((prev) => [...prev, { id, x, y, src, rotation }]);

    setTimeout(() => {
      setTrail((prev) => prev.filter((img) => img.id !== id));
    }, 2500);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    spawnImage(e.clientX - rect.left, e.clientY - rect.top);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    spawnImage(touch.clientX - rect.left, touch.clientY - rect.top);
  };

  return (
    <section 
      className="relative min-h-[70vh] sm:min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center cursor-crosshair"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* Background instruction text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-[5rem] font-serif text-white/20 select-none text-center leading-tight max-w-5xl px-4">
          Explore the ideas we've grown into reality.
        </h2>
        <p className="mt-4 sm:mt-6 text-[#dfb871] text-xs sm:text-sm md:text-base lg:text-xl font-sans select-none tracking-widest uppercase px-4 text-center drop-shadow-[0_0_12px_rgba(223,184,113,0.8)] font-medium">
          <span className="hidden sm:inline">Move your cursor to explore.</span>
          <span className="sm:hidden">Drag your finger to explore.</span>
        </p>
      </div>

      {/* Render the trailing images */}
      <AnimatePresence>
        {trail.map((img) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, scale: 0.2, rotate: img.rotation - 10 }}
            animate={{ opacity: 1, scale: 1, rotate: img.rotation }}
            exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.5 } }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="absolute pointer-events-none z-20 shadow-2xl overflow-hidden rounded-xl"
            style={{
              left: img.x,
              top: img.y,
              x: "-50%",
              y: "-50%",
              width: "clamp(180px, 30vw, 280px)",
              height: "clamp(230px, 38vw, 360px)",
            }}
          >
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Image 
                src={img.src} 
                alt="Portfolio image" 
                fill 
                className="object-cover"
                sizes="(max-width: 640px) 180px, 280px"
              />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </section>
  );
}
