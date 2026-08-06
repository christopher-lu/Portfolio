import ProjectImage from "@/components/projects/ProjectImage";
import ProjectLinks from "@/components/projects/project-card/ProjectLinks";
import StatusBadge from "@/components/ui/StatusBadge";

import { projectStatusConfig } from "@/lib/status";

import type { Project } from "@/types/project";

interface ProjectHeaderProps {
  project: Project;
}

export default function ProjectHeader({
  project,
}: ProjectHeaderProps) {
  return (
    <header className="space-y-8">
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

      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="space-y-3">
          <h1 className="text-5xl font-bold tracking-tight">
            {project.title}
          </h1>

          <p className="text-xl text-[var(--accent)]">
            {project.tagline}
          </p>
        </div>

        <StatusBadge
          status={project.status}
          config={projectStatusConfig}
        />
      </div>

      <ProjectLinks
        resources={project.resources}
        resourceNotice={project.resourceNotice}
        />
    </header>
  );
}