"use client";

import { motion } from "framer-motion";

const brandsRow1 = ["ACME CORP", "GLOBEX", "SOYLENT", "INITECH", "UMBRELLA", "STARK", "WAYNE", "CYBERDYNE"];
const brandsRow2 = ["VOGUE", "CHANEL", "SUPREME", "OFF-WHITE", "BALENCIAGA", "GUCCI", "PRADA", "ROLEX"];

export default function HeroSection2() {
  return (
    <section className="py-24 md:py-32 bg-[#F3EFEA] overflow-hidden flex flex-col justify-center min-h-[50vh] gap-12 border-t border-[#1a362d]/10">
      
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
        className="text-center mb-4 px-6"
      >
        <motion.h2 
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
          className="text-3xl md:text-5xl font-serif text-[#1a362d] mb-4"
        >
          Brands We Grew
        </motion.h2>
        <motion.p 
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
          className="text-[#1a362d]/70 max-w-2xl mx-auto"
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
        className="relative flex whitespace-nowrap overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        <div
          className="flex w-max gap-16 md:gap-32 pr-16 md:pr-32 items-center animate-marquee-left pause-on-hover"
        >
          {[...brandsRow1, ...brandsRow1].map((brand, i) => (
            <span key={i} className="text-5xl md:text-7xl font-bold text-transparent" style={{ WebkitTextStroke: "2px #1a362d" }}>
              {brand}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Row 2: Moves Right */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
        className="relative flex whitespace-nowrap overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        <div
          className="flex w-max gap-16 md:gap-32 pr-16 md:pr-32 items-center animate-marquee-right pause-on-hover"
        >
          {[...brandsRow2, ...brandsRow2].map((brand, i) => (
            <span key={i} className="text-5xl md:text-7xl font-bold text-[#1a362d]/10">
              {brand}
            </span>
          ))}
        </div>
      </motion.div>

    </section>
  );
}
