"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Maximize2, X, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import { achievements, type Achievement } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Achievements() {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (title: string) => {
    setImageErrors((prev) => ({ ...prev, [title]: true }));
  };

  return (
    <section id="achievements" aria-label="Achievements & Hackathons" className="py-20 lg:py-28 border-t border-white/[0.04]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">

        {/* ── Section Header ── */}
        <motion.div
          className="mb-14 text-center lg:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400 mb-3"
          >
            Activities & Recognitions
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-bold mb-4 text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Achievements & Hackathons
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed"
          >
            Honors, cadet leadership roles, and hackathons where I have participated and built solutions.
          </motion.p>
        </motion.div>

        {/* ── 3-Column Responsive Grid with Enlarged Image Boxes ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {achievements.map((ach, i) => {
            const hasImage = ach.image && !imageErrors[ach.title];

            return (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="card overflow-hidden border border-white/[0.08] hover:border-cyan-500/40 bg-zinc-950/80 transition-all duration-300 group flex flex-col justify-between shadow-lg hover:shadow-cyan-500/10 rounded-2xl"
              >
                {/* ── Enlarged Image Box ── */}
                <div
                  onClick={() => hasImage && setSelectedAchievement(ach)}
                  className={`relative w-full h-72 sm:h-80 bg-zinc-900/90 border-b border-white/[0.06] overflow-hidden ${
                    hasImage ? "cursor-pointer" : ""
                  }`}
                >
                  {hasImage ? (
                    <>
                      <Image
                        src={ach.image!}
                        alt={ach.title}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        onError={() => handleImageError(ach.title)}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {/* Subtle dark gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                      {/* Enlarge Hint Button */}
                      <div className="absolute top-4 right-4 p-2 rounded-xl bg-black/70 backdrop-blur-md text-white border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                        <Maximize2 size={16} />
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-slate-500 p-6 text-center">
                      <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                        <ImageIcon size={26} />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-slate-400">{ach.title}</p>
                        <p className="text-xs text-slate-500">
                          Upload image to <code className="text-cyan-400/90 font-mono text-[11px]">{ach.image}</code>
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* ── Card Content ── */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2.5">
                      <div className="w-6 h-6 rounded-md bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                        <Award size={14} />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                        {ach.event}
                      </span>
                    </div>

                    <h3 className="font-bold text-white text-lg sm:text-xl leading-snug mb-3">
                      {ach.title}
                    </h3>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-medium">Date / Duration</span>
                    <span className="text-xs text-amber-400 font-semibold bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
                      {ach.date}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>

      {/* ── Photo Lightbox Modal ── */}
      <AnimatePresence>
        {selectedAchievement && selectedAchievement.image && !imageErrors[selectedAchievement.title] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedAchievement(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedAchievement(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/70 hover:bg-black text-white hover:text-cyan-400 border border-white/15 transition-colors"
                aria-label="Close image modal"
              >
                <X size={20} />
              </button>

              {/* Modal Image */}
              <div className="relative w-full h-[65vh] max-h-[580px] bg-black">
                <Image
                  src={selectedAchievement.image}
                  alt={selectedAchievement.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 1000px"
                />
              </div>

              {/* Modal Caption */}
              <div className="p-6 bg-zinc-900/95 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{selectedAchievement.title}</h3>
                  <p className="text-sm text-slate-400">{selectedAchievement.event}</p>
                </div>
                <span className="text-xs text-amber-400 font-semibold bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full w-fit">
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
