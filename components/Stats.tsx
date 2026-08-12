"use client";

import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { value: "1000+", label: "Verified Creators" },
    { value: "381,688", label: "Active Campaigns" },
    { value: "Millions+", label: "Potential Reach" },
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 relative bg-white/50 backdrop-blur-sm border-y border-white/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center mb-12 md:mb-16">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
            >
              <h3 className="text-3xl md:text-5xl font-bold font-playfair text-dark-green mb-2">{stat.value}</h3>
              <p className="text-base md:text-lg text-foreground/70 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Partners/Logos */}
        <div className="pt-12 border-t border-dark-green/10">
          <p className="text-center text-xs md:text-sm font-semibold uppercase tracking-widest text-dark-green/50 mb-8">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {["Brand A", "Sanello", "LURVE", "ANIL.Fit", "Studio X"].map((brand, i) => (
              <span key={i} className="text-xl md:text-2xl font-bold font-playfair text-dark-green">{brand}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
