"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
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
    <section id="contact" aria-label="Contact" className="py-14 lg:py-16 px-5">
      <div className="mx-auto max-w-4xl text-center">

        {/* Section Header */}
        <motion.div
          className="mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          {/* Eyebrow */}
          <motion.p
            variants={fadeUp}
            className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-500 mb-3"
          >
            Get in Touch
          </motion.p>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Let&apos;s Work Together
          </motion.h2>

          {/* Primary Action Button */}
          <motion.div variants={fadeUp} className="mb-8">
            <a
              href={`mailto:${personalInfo.email}`}
              className="group inline-flex items-center gap-2.5 bg-blue-500 hover:bg-blue-400 text-white rounded-xl px-7 py-3.5 text-sm font-semibold transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
            >
              <Mail size={17} />
              Say Hello
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
          </motion.div>
        </motion.div>

        {/* Systematic Row of Styled Contact Buttons */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto"
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
              whileHover={{ y: -2, transition: { duration: 0.15 } }}
              className="flex items-center gap-2.5 px-4.5 py-2.5 rounded-xl border border-white/[0.08] text-slate-300 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/[0.06] text-xs sm:text-sm font-medium transition-all duration-200"
            >
              <Icon size={15} className="text-blue-400 flex-shrink-0" />
              <span>{label}</span>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
