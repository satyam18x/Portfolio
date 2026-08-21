"use client";

import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.04] bg-black py-7">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-sm text-slate-400">
            © {year} {personalInfo.name}. All rights reserved.
          </p>

          <p className="text-sm text-slate-400">
            Built with Next.js &amp; TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
