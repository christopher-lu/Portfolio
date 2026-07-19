"use client";

import { motion } from "framer-motion";

import SkillCategory from "./SkillCategory";

import { fadeUpContainer } from "@/lib/animations";
import { getOrderedTechnologyCategories } from "@/lib/technologies";

export default function SkillsGrid() {
  const categories = getOrderedTechnologyCategories();

  return (
    <motion.div
      variants={fadeUpContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid gap-6 md:grid-cols-2"
    >
      {categories.map((category) => (
        <SkillCategory
          key={category}
          category={category}
        />
      ))}
    </motion.div>
  );
}