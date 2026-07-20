import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SmoothScrolling } from "@/components/providers/smooth-scrolling";
import CustomCursor from "@/components/ui/cursor";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Premium Travel | Your Journey Begins",
  description: "Experience the world's most luxurious destinations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans cursor-none`}>
        {/* Global Premium Custom Cursor */}
        <CustomCursor />
        
        {/* The top JourneyProgress bar has been removed from here */}

        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}