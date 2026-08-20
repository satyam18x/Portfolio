"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

import { navLinks } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const pathname = usePathname();
  const router = useRouter();

  // Change navbar appearance when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Track which section is in view (only on home page)
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sectionIds = ["home", "about", "experience", "projects", "contact"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    // Default to "home" on initial load
    setActiveSection("home");

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [pathname]);

  // Close mobile menu whenever the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Handle navigation for hash links
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      // Handle hash-based links
      if (href.includes("#")) {
        e.preventDefault();
        const hash = href.split("#")[1];

        if (pathname === "/") {
          // Already on home page — just scroll
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        } else {
          // Navigate to home page first, then scroll
          router.push(href);
        }
      }

      setIsOpen(false);
    },
    [pathname, router]
  );

  // Determine if a nav link is active
  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" && (activeSection === "home" || activeSection === "");
    }
    if (href.includes("#")) {
      const hash = href.split("#")[1];
      return pathname === "/" && activeSection === hash;
    }
    return pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
  };

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeOut" as const,
      }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "transition-all duration-300",
        scrolled || isOpen
          ? "bg-black/85 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-3xl sm:text-4xl font-normal text-white hover:text-cyan-400 transition-colors cursor-pointer tracking-wide leading-none"
            style={{ fontFamily: "var(--font-handwritten), 'Covered By Your Grace', cursive" }}
            aria-label="Home"
          >
            Satyam
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium",
                    "rounded-lg transition-colors duration-300",
                    isActive
                      ? "text-white"
                      : "text-slate-400 hover:text-white"
                  )}
                >
                  {isActive && (
                    <motion.span
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
                </Link>
              );
            })}
          </div>

          {/* Resume Button - Desktop */}
          <div className="hidden md:flex items-center">
            <motion.a
              href="/resume.pdf"
              download="Satyam_Haldkar_Resume.pdf"
              className="
                flex items-center gap-2
                rounded-full
                bg-gradient-to-r from-blue-500 to-violet-500
                px-5 py-2
                text-sm font-semibold text-white
                transition-all duration-300
                hover:shadow-lg hover:shadow-blue-500/25
              "
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={16} />
              Resume
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen((previous) => !previous)}
            className="
              md:hidden
              p-2
              text-white
              rounded-md
              transition-colors
              hover:bg-white/10
            "
            aria-label={
              isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id="mobile-navigation"
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
                ease: "easeInOut" as const,
              }}
              className="
                md:hidden
                overflow-hidden
                border-t border-white/[0.06]
                bg-black/95
                backdrop-blur-xl
              "
            >
              <div className="px-4 py-4 space-y-2">
                {navLinks.map((link, index) => {
                  const isActive = isLinkActive(link.href);

                  return (
                    <motion.div
                      key={link.name}
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
                    >
                      <Link
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={cn(
                          "block rounded-lg px-4 py-3",
                          "text-sm font-medium",
                          "transition-colors duration-300",
                          isActive
                            ? "bg-white/10 text-white"
                            : "text-slate-400 hover:bg-white/5 hover:text-white"
                        )}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}

                {/* Mobile Resume */}
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
                    delay: navLinks.length * 0.05,
                  }}
                  className="
                    flex items-center gap-2
                    rounded-lg
                    bg-gradient-to-r from-blue-500 to-violet-500
                    px-4 py-3
                    text-sm font-semibold text-white
                  "
                >
                  <Download size={16} />
                  Download Resume
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
