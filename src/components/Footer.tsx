"use client";

import Link from "next/link";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10 py-10">

        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8 mb-8">

          {/* Brand + Location */}
          <div>
            <Link
              href="/"
              className="block text-sm font-semibold text-white/60 hover:text-white transition-colors duration-200 tracking-widest mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              &lt;SH /&gt;
            </Link>
            <p className="flex items-center gap-1.5 text-xs text-slate-600">
              <MapPin size={11} />
              {personalInfo.location}
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <ul className="flex items-center gap-5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs text-slate-600 hover:text-slate-300 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-2">
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
                className="w-8 h-8 flex items-center justify-center rounded-md border border-white/[0.07] text-slate-600 hover:text-white hover:border-white/20 transition-all duration-200"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-white/[0.04] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-700">
            © {year} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-700">
            Built with Next.js & TypeScript
          </p>
        </div>

      </div>
    </footer>
  );
}
