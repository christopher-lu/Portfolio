import { certifications } from "@/data/certifications";

import CertificationCard from "./CertificationCard";

export default function CertificationsList() {
  return (
    <div className="space-y-8">
      {certifications.map((certification) => (
        <CertificationCard
          key={certification.id}
          certification={certification}
        />
      ))}
    </div>
  );
}