"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const allContactButtons = [
  {
    label: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    Icon: Mail,
    isExternal: false,
  },
  {
    label: "Jabalpur, MP, India",
    href: `https://maps.google.com/?q=${encodeURIComponent(personalInfo.location)}`,
    Icon: MapPin,
    isExternal: true,
  },
  {
    label: "GitHub",
    href: personalInfo.github,
    Icon: FaGithub,
    isExternal: true,
  },
  {
    label: "LinkedIn",
    href: personalInfo.linkedin,
    Icon: FaLinkedin,
    isExternal: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" aria-label="Contact" className="relative overflow-hidden bg-[#050811] text-white py-20 lg:py-28 px-5">
      {/* ── Perspective 3D Wireframe Mesh & Glow Background ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-25">
        <svg
          className="absolute w-[200%] h-[200%] -left-[50%] -top-[30%] stroke-cyan-500/20"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
        >
          <path
            d="M0,380 Q300,200 600,380 T1200,380 M0,450 Q300,270 600,450 T1200,450 M0,520 Q300,340 600,520 T1200,520 M0,590 Q300,410 600,590 T1200,590"
            strokeWidth="0.75"
          />
          <path
            d="M200,100 Q400,420 600,750 M450,90 Q650,410 850,750 M700,80 Q900,400 1100,750"
            strokeWidth="0.75"
          />
        </svg>

        {/* Ambient floating glow highlights */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.12, 0.22, 0.12],
            y: [0, 20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -right-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, -20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 -left-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"
        />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">

        {/* Section Header */}
        <motion.div
          className="mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          {/* Eyebrow */}
          <motion.p
            variants={fadeUp}
            className="text-sm sm:text-base font-semibold uppercase tracking-[0.22em] text-cyan-400 mb-3"
          >
            Get in Touch
          </motion.p>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 tracking-tight text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Let&apos;s Work Together
          </motion.h2>

          {/* Primary Action Button */}
          <motion.div variants={fadeUp} className="mb-10">
            <a
              href={`mailto:${personalInfo.email}`}
              className="group inline-flex items-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 rounded-xl px-8 py-4 text-base sm:text-lg font-semibold transition-all duration-200 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105"
            >
              <Mail size={20} />
              Say Hello
              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
          </motion.div>
        </motion.div>

        {/* Systematic Row of Styled Contact Buttons */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3.5 max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          {allContactButtons.map(({ label, href, Icon, isExternal }) => (
            <motion.a
              key={label}
              href={href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.2 } }}
              className="flex items-center gap-3 px-5 py-3 rounded-xl border border-white/[0.08] hover:border-cyan-500/40 bg-zinc-950/70 hover:bg-cyan-500/[0.08] text-slate-300 hover:text-white text-sm sm:text-base font-medium shadow-md hover:shadow-cyan-500/15 transition-all duration-200"
            >
              <Icon size={17} className="text-cyan-400 flex-shrink-0" />
              <span>{label}</span>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
