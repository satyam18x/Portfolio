"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Mail, Download, ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { personalInfo, typingRoles } from "@/data/portfolio";
import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

type HeroSocialLink = {
  icon: IconType | LucideIcon;
  href: string;
  label: string;
};

export default function Hero() {
  const typingSequence = typingRoles.flatMap((role) => [role, 2000]);

  const socialLinks: HeroSocialLink[] = [
    { icon: FaGithub, href: personalInfo.github, label: "GitHub" },
    { icon: FaLinkedin, href: personalInfo.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
  ];

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        paddingTop: "6rem",
        paddingBottom: "5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "6rem 1.5rem 5rem",
      }}
    >
      <div style={{ maxWidth: "1200px", width: "100%", margin: "0 auto" }}>
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p
              className="text-sm sm:text-base font-medium text-blue-400 mb-4 tracking-widest uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>

            <motion.div
              className="text-2xl sm:text-3xl font-semibold text-slate-300 mb-7"
              style={{ minHeight: "2.5rem" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <TypeAnimation
                sequence={typingSequence}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400"
              />
            </motion.div>

            <motion.p
              className="text-base sm:text-lg text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105"
              >
                View Projects
                <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
              </a>
              <a
                href="/resume.pdf"
                download="Satyam_Haldkar_Resume.pdf"
                className="group flex items-center gap-2 rounded-full border border-slate-600 px-8 py-3.5 text-sm font-semibold text-slate-300 transition-all duration-300 hover:border-blue-500/50 hover:text-white hover:bg-white/5 hover:scale-105"
              >
                <Download size={16} className="group-hover:-translate-y-0.5 transition-transform" />
                Download Resume
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              className="flex gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex items-center justify-center w-12 h-12 rounded-full border border-slate-700 text-slate-400 transition-all duration-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20"
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right — Profile Image */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 opacity-30 blur-2xl animate-glow-pulse" />
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 profile-ring opacity-60" />
              <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-slate-800">
                <Image
                  src="/profilepic.jpg"
                  alt="Satyam Haldkar"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 240px, (max-width: 1024px) 288px, 320px"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
      >
        <span suppressHydrationWarning className="text-xs text-slate-600 tracking-widest uppercase">Scroll</span>
        <ArrowDown className="text-slate-500" size={20} />
      </motion.div>
    </section>
  );
}
