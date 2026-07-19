import Button from "@/components/ui/Button";

interface ProjectLinksProps {
  github?: string;
  demo?: string;
}

export default function ProjectLinks({
  github,
  demo,
}: ProjectLinksProps) {
  if (!github && !demo) return null;

  return (
    <div className="flex flex-wrap gap-3 pt-2">
      {github && (
        <Button
          href={github}
          variant="github"
          external
        >
          GitHub
        </Button>
      )}

      {demo && (
        <Button
          href={demo}
          variant="primary"
          external
        >
          Live Demo
        </Button>
      )}
    </div>
  );
}