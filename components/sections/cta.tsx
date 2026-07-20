"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative py-40 z-40 overflow-hidden flex items-center justify-center">
      {/* Fixed Parallax Background */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed pointer-events-none"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop')" }}
      />
      
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-dark/90" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        className="relative z-10 max-w-4xl mx-auto px-8 text-center"
      >
        <span className="text-accent font-bold tracking-[0.3em] uppercase text-sm mb-6 block drop-shadow-md">
          The World Awaits
        </span>
        <h2 className="font-heading text-5xl md:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-xl">
          Ready to begin your <br/>
          <span className="italic font-serif font-light text-white/90">extraordinary</span> journey?
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
          <button className="px-10 py-5 bg-accent text-dark rounded-button hover:bg-white transition-colors duration-300 font-bold tracking-wide shadow-[0_0_40px_rgba(212,175,55,0.4)] hover:shadow-[0_0_60px_rgba(255,255,255,0.6)]">
            Design Your Trip
          </button>
        </div>
      </motion.div>
    </section>
  );
}