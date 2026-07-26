"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const destinations = [
  {
    title: "Kyoto Heritage",
    country: "Japan",
    price: "$4,200",
    duration: "7 Days",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1470&auto=format&fit=crop",
  },
  {
    title: "Alpine Peaks",
    country: "Switzerland",
    price: "$5,500",
    duration: "5 Days",
    rating: "5.0",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1470&auto=format&fit=crop",
  },
  {
    title: "Aegean Retreat",
    country: "Greece",
    price: "$3,800",
    duration: "8 Days",
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?q=80&w=1374&auto=format&fit=crop",
  },
];

export default function Destinations() {
  return (
    <section className="relative py-24 md:py-32 bg-charcoal text-offwhite z-40 overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-gold font-sans font-medium tracking-[0.2em] uppercase text-xs md:text-sm mb-4 block">
              Curated Escapes
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-medium mb-4 tracking-tighter leading-[1.1]">
              Featured <br className="md:hidden" />
              <span className="text-gold italic font-heading pr-2">Destinations</span>
            </h2>
            <p className="text-offwhite/60 max-w-md text-base md:text-lg font-sans">
              Explore our most highly-rated journeys, hand-picked for the upcoming season.
            </p>
          </motion.div>
          
          {/* Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Button variant="glass" size="lg" className="w-full md:w-auto group text-charcoal">
              View All Destinations
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300 ml-1" />
            </Button>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative h-[480px] md:h-[540px] rounded-[32px] overflow-hidden cursor-pointer border border-white/10 shadow-[0_24px_64px_rgba(0,0,0,0.4)]"
            >
              {/* Background Image with Hover Zoom */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img 
                  src={dest.image} 
                  alt={dest.title}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[0.16,1,0.3,1] group-hover:scale-105"
                />
              </div>
              
              {/* Cinematic Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-95" />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                
                {/* Top Bar: Rating Badge */}
                <div className="flex justify-end">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-3.5 py-1.5 rounded-full flex items-center gap-1.5">
                    <Star size={14} className="text-gold fill-gold" />
                    <span className="text-xs md:text-sm font-medium text-offwhite tracking-wide">{dest.rating}</span>
                  </div>
                </div>

                {/* Bottom Bar: Details */}
                <div className="transform transition-transform duration-500 ease-[0.16,1,0.3,1] md:group-hover:-translate-y-4">
                  <div className="flex items-center gap-2 text-gold mb-3">
                    <MapPin className="w-4 h-4" />
                    <span className="text-xs font-sans tracking-[0.2em] uppercase font-medium">{dest.country}</span>
                  </div>
                  
                  <h3 className="font-heading text-3xl font-medium text-offwhite mb-4 tracking-tight">
                    {dest.title}
                  </h3>
                  
                  {/* Metadata & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-offwhite/70 text-sm font-sans">
                      <Clock size={15} className="text-gold" />
                      <span>{dest.duration}</span>
                    </div>
                    <div className="text-offwhite font-medium text-base">
                      {dest.price} <span className="text-offwhite/40 font-normal text-xs">/ person</span>
                    </div>
                  </div>

                  {/* Reveal Button on Desktop Hover / Always Accessible on Mobile */}
                  <div className="mt-6 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                    <Button variant="glass" size="sm" className="w-full bg-white/20 hover:bg-white text-offwhite hover:text-charcoal border-white/30">
                      View Itinerary
                    </Button>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}