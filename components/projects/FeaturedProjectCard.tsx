"use client";

import { motion } from "framer-motion";

import ProjectImage from "@/components/projects/ProjectImage";

import Button from "@/components/ui/Button";
import Callout from "@/components/ui/Callout";
import Card from "@/components/ui/Card";
import HighlightsList from "@/components/ui/HighlightsList";
import SectionHeading from "@/components/ui/SectionHeading";
import StatusBadge from "@/components/ui/StatusBadge";
import TechStack from "@/components/ui/TechStack";

import { cardHover } from "@/lib/animations";

import type { Project } from "@/types/project";

interface FeaturedProjectCardProps {
  project: Project;
}

export default function FeaturedProjectCard({
  project,
}: FeaturedProjectCardProps) {
  return (
    <motion.article
      whileHover={cardHover}
      className="mb-16"
    >
      <Card className="overflow-hidden p-0">
        <div className="grid lg:grid-cols-2">
          <div className="flex items-center justify-center bg-[color-mix(in_srgb,var(--card)_96%,var(--foreground)_4%)]">
            <ProjectImage
              image={project.image}
              title={project.title}
              variant="featured"
            />
          </div>

          <div className="flex flex-col p-8 lg:p-10">
            <span className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">
              Case Study
            </span>

            <div className="flex items-start justify-between gap-6">
              <div className="min-w-0">
                <h2 className="text-4xl font-bold tracking-tight">
                  {project.title}
                </h2>

                <p className="mt-2 text-lg text-[var(--accent)]">
                  {project.tagline}
                </p>
              </div>

              <StatusBadge status={project.status} />
            </div>

            {project.impact && (
              <Callout className="mt-6">
                {project.impact}
              </Callout>
            )}

            <p className="mt-6 leading-8 text-[var(--muted-foreground)]">
              {project.description}
            </p>

            <div className="mt-8">
              <HighlightsList
                items={project.highlights}
              />
            </div>

            <div className="mt-8">
              <SectionHeading>
                Technologies
              </SectionHeading>

              <TechStack
                technologies={project.technologies}
                className="mt-3"
              />
            </div>

            <div className="mt-auto flex flex-wrap gap-4 pt-10">
              {project.github && (
                <Button
                  href={project.github}
                  variant="github"
                  external
                >
                  View GitHub
                </Button>
              )}

              {project.demo && (
                <Button
                  href={project.demo}
                  external
                >
                  Live Demo
                </Button>
              )}

              {project.website && (
                <Button
                  href={project.website}
                  variant="github"
                  external
                >
                  View Website
                </Button>
              )}
            </div>
          </div>
        </div>
      </Card>
    </motion.article>
  );
}