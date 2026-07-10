"use client";

const skills = [
  "AI/ML", "Python", "Deep Learning", "Framer", "MongoDB",
  "API Integration", "Google Cloud", "React", "Java / C / C++",
  "Front-End Development", "Flask", "Cryptography", "Blockchain", "AWS", "Git & GitHub",
];

const experiences = [
  {
    role: "AI Developer",
    description: "Elysia – AI mental health & life companion (Ollama + GenVA)",
    period: "May 2025 – Present",
  },
  {
    role: "System Architect",
    description: "T-storinator – Telegram API-based infinite cloud backup",
    period: "Jan 2025 – Apr 2025",
  },
  {
    role: "Deep Learning Developer",
    description: "DR Detection using EfficientNet + GradCAM",
    period: "Dec 2024 – Feb 2025",
  },
  {
    role: "Backend Developer",
    description: "SpeakEasy – Session booking system (Flask + MongoDB)",
    period: "July 2024 – Nov 2024",
  },
];

export default function SkillsAndExperience() {
  return (
    <section id="experience" className="bg-[#08090a] py-24 md:py-32 border-t border-white/5 relative z-10 overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12 justify-center">
          <div className="h-px flex-1 bg-white/8 max-w-[120px]" />
          <span className="text-[12px] text-white/40 tracking-widest uppercase">Skills & Experience</span>
          <div className="h-px flex-1 bg-white/8 max-w-[120px]" />
        </div>

        {/* Container */}
        <div className="border border-white/8 rounded-2xl overflow-hidden">
          {/* Skills tags */}
          <div className="p-6 md:p-8 border-b border-white/6">
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-[12px] md:text-[13px] text-white/65 bg-white/5 border border-white/8 rounded-full px-3.5 py-1.5 hover:bg-white/8 hover:text-white/90 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Experience list */}
          <div className="divide-y divide-white/5">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-6 md:px-8 py-5 hover:bg-white/2 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-8 flex-1">
                  <span className="text-[13px] md:text-[14px] font-medium text-white/80 min-w-[180px]">
                    {exp.role}
                  </span>
                  <span className="text-[13px] text-white/40">{exp.description}</span>
                </div>
                <span className="text-[12px] text-white/35 whitespace-nowrap">{exp.period}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
