"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Aggressive Scroll Lock for Mobile
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      // Force mobile safari to stop bouncing
      document.documentElement.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 3.5, ease: [0.16, 1, 0.3, 1] }} 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled ? "py-3 md:py-4" : "py-4 md:py-8"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Navigation Container with Premium Glassmorphism */}
          <div
            className={`flex items-center justify-between w-full rounded-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] px-5 md:px-6 py-3 ${
              isScrolled || isMobileMenuOpen ? "glass-card" : "bg-transparent"
            }`}
          >
            {/* Logo */}
            <Link 
              href="/" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="group font-heading font-medium text-xl md:text-2xl tracking-[0.15em] text-forest z-50 relative flex items-center"
            >
              LUXE
              <span className="text-gold transition-colors duration-300 group-hover:text-forest">.</span>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative text-sm font-medium tracking-wide text-charcoal/80 hover:text-charcoal transition-colors px-2 py-1"
                >
                  {link.name}
                  {/* Premium Precision Underline Hover Animation */}
                  {hoveredIndex === index && (
                    <motion.div
                      layoutId="navbar-underline"
                      className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-gold"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Right Side Action Area */}
            <div className="flex items-center gap-4 z-50 relative">
              {/* Premium Magnetic CTA Button (Desktop) */}
              <div className="hidden md:block">
                <Button variant="default" size="sm">
                  Book Now
                </Button>
              </div>

              {/* Mobile Menu Toggle (Hamburger / Close) */}
              <button
                className="md:hidden w-10 h-10 flex items-center justify-center text-forest relative focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Menu"
              >
                <div className="w-6 h-4 relative flex flex-col justify-between">
                  <span
                    className={`block h-[1.5px] w-full bg-current rounded-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-left ${
                      isMobileMenuOpen ? "rotate-45 translate-x-[2px] -translate-y-[1px]" : ""
                    }`}
                  />
                  <span
                    className={`block h-[1.5px] w-full bg-current rounded-full transition-opacity duration-300 ${
                      isMobileMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`block h-[1.5px] w-full bg-current rounded-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-left ${
                      isMobileMenuOpen ? "-rotate-45 translate-x-[2px] translate-y-[1px]" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Premium Full-Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            // Solid offwhite background to prevent iOS paint bugs while keeping the luxury feel
            className="fixed inset-0 z-[90] bg-offwhite flex flex-col items-center justify-center min-h-[100dvh] w-full md:hidden"
            // ENFORCE scroll blocking on the element itself
            style={{ touchAction: "none" }}
            data-lenis-prevent="true"
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col items-center justify-center gap-12 w-full px-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-heading text-5xl font-medium tracking-tight text-charcoal hover:text-gold transition-colors block text-center"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 w-full max-w-[280px]"
              >
                {/* Replaced raw button with Premium Magnetic Button */}
                <Button 
                  size="lg" 
                  className="w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                  magnetic={false} // Disable magnetic effect on touch devices explicitly
                >
                  Book Your Journey
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}