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
      className="absolute top-0 left-0 right-0 px-6 md:px-12 lg:px-20 py-4 md:py-6 flex items-center justify-between bg-transparent z-50"
    >
      <div className="flex items-center gap-4">
        <div className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center">
          <Image 
            src="/goldentree.png" 
            alt="Golden Tree Logo" 
            fill
            sizes="(max-width: 768px) 80px, 112px"
            className="object-contain"
          />
        </div>
        <span className="font-serif text-xl md:text-2xl font-medium text-[#1a362d] tracking-widest uppercase">Creators Oak</span>
      </div>

      <div className="hidden lg:flex items-center gap-12">
        <div className="flex items-center gap-8 font-sans text-xl lg:text-2xl font-medium text-black">
          <Link href="#" className="hover:text-[#dfb871] transition-colors tracking-wide">Home</Link>
          <Link href="#" className="hover:text-[#dfb871] transition-colors tracking-wide">About Us</Link>
          <Link href="#" className="hover:text-[#dfb871] transition-colors tracking-wide">Services</Link>
          <Link href="#" className="hover:text-[#dfb871] transition-colors tracking-wide">For Creators</Link>
          <Link href="#" className="hover:text-[#dfb871] transition-colors tracking-wide">For Brands</Link>
        </div>

        <Link href="#" className="bg-[#1a362d] text-white font-sans text-2xl font-bold px-12 py-5 rounded-sm hover:bg-[#1a362d]/90 transition-colors shadow-sm">
          Let's Connect
        </Link>
      </div>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden flex items-center">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-dark-green p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
            className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 overflow-hidden md:hidden shadow-xl"
          >
            <div className="flex flex-col px-6 py-6 gap-6 font-medium text-lg">
              <Link href="#" className="text-[#1a362d] hover:text-[#dfb871] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link href="#" className="text-[#1a362d] hover:text-[#dfb871] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
              <Link href="#" className="text-[#1a362d] hover:text-[#dfb871] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
              <Link href="#" className="text-[#1a362d] hover:text-[#dfb871] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>For Creators</Link>
              <Link href="#" className="text-[#1a362d] hover:text-[#dfb871] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>For Brands</Link>
              
              <div className="flex flex-col gap-4 mt-4 border-t border-gray-100 pt-6">
                <Link href="#" className="text-center bg-[#1a362d] text-white font-medium text-lg px-6 py-4 rounded-sm hover:bg-[#1a362d]/90 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  Let's Connect
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
