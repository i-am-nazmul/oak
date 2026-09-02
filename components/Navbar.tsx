"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import AboutUsModal from "./AboutUsModal";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  const handleScroll = (id: string) => {
    setIsMobileMenuOpen(false);
    setIsDesktopMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="absolute top-0 left-0 right-0 px-4 sm:px-6 md:px-12 lg:px-20 flex items-center justify-between bg-transparent z-50"
    >
      <div className="flex items-center gap-2 sm:gap-4">
        <div className="relative w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28 flex items-center justify-center">
          <Image
            src="/goldentree.png"
            alt="Golden Tree Logo"
            fill
            sizes="(max-width: 640px) 56px, (max-width: 768px) 80px, 112px"
            className="object-contain"
          />
        </div>
        <span className="font-serif text-base sm:text-xl md:text-2xl font-medium text-white tracking-widest uppercase whitespace-nowrap">Creators Oak</span>
      </div>

      <div className="flex items-center gap-4 sm:gap-8 xl:gap-12">
        <div className="relative">
          <button 
            onClick={() => setIsDesktopMenuOpen(!isDesktopMenuOpen)}
            className="flex items-center gap-1 sm:gap-2 hover:text-[#dfb871] transition-colors tracking-wide text-white font-sans text-sm sm:text-base xl:text-lg font-medium"
          >
            Menu
            <svg className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 ${isDesktopMenuOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <AnimatePresence>
            {isDesktopMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full mt-4 sm:mt-6 right-0 bg-[#0a0a0a]/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl w-[200px] sm:min-w-[220px] overflow-hidden"
              >
                <div className="flex flex-col py-3 font-sans text-sm sm:text-base font-medium">
                  <button onClick={() => handleScroll('home')} className="text-left px-5 sm:px-6 py-2.5 text-white/90 hover:text-[#dfb871] hover:bg-white/5 transition-colors">Home</button>
                  <button onClick={() => { setIsDesktopMenuOpen(false); setIsAboutModalOpen(true); }} className="text-left px-5 sm:px-6 py-2.5 text-white/90 hover:text-[#dfb871] hover:bg-white/5 transition-colors">About Us</button>
                  <button onClick={() => handleScroll('services')} className="text-left px-5 sm:px-6 py-2.5 text-white/90 hover:text-[#dfb871] hover:bg-white/5 transition-colors">Services</button>
                  <button onClick={() => handleScroll('creators')} className="text-left px-5 sm:px-6 py-2.5 text-white/90 hover:text-[#dfb871] hover:bg-white/5 transition-colors">For Creators</button>
                  <button onClick={() => handleScroll('brands')} className="text-left px-5 sm:px-6 py-2.5 text-white/90 hover:text-[#dfb871] hover:bg-white/5 transition-colors">For Brands</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <button type="button" onClick={() => handleScroll('connect')} className="bg-olive-900 text-white font-sans text-sm sm:text-base xl:text-lg font-bold px-3 py-1.5 xl:px-4 xl:py-2 rounded-md hover:bg-olive-800 transition-colors shadow-sm whitespace-nowrap">
          Let's Connect
        </button>
      </div>

      <AboutUsModal isOpen={isAboutModalOpen} onClose={() => setIsAboutModalOpen(false)} />
    </motion.nav>
  );
}
