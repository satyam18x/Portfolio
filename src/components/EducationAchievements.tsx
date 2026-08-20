"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar } from "lucide-react";
import { education, achievements } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function EducationAchievements() {
  return (
    <section id="education" aria-label="Education & Achievements" className="py-20 lg:py-28 border-t border-white/[0.04]">
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
            Background & Recognitions
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Education & Achievements
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed"
          >
            An overview of my academic foundation, degrees, hackathon participation, and honors.
          </motion.p>
        </motion.div>

        {/* ── Grid: Education & Achievements ── */}
        <div className="grid lg:grid-cols-2 gap-10">

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

          {/* Achievements */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400">
                <Award size={18} />
              </div>
              <h3
                className="text-2xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Achievements
              </h3>
            </div>

            <div className="space-y-4">
              {achievements.map((ach, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -3, transition: { duration: 0.15 } }}
                  className="card p-5 hover:border-amber-500/30 transition-all duration-300"
                >
                  <h4 className="font-semibold text-white text-base mb-1.5">{ach.title}</h4>
                  <div className="flex items-center justify-between text-xs mt-3">
                    <span className="text-slate-400 font-medium">{ach.event}</span>
                    <span className="text-amber-400 font-semibold bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full">
                      {ach.date}
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
