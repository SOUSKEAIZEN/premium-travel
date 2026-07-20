"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mountain, Palmtree, Trees, Building2 } from "lucide-react";

const stops = [
  {
    location: "The Ascent",
    theme: "Mountain",
    description: "Begin with crisp alpine air. Ascend through mist-covered peaks to exclusive luxury lodges sitting above the clouds.",
    icon: <Mountain size={28} className="text-white" />,
    color: "from-blue-900 to-slate-800",
  },
  {
    location: "Coastal Escape",
    theme: "Beach",
    description: "Descend to pristine, untouched coastlines. Private villas, crystal clear waters, and absolute tranquility await.",
    icon: <Palmtree size={28} className="text-white" />,
    color: "from-teal-600 to-emerald-800",
  },
  {
    location: "Deep Woods",
    theme: "Forest",
    description: "Journey into ancient forests. Immerse yourself in nature with premium eco-resorts hidden among towering canopies.",
    icon: <Trees size={28} className="text-white" />,
    color: "from-primary to-green-950",
  },
  {
    location: "Urban Lights",
    theme: "City",
    description: "Conclude in the heart of culture. Five-star dining, exclusive gallery access, and the vibrant pulse of the metropolis.",
    icon: <Building2 size={28} className="text-white" />,
    color: "from-indigo-900 to-dark",
  },
];

export default function JourneyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track the scroll progress through this specific container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Map scroll progress to the height of the active line and the car's position
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative py-40 bg-background overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-heading text-4xl md:text-5xl font-bold text-dark mb-6"
          >
            Your <span className="text-primary italic font-serif">Journey</span> Timeline
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-textMuted max-w-2xl mx-auto text-lg"
          >
            Follow the road. Every adventure is a carefully choreographed sequence of breathtaking environments.
          </motion.p>
        </div>

        {/* TIMELINE CONTAINER */}
        <div className="relative">
          {/* Background Track Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1.5 md:-translate-x-1/2 bg-textMuted/10 rounded-full" />
          
          {/* Animated Active Track Line */}
          <motion.div 
            style={{ height: progressHeight }}
            className="absolute left-8 md:left-1/2 top-0 w-1.5 md:-translate-x-1/2 bg-primary rounded-full origin-top"
          />

          {/* The Animated Top-Down Car */}
          <motion.div
            style={{ top: progressHeight }}
            className="absolute left-8 md:left-1/2 md:-translate-x-1/2 -translate-y-1/2 w-8 h-16 bg-dark rounded-xl shadow-2xl z-20 flex flex-col justify-between p-1.5 transform transition-none ml-[-13px] md:ml-0"
          >
            {/* Windshield */}
            <div className="w-full h-3 bg-white/20 rounded-sm backdrop-blur-sm" />
            {/* Rear window */}
            <div className="w-full h-2.5 bg-white/20 rounded-sm backdrop-blur-sm" />
            
            {/* Headlights (Glow) */}
            <div className="absolute -top-1 left-1.5 w-1.5 h-1.5 bg-yellow-100 rounded-full shadow-[0_0_12px_rgba(253,224,71,1)]" />
            <div className="absolute -top-1 right-1.5 w-1.5 h-1.5 bg-yellow-100 rounded-full shadow-[0_0_12px_rgba(253,224,71,1)]" />
            
            {/* Taillights */}
            <div className="absolute -bottom-1 left-1.5 w-1.5 h-1.5 bg-red-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.9)]" />
            <div className="absolute -bottom-1 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.9)]" />
          </motion.div>

          {/* Timeline Stops */}
          <div className="relative flex flex-col gap-32 py-10">
            {stops.map((stop, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`flex flex-col md:flex-row items-center w-full ${isEven ? "md:justify-start" : "md:justify-end"} pl-20 md:pl-0 relative`}>
                  
                  {/* Stop Marker (The circle on the road) */}
                  <div className="absolute left-8 md:left-1/2 top-1/2 -translate-y-1/2 md:-translate-x-1/2 w-6 h-6 bg-background border-4 border-primary rounded-full z-10 ml-[-12px] md:ml-0" />

                  {/* Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    className={`w-full md:w-[42%] ${isEven ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}
                  >
                    <div className={`p-8 rounded-card glass-card hover:shadow-2xl transition-all duration-500 group relative overflow-hidden bg-white/40 border border-white/50`}>
                      
                      {/* Interactive Hover Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${stop.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10`} />

                      {/* Icon Container */}
                      <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg mb-6 ${isEven ? "md:ml-auto" : ""} bg-dark group-hover:bg-accent group-hover:scale-110 transition-all duration-500`}>
                        {stop.icon}
                      </div>

                      <span className="text-accent font-bold tracking-widest uppercase text-sm mb-2 block group-hover:text-white transition-colors">
                        {stop.theme}
                      </span>
                      <h3 className="font-heading text-3xl font-bold text-dark mb-4 group-hover:text-white transition-colors">
                        {stop.location}
                      </h3>
                      <p className="text-textMuted leading-relaxed group-hover:text-white/80 transition-colors">
                        {stop.description}
                      </p>
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