"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Award,
  BadgeCheck,
  MapPin,
  Calendar,
} from "lucide-react";
import {
  personalInfo,
  experiences,
  education,
  achievements,
  certifications,
  stats,
} from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function About() {
  return (
    <section id="about" aria-label="About Me">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10 py-20 lg:py-28">

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
            className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-500 mb-4"
          >
            Who I Am
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            About Me
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed"
          >
            {personalInfo.bio}
          </motion.p>
        </motion.div>

        {/* ── Stats Row ── */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="card p-6 text-center"
            >
              <div
                className="text-3xl font-bold gradient-text mb-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-slate-500 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Experience & Education ── */}
        <div className="grid lg:grid-cols-2 gap-10 mb-20">

          {/* Experience */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-blue-500/10 text-blue-400">
                <Briefcase size={16} />
              </div>
              <h2
                className="text-xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Experience
              </h2>
            </div>
            <div className="space-y-4">
              {experiences.map((exp, i) => (
                <div
                  key={i}
                  className="card p-5 hover:border-blue-500/30"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="text-base font-semibold text-white">{exp.role}</h3>
                    <span className="text-xs text-blue-400 font-medium bg-blue-500/10 px-2.5 py-1 rounded-full w-fit">
                      {exp.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
                    <span className="text-slate-400 font-medium">{exp.company}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <MapPin size={11} />
                      {exp.location}
                    </span>
                    <span>·</span>
                    <span>{exp.type}</span>
                  </div>
                  <ul className="space-y-1.5">
                    {exp.points.map((point, j) => (
                      <li key={j} className="text-sm text-slate-400 flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
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
                <GraduationCap size={16} />
              </div>
              <h2
                className="text-xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Education
              </h2>
            </div>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <div key={i} className="card p-5 hover:border-indigo-500/30">
                  <h3 className="font-semibold text-white text-sm mb-1.5">{edu.degree}</h3>
                  <p className="text-xs text-indigo-400 font-medium mb-3">{edu.institution}</p>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar size={11} />
                      {edu.year}
                    </span>
                    <span className="text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full">
                      {edu.grade}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Achievements & Certifications ── */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* Achievements */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400">
                <Award size={16} />
              </div>
              <h2
                className="text-xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Achievements
              </h2>
            </div>
            <div className="space-y-3">
              {achievements.map((ach, i) => (
                <div key={i} className="card p-4 hover:border-amber-500/25">
                  <h3 className="font-semibold text-white text-sm mb-2">{ach.title}</h3>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">{ach.event}</span>
                    <span className="text-amber-400 font-medium">{ach.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400">
                <BadgeCheck size={16} />
              </div>
              <h2
                className="text-xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Certifications
              </h2>
            </div>
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <div key={i} className="card p-4 hover:border-emerald-500/25">
                  <h3 className="font-semibold text-white text-sm mb-2">{cert.title}</h3>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-emerald-400 font-medium">{cert.issuer}</span>
                    <span className="text-slate-500">{cert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
