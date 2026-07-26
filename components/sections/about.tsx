"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 lg:py-40 bg-offwhite overflow-hidden z-40 border-t border-charcoal/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 relative">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16 lg:gap-24">
          
          {/* Left: Animated Imagery */}
          <div className="w-full lg:w-1/2 relative h-[450px] md:h-[650px] flex items-center justify-center">
            {/* Decorative Background Blob - Softened for luxury */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-forest/5 rounded-full blur-[80px] md:blur-[100px]"
            />

            {/* Main Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[95%] h-[95%] md:w-[85%] md:h-[85%] rounded-[32px] overflow-hidden shadow-[0_24px_64px_rgba(29,29,29,0.15)] z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1421&auto=format&fit=crop" 
                alt="Travelers exploring"
                className="w-full h-full object-cover"
              />
              {/* Premium Cinematic Color Grade Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent mix-blend-multiply" />
            </motion.div>

            {/* Floating Image (Hidden on mobile for space) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-8 -right-8 w-64 h-64 rounded-[24px] overflow-hidden shadow-[0_20px_40px_rgba(29,29,29,0.2)] border-[6px] border-offwhite z-20 hidden lg:block"
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full"
              >
                <img 
                  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1470&auto=format&fit=crop" 
                  alt="Detailed compass"
                  className="w-full h-full object-cover scale-110" // Slight scale to prevent edge bleeding during movement
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Typography & Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-gold font-sans font-semibold tracking-[0.2em] uppercase text-xs md:text-sm mb-4 block">
                Our Story
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-medium text-charcoal mb-6 md:mb-8 leading-[1.1] tracking-tighter">
                Crafting journeys that <span className="text-forest italic font-heading pr-2">transcend</span> the ordinary.
              </h2>
              <p className="text-charcoal/70 text-base md:text-lg leading-relaxed mb-10 md:mb-12 font-sans">
                Founded by a collective of seasoned explorers and luxury hospitality experts, Luxe was born from a singular vision: to strip away the friction of travel and elevate the experience into an art form. We believe a truly premium journey shouldn't just change your scenery; it should change your perspective.
              </p>
            </motion.div>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="group glass-card p-6 md:p-8 rounded-[24px] hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(29,29,29,0.08)] transition-all duration-500 ease-out cursor-default"
              >
                <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center mb-5 group-hover:bg-forest/20 transition-colors duration-500">
                  <Target className="text-forest w-6 h-6 group-hover:scale-110 transition-transform duration-500 ease-out" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-medium tracking-tight text-xl text-charcoal mb-3">Our Mission</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  To architect flawless, deeply personal itineraries that connect our clients with the authentic heartbeat of a destination.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="group glass-card p-6 md:p-8 rounded-[24px] hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(29,29,29,0.08)] transition-all duration-500 ease-out cursor-default"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors duration-500">
                  <Eye className="text-gold w-6 h-6 group-hover:scale-110 transition-transform duration-500 ease-out" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-medium tracking-tight text-xl text-charcoal mb-3">Our Vision</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
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