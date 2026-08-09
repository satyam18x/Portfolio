"use client";

import { useState, useEffect } from "react";
<<<<<<< HEAD
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
=======
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Download,
} from "lucide-react";

import { navLinks } from "@/data/portfolio";
import { cn } from "@/lib/utils";
>>>>>>> fa831581adce77bd6fe1e0c0934cbd22dcad5634

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
<<<<<<< HEAD
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
=======
  const [activeSection, setActiveSection] =
    useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Check if user is near the bottom of the page (to force active section to contact)
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100;

      if (isAtBottom) {
        setActiveSection("contact");
        return;
      }

      const sections = navLinks.map((link) =>
        link.href.replace("#", "")
      );

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(
          sections[i]
        );

        if (section) {
          const rect =
            section.getBoundingClientRect();

          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  const handleClick = (href: string) => {
    setIsOpen(false);

    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.header
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        (scrolled || isOpen)
          ? "glass-strong shadow-lg shadow-black/20"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleClick("#home");
            }}
            className="text-xl font-bold gradient-text cursor-pointer"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            {"<SH />"}
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive =
                activeSection ===
                link.href.replace("#", "");

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(link.href);
                  }}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-300",
                    isActive
                      ? "text-white"
                      : "text-slate-400 hover:text-white"
>>>>>>> fa831581adce77bd6fe1e0c0934cbd22dcad5634
                  )}
                >
                  {isActive && (
                    <motion.span
<<<<<<< HEAD
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-md"
                      style={{ background: "rgba(255,255,255,0.07)" }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.45 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
=======
                      layoutId="navbar-indicator"
                      className="absolute inset-0 rounded-lg bg-white/10"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}

                  <span className="relative z-10">
                    {link.name}
                  </span>
                </a>
>>>>>>> fa831581adce77bd6fe1e0c0934cbd22dcad5634
              );
            })}
          </div>

<<<<<<< HEAD
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
=======
          {/* Resume Button */}
          <div className="hidden md:flex items-center">
            <motion.a
              href="/resume.pdf"
              download="Satyam_Haldkar_Resume.pdf"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              <Download size={16} />
              Resume
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
>>>>>>> fa831581adce77bd6fe1e0c0934cbd22dcad5634
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
<<<<<<< HEAD
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
=======
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="md:hidden glass-strong overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link, index) => {
                const isActive =
                  activeSection ===
                  link.href.replace("#", "");

                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.05,
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(link.href);
                    }}
                    className={cn(
                      "block rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-300",
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {link.name}
                  </motion.a>
                );
              })}

              <motion.a
                href="/resume.pdf"
                download="Satyam_Haldkar_Resume.pdf"
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay:
                    navLinks.length * 0.05,
                }}
                className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-violet-500 px-4 py-3 text-sm font-semibold text-white"
              >
                <Download size={16} />
                Download Resume
              </motion.a>
>>>>>>> fa831581adce77bd6fe1e0c0934cbd22dcad5634
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}