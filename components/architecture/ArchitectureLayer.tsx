import Card from "@/components/ui/Card";

import type { ArchitectureLayer as Layer } from "@/types/architecture";

interface Props {
  layer: Layer;
  compact?: boolean;
}

export default function ArchitectureLayer({ layer, compact = false }: Props) {
  return (
    <Card className={compact ? "min-w-0 text-center !p-3 sm:!p-6" : "text-center"}>
      <div className={compact ? "space-y-2" : "space-y-3"}>
        <h3
          className={
            compact
              ? "break-words text-sm font-semibold leading-5 sm:text-lg"
              : "text-lg font-semibold"
          }
        >
          {layer.title}
        </h3>
        {layer.details && (
          <ul
            className={
              compact
                ? "space-y-1 break-words text-xs leading-5 text-[var(--muted-foreground)] sm:text-sm"
                : "space-y-1 text-sm text-[var(--muted-foreground)]"
            }
          >
            {layer.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        )}
      </div>
    </Card>
  );
}
