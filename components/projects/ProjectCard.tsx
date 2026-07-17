import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

import ProjectHighlights from "./ProjectHighlights";
import ProjectStatus from "./ProjectStatus";

import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col">
      {/* Header */}

      <div className="flex items-start justify-between">
        <ProjectStatus status={project.status} />

        <span className="text-sm text-[var(--muted-foreground)]">
          {project.category}
        </span>
      </div>

      {/* Title */}

      <h3 className="mt-5 text-2xl font-bold">
        {project.title}
      </h3>

      <p className="mt-2 font-medium text-[var(--accent)]">
        {project.tagline}
      </p>

      {/* Description */}

      <p className="mt-5 text-[var(--muted-foreground)]">
        {project.description}
      </p>

      {/* Highlights */}

      <div className="mt-6">
        <ProjectHighlights
          highlights={project.highlights}
        />
      </div>

      {/* Technologies */}

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="
              rounded-full
              border
              border-[var(--border)]
              bg-[var(--surface)]
              px-3
              py-1
              text-sm
            "
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}

      <div className="mt-auto flex gap-3 pt-8">
        {project.github && (
          <Button
            href={project.github}
            variant="secondary"
            external
          >
            GitHub
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
    </Card>
  );
}