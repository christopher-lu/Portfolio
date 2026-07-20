import Button from "@/components/ui/Button";

interface ProjectLinksProps {
  github?: string;
  demo?: string;
  website?: string;
}

export default function ProjectLinks({
  github,
  demo,
  website,
}: ProjectLinksProps) {
  if (!github && !demo &&!website) return null;

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

      {website && (
        <Button
          href={website}
          variant="github"
          external
        >
          Website
        </Button>
      )}

      
    </div>
  );
}