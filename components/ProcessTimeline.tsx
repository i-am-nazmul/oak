"use client";

import { motion } from "framer-motion";

export default function ProcessTimeline() {
  const steps = [
    {
      title: "Discovery",
      description: "We dive deep into your brand identity, goals, and target audience to understand your unique positioning."
    },
    {
      title: "Strategy",
      description: "Crafting a bespoke influencer roadmap that aligns with your objectives and maximizes ROI."
    },
    {
      title: "Scale",
      description: "Executing campaigns with precision, amplifying reach through strategic creator partnerships."
    },
    {
      title: "Analytics",
      description: "Data-driven insights to measure success, optimize performance, and inform future campaigns."
    }
  ];

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto relative z-10">
      <div className="flex items-center gap-4 mb-20">
        <span className="text-gold font-playfair text-2xl">4</span>
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-dark-green">How We Work</h2>
      </div>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-[23px] md:left-1/2 top-0 bottom-0 w-[2px] bg-dark-green/20" />

        <div className="space-y-16">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col md:flex-row relative ${
                idx % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-12 h-12 rounded-full border-4 border-white bg-dark-green transform md:-translate-x-1/2 flex items-center justify-center shadow-lg z-10">
                <div className="w-3 h-3 bg-gold rounded-full" />
              </div>

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? "md:pl-16" : "md:pr-16 text-left md:text-right"}`}>
                <h3 className="text-3xl font-bold font-playfair text-dark-green mb-4 pt-2">{step.title}</h3>
                <p className="text-foreground/70 leading-relaxed max-w-md inline-block">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
