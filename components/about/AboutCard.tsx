import type { ReactNode } from "react";

import Card from "@/components/ui/Card";

interface AboutCardProps {
  title: string;
  children: ReactNode;
}

export default function AboutCard({
  title,
  children,
}: AboutCardProps) {
  return (
    <Card className="h-full">
      <h2 className="mb-4 text-2xl font-semibold">
        {title}
      </h2>

      <div className="space-y-4 leading-7 text-[var(--muted-foreground)]">
        {children}
      </div>
    </Card>
  );
}