import type { Metadata } from "next";

import ProjectsSection from "@/components/projects/ProjectsSection";

export const metadata: Metadata = {
  title: "Projects | Christopher Lu",
  description:
    "Explore software engineering projects built with React, Next.js, Kubernetes, Docker, TypeScript, Node.js, and cloud technologies.",
};

export default function ProjectsPage() {
  return <ProjectsSection />;
}