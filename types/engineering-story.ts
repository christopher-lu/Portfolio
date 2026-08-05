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
  id: string;

  type: EngineeringStorySectionType;

  title: string;

  body: string;

  featured?: boolean;
}

export interface EngineeringStory {
  featured?: boolean;

  sections: EngineeringStorySection[];
}