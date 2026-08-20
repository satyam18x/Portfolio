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
    <div id="skills" className="pt-4">
      {/* Section Header */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45 }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-500 mb-3">
          Tools & Technologies
        </p>
        <h2
          className="text-2xl sm:text-3xl font-bold"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Tech Stack
        </h2>
      </motion.div>

      {/* Category Tabs */}
      <motion.div
        className="flex flex-wrap gap-2 mb-8"
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
              "px-4 py-1.5 rounded-md text-xs font-medium transition-all duration-200",
              activeCategory === cat.id
                ? "bg-blue-500 text-white"
                : "border border-white/[0.08] text-slate-500 hover:text-white hover:border-white/20"
            )}
          >
            {cat.label}
          </button>
        ))}
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3"
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
              className="group tech-card p-4 flex flex-col items-center gap-2.5 cursor-default"
              style={{ "--glow-color": color } as React.CSSProperties}
            >
              <div
                className="transition-all duration-300 group-hover:drop-shadow-[0_0_8px_var(--glow-color)]"
                style={{ color }}
              >
                {IconComponent && <IconComponent size={30} />}
              </div>
              <span className="text-[11px] font-medium text-slate-500 group-hover:text-slate-200 transition-colors text-center leading-tight">
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
