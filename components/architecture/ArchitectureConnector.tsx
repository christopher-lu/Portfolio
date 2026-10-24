import { ArrowDown } from "lucide-react";

interface Props {
  variant?: "down" | "converge";
}

export default function ArchitectureConnector({ variant = "down" }: Props) {
  if (variant === "converge") {
    return (
      <div
        aria-hidden="true"
        className="relative h-16 w-full text-[var(--muted-foreground)]"
      >
        <div className="absolute left-1/4 top-0 h-5 border-l border-current" />
        <div className="absolute right-1/4 top-0 h-5 border-l border-current" />
        <div className="absolute left-1/4 right-1/4 top-5 border-t border-current" />
        <div className="absolute left-1/2 top-5 h-5 border-l border-current" />
        <ArrowDown className="absolute bottom-1 left-1/2 h-5 w-5 -translate-x-1/2" />
      </div>
    );
  }

  return (
    <div aria-hidden="true" className="flex justify-center py-2">
      <ArrowDown size={18} className="text-[var(--muted-foreground)]" />
    </div>
  );
}
