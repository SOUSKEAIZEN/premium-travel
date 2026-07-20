"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2 } from "lucide-react";

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2", location: "Maldives", span: "h-[400px]" },
  { id: 2, src: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606", location: "Dolomites", span: "h-[300px]" },
  { id: 3, src: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e", location: "Kyoto", span: "h-[500px]" },
  { id: 4, src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1", location: "Swiss Alps", span: "h-[350px]" },
  { id: 5, src: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd", location: "Patagonia", span: "h-[450px]" },
  { id: 6, src: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9", location: "Venice", span: "h-[300px]" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className={`relative py-32 bg-background ${selectedImage ? "z-[100]" : "z-40"}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-heading text-4xl md:text-5xl font-bold text-dark mb-4"
          >
            Visual <span className="text-primary italic font-serif">Journeys</span>
          </motion.h2>
          <p className="text-textMuted text-lg max-w-2xl mx-auto">
            Glimpses of the extraordinary. Discover the beauty that awaits.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
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
                className="w-full h-full object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Floating Label */}
              <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 flex items-center justify-between right-6">
                <span className="font-heading text-2xl font-bold text-white">{img.location}</span>
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                  <Maximize2 size={18} className="text-white" />
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
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]"
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            >
              <X size={40} strokeWidth={1} />
            </button>
            
            <motion.img
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              src={`${selectedImage}?q=100&w=2000&auto=format&fit=crop`}
              alt="Expanded view"
              className="w-auto max-w-full max-h-full object-contain rounded-sm shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}