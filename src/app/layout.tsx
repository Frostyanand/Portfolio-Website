import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anurag Anand Portfolio",
  description: "Tech is my Canvas. Code is my Brush — Portfolio of Anurag Anand, a builder at heart.",
  openGraph: {
    title: "Anurag Anand Portfolio",
    description: "Tech is my Canvas. Code is my Brush.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anurag Anand Portfolio",
    description: "Tech is my Canvas. Code is my Brush.",
  },
};

import SmoothScroll from "@/components/layout/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          {children}
        </SmoothScroll>

        {/* Global Bottom Blur Overlay (Curved Glass Effect) */}
        <div style={{
          position: "fixed", bottom: 0, left: 0, right: 0,
          height: "10vh", // Reduced height
          minHeight: 70,
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          // Non-linear gradient creates a gradual, "water-like" transition instead of a harsh line
          maskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 35%, rgba(0,0,0,0.3) 65%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 35%, rgba(0,0,0,0.3) 65%, rgba(0,0,0,0) 100%)",
          pointerEvents: "none",
          zIndex: 9999,
        }} />
      </body>
    </html>
  );
}
