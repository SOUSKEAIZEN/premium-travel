"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2 } from "lucide-react";

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2", location: "Maldives", span: "h-[300px] md:h-[450px]" },
  { id: 2, src: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606", location: "Dolomites", span: "h-[250px] md:h-[350px]" },
  { id: 3, src: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e", location: "Kyoto", span: "h-[350px] md:h-[550px]" },
  { id: 4, src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1", location: "Swiss Alps", span: "h-[300px] md:h-[400px]" },
  { id: 5, src: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd", location: "Patagonia", span: "h-[350px] md:h-[500px]" },
  { id: 6, src: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9", location: "Venice", span: "h-[250px] md:h-[350px]" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className={`relative py-24 md:py-40 bg-offwhite ${selectedImage ? "z-[100]" : "z-40"}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-gold font-sans font-medium tracking-[0.2em] uppercase text-xs md:text-sm mb-4 block">
              Captured Moments
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-medium text-charcoal mb-4 tracking-tighter leading-[1.1]">
              Visual <span className="text-forest italic font-heading pr-1">Journeys</span>
            </h2>
            <p className="text-charcoal/60 text-base md:text-lg max-w-2xl mx-auto font-sans tracking-wide">
              Glimpses of the extraordinary. Discover the beauty that awaits.
            </p>
          </motion.div>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`relative rounded-[32px] overflow-hidden group cursor-pointer break-inside-avoid shadow-[0_8px_24px_rgba(29,29,29,0.04)] hover:shadow-[0_24px_48px_rgba(29,29,29,0.12)] transition-shadow duration-700 border border-charcoal/5 ${img.span}`}
              onClick={() => setSelectedImage(img.src)}
            >
              <img 
                src={`${img.src}?q=80&w=800&auto=format&fit=crop`} 
                alt={img.location}
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:scale-105"
              />
              
              {/* Cinematic Overlay - Always visible on mobile, hover-only on desktop */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 ease-[0.16,1,0.3,1]" />
              
              {/* Floating Label - Always visible on mobile, slides up on desktop */}
              <div className="absolute bottom-5 left-5 right-5 md:bottom-8 md:left-8 md:right-8 translate-y-0 md:translate-y-4 opacity-100 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-700 delay-100 flex items-center justify-between ease-[0.16,1,0.3,1]">
                <span className="font-heading text-2xl md:text-3xl font-medium tracking-tight text-offwhite">{img.location}</span>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 ease-out">
                  <Maximize2 size={18} className="text-offwhite md:w-5 md:h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Premium Native-Style Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/95 backdrop-blur-2xl p-4 md:p-12 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            {/* Frosted Glass Close Button */}
            <button 
              className="absolute top-6 right-6 md:top-10 md:right-10 p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-offwhite/70 hover:text-offwhite transition-all duration-300 z-[110]"
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            >
              <X className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
            </button>
            
            <motion.img
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              src={`${selectedImage}?q=100&w=2000&auto=format&fit=crop`}
              alt="Expanded view"
              className="w-auto max-w-full max-h-[85vh] md:max-h-full object-contain rounded-[24px] shadow-[0_32px_64px_rgba(0,0,0,0.5)] cursor-auto border border-white/10"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}