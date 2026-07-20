"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { cardHover } from "@/lib/animations";

import type { Project } from "@/types/project";

import Card from "@/components/ui/Card";
import Callout from "@/components/ui/Callout";
import Button from "@/components/ui/Button";
import TechStack from "@/components/ui/TechStack";
import HighlightsList from "@/components/ui/HighlightsList";
import SectionHeading from "@/components/ui/SectionHeading";

import ProjectStatus from "@/components/projects/project-card/ProjectStatus";

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
            {project.image ? (
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                width={1400}
                height={900}
                priority
                sizes="(max-width:1024px) 100vw, 50vw"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-[420px] w-full items-center justify-center text-[var(--muted-foreground)]">
                Screenshot Coming Soon
              </div>
            )}
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

              <ProjectStatus status={project.status} />
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
            </div>
          </div>
        </div>
      </Card>
    </motion.article>
  );
}