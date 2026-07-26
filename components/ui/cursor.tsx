"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

type HoverState = "default" | "button" | "card" | "image" | "link";

export default function CustomCursor() {
  const [hoverState, setHoverState] = useState<HoverState>("default");
  const [isClicked, setIsClicked] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isDarkBg, setIsDarkBg] = useState(false); // NEW: Tracks if we are over a dark background

  // Framer Motion values for 60FPS performance without React re-renders
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Premium spring configuration for the trailing outer ring
  const springConfig = { damping: 20, stiffness: 300, mass: 0.1 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Strictly ONLY enable on devices with a fine pointer (a physical mouse)
    const checkDevice = () => {
      setIsDesktop(window.matchMedia("(pointer: fine)").matches);
    };
    
    checkDevice();
    window.addEventListener("resize", checkDevice);

    if (!window.matchMedia("(pointer: fine)").matches) return;

    const onMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // NEW: Detect if the cursor is currently over a dark section (like the footer)
      setIsDarkBg(!!target.closest('footer, .bg-charcoal, .bg-dark'));

      if (target.tagName?.toLowerCase() === "img" || target.closest('[data-cursor="image"]')) {
        setHoverState("image");
      } else if (target.classList?.contains("glass-card") || target.closest(".glass-card")) {
        setHoverState("card");
      } else if (target.tagName?.toLowerCase() === "button" || target.closest("button")) {
        setHoverState("button");
      } else if (target.tagName?.toLowerCase() === "a" || target.closest("a")) {
        setHoverState("link");
      } else {
        setHoverState("default");
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [cursorX, cursorY]);

  if (!isDesktop) return null;

  // DYNAMIC VARIANTS: Colors invert if hovering over a dark background
  const ringVariants = {
    default: { 
      scale: 1, 
      backgroundColor: "rgba(29, 29, 29, 0)", 
      borderColor: isDarkBg ? "rgba(250, 248, 244, 0.4)" : "rgba(29, 29, 29, 0.2)" 
    },
    button: { scale: 1.5, backgroundColor: "rgba(197, 160, 89, 0.05)", borderColor: "rgba(197, 160, 89, 0.5)" },
    card: { scale: 1.2, backgroundColor: "rgba(250, 248, 244, 0.1)", borderColor: "rgba(197, 160, 89, 0.3)", filter: "blur(1px)" },
    image: { scale: 3.5, backgroundColor: "rgba(29, 29, 29, 0.85)", borderColor: "rgba(29, 29, 29, 0)" },
    link: { 
      scale: 0.5, 
      backgroundColor: "rgba(29, 29, 29, 0)", 
      borderColor: isDarkBg ? "rgba(250, 248, 244, 0.9)" : "rgba(29, 29, 29, 0.8)" 
    },
  };

  const dotVariants = {
    default: { scale: 1, backgroundColor: isDarkBg ? "#FAF8F4" : "#1D1D1D" }, // Swaps to Offwhite on dark BG
    button: { scale: 1.5, backgroundColor: "#C5A059" },
    card: { scale: 0.8, backgroundColor: "#C5A059" },
    image: { scale: 0, opacity: 0 },
    link: { scale: 0, opacity: 0 },
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-[999999] overflow-hidden">
      {/* Center Dot */}
      <motion.div
        className="absolute top-0 left-0 w-1.5 h-1.5 rounded-full"
        style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
        animate={dotVariants[hoverState] as any}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      />
      
      {/* Outer Ring */}
      <motion.div
        className="absolute top-0 left-0 w-8 h-8 border-[1px] rounded-full flex items-center justify-center backdrop-blur-[2px]"
        style={{ x: cursorXSpring, y: cursorYSpring, translateX: "-50%", translateY: "-50%" }}
        animate={{
          scale: isClicked ? 0.8 : ringVariants[hoverState].scale,
          backgroundColor: ringVariants[hoverState].backgroundColor,
          borderColor: ringVariants[hoverState].borderColor,
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <AnimatePresence>
          {hoverState === "image" && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="text-white text-[8px] font-sans tracking-[0.2em] uppercase mt-[1px]"
            >
              Explore
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}