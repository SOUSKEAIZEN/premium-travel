"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const DESTINATIONS = [
  {
    id: 1,
    title: "Swiss Alps",
    country: "Switzerland",
    image: "https://images.unsplash.com/photo-1531366936337-77cf5e08ce27?q=80&w=3540&auto=format&fit=crop",
    price: "$3,200",
    duration: "7 Days",
    rating: "4.9",
  },
  {
    id: 2,
    title: "Kyoto Temples",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=3540&auto=format&fit=crop",
    price: "$4,500",
    duration: "10 Days",
    rating: "5.0",
  },
  {
    id: 3,
    title: "Amalfi Coast",
    country: "Italy",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=3538&auto=format&fit=crop",
    price: "$2,800",
    duration: "5 Days",
    rating: "4.8",
  },
];

export function Destinations() {
  return (
    <section id="destinations" className="py-32 px-6 bg-white relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-heading font-bold text-text-main mb-6"
            >
              Featured Destinations
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-text-muted text-lg"
            >
              Explore our handpicked selection of the world&apos;s most breathtaking locations.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Button variant="outline" className="rounded-full group">
              View All <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DESTINATIONS.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative h-[500px] rounded-[24px] overflow-hidden cursor-pointer"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${dest.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white flex flex-col justify-end h-full">
                <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-gold/90 text-forest text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
                      {dest.country}
                    </span>
                    <span className="flex items-center gap-1 text-sm bg-white/20 backdrop-blur-md px-2 py-1 rounded-full">
                      <Star className="w-3 h-3 fill-gold text-gold" /> {dest.rating}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-heading font-bold mb-2">{dest.title}</h3>
                  
                  <div className="flex items-center gap-4 text-white/80 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {dest.duration}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Guided Tour</span>
                  </div>
                  
                  <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    <span className="text-2xl font-bold">{dest.price}</span>
                    <Button variant="glass" className="bg-white/20 hover:bg-white text-white hover:text-forest border-none">
                      Explore
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
