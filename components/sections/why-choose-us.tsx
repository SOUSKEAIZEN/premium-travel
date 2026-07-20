"use client";

import { motion } from "framer-motion";
import { Mountain, ShieldCheck, Gem } from "lucide-react";

export function WhyChooseUs() {
  const cards = [
    {
      title: "Adventure",
      description: "Curated trails and hidden gems that offer an unforgettable rush.",
      icon: <Mountain className="w-8 h-8 text-forest" />,
    },
    {
      title: "Luxury",
      description: "Five-star accommodations and VIP services tailored just for you.",
      icon: <Gem className="w-8 h-8 text-forest" />,
    },
    {
      title: "Safety",
      description: "24/7 support and comprehensive insurance for peace of mind.",
      icon: <ShieldCheck className="w-8 h-8 text-forest" />,
    },
  ];

  return (
    <section className="py-32 px-6 bg-offwhite relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-heading font-bold text-text-main mb-6"
          >
            Why Choose Us
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-text-muted max-w-2xl mx-auto text-lg"
          >
            We blend the thrill of exploration with uncompromising comfort, creating journeys that redefine premium travel.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-[24px] p-10 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-forest/5 to-emerald/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-16 h-16 rounded-2xl bg-offwhite flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 relative z-10">
                {card.icon}
              </div>
              
              <h3 className="text-2xl font-heading font-bold text-text-main mb-4 relative z-10">
                {card.title}
              </h3>
              
              <p className="text-text-muted leading-relaxed relative z-10">
                {card.description}
              </p>
              
              {/* Animated gradient border on hover */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-forest to-emerald group-hover:w-full transition-all duration-700 ease-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
