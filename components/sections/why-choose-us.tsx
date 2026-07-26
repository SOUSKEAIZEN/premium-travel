"use client";

import { motion } from "framer-motion";
import { Compass, Gem, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Compass className="w-6 h-6 md:w-7 md:h-7 text-gold" strokeWidth={1.5} />,
    title: "Curated Adventures",
    description: "Every journey is meticulously planned to offer unique, off-the-beaten-path experiences that you won't find in standard guidebooks.",
  },
  {
    icon: <Gem className="w-6 h-6 md:w-7 md:h-7 text-gold" strokeWidth={1.5} />,
    title: "Unmatched Luxury",
    description: "From five-star eco-lodges to private transport, we partner with the world's most exclusive providers to ensure premium comfort.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 md:w-7 md:h-7 text-gold" strokeWidth={1.5} />,
    title: "Absolute Safety",
    description: "Your peace of mind is our priority. Enjoy 24/7 concierge support and comprehensive safety protocols on every trip.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 md:py-32 bg-offwhite z-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-gold font-sans font-medium tracking-[0.2em] uppercase text-xs md:text-sm mb-4 block">
            Our Promise
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-medium text-charcoal mb-4 md:mb-6 tracking-tighter leading-[1.1]">
            The Standard of <span className="text-forest italic font-heading pr-2">Excellence</span>
          </h2>
          <p className="text-charcoal/60 max-w-2xl mx-auto text-base md:text-lg font-sans tracking-wide">
            We don't just book trips; we architect unforgettable experiences tailored to the world's most discerning travelers.
          </p>
        </motion.div>

        {/* Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative group p-8 md:p-10 rounded-[32px] glass-card transition-all duration-700 ease-[0.16,1,0.3,1] border border-charcoal/5 hover:border-gold/30 shadow-[0_8px_24px_rgba(29,29,29,0.04)] hover:-translate-y-2 hover:shadow-[0_24px_48px_rgba(29,29,29,0.12)] cursor-default overflow-hidden"
            >
              {/* Subtle Gradient Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-forest/5 to-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative z-10">
                {/* Icon Container */}
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center shadow-[0_8px_16px_rgba(29,29,29,0.06)] mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-700 ease-[0.16,1,0.3,1]">
                  {feature.icon}
                </div>
                
                {/* Content */}
                <h3 className="font-heading text-2xl font-medium text-charcoal mb-3 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-charcoal/70 text-sm md:text-base leading-relaxed font-sans">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}