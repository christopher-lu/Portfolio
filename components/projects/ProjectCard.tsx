import Image from "next/image";

import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

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
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      {/* Project Image */}

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
            text-[var(--muted-foreground)]
          "
        >
          Project Preview Coming Soon
        </div>
      )}

      {/* Header */}

      <div className="flex items-center justify-between">
        <ProjectStatus status={project.status} />

        <span className="text-sm text-[var(--muted-foreground)]">
          {project.category}
        </span>
      </div>

      {/* Title */}

      <h3 className="mt-5 text-2xl font-bold">
        {project.title}
      </h3>

      {/* Tagline */}

      <p className="mt-2 font-medium text-[var(--accent)]">
        {project.tagline}
      </p>

      {/* Description */}

      <p className="mt-5 flex-grow text-[var(--muted-foreground)]">
        {project.description}
      </p>

      {/* Highlights */}

      <div className="mt-6">
        <ProjectHighlights
          highlights={project.highlights}
        />
      </div>

      {/* Technologies */}

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="
              rounded-full
              border
              border-[var(--border)]
              bg-[var(--surface)]
              px-3
              py-1
              text-sm
            "
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Footer */}

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
            <Button href={project.demo} external>
              <ExternalLink className=" h-4 w-4" />
              Live Demo
            </Button>
          )}
        </div>
      )}
    </Card>
  );
}