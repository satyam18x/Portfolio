import type { Metadata } from "next";
import About from "@/components/About";
import TechStack from "@/components/TechStack";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Satyam Haldkar — his background, experience, education, certifications, and tech stack.",
};

export default function AboutPage() {
  return (
    <>
      <About />
      <TechStack />
    </>
  );
}
