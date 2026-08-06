import { notFound } from "next/navigation";

import { ArchitectureDiagram } from "@/components/architecture";
import EngineeringStory from "@/components/engineering-story/EngineeringStory";
import Container from "@/components/layouts/Container";
import BackLink from "@/components/navigation/BackLink";
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
      {/* Navigation */}

      <BackLink href="/projects">
        Back to Projects
      </BackLink>

      {/* Project Header */}

      <ProjectHeader project={project} />

      {/* Project Overview */}

      <ProjectOverview project={project} />

      {/* System Architecture */}

      {project.architecture && (
        <ArchitectureDiagram
          diagram={project.architecture}
        />
      )}

      {/* Engineering Story */}

      {project.engineeringStory && (
        <EngineeringStory
          story={project.engineeringStory}
        />
      )}
    </Container>
  );
}