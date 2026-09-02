"use client";

import { motion } from "framer-motion";

const reviewsRow1 = [
  { id: 1, name: "Priya Sharma", company: "Amazon", review: "Creators Oak understood the kind of creators our brand needed and connected us with the right influencers. The campaign felt authentic and delivered strong engagement.", rating: 5 },
  { id: 2, name: "Rohan Desai", company: "Sunsilk", review: "The entire influencer campaign was handled smoothly, from creator selection to content execution. We saw great reach, meaningful engagement and a noticeable response from our audience.", rating: 5 },
  { id: 3, name: "Ananya Patel", company: "Philips", review: "What stood out was how well Creators Oak matched creators with our brand. The collaboration felt genuine, the content worked naturally, and the overall experience was excellent.", rating: 4 },
  { id: 4, name: "Vikram Singh", company: "Zomato", review: "Their SEO and performance analytics strategies brought us organic traffic we never thought possible. A brilliant team of professionals.", rating: 5 },
  { id: 5, name: "Kavita Reddy", company: "Bru", review: "From website design to social media execution, everything was handled flawlessly. I couldn't recommend them highly enough.", rating: 4 },
];

const reviewsRow2 = [
  { id: 6, name: "Arjun Kapoor", company: "Vogue", review: "The storytelling aspect of their marketing is what truly sets them apart. They know exactly how to hook an audience and keep them engaged.", rating: 5 },
  { id: 7, name: "Neha Gupta", company: "Master Chow", review: "The brand growth we've experienced has been staggering. They understood our vision from day one and executed it with absolute precision.", rating: 4 },
  { id: 8, name: "Rahul Verma", company: "Milk Basket", review: "Incredibly responsive, forward-thinking, and deeply knowledgeable. They are the architects behind our most successful product launch to date.", rating: 5 },
  { id: 9, name: "Sneha Iyer", company: "Urban Platter", review: "They brought our sustainable brand to the forefront of the market. The graphic design and video editing work was nothing short of spectacular.", rating: 5 },
  { id: 10, name: "Aditya Joshi", company: "Disano", review: "A seamless experience from start to finish. Their data-driven approach ensured that every dollar we spent saw a tremendous return on investment.", rating: 4 },
];

const StarRating = ({ rating = 5 }: { rating?: number }) => (
  <div className="flex gap-1 mb-3 sm:mb-4">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className={`w-4 h-4 sm:w-5 sm:h-5 fill-current ${i < rating ? "text-[#dfb871]" : "text-white/40"}`} viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
      </svg>
    ))}
  </div>
);

const ReviewCard = ({ review }: { review: any }) => (
  <div className="w-[280px] sm:w-[350px] md:w-[450px] bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-xl border border-black/10 flex-shrink-0 mx-3 sm:mx-4 whitespace-normal">
    <StarRating rating={review.rating} />
    <p className="text-black/90 text-sm sm:text-base md:text-lg font-medium mb-5 sm:mb-8 leading-relaxed min-h-[80px] sm:min-h-[100px] md:min-h-[120px]">
      &quot;{review.review}&quot;
    </p>
    <div className="flex items-center gap-3 sm:gap-4 border-t border-black/10 pt-4 sm:pt-6">
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#dfb871] flex items-center justify-center text-black font-bold text-lg sm:text-xl flex-shrink-0">
        {review.name[0]}
      </div>
      <div className="min-w-0">
        <h4 className="font-bold text-black text-sm sm:text-base truncate">{review.name}</h4>
        <p className="text-xs sm:text-sm text-black/60 truncate">{review.company}</p>
      </div>
    </div>
  </div>
);

export default function HeroSection6() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-[#050505] overflow-hidden flex flex-col justify-center min-h-[60vh] sm:min-h-[70vh] gap-8 sm:gap-12">
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } }
        }}
        className="text-center mb-6 sm:mb-10 px-4 sm:px-6 flex flex-col items-center"
      >
        <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif text-white mb-3 sm:mb-4">Client&apos;s Perspective</h2>
        </motion.div>
        <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}>
          <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-lg">Don&apos;t just take our word for it. Here is what our amazing partners have to say.</p>
        </motion.div>
      </motion.div>

      {/* Row 1: Moves Left */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative flex whitespace-nowrap overflow-hidden py-2 sm:py-4"
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
        className="relative flex whitespace-nowrap overflow-hidden py-2 sm:py-4"
      >
        <div className="flex w-max items-center animate-marquee-right pause-on-hover">
          {[...reviewsRow2, ...reviewsRow2].map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </motion.div>

      {/* Gradient fade to blend into the black background of HeroSection7 */}
      <div className="absolute bottom-0 left-0 right-0 h-10 sm:h-12 bg-gradient-to-b from-transparent to-[#050505] pointer-events-none z-10" />
    </section>
  );
}
