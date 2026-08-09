import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Satyam Haldkar | Full Stack Developer",
  description:
    "Portfolio of Satyam Haldkar — Full Stack Developer specializing in React, Next.js, TypeScript, and the MERN stack. Building scalable web applications with modern technologies.",
  keywords: [
    "Satyam Haldkar",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "MERN Stack",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Satyam Haldkar" }],
  openGraph: {
    title: "Satyam Haldkar | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, TypeScript, and the MERN stack.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Satyam Haldkar | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, TypeScript, and the MERN stack.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "#06080f",
          color: "#e2e8f0",
          fontFamily: "var(--font-inter), system-ui, -apple-system, sans-serif",
          overflowX: "hidden",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        {children}
      </body>
    </html>
  );
}
