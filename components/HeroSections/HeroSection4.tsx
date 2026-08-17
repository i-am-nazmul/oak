"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const blocks = [
  {
    id: 1,
    title: "Website Design",
    description: "Crafting visually stunning and highly functional websites tailored to your brand.",
    image: "/pics/ahmetyuksek-autumn-bend-10069119_1920.jpg",
    link: "/blog/website-design",
    colSpan: "md:col-span-2", // Wide
    showLink: true
  },
  {
    id: 2,
    title: "Social Media",
    description: "Empower your brand's online presence with comprehensive strategies.",
    image: "/pics/dianaparkhouse-mist-4551691.jpg",
    link: "/blog/social-media",
    colSpan: "md:col-span-1", // Square
  },
  {
    id: 3,
    title: "Graphics Design",
    description: "Elevate your brand identity with captivating graphic designs.",
    image: "/pics/thegermankid-poppies-5392907_1920.jpg",
    link: "/blog/graphics-design",
    colSpan: "md:col-span-1", // Square
  },
  {
    id: 4,
    title: "SEO",
    description: "Enhance your online visibility and drive organic traffic.",
    image: "/pics/akositim-sunset-10415017_1920.jpg",
    link: "/blog/seo",
    colSpan: "md:col-span-1", // Square
  },
  {
    id: 5,
    title: "Video Editing",
    description: "Transform raw footage into captivating visual narratives.",
    image: "/pics/amaurydeterwangne-stag-5393082.jpg",
    link: "/blog/video-editing",
    colSpan: "md:col-span-2", // Wide
  },
  {
    id: 6,
    title: "Content Writing",
    description: "Fuel your brand's growth with compelling content writing.",
    image: "/pics/marilari-insect-8340649_1920.jpg",
    link: "/blog/content-writing",
    colSpan: "md:col-span-1", // Square
  }
];

export default function HeroSection4() {
  return (
    <section className="py-24 md:py-32 bg-black px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <div className="flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-4 leading-tight">
              WHAT WE<br />
              Create FOR YOU
            </h2>
            <p className="text-white/70 max-w-xl text-lg mx-auto">Transform your digital presence with our comprehensive suite of professional services</p>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {blocks.map((block, index) => (
            <motion.div
              key={block.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer min-h-[320px] md:min-h-[400px] ${block.colSpan}`}
            >
              <Link href={block.link} className="absolute inset-0 z-20">
                <span className="sr-only">Read about {block.title}</span>
              </Link>

              {/* Background Image */}
              <Image 
                src={block.image}
                alt={block.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-90 z-10" />

              {/* Content Box */}
              <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                
                {/* Optional Icon Placeholder */}
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-4 text-[#dfb871]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-[#dfb871] transition-colors">
                  {block.title}
                </h3>
                
                <p className="text-white/80 text-sm md:text-base mb-4 max-w-sm">
                  {block.description}
                </p>

                {block.showLink && (
                  <div className="text-[#dfb871] font-medium text-sm flex items-center mt-auto">
                    Click to learn more
                    <svg className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
