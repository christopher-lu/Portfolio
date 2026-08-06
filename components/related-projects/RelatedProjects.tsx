import SectionHeading from "@/components/ui/SectionHeading";

import RelatedProjectCard from "./RelatedProjectCard";

import { getRelatedProjects } from "@/lib/projects";

interface RelatedProjectsProps {
  currentProjectId: string;
}

export default function RelatedProjects({
  currentProjectId,
}: RelatedProjectsProps) {
  const projects = getRelatedProjects(currentProjectId);

  if (!projects.length) {
    return null;
  }

  return (
    <section className="space-y-8">
      <SectionHeading>
        Continue Exploring
      </SectionHeading>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <RelatedProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}