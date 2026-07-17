import PageLayout from "@/components/layouts/PageLayout";

import EducationTimeline from "@/components/education/EducationTimeline";

export default function EducationPage() {
  return (
    <PageLayout
      eyebrow="Education"
      title="Education"
      description="Academic background, degrees, and achievements that have shaped my technical foundation."
    >
      <EducationTimeline />
    </PageLayout>
  );
}