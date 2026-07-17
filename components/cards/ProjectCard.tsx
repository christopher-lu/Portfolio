import Link from "next/link";

import Card from "@/components/ui/Card";

import ProjectStatus from "@/components/projects/ProjectStatus";
import ProjectHighlights from "@/components/projects/ProjectHighlights";

import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col">
      <div className="mb-4 flex items-center justify-between">
        <ProjectStatus status={project.status} />

        <span className="text-sm text-[var(--muted-foreground)]">
          {project.category}
        </span>
      </div>

      <h3 className="text-2xl font-bold">
        {project.title}
      </h3>

      <p className="mt-2 font-medium text-blue-500">
        {project.tagline}
      </p>

      <p className="mt-4 text-[var(--muted-foreground)]">
        {project.description}
      </p>

      <div className="mt-6">
        <ProjectHighlights
          highlights={project.highlights}
        />
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto flex gap-4 pt-8">
        {project.github && (
          <Link
            href={project.github}
            target="_blank"
            className="rounded-lg border border-[var(--border)] px-4 py-2 transition hover:bg-[var(--surface)]"
          >
            GitHub
          </Link>
        )}

        {project.demo && (
          <Link
            href={project.demo}
            target="_blank"
            className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
          >
            Live Demo
          </Link>
        )}
      </div>
    </Card>
  );
}