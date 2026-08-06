"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import ProjectImage from "@/components/projects/ProjectImage";
import ProjectLinks from "@/components/projects/project-card/ProjectLinks";

import Callout from "@/components/ui/Callout";
import HighlightsList from "@/components/ui/HighlightsList";
import StatusBadge from "@/components/ui/StatusBadge";
import TechStack from "@/components/ui/TechStack";

import { cardHover } from "@/lib/animations";
import { projectStatusConfig } from "@/lib/status";

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
        group
        flex
        h-full
        flex-col
        rounded-2xl
        border
        border-[var(--border)]
        bg-[var(--surface)]
        shadow-sm
        transition-shadow
        duration-300
        hover:shadow-lg
      "
    >
      <Link
        href={`/projects/${project.id}`}
        className="flex flex-1 flex-col p-6"
        aria-label={`View case study for ${project.title}`}
      >
        <div className="mb-6 overflow-hidden rounded-xl border border-[var(--border)]">
          <ProjectImage
            image={project.media?.cover ?? project.image}
            video={project.media?.video ?? project.video}
            title={project.title}
            placeholderTitle={project.media?.placeholderTitle}
            placeholderDescription={
              project.media?.placeholderDescription
            }
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

          <StatusBadge
            status={project.status}
            config={projectStatusConfig}
          />
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
          <HighlightsList
            items={project.highlights}
          />
        </section>

        <TechStack
          technologies={project.technologies}
        />

        <div
          className="
            mt-6
            inline-flex
            items-center
            gap-2
            font-semibold
            text-[var(--accent)]
            transition-all
            duration-200
            group-hover:gap-3
          "
        >
          <span>View Case Study</span>

          <ArrowRight
            aria-hidden="true"
            className="
              h-4
              w-4
              transition-transform
              duration-200
              group-hover:translate-x-1
            "
          />
        </div>
      </Link>

      <div className="border-t border-[var(--border)] p-6 pt-5">
        <ProjectLinks
          resources={project.resources}
          resourceNotice={project.resourceNotice}
        />
      </div>
    </motion.article>
  );
}