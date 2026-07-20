"use client";

import { motion } from "framer-motion";
import { Compass, Gem, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Compass size={32} className="text-accent" />,
    title: "Curated Adventures",
    description: "Every journey is meticulously planned to offer unique, off-the-beaten-path experiences that you won't find in standard guidebooks.",
  },
  {
    icon: <Gem size={32} className="text-accent" />,
    title: "Unmatched Luxury",
    description: "From five-star eco-lodges to private transport, we partner with the world's most exclusive providers to ensure premium comfort.",
  },
  {
    icon: <ShieldCheck size={32} className="text-accent" />,
    title: "Absolute Safety",
    description: "Your peace of mind is our priority. Enjoy 24/7 concierge support and comprehensive safety protocols on every trip.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="relative py-32 bg-background z-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="text-center mb-20"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-dark mb-6">
            The Standard of <span className="text-primary italic font-serif">Excellence</span>
          </h2>
          <p className="text-textMuted max-w-2xl mx-auto text-lg">
            We don't just book trips; we architect unforgettable experiences tailored to the world's most discerning travelers.
          </p>
        </motion.div>

        {/* Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.76, 0, 0.24, 1] }}
              whileHover={{ y: -10 }}
              className="relative group p-10 rounded-card glass-card bg-white/40 hover:bg-white/60 transition-all duration-500 border border-black/5 hover:border-accent/30 shadow-lg hover:shadow-2xl"
            >
              {/* Subtle Gradient Glow on Hover */}
              <div className="absolute inset-0 rounded-card bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center shadow-sm mb-8 group-hover:scale-110 transition-transform duration-500">
                  {feature.icon}
                </div>
                <h3 className="font-heading text-2xl font-bold text-dark mb-4">{feature.title}</h3>
                <p className="text-textMuted leading-relaxed">
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