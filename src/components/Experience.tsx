"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { experiences } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Experience() {
  return (
    <section id="experience" aria-label="Work Experience" className="relative overflow-hidden bg-[#050811] text-white py-24 lg:py-32">
      {/* ── Perspective 3D Wireframe Mesh & Glow Background ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-25">
        <svg
          className="absolute w-[200%] h-[200%] -left-[50%] -top-[30%] stroke-cyan-500/20"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
        >
          <path
            d="M0,380 Q300,200 600,380 T1200,380 M0,450 Q300,270 600,450 T1200,450 M0,520 Q300,340 600,520 T1200,520 M0,590 Q300,410 600,590 T1200,590"
            strokeWidth="0.75"
          />
          <path
            d="M200,100 Q400,420 600,750 M450,90 Q650,410 850,750 M700,80 Q900,400 1100,750"
            strokeWidth="0.75"
          />
        </svg>

        {/* Ambient floating glow highlights */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.12, 0.22, 0.12],
            y: [0, 20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 -right-20 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, -20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 -left-20 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">

        {/* ── Section Header ── */}
        <motion.div
          className="mb-16 text-center lg:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          <motion.p
            variants={fadeUp}
            className="text-sm sm:text-base font-semibold uppercase tracking-[0.22em] text-cyan-400 mb-4"
          >
            My Journey
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Work Experience
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-slate-300/90 text-lg sm:text-xl lg:text-[1.2rem] max-w-3xl leading-relaxed"
          >
            A timeline of my professional roles, internships, and hands-on industry experience.
          </motion.p>
        </motion.div>

        {/* ── Work Experience ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="max-w-3xl"
        >
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, scale: 1.01, transition: { duration: 0.2 } }}
                className="card p-7 sm:p-9 border border-white/[0.08] hover:border-cyan-500/40 bg-zinc-950/70 shadow-lg hover:shadow-cyan-500/15 transition-all duration-300 rounded-2xl"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-sm shadow-cyan-500/10">
                      <Briefcase size={22} />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{exp.role}</h3>
                      <span className="text-base sm:text-lg text-cyan-400 font-semibold">{exp.company}</span>
                    </div>
                  </div>
                  <span className="text-xs sm:text-sm text-amber-400 font-semibold bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full w-fit">
                    {exp.duration}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 text-sm text-slate-400 mb-6 pl-14">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} />
                    {exp.location}
                  </span>
                  <span>•</span>
                  <span className="text-slate-400">{exp.type}</span>
                </div>

                <ul className="space-y-3 pl-14">
                  {exp.points.map((point, j) => (
                    <li key={j} className="text-base sm:text-lg text-slate-300 leading-relaxed flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
