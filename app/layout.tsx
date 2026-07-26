import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { SmoothScrolling } from "@/components/providers/smooth-scrolling";
import CustomCursor from "@/components/ui/cursor";
import "./globals.css";

// Clean, modern body font
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-sans-primary",
  display: "swap",
});

// Elegant, highly editorial serif for headings
const cormorant = Cormorant_Garamond({ 
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"], 
  variable: "--font-serif-primary",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LUXE. | Extraordinary Journeys",
  description: "Architects of extraordinary journeys for the modern explorer. Experience the world without compromise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${cormorant.variable} font-sans md:cursor-none`}>
        
        {/* Global Premium Film Grain Overlay */}
        <div 
          className="pointer-events-none fixed inset-0 z-[9999999] bg-grain mix-blend-multiply" 
          aria-hidden="true" 
        />

        {/* Global Premium Custom Cursor */}
        <CustomCursor />
        
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}