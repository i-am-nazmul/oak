"use client";

import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Influencer Marketing",
      description: "Connect with top-tier creators to amplify your brand message authentically.",
      icon: "🎯"
    },
    {
      title: "UGC Campaigns",
      description: "Leverage user-generated content that drives conversion and builds trust.",
      icon: "📸"
    },
    {
      title: "Brand Strategy",
      description: "Comprehensive social media strategies tailored to your specific goals.",
      icon: "📈"
    },
    {
      title: "Content Creation",
      description: "High-quality, platform-native content that resonates with your audience.",
      icon: "✨"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      <div className="flex items-center gap-4 mb-8 md:mb-12">
        <span className="text-gold font-playfair text-xl md:text-2xl">2</span>
        <h2 className="text-3xl md:text-5xl font-playfair font-bold text-dark-green">Premium Services</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className="bg-white/40 backdrop-blur-md border border-white/60 p-8 rounded-3xl hover:bg-white/60 transition-all duration-300 shadow-xl shadow-dark-green/5 group"
          >
            <div className="text-4xl mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold font-playfair text-dark-green mb-4">{service.title}</h3>
            <p className="text-foreground/70 mb-8 line-clamp-3">{service.description}</p>
            <button className="bg-dark-green text-light-text px-6 py-2 rounded-full text-sm font-medium hover:bg-gold transition-colors">
              Learn More
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
