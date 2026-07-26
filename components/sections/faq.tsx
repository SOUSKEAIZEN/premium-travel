"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "How do you tailor the experience to my preferences?",
    answer: "Every journey begins with a one-on-one consultation. We learn your tastes, pacing preferences, and travel dreams to craft an itinerary that is entirely unique to you, down to the dining reservations and room views.",
  },
  {
    question: "Are flights included in the pricing?",
    answer: "Standard pricing includes in-country luxury transport (private cars, domestic flights, helicopters). International airfare is generally booked separately to allow you flexibility with points and preferred airlines, though our concierge can handle this upon request.",
  },
  {
    question: "What level of support do I have during the trip?",
    answer: "You are provided with 24/7 dedicated concierge support. Whether you need a last-minute itinerary change, a restaurant recommendation, or immediate assistance, our global team is always a text or call away.",
  },
  {
    question: "Do you accommodate dietary restrictions and accessibility needs?",
    answer: "Absolutely. We meticulously vet every partner, hotel, and restaurant to ensure they can gracefully accommodate any dietary, medical, or mobility requirements without compromising the luxury experience.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 md:py-32 bg-offwhite z-40 overflow-hidden border-t border-charcoal/5">
      <div className="max-w-[800px] mx-auto px-6 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-gold font-sans font-medium tracking-[0.2em] uppercase text-xs md:text-sm mb-4 block">
              Clarity & Confidence
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-medium text-charcoal mb-4 tracking-tighter leading-[1.1]">
              Common <span className="text-forest italic font-heading pr-1">Inquiries</span>
            </h2>
          </motion.div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 md:space-y-6">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card border border-charcoal/5 rounded-[24px] overflow-hidden transition-colors duration-500 hover:bg-white/60"
              >
                <button
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none group"
                >
                  <span className={`font-heading text-lg md:text-xl font-medium tracking-tight transition-colors duration-500 pr-6 ${isActive ? "text-forest" : "text-charcoal group-hover:text-forest"}`}>
                    {faq.question}
                  </span>
                  <motion.div 
                    animate={{ rotate: isActive ? 45 : 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-500 ${isActive ? "bg-forest/10 text-forest" : "bg-gold/10 text-gold group-hover:bg-gold/20"}`}
                  >
                    <Plus className="w-4 h-4 md:w-5 md:h-5" strokeWidth={2} />
                  </motion.div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 md:px-8 pb-8 pt-0 text-sm md:text-base text-charcoal/70 leading-relaxed font-sans">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}