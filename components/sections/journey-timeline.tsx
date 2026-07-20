"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Mountain, Trees, Waves, Building2, Sun, Flag, ArrowRight } from "lucide-react";
import PremiumVehicle from "../ui/premium-vehicle";

const stops = [
  { 
    id: "mountain",
    phase: "MOUNTAIN PHASE",
    location: "The Ascent", 
    description: "Begin your journey with breathtaking heights and majestic views.", 
    icon: <Mountain size={20} className="text-primary" />,
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
    align: "left" 
  },
  { 
    id: "forest",
    phase: "FOREST PHASE",
    location: "Into the Wild", 
    description: "Explore the lush green forests and hidden trails of nature.", 
    icon: <Trees size={20} className="text-primary" />,
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=800&auto=format&fit=crop",
    align: "right" 
  },
  { 
    id: "lake",
    phase: "LAKE PHASE",
    location: "Serenity Found", 
    description: "Find peace beside crystal clear lakes and calm waters.", 
    icon: <Waves size={20} className="text-primary" />,
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop",
    align: "left" 
  },
  { 
    id: "city",
    phase: "CITY PHASE",
    location: "Urban Explorer", 
    description: "Experience vibrant cities full of culture, lights and opportunities.", 
    icon: <Building2 size={20} className="text-primary" />,
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=800&auto=format&fit=crop",
    align: "right" 
  },
  { 
    id: "beach",
    phase: "BEACH PHASE",
    location: "Ocean Breeze", 
    description: "Feel the ocean breeze and relax on beautiful sandy beaches.", 
    icon: <Sun size={20} className="text-primary" />,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
    align: "left" 
  },
  { 
    id: "destination",
    phase: "DESTINATION",
    location: "New Adventures", 
    description: "Every end is a new beginning. Step into your next adventure.", 
    icon: <Flag size={20} className="text-primary" />,
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop",
    align: "right" 
  },
];

export default function JourneyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });
  
  // Y-axis translation (0% to 100% down the road)
  const vehicleY = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  
  // X-axis translation perfectly timed to match the SVG Bezier curves below
  // Peaks occur halfway between each of the 6 stops
  const vehicleX = useTransform(
    smoothProgress,
    [0, 0.083, 0.166, 0.25, 0.333, 0.416, 0.5, 0.583, 0.666, 0.75, 0.833, 0.916, 1],
    [0, 110, 0, -110, 0, 110, 0, -110, 0, 110, 0, -110, 0]
  );

  return (
    <section id="timeline" ref={containerRef} className="relative py-40 bg-[#F8F8F5] overflow-hidden">
      
      {/* Background Environment Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         {/* Sky gradient */}
         <div className="absolute inset-0 bg-gradient-to-b from-[#F8F8F5] via-[#EAEBE6] to-[#F8F8F5] opacity-50" />
         
         {/* Hot Air Balloon */}
         <motion.div 
           animate={{ y: [0, -20, 0], x: [0, 10, 0] }} 
           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-[10%] right-[15%] w-24 h-32 opacity-60"
         >
           <svg viewBox="0 0 24 24" fill="#D4AF37" xmlns="http://www.w3.org/2000/svg">
             <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 18.25c-1.84-2.5-5.5-8.08-5.5-11.25 0-3.03 2.47-5.5 5.5-5.5s5.5 2.47 5.5 5.5c0 3.17-3.66 8.75-5.5 11.25z"/>
             <path d="M12 11c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
           </svg>
         </motion.div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-32 relative z-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-heading text-5xl md:text-6xl font-bold text-[#1B1B1B] mb-4"
          >
            Your <span className="text-[#1F5E45] italic font-serif">Journey</span> Map
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="text-textMuted text-lg max-w-xl mx-auto"
          >
             Follow the winding road through carefully curated landscapes, designed exclusively for the modern explorer.
          </motion.p>
        </div>

        <div className="relative w-full max-w-[1000px] mx-auto">
          
          {/* THE WINDING ROAD (SVG) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[400px] hidden md:block pointer-events-none z-0">
            {/* The structural Bezier Curve driving the visual */}
            <svg className="w-full h-full drop-shadow-2xl" preserveAspectRatio="none" viewBox="0 0 400 3000" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Road Glow */}
              <path d="M 200 0 C 350 250, 350 250, 200 500 C 50 750, 50 750, 200 1000 C 350 1250, 350 1250, 200 1500 C 50 1750, 50 1750, 200 2000 C 350 2250, 350 2250, 200 2500 C 50 2750, 50 2750, 200 3000" stroke="#1F5E45" strokeOpacity="0.15" strokeWidth="120" strokeLinecap="round" strokeLinejoin="round" filter="blur(8px)" />
              {/* Main Road Surface */}
              <path d="M 200 0 C 350 250, 350 250, 200 500 C 50 750, 50 750, 200 1000 C 350 1250, 350 1250, 200 1500 C 50 1750, 50 1750, 200 2000 C 350 2250, 350 2250, 200 2500 C 50 2750, 50 2750, 200 3000" stroke="#2B2B2B" strokeWidth="80" strokeLinecap="round" strokeLinejoin="round" />
              {/* Gold Dashed Center Line */}
              <path d="M 200 0 C 350 250, 350 250, 200 500 C 50 750, 50 750, 200 1000 C 350 1250, 350 1250, 200 1500 C 50 1750, 50 1750, 200 2000 C 350 2250, 350 2250, 200 2500 C 50 2750, 50 2750, 200 3000" stroke="#D4AF37" strokeWidth="3" strokeDasharray="15 20" strokeLinecap="round" />
            </svg>
          </div>

          {/* Fallback Straight Road for Mobile */}
          <div className="absolute left-8 top-0 bottom-0 w-[60px] md:hidden bg-[#2B2B2B] rounded-full overflow-hidden shadow-xl z-0">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] border-l-2 border-dashed border-[#D4AF37]" />
          </div>

          {/* THE DRIVING CAR */}
          <motion.div
            className="absolute left-8 md:left-1/2 md:-translate-x-1/2 -translate-y-1/2 z-30 ml-[-20px] md:ml-0"
            style={{ 
              top: vehicleY,
              x: vehicleX // Applies the X swerve only on desktop (handled implicitly by parent width scaling)
            }}
          >
             {/* Swiping effect container for mobile override */}
             <div className="md:block hidden">
               <PremiumVehicle isDriving={true} scale={0.75} />
             </div>
             <div className="md:hidden block">
               <PremiumVehicle isDriving={true} scale={0.6} />
             </div>
          </motion.div>

          {/* MILESTONE CARDS */}
          <div className="relative flex flex-col gap-24 py-10 z-20">
            {stops.map((stop, index) => {
              const isEven = stop.align === "left";
              
              return (
                <div key={stop.id} className={`flex flex-col md:flex-row items-center w-full ${isEven ? "md:justify-start" : "md:justify-end"} pl-28 md:pl-0 relative`}>
                  
                  {/* Glowing Milestone Dot on the Road */}
                  <div className="absolute left-8 md:left-1/2 top-1/2 -translate-y-1/2 md:-translate-x-1/2 w-6 h-6 bg-white border-4 border-[#1F5E45] rounded-full z-10 shadow-[0_0_15px_rgba(31,94,69,0.5)] ml-[2px] md:ml-0" />
                  
                  {/* Dashed Connecting Line (Desktop Only) */}
                  <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-[100px] border-b-2 border-dashed border-[#1F5E45]/30 -z-10 ${isEven ? "left-[calc(50%-100px)]" : "right-[calc(50%-100px)]"}`} />

                  {/* Glassmorphism Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -40 : 40, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className={`w-full md:w-[45%] ${isEven ? "md:pr-10" : "md:pl-10"}`}
                  >
                    <div className="group flex flex-col sm:flex-row bg-white/70 backdrop-blur-md rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-black/5 overflow-hidden hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-500 cursor-pointer">
                      
                      {/* Image Preview (Left side) */}
                      <div className="w-full sm:w-2/5 h-48 sm:h-auto relative overflow-hidden">
                        <img 
                          src={stop.image} 
                          alt={stop.location}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)]"
                        />
                        {/* Gradient Overlay on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                           <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                             {stop.icon}
                           </div>
                        </div>
                      </div>

                      {/* Content (Right side) */}
                      <div className="w-full sm:w-3/5 p-6 flex flex-col justify-center relative">
                        
                        {/* Top Icon & Phase */}
                        <div className="flex items-center gap-3 mb-3">
                          <div className="text-textMuted group-hover:rotate-12 transition-transform duration-300">
                            {stop.icon}
                          </div>
                          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#6B7280]">
                            {stop.phase}
                          </span>
                        </div>

                        {/* Title & Desc */}
                        <h3 className="font-heading text-2xl font-bold text-[#1B1B1B] mb-2">
                          {stop.location}
                        </h3>
                        <p className="text-sm text-textMuted leading-relaxed mb-6">
                          {stop.description}
                        </p>

                        {/* Animated View Details Button */}
                        <div className="flex items-center gap-2 text-sm font-bold text-[#1F5E45] overflow-hidden">
                          <span className="transform transition-transform duration-300">
                            View Details
                          </span>
                          <ArrowRight size={16} className="transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                        </div>

                      </div>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}