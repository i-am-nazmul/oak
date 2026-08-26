"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FooterCTA() {
  return (
    <footer className="relative bg-dark-green text-light-text py-16 sm:py-20 md:py-32 px-4 sm:px-6 md:px-8 overflow-hidden rounded-t-[1.5rem] sm:rounded-t-[2rem] md:rounded-t-[3rem] mt-10 sm:mt-16 md:mt-24">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[20rem] sm:w-[40rem] h-[20rem] sm:h-[40rem] bg-gold/10 rounded-full blur-[100px]" />
        
        {/* Subtle grid lines */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(to right, #D4AF6A 1px, transparent 1px), linear-gradient(to bottom, #D4AF6A 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold font-medium tracking-[0.2em] uppercase text-xs sm:text-sm mb-4 sm:mb-6">Premium Services</p>
          <h2 className="text-3xl sm:text-4xl md:text-7xl font-playfair font-bold mb-5 sm:mb-6 md:mb-8 leading-tight">
            Let&apos;s Build Something <br className="hidden sm:block" />
            <span className="text-gold italic">Meaningful</span>
          </h2>
          <p className="text-light-text/70 max-w-2xl mx-auto text-sm sm:text-base md:text-lg mb-8 sm:mb-10 md:mb-12 px-2">
            You are one click away from transforming your brand&apos;s digital presence with elite creators and data-driven strategies.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full px-4 sm:px-0">
            <button className="bg-gradient-to-r from-gold to-yellow-600 text-dark-green px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:shadow-[0_0_30px_rgba(212,175,106,0.4)] transition-all transform hover:-translate-y-1 w-full sm:w-auto">
              Book a Call
            </button>
            <button className="bg-transparent border border-light-text/30 text-light-text px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-light-text/10 transition-all w-full sm:w-auto">
              Email Us
            </button>
          </div>
        </motion.div>
      </div>

      {/* Footer Bottom Links */}
      <div className="max-w-7xl mx-auto relative z-10 mt-16 sm:mt-20 md:mt-32 pt-6 sm:pt-8 border-t border-light-text/10 flex flex-col items-center gap-4 md:flex-row md:justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 sm:w-8 sm:h-8 relative rounded-full overflow-hidden bg-white">
            <Image 
              src="/oak.jpeg" 
              alt="Creators Oak" 
              fill
              sizes="32px"
              className="object-cover"
            />
          </div>
          <span className="font-playfair text-lg sm:text-xl font-bold">Creators Oak</span>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-light-text/60">
          <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-gold transition-colors">Instagram</a>
          <a href="#" className="hover:text-gold transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
