"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2 } from "lucide-react";

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2", location: "Maldives", span: "h-[250px] md:h-[400px]" },
  { id: 2, src: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606", location: "Dolomites", span: "h-[200px] md:h-[300px]" },
  { id: 3, src: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e", location: "Kyoto", span: "h-[300px] md:h-[500px]" },
  { id: 4, src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1", location: "Swiss Alps", span: "h-[250px] md:h-[350px]" },
  { id: 5, src: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd", location: "Patagonia", span: "h-[300px] md:h-[450px]" },
  { id: 6, src: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9", location: "Venice", span: "h-[200px] md:h-[300px]" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className={`relative py-16 md:py-32 bg-background ${selectedImage ? "z-[100]" : "z-40"}`}>
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-3 md:mb-4"
          >
            Visual <span className="text-primary italic font-serif">Journeys</span>
          </motion.h2>
          <p className="text-textMuted text-base md:text-lg max-w-2xl mx-auto px-4">
            Glimpses of the extraordinary. Discover the beauty that awaits.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-image overflow-hidden group cursor-pointer break-inside-avoid ${img.span}`}
              onClick={() => setSelectedImage(img.src)}
            >
              <img 
                src={`${img.src}?q=80&w=800&auto=format&fit=crop`} 
                alt={img.location}
                className="w-full h-full object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)] md:group-hover:scale-110"
              />
              
              {/* Overlay - Always visible on mobile, hover-only on desktop */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Floating Label - Always visible on mobile, slides up on desktop */}
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 translate-y-0 md:translate-y-4 opacity-100 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 delay-100 flex items-center justify-between">
                <span className="font-heading text-xl md:text-2xl font-bold text-white">{img.location}</span>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                  <Maximize2 size={16} className="text-white md:w-[18px] md:h-[18px]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-4 right-4 md:top-8 md:right-8 p-2 text-white/50 hover:text-white transition-colors z-[110]"
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            >
              <X className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1} />
            </button>
            
            <motion.img
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              src={`${selectedImage}?q=100&w=2000&auto=format&fit=crop`}
              alt="Expanded view"
              className="w-auto max-w-full max-h-[85vh] md:max-h-full object-contain rounded-sm shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}