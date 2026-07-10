import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <Navbar />
      
      {/* Slightly lit screen edges */}
      <div 
        className="pointer-events-none fixed inset-0 z-50"
        style={{
          boxShadow: "inset 0 0 100px rgba(255, 255, 255, 0.03)",
        }}
      />
      
      <div className="pt-32 pb-32 px-6 md:px-12 max-w-6xl mx-auto relative z-10">
        <div className="mb-16">
          <Link href="/#about" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-[14px] uppercase tracking-widest font-medium">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back
          </Link>
        </div>

        {/* Top Section: Heading & Image */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-24 mb-32">
          {/* Left Text */}
          <div className="flex-1 w-full space-y-6">
            <h1 style={{
              fontSize: "clamp(3.5rem, 8vw, 5.5rem)",
              fontFamily: '"Instrument Serif", serif',
              fontWeight: 400,
              fontStyle: "italic",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#ffffff"
            }}>
              My Story
            </h1>
            <p className="text-xl md:text-2xl text-white/40 font-light tracking-wide max-w-md leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
              A non-linear path to engineering, curiosity, and the pursuit of building what&apos;s next.
            </p>
          </div>
          
          {/* Right Image */}
          <div className="flex-1 w-full flex justify-center md:justify-end relative">
            <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-2xl overflow-hidden" style={{
              boxShadow: "0 20px 40px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.05)"
            }}>
               <img 
                 src="/images/about_me_bw_v2.png" 
                 alt="Anurag Anand"
                 className="object-cover w-full h-full opacity-90 transition-opacity duration-700 hover:opacity-100"
                 style={{ filter: "grayscale(20%) contrast(1.1)" }}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Story Content */}
        <div className="max-w-3xl mx-auto md:ml-24" style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "17.5px",
          color: "rgba(255,255,255,0.6)",
          lineHeight: 2.1,
          letterSpacing: "-0.01em"
        }}>
          <div className="space-y-12">
            <p>
              If you ask me when my journey into software began, I could point to a programming language, a project, or the first time I built something that worked.
            </p>
            <p>
              But that wouldn&apos;t really be the truth.
            </p>
            <p>
              The truth is that I didn&apos;t find engineering because I had everything figured out. I found it while trying to figure myself out.
            </p>
            <p>
              Like most people, my path hasn&apos;t been a straight line. There were years that challenged my confidence more than my ability. Expectations didn&apos;t always become results. Plans changed. People came and went. There were moments when I questioned whether I belonged where I was headed at all.
            </p>
            <p>
              Looking back, I&apos;m strangely grateful for those moments.
            </p>
            <p>
              They taught me something I probably couldn&apos;t have learned any other way: progress isn&apos;t built on perfect conditions. It&apos;s built by continuing anyway.
            </p>
            <p>
              Somewhere along the way, software stopped feeling like a subject to study and started feeling like a way to create. I became fascinated by the idea that a few lines of code could solve a real problem, help another person, or bring an idea into existence that didn&apos;t exist the day before.
            </p>
            <p>
              That curiosity slowly became the constant in my life.
            </p>
            <p>
              Since then I&apos;ve had the privilege of working on enterprise platforms, AI systems, government research, secure communication frameworks, hackathons, startups, and far too many late-night ideas that never made it past the whiteboard. Some succeeded. Some failed. Every one of them taught me something worth carrying into the next.
            </p>
            <p>
              Today I spend most of my time building software, reading about systems, sketching ideas that are probably too ambitious, and asking questions that usually begin with <span className="text-white/90 italic">&quot;What if...?&quot;</span>
            </p>
            <p>
              I&apos;m particularly drawn toward problems involving distributed systems, artificial intelligence, cybersecurity, and products that live beyond a prototype.
            </p>
            <p>
              Outside engineering, I enjoy writing, reflecting, and occasionally stepping back long enough to appreciate how far a curious mind can travel when it refuses to stop learning.
            </p>
          </div>
          
          <div className="h-px w-16 bg-white/20 my-16" />
          
          <div className="space-y-6 text-white/80">
            <p>
              I don&apos;t believe a portfolio can capture everything about a person.
            </p>
            <p>
              It can only capture the things they&apos;ve chosen to build.
            </p>
            <p>
              Everything here represents a chapter of my journey, not the destination.
            </p>
          </div>

          <div className="pt-6 space-y-4">
            <p className="text-white font-medium text-lg tracking-wide">
              I&apos;m still learning.
            </p>
            <p className="text-white font-medium text-lg tracking-wide">
              Still building.
            </p>
            <p className="text-white font-medium tracking-wide mt-8" style={{ fontFamily: '"Instrument Serif", serif', fontStyle: "italic", fontSize: "1.75rem", fontWeight: 400 }}>
              And still curious about what&apos;s waiting around the next corner.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
