import Button from "@/components/ui/Button";

type Props = {
  github?: string;
  demo?: string;
};

export default function ProjectLinks({
  github,
  demo,
}: Props) {
  return (
    <div className="mt-auto flex gap-3 pt-8">
      {github && (
        <Button
          href={github}
          variant="secondary"
          external
        >
          GitHub
        </Button>
      )}

      {demo && (
        <Button
          href={demo}
          external
        >
          Live Demo
        </Button>
      )}
    </div>
  );
}