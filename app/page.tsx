import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { Cursor } from "@/components/ui/cursor";
import { Hero } from "@/components/sections/hero";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Destinations } from "@/components/sections/destinations";
import { JourneyTimeline } from "@/components/sections/journey-timeline";
import { Statistics } from "@/components/sections/statistics";
import { Testimonials } from "@/components/sections/testimonials";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Cursor />
      <Navbar />
      
      <main className="flex-1 w-full bg-offwhite">
        <Hero />
        <WhyChooseUs />
        <Destinations />
        <JourneyTimeline />
        <Statistics />
        <Testimonials />
        <ContactSection />
      </main>
      
      <Footer />
    </>
  );
}
