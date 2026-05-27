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

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function About() {
  return (
    <section
      id="about"
      style={{
        paddingTop: "7rem",
        paddingBottom: "7rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Section Title */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          {/* Section label */}
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400 mb-3">
            01 — Who I Am
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-5">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full" />
        </motion.div>

        {/* Bio */}
        <motion.p
          className="text-lg text-slate-400 text-center max-w-3xl mx-auto mb-20 leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {personalInfo.bio}
        </motion.p>

        {/* Stats Cards */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="glass rounded-2xl p-7 text-center group hover:bg-white/[0.06] transition-all duration-300"
              style={{ border: "1px solid rgba(59, 130, 246, 0.12)" }}
            >
              <div className="text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience & Education Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          {/* Experience */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-blue-500/10 text-blue-400">
                <Briefcase size={20} />
              </div>
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>

            <div className="space-y-5">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  className="glass rounded-2xl p-6 group hover:bg-white/[0.06] transition-all duration-300"
                  variants={fadeInUp}
                  whileHover={{ y: -2 }}
                  style={{ border: "1px solid rgba(59, 130, 246, 0.1)" }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h4 className="text-lg font-semibold text-white">{exp.role}</h4>
                    <span className="text-xs text-blue-400 font-medium bg-blue-500/10 px-3 py-1 rounded-full w-fit mt-1 sm:mt-0">
                      {exp.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
                    <span className="font-medium text-violet-400">{exp.company}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                    <span>•</span>
                    <span>{exp.type}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <li key={j} className="text-sm text-slate-400 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                        {point}
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
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-violet-500/10 text-violet-400">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="space-y-5">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  className="glass rounded-2xl p-6 group hover:bg-white/[0.06] transition-all duration-300"
                  variants={fadeInUp}
                  whileHover={{ y: -2 }}
                  style={{ border: "1px solid rgba(139, 92, 246, 0.1)" }}
                >
                  <h4 className="font-semibold text-white mb-2">{edu.degree}</h4>
                  <p className="text-sm text-violet-400 font-medium mb-3">{edu.institution}</p>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {edu.year}
                    </span>
                    <span className="text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full">
                      {edu.grade}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Achievements & Certifications */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Achievements */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-amber-500/10 text-amber-400">
                <Award size={20} />
              </div>
              <h3 className="text-2xl font-bold">Achievements</h3>
            </div>
            <div className="space-y-4">
              {achievements.map((ach, i) => (
                <motion.div
                  key={i}
                  className="glass rounded-xl p-5 hover:bg-white/[0.06] transition-all duration-300"
                  variants={fadeInUp}
                  style={{ border: "1px solid rgba(245, 158, 11, 0.1)" }}
                >
                  <h4 className="font-semibold text-white text-sm mb-2">{ach.title}</h4>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>{ach.event}</span>
                    <span className="text-amber-400">{ach.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-400">
                <BadgeCheck size={20} />
              </div>
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  className="glass rounded-xl p-5 hover:bg-white/[0.06] transition-all duration-300"
                  variants={fadeInUp}
                  style={{ border: "1px solid rgba(16, 185, 129, 0.1)" }}
                >
                  <h4 className="font-semibold text-white text-sm mb-2">{cert.title}</h4>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="text-emerald-400">{cert.issuer}</span>
                    <span>{cert.date}</span>
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
