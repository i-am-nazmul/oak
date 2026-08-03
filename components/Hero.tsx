"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-gold/10 rounded-full blur-[120px]" />
        
        {/* Particle/Grid effect overlay (simplified CSS approach) */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at center, #D4AF6A 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6 relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden flex items-center justify-center shadow-[0_0_50px_rgba(212,175,106,0.3)]"
        >
           <img 
            src="/oak.jpeg" 
            alt="Creators Oak Emblem" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-playfair text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider text-dark-green uppercase text-center leading-none"
        >
          Creators
          <br />
          Oak
        </motion.h1>
      </div>

      {/* Floating particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 rounded-full bg-gradient-to-tr from-gold to-yellow-200 shadow-[0_0_15px_#D4AF6A]"
          initial={{ 
            x: Math.random() * 100 + "vw", 
            y: Math.random() * 100 + "vh",
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{
            y: [null, Math.random() * -100 - 50],
            opacity: [0.2, 1, 0.2]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </section>
  );
}
