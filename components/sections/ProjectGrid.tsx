import { projects } from "@/data/projects";
import ProjectCard from "@/components/cards/ProjectCard";

export default function ProjectGrid() {
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.featured === b.featured) return 0;
    return a.featured ? -1 : 1;
  });

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
      {sortedProjects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
}