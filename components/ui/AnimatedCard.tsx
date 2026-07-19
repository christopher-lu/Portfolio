"use client";

import type { ReactNode } from "react";

import { motion } from "framer-motion";

import { fadeUpItem, cardHover } from "@/lib/animations";

interface AnimatedCardProps {
  children: ReactNode;
}

export default function AnimatedCard({
  children,
}: AnimatedCardProps) {
  return (
    <motion.div
      variants={fadeUpItem}
      whileHover={cardHover}
    >
      {children}
    </motion.div>
  );
}