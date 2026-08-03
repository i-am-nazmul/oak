"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex items-center justify-between bg-white/10 backdrop-blur-md border-b border-white/20"
    >
      <div className="flex items-center gap-2">
        {/* We use the logo from public folder. Using unoptimized to prevent issues if it's large, though Next/Image is better. */}
        <div className="relative w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-white">
          <Image 
            src="/oak.jpeg" 
            alt="Creators Oak Logo" 
            fill
            className="object-cover"
          />
        </div>
        <span className="font-playfair text-2xl font-bold text-foreground">Creators Oak</span>
      </div>

      <div className="hidden md:flex items-center gap-8 font-medium text-sm">
        <Link href="#" className="hover:text-gold transition-colors">Home</Link>
        <Link href="#" className="hover:text-gold transition-colors">Prospects</Link>
        <Link href="#" className="hover:text-gold transition-colors">Marketeers</Link>
        <Link href="#" className="hover:text-gold transition-colors">Trending & Building</Link>
        <Link href="#" className="hover:text-gold transition-colors">Contact Us</Link>
      </div>

      <div className="flex items-center gap-6">
        <Link href="#" className="font-medium text-sm hover:text-gold transition-colors">Log In</Link>
        <Link href="#" className="bg-gold text-dark-green font-medium px-6 py-2.5 rounded-full hover:bg-gold/90 transition-colors shadow-lg">
          Sign Up
        </Link>
      </div>
    </motion.nav>
  );
}
