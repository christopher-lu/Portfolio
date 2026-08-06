import { ArrowDown } from "lucide-react";

export default function ArchitectureConnector() {
  return (
    <div className="flex justify-center py-2">
      <ArrowDown
        size={18}
        className="text-[var(--muted-foreground)]"
      />
    </div>
  );
}