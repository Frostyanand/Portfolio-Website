"use client";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section 
      id="about"
      style={{
        position: "relative",
        backgroundColor: "#000000", // OLED black
        paddingTop: 120,
        paddingBottom: 120,
        overflow: "hidden",
        borderTop: "1px solid rgba(255,255,255,0.03)"
      }}
    >
      {/* ── BACKGROUND GRID ── */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px)",
        backgroundSize: "24px 24px", // Tighter grid
        // Fade out grid towards bottom and edges
        maskImage: "radial-gradient(circle at center, black 30%, transparent 80%)",
        WebkitMaskImage: "radial-gradient(circle at center, black 30%, transparent 80%)",
      }} />

      <div style={{
        position: "relative", zIndex: 10,
        maxWidth: 1300, margin: "0 auto", padding: "0 24px",
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center"
      }} className="grid-cols-1 md:grid-cols-2">

        {/* ── LEFT TEXT CONTENT ── */}
        <div style={{ order: 1 }}>
          <h2 style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 40,
            fontWeight: 600,
            color: "#ffffff",
            letterSpacing: "-1px",
            marginBottom: 20,
            lineHeight: 1.1
          }}>
            More about <span style={{ 
              fontFamily: '"Instrument Serif", serif', 
              fontStyle: "italic", 
              fontWeight: 400,
              color: "rgba(255,255,255,0.6)" 
            }}>myself</span>
          </h2>

          <p style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 15,
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.8,
            marginBottom: 36,
            maxWidth: 440,
            letterSpacing: "-0.2px"
          }}>
            Hi, I&apos;m Anurag Anand. I&apos;m a builder at heart. Every project I
            take on begins with empathy and ends with intention — not just to
            function, but to feel. For me, technology is both a canvas and a
            quiet conversation, where even the smallest detail carries meaning.
          </p>

          {/* Read More button */}
          <div style={{ position: "relative", display: "inline-block" }}>
            <a href="/story" style={{
              position: "relative",
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "16px 32px",
              borderRadius: 118,
              background: "rgba(5, 5, 5, 0.6)", 
              border: "1px solid rgba(255, 255, 255, 0.12)", 
              color: "#ffffff",
              fontSize: 16,
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              letterSpacing: "-0.3px",
              textDecoration: "none", cursor: "pointer",
              boxShadow: "inset 0px -1px 2px 0px rgba(255,255,255,0.3)",
              overflow: "hidden"
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" style={{width: 15, height: 15, fill: "currentColor"}}>
                <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
              </svg>
              Read More
            </a>
            {/* The outer diffused light bleed under the button */}
            <div style={{
              position: "absolute", bottom: -2, left: "50%",
              transform: "translateX(-50%)",
              width: "60%", height: 14,
              background: "radial-gradient(ellipse at center, rgba(255,255,255,0.35) 0%, transparent 70%)",
              filter: "blur(5px)", pointerEvents: "none", zIndex: -1
            }} />
          </div>
        </div>

        {/* ── RIGHT IMAGE WITH GLOW ── */}
        <div style={{ order: 2, display: "flex", justifyContent: "flex-end", position: "relative" }}>
          
          {/* Huge soft white glow behind the image (The halo) */}
          <div style={{
            position: "absolute", top: "10%", left: "10%", right: "10%", bottom: "10%",
            background: "rgba(255, 255, 255, 0.12)",
            filter: "blur(70px)",
            borderRadius: "50%",
            zIndex: 1,
            pointerEvents: "none",
          }} />

          {/* The Image Container */}
          <div style={{
            position: "relative",
            width: "100%",
            maxWidth: 520,
            aspectRatio: "16 / 10",
            borderRadius: 16,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0px 20px 40px rgba(0,0,0,0.5)",
            zIndex: 2,
          }}>
            <Image
              src="/images/about_me_final.png"
              alt="Anurag working at computer"
              fill
              style={{ objectFit: "cover", transform: "scaleX(-1)" }}
              sizes="(max-width: 768px) 100vw, 520px"
            />
            {/* Edge light/highlight on the picture */}
            <div style={{
              position: "absolute", inset: 0, pointerEvents: "none",
              boxShadow: "inset -12px 0 30px -10px rgba(255,255,255,0.25), inset 0 0 40px rgba(0,0,0,0.7)"
            }} />
          </div>
        </div>

      </div>
    </section>
  );
}
