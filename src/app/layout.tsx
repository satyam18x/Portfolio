import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Satyam Haldkar | Full Stack Developer",
    template: "%s | Satyam Haldkar",
  },
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
    "Jabalpur",
  ],
  authors: [{ name: "Satyam Haldkar" }],
  creator: "Satyam Haldkar",
  openGraph: {
    title: "Satyam Haldkar | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, TypeScript, and the MERN stack.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Satyam Haldkar | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, TypeScript, and the MERN stack.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body>
        <Navbar />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
