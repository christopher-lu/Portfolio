"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import ProjectImage from "@/components/projects/ProjectImage";
import ProjectLinks from "@/components/projects/project-card/ProjectLinks";

import Callout from "@/components/ui/Callout";
import Card from "@/components/ui/Card";
import HighlightsList from "@/components/ui/HighlightsList";
import SectionHeading from "@/components/ui/SectionHeading";
import StatusBadge from "@/components/ui/StatusBadge";
import TechStack from "@/components/ui/TechStack";

import { projectStatusConfig } from "@/lib/status";

import type { Project } from "@/types/project";

interface FeaturedProjectCardProps {
  project: Project;
}

export default function FeaturedProjectCard({
  project,
}: FeaturedProjectCardProps) {
  return (
    <article className="group mb-16">
      <Card className="overflow-hidden p-0">
        <Link
          href={`/projects/${project.id}`}
          className="block"
          aria-label={`View case study for ${project.title}`}
        >
          <div className="grid lg:grid-cols-2">
            <div className="flex items-center justify-center bg-[color-mix(in_srgb,var(--card)_96%,var(--foreground)_4%)]">
              <ProjectImage
                image={project.media?.cover ?? project.image}
                video={project.media?.video ?? project.video}
                title={project.title}
                variant="featured"
                placeholderTitle={project.media?.placeholderTitle}
                placeholderDescription={
                  project.media?.placeholderDescription
                }
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

                <StatusBadge
                  status={project.status}
                  config={projectStatusConfig}
                />
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

              <div
                className="
                  mt-10
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
            </div>
          </div>
        </Link>

        <div className="border-t border-[var(--border)] px-8 py-6 lg:px-10">
          <ProjectLinks
            resources={project.resources}
            resourceNotice={project.resourceNotice}
          />
        </div>
      </Card>
    </article>
  );
}