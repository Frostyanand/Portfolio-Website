"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/* ─────────────────────────────────────────────────────────────────
   PARTICLE CANVAS (Tyndall Effect)
───────────────────────────────────────────────────────────────── */
function ParticleCanvas({ width, height }: { width: number; height: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || width === 0 || height === 0) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    type P = { x: number; y: number; vx: number; vy: number; r: number; a: number; ta: number; ts: number };
    const pts: P[] = Array.from({ length: 15 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35, // even faster drifting
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() < 0.15 ? 1.6 : 0.9,
      a: Math.random() * 0.5,
      ta: Math.random() * 0.6 + 0.2, // brighter base
      ts: 0.01 + Math.random() * 0.02, // faster twinkling
    }));

    let id: number;
    function tick() {
      ctx!.clearRect(0, 0, width, height);
      pts.forEach((p) => {
        p.a += (p.ta - p.a) * p.ts;
        if (Math.abs(p.a - p.ta) < 0.005) p.ta = Math.random() * 0.5 + 0.1;
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255,255,255,${p.a})`;
        ctx!.fill();
      });
      id = requestAnimationFrame(tick);
    }
    tick();
    return () => cancelAnimationFrame(id);
  }, [width, height]);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
    />
  );
}

/* ─────────────────────────────────────────────────────────────────
   LIGHT BEAMS (Converging from a distant point far off-screen)
───────────────────────────────────────────────────────────────── */
type BeamCfg = { rot: number; w: number; op: number; edge?: boolean };

const BEAMS: BeamCfg[] = [
  // Extreme left (Edge group)
  { rot: -42, w: 35, op: 0.35, edge: true },
  { rot: -34, w: 50, op: 0.4, edge: true },
  { rot: -27, w: 40, op: 0.3, edge: true },
  { rot: -21, w: 45, op: 0.35, edge: true },

  // Center group (Most density)
  { rot: -16, w: 70, op: 0.3 },
  { rot: -12, w: 45, op: 0.45 },
  { rot: -8,  w: 90, op: 0.75 },
  { rot: -4,  w: 50, op: 0.55 },
  { rot: 0,   w: 120, op: 0.9 }, // Central beam
  { rot: 5,   w: 60, op: 0.55 },
  { rot: 9,   w: 80, op: 0.7 },
  { rot: 13,  w: 45, op: 0.4 },
  { rot: 17,  w: 60, op: 0.25 },

  // Extreme right (Edge group)
  { rot: 23, w: 45, op: 0.35, edge: true },
  { rot: 28, w: 35, op: 0.3, edge: true },
  { rot: 35, w: 50, op: 0.4, edge: true },
  { rot: 43, w: 40, op: 0.35, edge: true },
];

function LightBeams({ vh }: { vh: number }) {
  const centerBeams = BEAMS.filter(b => !b.edge);
  const edgeBeams = BEAMS.filter(b => b.edge);

  const renderBeam = (b: BeamCfg, i: number) => (
    <div
      key={i}
      style={{
        position: "absolute",
        left: "50%",
        top: "-15vh", // Start just above the screen
        width: b.w,
        height: "150vh", // Span the page
        transformOrigin: "50% -100vh", // The "window" is far far away!
        transform: `translateX(-50%) rotate(${b.rot}deg)`,
        // Bright at the top, diffusing to transparent at the bottom
        background: "linear-gradient(to bottom, rgba(220, 220, 220, 0.45) 0%, rgba(220, 220, 220, 0.1) 60%, transparent 100%)",
        filter: "blur(20px)", // Diffused rays
        opacity: b.op,
        willChange: "opacity, transform",
      }}
    />
  );

  return (
    <>
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 2,
        animation: "globalBeamFade 14s ease-in-out infinite"
      }}>
        {centerBeams.map(renderBeam)}
      </div>
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 2,
        animation: "globalBeamFadeEdge 14s ease-in-out infinite"
      }}>
        {edgeBeams.map(renderBeam)}
      </div>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────
   MAIN HERO
───────────────────────────────────────────────────────────────── */
export default function HeroSection() {
  const [dim, setDim] = useState({ vw: 0, vh: 0 });
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);
    const update = () => setDim({ vw: window.innerWidth, vh: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const topHeight = mounted ? Math.min(430, dim.vh * 0.55) : 430;
  const profilePx = 176;
  const isScrolled = scrollY > 20;

  return (
    <section style={{ position: "relative", width: "100%", background: "#000000", overflow: "hidden" }}>

      {/* ── NAVBAR ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 40px", height: 56,
        background: isScrolled ? "rgba(5, 5, 5, 0.4)" : "transparent",
        backdropFilter: isScrolled ? "blur(12px) saturate(160%)" : "none",
        borderBottom: isScrolled ? "1px solid rgba(255,255,255,0.05)" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}>
        <a href="/" style={{
          display: "flex", alignItems: "center", gap: 6, textDecoration: "none",
          fontFamily: "Inter, sans-serif", fontSize: 15, fontWeight: 600,
          color: "rgba(255,255,255,0.9)", letterSpacing: "-0.3px",
        }}>
          <span style={{ fontSize: 11 }}>✦</span>
        </a>
        <div style={{ display: "flex", gap: 32 }}>
          {["Projects", "Contact"].map((label) => (
            <a key={label} href={`#${label.toLowerCase()}`} style={{
              fontSize: 13, fontFamily: "Inter, sans-serif",
              color: "rgba(255,255,255,0.65)", textDecoration: "none",
              letterSpacing: "-0.2px",
            }}>{label}</a>
          ))}
        </div>
      </nav>

      {/* ════════════════════════════════════
          TOP SECTION — Video
          ════════════════════════════════════ */}
      <div style={{
        position: "relative",
        height: topHeight,
        zIndex: 1, 
        pointerEvents: "none",
        overflow: "hidden", 
      }}>
        {/* Smoke Video - Grayscale removes blue tint, perfectly cinematic */}
        <video
          autoPlay muted loop playsInline
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "cover",
            opacity: 1, 
            mixBlendMode: "screen",
            filter: "grayscale(100%) contrast(1.15)", // Removes blue tint, pure B&W
          }}
          src="/videos/9694806-hd_1920_1080_25fps_fae4c811.mp4"
        />

        {/* MASSIVE VIGNETTE OVERLAY
            Reduced edge opacity from 100% black to 85% black so smoke remains visible */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(50% 50%, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.85) 100%)",
        }} />
      </div>

      {/* ════════════════════════════════════
          GLOBAL BEAMS LAYER
          Sits OVER the video (zIndex 5) but stretches 150vh down.
          ════════════════════════════════════ */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0,
        height: "150vh",
        pointerEvents: "none",
        zIndex: 5,
        overflow: "hidden",
      }}>
        {mounted && <LightBeams vh={dim.vh} />}
      </div>

      {/* ════════════════════════════════════
          PROFILE IMAGE
          ════════════════════════════════════ */}
      <div style={{
        position: "absolute",
        top: topHeight,
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 40,
        width: profilePx,
        height: profilePx,
        borderRadius: "100%",
        // Added a crisp 1px border to fix the blurred boundary feel, along with the grey shadow
        border: "1px solid rgba(255,255,255,0.06)",
        boxShadow: "rgba(92,93,94,0.5) 0px 2px 20px 0px",
        overflow: "hidden",
      }}>
        <Image
          src="/images/profile_new.png"
          alt="Anurag Anand"
          width={profilePx}
          height={profilePx}
          priority
          style={{
            display: "block", width: "100%", height: "100%",
            objectFit: "cover", borderRadius: "inherit", objectPosition: "center",
          }}
        />
        {/* Left and Right Edge Vignette */}
        <div style={{
          position: "absolute", inset: 0, borderRadius: "100%", pointerEvents: "none",
          background: "linear-gradient(to right, rgba(0,0,0,0.75) 0%, transparent 22%, transparent 78%, rgba(0,0,0,0.75) 100%)"
        }} />
      </div>

      {/* ════════════════════════════════════
          BOTTOM SECTION — Content + Particles
          ════════════════════════════════════ */}
      <div style={{
        position: "relative",
        backgroundColor: "transparent", // Allows foundation & beams to bleed through
        minHeight: "65vh",
        zIndex: 2,
      }}>

        {/* Canvas particle system - behind content */}
        {mounted && dim.vw > 0 && (
          <div style={{ position: "absolute", inset: 0, zIndex: -1 }}>
             <ParticleCanvas width={dim.vw} height={Math.max(dim.vh, 700)} />
          </div>
        )}

        {/* Super subtle, highly diffused bottom light source (Not a blob!) */}
        <div style={{
          position: "absolute",
          top: 0, left: "50%", transform: "translateX(-50%)",
          width: 800, height: 600,
          background: "radial-gradient(50% 50%, rgba(255, 255, 255, 0.08) 0%, rgba(0, 0, 0, 0) 100%)",
          pointerEvents: "none",
          zIndex: -1,
        }} />

        {/* Content */}
        <div style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          paddingTop: profilePx / 2 + 28,
          paddingBottom: 100,
          paddingLeft: 24,
          paddingRight: 24,
        }}>

          {/* "available for work" */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
            <span style={{
              width: 7, height: 7, borderRadius: "50%",
              background: "#4ade80", display: "inline-block", flexShrink: 0,
              animation: "dotPulse 2s ease-in-out infinite",
            }} />
            <span style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 14, fontWeight: 500,
              color: "rgba(255,255,255,0.6)",
              letterSpacing: "-0.14px", lineHeight: "16px",
            }}>
              available for work
            </span>
          </div>

          {/* Name */}
          <h1 style={{
            fontFamily: '"Instrument Serif", "Instrument Serif Placeholder", serif',
            fontSize: 48,
            fontWeight: 400,
            fontStyle: "italic",
            color: "rgba(255,255,255,0.6)",
            letterSpacing: "-0.96px",
            lineHeight: "57.6px",
            margin: "0 0 10px 0",
          }}>
            Anurag Anand
          </h1>

          {/* Tagline */}
          <p style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 16, fontWeight: 400,
            color: "rgba(255,255,255,0.6)",
            letterSpacing: "-0.32px", lineHeight: "25.6px",
            margin: "0 0 22px 0",
          }}>
            Tech is my Canvas&nbsp;&nbsp;Code is my Brush
          </p>

          {/* Icons */}
          <div style={{
            display: "flex", alignItems: "center", gap: 24,
            marginBottom: 32,
          }}>
            <a href="https://github.com/frostyanand" target="_blank" rel="noopener noreferrer" style={{width: 20, height: 20}} aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" style={{width: "100%", height: "100%", fill: "rgba(255, 255, 255, 0.6)", transition: "fill 0.2s"}}>
                <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
              </svg>
            </a>
            <span style={{ color: "rgba(255,255,255,0.1)", fontSize: 14, lineHeight: 1 }}>|</span>
            <a href="https://www.instagram.com/frostyanand" target="_blank" rel="noopener noreferrer" style={{width: 20, height: 20}} aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" style={{width: "100%", height: "100%", fill: "rgba(255, 255, 255, 0.6)", transition: "fill 0.2s"}}>
                <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
              </svg>
            </a>
            <span style={{ color: "rgba(255,255,255,0.1)", fontSize: 14, lineHeight: 1 }}>|</span>
            <a href="https://linkedin.com/in/frostyanand" target="_blank" rel="noopener noreferrer" style={{width: 20, height: 20}} aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" style={{width: "100%", height: "100%", fill: "rgba(255, 255, 255, 0.6)", transition: "fill 0.2s"}}>
                <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
              </svg>
            </a>
          </div>

          {/* Contact Me button - Exact match */}
          <div style={{ position: "relative", display: "inline-block" }}>
            <a href="#contact" style={{
              position: "relative",
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "16px 32px",
              borderRadius: 118,
              background: "rgba(5, 5, 5, 0.6)", // Almost transparent black
              border: "1px solid rgba(255, 255, 255, 0.12)", // Faint sharp border
              color: "#ffffff",
              fontSize: 16,
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              letterSpacing: "-0.3px",
              textDecoration: "none", cursor: "pointer",
              // The distinctive sharp light bleed on the bottom inner edge
              boxShadow: "inset 0px -1px 2px 0px rgba(255,255,255,0.3)",
              overflow: "hidden"
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" style={{width: 15, height: 15, fill: "currentColor"}}>
                <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
              </svg>
              Contact Me
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

          {/* Scroll chevron - Pure white and completely visible */}
          <div style={{
            marginTop: 72,
            color: "#ffffff",
            animation: "floatChev 2.5s ease-in-out infinite",
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" style={{width: 20, height: 20, fill: "currentColor"}}>
              <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>
            </svg>
          </div>
        </div>

      </div>

      {/* ── Keyframes ── */}
      <style>{`
        /* Center beams: stay light longer, stay dark longer */
        @keyframes globalBeamFade {
          0%, 15%  { opacity: 0.3; }   /* Stay dark */
          40%, 60% { opacity: 0.75; }  /* Stay light (Reduced from 0.95) */
          85%, 100%{ opacity: 0.3; }   /* Stay dark */
        }
        /* Edge beams: out of phase. Appear when center fades */
        @keyframes globalBeamFadeEdge {
          0%, 15%  { opacity: 0.85; }  /* Stay light */
          40%, 60% { opacity: 0.2; }   /* Stay dark */
          85%, 100%{ opacity: 0.85; }  /* Stay light */
        }
        @keyframes dotPulse {
          0%, 100% { opacity: 1;   }
          50%       { opacity: 0.35; }
        }
        @keyframes floatChev {
          0%, 100% { transform: translateY(0);   opacity: 0.3; }
          50%       { transform: translateY(6px); opacity: 0.8;  }
        }
      `}</style>
    </section>
  );
}
