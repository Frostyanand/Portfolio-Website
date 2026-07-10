"use client";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-[#08090a] py-24 md:py-32 border-t border-white/5">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: text content */}
          <div className="order-2 md:order-1">
            <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-semibold leading-tight tracking-tight mb-5 text-white">
              More about{" "}
              <span className="font-serif text-white/90">myself</span>
            </h2>

            <p className="text-[14px] md:text-[15px] text-white/50 leading-[1.75] mb-8 max-w-[440px]">
              Hi, I&apos;m Anurag Anand. I&apos;m a builder at heart. Every project I
              take on begins with empathy and ends with intention — not just to
              function, but to feel. For me, technology is both a canvas and a
              quiet conversation, where even the smallest detail carries meaning.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white/6 border border-white/10 text-white/70 text-[13px] font-medium px-5 py-2.5 rounded-full hover:bg-white/10 hover:text-white transition-all duration-200"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10"/>
              </svg>
              Contact Me
            </a>
          </div>

          {/* Right: image */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-2xl overflow-hidden border border-white/8">
              <Image
                src="/images/rlizSNVuxrrqd6I5hGaSxwqn0Os_3aade6f0.png"
                alt="Anurag working at computer"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 420px"
              />
              {/* Subtle dark overlay at edges */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
