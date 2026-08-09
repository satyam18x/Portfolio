import type { Metadata } from "next";
import Projects from "@/components/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore projects built by Satyam Haldkar — full-stack web apps and AI/ML tools built with React, Next.js, Node.js, FastAPI and more.",
};

export default function ProjectsPage() {
  return <Projects />;
}
