"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    x: 100,
    y: 30,
    scale: 0.9,
    rotateY: 5,
  },
  in: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    rotateY: 0,
  },
  out: {
    opacity: 0,
    x: -100,
    y: -30,
    scale: 0.9,
    rotateY: -5,
  },
};

const pageTransition = {
  type: "spring",
  damping: 25,
  stiffness: 120,
  mass: 1,
  duration: 0.6,
};

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
} 