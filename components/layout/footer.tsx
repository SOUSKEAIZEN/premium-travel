"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X } from "lucide-react";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  
  const isInView = useInView(footerRef, { once: true, amount: 0.3 });
  const [showBadge, setShowBadge] = useState(false);
  const [badgeDismissed, setBadgeDismissed] = useState(false);

  // 1. Show badge 1.5s after scrolling to the footer
  useEffect(() => {
    if (isInView && !badgeDismissed) {
      const timer = setTimeout(() => setShowBadge(true), 1500);
      return () => clearTimeout(timer);
    }
  }, [isInView, badgeDismissed]);

  // 2. Auto-dismiss the badge 2 seconds after it appears
  useEffect(() => {
    if (showBadge) {
      const timer = setTimeout(() => {
        setShowBadge(false);
        setBadgeDismissed(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [showBadge]);

  return (
    <footer ref={footerRef} className="relative bg-charcoal text-offwhite/70 pt-24 md:pt-32 pb-8 md:pb-12 overflow-hidden z-40">
      
      {/* Animated Top Wave/Border - Calibrated for subtle luxury */}
      <motion.div 
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-[200%] h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 mb-16 md:mb-24">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-heading font-medium text-2xl md:text-3xl tracking-[0.15em] text-offwhite mb-4 md:mb-6">
              LUXE<span className="text-gold">.</span>
            </h3>
            <p className="text-sm leading-relaxed max-w-xs tracking-wide">
              Architects of extraordinary journeys for the modern explorer. Experience the world without compromise.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans font-medium text-offwhite mb-6 uppercase tracking-[0.15em] text-xs">Navigation</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-gold transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-gold transition-colors duration-300">Destinations</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-sans font-medium text-offwhite mb-6 uppercase tracking-[0.15em] text-xs">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-gold transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gold transition-colors duration-300">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gold transition-colors duration-300">Booking Conditions</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-sans font-medium text-offwhite mb-6 uppercase tracking-[0.15em] text-xs">Newsletter</h4>
            <p className="text-sm mb-5 tracking-wide">Curated inspiration delivered to your inbox.</p>
            {/* Premium Capsule Input */}
            <div className="flex bg-white/5 rounded-full p-1.5 border border-white/10 focus-within:border-gold/50 focus-within:bg-white/10 transition-all duration-500">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent w-full px-4 text-sm text-offwhite focus:outline-none placeholder:text-offwhite/30" 
              />
              <button className="bg-offwhite text-charcoal px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gold hover:text-white transition-colors duration-300 tracking-wide">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 text-center md:text-left">
          <p className="text-xs md:text-sm order-2 md:order-1 tracking-wide">
            © {new Date().getFullYear()} Luxe Travel. All rights reserved.
          </p>
          
          <div className="flex gap-4 order-1 md:order-2">
            {["IG", "TW", "IN"].map((social) => (
              <a 
                key={social}
                href="#" 
                className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-gold/10 hover:border-gold/40 hover:text-gold transition-all duration-500 text-xs font-medium tracking-widest"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Secret Explorer Badge Easter Egg */}
      <AnimatePresence>
        {showBadge && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] max-w-[calc(100vw-3rem)] md:max-w-md bg-charcoal/80 backdrop-blur-2xl border border-gold/30 p-4 md:p-5 rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.4)] flex items-center gap-4 group"
          >
            <div className="text-3xl filter drop-shadow-lg group-hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
              🏆
            </div>
            <div className="pr-8">
              <h4 className="font-sans font-medium text-offwhite text-xs md:text-sm uppercase tracking-[0.15em] mb-1">
                Explorer Badge
              </h4>
              <p className="text-[11px] md:text-xs text-offwhite/60 leading-relaxed tracking-wide">
                You reached the end of the journey.
              </p>
            </div>
            
            <button 
              onClick={() => {
                setShowBadge(false);
                setBadgeDismissed(true);
              }}
              className="absolute top-3 right-3 p-1.5 text-offwhite/40 hover:text-offwhite hover:bg-white/10 rounded-full transition-all duration-300"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}