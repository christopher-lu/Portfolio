import Image from "next/image";

import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";

import ProjectHighlights from "./ProjectHighlights";
import ProjectStatus from "./ProjectStatus";

import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <Card
      className="
        flex
        h-full
        flex-col
        overflow-hidden
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:shadow-lg
      "
    >
      {/* Project Preview */}

      {project.image ? (
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={450}
          className="
            mb-6
            w-full
            rounded-xl
            object-cover
            transition-transform
            duration-300
            hover:scale-[1.02]
          "
        />
      ) : (
        <div
          className="
            mb-6
            flex
            aspect-video
            items-center
            justify-center
            rounded-xl
            border
            border-dashed
            border-[var(--border)]
            bg-[var(--surface)]
            text-sm
            text-[var(--muted)]
          "
        >
          Project Preview Coming Soon
        </div>
      )}

      {/* Header */}

      <div className="flex items-center justify-between">
        <ProjectStatus status={project.status} />

        <Text variant="small">
          {project.category}
        </Text>
      </div>

      {/* Title */}

      <Heading
        level={3}
        className="mt-5"
      >
        {project.title}
      </Heading>

      {/* Tagline */}

      <Text
        className="
          mt-2
          font-medium
          text-[var(--accent)]
        "
      >
        {project.tagline}
      </Text>

      {/* Description */}

      <Text
        variant="muted"
        className="mt-5 flex-grow"
      >
        {project.description}
      </Text>

      {/* Highlights */}

      <div className="mt-6">
        <ProjectHighlights
          highlights={project.highlights}
        />
      </div>

      {/* Technologies */}

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <Badge
            key={tech}
            className="
              transition-colors
              duration-200
              hover:border-[var(--accent)]
              hover:text-[var(--accent)]
            "
          >
            {tech}
          </Badge>
        ))}
      </div>

      {/* Actions */}

      {(project.github || project.demo) && (
        <div className="mt-8 flex gap-3">
          {project.github && (
            <Button
              href={project.github}
              variant="github"
              external
            >
              <FaGithub className="h-4 w-4" />
              GitHub
            </Button>
          )}

          {project.demo && (
            <Button
              href={project.demo}
              variant="primary"
              external
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </Button>
          )}
        </div>
      )}
    </Card>
  );
}