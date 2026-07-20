"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Cloud, Bird } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms for depth
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yMid = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const scaleText = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden bg-background flex items-center justify-center">
      {/* LAYER 1: SKY & SUN (Background) */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Glowing Sun */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] right-[20%] w-32 h-32 bg-accent/40 rounded-full blur-2xl"
        />
        <div className="absolute top-[20%] right-[22%] w-16 h-16 bg-accent rounded-full shadow-[0_0_60px_rgba(212,175,55,0.6)]" />

        {/* Drifting Clouds */}
        <motion.div 
          animate={{ x: ["-10vw", "110vw"] }} 
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-[25%] left-[-10%] text-textMuted/20"
        >
          <Cloud size={140} strokeWidth={0.5} />
        </motion.div>
        <motion.div 
          animate={{ x: ["110vw", "-10vw"] }} 
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute top-[15%] right-[-10%] text-textMuted/15"
        >
          <Cloud size={220} strokeWidth={0.5} />
        </motion.div>
      </motion.div>

      {/* LAYER 2: BIRDS */}
      <motion.div style={{ y: yMid }} className="absolute inset-0 pointer-events-none z-10">
        <motion.div
           animate={{ x: ["-10vw", "110vw"], y: [0, -20, 10, -10, 0] }}
           transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
           className="absolute top-[30%] left-0 flex gap-6 text-dark/30"
        >
           <Bird size={24} strokeWidth={1.5} />
           <Bird size={18} strokeWidth={1.5} className="mt-6" />
        </motion.div>
      </motion.div>

      {/* LAYER 3: MOUNTAINS (Midground) */}
      <motion.div style={{ y: yMid }} className="absolute bottom-[20%] w-full h-[50vh] pointer-events-none flex items-end justify-center overflow-hidden z-10">
        {/* Distant Mountain SVG */}
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-[150%] min-w-[1440px] opacity-15 text-primary" fill="currentColor" preserveAspectRatio="none">
          <path d="M0,224L60,197.3C120,171,240,117,360,122.7C480,128,600,192,720,213.3C840,235,960,213,1080,176C1200,139,1320,85,1380,58.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
        {/* Foreground Mountain SVG */}
        <svg viewBox="0 0 1440 320" className="absolute bottom-[-10px] w-[120%] min-w-[1440px] opacity-30 text-secondary" fill="currentColor" preserveAspectRatio="none">
          <path d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,213.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </motion.div>

      {/* LAYER 4: ROAD & CAR (Foreground) */}
      <div className="absolute bottom-0 w-full h-[25vh] bg-dark/5 border-t border-textMuted/10 flex flex-col justify-end pointer-events-none z-20">
        {/* Scrolling Road Markings */}
        <div className="overflow-hidden w-full h-1 mb-12 relative">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="w-[200%] absolute top-0 left-0 h-full border-t-[3px] border-dashed border-textMuted/30"
          />
        </div>
        
        {/* The Animated Car */}
        <motion.div 
          initial={{ x: "-50vw" }}
          animate={{ x: "0vw", y: [0, -1.5, 0] }}
          transition={{ 
            x: { duration: 2.5, ease: [0.33, 1, 0.68, 1], delay: 3.5 }, // Drives in after loader finishes
            y: { duration: 0.4, repeat: Infinity, ease: "easeInOut" } // Constant subtle bounce
          }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 w-[72px] h-[22px] bg-dark rounded-t-[10px] rounded-b-[4px] z-20 flex items-center justify-center shadow-xl"
        >
           {/* Tail lights */}
           <div className="absolute left-1.5 top-2 w-1.5 h-1.5 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.9)]" />
           <div className="absolute right-1.5 top-2 w-1.5 h-1.5 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.9)]" />
           {/* Back Window */}
           <div className="absolute top-1 w-10 h-2.5 bg-white/20 rounded-[2px] backdrop-blur-sm" />
        </motion.div>
      </div>

      {/* LAYER 5: TEXT & CTA (UI) */}
      <motion.div 
        style={{ y: yText, scale: scaleText, opacity: opacityText }} 
        className="relative z-30 text-center px-4 max-w-5xl mx-auto mb-[15vh]"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 3.8, ease: [0.76, 0, 0.24, 1] }}
          className="font-heading text-6xl md:text-8xl lg:text-[140px] leading-none font-bold tracking-tight text-dark mb-6"
        >
          Beyond <br/>
          <span className="text-primary italic tracking-tight font-serif">Boundaries</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4.5 }}
          className="text-lg md:text-xl text-textMuted max-w-2xl mx-auto mb-10 font-medium tracking-wide"
        >
          Curated journeys for the modern explorer. Experience the world in cinematic detail.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 4.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="px-8 py-4 bg-primary text-background rounded-button hover:bg-dark transition-colors duration-300 font-medium tracking-wide shadow-lg">
            Explore Destinations
          </button>
          <button className="px-8 py-4 glass-card text-dark rounded-button hover:bg-white/40 transition-colors duration-300 font-medium tracking-wide flex items-center gap-2">
            Book Your Journey
          </button>
        </motion.div>
      </motion.div>

      {/* SCROLL INDICATOR */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-textMuted font-bold">Scroll</span>
        <motion.div 
          animate={{ y: [0, 6, 0] }} 
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-primary" size={20} strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}