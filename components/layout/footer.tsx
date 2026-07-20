"use client";

import Link from "next/link";
import { Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="relative bg-forest text-offwhite overflow-hidden pt-32 pb-12">
      {/* Decorative Wave (using SVG) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-[100px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-offwhite"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2">
            <Compass className="w-10 h-10 text-gold" />
            <span className="font-heading font-bold text-3xl tracking-tight text-white">
              Lumina<span className="text-gold">.</span>
            </span>
          </Link>
          <p className="text-white/70 max-w-sm">
            Curating premium cinematic journeys for the modern traveler. Experience the world differently.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-lg mb-4 text-white">Explore</h4>
          <ul className="space-y-3 text-white/70">
            <li><Link href="#destinations" className="hover:text-gold transition-colors">Destinations</Link></li>
            <li><Link href="#journey" className="hover:text-gold transition-colors">Journey</Link></li>
            <li><Link href="#about" className="hover:text-gold transition-colors">About Us</Link></li>
            <li><Link href="#faq" className="hover:text-gold transition-colors">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-lg mb-4 text-white">Legal</h4>
          <ul className="space-y-3 text-white/70">
            <li><Link href="#" className="hover:text-gold transition-colors">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-gold transition-colors">Terms of Service</Link></li>
            <li><Link href="#" className="hover:text-gold transition-colors">Cookie Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-lg mb-4 text-white">Newsletter</h4>
          <p className="text-white/70 mb-4 text-sm">Join our newsletter for exclusive travel insights.</p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email"
              className="bg-white/10 border border-white/20 rounded-xl px-4 py-2 flex-1 text-white placeholder:text-white/50 focus:outline-none focus:border-gold transition-colors"
            />
            <Button variant="default" className="bg-gold text-forest hover:bg-white hover:text-forest">
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/50 text-sm">© {new Date().getFullYear()} Lumina. All rights reserved.</p>
        <div className="flex gap-4 text-white/50">
          <Link href="#" className="hover:text-gold transition-colors">Instagram</Link>
          <Link href="#" className="hover:text-gold transition-colors">Twitter</Link>
          <Link href="#" className="hover:text-gold transition-colors">Facebook</Link>
        </div>
      </div>
    </footer>
  );
}
