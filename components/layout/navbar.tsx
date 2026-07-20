"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
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

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 3.5, ease: [0.76, 0, 0.24, 1] }} // Delays until loader finishes
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-4" : "py-8"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 flex justify-between items-center">
        {/* Navigation Container with Glassmorphism */}
        <div
          className={`flex items-center justify-between w-full rounded-full transition-all duration-500 px-8 py-4 ${
            isScrolled ? "glass-card" : "bg-transparent"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="font-heading font-bold text-xl tracking-widest text-primary">
            LUXE<span className="text-accent">.</span>
          </Link>

          {/* Nav Links */}
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

          {/* Premium CTA Button */}
          <button className="bg-dark text-background px-6 py-2.5 rounded-button text-sm font-medium tracking-wide hover:bg-primary transition-colors duration-300">
            Book Now
          </button>
        </div>
      </div>
    </motion.header>
  );
}