"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

interface AboutUsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const whatWeDoItems = [
  {
    image: "/about_us/1.png",
    title: "Influencer Marketing",
    desc1: "Right creators.",
    desc2: "Real impact."
  },
  {
    image: "/about_us/2.png",
    title: "Strategy & Planning",
    desc1: "Data-driven plans",
    desc2: "that deliver."
  },
  {
    image: "/about_us/3.png",
    title: "Content & Creatives",
    desc1: "Stories that connect",
    desc2: "and convert."
  },
  {
    image: "/about_us/4.png",
    title: "Launch & Growth",
    desc1: "Powerful launches.",
    desc2: "Stronger growth."
  },
  {
    image: "/about_us/5.png",
    title: "Digital Experiences",
    desc1: "Platforms and experiences",
    desc2: "that build trust."
  }
];

export default function AboutUsModal({ isOpen, onClose }: AboutUsModalProps) {
  // Prevent scrolling on body when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 lg:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-full h-full md:h-auto max-h-[100vh] md:max-h-[90vh] max-w-7xl bg-[#0a0a0a] md:rounded-3xl shadow-2xl overflow-y-auto border border-white/5 scrollbar-hide"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 text-white/50 hover:text-white transition-colors p-2"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="p-6 sm:p-10 md:p-14 lg:p-20 flex flex-col gap-16 md:gap-24">
              
              {/* Hero Section */}
              <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
                <div className="flex-1 flex flex-col pt-4">
                  <div className="mb-8">
                    <span className="text-[#dfb871] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase border-b border-[#dfb871]/30 pb-2">
                      ABOUT US
                    </span>
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white leading-[1.1] mb-8">
                    Creators Oak<br/>
                    <span className="text-[#dfb871]">Curating Creators.<br/>Growing Brands.</span>
                  </h1>
                  
                  <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-md">
                    We connect visionary creators with ambitious brands to build stories that <span className="text-[#dfb871] font-medium">inspire, engage</span> and <span className="text-[#dfb871] font-medium">grow</span>.
                  </p>
                </div>
                
                <div className="flex-1 w-full lg:w-auto h-[150px] sm:h-[200px] lg:h-[250px] relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
                  <Image 
                    src="/about_us/6.png" 
                    alt="About Us Hero"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-[center_30%]"
                  />
                  {/* Subtle vignette */}
                  <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] pointer-events-none" />
                </div>
              </div>

              {/* What We Do */}
              <div>
                <div className="mb-10">
                  <span className="text-[#dfb871] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase border-b border-[#dfb871]/30 pb-2">
                    WHAT WE DO
                  </span>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
                  {whatWeDoItems.map((item, index) => (
                    <div key={index} className="flex flex-col items-center text-center group">
                      <div className="w-full aspect-square relative rounded-xl overflow-hidden mb-4 bg-white/5">
                        <Image 
                          src={item.image} 
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                      </div>
                      <h4 className="text-white text-sm font-medium mb-2 px-2">{item.title}</h4>
                      <p className="text-white/50 text-xs">
                        {item.desc1}<br/>{item.desc2}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3 Columns Section & Bottom Banner */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pt-8 border-t border-white/5">
                
                {/* Column 1 */}
                <div className="flex flex-col">
                  <div className="mb-8">
                    <span className="text-white text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
                      WHAT WE BELIEVE
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif text-white mb-6 leading-tight">
                    Authenticity<br/>builds <span className="text-[#dfb871]">trust.</span>
                  </h3>
                  <p className="text-white/60 text-sm leading-loose">
                    Real stories.<br/>Real people.<br/>Real results.
                  </p>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col md:border-l border-white/5 md:pl-8">
                  <div className="mb-8">
                    <span className="text-white text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
                      WHO WE ARE
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#dfb871] mb-4">
                    2+ years
                  </h3>
                  <p className="text-white text-sm md:text-base leading-relaxed mb-6">
                    of building meaningful<br/>connections.
                  </p>
                  <p className="text-white/60 text-sm leading-loose">
                    Across creators.<br/>Across industries.<br/>Across India.
                  </p>
                </div>

                {/* Column 3 */}
                <div className="flex flex-col md:border-l border-white/5 md:pl-8 md:row-span-2">
                  <div className="mb-8">
                    <span className="text-white text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
                      WHAT WE'VE DONE
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-serif text-[#dfb871] mb-2">5000+</h3>
                      <p className="text-white/60 text-xs sm:text-sm">Creators<br/>Onboarded</p>
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-serif text-[#dfb871] mb-2">27+</h3>
                      <p className="text-white/60 text-xs sm:text-sm">Successful<br/>Campaigns</p>
                    </div>
                    <div className="col-span-2">
                      <h3 className="text-2xl sm:text-3xl font-serif text-[#dfb871] mb-2">50+</h3>
                      <p className="text-white/60 text-xs sm:text-sm">Brands<br/>Trust Us</p>
                    </div>
                    <div className="col-span-2">
                      <h3 className="text-2xl sm:text-3xl font-serif text-[#dfb871] mb-2">Multiple</h3>
                      <p className="text-white/60 text-xs sm:text-sm mb-4">Industries<br/>Impacted</p>
                      
                      <p className="text-[#dfb871]/80 text-sm leading-loose mt-2">
                        Real People.<br/>Real Stories.<br/>Real Growth.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Banner */}
                <div className="md:col-span-2 w-full border border-[#dfb871]/20 rounded-xl p-8 sm:p-10 relative overflow-hidden bg-gradient-to-br from-white/5 to-transparent self-end mt-4 md:mt-0">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-white leading-relaxed relative z-10">
                    We don't just run campaigns.<br/>
                    <span className="text-[#dfb871]">We build long-term partnerships.</span>
                  </h3>
                </div>
              </div>

              {/* Footer Links */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] sm:text-xs text-white/40 tracking-[0.1em] font-medium pt-8 border-t border-white/5 uppercase">
                <span>INFLUENCER MARKETING</span>
                <span className="text-[#dfb871]">•</span>
                <span>CREATOR COLLABORATIONS</span>
                <span className="text-[#dfb871]">•</span>
                <span>BRAND STRATEGY</span>
                <span className="text-[#dfb871]">•</span>
                <span>CONTENT CREATION</span>
                <span className="text-[#dfb871]">•</span>
                <span>SOCIAL MEDIA MARKETING</span>
                <span className="text-[#dfb871]">•</span>
                <span>PRODUCT LAUNCHES</span>
                <span className="text-[#dfb871]">•</span>
                <span>DIGITAL EXPERIENCES</span>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
