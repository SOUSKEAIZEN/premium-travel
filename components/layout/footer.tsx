"use client";

import { motion } from "framer-motion";
// Removed brand icons from lucide-react (not available in v1+)

export default function Footer() {
  return (
    <footer className="relative bg-[#1B1B1B] text-white/70 pt-32 pb-12 overflow-hidden z-40">
      {/* Forcing the Rich Charcoal background so the white text is perfectly visible */}
      
      {/* Animated Top Wave/Border */}
      <motion.div 
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-[200%] h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
      />

      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-heading font-bold text-2xl tracking-widest text-white mb-6">
              LUXE<span className="text-[#D4AF37]">.</span>
            </h3>
            <p className="text-sm leading-relaxed max-w-xs">
              Architects of extraordinary journeys for the modern explorer. Experience the world without compromise.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-sm">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#D4AF37] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Destinations</a></li>
              <li><a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-sm">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Booking Conditions</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-sm">Newsletter</h4>
            <p className="text-sm mb-4">Curated inspiration delivered to your inbox.</p>
            <div className="flex bg-white/5 rounded-xl p-1 border border-white/10 focus-within:border-[#D4AF37]/50 transition-colors">
              <input type="email" placeholder="Email address" className="bg-transparent w-full px-4 text-sm text-white focus:outline-none placeholder:text-white/30" />
              <button className="bg-white text-[#1B1B1B] px-4 py-2 rounded-lg text-sm font-bold hover:bg-[#D4AF37] transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">© {new Date().getFullYear()} Luxe Travel. All rights reserved.</p>
          
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#1B1B1B] transition-all duration-300 text-xs font-bold tracking-widest">
              IG
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#1B1B1B] transition-all duration-300 text-xs font-bold tracking-widest">
              TW
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#1B1B1B] transition-all duration-300 text-xs font-bold tracking-widest">
              IN
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}