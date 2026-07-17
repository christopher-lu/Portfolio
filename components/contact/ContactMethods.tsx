import { contact } from "@/data/contact";

import Availability from "./Availability";
import ContactCard from "./ContactCard";

export default function ContactMethods() {
  return (
    <>
      <Availability />

      <div
        className="
          mx-auto

          grid

          max-w-5xl

          grid-cols-1

          gap-8

          md:grid-cols-2
        "
      >
        {contact.methods.map((method) => (
          <ContactCard
            key={method.id}
            method={method}
          />
        ))}
      </div>
    </>
  );
}