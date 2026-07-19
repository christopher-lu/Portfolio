"use client";

import FeaturedProject from "@/components/projects/FeaturedProject";
import ProjectCard from "@/components/projects/ProjectCard";

import { projects } from "@/data/projects";

export default function ProjectGrid() {
  const sortedProjects = [...projects].sort(
    (a, b) => a.displayOrder - b.displayOrder
  );

  const [featuredProject, ...otherProjects] =
    sortedProjects;

  return (
    <>
      <FeaturedProject project={featuredProject} />

      {otherProjects.length > 0 && (
        <>
          <h2 className="mb-8 text-3xl font-bold">
            Additional Projects
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {otherProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}