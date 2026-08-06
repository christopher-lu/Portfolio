"use client";

import { motion } from "framer-motion";

import ProjectGrid from "@/components/projects/ProjectGrid";
import Section from "@/components/ui/Section";

import {
  fadeUpContainer,
  fadeUpItem,
} from "@/lib/animations";

export default function ProjectsSection() {
  return (
    <Section
      id="projects"
      as="h1"
      title="Projects"
      description="A selection of software engineering projects showcasing full-stack development, cloud infrastructure, developer tooling, and modern web technologies."
    >
      <motion.div
        variants={fadeUpContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
      >
        <motion.div variants={fadeUpItem}>
          <ProjectGrid />
        </motion.div>
      </motion.div>
    </Section>
  );
}