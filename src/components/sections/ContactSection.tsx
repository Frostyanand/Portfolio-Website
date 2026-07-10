"use client";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#08090a] py-24 md:py-32 border-t border-white/5">
      <div className="max-w-[700px] mx-auto px-6 md:px-10 text-center">
        {/* Section label */}
        <div className="flex items-center gap-2 justify-center mb-6">
          <div className="h-px w-8 bg-white/20" />
          <span className="text-[12px] text-white/40 tracking-widest uppercase">Reach out anytime</span>
          <div className="h-px w-8 bg-white/20" />
        </div>

        {/* Heading */}
        <h2 className="text-[32px] md:text-[46px] lg:text-[52px] font-semibold leading-tight tracking-tight text-white mb-5">
          Let&apos;s Stay{" "}
          <span className="font-serif text-white/70">Connected</span>
        </h2>

        {/* Sub text */}
        <p className="text-[14px] md:text-[15px] text-white/45 leading-[1.75] mb-10 max-w-[480px] mx-auto">
          Got questions or want to collaborate? Feel free to reach out — I&apos;m open to new projects or just a casual chat.
        </p>

        {/* Resume button */}
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-white/8 border border-white/10 text-white/80 text-[13px] font-medium px-6 py-3 rounded-full hover:bg-white/12 hover:text-white transition-all duration-200 mb-10"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7v10"/>
          </svg>
          View My Resume
        </a>

        {/* Social icons row */}
        <div className="flex items-center justify-center gap-4 mb-6">
          {/* X / Twitter */}
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
            aria-label="X (Twitter)"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white" opacity="0.6">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/frostyanand"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
            aria-label="Instagram"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" opacity="0.6">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/>
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:frostyanand@gmail.com"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
            aria-label="Email"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" opacity="0.6">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="M2 7l10 7 10-7"/>
            </svg>
          </a>
        </div>

        {/* Email text */}
        <p className="text-[13px] text-white/30">frostyanand@gmail.com</p>
      </div>
    </section>
  );
}
