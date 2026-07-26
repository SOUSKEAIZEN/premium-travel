"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps, useMotionValue, useSpring } from "framer-motion";

// Fix: Omit the default motion 'children' and explicitly define it as ReactNode
export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref" | "children"> {
  variant?: "default" | "outline" | "ghost" | "glass";
  size?: "default" | "sm" | "lg" | "icon";
  magnetic?: boolean;
  children?: React.ReactNode; 
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", magnetic = true, children, ...props }, ref) => {
    // 1. Setup Magnetic Physics
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    
    // Premium, heavy spring settings for a buttery-smooth return
    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!magnetic || window.matchMedia("(pointer: coarse)").matches) return;
      const rect = e.currentTarget.getBoundingClientRect();
      
      // Calculate pull distance (max 15px pull)
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const xPct = (mouseX / rect.width - 0.5) * 15; 
      const yPct = (mouseY / rect.height - 0.5) * 15;
      
      x.set(xPct);
      y.set(yPct);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    // 2. Base & Variant Styling
    const baseStyles = "relative inline-flex items-center justify-center rounded-full font-sans font-medium tracking-wide transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 overflow-hidden group";
    
    const variants = {
      default: "bg-forest text-offwhite shadow-[0_8px_16px_rgba(26,77,57,0.2)] hover:shadow-[0_12px_24px_rgba(26,77,57,0.3)]",
      outline: "border border-forest/20 text-charcoal hover:border-forest/40 bg-transparent hover:bg-forest/5",
      ghost: "hover:bg-charcoal/5 text-charcoal",
      glass: "bg-white/40 backdrop-blur-xl border border-white/60 text-charcoal shadow-[0_8px_32px_rgba(29,29,29,0.06)] hover:bg-white/60",
    };

    const sizes = {
      default: "h-12 px-6 py-2 text-sm",
      sm: "h-10 px-4 text-sm",
      lg: "h-14 px-8 text-base",
      icon: "h-12 w-12",
    };

    return (
      <motion.button
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        // Apply magnetic spring position if enabled
        style={magnetic ? { x: mouseXSpring, y: mouseYSpring } : undefined}
        // Subtle optical lift on hover
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {/* Shine Sweep Effect Layer */}
        <div className="absolute inset-0 w-[200%] -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none z-0" />
        
        {/* Content Layer */}
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
      </motion.button>
    );
  }
);
Button.displayName = "Button";

export { Button };