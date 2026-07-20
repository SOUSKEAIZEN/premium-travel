"use client";

import { useState } from "react";
import LoadingScreen from "@/components/ui/loading-screen";
import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import WhyChooseUs from "@/components/sections/why-choose-us";
import Destinations from "@/components/sections/destinations";
import JourneyTimeline from "@/components/sections/journey-timeline";
import Statistics from "@/components/sections/statistics";
import Testimonials from "@/components/sections/testimonials";
import Gallery from "@/components/sections/gallery";
import About from "@/components/sections/about";
import FAQ from "@/components/sections/faq";
import CTA from "@/components/sections/cta";
import ContactSection from "@/components/sections/contact-section";
import Footer from "@/components/layout/footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="relative bg-background">
      {/* Loading Sequence */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Main Content (Revealed after loading) */}
      <div className={isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-1000"}>
        <Navbar />
        <Hero />
        <WhyChooseUs />
        <Destinations />
        <JourneyTimeline />
        <Statistics />
        <Testimonials />
        <Gallery />
        <About />
        <FAQ />
        <CTA />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}