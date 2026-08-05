export type EngineeringStorySectionType =
  | "problem"
  | "architecture"
  | "decision"
  | "challenge"
  | "tradeoff"
  | "results"
  | "lesson"
  | "gallery";

export interface EngineeringStorySection {
  readonly id: string;

  readonly type: EngineeringStorySectionType;

  readonly title: string;

  readonly body: string;

  readonly featured?: boolean;
}

export interface EngineeringStory {
  readonly featured?: boolean;

  /**
   * Short summary used for previews, SEO,
   * related content, and future cards.
   */
  readonly summary?: string;

  readonly sections: readonly EngineeringStorySection[];
}