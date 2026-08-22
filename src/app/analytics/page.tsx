import type { Metadata } from "next";
import Analytics from "@/components/Analytics";

export const metadata: Metadata = {
  title: "Analytics",
  description:
    "GitHub contributions and LeetCode problem-solving analytics for Satyam Haldkar — tracking coding activity, streaks, and progress across platforms.",
  keywords: [
    "GitHub Contributions",
    "LeetCode Stats",
    "Coding Analytics",
    "Satyam Haldkar",
    "Developer Metrics",
  ],
};

export default function AnalyticsPage() {
  return <Analytics />;
}
