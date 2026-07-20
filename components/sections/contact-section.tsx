"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-32 bg-background z-40">
      <div className="max-w-[1400px] mx-auto px-8 relative">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left: Contact Info */}
          <div className="w-full lg:w-5/12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-dark mb-6">
                Let's <span className="text-primary italic font-serif">Connect</span>
              </h2>
              <p className="text-textMuted text-lg mb-12">
                Have a specific destination in mind or need inspiration? Reach out to our travel architects.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-white glass-card flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="text-primary" />
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-textMuted uppercase tracking-widest mb-1">Email Us</span>
                    <a href="mailto:concierge@luxe.com" className="text-xl font-medium text-dark hover:text-accent transition-colors">concierge@luxe.com</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-white glass-card flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="text-primary" />
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-textMuted uppercase tracking-widest mb-1">Call Us</span>
                    <a href="tel:+18005550199" className="text-xl font-medium text-dark hover:text-accent transition-colors">+1 (800) 555-0199</a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-white glass-card flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="text-primary" />
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-textMuted uppercase tracking-widest mb-1">Headquarters</span>
                    <span className="text-xl font-medium text-dark">Geneva, Switzerland</span>
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
            <form className="glass-card bg-white/60 p-8 md:p-12 rounded-card shadow-xl border border-white/80">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block text-sm font-bold text-dark mb-2">First Name</label>
                  <input type="text" className="w-full bg-white/50 border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-dark mb-2">Last Name</label>
                  <input type="text" className="w-full bg-white/50 border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Doe" />
                </div>
              </div>
              
              <div className="mb-8">
                <label className="block text-sm font-bold text-dark mb-2">Email Address</label>
                <input type="email" className="w-full bg-white/50 border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="john@example.com" />
              </div>

              <div className="mb-8">
                <label className="block text-sm font-bold text-dark mb-2">Your Journey Details</label>
                <textarea rows={4} className="w-full bg-white/50 border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none" placeholder="Tell us about your dream destination, dates, and preferences..." />
              </div>

              <button type="button" className="w-full bg-[#1B1B1B] text-white rounded-2xl py-4 font-bold tracking-wide hover:bg-[#1F5E45] transition-colors flex items-center justify-center gap-2 group">
                Send Request
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}