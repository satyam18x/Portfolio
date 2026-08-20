"use client";

import { motion } from "framer-motion";
import {
  personalInfo,
  stats,
} from "@/data/portfolio";
import TechStack from "@/components/TechStack";

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
            className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400 mb-4"
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
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16"
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

        {/* ── Tech Stack ── */}
        <TechStack />

      </div>
    </section>
  );
}
