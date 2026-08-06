import { notFound } from "next/navigation";

import { ArchitectureDiagram } from "@/components/architecture";
import EngineeringStory from "@/components/engineering-story/EngineeringStory";
import Container from "@/components/layouts/Container";
import BackLink from "@/components/navigation/BackLink";
import ProjectHeader from "@/components/project-detail/ProjectHeader";
import ProjectOverview from "@/components/project-detail/ProjectOverview";
import { RelatedProjects } from "@/components/related-projects";

import {
  getProjectById,
  getProjectIds,
} from "@/lib/projects";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export function generateStaticParams() {
  return getProjectIds().map((id) => ({
    id,
  }));
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { id } = await params;

  const project = getProjectById(id);

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

      {project.architecture && (
        <ArchitectureDiagram
          diagram={project.architecture}
        />
      )}

      {project.engineeringStory && (
        <EngineeringStory
          story={project.engineeringStory}
        />
      )}

      <RelatedProjects currentProjectId={project.id} />
    </Container>
  );
}