import type { ReactNode } from "react";

interface MetadataItemProps {
  icon: ReactNode;
  children: ReactNode;
}

export default function MetadataItem({
  icon,
  children,
}: MetadataItemProps) {
  return (
    <div className="inline-flex items-center gap-1.5">
      {icon}
      <span>{children}</span>
    </div>
  );
}