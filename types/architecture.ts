export interface ArchitectureLayer {
  readonly id: string;
  readonly title: string;
  readonly details?: readonly string[];
}

export interface ArchitectureDiagram {
  readonly title?: string;
  /** Independent clients that both call the first shared backend layer. */
  readonly parallelClients?: readonly [ArchitectureLayer, ArchitectureLayer];
  readonly layers: readonly ArchitectureLayer[];
}
