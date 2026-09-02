"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const gridItems = [
  // Row 1 & 2 (Left Tall)
  {
    id: 1,
    src: "/hero_section_7_pics/1.png",
    colSpan: "col-span-6 md:col-span-4 md:row-span-2",
    objectPosition: "object-left-bottom",
    dirX: -1, dirY: -0.5
  },
  // Row 1 (Right Top Wide)
  {
    id: 2,
    src: "/hero_section_7_pics/2.png",
    colSpan: "col-span-6 md:col-span-8",
    objectPosition: "object-top",
    dirX: 1, dirY: -1
  },
  // Row 2 (Right Middle)
  {
    id: 3,
    src: "/hero_section_7_pics/3.png",
    colSpan: "col-span-6 md:col-span-4",
    objectPosition: "object-top",
    dirX: 0, dirY: 0 // STAYS IN CENTER
  },
  {
    id: 4,
    src: "/hero_section_7_pics/4.png",
    colSpan: "col-span-6 md:col-span-4",
    objectPosition: "object-center",
    dirX: 1, dirY: 0
  },
  // Row 3 (Bottom)
  {
    id: 5,
    src: "/hero_section_7_pics/5.png",
    colSpan: "col-span-6 md:col-span-6",
    objectPosition: "object-bottom",
    dirX: -1, dirY: 1
  },
  {
    id: 6,
    src: "/hero_section_7_pics/6.png",
    colSpan: "col-span-6 md:col-span-6",
    objectPosition: "object-[center_70%]",
    dirX: 1, dirY: 1
  },
];

const mobileGridItems = [
  { id: 1, src: "/hero_section_7_pics/1.png", dirX: 0, dirY: 0, zIndex: 10, size: 160 }, // Center
  { id: 2, src: "/hero_section_7_pics/2.png", dirX: 0, dirY: -1, zIndex: 1, size: 100 }, // Top
  { id: 3, src: "/hero_section_7_pics/3.png", dirX: 0.95, dirY: -0.31, zIndex: 2, size: 90 }, // Top Right
  { id: 4, src: "/hero_section_7_pics/4.png", dirX: 0.59, dirY: 0.81, zIndex: 3, size: 110 }, // Bottom Right
  { id: 5, src: "/hero_section_7_pics/5.png", dirX: -0.59, dirY: 0.81, zIndex: 4, size: 95 }, // Bottom Left
  { id: 6, src: "/hero_section_7_pics/6.png", dirX: -0.95, dirY: -0.31, zIndex: 5, size: 105 }, // Top Left
];

// Sub-component to safely use hooks for each item
function AnimatedGridItem({ item, spread }: { item: any, spread: any }) {
  const x = useTransform(spread, (s: number) => s * item.dirX);
  const y = useTransform(spread, (s: number) => s * item.dirY);

  return (
    <motion.div
      style={{ x, y }}
      className={`${item.colSpan} relative overflow-hidden shadow-2xl rounded-sm`}
    >
      <Image
        src={item.src}
        alt={`Grid image ${item.id}`}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className={`object-cover ${item.objectPosition || "object-center"}`}
      />
    </motion.div>
  );
}

function MobileAnimatedGridItem({ item, spread }: { item: any, spread: any }) {
  // Mobile needs a smaller initial distance (starting slightly apart)
  // then they spread out based on dirX and dirY
  const startDistance = item.id === 1 ? 0 : 50; 
  
  const x = useTransform(spread, (s: number) => (startDistance + s) * item.dirX);
  const y = useTransform(spread, (s: number) => (startDistance + s) * item.dirY);

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ zIndex: item.zIndex }}>
      <motion.div
        style={{ x, y, width: item.size, height: item.size }}
        className="relative overflow-hidden shadow-2xl rounded-xl border border-white/10"
      >
        <Image
          src={item.src}
          alt={`Mobile grid image ${item.id}`}
          fill
          sizes="200px"
          className="object-contain"
        />
      </motion.div>
    </div>
  );
}

export default function HeroSection7() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Scale up so that the center column fills the screen
  const scale = useTransform(scrollYProgress, [0, 1], [1, 3.5]);

  // Exponentially increase translation spread instead of CSS gap to preserve aspect ratios
  const spread = useTransform(
    scrollYProgress,
    [0, 0.5, 0.8, 1],
    [0, 20, 100, 350] // pixels to translate
  );

  // Different scale and spread for mobile
  const mobileScale = useTransform(scrollYProgress, [0, 1], [1, 1.8]);
  const mobileSpread = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0, 10, 100, 200]);

  return (
    <section ref={containerRef} className="bg-black relative h-[200vh] lg:h-[300vh]">
      
      {/* ─── Mobile View (Circular Parallax) ─── */}
      <div className="md:hidden sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center p-4">
        <motion.div
          style={{ scale: mobileScale }}
          className="relative w-full aspect-square max-w-[300px]"
        >
          {mobileGridItems.map((item) => (
            <MobileAnimatedGridItem key={item.id} item={item} spread={mobileSpread} />
          ))}
        </motion.div>
      </div>

      {/* ─── Desktop/Tablet View (Sticky Parallax Grid) ─── */}
      <div className="hidden md:flex sticky top-0 h-screen w-full overflow-hidden items-center justify-center p-4">
        <motion.div
          style={{ scale }}
          className="grid grid-cols-12 grid-rows-3 gap-2 md:gap-3 w-[90vw] lg:w-[80vw] max-w-5xl aspect-[4/3]"
        >
          {gridItems.map((item) => (
            <AnimatedGridItem key={item.id} item={item} spread={spread} />
          ))}
        </motion.div>
      </div>

    </section>
  );
}
