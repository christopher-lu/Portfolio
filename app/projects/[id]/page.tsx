import { notFound } from "next/navigation";
import BackLink from "@/components/navigation/BackLink";

import Container from "@/components/layouts/Container";
import EngineeringStory from "@/components/engineering-story/EngineeringStory";

import ProjectHeader from "@/components/project-detail/ProjectHeader";
import ProjectOverview from "@/components/project-detail/ProjectOverview";

import {
  getProjectById,
  getProjectIds,
} from "@/lib/projects";

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return getProjectIds().map((id) => ({
    id,
  }));
}

export default function ProjectPage({
  params,
}: ProjectPageProps) {
  const project = getProjectById(params.id);

  if (!project) {
    notFound();
  }

  return (
    <Container className="space-y-24 py-20">
        <BackLink href="/projects">
            Back to Projects
        </BackLink>
      <ProjectHeader project={project} />

      <ProjectOverview project={project} />

      {project.engineeringStory && (
        <EngineeringStory
          story={project.engineeringStory}
        />
      )}
    </Container>
  );
}