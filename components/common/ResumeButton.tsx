import Button from "@/components/ui/Button";

interface ResumeButtonProps {
  variant?:
    | "primary"
    | "secondary"
    | "outline";
}

export default function ResumeButton({
  variant = "outline",
}: ResumeButtonProps) {
  return (
    <Button
      href="/Christopher_Lu_Resume.pdf"
      variant={variant}
    >
      View Resume
    </Button>
  );
}