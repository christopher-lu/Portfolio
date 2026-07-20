"use client";

import { motion } from "framer-motion";

import ProjectImage from "@/components/projects/ProjectImage";
import ProjectLinks from "@/components/projects/project-card/ProjectLinks";

import Callout from "@/components/ui/Callout";
import HighlightsList from "@/components/ui/HighlightsList";
import StatusBadge from "@/components/ui/StatusBadge";
import TechStack from "@/components/ui/TechStack";

import { cardHover } from "@/lib/animations";

import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <motion.article
      whileHover={cardHover}
      className="
        flex
        h-full
        flex-col
        rounded-2xl
        border
        border-[var(--border)]
        bg-[var(--surface)]
        p-6
        shadow-sm
        transition-shadow
        duration-300
        hover:shadow-lg
      "
    >
      <div className="mb-6 overflow-hidden rounded-xl border border-[var(--border)]">
        <ProjectImage
          image={project.image}
          title={project.title}
        />
      </div>

      <header className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold">
            {project.title}
          </h3>

          <p className="mt-1 text-sm text-[var(--primary)]">
            {project.tagline}
          </p>
        </div>

        <StatusBadge status={project.status} />
      </header>

      {project.impact && (
        <Callout className="mb-6">
          {project.impact}
        </Callout>
      )}

      <p className="mb-6 leading-7 text-[var(--muted-foreground)]">
        {project.description}
      </p>

      <section className="mb-6">
        <HighlightsList items={project.highlights} />
      </section>

      <div className="mt-auto space-y-6">
        <TechStack
          technologies={project.technologies}
        />

        <ProjectLinks
          github={project.github}
          demo={project.demo}
        //   website={project.website}
        />
      </div>
    </motion.article>
  );
}