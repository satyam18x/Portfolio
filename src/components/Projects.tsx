"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import {
  SiReact, SiTailwindcss, SiFastapi, SiPython,
  SiNodedotjs, SiExpress, SiMongodb, SiVite, SiSqlite,
  SiJsonwebtokens, SiNextdotjs, SiMysql, SiTypescript,
} from "react-icons/si";
import { projects, type Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const techIconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  React: SiReact,
  "React Native": SiReact,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  FastAPI: SiFastapi,
  Python: SiPython,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  MongoDB: SiMongodb,
  Vite: SiVite,
  SQLite: SiSqlite,
  JWT: SiJsonwebtokens,
  "Next.js": SiNextdotjs,
  MySQL: SiMysql,
};

const filters = [
  { id: "all", label: "All" },
  { id: "fullstack", label: "Full Stack" },
  { id: "ai-ml", label: "AI / ML" },
  { id: "games", label: "Games" },
] as const;

type FilterId = (typeof filters)[number]["id"];

const categoryAccent: Record<string, string> = {
  "ai-ml": "rgba(139, 92, 246, 0.4)",
  fullstack: "rgba(59, 130, 246, 0.4)",
  frontend: "rgba(16, 185, 129, 0.4)",
  games: "rgba(245, 158, 11, 0.4)",
};

const categoryTop: Record<string, string> = {
  "ai-ml": "#8b5cf6",
  fullstack: "#3b82f6",
  frontend: "#10b981",
  games: "#f59e0b",
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterId>("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" aria-label="Projects">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10 py-20 lg:py-28">

        {/* ── Section Header ── */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-500 mb-4">
            What I&apos;ve Built
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Projects
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed">
            A selection of projects I&apos;ve built and shipped.
          </p>
        </motion.div>

        {/* ── Filter Tabs ── */}
        <motion.div
          className="flex flex-wrap gap-2 mb-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              suppressHydrationWarning
              className={cn(
                "px-5 py-2 rounded-md text-sm font-medium transition-all duration-200",
                activeFilter === f.id
                  ? "bg-blue-500 text-white shadow-md shadow-blue-500/20"
                  : "border border-white/[0.08] text-slate-500 hover:text-white hover:border-white/20"
              )}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* ── Projects Grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const topColor = categoryTop[project.category] ?? categoryTop.fullstack;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -4, transition: { duration: 0.18 } }}
      className="group flex flex-col card overflow-hidden"
    >
      {/* Top accent bar */}
      <div className="h-[2px] flex-shrink-0" style={{ background: topColor }} />

      <div className="flex flex-col flex-1 p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <h2
            className="text-base font-semibold text-white group-hover:text-blue-400 transition-colors leading-snug"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {project.title}
          </h2>
          <span className="text-[10px] font-medium uppercase tracking-wider text-slate-600 bg-white/[0.04] border border-white/[0.06] px-2 py-0.5 rounded-full whitespace-nowrap ml-3 mt-0.5">
            {project.category === "ai-ml" ? "AI / ML" : "Full Stack"}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-400 mb-5 leading-relaxed flex-1 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.techStack.map((tech) => {
            const Icon = techIconMap[tech];
            return (
              <span key={tech} className="pill">
                {Icon && <Icon size={11} />}
                {tech}
              </span>
            );
          })}
        </div>

        {/* Links */}
        <div className="flex gap-2 mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} GitHub repository`}
            className="flex items-center gap-1.5 rounded-md border border-white/[0.08] px-3.5 py-2 text-xs font-medium text-slate-400 hover:text-white hover:border-white/20 hover:bg-white/[0.04] transition-all duration-200"
          >
            <FaGithub size={13} />
            Source
          </a>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="flex items-center gap-1.5 rounded-md border border-blue-500/30 bg-blue-500/[0.08] px-3.5 py-2 text-xs font-medium text-blue-400 hover:text-white hover:bg-blue-500/20 transition-all duration-200"
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
