import type { LucideIcon } from "lucide-react";
import { ImageIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type EmptyStateSize = "card" | "hero";

interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  size?: EmptyStateSize;
  className?: string;
}

const sizeVariants: Record<EmptyStateSize, string> = {
  card: "h-56",
  hero: "h-[420px]",
};

export default function EmptyState({
  title,
  description,
  icon: Icon = ImageIcon,
  size = "card",
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        `
        flex
        w-full
        flex-col
        items-center
        justify-center
        gap-4
        bg-[color-mix(in_srgb,var(--card)_96%,var(--foreground)_4%)]
        px-6
        text-center
        `,
        sizeVariants[size],
        className
      )}
    >
      <div
        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          border
          border-[var(--border)]
          bg-[var(--card)]
        "
      >
        <Icon
          className="h-7 w-7 text-[var(--muted-foreground)]"
          aria-hidden="true"
        />
      </div>

      <div className="space-y-1">
        <h3 className="text-base font-semibold">
          {title}
        </h3>

        {description && (
          <p className="max-w-xs text-sm text-[var(--muted-foreground)]">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}