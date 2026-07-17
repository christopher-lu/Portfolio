import {
  Mail,
  MapPin,
  FileText,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";

import Availability from "./Availability";
import ContactCard from "./ContactCard";

import { contact } from "@/data/contact";

const icons = {
  mail: Mail,
  github: FaGithub,
  linkedin: FaLinkedin,
  location: MapPin,
  resume: FileText,
};

export default function ContactMethods() {
  return (
    <>
      <Availability />

      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {contact.methods.map((method) => {
          const Icon = icons[method.type as keyof typeof icons];

          return (
            <ContactCard
              key={method.id}
              icon={Icon}
              label={method.label}
              value={method.value}
              href={method.href}
            />
          );
        })}
      </div>
    </>
  );
}