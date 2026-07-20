import PageLayout from "@/components/layouts/PageLayout";

import EducationList from "@/components/education/EducationList";

export default function EducationPage() {
  return (
    <PageLayout
      title="Education"
      description="A foundation in scientific problem solving complemented by immersive training in modern full stack software engineering."
    >
      <EducationList />
    </PageLayout>
  );
}