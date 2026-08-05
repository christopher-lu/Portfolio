import ArchitectureSection from "./sections/ArchitectureSection";
import ChallengeSection from "./sections/ChallengeSection";
import DecisionSection from "./sections/DecisionSection";
import GallerySection from "./sections/GallerySection";
import LessonSection from "./sections/LessonSection";
import ProblemSection from "./sections/ProblemSection";
import ResultsSection from "./sections/ResultsSection";
import TradeoffSection from "./sections/TradeoffSection";

import type { EngineeringStorySection as StorySection } from "@/types/engineering-story";

interface EngineeringStorySectionProps {
  section: StorySection;
}

export default function EngineeringStorySection({
  section,
}: EngineeringStorySectionProps) {
  switch (section.type) {
    case "problem":
      return <ProblemSection section={section} />;

    case "architecture":
      return <ArchitectureSection section={section} />;

    case "decision":
      return <DecisionSection section={section} />;

    case "challenge":
      return <ChallengeSection section={section} />;

    case "tradeoff":
      return <TradeoffSection section={section} />;

    case "results":
      return <ResultsSection section={section} />;

    case "lesson":
      return <LessonSection section={section} />;

    case "gallery":
      return <GallerySection section={section} />;

    default: {
      const exhaustiveCheck: never = section.type;

      throw new Error(
        `Unhandled engineering story section type: ${exhaustiveCheck}`
      );
    }
  }
}