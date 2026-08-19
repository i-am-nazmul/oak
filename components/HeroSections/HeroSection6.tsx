"use client";

import { motion } from "framer-motion";

const reviewsRow1 = [
  { id: 1, name: "Sarah Jenkins", company: "TechFlow Solutions", review: "The level of creativity and strategic thinking brought to our campaign was unparalleled. Our engagement rates doubled in just three months." },
  { id: 2, name: "Michael Chen", company: "Nexus Dynamics", review: "An absolute game-changer for our brand. The team didn't just deliver a service, they partnered with us to completely redefine our digital identity." },
  { id: 3, name: "Emma Robertson", company: "Aura Lifestyle", review: "We were blown away by the visually stunning content they produced. It perfectly captured the essence of our brand and resonated deeply with our audience." },
  { id: 4, name: "David Alaba", company: "Pinnacle Sports", review: "Their SEO and performance analytics strategies brought us organic traffic we never thought possible. A brilliant team of professionals." },
  { id: 5, name: "Jessica Smith", company: "Gourmet Bites", review: "From website design to social media execution, everything was handled flawlessly. I couldn't recommend them highly enough." },
];

const reviewsRow2 = [
  { id: 6, name: "Marcus Johnson", company: "Elevate Finance", review: "The storytelling aspect of their marketing is what truly sets them apart. They know exactly how to hook an audience and keep them engaged." },
  { id: 7, name: "Sophia Martinez", company: "Luna Cosmetics", review: "The brand growth we've experienced has been staggering. They understood our vision from day one and executed it with absolute precision." },
  { id: 8, name: "William Taylor", company: "Horizon Tech", review: "Incredibly responsive, forward-thinking, and deeply knowledgeable. They are the architects behind our most successful product launch to date." },
  { id: 9, name: "Olivia Brown", company: "Eco Living", review: "They brought our sustainable brand to the forefront of the market. The graphic design and video editing work was nothing short of spectacular." },
  { id: 10, name: "Daniel White", company: "Vertex Logistics", review: "A seamless experience from start to finish. Their data-driven approach ensured that every dollar we spent saw a tremendous return on investment." },
];

const StarRating = () => (
  <div className="flex gap-1 mb-4 text-[#dfb871]">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
      </svg>
    ))}
  </div>
);

const ReviewCard = ({ review }: { review: any }) => (
  <div className="w-[350px] md:w-[450px] bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-[#1a362d]/5 flex-shrink-0 mx-4 whitespace-normal">
    <StarRating />
    <p className="text-[#1a362d]/80 text-lg font-medium mb-8 leading-relaxed h-[120px]">
      "{review.review}"
    </p>
    <div className="flex items-center gap-4 border-t border-[#1a362d]/10 pt-6">
      <div className="w-12 h-12 rounded-full bg-[#F3EFEA] flex items-center justify-center text-[#1a362d] font-bold text-xl">
        {review.name[0]}
      </div>
      <div>
        <h4 className="font-bold text-[#1a362d]">{review.name}</h4>
        <p className="text-sm text-[#1a362d]/60">{review.company}</p>
      </div>
    </div>
  </div>
);

export default function HeroSection6() {
  return (
    <section className="py-24 md:py-32 bg-[#F3EFEA] overflow-hidden flex flex-col justify-center min-h-[70vh] gap-12 border-t border-[#1a362d]/10">
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } }
        }}
        className="text-center mb-10 px-6 flex flex-col items-center"
      >
        <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1a362d] mb-4">Client Success Stories</h2>
        </motion.div>
        <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}>
          <p className="text-[#1a362d]/70 max-w-2xl mx-auto text-lg">Don't just take our word for it. Here is what our amazing partners have to say.</p>
        </motion.div>
      </motion.div>

      {/* Row 1: Moves Left */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative flex whitespace-nowrap overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        <div className="flex w-max items-center animate-marquee-left pause-on-hover">
          {[...reviewsRow1, ...reviewsRow1].map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </motion.div>

      {/* Row 2: Moves Right */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
        className="relative flex whitespace-nowrap overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        <div className="flex w-max items-center animate-marquee-right pause-on-hover">
          {[...reviewsRow2, ...reviewsRow2].map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </motion.div>

    </section>
  );
}
