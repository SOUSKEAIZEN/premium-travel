"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Eleanor Ridge",
    role: "Travel Photographer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    text: "The sheer attention to detail on the Alpine retreat was staggering. Luxe doesn't just book a trip; they orchestrate a masterpiece.",
    rating: 5,
  },
  {
    name: "Marcus Thorne",
    role: "Architect",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
    text: "I've traveled extensively, but the Kyoto Heritage tour completely redefined luxury for me. Seamless, elegant, and deeply authentic.",
    rating: 5,
  },
  {
    name: "Sophia Rossi",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
    text: "Every transition was effortless. The coastal villa they secured for us was something straight out of a cinematic dream.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Executive Chef",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    text: "The culinary experiences woven into our deep woods journey were Michelin-level, yet entirely rooted in local nature.",
    rating: 5,
  },
];

// Duplicate the array to create a seamless infinite loop
const duplicatedReviews = [...reviews, ...reviews];

export default function Testimonials() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 bg-offwhite overflow-hidden flex flex-col justify-center border-t border-charcoal/5">
      
      {/* Decorative Floating Background Elements */}
      <motion.div 
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[5%] md:left-[10%] w-40 h-40 md:w-72 md:h-72 bg-gold/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"
      />
      <motion.div 
        animate={{ y: [0, 40, 0], x: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[10%] right-[5%] md:right-[10%] w-48 h-48 md:w-80 md:h-80 bg-forest/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-8 w-full relative z-10 mb-16 md:mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-gold font-sans font-medium tracking-[0.2em] uppercase text-xs md:text-sm mb-4 block">
            Client Memoirs
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-medium tracking-tighter text-charcoal mb-4 md:mb-6 leading-[1.1]">
            Words from our <span className="text-forest italic font-heading pr-2">Travelers</span>
          </h2>
          <p className="text-charcoal/60 text-base md:text-lg px-4 max-w-2xl mx-auto font-sans tracking-wide">
            Don't just take our word for it. Experience the world through their eyes.
          </p>
        </motion.div>
      </div>

      {/* Infinite Auto-Slider Container */}
      <div className="relative w-full overflow-hidden flex py-4">
        {/* Left/Right Fades for cinematic seamless edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-offwhite via-offwhite/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-offwhite via-offwhite/80 to-transparent z-20 pointer-events-none" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 50, ease: "linear", repeat: Infinity }}
          className="flex gap-6 md:gap-8 px-4 w-max hover:[animation-play-state:paused]" // Pauses on hover
        >
          {duplicatedReviews.map((review, index) => (
            <div 
              key={index} 
              className="w-[300px] sm:w-[380px] md:w-[480px] shrink-0 p-8 md:p-10 rounded-[32px] glass-card border border-charcoal/5 shadow-[0_8px_24px_rgba(29,29,29,0.04)] relative group hover:-translate-y-2 hover:shadow-[0_24px_48px_rgba(29,29,29,0.12)] transition-all duration-700 ease-[0.16,1,0.3,1] cursor-default"
            >
              <Quote className="absolute top-6 right-6 md:top-8 md:right-8 text-gold/10 rotate-180 w-16 h-16 md:w-20 md:h-20 transition-transform duration-700 group-hover:scale-110 group-hover:text-gold/15" />
              
              <div className="flex gap-1.5 mb-6 md:mb-8">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="fill-gold text-gold w-4 h-4 md:w-5 md:h-5" />
                ))}
              </div>
              
              <p className="text-charcoal/80 text-base md:text-lg leading-relaxed mb-8 md:mb-10 relative z-10 font-sans">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4 md:gap-5 pt-6 border-t border-charcoal/5">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover shadow-[0_4px_12px_rgba(29,29,29,0.1)] border border-white/50"
                />
                <div>
                  <h4 className="font-heading font-medium text-charcoal text-base md:text-lg tracking-tight mb-0.5">{review.name}</h4>
                  <span className="text-charcoal/50 font-sans font-medium text-[10px] md:text-xs tracking-[0.15em] uppercase">{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}