"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ChevronDown, Cloud, Bird } from "lucide-react";
import PremiumVehicle from "../ui/premium-vehicle";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Easter Egg States
  const [isMoon, setIsMoon] = useState(false);
  const [birdScared, setBirdScared] = useState(false);
  const [isHonking, setIsHonking] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yMid = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const scaleText = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Double Click Horn Sound Engine
  const playHorn = () => {
    if (isHonking) return;
    setIsHonking(true);
    
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      const playBeep = (timeOffset: number) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = "square";
        osc.frequency.setValueAtTime(350, ctx.currentTime + timeOffset);
        gain.gain.setValueAtTime(0.05, ctx.currentTime + timeOffset);
        osc.start(ctx.currentTime + timeOffset);
        osc.stop(ctx.currentTime + timeOffset + 0.15);
      };

      playBeep(0);
      playBeep(0.2);
    } catch (e) {
      console.log("Audio not supported");
    }

    setTimeout(() => setIsHonking(false), 1500);
  };

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden bg-background flex items-center justify-center transition-colors duration-1000">
      
      {/* LAYER 1: SKY & SUN/MOON */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute inset-0 pointer-events-auto">
          <motion.div 
            onClick={() => setIsMoon(!isMoon)}
            animate={{ scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute top-[15%] right-[20%] w-32 h-32 rounded-full blur-2xl cursor-pointer transition-colors duration-1000 ${isMoon ? 'bg-slate-300/40' : 'bg-accent/40'}`}
          />
          <div 
            onClick={() => setIsMoon(!isMoon)}
            className={`absolute top-[20%] right-[22%] w-16 h-16 rounded-full cursor-pointer transition-all duration-1000 ${isMoon ? 'bg-slate-100 shadow-[0_0_60px_rgba(241,245,249,0.8)]' : 'bg-accent shadow-[0_0_60px_rgba(212,175,55,0.6)]'}`} 
          />
        </div>

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
           animate={{ x: ["-10vw", "110vw"] }}
           transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
           className="absolute top-[30%] left-0 pointer-events-auto"
        >
           <motion.div
             onClick={() => setBirdScared(true)}
             animate={birdScared ? { y: -200, x: 100, opacity: 0, rotate: 25 } : { y: [0, -20, 10, -10, 0] }}
             transition={birdScared ? { duration: 1.5, ease: "easeOut" } : { duration: 25, repeat: Infinity, ease: "linear" }}
             className="flex gap-6 text-dark/30 cursor-pointer hover:text-dark transition-colors p-4"
             title="Click to scare birds"
           >
             <Bird size={24} strokeWidth={1.5} />
             <Bird size={18} strokeWidth={1.5} className="mt-6" />
           </motion.div>
        </motion.div>
      </motion.div>

      {/* LAYER 3: MOUNTAINS */}
      <motion.div style={{ y: yMid }} className="absolute bottom-[20%] w-full h-[50vh] pointer-events-none flex items-end justify-center overflow-hidden z-10">
        <svg viewBox="0 0 1440 320" className={`absolute bottom-0 w-[150%] min-w-[1440px] transition-opacity duration-1000 ${isMoon ? 'opacity-30' : 'opacity-15'} text-primary`} fill="currentColor" preserveAspectRatio="none">
          <path d="M0,224L60,197.3C120,171,240,117,360,122.7C480,128,600,192,720,213.3C840,235,960,213,1080,176C1200,139,1320,85,1380,58.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
        <svg viewBox="0 0 1440 320" className={`absolute bottom-[-10px] w-[120%] min-w-[1440px] transition-opacity duration-1000 ${isMoon ? 'opacity-50' : 'opacity-30'} text-secondary`} fill="currentColor" preserveAspectRatio="none">
          <path d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,213.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </motion.div>

      {/* LAYER 4: ROAD & PREMIUM CAR */}
      <div className="absolute bottom-0 w-full h-[25vh] bg-transparent flex flex-col justify-end z-20 pointer-events-none">
        
        {/* Animated Dashed Line (The Road) */}
        <div className="absolute bottom-[80px] w-full h-1 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="w-[200%] h-full border-t-[3px] border-dashed border-primary/20"
          />
        </div>
        
        {/* Premium Animated Vehicle (Perfectly sitting on the line) */}
        <motion.div 
          onDoubleClick={playHorn}
          title="Double click to honk!"
          initial={{ x: "-50vw" }}
          animate={{ x: "0vw" }}
          transition={{ x: { duration: 2.5, ease: [0.33, 1, 0.68, 1], delay: 1.5 } }}
          className="absolute bottom-[66px] left-1/2 -translate-x-1/2 z-20 cursor-pointer pointer-events-auto"
        >
           <PremiumVehicle isDriving={true} scale={0.7} />

           {/* Honk Visual */}
           <AnimatePresence>
             {isHonking && (
               <motion.div
                 initial={{ opacity: 0, y: -20, scale: 0.5 }}
                 animate={{ opacity: 1, y: -50, scale: 1 }}
                 exit={{ opacity: 0, y: -60, scale: 0.8 }}
                 className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-dark text-[12px] font-bold px-3 py-1.5 rounded-lg shadow-lg pointer-events-none whitespace-nowrap z-50"
               >
                 BEEP BEEP!
                 <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 border-t-[6px] border-t-white border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent" />
               </motion.div>
             )}
           </AnimatePresence>
        </motion.div>
      </div>

      {/* LAYER 5: TEXT & CTA */}
      <motion.div 
        style={{ y: yText, scale: scaleText, opacity: opacityText }} 
        className="relative z-30 text-center px-4 max-w-5xl mx-auto mb-[15vh] pointer-events-none"
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
          className="flex flex-col sm:flex-row items-center justify-center gap-6 pointer-events-auto"
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
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30 pointer-events-none"
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