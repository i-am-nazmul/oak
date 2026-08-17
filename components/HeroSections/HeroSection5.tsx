"use client";

import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Strategic Content Planning",
    description: "We develop comprehensive content strategies that align with your business goals, target audience, and market positioning. Our data-driven approach ensures every piece of content serves a purpose and drives results.",
    image: "/pics/ahmetyuksek-autumn-bend-10069119_1920.jpg"
  },
  {
    id: 2,
    title: "Creative Storytelling",
    description: "Transform your brand message into compelling narratives that resonate with your audience. We craft stories that connect emotionally, build trust, and differentiate your brand in a crowded marketplace.",
    image: "/pics/dianaparkhouse-mist-4551691.jpg"
  },
  {
    id: 3,
    title: "Multi-Platform Distribution",
    description: "Maximize your content's reach through strategic distribution across all relevant channels. From social media to email marketing, we ensure your content reaches the right audience at the right time.",
    image: "/pics/thegermankid-poppies-5392907_1920.jpg"
  },
  {
    id: 4,
    title: "Performance Analytics",
    description: "Track and measure the success of your campaigns with in-depth analytics. We provide actionable insights to continuously optimize your strategy and maximize return on investment.",
    image: "/pics/amaurydeterwangne-stag-5393082.jpg"
  },
  {
    id: 5,
    title: "SEO-Optimized Content",
    description: "Create content that not only engages your audience but also ranks well in search engines. Our SEO expertise ensures your content is discoverable and drives organic traffic to your website.",
    image: "/pics/bayarts7-indonesia-10405443_1920.jpg"
  }
];

export default function HeroSection5() {
  return (
    <section className="bg-black py-24 md:py-40 px-4 md:px-8 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col pb-[30vh]">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className="sticky w-full bg-black border-[1.5px] border-white rounded-2xl shadow-2xl flex flex-col justify-start mb-32 last:mb-0 transition-all duration-300"
            style={{ 
              top: `calc(15vh + ${index * 1.5}rem)`,
              height: '70vh',
              minHeight: '500px',
              zIndex: index,
            }}
          >
            <div className="p-8 md:p-12 flex-grow flex flex-col">
              <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-10 tracking-wide">
                {slide.title}
              </h3>
              
              <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 flex-grow">
                <div className="md:w-5/12">
                  <p className="text-white/80 text-sm md:text-base leading-relaxed">
                    {slide.description}
                  </p>
                </div>
                
                <div className="md:w-7/12 w-full h-[250px] md:h-full relative rounded border border-white/20 overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.05)]">
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
