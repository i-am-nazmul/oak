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


      {/* Floating particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 rounded-full bg-gradient-to-tr from-gold to-yellow-200 shadow-[0_0_15px_#D4AF6A]"
          initial={{ 
            x: `${(i * 13.7) % 100}vw`, 
            y: `${(i * 29.3) % 100}vh`,
            scale: (i % 5) * 0.1 + 0.5
          }}
          animate={{
            y: [null, -((i * 17.5) % 50) - 50],
            opacity: [0.2, 1, 0.2]
          }}
          transition={{
            duration: (i % 10) + 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </section>
  );
}
