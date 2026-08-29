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

  return (
    <section ref={containerRef} className="h-[200vh] sm:h-[300vh] bg-black relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center p-2 sm:p-4">

        <motion.div
          style={{ scale }}
          className="grid grid-cols-12 grid-rows-3 gap-1 sm:gap-2 md:gap-3 w-full sm:w-[90vw] md:w-[80vw] max-w-5xl aspect-square sm:aspect-[4/3]"
        >
          {gridItems.map((item) => (
            <AnimatedGridItem key={item.id} item={item} spread={spread} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
