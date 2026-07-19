"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import ProjectLinks from "@/components/projects/project-card/ProjectLinks";
import ProjectStatus from "@/components/projects/project-card/ProjectStatus";

import Callout from "@/components/ui/Callout";
import Card from "@/components/ui/Card";
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
      className="h-full"
    >
      <Card className="flex h-full flex-col">
        <div className="mb-6 overflow-hidden rounded-xl border border-[var(--border)]">
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              width={1200}
              height={675}
              sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
              className="h-56 w-full object-cover"
            />
          ) : (
            <div
              className="
                flex
                h-56
                items-center
                justify-center
                bg-[color-mix(in_srgb,var(--card)_96%,var(--foreground)_4%)]
                text-sm
                text-[var(--muted-foreground)]
              "
            >
              Screenshot Coming Soon
            </div>
          )}
        </div>

        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold">
              {project.title}
            </h3>

            <p className="mt-1 text-sm text-[var(--primary)]">
              {project.tagline}
            </p>
          </div>

          <ProjectStatus status={project.status} />
        </div>

        {project.impact && (
          <Callout className="mb-5">
            {project.impact}
          </Callout>
        )}

        <p className="mb-6 text-[var(--muted-foreground)]">
          {project.description}
        </p>

        <section className="mb-6">
          <h4 className="mb-3 font-semibold">
            Highlights
          </h4>

          <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--muted-foreground)]">
            {project.highlights.map((highlight) => (
              <li key={highlight}>
                {highlight}
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-auto space-y-6">
          <TechStack
            technologies={project.technologies}
          />

          <ProjectLinks
            github={project.github}
            demo={project.demo}
          />
        </div>
      </Card>
    </motion.article>
  );
}