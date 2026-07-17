import PageLayout from "@/components/layouts/PageLayout";

import ExperienceTimeline from "@/components/experience/ExperienceTimeline";

export default function ExperiencePage() {
  return (
    <PageLayout
      eyebrow="Experience"
      title="Professional Experience"
      description="A timeline of my professional journey, highlighting leadership, technical expertise, and measurable impact across technology,  start up and enterprise environments."
    >
      <ExperienceTimeline />
    </PageLayout>
  );
}