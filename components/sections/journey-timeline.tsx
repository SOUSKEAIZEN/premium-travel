"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Mountain, Trees, Waves, Building2, Sun, Flag, ArrowRight } from "lucide-react";
import Image from "next/image";
import PremiumVehicle from "@/components/ui/premium-vehicle";

const stops = [
  { 
    id: "mountain",
    phase: "Mountain Phase",
    location: "The Ascent", 
    description: "Begin your journey with breathtaking heights and majestic panoramic views.", 
    icon: <Mountain className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
    align: "left" 
  },
  { 
    id: "forest",
    phase: "Forest Phase",
    location: "Into the Wild", 
    description: "Explore lush green ancient forests and deeply secluded hidden trails.", 
    icon: <Trees className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=800&auto=format&fit=crop",
    align: "right" 
  },
  { 
    id: "lake",
    phase: "Lake Phase",
    location: "Serenity Found", 
    description: "Find profound peace beside crystal clear lakes and completely still waters.", 
    icon: <Waves className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop",
    align: "left" 
  },
  { 
    id: "city",
    phase: "City Phase",
    location: "Urban Explorer", 
    description: "Experience vibrant metropolises full of high-end culture, lights, and energy.", 
    icon: <Building2 className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=800&auto=format&fit=crop",
    align: "right" 
  },
  { 
    id: "beach",
    phase: "Beach Phase",
    location: "Ocean Breeze", 
    description: "Feel the warm ocean breeze and relax on pristine, untouched sandy shores.", 
    icon: <Sun className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
    align: "left" 
  },
  { 
    id: "destination",
    phase: "Destination",
    location: "New Adventures", 
    description: "Every end is a new beginning. Step boldly into your next adventure.", 
    icon: <Flag className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop",
    align: "right" 
  },
];

export default function JourneyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check window size to conditionally apply X-axis swerve
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });
  
  // Y-axis translation (0% to 100% down the road)
  const vehicleY = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  
  // X-axis translation perfectly timed to match the SVG Bezier curves below
  // Peaks occur halfway between each of the 6 stops
  const swerveX = useTransform(
    smoothProgress,
    [0, 0.083, 0.166, 0.25, 0.333, 0.416, 0.5, 0.583, 0.666, 0.75, 0.833, 0.916, 1],
    [0, 110, 0, -110, 0, 110, 0, -110, 0, 110, 0, -110, 0]
  );
  
  // If on mobile, force X to 0 so it stays on the straight line
  const vehicleX = useTransform(() => isMobile ? 0 : swerveX.get());

  return (
    <section id="timeline" ref={containerRef} className="relative py-24 md:py-40 bg-offwhite overflow-hidden">
      
      {/* Background Environment Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         {/* Sky gradient */}
         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent opacity-50" />
         
         {/* Hot Air Balloon */}
         <motion.div 
           animate={{ y: [0, -20, 0], x: [0, 10, 0] }} 
           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-[5%] md:top-[10%] right-[10%] md:right-[15%] w-16 h-24 md:w-24 md:h-32 opacity-40"
           style={{ willChange: "transform" }}
         >
           <svg viewBox="0 0 24 24" fill="currentColor" className="text-gold" xmlns="http://www.w3.org/2000/svg">
             <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 18.25c-1.84-2.5-5.5-8.08-5.5-11.25 0-3.03 2.47-5.5 5.5-5.5s5.5 2.47 5.5 5.5c0 3.17-3.66 8.75-5.5 11.25z"/>
             <path d="M12 11c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
           </svg>
         </motion.div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-20 md:mb-32 relative z-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-4xl md:text-6xl font-medium tracking-tighter text-charcoal mb-4"
          >
            Your <span className="text-forest italic font-heading pr-1">Journey</span> Map
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
             className="text-charcoal/60 text-base md:text-lg max-w-xl mx-auto font-sans tracking-wide"
          >
             Follow the winding road through carefully curated landscapes, designed exclusively for the modern explorer.
          </motion.p>
        </div>

        <div className="relative w-full max-w-[1000px] mx-auto">
          
          {/* THE WINDING ROAD (SVG) - DESKTOP ONLY */}
          <div 
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[400px] hidden md:block pointer-events-none z-0"
            style={{ willChange: "transform" }}
          >
            {/* The structural Bezier Curve driving the visual */}
            <svg className="w-full h-full drop-shadow-2xl" preserveAspectRatio="none" viewBox="0 0 400 3000" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Road Glow */}
              <path d="M 200 0 C 350 250, 350 250, 200 500 C 50 750, 50 750, 200 1000 C 350 1250, 350 1250, 200 1500 C 50 1750, 50 1750, 200 2000 C 350 2250, 350 2250, 200 2500 C 50 2750, 50 2750, 200 3000" stroke="#1A4D39" strokeOpacity="0.1" strokeWidth="120" strokeLinecap="round" strokeLinejoin="round" filter="blur(12px)" />
              {/* Main Road Surface */}
              <path d="M 200 0 C 350 250, 350 250, 200 500 C 50 750, 50 750, 200 1000 C 350 1250, 350 1250, 200 1500 C 50 1750, 50 1750, 200 2000 C 350 2250, 350 2250, 200 2500 C 50 2750, 50 2750, 200 3000" stroke="#1D1D1D" strokeWidth="80" strokeLinecap="round" strokeLinejoin="round" />
              {/* Gold Dashed Center Line */}
              <path d="M 200 0 C 350 250, 350 250, 200 500 C 50 750, 50 750, 200 1000 C 350 1250, 350 1250, 200 1500 C 50 1750, 50 1750, 200 2000 C 350 2250, 350 2250, 200 2500 C 50 2750, 50 2750, 200 3000" stroke="#C5A059" strokeWidth="3" strokeDasharray="15 20" strokeLinecap="round" />
            </svg>
          </div>

          {/* Fallback Straight Road for Mobile */}
          <div className="absolute left-6 md:hidden top-0 bottom-0 w-[40px] bg-charcoal rounded-full overflow-hidden shadow-xl z-0">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] border-l-2 border-dashed border-gold" />
          </div>

          {/* THE DRIVING CAR */}
          <motion.div
            className="absolute left-[44px] md:left-1/2 z-30"
            style={{ 
              top: vehicleY,
              x: vehicleX,
              willChange: "transform, top"
            }}
          >
             {/* Absolute centering wrapper so the car perfectly tracks the line */}
             <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                 
                 {/* Desktop: Horizontal Swerve */}
                 <div className="hidden md:block drop-shadow-xl">
                   <PremiumVehicle isDriving={true} scale={0.75} />
                 </div>
                 
                 {/* Mobile: Rotated 90 degrees to drive DOWN the vertical track */}
                 <div className="block md:hidden drop-shadow-lg rotate-90">
                   <PremiumVehicle isDriving={true} scale={0.45} />
                 </div>

             </div>
          </motion.div>

          {/* MILESTONE CARDS */}
          <div className="relative flex flex-col gap-12 md:gap-24 py-10 z-20">
            {stops.map((stop, index) => {
              const isEven = stop.align === "left";
              
              return (
                <div key={stop.id} className={`flex flex-col md:flex-row items-center w-full ${isEven ? "md:justify-start" : "md:justify-end"} pl-[72px] sm:pl-24 md:pl-0 relative`}>
                  
                  {/* Glowing Milestone Dot on the Road */}
                  <div className="absolute left-6 md:left-1/2 top-[50px] md:top-1/2 -translate-y-1/2 md:-translate-x-1/2 w-4 h-4 md:w-6 md:h-6 bg-offwhite border-[3px] md:border-[4px] border-forest rounded-full z-10 shadow-[0_0_15px_rgba(26,77,57,0.4)] ml-[12px] md:ml-0" />
                  
                  {/* Dashed Connecting Line (Desktop Only) */}
                  <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-[100px] border-b-[1.5px] border-dashed border-forest/30 -z-10 ${isEven ? "left-[calc(50%-100px)]" : "right-[calc(50%-100px)]"}`} />

                  {/* Glassmorphism Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -20 : 20, y: 30 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className={`w-full md:w-[45%] ${isEven ? "md:pr-10" : "md:pl-10"}`}
                    style={{ willChange: "transform, opacity" }}
                  >
                    <div className="group flex flex-col sm:flex-row glass-card rounded-[24px] overflow-hidden hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(29,29,29,0.12)] transition-all duration-500 ease-out cursor-pointer">
                      
                      {/* Image Preview (Left side) - Migrated to Next.js Image */}
                      <div className="w-full sm:w-2/5 h-48 sm:h-auto relative overflow-hidden flex-shrink-0">
                        <Image 
                          src={stop.image} 
                          alt={stop.location}
                          fill
                          sizes="(max-w-768px) 100vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-[0.16,1,0.3,1]"
                        />
                        {/* Cinematic Gradient Overlay on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 z-10">
                           <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-offwhite">
                             {stop.icon}
                           </div>
                        </div>
                      </div>

                      {/* Content (Right side) */}
                      <div className="w-full sm:w-3/5 p-5 md:p-6 flex flex-col justify-center relative bg-white/40">
                        
                        {/* Top Icon & Phase */}
                        <div className="flex items-center gap-2 mb-3">
                          <div className="text-forest group-hover:text-gold transition-colors duration-500">
                            {stop.icon}
                          </div>
                          <span className="text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-charcoal/50">
                            {stop.phase}
                          </span>
                        </div>

                        {/* Title & Desc */}
                        <h3 className="font-heading text-xl md:text-2xl font-medium tracking-tight text-charcoal mb-2">
                          {stop.location}
                        </h3>
                        <p className="text-sm text-charcoal/70 leading-relaxed mb-6 font-sans">
                          {stop.description}
                        </p>

                        {/* Animated View Details Button */}
                        <div className="flex items-center gap-2 text-sm font-medium text-forest group-hover:text-gold transition-colors duration-300">
                          <span className="relative">
                            View Details
                            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
                          </span>
                          <ArrowRight className="w-4 h-4 transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out" />
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