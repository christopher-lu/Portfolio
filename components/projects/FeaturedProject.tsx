"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import TechStack from "@/components/ui/TechStack";

import { cardHover } from "@/lib/animations";

import type { Project } from "@/types/project";

interface FeaturedProjectProps {
  project: Project;
}

export default function FeaturedProject({
  project,
}: FeaturedProjectProps) {
  return (
    <motion.article
      whileHover={cardHover}
      className="mb-16"
    >
      <Card className="overflow-hidden p-0">
        <div className="grid lg:grid-cols-2">
          <div className="flex items-center justify-center bg-[var(--muted)]">
            {project.image ? (
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                width={1400}
                height={900}
                priority
                sizes="(max-width:1024px)100vw,50vw"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-[420px] w-full items-center justify-center text-[var(--muted-foreground)]">
                Screenshot Coming Soon
              </div>
            )}
          </div>

          <div className="flex flex-col p-8 lg:p-10">
            <span className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--primary)]">
              Featured Project
            </span>

            <h2 className="text-4xl font-bold">
              {project.title}
            </h2>

            <p className="mt-2 text-lg text-[var(--primary)]">
              {project.tagline}
            </p>

            {project.impact && (
              <div className="mt-6 rounded-lg border-l-4 border-[var(--primary)] bg-[var(--muted)] p-4">
                <p className="italic">
                  {project.impact}
                </p>
              </div>
            )}

            <p className="mt-6 text-[var(--muted-foreground)] leading-7">
              {project.description}
            </p>

            <div className="mt-8">
              <h3 className="mb-3 font-semibold">
                Highlights
              </h3>

              <ul className="space-y-2 text-[var(--muted-foreground)]">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2"
                  >
                    <span className="mt-1 text-[var(--primary)]">
                      •
                    </span>

                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <TechStack
                technologies={project.technologies}
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