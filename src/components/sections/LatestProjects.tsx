"use client";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  tags: string[];
  imageSrc?: string;
  bgColor?: string;
  icon?: React.ReactNode;
}

export function ProjectCard({ title, tags, imageSrc, bgColor, icon }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col rounded-2xl overflow-hidden border border-white/8 bg-[#0d0e10] hover:border-white/15 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
      {/* Image / Icon area */}
      <div className="relative h-[200px] md:h-[220px] overflow-hidden" style={{ background: bgColor || "#0d0e10" }}>
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 280px"
          />
        ) : icon ? (
          <div className="w-full h-full flex items-center justify-center">
            {icon}
          </div>
        ) : null}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] text-white/35 uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
        {/* Title */}
        <h3 className="text-[16px] font-semibold text-white tracking-tight">{title}</h3>
      </div>
    </div>
  );
}

export default function LatestProjects() {
  const projects = [
    {
      title: "T-Storinator",
      tags: ["Telegram-API"],
      bgColor: "#0a0b0d",
      icon: (
        <div className="flex flex-col items-center gap-3 text-center px-6">
          <div className="w-16 h-16 rounded-2xl bg-white/8 border border-white/10 flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="white" opacity="0.8">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
            </svg>
          </div>
          <p className="text-[12px] text-white/40 leading-snug max-w-[180px]">
            Telegram-based infinite cloud storage engine with smart scheduling
          </p>
        </div>
      ),
    },
    {
      title: "Elysia",
      tags: ["AI Companion", "Mental Health"],
      imageSrc: "/images/15bqcpEsyVwLBDjeUmB1z0ao_6e713f16.png",
      bgColor: "#0d0a1a",
    },
    {
      title: "SpeakEasy",
      tags: ["Backend System", "Session Booking"],
      imageSrc: "/images/BRgvw1TexxgQZIbk1RuvzrsIPtY_94d28b59.png",
    },
    {
      title: "ARGUS",
      tags: ["Medical AI", "Deep Learning"],
      imageSrc: "/images/46MuEJQviCcJF6U6Qljwa0vb43o_5f58543c.png",
      bgColor: "#0c0a0a",
    },
  ];

  return (
    <section id="projects" className="bg-[#08090a] py-24 md:py-32 border-t border-white/5">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10">
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-white/20" />
            <span className="text-[12px] text-white/40 tracking-widest uppercase">Projects</span>
            <div className="h-px w-8 bg-white/20" />
          </div>
          <h2 className="text-[30px] md:text-[40px] font-semibold tracking-tight text-white">
            My Latest{" "}
            <span className="font-serif text-white/70">Projects</span>
          </h2>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        {/* See All button */}
        <div className="flex justify-center mt-10">
          <button className="flex items-center gap-2 text-[13px] text-white/50 border border-white/10 rounded-full px-5 py-2.5 hover:bg-white/5 hover:text-white transition-all duration-200">
            See All
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
