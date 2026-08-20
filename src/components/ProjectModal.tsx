"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle2, Shield, Terminal } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Project } from "@/data/portfolio";
import {
  SiReact, SiTailwindcss, SiFastapi, SiPython,
  SiNodedotjs, SiExpress, SiMongodb, SiVite, SiSqlite,
  SiJsonwebtokens, SiNextdotjs, SiMysql, SiTypescript,
} from "react-icons/si";

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

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [imgSrc, setImgSrc] = useState(project?.image);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgSrc(project?.image);
    setImgError(false);
  }, [project]);

  const handleImageError = () => {
    if (imgSrc && imgSrc.startsWith("/projects/")) {
      setImgSrc(imgSrc.replace("/projects/", "/"));
    } else if (imgSrc && !imgSrc.startsWith("/projects/")) {
      setImgSrc(`/projects${imgSrc}`);
    } else {
      setImgError(true);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const domainName = project.liveUrl
    ? project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : `${project.title.toLowerCase().replace(/[^a-z0-9]/g, "")}.dev`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto z-10 rounded-2xl bg-[#0b0f19] border border-white/10 shadow-2xl shadow-blue-500/10 flex flex-col"
        >
          {/* Top Browser Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-4 py-3 bg-[#080b14]/90 backdrop-blur-md border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              <div className="ml-4 hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-xs text-slate-400 font-mono">
                <Shield size={12} className="text-emerald-400" />
                <span className="text-slate-300">https://</span>
                <span className="text-white font-medium">{domainName}</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Image Preview / Graphic Frame */}
            <div className="relative rounded-xl overflow-hidden border border-white/[0.08] bg-slate-900 group aspect-video sm:aspect-[21/9] flex items-center justify-center">
              {imgSrc && !imgError ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={imgSrc}
                  alt={`${project.title} Preview`}
                  onError={handleImageError}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full p-8 bg-gradient-to-br from-blue-950/40 via-slate-900 to-purple-950/40 flex flex-col items-center justify-center text-center relative overflow-hidden">
                  {/* Decorative background grid */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:2rem_2rem]" />
                  <div className="relative z-10 space-y-3">
                    <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto text-blue-400 shadow-lg shadow-blue-500/10">
                      <Terminal size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">{project.title}</h3>
                    <p className="text-xs text-blue-400/80 font-mono uppercase tracking-widest">
                      {project.category} Project
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Title & Category */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-display)" }}>
                  {project.title}
                </h2>
                <p className="text-xs text-slate-400 font-mono">Category: <span className="text-blue-400 capitalize">{project.category}</span></p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-sm font-medium text-white transition-all"
                >
                  <FaGithub size={16} />
                  <span>GitHub</span>
                </a>
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-sm font-medium text-white shadow-lg shadow-blue-500/25 transition-all"
                  >
                    <ExternalLink size={16} />
                    <span>Live Website</span>
                  </a>
                ) : null}
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Overview</h4>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">{project.description}</p>
            </div>

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Key Features & Architecture</h4>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                      <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-300">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Tech Stack Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => {
                  const Icon = techIconMap[tech];
                  return (
                    <span
                      key={tech}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-blue-500/10 border border-blue-500/20 text-blue-300"
                    >
                      {Icon && <Icon size={14} />}
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
