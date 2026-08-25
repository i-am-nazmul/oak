"use client";

import { useState, useRef, MouseEvent } from "react";
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

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (lastPointRef.current) {
      const dx = x - lastPointRef.current.x;
      const dy = y - lastPointRef.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Only spawn a new image if moved significantly (at least 100px) from the last one
      if (distance < 100) return;
    }

    lastPointRef.current = { x, y };

    const id = Math.random().toString(36).substring(7);
    const src = images[indexRef.current % images.length];
    const rotation = 0; // Straight orientation
    
    indexRef.current += 1;

    setTrail((prev) => [...prev, { id, x, y, src, rotation }]);

    // Remove the image after 2.5 seconds to clean up memory and UI
    setTimeout(() => {
      setTrail((prev) => prev.filter((img) => img.id !== id));
    }, 2500);
  };

  return (
    <section 
      className="relative min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center cursor-crosshair"
      onMouseMove={handleMouseMove}
    >
      {/* Background instruction text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
        <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-serif text-white/20 select-none text-center leading-tight max-w-5xl px-4">
          Explore the ideas we’ve grown into reality.
        </h2>
        <p className="mt-6 text-white/40 text-sm md:text-base font-sans select-none tracking-widest uppercase">
          Move your cursor to explore.
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
              // Offset by half width and height to perfectly center on cursor
              x: "-50%",
              y: "-50%",
              width: "280px",
              height: "360px",
            }}
          >
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Image 
                src={img.src} 
                alt="Portfolio image" 
                fill 
                className="object-cover"
                sizes="280px"
              />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </section>
  );
}
