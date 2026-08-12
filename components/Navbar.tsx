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
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 md:py-6 flex items-center justify-between bg-white/10 backdrop-blur-md border-b border-white/20"
    >
      <div className="flex items-center gap-2">
        <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden flex items-center justify-center bg-white">
          <Image 
            src="/oak.jpeg" 
            alt="Creators Oak Logo" 
            fill
            sizes="(max-width: 768px) 32px, 40px"
            className="object-cover"
          />
        </div>
        <span className="font-playfair text-xl md:text-2xl font-bold text-foreground">Creators Oak</span>
      </div>

      <div className="hidden md:flex items-center gap-8 font-medium text-sm">
        <Link href="#" className="hover:text-gold transition-colors">Home</Link>
        <Link href="#" className="hover:text-gold transition-colors">Prospects</Link>
        <Link href="#" className="hover:text-gold transition-colors">Marketeers</Link>
        <Link href="#" className="hover:text-gold transition-colors">Trending & Building</Link>
        <Link href="#" className="hover:text-gold transition-colors">Contact Us</Link>
      </div>

      <div className="hidden md:flex items-center gap-6">
        <Link href="#" className="font-medium text-sm hover:text-gold transition-colors">Log In</Link>
        <Link href="#" className="bg-gold text-dark-green font-medium px-6 py-2.5 rounded-full hover:bg-gold/90 transition-colors shadow-lg">
          Sign Up
        </Link>
      </div>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden flex items-center">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-foreground p-2 focus:outline-none"
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
            <div className="flex flex-col px-6 py-6 gap-6 font-medium text-base">
              <Link href="#" className="hover:text-gold transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link href="#" className="hover:text-gold transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Prospects</Link>
              <Link href="#" className="hover:text-gold transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Marketeers</Link>
              <Link href="#" className="hover:text-gold transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Trending & Building</Link>
              <Link href="#" className="hover:text-gold transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
              
              <div className="flex flex-col gap-4 mt-4 border-t border-gray-100 pt-6">
                <Link href="#" className="text-center font-medium hover:text-gold transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Log In</Link>
                <Link href="#" className="text-center bg-gold text-dark-green font-medium px-6 py-3 rounded-full hover:bg-gold/90 transition-colors shadow-lg" onClick={() => setIsMobileMenuOpen(false)}>
                  Sign Up
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
