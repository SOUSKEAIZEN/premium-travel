"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Adventure Enthusiast",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format&fit=crop",
    text: "Lumina transformed my dream of visiting the Swiss Alps into an unforgettable reality. Every detail was meticulously planned, allowing me to simply immerse myself in the beauty of the journey.",
  },
  {
    id: 2,
    name: "David Chen",
    role: "Luxury Traveler",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop",
    text: "The level of service is unparalleled. From private tours in Kyoto to the finest accommodations, Lumina understands what true luxury means. A seamless experience from start to finish.",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Photographer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=256&auto=format&fit=crop",
    text: "As a photographer, I need access to breathtaking locations at the right time. Lumina's curated itineraries provided exactly that. An absolute masterclass in travel planning.",
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="py-32 px-6 bg-offwhite relative overflow-hidden">
      {/* Decorative floating elements */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 text-gold/20"
      >
        <Quote className="w-40 h-40" />
      </motion.div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-main mb-4">
            Traveler Stories
          </h2>
          <p className="text-text-muted">Don&apos;t just take our word for it.</p>
        </div>

        <div className="relative h-[400px] md:h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -50, filter: "blur(10px)" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-black/5 flex flex-col justify-center"
            >
              <Quote className="w-10 h-10 text-forest/20 mb-6" />
              <p className="text-xl md:text-2xl text-text-main font-light leading-relaxed mb-8">
                &quot;{TESTIMONIALS[currentIndex].text}&quot;
              </p>
              
              <div className="flex items-center gap-4">
                <Image 
                  src={TESTIMONIALS[currentIndex].image} 
                  alt={TESTIMONIALS[currentIndex].name}
                  width={56}
                  height={56}
                  className="rounded-full object-cover"
                />
                <div>
                  <h4 className="font-heading font-bold text-lg text-text-main">
                    {TESTIMONIALS[currentIndex].name}
                  </h4>
                  <p className="text-sm text-text-muted">
                    {TESTIMONIALS[currentIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button 
            onClick={prev}
            className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-text-main hover:bg-forest hover:text-white hover:border-forest transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={next}
            className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-text-main hover:bg-forest hover:text-white hover:border-forest transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
