import { useMemo } from "react";

import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
  const sortedProjects = useMemo(
    () =>
      [...projects].sort(
        (a, b) => Number(b.featured) - Number(a.featured)
      ),
    []
  );

  return (
    <section aria-label="Projects">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {sortedProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}