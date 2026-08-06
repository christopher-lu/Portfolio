"use client";

import Link from "next/link";

import {
  Briefcase,
  Code2,
  FileText,
  Mail,
} from "lucide-react";

import { motion } from "framer-motion";

import ContactCard from "@/components/contact/ContactCard";
import ContactHero from "@/components/contact/ContactHero";

import AnimatedCard from "@/components/ui/AnimatedCard";
import Section from "@/components/ui/Section";

import { personal } from "@/data/personal";

import { fadeUpContainer } from "@/lib/animations";

const contacts = [
  {
    title: "Email",
    description:
      "The best way to reach me regarding opportunities, collaborations, or general inquiries.",
    buttonLabel: "Send Email",
    href: `mailto:${personal.social.email}`,
    icon: Mail,
    external: false,
  },
  {
    title: "LinkedIn",
    description:
      "Connect with me professionally and stay up to date with my experience and career journey.",
    buttonLabel: "View Profile",
    href: personal.social.linkedin,
    icon: Briefcase,
    external: true,
  },
  {
    title: "GitHub",
    description:
      "Explore my open-source work, personal projects, and recent software engineering contributions.",
    buttonLabel: "Visit GitHub",
    href: personal.social.github,
    icon: Code2,
    external: true,
  },
  {
    title: "Resume",
    description:
      "Download my latest resume to learn more about my experience and technical background.",
    buttonLabel: "View Resume",
    href: personal.resume,
    icon: FileText,
    external: true,
  },
];

export default function ContactSection() {
  return (
    <Section
      id="contact"
      title="Contact"
      description="Let&apos;s connect and build something meaningful together."
    >
      <motion.div
        variants={fadeUpContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        className="space-y-8"
      >
        <AnimatedCard>
          <ContactHero />
        </AnimatedCard>

        <div className="grid gap-8 md:grid-cols-2">
          {contacts.map((contact) => (
            <AnimatedCard key={contact.title}>
              <Link
                href={contact.href}
                aria-label={contact.title}
                className="block h-full"
                {...(contact.external
                  ? {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : {})}
              >
                <ContactCard
                  title={contact.title}
                  description={contact.description}
                  buttonLabel={contact.buttonLabel}
                  icon={contact.icon}
                />
              </Link>
            </AnimatedCard>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}