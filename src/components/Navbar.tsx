"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled || isOpen
          ? "bg-black/85 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <div className="flex h-[60px] items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="text-sm font-semibold text-white/70 hover:text-white transition-colors duration-200 tracking-widest"
            style={{ fontFamily: "var(--font-display)" }}
            aria-label="Home"
          >
            &lt;SH /&gt;
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200",
                    isActive
                      ? "text-white"
                      : "text-slate-500 hover:text-slate-200"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-md"
                      style={{ background: "rgba(255,255,255,0.07)" }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.45 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Resume Button — Desktop */}
          <div className="hidden md:flex items-center">
            <a
              href="/resume.pdf"
              download="Satyam_Haldkar_Resume.pdf"
              className="flex items-center gap-2 rounded-md border border-white/[0.1] px-4 py-2 text-sm font-medium text-slate-400 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/[0.06] transition-all duration-200"
            >
              <Download size={13} />
              Resume
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-500 hover:text-white p-2 rounded-md transition-colors"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden border-t border-white/[0.06] bg-black/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-5 py-4 space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "block rounded-md px-4 py-3 text-sm font-medium transition-colors duration-200",
                      isActive
                        ? "text-white bg-white/[0.07]"
                        : "text-slate-500 hover:text-white hover:bg-white/[0.04]"
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-2 border-t border-white/[0.06] mt-2">
                <a
                  href="/resume.pdf"
                  download="Satyam_Haldkar_Resume.pdf"
                  className="flex items-center gap-2 rounded-md border border-white/[0.1] px-4 py-3 text-sm font-medium text-slate-400 hover:text-white hover:border-blue-500/40"
                >
                  <Download size={13} />
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}