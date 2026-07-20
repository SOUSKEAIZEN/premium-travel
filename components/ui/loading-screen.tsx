"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass } from "lucide-react";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3-second cinematic loading

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] bg-forest flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Animated Mountains Background */}
          <div className="absolute inset-0 opacity-20 pointer-events-none flex items-end justify-center pb-20">
             <motion.svg
                viewBox="0 0 100 100"
                className="w-full max-w-4xl h-auto"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
             >
               <path d="M10 90 L30 50 L50 80 L70 30 L90 90 Z" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold" />
             </motion.svg>
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center gap-6"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Compass className="w-16 h-16 text-gold" />
            </motion.div>
            
            <div className="text-center overflow-hidden">
              <motion.h1 
                initial={{ y: 40 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                className="text-4xl md:text-6xl font-heading font-bold text-white tracking-widest uppercase"
              >
                Lumina
              </motion.h1>
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-gold tracking-widest text-sm uppercase mt-4"
            >
              Your Journey Begins
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
