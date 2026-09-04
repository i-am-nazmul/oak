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
    <section className="relative min-h-screen flex items-start sm:items-center overflow-hidden">
      {/* Mobile Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="md:hidden absolute inset-0 w-full h-full object-cover object-left -z-10"
      >
        <source src="/mobile_bg.mp4" type="video/mp4" />
      </video>

      {/* Desktop Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="hidden md:block absolute inset-0 w-full h-full object-cover object-[15%_top] mobile-pan-video -z-10"
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
      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 relative z-10 pt-80 mt-0 sm:mt-20 sm:pt-0 md:mt-20 lg:mt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl space-y-4 sm:space-y-5 scale-[1.5] origin-top-left sm:scale-100"
        >
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[4.8rem] font-serif tracking-wide leading-none text-white">
            CREATORS <br className="sm:hidden" /><span className="text-[#F2C94C] [text-shadow:0_0_30px_rgba(242,201,76,0.8),0_0_10px_rgba(242,201,76,0.5)]">OAK</span>
          </h1>

          {/* Subheading */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif text-white/90 leading-[1.15]">
            Curating Creators. <br className="sm:hidden" />Growing Brands.
          </h2>

          {/* Description */}
          <p className="text-gray-300 max-w-[160px] sm:max-w-lg text-sm md:text-base leading-relaxed pt-1 sm:pt-2 font-medium">
            We connect visionary creators with ambitious brands to build stories that inspire, engage and grow.
          </p>

          {/* Let's Connect Button */}
          <div className="pt-2 sm:pt-6 md:pt-8">
            <button 
              type="button" 
              onClick={() => {
                document.getElementById('creators')?.scrollIntoView({ behavior: 'smooth' });
                window.dispatchEvent(new CustomEvent('blink-button', { detail: 'all' }));
              }}
              className="relative inline-flex items-center justify-center rounded-lg sm:rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300 px-7 py-2.5 sm:px-9 sm:py-3 xl:px-11 xl:py-3.5 backdrop-blur-md whitespace-nowrap gap-2 sm:gap-3 group shadow-lg hover:shadow-[0_0_30px_rgba(223,184,113,0.4)]"
            >
              {/* Border Mask Container */}
              <span 
                className="absolute inset-0 rounded-lg sm:rounded-xl pointer-events-none overflow-hidden"
                style={{
                  padding: '2px', // border width
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude'
                }}
              >
                <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_85%,#dfb871_98%,#ffffff_100%)] opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              </span>

              <span className="text-white font-sans text-base sm:text-lg md:text-xl xl:text-2xl font-normal tracking-wide relative z-10">
                Let's Connect
              </span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:translate-x-1 transition-transform relative z-10" />
            </button>
          </div>


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
