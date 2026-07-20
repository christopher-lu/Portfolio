"use client";

import { motion } from "framer-motion";

import Container from "@/components/layouts/Container";

import EducationCard from "@/components/education/EducationCard";

import { education } from "@/data/education";

import {
  fadeUpContainer,
  fadeUpItem,
} from "@/lib/animations";

export default function EducationSection() {
  return (
    <Container>
      <section
        aria-labelledby="education-heading"
        className="py-16"
      >
        <header className="mb-12">
          <h2
            id="education-heading"
            className="text-4xl font-bold tracking-tight"
          >
            Education
          </h2>

          <p className="mt-4 max-w-2xl text-[var(--muted-foreground)]">
            A foundation in scientific problem solving complemented by
            immersive training in modern full stack software engineering.
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
          {education.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUpItem}
            >
              <EducationCard education={item} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </Container>
  );
}