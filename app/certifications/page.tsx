import PageLayout from "@/components/layouts/PageLayout";

import CertificationGrid from "@/components/certifications/CertificationGrid";

export default function CertificationsPage() {
  return (
    <PageLayout
      eyebrow="Certifications"
      title="Professional Certifications"
      description="Professional certifications earned and planned across cloud computing, software engineering, AI, and modern development."
    >
      <CertificationGrid />
    </PageLayout>
  );
}