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
    <div
      style={{ backgroundColor: "#06080f", color: "#e2e8f0", overflowX: "hidden" }}
      className="relative min-h-screen font-sans"
    >
      {/* Background elements */}
      <ParticleBackground />
      <CursorGlow />
      <GradientBlobs />

      {/* Navigation */}
      <ScrollProgress />
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        {/* HERO */}
        <Hero />

        {/* ABOUT — alternate dark bg */}
        <div style={{ backgroundColor: "rgba(15, 23, 42, 0.5)", borderTop: "1px solid rgba(59, 130, 246, 0.15)", borderBottom: "1px solid rgba(59, 130, 246, 0.15)" }}>
          <About />
        </div>

        {/* TECHSTACK — base bg */}
        <div style={{ backgroundColor: "rgba(6, 8, 15, 0.9)", borderBottom: "1px solid rgba(139, 92, 246, 0.15)" }}>
          <TechStack />
        </div>

        {/* PROJECTS — slightly lighter */}
        <div style={{ backgroundColor: "rgba(12, 16, 32, 0.6)", borderBottom: "1px solid rgba(59, 130, 246, 0.15)" }}>
          <Projects />
        </div>

        {/* CONTACT */}
        <div style={{ backgroundColor: "rgba(6, 8, 15, 0.9)" }}>
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <Footer />
      <BackToTop />
    </div>
  );
}
