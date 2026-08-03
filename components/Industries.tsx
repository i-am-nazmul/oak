"use client";

import { motion } from "framer-motion";

export default function Industries() {
  const industries = [
    {
      title: "Beauty",
      description: "Showcase cosmetics and skincare with creators who embody your brand's aesthetic and values.",
      color: "bg-[#E8D9D5]"
    },
    {
      title: "Food & Beverage",
      description: "Tantalizing content that drives cravings and brand awareness through culinary creators.",
      color: "bg-[#E6DECF]"
    },
    {
      title: "Health & Wellness",
      description: "Authentic stories that inspire healthy lifestyles and build community trust.",
      color: "bg-[#D5E1DE]"
    },
    {
      title: "Tech & Gadgets",
      description: "In-depth reviews and lifestyle integration by tech-savvy influencers.",
      color: "bg-[#DCDDE1]"
    }
  ];

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto relative z-10">
      <div className="flex items-center gap-4 mb-12">
        <span className="text-gold font-playfair text-2xl">3</span>
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-dark-green">Industries We Serve</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {industries.map((industry, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className={`h-48 w-full ${industry.color} relative overflow-hidden flex items-center justify-center`}>
              {/* Abstract shape representing the image from screenshot */}
              <div className="w-24 h-24 bg-white/30 backdrop-blur-md rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.1)] absolute mix-blend-overlay"></div>
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-lg rotate-12 shadow-[0_8px_32px_rgba(0,0,0,0.1)] absolute mix-blend-overlay ml-12 mb-12"></div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold font-playfair text-dark-green mb-3">{industry.title}</h3>
              <p className="text-foreground/70 mb-6 text-sm flex-grow">{industry.description}</p>
              <button className="bg-dark-green text-light-text py-3 rounded-full text-sm font-medium hover:bg-gold transition-colors w-full">
                View Case Study
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
