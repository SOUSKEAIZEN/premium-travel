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
    <section className="relative py-16 md:py-32 lg:py-40 bg-background overflow-hidden flex flex-col justify-center">
      
      {/* Decorative Floating Background Elements */}
      <motion.div 
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[5%] md:top-[10%] left-[5%] md:left-[10%] w-32 h-32 md:w-64 md:h-64 bg-accent/10 rounded-full blur-[40px] md:blur-[80px] pointer-events-none"
      />
      <motion.div 
        animate={{ y: [0, 40, 0], x: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[5%] md:bottom-[10%] right-[5%] md:right-[10%] w-40 h-40 md:w-80 md:h-80 bg-primary/10 rounded-full blur-[60px] md:blur-[100px] pointer-events-none"
      />

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 w-full relative z-10 mb-12 md:mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-3 md:mb-4">
            Words from our <span className="text-primary italic font-serif">Travelers</span>
          </h2>
          <p className="text-textMuted text-base md:text-lg px-4">
            Don't just take our word for it. Experience the world through their eyes.
          </p>
        </motion.div>
      </div>

      {/* Infinite Auto-Slider Container */}
      <div className="relative w-full overflow-hidden flex">
        {/* Left/Right Fades for cinematic seamless edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          className="flex gap-4 md:gap-8 px-4 w-max hover:[animation-play-state:paused]" // Pauses on hover
        >
          {duplicatedReviews.map((review, index) => (
            <div 
              key={index} 
              className="w-[280px] sm:w-[350px] md:w-[450px] shrink-0 p-6 md:p-8 rounded-card glass-card bg-white/40 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)] relative group hover:-translate-y-2 transition-transform duration-500"
            >
              <Quote className="absolute top-4 right-4 md:top-6 md:right-6 text-accent/20 rotate-180 w-12 h-12 md:w-16 md:h-16" />
              
              <div className="flex gap-1 mb-4 md:mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="fill-accent text-accent w-3 h-3 md:w-4 md:h-4" />
                ))}
              </div>
              
              <p className="text-dark/80 text-base md:text-lg leading-relaxed mb-6 md:mb-8 relative z-10">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-3 md:gap-4">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover shadow-md"
                />
                <div>
                  <h4 className="font-bold text-dark text-sm md:text-base">{review.name}</h4>
                  <span className="text-textMuted text-xs md:text-sm">{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}