import ArchitectureConnector from "./ArchitectureConnector";
import ArchitectureLayer from "./ArchitectureLayer";

import type {
  ArchitectureDiagram as Diagram,
} from "@/types/architecture";

interface Props {
  diagram: Diagram;
}

export default function ArchitectureDiagram({
  diagram,
}: Props) {
  return (
    <section className="space-y-8">
      {diagram.title && (
        <h2 className="text-3xl font-bold">
          {diagram.title}
        </h2>
      )}

      <div>
        {diagram.layers.map((layer, index) => (
          <div key={layer.id}>
            <ArchitectureLayer layer={layer} />

            {index <
              diagram.layers.length - 1 && (
              <ArchitectureConnector />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}