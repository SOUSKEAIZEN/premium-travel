"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Link from "next/link";

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
        transition={{ duration: 0.8, delay: 3.5, ease: [0.76, 0, 0.24, 1] }} 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled ? "py-2 md:py-4" : "py-4 md:py-8"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Navigation Container with Glassmorphism */}
          <div
            className={`flex items-center justify-between w-full rounded-full transition-all duration-500 px-5 md:px-8 py-3 md:py-4 ${
              isScrolled || isMobileMenuOpen ? "glass-card bg-white/70" : "bg-transparent"
            }`}
          >
            {/* Logo */}
            <Link 
              href="/" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-heading font-bold text-xl md:text-xl tracking-widest text-primary z-50 relative"
            >
              LUXE<span className="text-accent">.</span>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative text-sm font-medium tracking-wide text-textMain"
                >
                  {link.name}
                  {/* Smooth Underline Hover Animation */}
                  {hoveredIndex === index && (
                    <motion.div
                      layoutId="navbar-underline"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Right Side Action Area */}
            <div className="flex items-center gap-4 z-50 relative">
              {/* Premium CTA Button (Desktop) */}
              <button className="hidden md:block bg-dark text-background px-6 py-2.5 rounded-button text-sm font-medium tracking-wide hover:bg-primary transition-colors duration-300">
                Book Now
              </button>

              {/* Mobile Menu Toggle (Hamburger / Close) */}
              <button
                className="md:hidden w-10 h-10 flex items-center justify-center text-primary relative"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Menu"
              >
                <div className="w-6 h-5 relative flex flex-col justify-between">
                  <span
                    className={`block h-[2px] w-full bg-current rounded-full transition-transform duration-500 ease-in-out origin-left ${
                      isMobileMenuOpen ? "rotate-45 translate-x-[2px] -translate-y-[2px]" : ""
                    }`}
                  />
                  <span
                    className={`block h-[2px] w-full bg-current rounded-full transition-opacity duration-300 ${
                      isMobileMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`block h-[2px] w-full bg-current rounded-full transition-transform duration-500 ease-in-out origin-left ${
                      isMobileMenuOpen ? "-rotate-45 translate-x-[2px] translate-y-[2px]" : ""
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
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            // HARDCODED solid background color (#F8F8F5) to guarantee no transparency bugs
            className="fixed inset-0 z-[90] bg-[#F8F8F5] flex flex-col items-center justify-center min-h-[100dvh] w-full md:hidden"
            // ENFORCE scroll blocking on the element itself
            style={{ touchAction: "none" }}
            data-lenis-prevent="true"
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col items-center justify-center gap-10 w-full px-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.1, ease: [0.76, 0, 0.24, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-heading text-5xl font-bold text-dark hover:text-accent transition-colors block text-center"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
                className="mt-6 w-full max-w-[280px]"
              >
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full bg-[#1B1B1B] text-[#F8F8F5] px-8 py-5 rounded-[16px] text-lg font-bold tracking-wide hover:bg-[#1F5E45] transition-colors duration-300 shadow-xl"
                >
                  Book Your Journey
                </button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}