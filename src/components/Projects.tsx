"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import {
  SiReact, SiTailwindcss, SiFastapi, SiPython,
  SiNodedotjs, SiExpress, SiMongodb, SiVite, SiSqlite, SiJsonwebtokens,
} from "react-icons/si";
import { projects, type Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const techIconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  React: SiReact, "Tailwind CSS": SiTailwindcss, FastAPI: SiFastapi,
  Python: SiPython, "Node.js": SiNodedotjs, "Express.js": SiExpress,
  MongoDB: SiMongodb, Vite: SiVite, SQLite: SiSqlite, JWT: SiJsonwebtokens,
};

const filters = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full Stack" },
  { id: "ai-ml", label: "AI / ML" },
] as const;

type FilterId = (typeof filters)[number]["id"];

const categoryGradients: Record<string, string> = {
  "ai-ml": "from-violet-500 to-pink-500",
  fullstack: "from-blue-500 to-cyan-500",
  frontend: "from-emerald-500 to-teal-500",
};

const categoryBorders: Record<string, string> = {
  "ai-ml": "hover:border-violet-500/40",
  fullstack: "hover:border-blue-500/40",
  frontend: "hover:border-emerald-500/40",
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterId>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
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
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 mb-3">
            03 — What I&apos;ve Built
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-5">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-5">
            A selection of projects I&apos;ve built and contributed to
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full" />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              suppressHydrationWarning
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                activeFilter === f.id
                  ? "bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-lg shadow-blue-500/20"
                  : "glass text-slate-400 hover:text-white hover:bg-white/[0.08]"
              )}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project: Project, i: number) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className={cn(
        "group glass rounded-2xl overflow-hidden border border-white/5 transition-all duration-500",
        categoryBorders[project.category]
      )}
    >
      {/* Header gradient bar */}
      <div className={cn("h-1.5 bg-gradient-to-r", categoryGradients[project.category])} />

      <div className="p-7">
        {/* Title + Category */}
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors leading-tight">
            {project.title}
          </h3>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 bg-white/5 px-2.5 py-1 rounded-full whitespace-nowrap ml-3">
            {project.category === "ai-ml" ? "AI/ML" : "Full Stack"}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-400 mb-5 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Features */}
        <div className="mb-6 space-y-2">
          {project.features.slice(0, 3).map((f, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
              {f}
            </div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => {
            const Icon = techIconMap[tech];
            return (
              <span
                key={tech}
                className="flex items-center gap-1.5 text-xs text-slate-400 bg-white/5 px-2.5 py-1 rounded-full"
              >
                {Icon && <Icon size={12} />}
                {tech}
              </span>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2.5 text-xs font-medium text-slate-300 transition-all duration-300 hover:bg-white/10 hover:text-white"
          >
            <FaGithub size={14} />
            Source Code
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-violet-500/20 border border-blue-500/20 px-4 py-2.5 text-xs font-medium text-blue-400 transition-all duration-300 hover:from-blue-500/30 hover:to-violet-500/30 hover:text-white"
          >
            <ExternalLink size={14} />
            View Project
          </a>
        </div>
      </div>
    </motion.div>
  );
}
