"use client";

import { motion } from "framer-motion";
import { Users, Handshake, TrendingUp, ArrowRight } from "lucide-react";

export default function HeroSection1() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-top -z-10"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay - bright white on the left, completely transparent on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 via-30% to-transparent to-60% -z-10" />

      {/* Content Container */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative z-10 mt-24 md:mt-32 lg:mt-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl space-y-5"
        >
          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] font-serif tracking-wide leading-none text-[#1a362d]">
            CREATORS <span className="text-[#dfb871]">OAK</span>
          </h1>

          {/* Subheading */}
          <h2 className="text-2xl md:text-3xl lg:text-[2.75rem] font-serif text-black leading-[1.15]">
            Curating Creators.<br />
            Growing Brands.
          </h2>

          {/* Description */}
          <p className="text-gray-800 max-w-lg text-sm md:text-base leading-relaxed pt-2 font-medium">
            We connect visionary creators with ambitious brands<br className="hidden md:block" />
            to build stories that inspire, engage and grow.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <button className="group flex items-center gap-3 px-6 py-3 lg:px-8 lg:py-4 border border-[#1a362d] bg-[#1a362d] hover:bg-[#1a362d]/90 transition-all duration-300 text-xs md:text-sm tracking-wider text-white">
              Let's Grow Together
              <ArrowRight className="w-4 h-4 text-white/70 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
