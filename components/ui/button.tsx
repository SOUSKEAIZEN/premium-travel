"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "glass";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-2xl text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 overflow-hidden relative";
    
    const variants = {
      default: "bg-forest text-white hover:bg-emerald shadow-lg",
      outline: "border border-forest text-forest hover:bg-forest/10",
      ghost: "hover:bg-forest/10 text-forest",
      glass: "glass-card text-text-main hover:bg-white/20 hover:text-forest",
    };

    const sizes = {
      default: "h-12 px-6 py-2",
      sm: "h-9 px-4 rounded-xl",
      lg: "h-14 px-8 rounded-2xl text-lg",
      icon: "h-12 w-12",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
