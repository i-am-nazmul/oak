"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import JoinCreatorsModal from "../JoinCreatorsModal";
import JoinBrandsModal from "../JoinBrandsModal";

// Using high quality Unsplash placeholders that match the aesthetic
const CAMERA_IMG = "/for_creators.png";
const LAPTOP_IMG = "/for_brands.png";

export default function HeroSection9() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBrandsModalOpen, setIsBrandsModalOpen] = useState(false);
  
  const [isBlinkingCreators, setIsBlinkingCreators] = useState(false);
  const [isBlinkingBrands, setIsBlinkingBrands] = useState(false);

  useEffect(() => {
    const handleBlink = (e: CustomEvent) => {
      console.log('Blink event received:', e.detail);
      setTimeout(() => {
        console.log('Starting blink animation for:', e.detail);
        if (e.detail === 'creators' || e.detail === 'all') {
          setIsBlinkingCreators(true);
          setTimeout(() => setIsBlinkingCreators(false), 1800); // 2 blinks * 0.9s
        }
        if (e.detail === 'brands' || e.detail === 'all') {
          setIsBlinkingBrands(true);
          setTimeout(() => setIsBlinkingBrands(false), 1800);
        }
      }, 2000);
    };

    window.addEventListener('blink-button', handleBlink as EventListener);
    return () => window.removeEventListener('blink-button', handleBlink as EventListener);
  }, []);

  const blinkVariants: Variants = {
    idle: {
      scale: 1,
      boxShadow: "0 0 0 0 rgba(223,184,113,0)",
      borderColor: "rgba(223,184,113,0.6)",
      backgroundColor: "rgba(223,184,113,0)",
    },
    blinking: {
      scale: [1, 1.10, 1], 
      boxShadow: [
        "0 0 0 0 rgba(223,184,113,0)", 
        "0 0 35px 6px rgba(223,184,113,0.55)", 
        "0 0 0 0 rgba(223,184,113,0)"
      ],
      borderColor: [
        "rgba(223,184,113,0.6)",
        "rgba(242,201,76,1)",
        "rgba(223,184,113,0.6)"
      ],
      backgroundColor: [
        "rgba(223,184,113,0)",
        "rgba(223,184,113,0.18)",
        "rgba(223,184,113,0)"
      ],
      transition: { duration: 0.9, repeat: 1, ease: "easeInOut" }
    }
  };

  return (
    <>
      <section className="bg-black py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-20 relative z-10">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
        
        {/* Card 1: For Creators */}
        <motion.div 
          id="creators"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group rounded-[2rem] p-[1.5px] bg-gradient-to-br from-pink-500/40 via-orange-400/40 to-transparent hover:from-pink-500/70 hover:via-orange-400/70 transition-all duration-500 overflow-hidden scroll-mt-24 md:scroll-mt-32"
        >
          <div className="bg-[#050505] rounded-[2rem] h-full min-h-[300px] sm:min-h-[350px] flex flex-col p-6 sm:p-10 relative overflow-hidden">
            
            {/* Background Image (Camera on left) */}
            <div className="absolute inset-0 z-0">
              <img 
                src={CAMERA_IMG} 
                alt="Camera" 
                className="w-full h-full object-cover object-left opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
            </div>

            {/* Content (Pushed Right) */}
            <div className="relative z-10 flex flex-col h-full w-full max-w-[320px] sm:max-w-[380px] ml-0 sm:ml-auto justify-center">
              <span className="text-[#dfb871] text-xs sm:text-sm font-bold tracking-widest uppercase mb-4 block">
                FOR CREATORS
              </span>
              <h3 className="text-3xl sm:text-4xl md:text-[2.75rem] font-serif text-white mb-4 sm:mb-6 leading-[1.15]">
                Turn Your Voice <br />
                Into <span className="text-[#dfb871]">Opportunity.</span>
              </h3>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10">
                We connect creators with brands that fit their voice, audience and values — building collaborations beyond one-off campaigns.
              </p>
              
              <div>
                <motion.button 
                  onClick={() => {
                    setIsModalOpen(true);
                    fetch('https://oak-server-m6hr.onrender.com/health').catch(console.error);
                  }}
                  animate={isBlinkingCreators ? "blinking" : "idle"}
                  variants={blinkVariants}
                  whileHover={{ scale: 1.14 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-4 border border-[#dfb871] bg-transparent hover:bg-[#dfb871]/20 text-[#dfb871] px-6 sm:px-8 py-3 rounded-full transition-colors duration-300 text-sm font-medium group/btn"
                >
                  Join Creators Oak
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Card 2: For Brands */}
        <motion.div 
          id="brands"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative group rounded-[2rem] p-[1.5px] bg-gradient-to-bl from-purple-500/40 via-orange-400/40 to-transparent hover:from-purple-500/70 hover:via-orange-400/70 transition-all duration-500 overflow-hidden scroll-mt-24 md:scroll-mt-32"
        >
          <div className="bg-[#050505] rounded-[2rem] h-full min-h-[300px] sm:min-h-[350px] flex flex-col p-6 sm:p-10 relative overflow-hidden">
            
            {/* Background Image (Laptop on right) */}
            <div className="absolute inset-0 z-0 flex justify-end">
              <img 
                src={LAPTOP_IMG} 
                alt="Laptop analytics" 
                className="w-full h-full object-cover object-right opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
            </div>

            {/* Content (Pushed Left) */}
            <div className="relative z-10 flex flex-col h-full w-full max-w-[320px] sm:max-w-[380px] mr-0 sm:mr-auto justify-center">
              <span className="text-[#dfb871] text-xs sm:text-sm font-bold tracking-widest uppercase mb-4 block">
                FOR BRANDS
              </span>
              <h3 className="text-3xl sm:text-4xl md:text-[2.75rem] font-serif text-white mb-4 sm:mb-6 leading-[1.15]">
                Build Something <br />
                That <span className="text-[#dfb871]">Lasts.</span>
              </h3>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10">
                From brand research to creator collaborations, we build campaigns designed around your brand, audience and long-term growth.
              </p>
              
              <div>
                <motion.button 
                  onClick={() => setIsBrandsModalOpen(true)}
                  animate={isBlinkingBrands ? "blinking" : "idle"}
                  variants={blinkVariants}
                  whileHover={{ scale: 1.14 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-4 border border-[#dfb871] bg-transparent hover:bg-[#dfb871]/20 text-[#dfb871] px-6 sm:px-8 py-3 rounded-full transition-colors duration-300 text-sm font-medium group/btn"
                >
                  Partner With Us
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
    <JoinCreatorsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    <JoinBrandsModal isOpen={isBrandsModalOpen} onClose={() => setIsBrandsModalOpen(false)} />
    </>
  );
}
