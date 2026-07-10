"use client";

import BottomGlow from "@/components/ui/BottomGlow";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-black py-24 md:py-36 relative overflow-hidden flex flex-col justify-center">

      {/* Faintly glowing semicircle with diffused light at the bottom center */}
      <BottomGlow intensity={0.15} />

      <div className="max-w-[700px] w-full mx-auto px-6 md:px-10 text-center relative z-10">

        {/* Section label */}
        <div className="flex items-center gap-4 justify-center mb-6">
          <div className="h-[1px] w-12 bg-gradient-to-l from-white/20 to-transparent" />
          <span className="text-[19px] text-white/50 italic" style={{ fontFamily: '"Instrument Serif", serif' }}>Reach out anytime</span>
          <div className="h-[1px] w-12 bg-gradient-to-r from-white/20 to-transparent" />
        </div>

        {/* Heading */}
        <h2 className="text-[36px] md:text-[48px] font-semibold leading-tight tracking-tight text-white" style={{ marginBottom: "10px" }}>
          Let&apos;s Stay <span className="text-white/70 italic font-normal text-[40px] md:text-[52px] ml-1" style={{ fontFamily: '"Instrument Serif", serif' }}>Connected</span>
        </h2>

        {/* Sub text */}
        <p className="text-[15px] text-white/50 leading-[1.9] mx-auto font-medium text-center" style={{ marginBottom: "20px" }}>
          Got questions or want to collaborate? Feel free to reach out—<br className="hidden sm:block" />I&apos;m open to new projects or just a casual chat!
        </p>

        {/* Resume button (Exact Framer Implementation) */}
        <div style={{ position: "relative", display: "inline-flex", marginBottom: "64px", borderRadius: 72 }}>
          {/* Layer 1: Glow */}
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(25% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)",
            filter: "blur(15px)",
            borderRadius: 72,
            zIndex: 0
          }} />

          {/* Layer 2: Stroke */}
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(20.7% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)",
            borderRadius: 72,
            zIndex: 1
          }} />

          {/* Layer 3: Fill */}
          <div style={{
            position: "absolute", top: 1, left: 1, right: 1, bottom: 1,
            background: "rgb(0, 0, 0)",
            borderRadius: 72,
            zIndex: 2
          }} />

          {/* Layer 4: Content */}
          <a href="/Anurag%20Anand%20SDE%20Resume.pdf" target="_blank" rel="noopener noreferrer" style={{
            position: "relative", zIndex: 3,
            display: "flex", alignItems: "center", gap: 10,
            padding: "16px 32px",
            color: "#ffffff",
            fontSize: 15,
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            textDecoration: "none", cursor: "pointer"
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            Grab My Resume
          </a>
        </div>

        {/* Social icons row */}
        <div className="flex items-center justify-center gap-8 mb-10 text-white/30">
          <a href="https://github.com/Frostyanand" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"/>
            </svg>
          </a>

          <div className="w-[1px] h-4 bg-white/10" />

          <a href="https://www.instagram.com/frostyanand" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>

          <div className="w-[1px] h-4 bg-white/10" />

          <a href="https://www.linkedin.com/in/frostyanand" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>

        {/* Email text */}
        <p className="text-[13px] text-white/50 tracking-wide">frostyanand@gmail.com</p>
      </div>
    </section>
  );
}
