import Card from "@/components/ui/Card";

import type { ArchitectureLayer as Layer } from "@/types/architecture";

interface Props {
  layer: Layer;
}

export default function ArchitectureLayer({
  layer,
}: Props) {
  return (
    <Card className="text-center">
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">
          {layer.title}
        </h3>

        {layer.details && (
          <ul className="space-y-1 text-sm text-[var(--muted-foreground)]">
            {layer.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        )}
      </div>
    </Card>
  );
}