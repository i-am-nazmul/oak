"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const gridItems = [
  // Row 1 & 2 (Left Tall)
  {
    id: 1,
    src: "/hero_section_7_pics/1.png",
    colSpan: "col-span-12 md:col-span-4 md:row-span-2",
    objectPosition: "object-left-bottom",
  },
  // Row 1 (Right Top Wide)
  {
    id: 2,
    src: "/hero_section_7_pics/2.png",
    colSpan: "col-span-12 md:col-span-8",
    objectPosition: "object-top",
  },
  // Row 2 (Right Middle)
  {
    id: 3,
    src: "/hero_section_7_pics/3.png",
    colSpan: "col-span-12 md:col-span-4",
    objectPosition: "object-top",
  },
  {
    id: 4,
    src: "/hero_section_7_pics/4.png",
    colSpan: "col-span-12 md:col-span-4",
    objectPosition: "object-center",
  },
  // Row 3 (Bottom)
  {
    id: 5,
    src: "/hero_section_7_pics/5.png",
    colSpan: "col-span-12 md:col-span-6",
    objectPosition: "object-bottom",
  },
  {
    id: 6,
    src: "/hero_section_7_pics/6.png",
    colSpan: "col-span-12 md:col-span-6",
    objectPosition: "object-[center_70%]",
  },
];

export default function HeroSection7() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Scale up so that the center column fills the screen
  const scale = useTransform(scrollYProgress, [0, 1], [1, 3.5]);

  return (
    <section ref={containerRef} className="h-[300vh] bg-[#050505] relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center p-4">
        <motion.div
          style={{ scale }}
          className="grid grid-cols-12 grid-rows-3 gap-2 md:gap-3 w-full md:w-[80vw] max-w-5xl aspect-square md:aspect-[4/3]"
        >
          {gridItems.map((item) => (
            <div
              key={item.id}
              className={`${item.colSpan} relative overflow-hidden shadow-2xl rounded-sm`}
            >
              <Image
                src={item.src}
                alt={`Grid image ${item.id}`}
                fill
                className={`object-cover ${item.objectPosition || "object-center"}`}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
