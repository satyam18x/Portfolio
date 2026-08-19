import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Satyam Haldkar — reach out for collaboration, opportunities, or just a friendly chat about tech.",
};

export default function ContactPage() {
  return (
    <main className="pt-[60px]">
      <Contact />
    </main>
  );
}
