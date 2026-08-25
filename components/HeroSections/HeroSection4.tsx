"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const blocks = [
  {
    id: 1,
    title: "BRAND RESEARCH & STRATEGY",
    description: "Understanding the market, competitors, audience and where the brand should go next.",
    image: "/hero_section_4_pics/1.png",
    colSpan: "md:col-span-2", // Wide
    popup: {
      heading: "BRAND RESEARCH & STRATEGY",
      description: "Understanding the market, competitors, audience and where the brand should go next.",
      listTitle: "This covers:",
      items: [
        "Brand research",
        "Competitor research",
        "Audience research",
        "Positioning",
        "Market opportunities",
        "Brand direction",
      ],
    },
  },
  {
    id: 2,
    title: "PRODUCT & LAUNCH STRATEGY",
    description: "Knowing what to launch, who to launch it for and when to make the move.",
    image: "/hero_section_4_pics/2.png",
    colSpan: "md:col-span-1", // Square
    popup: {
      heading: "PRODUCT & LAUNCH STRATEGY",
      description: "Knowing what to launch, who to launch it for and when to make the move.",
      listTitle: "This covers:",
      items: [
        "Product research",
        "Product/market fit",
        "Launch planning",
        "Launch timing",
        "Campaign concepts",
        "Go-to-market thinking",
      ],
    },
  },
  {
    id: 3,
    title: "INFLUENCER MARKETING",
    description: "Connecting brands with creators who can make people discover, trust and remember them.",
    image: "/hero_section_4_pics/3.png",
    colSpan: "md:col-span-1", // Square
    popup: {
      heading: "INFLUENCER MARKETING",
      description: "Connecting brands with creators who can make people discover, trust and remember them.",
      listTitle: "This covers:",
      items: [
        "Nano creators",
        "Micro creators",
        "Macro creators",
        "Niche creators",
        "Campaigns & seeding",
        "UGC",
      ],
    },
  },
  {
    id: 4,
    title: "WEBSITE & DIGITAL EXPERIENCE",
    description: "Building digital spaces that make the brand feel as strong as the product.",
    image: "/hero_section_4_pics/4.png",
    colSpan: "md:col-span-2", // Wide
    popup: {
      heading: "WEBSITE & DIGITAL EXPERIENCE",
      description: "Building digital spaces that make the brand feel as strong as the product.",
      listTitle: "This covers:",
      items: [
        "Website design",
        "Website development",
        "Landing pages",
        "Brand experience",
        "Conversion-focused digital presence",
      ],
    },
  },
  {
    id: 5,
    title: "SOCIAL MEDIA CREATIVES",
    description: "Turning the brand into content people actually want to stop for.",
    image: "/hero_section_4_pics/5.png",
    colSpan: "md:col-span-2", // Wide
    popup: {
      heading: "SOCIAL MEDIA CREATIVES",
      description: "Turning the brand into content people actually want to stop for.",
      listTitle: "This covers:",
      items: [
        "Reels",
        "Static creatives",
        "Carousels",
        "Social campaigns",
        "Creator content",
        "Trend-led content",
      ],
    },
  },
  {
    id: 6,
    title: "CREATIVE DIRECTION",
    description: "Finding the visual idea that makes a brand impossible to ignore.",
    image: "/hero_section_4_pics/6.png",
    colSpan: "md:col-span-1", // Square
    popup: {
      heading: "CREATIVE DIRECTION",
      description: "Finding the visual idea that makes a brand impossible to ignore.",
      listTitle: "This is your higher-level creative work:",
      items: [
        "Campaign concepts",
        "Visual direction",
        "Brand storytelling",
        "Creative campaigns",
        "Ad concepts",
        "Launch creatives",
        "Unique brand identities",
      ],
    },
  }
];

type Block = (typeof blocks)[number];

export default function HeroSection4() {
  const [activePopup, setActivePopup] = useState<Block | null>(null);

  return (
    <section className="py-24 md:py-32 bg-black px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <div className="flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-4 leading-tight">
              WHAT WE<br />
              Create FOR YOU
            </h2>
            <p className="text-white/70 max-w-xl text-lg mx-auto">Transform your digital presence with our comprehensive suite of professional services</p>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blocks.map((block, index) => (
            <motion.div
              key={block.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer min-h-[320px] md:min-h-[400px] ${block.colSpan}`}
              onClick={() => setActivePopup(block)}
            >
              {/* Background Image */}
              <Image 
                src={block.image}
                alt={block.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-90 z-10" />

              {/* Content Box */}
              <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                
                {/* Optional Icon Placeholder */}
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-4 text-[#dfb871]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-[#dfb871] transition-colors">
                  {block.title}
                </h3>
                
                <p className="text-white/80 text-sm md:text-base mb-4 max-w-sm">
                  {block.description}
                </p>

                <div className="text-[#dfb871] font-medium text-sm flex items-center mt-auto">
                    Click to learn more
                    <svg className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {activePopup?.popup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setActivePopup(null)}
            />

            {/* Popup Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-5xl min-h-[70vh] rounded-3xl overflow-hidden shadow-2xl z-10"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={activePopup.image}
                  alt={activePopup.title}
                  fill
                  className="object-cover"
                  sizes="700px"
                />
                <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]" />
              </div>

              {/* X Close Button */}
              <button
                onClick={() => setActivePopup(null)}
                className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:text-[#dfb871] transition-all duration-300"
                aria-label="Close popup"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              {/* Content */}
              <div className="relative z-10 p-8 md:p-12">
                <span className="text-[#dfb871] text-sm font-medium tracking-widest uppercase mb-4 block">
                  Our Service
                </span>

                <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 leading-tight">
                  {activePopup.popup.heading}
                </h3>

                <p className="text-white/80 text-base md:text-lg mb-8 max-w-lg leading-relaxed">
                  {activePopup.popup.description}
                </p>

                <div className="border-t border-white/10 pt-6">
                  <h4 className="text-[#dfb871] font-semibold text-sm tracking-widest uppercase mb-5">
                    {activePopup.popup.listTitle}
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {activePopup.popup.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-white/90">
                        <span className="w-2 h-2 rounded-full bg-[#dfb871] flex-shrink-0" />
                        <span className="text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10">
                  <button
                    onClick={() => { setActivePopup(null); window.location.href = "#contact"; }}
                    className="px-8 py-3 bg-[#dfb871] text-black font-semibold rounded-full hover:bg-[#c9a55e] transition-all duration-300 hover:shadow-lg hover:shadow-[#dfb871]/20"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
