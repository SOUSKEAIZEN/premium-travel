"use client";

import { motion } from "framer-motion";

interface VehicleProps {
  isDriving?: boolean;
  scale?: number;
}

export default function PremiumVehicle({ isDriving = false, scale = 1 }: VehicleProps) {
  return (
    <motion.div 
      className="relative z-50 flex items-center justify-center pointer-events-none"
      style={{ transform: `scale(${scale})` }}
      animate={isDriving ? { y: [0, -2, 0] } : { y: 0 }}
      transition={{ duration: 0.4, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Exhaust Dust Particles */}
      {isDriving && (
        <div className="absolute -left-12 bottom-1 flex gap-1 opacity-60">
          <motion.div 
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 2], x: -20, y: -5 }}
            transition={{ duration: 1, repeat: Infinity, delay: 0 }}
            className="w-3 h-3 bg-white/60 rounded-full blur-[2px]"
          />
          <motion.div 
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 2], x: -15, y: -2 }}
            transition={{ duration: 0.8, repeat: Infinity, delay: 0.3 }}
            className="w-2 h-2 bg-textMuted/40 rounded-full blur-[1px]"
          />
        </div>
      )}

      {/* Headlight Beam */}
      <motion.div 
        animate={{ opacity: isDriving ? [0.6, 0.8, 0.6] : 0 }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute -right-24 bottom-2 w-32 h-12 bg-gradient-to-r from-[#D4AF37]/60 to-transparent blur-md origin-left transform -skew-x-12"
      />

      <svg width="120" height="70" viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-xl">
        {/* Soft Shadow underneath */}
        <ellipse cx="60" cy="65" rx="55" ry="5" fill="#111111" opacity="0.3" style={{ filter: "blur(2px)" }} />

        {/* Roof Luggage */}
        <rect x="25" y="5" width="20" height="10" rx="2" fill="#8B5A2B" /> {/* Suitcase */}
        <rect x="25" y="1" width="20" height="4" rx="1" fill="#D4AF37" /> {/* Suitcase Straps */}
        <rect x="50" y="8" width="15" height="7" rx="3" fill="#333333" /> {/* Camera/Case */}
        <circle cx="57" cy="11" r="2" fill="#D4AF37" />
        <rect x="70" y="4" width="25" height="11" rx="5" fill="#4A4A4A" /> {/* Sleeping Bag */}
        
        {/* Roof Rack */}
        <path d="M20 16 H 100" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
        <path d="M25 15 V 18 M 95 15 V 18 M 60 15 V 18" stroke="#111111" strokeWidth="2" />

        {/* Vehicle Body (Cream White) */}
        <path d="M10 25 Q 10 18 20 18 H 90 Q 110 18 112 35 L 115 50 Q 115 55 110 55 H 10 Q 5 55 5 50 Z" fill="#FEFBEA" />
        
        {/* Roof (Forest Green) */}
        <path d="M10 25 Q 10 18 20 18 H 90 Q 105 18 108 30 H 12 Z" fill="#1F5E45" />

        {/* Gold Accent Stripe */}
        <rect x="8" y="42" width="105" height="2" fill="#D4AF37" />

        {/* Windows with Reflections */}
        <rect x="15" y="22" width="25" height="12" rx="2" fill="#1B1B1B" />
        <rect x="45" y="22" width="30" height="12" rx="2" fill="#1B1B1B" />
        <path d="M80 22 H 95 Q 102 22 105 32 H 80 Z" fill="#1B1B1B" />
        {/* Window Glare */}
        <path d="M18 22 L 25 34 M 50 22 L 58 34 M 85 22 L 92 34" stroke="#FFFFFF" strokeOpacity="0.2" strokeWidth="3" />

        {/* Details (Door, Handle, Headlight, Taillight) */}
        <path d="M42 20 V 55" stroke="#111111" strokeOpacity="0.1" strokeWidth="1" />
        <rect x="35" y="35" width="5" height="2" rx="1" fill="#D4AF37" />
        <circle cx="112" cy="46" r="3" fill="#FDE047" /> {/* Headlight */}
        <rect x="5" y="40" width="3" height="6" rx="1" fill="#EF4444" /> {/* Taillight */}

        {/* Front Wheel */}
        <g transform="translate(85, 55)">
          <circle cx="0" cy="0" r="10" fill="#1B1B1B" />
          <circle cx="0" cy="0" r="6" fill="#4A4A4A" />
          <motion.g animate={{ rotate: isDriving ? 360 : 0 }} transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}>
            <circle cx="0" cy="0" r="3" fill="#D4AF37" />
            <path d="M-5 0 H 5 M 0 -5 V 5" stroke="#D4AF37" strokeWidth="1.5" />
          </motion.g>
        </g>

        {/* Rear Wheel */}
        <g transform="translate(25, 55)">
          <circle cx="0" cy="0" r="10" fill="#1B1B1B" />
          <circle cx="0" cy="0" r="6" fill="#4A4A4A" />
          <motion.g animate={{ rotate: isDriving ? 360 : 0 }} transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}>
            <circle cx="0" cy="0" r="3" fill="#D4AF37" />
            <path d="M-5 0 H 5 M 0 -5 V 5" stroke="#D4AF37" strokeWidth="1.5" />
          </motion.g>
        </g>
      </svg>
    </motion.div>
  );
}