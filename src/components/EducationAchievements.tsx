"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Award, Calendar, Maximize2, X, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import { education, achievements, type Achievement } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function EducationAchievements() {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (title: string) => {
    setImageErrors((prev) => ({ ...prev, [title]: true }));
  };

  return (
    <section id="education" aria-label="Education & Achievements" className="py-20 lg:py-28 border-t border-white/[0.04]">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">

        {/* ── Section Header ── */}
        <motion.div
          className="mb-16 text-center lg:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-500 mb-4"
          >
            Background & Recognitions
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Education & Achievements
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed"
          >
            An overview of my academic foundation, degrees, hackathon participation, and honors.
          </motion.p>
        </motion.div>

        {/* ── Grid: Education & Achievements ── */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* Education */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-indigo-500/10 text-indigo-400">
                <GraduationCap size={18} />
              </div>
              <h3
                className="text-2xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Education
              </h3>
            </div>

            <div className="space-y-4">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -3, transition: { duration: 0.15 } }}
                  className="card p-5 hover:border-indigo-500/30 transition-all duration-300"
                >
                  <h4 className="font-semibold text-white text-base mb-1.5">{edu.degree}</h4>
                  <p className="text-xs text-indigo-400 font-medium mb-3">{edu.institution}</p>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <Calendar size={12} />
                      {edu.year}
                    </span>
                    <span className="text-emerald-400 font-semibold bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                      {edu.grade}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements with Images */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400">
                <Award size={18} />
              </div>
              <h3
                className="text-2xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Achievements
              </h3>
            </div>

            <div className="space-y-4">
              {achievements.map((ach, i) => {
                const hasImage = ach.image && !imageErrors[ach.title];

                return (
                  <motion.div
                    key={i}
                    whileHover={{ y: -3, transition: { duration: 0.15 } }}
                    className="card overflow-hidden hover:border-amber-500/30 transition-all duration-300 group"
                  >
                    {/* Achievement Image Preview (if present) */}
                    {ach.image && (
                      <div
                        onClick={() => setSelectedAchievement(ach)}
                        className="relative w-full h-44 bg-zinc-900/80 border-b border-white/[0.06] overflow-hidden cursor-pointer"
                      >
                        {!imageErrors[ach.title] ? (
                          <>
                            <Image
                              src={ach.image}
                              alt={ach.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                              onError={() => handleImageError(ach.title)}
                              sizes="(max-width: 768px) 100vw, 450px"
                            />
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
                            {/* Enlarge Hint */}
                            <div className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/60 backdrop-blur-md text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">
                              <Maximize2 size={14} />
                            </div>
                          </>
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-slate-500 p-4 text-center">
                            <ImageIcon size={28} className="text-amber-500/40" />
                            <span className="text-xs">Add image to <code className="text-amber-400/80">{ach.image}</code></span>
                          </div>
                        )}
                      </div>
                    )}

                    <div className="p-5">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-semibold text-white text-base mb-1.5 leading-snug">{ach.title}</h4>
                        {ach.image && !imageErrors[ach.title] && (
                          <button
                            onClick={() => setSelectedAchievement(ach)}
                            className="text-slate-500 hover:text-amber-400 transition-colors p-1"
                            title="View full photo"
                            aria-label="View full photo"
                          >
                            <Maximize2 size={15} />
                          </button>
                        )}
                      </div>

                      <div className="flex items-center justify-between text-xs mt-2">
                        <span className="text-slate-400 font-medium">{ach.event}</span>
                        <span className="text-amber-400 font-semibold bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full">
                          {ach.date}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>

      </div>

      {/* ── Photo Lightbox Modal ── */}
      <AnimatePresence>
        {selectedAchievement && selectedAchievement.image && !imageErrors[selectedAchievement.title] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedAchievement(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedAchievement(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black text-white hover:text-amber-400 border border-white/10 transition-colors"
                aria-label="Close image modal"
              >
                <X size={18} />
              </button>

              {/* Modal Image */}
              <div className="relative w-full h-[60vh] max-h-[500px] bg-black">
                <Image
                  src={selectedAchievement.image}
                  alt={selectedAchievement.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 800px"
                />
              </div>

              {/* Modal Caption */}
              <div className="p-5 bg-zinc-900/90 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-bold text-white mb-0.5">{selectedAchievement.title}</h3>
                  <p className="text-xs text-slate-400">{selectedAchievement.event}</p>
                </div>
                <span className="text-xs text-amber-400 font-semibold bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full w-fit">
                  {selectedAchievement.date}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
