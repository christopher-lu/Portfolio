import type { Metadata } from "next";

import ContactSection from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact | Christopher Lu",
  description:
    "Get in touch with Christopher Lu for software engineering opportunities, collaborations, or professional networking.",
};

export default function ContactPage() {
  return <ContactSection />;
}