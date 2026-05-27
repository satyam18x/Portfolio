"use client";

import { motion } from "framer-motion";
import { Mail, Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "@/data/portfolio";
import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

type SocialLink = {
  icon: IconType | LucideIcon;
  href: string;
  label: string;
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks: SocialLink[] = [
    { icon: FaGithub, href: personalInfo.github, label: "GitHub" },
    { icon: FaLinkedin, href: personalInfo.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
  ];

  return (
    <footer className="relative border-t border-white/5">
      {/* Gradient top line */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-12">
        <motion.div
          className="flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo */}
          <a href="#home" className="text-2xl font-bold gradient-text">
            {"<SH />"}
          </a>

          {/* Tagline */}
          <p className="text-sm text-slate-500 text-center max-w-md">
            Building exceptional digital experiences with modern technologies.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-800 text-slate-500 hover:text-white hover:border-blue-500/30 hover:bg-blue-500/10 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1.5 text-xs text-slate-600">
            <span>© {currentYear} {personalInfo.name}.</span>
            <span>Built with</span>
            <Heart size={12} className="text-red-500 fill-red-500" />
            <span>& Next.js</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
