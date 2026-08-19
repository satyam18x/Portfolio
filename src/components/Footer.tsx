"use client";

import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "@/data/portfolio";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      href: personalInfo.github,
      label: "GitHub",
      Icon: FaGithub,
    },
    {
      href: personalInfo.linkedin,
      label: "LinkedIn",
      Icon: FaLinkedin,
    },
    {
      href: `mailto:${personalInfo.email}`,
      label: "Email",
      Icon: Mail,
    },
  ];

  return (
    <footer className="relative border-t border-white/[0.04] bg-black">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Top row */}
        <div className="mb-8 flex flex-col items-center justify-between gap-8 sm:flex-row sm:items-start">
          {/* Brand + Location */}
          <div>
            <Link
              href="/"
              className="mb-2 block text-sm font-semibold tracking-widest text-white/60 transition-colors duration-200 hover:text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              &lt;SH /&gt;
            </Link>

            <p className="flex items-center gap-1.5 text-xs text-slate-600">
              <MapPin size={11} />
              {personalInfo.location}
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <ul className="flex items-center gap-5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs text-slate-600 transition-colors duration-200 hover:text-slate-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social links */}
          <div className="flex items-center gap-2">
             {socialLinks.map(({ href, label, Icon }) => {
              const isExternal = href.startsWith("http");

              return (
                <a
                  key={label}
                  href={href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-white/[0.07] text-slate-600 transition-all duration-200 hover:border-white/20 hover:text-white"
                >
                    { Icon ? <Icon size={14} /> : <Mail size={14} /> }
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/[0.04] pt-6 sm:flex-row">
          <p className="text-xs text-slate-700">
            © {year} {personalInfo.name}. All rights reserved.
          </p>

          <p className="text-xs text-slate-700">
            Built with Next.js &amp; TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
