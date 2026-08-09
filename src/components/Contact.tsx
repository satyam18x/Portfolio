"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" aria-label="Contact" className="py-32 px-5">
      <motion.div
        className="max-w-xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        {/* Eyebrow */}
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-500 mb-5">
          Get in Touch
        </p>

        {/* Heading */}
        <h2
          className="text-4xl sm:text-5xl font-bold mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Let&apos;s Work Together
        </h2>

        {/* Subtext */}
        <p className="text-slate-400 text-base sm:text-lg mb-10 leading-relaxed">
          I&apos;m always open to discussing new opportunities, interesting
          projects, or just a friendly chat about tech.
        </p>

        {/* Email CTA */}
        <a
          href={`mailto:${personalInfo.email}`}
          className="group inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-400 text-white rounded-lg px-8 py-4 text-sm font-semibold transition-all duration-200 shadow-lg shadow-blue-500/20 mb-10"
        >
          <Mail size={17} />
          Say Hello
          <ArrowUpRight
            size={15}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
        </a>

        {/* Social links */}
        <div className="flex items-center justify-center gap-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center gap-2 px-5 py-2.5 rounded-md border border-white/[0.08] text-slate-400 hover:text-white hover:border-blue-500/35 hover:bg-blue-500/[0.05] text-sm font-medium transition-all duration-200"
          >
            <FaGithub size={15} />
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center gap-2 px-5 py-2.5 rounded-md border border-white/[0.08] text-slate-400 hover:text-white hover:border-blue-500/35 hover:bg-blue-500/[0.05] text-sm font-medium transition-all duration-200"
          >
            <FaLinkedin size={15} />
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}
