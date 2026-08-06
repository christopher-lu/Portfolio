import ProjectImage from "@/components/projects/ProjectImage";
import StatusBadge from "@/components/ui/StatusBadge";
import ProjectLinks from "@/components/projects/project-card/ProjectLinks";

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
        image={project.image}
        video={project.video}
        title={project.title}
        variant="featured"
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
      />
    </header>
  );
}