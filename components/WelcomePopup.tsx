"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    // Always show popup for development/testing
    const timer = setTimeout(() => setIsOpen(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSelection = (type: "creator" | "business") => {
    // Dummy handler
    console.log(`User selected: ${type}`);
    handleClose();
  };

  // Prevent hydration mismatch
  if (!hasMounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl z-10 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-dark-green transition-colors rounded-full hover:bg-gray-100"
              aria-label="Close popup"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="text-center mb-8">
              <span className="text-gold font-playfair text-xl mb-2 block">Welcome</span>
              <h2 className="text-3xl font-playfair font-bold text-dark-green">Are you a creator or a businessman?</h2>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => handleSelection("creator")}
                className="w-full py-4 px-6 rounded-xl border-2 border-dark-green text-dark-green font-semibold text-lg hover:bg-dark-green hover:text-white transition-all duration-300 transform hover:-translate-y-1"
              >
                Creator
              </button>
              <button
                onClick={() => handleSelection("business")}
                className="w-full py-4 px-6 rounded-xl bg-dark-green text-white font-semibold text-lg hover:bg-dark-green/90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                Businessman
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
