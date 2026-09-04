"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const brandsRow1 = [
  "/brands_logo/1. amazon logo.png",
  "/brands_logo/2. sunsilk logo.png",
  "/brands_logo/3. philips.png",
  "/brands_logo/4. bru.png",
  "/brands_logo/5. zomato.png",
];

const brandsRow2 = [
  "/brands_logo/6. master chow.png",
  "/brands_logo/7. milk basket.png",
  "/brands_logo/8. urban platter.png",
  "/brands_logo/9. vogue.svg",
  "/brands_logo/10. disano.png",
];

export default function HeroSection2() {
  return (
    <section id="work" className="py-16 sm:py-24 md:py-32 bg-black overflow-hidden flex flex-col justify-center min-h-[40vh] sm:min-h-[50vh] gap-8 sm:gap-12 border-t border-white/10">
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 }
          }
        }}
        className="text-center mb-2 sm:mb-4 px-4 sm:px-6"
      >
        <motion.h2 
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
          className="text-2xl sm:text-3xl md:text-5xl font-serif text-white mb-3 sm:mb-4"
        >
          Brands We Grew
        </motion.h2>
        <motion.p 
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
          className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base"
        >
          Partnering with industry leaders and visionaries.
        </motion.p>
      </motion.div>

      {/* Row 1: Moves Left */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative flex whitespace-nowrap overflow-hidden py-2 sm:py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        <div
          className="flex w-max gap-12 sm:gap-20 md:gap-32 pr-12 sm:pr-20 md:pr-32 items-center animate-marquee-left pause-on-hover"
        >
          {[...brandsRow1, ...brandsRow1, ...brandsRow1].map((logoSrc, i) => (
            <div key={i} className="relative w-32 sm:w-40 md:w-48 h-12 sm:h-16 md:h-20 flex items-center justify-center">
              <Image 
                src={logoSrc}
                alt="Brand Logo"
                fill
                className={`object-contain hover:scale-105 transition-transform duration-300 ${logoSrc.includes('amazon') ? 'bg-white rounded-lg p-2 sm:p-3' : ''}`}
                sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Row 2: Moves Right */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
        className="relative flex whitespace-nowrap overflow-hidden py-2 sm:py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        <div
          className="flex w-max gap-12 sm:gap-20 md:gap-32 pr-12 sm:pr-20 md:pr-32 items-center animate-marquee-right pause-on-hover"
        >
          {[...brandsRow2, ...brandsRow2, ...brandsRow2].map((logoSrc, i) => (
            <div key={i} className="relative w-32 sm:w-40 md:w-48 h-12 sm:h-16 md:h-20">
              <Image 
                src={logoSrc}
                alt="Brand Logo"
                fill
                className="object-contain hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
              />
            </div>
          ))}
        </div>
      </motion.div>

    </section>
  );
}
