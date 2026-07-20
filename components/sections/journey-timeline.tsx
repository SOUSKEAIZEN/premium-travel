"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CarFront, Mountain, TreePine, Building2 } from "lucide-react";
import Image from "next/image";

export function JourneyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const roadRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current || !roadRef.current || !carRef.current) return;

    const milestones = gsap.utils.toArray(".milestone") as HTMLElement[];

    // Pin the container and scroll horizontally
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=3000", // Scrolling duration
        scrub: 1,
        pin: true,
      }
    });

    // Move the road horizontally
    tl.to(roadRef.current, {
      xPercent: -100,
      ease: "none"
    });

    // The car stays roughly in the center, maybe moves a bit back and forth for dynamic feel
    gsap.to(carRef.current, {
      y: -10,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      ease: "power1.inOut"
    });

    // Reveal milestones when they come into view
    milestones.forEach((milestone) => {
      ScrollTrigger.create({
        trigger: milestone,
        containerAnimation: tl,
        start: "left center",
        onEnter: () => {
          gsap.fromTo(milestone.querySelector(".milestone-content"), 
            { y: 50, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
          );
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const stops = [
    {
      title: "The Alps",
      icon: <Mountain className="w-8 h-8 text-gold" />,
      image: "https://images.unsplash.com/photo-1531366936337-77cf5e08ce27?q=80&w=3540&auto=format&fit=crop",
      desc: "Begin your journey in the pristine peaks."
    },
    {
      title: "Black Forest",
      icon: <TreePine className="w-8 h-8 text-gold" />,
      image: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=3540&auto=format&fit=crop",
      desc: "Wind through ancient woodlands."
    },
    {
      title: "Rome",
      icon: <Building2 className="w-8 h-8 text-gold" />,
      image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=3496&auto=format&fit=crop",
      desc: "Arrive at the eternal city."
    }
  ];

  return (
    <section 
      id="journey"
      ref={containerRef} 
      className="h-screen w-full overflow-hidden bg-charcoal relative flex items-center"
    >
      <div className="absolute top-20 left-10 z-20">
        <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-2">
          The Journey
        </h2>
        <p className="text-white/60">Scroll to travel</p>
      </div>

      {/* The Car (Fixed relative to viewport during pin) */}
      <div 
        ref={carRef}
        className="absolute top-1/2 left-1/4 -translate-y-1/2 z-30 drop-shadow-2xl"
      >
        <CarFront className="w-16 h-16 text-gold drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
      </div>

      {/* The Scrolling Road/Landscape */}
      <div 
        ref={roadRef} 
        className="flex items-center h-full w-[300vw] relative"
        style={{ width: `${stops.length * 100}vw` }}
      >
        {/* The actual road line */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/20 -translate-y-1/2 overflow-hidden">
          <div className="w-full h-full border-b-2 border-dashed border-white/40" />
        </div>

        {stops.map((stop, i) => (
          <div key={i} className="w-[100vw] h-full relative flex items-center justify-center milestone">
            {/* Background Image Parallax Effect */}
            <div className="absolute inset-0 opacity-20 mask-image-radial z-0">
               <Image src={stop.image} alt={stop.title} fill className="object-cover" />
            </div>

            <div className="milestone-content opacity-0 relative z-10 flex flex-col items-center bg-black/40 backdrop-blur-md p-10 rounded-[32px] border border-white/10 max-w-lg text-center">
              <div className="w-20 h-20 bg-forest/80 rounded-2xl flex items-center justify-center mb-6 border border-white/20">
                {stop.icon}
              </div>
              <h3 className="text-4xl font-heading font-bold text-white mb-4">{stop.title}</h3>
              <p className="text-white/70 text-lg">{stop.desc}</p>
            </div>
            
            {/* Road marker */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gold rounded-full z-20 shadow-[0_0_20px_rgba(212,175,55,0.8)]" />
          </div>
        ))}
      </div>
    </section>
  );
}
