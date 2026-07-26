"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="relative py-24 md:py-40 z-40 overflow-hidden flex items-center justify-center">
      {/* Fixed Parallax Background */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed pointer-events-none scale-105"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop')" }}
      />
      
      {/* Cinematic Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal" />

      {/* Subtle Grain Texture for tactile feel */}
      <div className="absolute inset-0 bg-grain mix-blend-overlay opacity-30 pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center"
      >
        <span className="text-gold font-sans font-medium tracking-[0.2em] md:tracking-[0.3em] uppercase text-xs md:text-sm mb-6 md:mb-8 block drop-shadow-md">
          The World Awaits
        </span>
        
        <h2 className="font-heading text-4xl sm:text-5xl md:text-7xl font-medium text-offwhite mb-8 md:mb-10 leading-[1.1] tracking-tighter drop-shadow-2xl">
          Ready to begin your <br className="hidden sm:block" />
          <span className="italic font-heading text-gold pr-2">extraordinary</span> journey?
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center justify-center mt-10 md:mt-12">
          {/* Premium Magnetic CTA Button */}
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-gold text-charcoal hover:bg-offwhite hover:text-charcoal border-none shadow-[0_12px_32px_rgba(197,160,89,0.3)] hover:shadow-[0_16px_48px_rgba(250,248,244,0.4)]"
          >
            Design Your Trip
          </Button>
        </div>
      </motion.div>
    </section>
  );
}