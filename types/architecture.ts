export interface ArchitectureLayer {
  readonly id: string;

  readonly title: string;

  readonly details?: readonly string[];
}

export interface ArchitectureDiagram {
  readonly title?: string;

  readonly layers: readonly ArchitectureLayer[];
}