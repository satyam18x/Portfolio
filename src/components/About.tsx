"use client";

import { motion } from "framer-motion";
import {
  personalInfo,
  stats,
} from "@/data/portfolio";
import TechStack from "@/components/TechStack";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function About() {
  return (
    <section id="about" aria-label="About Me" className="relative overflow-hidden bg-[#050811] text-white">
      {/* ── Perspective 3D Wireframe Mesh & Glow Background ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-25">
        <svg
          className="absolute w-[200%] h-[200%] -left-[50%] -top-[40%] stroke-cyan-500/20"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
        >
          <path
            d="M0,350 Q300,180 600,350 T1200,350 M0,420 Q300,240 600,420 T1200,420 M0,490 Q300,300 600,490 T1200,490 M0,560 Q300,360 600,560 T1200,560 M0,630 Q300,420 600,630 T1200,630"
            strokeWidth="0.75"
          />
          <path
            d="M150,150 Q350,450 550,750 M350,120 Q550,430 750,750 M550,100 Q750,420 950,750 M750,90 Q950,410 1150,750"
            strokeWidth="0.75"
          />
        </svg>

        {/* Ambient floating glow highlights */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.12, 0.22, 0.12],
            x: [0, 20, 0],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.1, 0.2, 0.1],
            y: [0, -20, 0],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8 lg:px-10 py-20 lg:py-28">

        {/* ── Section Header ── */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          <motion.p
            variants={fadeUp}
            className="text-sm sm:text-base font-semibold uppercase tracking-[0.22em] text-cyan-400 mb-4"
          >
            Who I Am
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            About Me
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl lg:text-[1.22rem] text-slate-300/95 max-w-3xl leading-relaxed"
          >
            {personalInfo.bio}
          </motion.p>
        </motion.div>

        {/* ── Stats Row ── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.2 } }}
              className="card p-7 text-center border border-white/[0.08] hover:border-cyan-500/40 bg-zinc-950/70 shadow-lg hover:shadow-cyan-500/15 transition-all duration-300 rounded-2xl"
            >
              <div
                className="text-4xl sm:text-5xl font-bold gradient-text mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-slate-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Tech Stack ── */}
        <TechStack />

      </div>
    </section>
  );
}
