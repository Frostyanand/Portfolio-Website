import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-[#08090a] text-white">
      <Navbar />
      <div className="pt-32 pb-24 px-6 md:px-10 max-w-[900px] mx-auto relative z-10">
        <div className="mb-16">
          <Link href="/#about" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-[14px]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>

        <h1 style={{
          fontFamily: "Inter, sans-serif",
          fontSize: 48,
          fontWeight: 600,
          color: "#ffffff",
          letterSpacing: "-1px",
          marginBottom: 40,
          lineHeight: 1.1
        }}>
          My <span style={{ fontFamily: '"Instrument Serif", serif', fontStyle: "italic", fontWeight: 400, color: "rgba(255,255,255,0.6)" }}>Story</span>
        </h1>

        <div style={{
          fontFamily: "Inter, sans-serif",
          fontSize: 16,
          color: "rgba(255,255,255,0.7)",
          lineHeight: 1.8,
          letterSpacing: "-0.2px"
        }} className="space-y-8">
          <p>
            From sketching early logic in C++ to training deep learning models, I've found joy in every step of building things that matter.
          </p>

          <div style={{
            position: "relative",
            width: "100%",
            aspectRatio: "21 / 9", // Cinematic ultrawide crop
            borderRadius: 16,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0px 20px 40px rgba(0,0,0,0.5)",
            margin: "40px 0",
          }}>
            <img
              src="/images/about_me_bw_v2.png"
              alt="Cinematic mood portrait"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%" }}
            />
            {/* Cinematic vignette */}
            <div style={{
              position: "absolute", inset: 0, pointerEvents: "none",
              boxShadow: "inset 0 0 60px rgba(0,0,0,0.8)"
            }} />
          </div>

          <p>
            Technology, for me, is more than just lines of code. It's a medium of expression. It's a way to bridge the gap between imagination and reality. Every project I take on begins with empathy and ends with intention — not just to function, but to feel.
          </p>
          <p>
            When I'm not writing code, you can find me exploring new design philosophies, reading about the future of artificial intelligence, or tinkering with open-source projects.
          </p>
          <p>
            I believe that the best products are built at the intersection of beautiful design and robust engineering. That's the space I strive to operate in every single day.
          </p>
        </div>
      </div>
      
      {/* A subtle dark background element to give some depth */}
      <div style={{
        position: "fixed", top: "20%", left: "50%", transform: "translateX(-50%)",
        width: "60vw", height: "60vh", background: "radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 0
      }} />
    </main>
  );
}
