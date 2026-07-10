"use client";
import Image from "next/image";

export default function ProjectsShowcase() {
  return (
    <section className="bg-[#08090a] py-24 md:py-32 border-t border-white/5">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Stacked image collage */}
          <div className="flex flex-col items-center">
            {/* Label */}
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-12 bg-white/20" />
              <span className="text-[12px] text-white/40 tracking-widest uppercase">Who is Anurag Anand?</span>
              <div className="h-px w-12 bg-white/20" />
            </div>
            {/* Stacked image grid */}
            <div className="relative w-full max-w-[320px] h-[260px] md:h-[300px]">
              {/* Main large card */}
              <div className="absolute left-0 top-0 w-[55%] h-full rounded-xl overflow-hidden border border-white/8 shadow-2xl">
                <Image
                  src="/images/7wO7fGkuCaRvMixdvk5iGmWrzfo_8acafe73.jpg"
                  alt="Project preview"
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
              {/* Top right card */}
              <div className="absolute right-0 top-0 w-[42%] h-[47%] rounded-xl overflow-hidden border border-white/8 shadow-xl">
                <Image
                  src="/images/2tsEoalKV0gW67C7KEF0opYwC4U_ae0ef980.jpg"
                  alt="Project preview"
                  fill
                  className="object-cover"
                  sizes="150px"
                />
              </div>
              {/* Bottom right card */}
              <div className="absolute right-0 bottom-0 w-[42%] h-[47%] rounded-xl overflow-hidden border border-white/8 shadow-xl">
                <div className="w-full h-full bg-[#0d0e10] flex items-center justify-center">
                  <div className="text-center px-3">
                    <div className="text-[24px] font-bold text-white leading-none mb-1">Insights</div>
                    <div className="text-[11px] text-white/40 leading-snug">That enable innovation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div>
            <h2 className="text-[30px] md:text-[38px] lg:text-[44px] font-semibold leading-tight tracking-tight mb-5 text-white">
              10+ Projects{" "}
              <span className="font-serif text-white/70">endless curiosity</span>
            </h2>

            <p className="text-[14px] md:text-[15px] text-white/50 leading-[1.75] mb-4">
              A CSE student with a quiet obsession for intelligent systems. From
              sketching early logic in C++ to training deep learning models, I&apos;ve
              found joy in every step of building things that understand.
            </p>
            <p className="text-[14px] md:text-[15px] text-white/50 leading-[1.75] mb-8">
              I believe the best tech isn&apos;t just functional — it listens, teams, and
              leaves people better than it found them.
            </p>

            <a
              href="https://www.instagram.com/frostyanand"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/60 text-[13px] hover:text-white transition-colors"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
              frostyanand
            </a>

            {/* Trust badges row */}
            <div className="mt-8 pt-8 border-t border-white/6">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[
                    "/images/i5AhpQsw7fiBUQCT7WhvJc12Nk_d98c7432.webp",
                    "/images/usEk7NBxdZSHDOa8tWyhFP4_baae328f.webp",
                    "/images/wL5MDotL8P4IlPXS1nUathwAnE_ede92a51.webp",
                  ].map((src, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full overflow-hidden border-2 border-[#08090a]"
                    >
                      <Image src={src} alt="" width={32} height={32} className="object-cover" />
                    </div>
                  ))}
                </div>
                <p className="text-[12px] text-white/35 leading-snug max-w-[280px]">
                  Trusted by peers, mentors, and hackathon teams for thoughtful builds and reliable execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
