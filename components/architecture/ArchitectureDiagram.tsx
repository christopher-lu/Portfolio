import ArchitectureConnector from "./ArchitectureConnector";
import ArchitectureLayer from "./ArchitectureLayer";

import type { ArchitectureDiagram as Diagram } from "@/types/architecture";

interface Props {
  diagram: Diagram;
}

export default function ArchitectureDiagram({ diagram }: Props) {
  return (
    <section className="space-y-8">
      {diagram.title && (
        <h2 className="text-3xl font-bold">{diagram.title}</h2>
      )}

      <div>
        {diagram.parallelClients && (
          <>
            <p className="sr-only">
              Mobile and web applications independently connect to the same
              backend API; neither communicates through the other.
            </p>
            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              {diagram.parallelClients.map((client) => (
                <ArchitectureLayer key={client.id} layer={client} compact />
              ))}
            </div>
            {diagram.layers.length > 0 && (
              <ArchitectureConnector variant="converge" />
            )}
          </>
        )}

        {diagram.layers.map((layer, index) => (
          <div key={layer.id}>
            <ArchitectureLayer layer={layer} />
            {index < diagram.layers.length - 1 && <ArchitectureConnector />}
          </div>
        ))}
      </div>
    </section>
  );
}
