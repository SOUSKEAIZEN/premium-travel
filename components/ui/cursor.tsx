"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type HoverState = "default" | "button" | "card" | "image" | "link";

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoverState, setHoverState] = useState<HoverState>("default");
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      // Use requestAnimationFrame for 60fps performance
      requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.tagName.toLowerCase() === "img" || target.closest('[data-cursor="image"]')) {
        setHoverState("image");
      } else if (target.classList.contains("glass-card") || target.closest(".glass-card")) {
        setHoverState("card");
      } else if (target.tagName.toLowerCase() === "button" || target.closest("button")) {
        setHoverState("button");
      } else if (target.tagName.toLowerCase() === "a" || target.closest("a")) {
        setHoverState("link");
      } else {
        setHoverState("default");
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", onMouseOver, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  if (!isVisible) return null;

  // Animation variants based on state
  const ringVariants = {
    default: { scale: 1, backgroundColor: "rgba(212, 175, 55, 0)", borderColor: "rgba(31, 94, 69, 0.3)" },
    button: { scale: 1.5, backgroundColor: "rgba(212, 175, 55, 0.1)", borderColor: "rgba(212, 175, 55, 0.8)" },
    card: { scale: 1.2, backgroundColor: "rgba(255, 255, 255, 0.05)", borderColor: "rgba(212, 175, 55, 0.4)", filter: "blur(1px)" },
    image: { scale: 3.5, backgroundColor: "rgba(31, 94, 69, 0.85)", borderColor: "rgba(31, 94, 69, 0)" },
    link: { scale: 0.5, backgroundColor: "rgba(212, 175, 55, 0)", borderColor: "rgba(212, 175, 55, 1)" },
  };

  const dotVariants = {
    default: { scale: 1, backgroundColor: "#1F5E45" }, // Primary Forest Green
    button: { scale: 1.5, backgroundColor: "#D4AF37" }, // Gold
    card: { scale: 0.8, backgroundColor: "#D4AF37" },
    image: { scale: 0, opacity: 0 },
    link: { scale: 0, opacity: 0 },
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {/* Center Dot */}
      <motion.div
        className="absolute top-0 left-0 w-2 h-2 rounded-full shadow-[0_0_8px_rgba(212,175,55,0.6)] origin-center"
        animate={{
          x: mousePos.x - 4,
          y: mousePos.y - 4,
          ...(dotVariants[hoverState] as any)
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
      />
      
      {/* Outer Ring / Interaction Container */}
      <motion.div
        className="absolute top-0 left-0 w-8 h-8 border-[1.5px] rounded-full flex items-center justify-center origin-center backdrop-blur-[1px]"
        animate={{
          x: mousePos.x - 16,
          y: mousePos.y - 16,
          scale: isClicked ? 0.8 : ringVariants[hoverState].scale,
          backgroundColor: ringVariants[hoverState].backgroundColor,
          borderColor: ringVariants[hoverState].borderColor,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
      >
        <AnimatePresence>
          {hoverState === "image" && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="text-white text-[8px] font-heading font-bold tracking-widest uppercase"
            >
              Explore
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}