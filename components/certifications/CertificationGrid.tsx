import CertificationCard from "@/components/certifications/CertificationCard";

import { certifications } from "@/data/certifications";

export default function CertificationGrid() {
  return (
    <section
      aria-label="Professional certifications"
      className="grid gap-6 md:grid-cols-2"
    >
      {certifications.map((certification) => (
        <CertificationCard
          key={certification.id}
          certification={certification}
        />
      ))}
    </section>
  );
}