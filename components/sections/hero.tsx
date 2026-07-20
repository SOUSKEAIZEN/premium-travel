"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden bg-charcoal flex items-center justify-center">
      {/* Background with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: yBackground }}
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        {/* Placeholder for actual background image/video */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=3540&auto=format&fit=crop')" }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center"
        style={{ y: yText, opacity: opacityText }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.2 }} // Wait for loading screen
        >
          <span className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-6 block">
            Discover the Extraordinary
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-heading font-bold text-white tracking-tighter leading-[0.9] mb-8 text-balance">
            Cinematic <br /> Journeys.
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-light text-balance">
            Experience the world like never before. Handcrafted premium travel experiences designed for the modern explorer.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="w-full sm:w-auto text-lg rounded-full">
              Explore Destinations
            </Button>
            <Button size="lg" variant="glass" className="w-full sm:w-auto text-lg rounded-full border-white/30 text-white">
              Watch Reel
            </Button>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
      >
        <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-white"
            animate={{ top: ["-50%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
