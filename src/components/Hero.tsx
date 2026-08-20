"use client";

import { motion } from "framer-motion";
import { Mail, ChevronDown, Code, ArrowUpRight, FileText } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter, FaTelegram } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { personalInfo } from "@/data/portfolio";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  const socialLinks = [
    { icon: FaXTwitter, href: personalInfo.twitter || "https://x.com", label: "X / Twitter" },
    { icon: FaGithub, href: personalInfo.github, label: "GitHub" },
    { icon: FaLinkedin, href: personalInfo.linkedin, label: "LinkedIn" },
    { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
  ];

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#050811] text-white pt-24 pb-16 lg:py-28"
    >
      {/* ── Perspective 3D Wireframe Mesh Background ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-35">
        <svg
          className="absolute w-[200%] h-[200%] -left-[50%] -top-[30%] stroke-cyan-500/20"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
        >
          <defs>
            <radialGradient id="meshGradient" cx="50%" cy="40%" r="50%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
              <stop offset="60%" stopColor="#3b82f6" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>
          </defs>
          <path
            d="M0,400 Q300,200 600,400 T1200,400 M0,450 Q300,250 600,450 T1200,450 M0,500 Q300,300 600,500 T1200,500 M0,550 Q300,350 600,550 T1200,550 M0,600 Q300,400 600,600 T1200,600 M0,650 Q300,450 600,650 T1200,650 M0,700 Q300,500 600,700 T1200,700 M0,750 Q300,550 600,750 T1200,750"
            strokeWidth="0.75"
          />
          <path
            d="M100,200 Q300,500 500,800 M250,150 Q450,480 650,800 M400,120 Q600,460 800,800 M550,100 Q750,450 950,800 M700,90 Q900,440 1100,800 M850,90 Q1050,440 1250,800"
            strokeWidth="0.75"
          />
        </svg>

        {/* Ambient radial glow highlights */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* ── Left Social Vertical Sidebar (Desktop) ── */}
        <motion.div
          {...fadeUp(0.1)}
          className="hidden md:flex lg:flex flex-col items-center gap-6 pr-4 lg:pr-8 border-r border-white/5"
        >
          {socialLinks.map((s, idx) => (
            <motion.a
              key={idx}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              whileHover={{ scale: 1.15, x: 2 }}
              className="text-slate-400 hover:text-cyan-400 transition-colors p-1"
            >
              <s.icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        {/* ── Main Content Area (Text) ── */}
        <div className="flex-1 text-left">
          <motion.p
            {...fadeUp(0.15)}
            className="text-base sm:text-lg font-medium text-slate-300 mb-2 tracking-wide"
          >
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            {...fadeUp(0.25)}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {personalInfo.name}
          </motion.h1>

          <motion.p
            {...fadeUp(0.35)}
            className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl mb-4 font-normal"
          >
            an India-based software engineer and Full Stack Developer helping businesses grow by
            building secure scalable applications, backend systems, and cloud infrastructure for modern
            products. My work focuses on{" "}
            <span className="text-cyan-400 font-semibold underline decoration-cyan-500/30 decoration-2 underline-offset-4">
              performance, reliability, security, and scalability
            </span>{" "}
            — from MERN stack architecture and REST API development to database optimization,
            cloud workflows, and production deployment.
          </motion.p>

          <motion.p
            {...fadeUp(0.45)}
            className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mb-8"
          >
            Full stack engineer helping ideas become stable, production-ready systems that scale with
            business growth.
          </motion.p>

          {/* ── Action Buttons ── */}
          <motion.div
            {...fadeUp(0.55)}
            className="flex flex-wrap items-center gap-4 pt-1"
          >
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2.5 bg-zinc-900/90 hover:bg-zinc-800 text-white font-medium text-sm px-6 py-3 rounded-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-200 shadow-lg shadow-black/40 hover:shadow-cyan-500/10"
            >
              <span>Get in Touch</span>
              <span className="text-cyan-400 text-xs font-mono bg-cyan-950/60 border border-cyan-500/30 px-1.5 py-0.5 rounded">
                &lt;/&gt;
              </span>
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white font-medium text-sm px-5 py-3 rounded-xl border border-white/5 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.05] transition-all"
            >
              <span>View Projects</span>
              <ArrowUpRight size={16} className="text-slate-400" />
            </Link>

            <a
              href="/resume.pdf"
              download="Satyam_Haldkar_Resume.pdf"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-300 font-medium text-sm px-4 py-3 transition-colors"
            >
              <FileText size={15} />
              <span>Resume</span>
            </a>
          </motion.div>

          {/* ── Mobile Social Bar ── */}
          <motion.div
            {...fadeUp(0.65)}
            className="flex md:hidden items-center gap-5 mt-8 pt-6 border-t border-white/10"
          >
            {socialLinks.map((s, idx) => (
              <a
                key={idx}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-slate-400 hover:text-cyan-400 transition-colors p-1"
              >
                <s.icon size={19} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* ── Right Side: Circular Backdrop & Portrait Photo ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex flex-col items-center justify-center flex-shrink-0"
        >
          {/* Main Circular Frame with Dot Matrix Pattern */}
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[410px] lg:h-[410px] flex items-center justify-center">
            {/* Background Circular Perforated Dot Matrix Disc */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-zinc-700/50 to-zinc-900/90 border border-white/10 overflow-hidden shadow-2xl shadow-black/80">
              {/* Dot Pattern SVG */}
              <svg
                className="absolute inset-0 w-full h-full opacity-35"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="heroDotGrid"
                    width="14"
                    height="14"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="2" cy="2" r="1.2" fill="#ffffff" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#heroDotGrid)" />
              </svg>

              {/* Cyan subtle inner glow ring */}
              <div className="absolute inset-0 rounded-full border border-cyan-500/20" />
            </div>

            {/* Profile Photo */}
            <div className="relative w-[92%] h-[92%] rounded-full overflow-hidden z-10">
              <Image
                src="/profilepic.jpg"
                alt={`${personalInfo.name} — Full Stack Developer`}
                fill
                className="object-cover object-top scale-105"
                priority
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 380px, 420px"
              />
            </div>

            {/* Circular Scroll Down Button */}
            <motion.a
              href="#about"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              aria-label="Scroll Down"
              className="absolute -bottom-4 z-20 w-11 h-11 rounded-full bg-zinc-950/95 border border-white/20 hover:border-cyan-400 flex items-center justify-center text-slate-300 hover:text-cyan-400 transition-all shadow-xl hover:shadow-cyan-500/20 cursor-pointer"
            >
              <ChevronDown size={18} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
