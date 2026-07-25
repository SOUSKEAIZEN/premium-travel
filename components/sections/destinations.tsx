"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Star, ArrowRight } from "lucide-react";

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
    <section className="relative py-16 md:py-32 bg-dark text-background z-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6 md:gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold mb-3 md:mb-4">
              Featured <br className="md:hidden" />
              <span className="text-accent italic font-serif">Destinations</span>
            </h2>
            <p className="text-textMuted max-w-md text-base md:text-lg">
              Explore our most highly-rated journeys, hand-picked for the upcoming season.
            </p>
          </motion.div>
          
          {/* UPGRADED BUTTON DESIGN */}
          <motion.button 
             initial={{ opacity: 0, x: 40 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
             className="w-full md:w-auto justify-center group flex items-center gap-3 px-6 py-3 md:py-4 rounded-button border border-accent/50 text-accent font-medium tracking-wide hover:bg-accent hover:text-dark transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.05)] hover:shadow-[0_0_25px_rgba(212,175,55,0.2)] text-sm md:text-base"
          >
            View All Destinations
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {destinations.map((dest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.76, 0, 0.24, 1] }}
              className="group relative h-[420px] md:h-[500px] rounded-card overflow-hidden cursor-pointer border border-white/5"
            >
              {/* Background Image with Hover Zoom */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={dest.image} 
                  alt={dest.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] md:group-hover:scale-110"
                />
              </div>
              
              {/* Gradient Overlay - Made slightly darker on mobile by default for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 md:via-black/40 to-transparent transition-opacity duration-500 md:group-hover:opacity-90" />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                {/* Rating Badge */}
                <div className="absolute top-6 right-6 md:top-8 md:right-8 glass-card bg-white/10 px-3 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-md">
                  <Star size={14} className="text-accent fill-accent" />
                  <span className="text-xs md:text-sm font-bold text-white">{dest.rating}</span>
                </div>

                {/* Details Container */}
                <div className="transform transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] md:group-hover:-translate-y-16">
                  <div className="flex items-center gap-2 text-accent mb-2">
                    <MapPin className="w-[14px] h-[14px] md:w-4 md:h-4" />
                    <span className="text-xs md:text-sm tracking-widest uppercase font-bold">{dest.country}</span>
                  </div>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2 md:mb-4">{dest.title}</h3>
                  
                  {/* Hidden Details (Visible by default on mobile, revealed on hover on desktop) */}
                  <div className="flex items-center gap-4 md:gap-6 overflow-hidden h-auto opacity-100 mt-2 md:mt-0 md:h-0 md:opacity-0 md:group-hover:h-auto md:group-hover:opacity-100 md:group-hover:mt-2 transition-all duration-500 delay-100">
                    <div className="flex items-center gap-2 text-white/80 text-sm">
                      <Clock size={14} />
                      <span>{dest.duration}</span>
                    </div>
                    <div className="text-accent font-bold text-sm md:text-base">
                      {dest.price} <span className="text-white/50 font-normal text-xs md:text-sm">/ person</span>
                    </div>
                  </div>
                </div>

                {/* Hover Button (Visible by default on mobile, revealed on hover on desktop) */}
                <div className="mt-6 md:mt-0 relative md:absolute md:bottom-8 md:left-8 md:right-8 opacity-100 translate-y-0 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500 delay-200">
                  <button className="w-full py-3 md:py-3.5 bg-white text-dark rounded-button font-bold text-sm hover:bg-accent transition-colors duration-300">
                    View Itinerary
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}