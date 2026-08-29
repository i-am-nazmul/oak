"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function FooterCTA() {
  return (
    <footer id="contact" className="relative bg-[#050505] text-white pt-20 pb-8 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden border-t border-[#dfb871]/40">
      {/* Background Abstract Waves (Left and Right) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Left Wave Effect */}
        <div 
          className="absolute top-0 -left-[20%] w-[50%] h-full opacity-30 mix-blend-screen"
          style={{
            background: 'radial-gradient(circle at 0% 50%, rgba(223, 184, 113, 0.15) 0%, transparent 70%)',
            boxShadow: 'inset -20px 0 100px #050505'
          }}
        />
        {/* Right Wave Effect */}
        <div 
          className="absolute top-0 -right-[20%] w-[50%] h-full opacity-30 mix-blend-screen"
          style={{
            background: 'radial-gradient(circle at 100% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
            boxShadow: 'inset 20px 0 100px #050505'
          }}
        />
        
        {/* CSS Mesh simulation using repeated radial gradients */}
        <div 
          className="absolute top-0 -left-[10%] w-[30%] h-[150%] opacity-20 transform -rotate-12"
          style={{
            backgroundImage: 'radial-gradient(circle at center, #dfb871 1px, transparent 1px)',
            backgroundSize: '15px 15px',
            maskImage: 'radial-gradient(circle at center, black 0%, transparent 60%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 60%)'
          }}
        />
        <div 
          className="absolute bottom-0 -right-[10%] w-[30%] h-[150%] opacity-20 transform rotate-12"
          style={{
            backgroundImage: 'radial-gradient(circle at center, #8b5cf6 1px, transparent 1px)',
            backgroundSize: '15px 15px',
            maskImage: 'radial-gradient(circle at center, black 0%, transparent 60%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 60%)'
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col pr-4 border-l-0 lg:border-r border-[#dfb871]/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image 
                  src="/goldentree.png" 
                  alt="Creators Oak" 
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-widest uppercase text-white">Creators Oak</span>
                <span className="text-[#dfb871] text-[10px] sm:text-xs font-medium">Curating Creators. Growing Brands.</span>
              </div>
            </div>
            
            <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-[280px]">
              Where brands find their voice and creators find their audience.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="https://www.instagram.com/creatorsoak" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#dfb871] flex items-center justify-center text-[#dfb871] hover:bg-[#dfb871] hover:text-black transition-colors group">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/creatorsoak/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#dfb871] flex items-center justify-center text-[#dfb871] hover:bg-[#dfb871] hover:text-black transition-colors group">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
              </a>
              <a href="mailto:connect@creatorsoak.com" className="w-10 h-10 rounded-full border border-[#dfb871] flex items-center justify-center text-[#dfb871] hover:bg-[#dfb871] hover:text-black transition-colors group">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="flex flex-col px-0 lg:px-4 border-l-0 lg:border-r border-[#dfb871]/20">
            <h4 className="text-[#dfb871] font-bold text-xs tracking-widest uppercase mb-6">Explore</h4>
            <div className="flex flex-col gap-4 text-sm text-white/70">
              <Link href="#" className="hover:text-[#dfb871] transition-colors w-fit">Home</Link>
              <Link href="#" className="hover:text-[#dfb871] transition-colors w-fit">About Us</Link>
              <Link href="#" className="hover:text-[#dfb871] transition-colors w-fit">Services</Link>
              <Link href="#" className="hover:text-[#dfb871] transition-colors w-fit">For Brands</Link>
              <Link href="#" className="hover:text-[#dfb871] transition-colors w-fit">For Creators</Link>
              <Link href="#" className="hover:text-[#dfb871] transition-colors w-fit">Our Work</Link>
              <Link href="#" className="hover:text-[#dfb871] transition-colors w-fit">Contact</Link>
            </div>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col px-0 lg:px-4 border-l-0 lg:border-r border-[#dfb871]/20">
            <h4 className="text-[#dfb871] font-bold text-xs tracking-widest uppercase mb-6">Services</h4>
            <div className="flex flex-col gap-4 text-sm text-white/70">
              <Link href="#" className="hover:text-[#dfb871] transition-colors w-fit">Brand Research</Link>
              <Link href="#" className="hover:text-[#dfb871] transition-colors w-fit">Product & Launch Strategy</Link>
              <Link href="#" className="hover:text-[#dfb871] transition-colors w-fit">Strategic Content Planning</Link>
              <Link href="#" className="hover:text-[#dfb871] transition-colors w-fit">Creator Marketing</Link>
              <Link href="#" className="hover:text-[#dfb871] transition-colors w-fit">Creative & Social</Link>
              <Link href="#" className="hover:text-[#dfb871] transition-colors w-fit">Web Experiences</Link>
            </div>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col px-0 lg:px-4">
            <h4 className="text-[#dfb871] font-bold text-xs tracking-widest uppercase mb-6">Contact</h4>
            <div className="flex flex-col gap-6 text-sm text-white/70">
              
              <div className="flex gap-4 items-start">
                <Phone className="w-5 h-5 text-[#dfb871] mt-0.5 shrink-0" />
                <a href="tel:7411310872" className="hover:text-[#dfb871] transition-colors">+91 74113 10872</a>
              </div>
              
              <div className="flex gap-4 items-start">
                <Mail className="w-5 h-5 text-[#dfb871] mt-0.5 shrink-0" />
                <div className="flex flex-col">
                  <a href="mailto:connect@creatorsoak.com" className="hover:text-[#dfb871] transition-colors">connect@creatorsoak.com</a>
                  <span className="text-white/40 text-xs mt-1">(General Inquiries)</span>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Mail className="w-5 h-5 text-[#dfb871] mt-0.5 shrink-0" />
                <div className="flex flex-col">
                  <a href="mailto:business@creatorsoak.com" className="hover:text-[#dfb871] transition-colors">business@creatorsoak.com</a>
                  <span className="text-white/40 text-xs mt-1">(Business Queries)</span>
                </div>
              </div>

              <div className="flex gap-4 items-start mt-2">
                <MapPin className="w-5 h-5 text-[#dfb871] mt-0.5 shrink-0" />
                <span>India <span className="text-white/30 mx-2">|</span> Global Collaborations</span>
              </div>

            </div>
          </div>

        </div>

        {/* Footer Bottom Line */}
        <div className="pt-6 sm:pt-8 border-t border-[#dfb871]/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>© 2026 Creators Oak. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-[#dfb871] transition-colors">Privacy Policy</Link>
            <span className="text-white/20">|</span>
            <Link href="#" className="hover:text-[#dfb871] transition-colors">Terms of Service</Link>
            <span className="text-white/20">|</span>
            <Link href="#" className="hover:text-[#dfb871] transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
