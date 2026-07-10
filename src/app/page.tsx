import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsShowcase from "@/components/sections/ProjectsShowcase";
import LatestProjects from "@/components/sections/LatestProjects";
import SkillsAndExperience from "@/components/sections/SkillsAndExperience";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08090a]">
      {/* Navbar is embedded inside HeroSection for the split effect */}
      <HeroSection />
      <AboutSection />
      <ProjectsShowcase />
      <LatestProjects />
      <SkillsAndExperience />
      <ContactSection />
      <Footer />
    </main>
  );
}
