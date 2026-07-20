import { cn } from "@/lib/utils";

type DividerSpacing =
  | "none"
  | "sm"
  | "md"
  | "lg";

interface DividerProps {
  spacing?: DividerSpacing;
  className?: string;
}

const spacingClasses: Record<
  DividerSpacing,
  string
> = {
  none: "",
  sm: "my-4",
  md: "my-8",
  lg: "my-12",
};

export default function Divider({
  spacing = "md",
  className,
}: DividerProps) {
  return (
    <hr
      className={cn(
        "border-0 border-t border-[var(--border)]",
        spacingClasses[spacing],
        className
      )}
    />
  );
}