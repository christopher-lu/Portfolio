import type { ReactNode } from "react";

interface MetadataRowProps {
  children: ReactNode;
}

export default function MetadataRow({
  children,
}: MetadataRowProps) {
  return (
    <div
      className="
        flex
        flex-wrap
        items-center
        gap-x-5
        gap-y-2
        text-sm
        text-[var(--muted-foreground)]
      "
    >
      {children}
    </div>
  );
}