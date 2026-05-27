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
  SiExpress: "#ffffff", SiFastapi: "#009688", SiPython: "#3776AB",
  SiCplusplus: "#00599C", SiMongodb: "#47A248", SiSqlite: "#003B57",
  SiGit: "#F05032", SiGithub: "#ffffff", SiDocker: "#2496ED",
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
    <section
      id="skills"
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
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-400 mb-3">
            02 — Tools & Technologies
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-5">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-5">
            Technologies and tools I work with to bring ideas to life
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full" />
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              suppressHydrationWarning
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-lg shadow-blue-500/20"
                  : "glass text-slate-400 hover:text-white hover:bg-white/[0.08]"
              )}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-5"
          layout
        >
          {filteredSkills.map((skill: Skill, i: number) => {
            const IconComponent = iconMap[skill.icon];
            const color = colorMap[skill.icon] || "#ffffff";

            return (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                whileHover={{ scale: 1.1, y: -8, transition: { duration: 0.2 } }}
                className="group glass tech-card rounded-2xl p-5 flex flex-col items-center gap-3 cursor-default"
                style={{ "--glow-color": color } as React.CSSProperties}
              >
                <div
                  className="transition-all duration-300 group-hover:drop-shadow-[0_0_12px_var(--glow-color)]"
                  style={{ color }}
                >
                  {IconComponent && <IconComponent size={36} />}
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-300 group-hover:text-white transition-colors text-center">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
