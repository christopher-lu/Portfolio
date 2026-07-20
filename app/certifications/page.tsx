import type { Metadata } from "next";

import CertificationGrid from "@/components/certifications/CertificationGrid";
import PageLayout from "@/components/layouts/PageLayout";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "Professional certifications earned and planned across cloud computing, software engineering, and modern technologies.",
};

export default function CertificationsPage() {
  return (
    <PageLayout
      title="Professional Certifications"
      description="Professional certifications earned and planned across cloud computing, software engineering, and modern technologies."
    >
      <CertificationGrid />
    </PageLayout>
  );
}