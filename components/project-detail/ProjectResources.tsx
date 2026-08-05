import ProjectLinks from "@/components/projects/project-card/ProjectLinks";

import type { Project } from "@/types/project";

interface ProjectResourcesProps {
  project: Project;
}

export default function ProjectResources({
  project,
}: ProjectResourcesProps) {
  if (!project.resources?.length) {
    return null;
  }

  return (
    <section className="pt-8">
      <ProjectLinks
        resources={project.resources}
      />
    </section>
  );
}