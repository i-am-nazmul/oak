"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

      <div className="hidden lg:flex items-center gap-8 xl:gap-12">
        <div className="flex items-center gap-6 xl:gap-8 font-sans text-base xl:text-lg font-medium text-white whitespace-nowrap">
          <Link href="#" className="hover:text-[#dfb871] transition-colors tracking-wide">Home</Link>
          <Link href="#" className="hover:text-[#dfb871] transition-colors tracking-wide">About Us</Link>
          <Link href="#" className="hover:text-[#dfb871] transition-colors tracking-wide">Services</Link>
          <Link href="#" className="hover:text-[#dfb871] transition-colors tracking-wide">For Creators</Link>
          <Link href="#" className="hover:text-[#dfb871] transition-colors tracking-wide">For Brands</Link>
        </div>

        <a href="#contact" className="bg-[#1a362d] text-white font-sans text-base xl:text-lg font-bold px-6 py-2 xl:px-8 xl:py-3 rounded-sm hover:bg-[#1a362d]/90 transition-colors shadow-sm whitespace-nowrap">
          Let's Connect
        </a>
      </div>

      {/* Mobile Hamburger Button */}
      <div className="lg:hidden flex items-center">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/10 overflow-hidden lg:hidden shadow-xl"
          >
            <div className="flex flex-col px-6 py-6 gap-5 font-medium text-lg">
              <Link href="#" className="text-white hover:text-[#dfb871] transition-colors py-1" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link href="#" className="text-white hover:text-[#dfb871] transition-colors py-1" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
              <Link href="#" className="text-white hover:text-[#dfb871] transition-colors py-1" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
              <Link href="#" className="text-white hover:text-[#dfb871] transition-colors py-1" onClick={() => setIsMobileMenuOpen(false)}>For Creators</Link>
              <Link href="#" className="text-white hover:text-[#dfb871] transition-colors py-1" onClick={() => setIsMobileMenuOpen(false)}>For Brands</Link>
              
              <div className="flex flex-col gap-4 mt-3 border-t border-white/10 pt-5">
                <a href="#contact" className="text-center bg-[#dfb871] text-black font-semibold text-lg px-6 py-4 rounded-lg hover:bg-[#c9a55e] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  Let's Connect
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
