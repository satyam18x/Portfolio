"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";
import { experiences, education } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Experience() {
  return (
    <section id="experience" aria-label="Experience & Education" className="py-24 lg:py-32">
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
            className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-500 mb-4"
          >
            My Journey
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Experience & Education
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed"
          >
            A timeline of my professional roles, industry experience, and academic background.
          </motion.p>
        </motion.div>

        {/* ── Grid: Experience & Education ── */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* Work Experience */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-blue-500/10 text-blue-400">
                <Briefcase size={18} />
              </div>
              <h3
                className="text-2xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Work Experience
              </h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -3, transition: { duration: 0.15 } }}
                  className="card p-6 border border-white/[0.08] hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h4 className="text-lg font-semibold text-white">{exp.role}</h4>
                    <span className="text-xs text-blue-400 font-medium bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full w-fit">
                      {exp.duration}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-4">
                    <span className="text-blue-400 font-semibold">{exp.company}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                    <span>•</span>
                    <span className="text-slate-500">{exp.type}</span>
                  </div>

                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <li key={j} className="text-sm text-slate-400 flex items-start gap-2.5 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-indigo-500/10 text-indigo-400">
                <GraduationCap size={18} />
              </div>
              <h3
                className="text-2xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Education
              </h3>
            </div>

            <div className="space-y-4">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -3, transition: { duration: 0.15 } }}
                  className="card p-5 hover:border-indigo-500/30 transition-all duration-300"
                >
                  <h4 className="font-semibold text-white text-base mb-1.5">{edu.degree}</h4>
                  <p className="text-xs text-indigo-400 font-medium mb-3">{edu.institution}</p>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <Calendar size={12} />
                      {edu.year}
                    </span>
                    <span className="text-emerald-400 font-semibold bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                      {edu.grade}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
