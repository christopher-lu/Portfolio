"use client";

import { motion } from "framer-motion";

import AboutHero from "@/components/about/AboutHero";
import BeyondCodeCard from "@/components/about/BeyondCodeCard";
import FocusCard from "@/components/about/FocusCard";
import JourneyCard from "@/components/about/JourneyCard";
import PhilosophyCard from "@/components/about/PhilosophyCard";

import Section from "@/components/ui/Section";

import {
  fadeUpContainer,
  fadeUpItem,
} from "@/lib/animations";

export default function AboutSection() {
  return (
    <Section
      id="about"
      title="About"
      description="A little about who I am, how I approach engineering, and what continues to motivate me as a software developer."
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
        <motion.div variants={fadeUpItem}>
          <AboutHero />
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div variants={fadeUpItem}>
            <PhilosophyCard />
          </motion.div>

          <motion.div variants={fadeUpItem}>
            <FocusCard />
          </motion.div>

          <motion.div variants={fadeUpItem}>
            <JourneyCard />
          </motion.div>

          <motion.div variants={fadeUpItem}>
            <BeyondCodeCard />
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}