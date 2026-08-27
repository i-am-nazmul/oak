"use client";

import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Strategic Content Planning",
    description: "We develop comprehensive content strategies that align with your business goals, target audience, and market positioning. Our data-driven approach ensures every piece of content serves a purpose and drives results.",
    image: "/hero_section_5_pics/1.png"
  },
  {
    id: 2,
    title: "Creative Storytelling",
    description: "Transform your brand message into compelling narratives that resonate with your audience. We craft stories that connect emotionally, build trust, and differentiate your brand in a crowded marketplace.",
    image: "/hero_section_5_pics/2.png"
  },
  {
    id: 3,
    title: "Multi-Platform Distribution",
    description: "Maximize your content's reach through strategic distribution across all relevant channels. From social media to email marketing, we ensure your content reaches the right audience at the right time.",
    image: "/hero_section_5_pics/3.png"
  },
  {
    id: 4,
    title: "Performance Analytics",
    description: "Track and measure the success of your campaigns with in-depth analytics. We provide actionable insights to continuously optimize your strategy and maximize return on investment.",
    image: "/hero_section_5_pics/4.png"
  },
  {
    id: 5,
    title: "SEO-Optimized Content",
    description: "Create content that not only engages your audience but also ranks well in search engines. Our SEO expertise ensures your content is discoverable and drives organic traffic to your website.",
    image: "/hero_section_5_pics/5.png"
  }
];

export default function HeroSection5() {
  return (
    <section className="bg-black py-16 sm:py-24 md:py-40 px-4 sm:px-6 md:px-8 relative z-10">
      {/* Bubble keyframes */}
      <style jsx>{`
        @keyframes float-bubble {
          0% { transform: translateY(0) translateX(0) scale(1); opacity: 0.6; }
          25% { transform: translateY(-30px) translateX(10px) scale(1.1); opacity: 0.8; }
          50% { transform: translateY(-60px) translateX(-5px) scale(0.9); opacity: 0.5; }
          75% { transform: translateY(-90px) translateX(15px) scale(1.05); opacity: 0.7; }
          100% { transform: translateY(-120px) translateX(0) scale(1); opacity: 0; }
        }
        .bubble {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          animation: float-bubble linear infinite;
        }
      `}</style>

      <div className="max-w-6xl mx-auto flex flex-col pb-[10vh] sm:pb-[15vh]">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className="sticky w-full bg-black border border-white/30 sm:border-[1.5px] sm:border-white rounded-xl sm:rounded-2xl shadow-2xl flex flex-col justify-start mb-20 sm:mb-32 last:mb-0 transition-all duration-300 overflow-hidden"
            style={{ 
              top: `calc(8vh + ${index * 3}rem)`,
              minHeight: 'clamp(400px, 65vh, 600px)',
              zIndex: index,
            }}
          >
            {/* Floating glowing bubbles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
              {[...Array(6)].map((_, i) => (
                <span
                  key={i}
                  className="bubble"
                  style={{
                    width: `${8 + i * 4}px`,
                    height: `${8 + i * 4}px`,
                    left: `${10 + i * 16}%`,
                    bottom: `${-5 - i * 3}%`,
                    background: `radial-gradient(circle, rgba(223,184,113,${0.5 + i * 0.05}) 0%, transparent 70%)`,
                    boxShadow: `0 0 ${6 + i * 3}px rgba(223,184,113,0.4)`,
                    animationDuration: `${4 + i * 1.5}s`,
                    animationDelay: `${i * 0.8}s`,
                  }}
                />
              ))}
            </div>

            <div className="pt-6 px-5 sm:pt-8 sm:px-8 md:px-12 pb-6 sm:pb-8 flex-grow flex flex-col relative z-10">
              <h3 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white text-center mb-5 sm:mb-8"
              >
                {slide.title}
              </h3>
              
              <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-10 md:gap-16 flex-grow">
                <div className="md:w-5/12 relative">
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed relative z-10 italic">
                    {slide.description}
                  </p>
                </div>
                
                <div className="md:w-6/12 w-full h-[180px] sm:h-[220px] md:h-[350px] lg:h-[400px] relative rounded border border-white/20 overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                  <Image 
                    src={slide.image} 
                    alt={slide.title} 
                    fill 
                    className="object-cover" 
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
