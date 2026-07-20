"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-40 bg-background overflow-hidden z-40 border-t border-black/5">
      <div className="max-w-[1400px] mx-auto px-8 relative">
        
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Left: Animated Imagery */}
          <div className="w-full lg:w-1/2 relative h-[600px] flex items-center justify-center">
            {/* Decorative Background Blob */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[80px]"
            />

            {/* Main Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className="relative w-[80%] h-[80%] rounded-card overflow-hidden shadow-2xl z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1421&auto=format&fit=crop" 
                alt="Travelers exploring"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-dark/10" />
            </motion.div>

            {/* Floating Floating Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              animate={{ y: [0, -15, 0] }}
              style={{ animationDuration: "6s", animationIterationCount: "infinite", animationTimingFunction: "ease-in-out" }}
              className="absolute -bottom-10 -right-10 w-64 h-64 rounded-card overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-4 border-background z-20 hidden md:block"
            >
              <img 
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1470&auto=format&fit=crop" 
                alt="Detailed compass"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Right: Typography & Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Our Story</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-dark mb-8 leading-tight">
                Crafting journeys that <span className="text-primary italic font-serif">transcend</span> the ordinary.
              </h2>
              <p className="text-textMuted text-lg leading-relaxed mb-12">
                Founded by a collective of seasoned explorers and luxury hospitality experts, Luxe was born from a singular vision: to strip away the friction of travel and elevate the experience into an art form. We believe a truly premium journey shouldn't just change your scenery; it should change your perspective.
              </p>
            </motion.div>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass-card bg-white/50 p-6 rounded-card hover:bg-white/80 transition-colors"
              >
                <Target className="text-primary mb-4" size={28} />
                <h3 className="font-heading font-bold text-xl text-dark mb-2">Our Mission</h3>
                <p className="text-textMuted text-sm leading-relaxed">
                  To architect flawless, deeply personal itineraries that connect our clients with the authentic heartbeat of a destination.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="glass-card bg-white/50 p-6 rounded-card hover:bg-white/80 transition-colors"
              >
                <Eye className="text-accent mb-4" size={28} />
                <h3 className="font-heading font-bold text-xl text-dark mb-2">Our Vision</h3>
                <p className="text-textMuted text-sm leading-relaxed">
                  To become the global standard for sustainable, ultra-premium exploration, preserving the wonders we visit for future generations.
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}