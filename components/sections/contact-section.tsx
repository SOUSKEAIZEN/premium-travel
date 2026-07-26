"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-offwhite z-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 relative">
        <div className="flex flex-col lg:flex-row gap-16 md:gap-20 lg:gap-24">
          
          {/* Left: Contact Info */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-gold font-sans font-medium tracking-[0.2em] uppercase text-xs md:text-sm mb-4 block">
                Begin Your Journey
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-medium text-charcoal mb-6 md:mb-8 tracking-tighter leading-[1.1]">
                Let's <span className="text-forest italic font-heading pr-2">Connect</span>
              </h2>
              <p className="text-charcoal/70 text-base md:text-lg mb-12 md:mb-16 font-sans tracking-wide leading-relaxed">
                Have a specific destination in mind or need inspiration? Reach out to our travel architects to begin crafting your next masterpiece.
              </p>

              <div className="space-y-8 md:space-y-10">
                <div className="flex items-center gap-6 group cursor-default">
                  <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-full bg-white flex items-center justify-center shadow-[0_8px_16px_rgba(29,29,29,0.04)] group-hover:scale-110 group-hover:shadow-[0_16px_32px_rgba(29,29,29,0.08)] transition-all duration-700 ease-[0.16,1,0.3,1]">
                    <Mail className="text-gold w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="block text-[10px] md:text-xs font-sans font-medium text-charcoal/50 uppercase tracking-[0.2em] mb-1">Email Us</span>
                    <a href="mailto:concierge@luxe.com" className="text-lg md:text-xl font-heading font-medium text-charcoal hover:text-gold transition-colors duration-300">concierge@luxe.com</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 group cursor-default">
                  <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-full bg-white flex items-center justify-center shadow-[0_8px_16px_rgba(29,29,29,0.04)] group-hover:scale-110 group-hover:shadow-[0_16px_32px_rgba(29,29,29,0.08)] transition-all duration-700 ease-[0.16,1,0.3,1]">
                    <Phone className="text-gold w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="block text-[10px] md:text-xs font-sans font-medium text-charcoal/50 uppercase tracking-[0.2em] mb-1">Call Us</span>
                    <a href="tel:+18005550199" className="text-lg md:text-xl font-heading font-medium text-charcoal hover:text-gold transition-colors duration-300">+1 (800) 555-0199</a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group cursor-default">
                  <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-full bg-white flex items-center justify-center shadow-[0_8px_16px_rgba(29,29,29,0.04)] group-hover:scale-110 group-hover:shadow-[0_16px_32px_rgba(29,29,29,0.08)] transition-all duration-700 ease-[0.16,1,0.3,1]">
                    <MapPin className="text-gold w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="block text-[10px] md:text-xs font-sans font-medium text-charcoal/50 uppercase tracking-[0.2em] mb-1">Headquarters</span>
                    <span className="text-lg md:text-xl font-heading font-medium text-charcoal">Geneva, Switzerland</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Premium Glass Form */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-7/12"
          >
            <form className="glass-card p-8 sm:p-10 md:p-12 rounded-[32px] shadow-[0_24px_64px_rgba(29,29,29,0.08)] border border-white/60">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
                <div className="group">
                  <label className="block text-[10px] font-sans font-medium text-charcoal/60 uppercase tracking-[0.2em] mb-2.5 transition-colors group-focus-within:text-gold">First Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/40 border border-charcoal/10 rounded-2xl px-5 py-4 text-sm md:text-base font-sans text-charcoal focus:outline-none focus:bg-white focus:border-gold/50 focus:ring-4 focus:ring-gold/10 transition-all duration-500 placeholder:text-charcoal/30" 
                    placeholder="John" 
                  />
                </div>
                <div className="group">
                  <label className="block text-[10px] font-sans font-medium text-charcoal/60 uppercase tracking-[0.2em] mb-2.5 transition-colors group-focus-within:text-gold">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/40 border border-charcoal/10 rounded-2xl px-5 py-4 text-sm md:text-base font-sans text-charcoal focus:outline-none focus:bg-white focus:border-gold/50 focus:ring-4 focus:ring-gold/10 transition-all duration-500 placeholder:text-charcoal/30" 
                    placeholder="Doe" 
                  />
                </div>
              </div>
              
              <div className="mb-6 md:mb-8 group">
                <label className="block text-[10px] font-sans font-medium text-charcoal/60 uppercase tracking-[0.2em] mb-2.5 transition-colors group-focus-within:text-gold">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-white/40 border border-charcoal/10 rounded-2xl px-5 py-4 text-sm md:text-base font-sans text-charcoal focus:outline-none focus:bg-white focus:border-gold/50 focus:ring-4 focus:ring-gold/10 transition-all duration-500 placeholder:text-charcoal/30" 
                  placeholder="john@example.com" 
                />
              </div>

              <div className="mb-8 md:mb-10 group">
                <label className="block text-[10px] font-sans font-medium text-charcoal/60 uppercase tracking-[0.2em] mb-2.5 transition-colors group-focus-within:text-gold">Your Journey Details</label>
                <textarea 
                  rows={4} 
                  className="w-full bg-white/40 border border-charcoal/10 rounded-2xl px-5 py-4 text-sm md:text-base font-sans text-charcoal focus:outline-none focus:bg-white focus:border-gold/50 focus:ring-4 focus:ring-gold/10 transition-all duration-500 resize-none placeholder:text-charcoal/30" 
                  placeholder="Tell us about your dream destination, preferred dates, and specific requirements..." 
                />
              </div>

              <Button size="lg" className="w-full group">
                Send Request
                <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}