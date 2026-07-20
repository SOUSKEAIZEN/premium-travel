"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

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
    <section className="relative py-32 bg-background z-40">
      <div className="max-w-[800px] mx-auto px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-heading text-4xl md:text-5xl font-bold text-dark mb-4"
          >
            Common <span className="text-primary italic font-serif">Inquiries</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card bg-white/40 border border-black/5 rounded-card overflow-hidden"
              >
                <button
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-white/50 transition-colors"
                >
                  <span className={`font-heading text-xl font-bold transition-colors duration-300 ${isActive ? "text-primary" : "text-dark"}`}>
                    {faq.question}
                  </span>
                  <div className="shrink-0 ml-4 text-accent">
                    {isActive ? <Minus size={24} /> : <Plus size={24} />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                    >
                      <div className="px-6 md:px-8 pb-8 pt-2 text-textMuted leading-relaxed">
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