"use client";

import { motion } from "framer-motion";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { personalInfo } from "@/data/portfolio";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

export default function Hero() {
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

      <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* ── Main Content Area (Text) ── */}
        <div className="flex-1 text-left max-w-3xl lg:max-w-4xl">
          <motion.p
            {...fadeUp(0.1)}
            className="text-lg sm:text-xl font-normal text-slate-300 mb-3 tracking-wide"
          >
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            {...fadeUp(0.2)}
            className="text-6xl sm:text-7xl lg:text-[5.25rem] font-bold text-white tracking-tight leading-[1.04] mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {personalInfo.name}
          </motion.h1>

          <motion.p
            {...fadeUp(0.3)}
            className="text-lg sm:text-xl lg:text-[1.28rem] text-slate-200/95 leading-[1.8] sm:leading-[1.85] mb-7 sm:mb-9 font-normal"
          >
            a Jabalpur-based full-stack developer and Computer Science undergrad building fast, scalable web applications with the MERN stack and TypeScript. My work focuses on{" "}
            <span className="text-cyan-400 font-semibold underline decoration-cyan-500/30 decoration-2 underline-offset-4">
              clean architecture, performance, and production-ready delivery
            </span>{" "}
            — from designing REST APIs and integrating databases to building responsive interfaces and shipping full-stack apps end-to-end.
          </motion.p>

          <motion.p
            {...fadeUp(0.4)}
            className="text-base sm:text-lg lg:text-[1.12rem] text-slate-400 leading-[1.8] mb-10 sm:mb-12 font-normal"
          >
            Full stack engineer helping ideas become stable, production-ready systems that scale with business growth.
          </motion.p>

          {/* ── Action Buttons ── */}
          <motion.div
            {...fadeUp(0.5)}
            className="flex flex-wrap items-center gap-5 sm:gap-6 pt-2"
          >
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-3 bg-zinc-900/95 hover:bg-zinc-800 text-white font-semibold text-base px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl border border-white/15 hover:border-cyan-400/60 transition-all duration-200 shadow-xl shadow-black/50 hover:shadow-cyan-500/15"
            >
              <span>Reach out</span>
              <span className="text-cyan-400 text-xs font-mono bg-cyan-950/70 border border-cyan-500/40 px-2 py-0.5 rounded">
                &lt;/&gt;
              </span>
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2.5 text-slate-200 hover:text-white font-medium text-base px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl border border-white/10 hover:border-white/25 bg-white/[0.03] hover:bg-white/[0.07] transition-all"
            >
              <span>View Projects</span>
              <ArrowUpRight size={18} className="text-slate-400 group-hover:text-white transition-colors" />
            </Link>
          </motion.div>
        </div>

        {/* ── Right Side: Circular Backdrop & Portrait Photo ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" as const }}
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
