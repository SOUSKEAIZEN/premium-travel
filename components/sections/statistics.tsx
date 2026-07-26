"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";

// Custom Premium Counter Component
function Counter({ value, suffix = "", text, delay = 0 }: { value: number; suffix?: string; text: string; delay?: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView && nodeRef.current) {
      // Delay the count slightly to sync with the reveal animation
      const timeout = setTimeout(() => {
        const controls = animate(0, value, {
          duration: 2.5,
          ease: [0.16, 1, 0.3, 1], // Signature Premium ease-out
          onUpdate(current) {
            if (nodeRef.current) {
              nodeRef.current.textContent = Math.round(current).toLocaleString() + suffix;
            }
          },
        });
        return () => controls.stop();
      }, delay * 1000);
      
      return () => clearTimeout(timeout);
    }
  }, [inView, value, suffix, delay]);

  return (
    <div className="flex flex-col items-center justify-center text-center py-10 md:py-4">
      <div className="overflow-hidden pb-2 mb-2">
        <motion.span 
          ref={nodeRef}
          initial={{ y: "100%" }}
          animate={inView ? { y: 0 } : {}}
          transition={{ duration: 1, delay: delay, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-6xl sm:text-7xl md:text-[5.5rem] font-medium tracking-tighter text-gold block leading-none"
        >
          0{suffix}
        </motion.span>
      </div>
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: delay + 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="text-offwhite/60 font-sans font-medium tracking-[0.2em] uppercase text-[10px] md:text-xs mt-2"
      >
        {text}
      </motion.span>
    </div>
  );
}

export default function Statistics() {
  return (
    <section className="relative py-24 md:py-32 bg-charcoal z-40 overflow-hidden">
      
      {/* Subtle Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-gold/5 blur-[120px] md:blur-[160px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          <Counter value={20} suffix="+" text="Countries Explored" delay={0} />
          <Counter value={5000} suffix="+" text="Happy Travelers" delay={0.15} />
          <Counter value={98} suffix="%" text="Satisfaction Rate" delay={0.3} />
        </div>
      </div>
    </section>
  );
}