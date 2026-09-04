"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    id: 1,
    value: 99,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Our clients love the results we deliver",
    accentColor: "#6366f1", // indigo
  },
  {
    id: 2,
    value: 27,
    suffix: "+",
    label: "Projects Completed",
    description: "Successful projects across industries",
    accentColor: "#64748b", // slate
  },
  {
    id: 3,
    value: 5,
    suffix: "x",
    label: "Average ROI",
    description: "Return on investment for our clients",
    accentColor: "#22c55e", // green
  },
  {
    id: 4,
    value: 24,
    suffix: "/7",
    label: "Support Available",
    description: "We're always here when you need us",
    accentColor: "#f97316", // orange
  },
];

function AnimatedCounter({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // ~60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span className="text-3xl sm:text-5xl md:text-6xl font-black text-white tabular-nums">
      {count}
      <span className="text-white/80">{suffix}</span>
    </span>
  );
}

export default function HeroSection8() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-24 md:py-36 px-4 sm:px-6 md:px-12 overflow-hidden bg-[#050505]"
    >
      {/* Background Image */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="/driving_results.png" 
          alt="Driving Results Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/40 to-[#050505]" />
      </motion.div>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10 sm:mb-16 md:mb-20 relative z-10"
      >
        <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 bg-white/5 text-white/70 text-xs sm:text-sm mb-4 sm:mb-6">
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2Z" />
          </svg>
          Our Impact
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-3 sm:mb-4">
          Driving <em className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Results</em> That Matter
        </h2>
        <p className="text-white/50 max-w-xl mx-auto text-sm sm:text-base md:text-lg px-2">
          Numbers don&apos;t lie. See how our expertise translates into measurable success for our clients.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 relative z-10">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative group rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center flex flex-col items-center gap-2 sm:gap-3 overflow-hidden"
            style={{
              background: "linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {/* Subtle glow on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
              style={{
                background: `radial-gradient(circle at 50% 80%, ${stat.accentColor}15 0%, transparent 70%)`,
              }}
            />

            <div className="relative z-10">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} inView={isInView} />
            </div>
            <h3 className="relative z-10 text-white font-bold text-xs sm:text-sm md:text-base">{stat.label}</h3>
            <p className="relative z-10 text-white/40 text-[10px] sm:text-xs md:text-sm leading-relaxed">{stat.description}</p>

            {/* Accent bar */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 + index * 0.15 }}
              className="h-[2px] sm:h-[3px] rounded-full mt-1 sm:mt-2"
              style={{ backgroundColor: stat.accentColor }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
