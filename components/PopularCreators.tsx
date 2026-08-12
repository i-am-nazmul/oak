"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const DUMMY_CREATORS = [
  {
    id: 1,
    name: "Alex Rivera",
    niche: "Tech & Gadgets",
    followers: "1.2M",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    niche: "Lifestyle & Fashion",
    followers: "850K",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: 3,
    name: "Marcus Chen",
    niche: "Fitness & Health",
    followers: "2.4M",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    niche: "Travel & Adventure",
    followers: "3.1M",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400&h=400"
  }
];

export default function PopularCreators() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto relative z-10 overflow-hidden">
      <div className="text-center mb-12 md:mb-16">
        <span className="text-gold font-playfair text-xl mb-4 block">Our Network</span>
        <h2 className="text-3xl md:text-5xl font-playfair font-bold text-dark-green">Popular Creators Working With Us</h2>
        <p className="text-foreground/70 mt-4 md:mt-6 max-w-2xl mx-auto text-base md:text-lg">
          We partner with industry-leading voices to amplify your brand's message across every major platform.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {DUMMY_CREATORS.map((creator, idx) => (
          <motion.div
            key={creator.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative bg-white/50 backdrop-blur-sm rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-dark-green/10 hover:border-dark-green/30"
          >
            <div className="aspect-square relative overflow-hidden">
              <Image
                src={creator.image}
                alt={creator.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-green/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div className="p-6 relative bg-white">
              <h3 className="text-xl font-bold font-playfair text-dark-green mb-1">{creator.name}</h3>
              <p className="text-gold text-sm font-medium mb-3">{creator.niche}</p>
              <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                <span className="text-foreground/60 text-sm">Audience Size</span>
                <span className="font-semibold text-dark-green">{creator.followers}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
