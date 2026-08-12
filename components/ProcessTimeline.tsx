"use client";

import { motion } from "framer-motion";

export default function ProcessTimeline() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We dive deep into your brand identity, goals, and target audience to understand your unique positioning."
    },
    {
      number: "02",
      title: "Strategy",
      description: "Crafting a bespoke influencer roadmap that aligns with your objectives and maximizes ROI."
    },
    {
      number: "03",
      title: "Scale",
      description: "Executing campaigns with precision, amplifying reach through strategic creator partnerships."
    },
    {
      number: "04",
      title: "Analytics",
      description: "Data-driven insights to measure success, optimize performance, and inform future campaigns."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-12 md:mb-20">
        <span className="text-gold font-playfair text-xl mb-4 block">Our Process</span>
        <h2 className="text-3xl md:text-5xl font-playfair font-bold text-dark-green">How We Work</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 relative">
        {/* Background decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-lg max-h-lg bg-gold/5 blur-3xl rounded-full pointer-events-none" />

        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="group relative bg-white/60 backdrop-blur-md p-10 rounded-[2rem] border border-dark-green/10 hover:border-gold/50 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
          >
            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="text-5xl font-playfair font-black text-dark-green/10 mb-6 group-hover:text-gold/20 transition-colors duration-500">
                {step.number}
              </div>
              <h3 className="text-3xl font-bold font-playfair text-dark-green mb-4">{step.title}</h3>
              <p className="text-foreground/70 leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
