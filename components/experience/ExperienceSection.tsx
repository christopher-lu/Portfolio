"use client";

import { motion } from "framer-motion";

import ExperienceCard from "@/components/experience/ExperienceCard";
import Container from "@/components/layouts/Container";
import { experiences } from "@/data/experience";
import {
  fadeUpContainer,
  fadeUpItem,
} from "@/lib/animations";

export default function ExperienceSection() {
  return (
    <Container>
      <section
        aria-labelledby="experience-heading"
        className="py-16"
      >
        <header className="mb-12">
          <h2
            id="experience-heading"
            className="text-4xl font-bold tracking-tight"
          >
            Experience
          </h2>

          <p className="mt-4 max-w-2xl text-[var(--muted-foreground)]">
            Building scalable web applications, developer tools, and
            customer-focused software while collaborating across
            engineering, product, and support teams.
          </p>
        </header>

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
          {experiences.map((experience) => (
            <motion.div
              key={experience.id}
              variants={fadeUpItem}
            >
              <ExperienceCard experience={experience} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </Container>
  );
}