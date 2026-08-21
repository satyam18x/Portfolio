"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript,
  SiTailwindcss, SiRedux, SiHtml5, SiCss, SiNodedotjs,
  SiExpress, SiFastapi, SiPython, SiCplusplus, SiMongodb,
  SiSqlite, SiGit, SiGithub, SiDocker, SiPostman, SiVite, SiStreamlit,
} from "react-icons/si";
import { skills, type Skill } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript,
  SiTailwindcss, SiRedux, SiHtml5, SiCss, SiNodedotjs,
  SiExpress, SiFastapi, SiPython, SiCplusplus, SiMongodb,
  SiSqlite, SiGit, SiGithub, SiDocker, SiPostman, SiVite, SiStreamlit,
};

const colorMap: Record<string, string> = {
  SiReact: "#61DAFB", SiNextdotjs: "#ffffff", SiTypescript: "#3178C6",
  SiJavascript: "#F7DF1E", SiTailwindcss: "#06B6D4", SiRedux: "#764ABC",
  SiHtml5: "#E34F26", SiCss: "#1572B6", SiNodedotjs: "#339933",
  SiExpress: "#aaaaaa", SiFastapi: "#009688", SiPython: "#3776AB",
  SiCplusplus: "#00599C", SiMongodb: "#47A248", SiSqlite: "#4479A1",
  SiGit: "#F05032", SiGithub: "#aaaaaa", SiDocker: "#2496ED",
  SiPostman: "#FF6C37", SiVite: "#646CFF", SiStreamlit: "#FF4B4B",
};

const categories = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Database" },
  { id: "tools", label: "Tools" },
] as const;

type CategoryId = (typeof categories)[number]["id"];

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <div id="skills" className="pt-6">
      {/* Section Header */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45 }}
      >
        <p className="text-sm sm:text-base font-semibold uppercase tracking-[0.22em] text-cyan-400 mb-3">
          Tools & Technologies
        </p>
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Tech Stack
        </h2>
      </motion.div>

      {/* Category Tabs */}
      <motion.div
        className="flex flex-wrap gap-2.5 mb-10"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            suppressHydrationWarning
            className={cn(
              "px-5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer",
              activeCategory === cat.id
                ? "bg-cyan-500 text-zinc-950 font-semibold shadow-md shadow-cyan-500/20"
                : "border border-white/[0.08] text-slate-300 hover:text-white hover:border-white/20 bg-zinc-950/50"
            )}
          >
            {cat.label}
          </button>
        ))}
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5"
        layout
      >
        {filteredSkills.map((skill: Skill, i: number) => {
          const IconComponent = iconMap[skill.icon];
          const color = colorMap[skill.icon] || "#888888";

          return (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.03 }}
              whileHover={{ y: -4, scale: 1.04, transition: { duration: 0.15 } }}
              className="group tech-card p-4.5 flex flex-col items-center justify-center gap-3 cursor-default rounded-xl"
              style={{ "--glow-color": color } as React.CSSProperties}
            >
              <div
                className="transition-all duration-300 group-hover:drop-shadow-[0_0_10px_var(--glow-color)]"
                style={{ color }}
              >
                {IconComponent && <IconComponent size={34} />}
              </div>
              <span className="text-xs sm:text-sm font-medium text-slate-400 group-hover:text-white transition-colors text-center leading-tight">
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
