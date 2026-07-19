"use client";

import { motion } from "framer-motion";

import ContributionCard from "@/components/contributions/ContributionCard";
import Section from "@/components/ui/Section";

import { contributions } from "@/data/contributions";

import { fadeUpContainer } from "@/lib/animations";

export default function ContributionsSection() {
  const featuredContributions = contributions.filter(
    ({ featured }) => featured
  );

  return (
    <Section
      title="Writing & Speaking"
      description="Articles, technical writing, and speaking engagements where I've shared knowledge with the developer community."
    >
      <motion.div
        variants={fadeUpContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        className="grid gap-8 md:grid-cols-2"
      >
        {featuredContributions.map((contribution) => (
          <ContributionCard
            key={contribution.id}
            contribution={contribution}
          />
        ))}
      </motion.div>
    </Section>
  );
}