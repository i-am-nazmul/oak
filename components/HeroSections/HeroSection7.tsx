"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const gridItems = [
  // Row 1
  {
    id: 1,
    src: "/pics/thegermankid-poppies-5392907_1920.jpg",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
    aspect: "aspect-square",
    content: (
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-red-900/30">
        <p className="text-white text-xs md:text-sm font-semibold uppercase tracking-wider">TEMPLATES</p>
        <h2 className="text-white font-black text-4xl md:text-6xl uppercase tracking-tighter leading-none">
          BLUR
        </h2>
      </div>
    ),
  },
  {
    id: 2,
    src: "/pics/dianaparkhouse-mist-4551691.jpg",
    colSpan: "col-span-2",
    rowSpan: "row-span-1",
    aspect: "aspect-[2/1]",
    content: (
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30">
        <h2 className="text-[#E5E0D8] font-black text-5xl md:text-8xl uppercase tracking-tighter">
          MEMORIES
        </h2>
      </div>
    ),
  },
  // Row 2
  {
    id: 3,
    src: "/pics/ahmetyuksek-autumn-bend-10069119_1920.jpg",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
    aspect: "aspect-[4/3]",
    content: (
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
        <h2 className="text-white font-black text-3xl md:text-5xl uppercase tracking-tighter leading-none text-center">
          TRENDS
          <span className="text-lg md:text-2xl tracking-widest block mt-1">FADE</span>
        </h2>
      </div>
    ),
  },
  {
    id: 4,
    src: "/pics/amaurydeterwangne-stag-5393082.jpg",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
    aspect: "aspect-[4/3]",
    content: (
      <div className="absolute inset-0 flex flex-col items-start justify-center p-4 md:p-8 bg-black/40">
        <p className="text-white text-[10px] md:text-sm font-bold uppercase leading-tight">But real<br />brands? They</p>
        <h2 className="text-white font-black text-3xl md:text-7xl uppercase tracking-tighter leading-none">
          SCALE
        </h2>
      </div>
    ),
  },
  {
    id: 5,
    src: "/pics/bayarts7-indonesia-10405443_1920.jpg",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
    aspect: "aspect-[4/3]",
    content: (
      <div className="absolute inset-0 flex flex-col items-start justify-center p-4 md:p-8 bg-white/85">
        <p className="text-red-600 text-xs md:text-sm font-bold">We focus on</p>
        <h2 className="text-red-600 font-black text-3xl md:text-6xl uppercase tracking-tighter leading-none">
          CULTURE
        </h2>
      </div>
    ),
  },
  // Row 3
  {
    id: 6,
    src: "/pics/susnpics-hill-5324149_1920.jpg",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
    aspect: "aspect-[4/3]",
    content: (
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20">
        <h2 className="text-white/90 font-black text-3xl md:text-5xl uppercase tracking-tighter">
          SUBTLE
        </h2>
      </div>
    ),
  },
  {
    id: 7,
    src: "/pics/tama66-river-4336788_1920.jpg",
    colSpan: "col-span-2",
    rowSpan: "row-span-1",
    aspect: "aspect-[3/1]",
    content: (
      <div className="absolute inset-0 flex flex-col items-end justify-center p-4 md:p-8 bg-black/20 text-right">
        <p className="text-white/60 text-[10px] md:text-xs uppercase leading-tight mb-1">culture endures, and thrives. It&apos;s the real</p>
        <h2 className="text-red-600 font-black text-4xl md:text-6xl uppercase tracking-tighter">
          KING
        </h2>
      </div>
    ),
  },
];

export default function HeroSection7() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Scale up so that the center column (~33vw wide) fills the screen → need ~3x
  const scale = useTransform(scrollYProgress, [0, 1], [1, 3.5]);

  return (
    <section ref={containerRef} className="h-[300vh] bg-[#050505] relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <motion.div
          style={{ scale }}
          className="grid grid-cols-3 gap-2 md:gap-3 w-[85vw] md:w-[75vw]"
        >
          {gridItems.map((item) => (
            <div
              key={item.id}
              className={`${item.colSpan} ${item.rowSpan} ${item.aspect} relative overflow-hidden shadow-2xl`}
            >
              <Image
                src={item.src}
                alt={`Grid image ${item.id}`}
                fill
                className="object-cover"
              />
              {item.content}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
