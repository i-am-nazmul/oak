"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { 
  Home, 
  Briefcase, 
  User, 
  Building2, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp,
  Folder,
  Phone,
  Info
} from "lucide-react";
import AboutUsModal from "./AboutUsModal";

const navMenuItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "services", label: "Services", icon: Briefcase },
  { id: "creators", label: "For Creators", icon: User },
  { id: "brands", label: "For Brands", icon: Building2 },
  { id: "work", label: "Our Work", icon: Folder },
  { id: "contact", label: "Contact", icon: Phone },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsDesktopMenuOpen(false);
      }
    };

    if (isDesktopMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDesktopMenuOpen]);

  const handleScroll = (id: string) => {
    setIsMobileMenuOpen(false);
    setIsDesktopMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    
    if (id === 'creators') {
      window.dispatchEvent(new CustomEvent('blink-button', { detail: 'creators' }));
    } else if (id === 'brands') {
      window.dispatchEvent(new CustomEvent('blink-button', { detail: 'brands' }));
    } else if (id === 'contact') {
      window.dispatchEvent(new CustomEvent('blink-contact'));
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="absolute top-0 left-0 right-0 px-3 sm:px-6 md:px-12 lg:px-20 flex items-center justify-between bg-transparent z-50"
    >
      <div className="flex flex-row items-center justify-center gap-1 sm:gap-4">
        <div className="relative w-12 h-12 sm:w-20 sm:h-20 md:w-28 md:h-28 flex items-center justify-center shrink-0">
          <Image
            src="/goldentree.png"
            alt="Golden Tree Logo"
            fill
            priority
            sizes="(max-width: 640px) 48px, (max-width: 768px) 80px, 112px"
            className="object-contain"
          />
        </div>
        <span className="font-serif text-sm sm:text-xl md:text-2xl font-medium text-white tracking-widest uppercase whitespace-nowrap">Creators Oak</span>
      </div>

      <div className="flex items-center gap-2 sm:gap-8 xl:gap-12">
        <button 
          onClick={() => setIsAboutModalOpen(true)}
          className="hidden sm:block hover:text-[#dfb871] transition-colors tracking-wide text-white font-sans text-base xl:text-lg font-medium whitespace-nowrap"
        >
          About Us
        </button>

        <div className="relative" ref={menuRef}>
          <button 
            onClick={() => setIsDesktopMenuOpen(!isDesktopMenuOpen)}
            className="flex items-center gap-2 border border-[#dfb871]/40 hover:border-[#dfb871] bg-black/40 hover:bg-black/60 px-4 sm:px-5 py-1.5 sm:py-2 rounded-md sm:rounded-lg transition-all duration-300 text-[#dfb871] font-sans text-base sm:text-base font-medium tracking-wide shadow-sm"
            aria-label="Toggle navigation menu"
          >
            <span>Menu</span>
            {isDesktopMenuOpen ? (
              <ChevronUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#dfb871]" strokeWidth={2} />
            ) : (
              <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#dfb871]" strokeWidth={2} />
            )}
          </button>
          
          <AnimatePresence>
            {isDesktopMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute top-full mt-3 sm:mt-4 right-0 w-[170px] sm:w-[190px] bg-[#161616]/95 backdrop-blur-xl border border-[#dfb871]/50 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-50 overflow-visible"
              >
                <div className="absolute -top-[2px] right-6 sm:right-8 w-12 h-[3px] bg-[#dfb871] rounded-full shadow-[0_0_8px_rgba(223,184,113,0.7)]" />

                <div className="flex flex-col py-1 overflow-hidden rounded-2xl">
                  {navMenuItems.map((item, idx) => {
                    const Icon = item.icon;
                    const isLast = idx === navMenuItems.length - 1;
                    return (
                      <div key={item.id}>
                        <button
                          onClick={() => handleScroll(item.id)}
                          className="group flex items-center justify-between w-full px-5 sm:px-6 py-4 text-left transition-colors hover:bg-white/[0.04] cursor-pointer"
                        >
                          <div className="flex items-center gap-4 sm:gap-5">
                            <Icon className="w-5 h-5 text-[#dfb871] shrink-0" strokeWidth={1.7} />
                            <span className="text-white font-sans text-sm sm:text-base font-medium tracking-wide group-hover:text-[#dfb871] transition-colors whitespace-nowrap">
                              {item.label}
                            </span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-[#dfb871] group-hover:translate-x-1 transition-transform shrink-0" strokeWidth={1.8} />
                        </button>
                        {!isLast && <div className="border-b border-white/[0.08] mx-4 sm:mx-5" />}
                      </div>
                    );
                  })}
                  {/* About Us - only visible on mobile since the button is hidden */}
                  <div className="sm:hidden">
                    <div className="border-b border-white/[0.08] mx-4 sm:mx-5" />
                    <button
                      onClick={() => {
                        setIsDesktopMenuOpen(false);
                        setIsAboutModalOpen(true);
                      }}
                      className="group flex items-center justify-between w-full px-5 py-4 text-left transition-colors hover:bg-white/[0.04] cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <Info className="w-5 h-5 text-[#dfb871] shrink-0" strokeWidth={1.7} />
                        <span className="text-white font-sans text-sm font-medium tracking-wide group-hover:text-[#dfb871] transition-colors whitespace-nowrap">
                          About Us
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#dfb871] group-hover:translate-x-1 transition-transform shrink-0" strokeWidth={1.8} />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>


      <AboutUsModal isOpen={isAboutModalOpen} onClose={() => setIsAboutModalOpen(false)} />
    </motion.nav>
  );
}
