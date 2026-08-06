import BaseStorySection from "./BaseStorySection";

import type { StorySectionProps } from "./types";

export default function DecisionSection({
  section,
}: StorySectionProps) {
  return <BaseStorySection section={section} />;
}