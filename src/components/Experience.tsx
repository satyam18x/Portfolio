"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { experiences } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Experience() {
  return (
    <section id="experience" aria-label="Work Experience" className="py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">

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
            className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400 mb-4"
          >
            My Journey
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-bold mb-4 text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Work Experience
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed"
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
                whileHover={{ y: -3, transition: { duration: 0.15 } }}
                className="card p-6 sm:p-8 border border-white/[0.08] hover:border-cyan-500/40 bg-zinc-950/60 shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 rounded-2xl"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-400">
                      <Briefcase size={18} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <span className="text-sm text-cyan-400 font-semibold">{exp.company}</span>
                    </div>
                  </div>
                  <span className="text-xs text-amber-400 font-semibold bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full w-fit">
                    {exp.duration}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-5 pl-12">
                  <span className="flex items-center gap-1">
                    <MapPin size={12} />
                    {exp.location}
                  </span>
                  <span>•</span>
                  <span className="text-slate-500">{exp.type}</span>
                </div>

                <ul className="space-y-2.5 pl-12">
                  {exp.points.map((point, j) => (
                    <li key={j} className="text-sm text-slate-300 flex items-start gap-2.5 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
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
