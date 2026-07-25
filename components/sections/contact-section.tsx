"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-16 md:py-32 bg-background z-40">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative">
        <div className="flex flex-col lg:flex-row gap-10 md:gap-16">
          
          {/* Left: Contact Info */}
          <div className="w-full lg:w-5/12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4 md:mb-6">
                Let's <span className="text-primary italic font-serif">Connect</span>
              </h2>
              <p className="text-textMuted text-base md:text-lg mb-8 md:mb-12">
                Have a specific destination in mind or need inspiration? Reach out to our travel architects.
              </p>

              <div className="space-y-6 md:space-y-8">
                <div className="flex items-center gap-4 md:gap-6 group">
                  <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-full bg-white glass-card flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="text-primary w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <span className="block text-xs md:text-sm font-bold text-textMuted uppercase tracking-widest mb-1">Email Us</span>
                    <a href="mailto:concierge@luxe.com" className="text-lg md:text-xl font-medium text-dark hover:text-accent transition-colors break-all md:break-normal">concierge@luxe.com</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 md:gap-6 group">
                  <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-full bg-white glass-card flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="text-primary w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <span className="block text-xs md:text-sm font-bold text-textMuted uppercase tracking-widest mb-1">Call Us</span>
                    <a href="tel:+18005550199" className="text-lg md:text-xl font-medium text-dark hover:text-accent transition-colors">+1 (800) 555-0199</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 md:gap-6 group">
                  <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-full bg-white glass-card flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="text-primary w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <span className="block text-xs md:text-sm font-bold text-textMuted uppercase tracking-widest mb-1">Headquarters</span>
                    <span className="text-lg md:text-xl font-medium text-dark">Geneva, Switzerland</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Glass Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-7/12"
          >
            <form className="glass-card bg-white/60 p-6 sm:p-8 md:p-12 rounded-card shadow-xl border border-white/80">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-4 md:mb-8">
                <div>
                  <label className="block text-sm font-bold text-dark mb-1.5 md:mb-2">First Name</label>
                  <input type="text" className="w-full bg-white/50 border border-black/10 rounded-xl px-4 py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-dark mb-1.5 md:mb-2">Last Name</label>
                  <input type="text" className="w-full bg-white/50 border border-black/10 rounded-xl px-4 py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Doe" />
                </div>
              </div>
              
              <div className="mb-4 md:mb-8">
                <label className="block text-sm font-bold text-dark mb-1.5 md:mb-2">Email Address</label>
                <input type="email" className="w-full bg-white/50 border border-black/10 rounded-xl px-4 py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="john@example.com" />
              </div>

              <div className="mb-6 md:mb-8">
                <label className="block text-sm font-bold text-dark mb-1.5 md:mb-2">Your Journey Details</label>
                <textarea rows={4} className="w-full bg-white/50 border border-black/10 rounded-xl px-4 py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none" placeholder="Tell us about your dream destination, dates, and preferences..." />
              </div>

              <button type="button" className="w-full bg-[#1B1B1B] text-white rounded-2xl py-3.5 md:py-4 font-bold tracking-wide text-sm md:text-base hover:bg-[#1F5E45] transition-colors flex items-center justify-center gap-2 group">
                Send Request
                <Send className="w-[16px] h-[16px] md:w-[18px] md:h-[18px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}