"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, CheckCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "@/data/portfolio";
import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

type ContactItem = {
  icon: IconType | LucideIcon;
  label: string;
  value: string;
  href: string;
  color: string;
  bg: string;
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
    }, 1500);
  };

  const contacts: ContactItem[] = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "satyam18x",
      href: personalInfo.github,
      color: "text-white",
      bg: "bg-white/5",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "Satyam Haldkar",
      href: personalInfo.linkedin,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
    },
  ];

  return (
    <section
      id="contact"
      style={{
        paddingTop: "7rem",
        paddingBottom: "7rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Section Title */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400 mb-3">
            04 — Let&apos;s Connect
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-5">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-5">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full" />
        </motion.div>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
            gap: "4rem",
            maxWidth: "960px",
            margin: "0 auto",
          }}
        >
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Your name"
                  suppressHydrationWarning
                  className="w-full rounded-xl glass px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-500/40 focus:bg-white/[0.06]"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  suppressHydrationWarning
                  className="w-full rounded-xl glass px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-500/40 focus:bg-white/[0.06]"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  suppressHydrationWarning
                  className="w-full rounded-xl glass px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-500/40 focus:bg-white/[0.06] resize-none"
                />
              </div>
              <motion.button
                type="submit"
                disabled={sending}
                suppressHydrationWarning
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-60"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {submitted ? (
                  <>
                    <CheckCircle size={18} />
                    Message Sent!
                  </>
                ) : sending ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1 }}
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
            }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Contact Info</h3>
            <motion.p
              variants={fadeInUp}
              className="text-slate-400 mb-8 leading-relaxed"
            >
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision.
            </motion.p>

            <div className="space-y-4">
              {contacts.map((contact) => {
                const Icon = contact.icon;
                return (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    target={contact.label !== "Phone" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    variants={fadeInUp}
                    whileHover={{ x: 6, transition: { duration: 0.2 } }}
                    className="flex items-center gap-4 glass rounded-xl p-4 hover:bg-white/[0.06] transition-all duration-300 group"
                    style={{ border: "1px solid rgba(148, 163, 184, 0.08)" }}
                  >
                    <div
                      className={`flex items-center justify-center w-12 h-12 rounded-xl flex-shrink-0 ${contact.bg} ${contact.color} transition-colors`}
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">
                        {contact.label}
                      </p>
                      <p className="text-sm text-slate-300 group-hover:text-white transition-colors">
                        {contact.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
