"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function HeroSection1() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.2;
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-[15%_top] mobile-pan-video -z-10"
      >
        <source src="/newbg.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay - smooth black fade on the left */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 via-30% to-transparent to-60% -z-10" />

      {/* Extra dark overlay on mobile for readability */}
      <div className="absolute inset-0 bg-black/30 md:bg-transparent -z-10" />

      {/* Gradient overlay - bottom fade to blend with next section */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-[80%] to-black -z-10" />

      {/* Content Container */}
      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 relative z-10 mt-24 sm:mt-20 md:mt-20 lg:mt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl space-y-4 sm:space-y-5"
        >
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4rem] font-serif tracking-wide leading-none text-white">
            CREATORS <span className="text-[#F2C94C] [text-shadow:0_0_30px_rgba(242,201,76,0.8),0_0_10px_rgba(242,201,76,0.5)]">OAK</span>
          </h1>

          {/* Subheading */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif text-white/90 leading-[1.15]">
            Curating Creators. Growing Brands.
          </h2>

          {/* Description */}
          <p className="text-gray-300 max-w-lg text-sm md:text-base leading-relaxed pt-1 sm:pt-2 font-medium">
            We connect visionary creators with ambitious brands<br className="hidden md:block" />
            to build stories that inspire, engage and grow.
          </p>


        </motion.div>
      </div>

      {/* Scroll Down Arrow */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 10 }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
      >
        <ChevronDown className="w-8 h-8 sm:w-10 sm:h-10 text-white/90" strokeWidth={1.5} />
      </motion.div>
    </section>
  );
}
