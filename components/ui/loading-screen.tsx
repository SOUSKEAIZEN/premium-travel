"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Mountain, Cloud } from "lucide-react";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 3-second cinematic sequence
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1000); // Wait for exit animation to finish
    }, 3500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background overflow-hidden"
        >
          {/* Animated Environment */}
          <div className="relative w-64 h-32 mb-8 flex items-end justify-center">
            {/* Cloud 1 */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 20, opacity: 1 }}
              transition={{ duration: 3, ease: "linear" }}
              className="absolute top-0 left-4 text-textMuted/30"
            >
              <Cloud size={32} />
            </motion.div>

            {/* Mountains Drawing */}
            <motion.div
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="text-primary z-10"
            >
              <Mountain size={64} strokeWidth={1.5} />
            </motion.div>

            {/* Road Drawing */}
            <motion.div
              className="absolute bottom-0 w-full h-[2px] bg-gradient-to-r from-transparent via-textMain to-transparent"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            />
            
            {/* Tiny Car Entering */}
            <motion.div
              initial={{ x: -150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
              className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-4 h-4 bg-accent rounded-sm shadow-lg z-20"
            />
          </div>

          {/* Premium Text Reveal */}
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 1.5, ease: [0.76, 0, 0.24, 1] }}
              className="font-heading text-2xl tracking-[0.2em] text-textMain uppercase"
            >
              Your Journey Begins
            </motion.h2>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}