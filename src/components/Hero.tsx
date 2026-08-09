"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Mail, Download, ArrowRight, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { personalInfo, typingRoles } from "@/data/portfolio";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" },
});

export default function Hero() {
  const typingSequence = typingRoles.flatMap((role) => [role, 2200]);

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative min-h-screen flex items-center pt-[60px]"
    >
      <div className="mx-auto max-w-6xl w-full px-5 sm:px-8 lg:px-10 py-24 lg:py-32">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-14 lg:gap-24">

          {/* ── Left: Text Content ── */}
          <div className="flex-1 text-center lg:text-left">

            {/* Eyebrow */}
            <motion.p
              {...fadeUp(0.1)}
              className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-500 mb-5"
            >
              Hello, I&apos;m
            </motion.p>

            {/* Name */}
            <motion.h1
              {...fadeUp(0.2)}
              className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold mb-5 leading-[1.1] tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {personalInfo.name}
            </motion.h1>

            {/* Typing Roles */}
            <motion.div
              {...fadeUp(0.3)}
              className="text-lg sm:text-xl font-medium text-slate-500 mb-6"
              style={{ minHeight: "1.8rem" }}
            >
              <TypeAnimation
                sequence={typingSequence}
                wrapper="span"
                speed={52}
                repeat={Infinity}
                className="text-blue-400"
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              {...fadeUp(0.4)}
              className="text-base sm:text-lg text-slate-400 mb-10 max-w-[480px] mx-auto lg:mx-0 leading-relaxed"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...fadeUp(0.5)}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-9"
            >
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 shadow-lg shadow-blue-500/20"
              >
                View Projects
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </Link>
              <a
                href="/resume.pdf"
                download="Satyam_Haldkar_Resume.pdf"
                className="inline-flex items-center gap-2 border border-white/[0.1] hover:border-blue-500/40 hover:bg-blue-500/[0.06] text-slate-300 hover:text-white rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200"
              >
                <Download size={14} />
                Resume
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              {...fadeUp(0.6)}
              className="flex gap-2.5 justify-center lg:justify-start"
            >
              {[
                { href: personalInfo.github, label: "GitHub", Icon: Github },
                { href: personalInfo.linkedin, label: "LinkedIn", Icon: Linkedin },
                { href: `mailto:${personalInfo.email}`, label: "Email", Icon: Mail },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="flex items-center justify-center w-10 h-10 rounded-lg border border-white/[0.1] text-slate-500 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/[0.06] transition-all duration-200"
                >
                  <Icon size={17} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Profile Photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <div className="relative w-52 h-52 sm:w-60 sm:h-60 lg:w-72 lg:h-72">
              {/* Subtle blue glow behind photo */}
              <div
                className="absolute inset-0 rounded-2xl blur-3xl"
                style={{ background: "rgba(59,130,246,0.12)" }}
              />
              {/* Photo */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/[0.1]">
                <Image
                  src="/profilepic.jpg"
                  alt={`${personalInfo.name} — Full Stack Developer`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 208px, (max-width: 1024px) 240px, 288px"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-[10px] text-slate-700 tracking-[0.22em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-slate-700 to-transparent"
        />
      </motion.div>
    </section>
  );
}
