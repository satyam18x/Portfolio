import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import ParticleBackground from "@/components/ParticleBackground";
import CursorGlow from "@/components/CursorGlow";
import GradientBlobs from "@/components/GradientBlobs";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#06080f] text-slate-100 overflow-x-hidden font-sans">
      {/* Background elements */}
      <ParticleBackground />
      <CursorGlow />
      <GradientBlobs />

      {/* Global Interactive elements */}
      <ScrollProgress />
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </main>

      {/* Footer & Back to top */}
      <Footer />
      <BackToTop />
    </div>
  );
}

