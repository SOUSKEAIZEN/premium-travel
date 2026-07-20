"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import PremiumVehicle from "./premium-vehicle";
import { useEffect, useState } from "react";

const milestones = [
  { id: "home", label: "Home", pos: "5%" },
  { id: "destinations", label: "Destinations", pos: "30%" },
  { id: "timeline", label: "Journey", pos: "50%" },
  { id: "gallery", label: "Gallery", pos: "70%" },
  { id: "contact", label: "Contact", pos: "95%" },
];

export default function JourneyProgress() {
  const { scrollYProgress } = useScroll();
  const [isScrolling, setIsScrolling] = useState(false);
  
  // Smooth out the scroll value
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 25, restDelta: 0.001 });
  const carX = useTransform(smoothProgress, [0, 1], ["0vw", "100vw"]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsScrolling(false), 150);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-0 left-0 w-full h-12 z-[100] hidden md:block group">
      {/* Glass Background */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-md border-b border-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* The Scenic Road */}
      <div className="absolute bottom-2 left-0 w-full h-[6px] bg-dark/10 rounded-full shadow-inner overflow-hidden">
        {/* Fill */}
        <motion.div 
          className="absolute top-0 left-0 h-full bg-primary shadow-[0_0_12px_rgba(31,94,69,0.5)] origin-left"
          style={{ scaleX: smoothProgress }}
        />
        {/* Dashed Center Line */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-[1px] border-t border-dashed border-white/40" />
      </div>

      {/* Clickable Milestones */}
      <div className="absolute bottom-2 left-0 w-full h-[6px] pointer-events-none">
        {milestones.map((m) => (
          <div key={m.id} className="absolute top-1/2 -translate-y-1/2 pointer-events-auto cursor-pointer group/ms" style={{ left: m.pos }} onClick={() => scrollToSection(m.id)}>
            <div className="w-3 h-3 bg-white border-2 border-primary rounded-full hover:scale-150 hover:bg-accent transition-all duration-300 shadow-md" />
            <span className="absolute top-5 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest text-dark opacity-0 group-hover/ms:opacity-100 transition-opacity whitespace-nowrap bg-white/80 px-2 py-1 rounded backdrop-blur-sm shadow-sm">
              {m.label}
            </span>
          </div>
        ))}
      </div>

      {/* Driving Car Instance */}
      <motion.div 
        className="absolute bottom-1 -ml-12 pointer-events-none drop-shadow-md"
        style={{ left: carX }}
      >
        <PremiumVehicle isDriving={isScrolling} scale={0.35} />
      </motion.div>
    </div>
  );
}