"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";

// Custom Counter Component
function Counter({ value, suffix = "", text }: { value: number; suffix?: string; text: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView && nodeRef.current) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: [0.16, 1, 0.3, 1], // Premium ease-out
        onUpdate(current) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(current).toLocaleString() + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [inView, value, suffix]);

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="overflow-hidden mb-2">
        <motion.span 
          ref={nodeRef}
          initial={{ y: "100%" }}
          animate={inView ? { y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="font-heading text-6xl md:text-7xl font-bold text-accent block"
        >
          0{suffix}
        </motion.span>
      </div>
      <motion.span 
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-white/70 font-medium tracking-widest uppercase text-sm"
      >
        {text}
      </motion.span>
    </div>
  );
}

export default function Statistics() {
  return (
    <section className="relative py-32 bg-dark z-40 overflow-hidden">
      {/* Subtle Background Pattern/Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
          <Counter value={20} suffix="+" text="Countries Explored" />
          <Counter value={5000} suffix="+" text="Happy Travelers" />
          <Counter value={98} suffix="%" text="Satisfaction Rate" />
        </div>
      </div>
    </section>
  );
}