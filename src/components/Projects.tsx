"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Maximize2, Terminal } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import {
  SiReact, SiTailwindcss, SiFastapi, SiPython,
  SiNodedotjs, SiExpress, SiMongodb, SiVite, SiSqlite,
  SiJsonwebtokens, SiNextdotjs, SiMysql, SiTypescript,
} from "react-icons/si";
import { projects, type Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import ProjectModal from "@/components/ProjectModal";

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
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full Stack" },
  { id: "ai-ml", label: "AI / ML" },
  { id: "games", label: "Games" },
] as const;

type FilterId = (typeof filters)[number]["id"];

const categoryTop: Record<string, string> = {
  "ai-ml": "#8b5cf6",
  fullstack: "#3b82f6",
  frontend: "#10b981",
  games: "#f59e0b",
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterId>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400 mb-4">
            Featured Works & Applications
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold mb-4 text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Featured Projects
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed">
            Explore my latest web apps, AI systems, and interactive creations with live previews and technical breakdowns.
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
                "px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer",
                activeFilter === f.id
                  ? "bg-cyan-500 text-zinc-950 font-semibold shadow-lg shadow-cyan-500/20 border border-cyan-400/30"
                  : "border border-white/[0.08] bg-zinc-950/40 text-slate-400 hover:text-white hover:border-white/20 hover:bg-white/[0.05]"
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
            className="grid md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={i}
                onOpenModal={() => setSelectedProject(project)}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Interactive Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

function ProjectCard({
  project,
  index,
  onOpenModal,
}: {
  project: Project;
  index: number;
  onOpenModal: () => void;
}) {
  const [imgSrc, setImgSrc] = useState(project.image);
  const [imgError, setImgError] = useState(false);
  const topColor = categoryTop[project.category] ?? categoryTop.fullstack;

  const handleImageError = () => {
    if (imgSrc && imgSrc.startsWith("/projects/")) {
      // Try root public path
      setImgSrc(imgSrc.replace("/projects/", "/"));
    } else if (imgSrc && !imgSrc.startsWith("/projects/")) {
      // Try /projects/ subfolder path
      setImgSrc(`/projects${imgSrc}`);
    } else {
      setImgError(true);
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group flex flex-col rounded-2xl bg-zinc-950/80 border border-white/[0.08] hover:border-cyan-500/40 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 overflow-hidden transition-all duration-300"
    >
      {/* Top accent line */}
      <div className="h-[3px] flex-shrink-0" style={{ background: topColor }} />

      {/* Browser Frame Top Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-white/[0.03] border-b border-white/[0.06]">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/70 inline-block" />
        </div>
        <span className="text-[11px] font-mono text-slate-500 tracking-wide truncate max-w-[200px]">
          {project.title.toLowerCase().replace(/[^a-z0-9]/g, "")}.app
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded-md">
          {project.category === "ai-ml"
            ? "AI / ML"
            : project.category === "games"
            ? "Games"
            : "Full Stack"}
        </span>
      </div>

      {/* Project Screenshot / Homepage Visual Container */}
      <div
        onClick={onOpenModal}
        className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950 cursor-pointer group/img"
      >
        {imgSrc && !imgError ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={imgSrc}
            alt={`${project.title} Preview`}
            onError={handleImageError}
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/img:scale-105"
          />
        ) : (
          /* Fallback visual preview card with styled gradient & code background */
          <div className="w-full h-full p-6 bg-gradient-to-br from-slate-900 via-cyan-950/20 to-slate-950 flex flex-col justify-between relative overflow-hidden group-hover/img:from-cyan-950/40 transition-colors duration-500">
            <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
            <div className="relative z-10 flex items-center justify-between">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <Terminal size={24} />
              </div>
              <span className="text-xs font-mono text-cyan-400/80 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
                Preview Ready
              </span>
            </div>

            <div className="relative z-10 space-y-1">
              <h3 className="text-xl font-bold text-white tracking-tight">{project.title}</h3>
              <p className="text-xs text-slate-400 line-clamp-1">{project.description}</p>
            </div>
          </div>
        )}

        {/* Hover Overlay with Expand Action */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={onOpenModal}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 text-zinc-950 font-semibold text-xs shadow-lg backdrop-blur-md transform translate-y-2 group-hover/img:translate-y-0 transition-all duration-300 hover:bg-cyan-400"
          >
            <Maximize2 size={14} />
            <span>View Full Details & Screenshots</span>
          </button>
        </div>
      </div>

      {/* Project Content Body */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-start justify-between mb-3">
          <h2
            onClick={onOpenModal}
            className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug cursor-pointer"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {project.title}
          </h2>
        </div>

        <p className="text-sm text-slate-400 mb-5 leading-relaxed flex-1 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.techStack.map((tech) => {
            const Icon = techIconMap[tech];
            return (
              <span key={tech} className="pill">
                {Icon && <Icon size={12} />}
                {tech}
              </span>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between gap-3 pt-3 border-t border-white/[0.06] mt-auto">
          <button
            onClick={onOpenModal}
            className="text-xs text-cyan-400 font-medium hover:text-cyan-300 flex items-center gap-1 transition-colors cursor-pointer"
          >
            Details & Features &rarr;
          </button>

          <div className="flex items-center gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="p-2 rounded-lg border border-white/[0.08] text-slate-400 hover:text-white hover:border-white/20 hover:bg-white/[0.05] transition-all"
            >
              <FaGithub size={15} />
            </a>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
                className="p-2 rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 hover:text-zinc-950 hover:bg-cyan-400 transition-all"
              >
                <ExternalLink size={15} />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
