"use client";

import { motion } from "framer-motion";

const defaultTransition = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1],
};

export function SectionReveal({
  children,
  className = "",
  delay = 0,
  y = 24,
  x = 0,
  scale = 1,
  once = true,
  amount = 0.2,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y, x, scale, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1, filter: "blur(0px)" }}
      transition={{ ...defaultTransition, delay }}
      viewport={{ once, amount }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerReveal({
  children,
  className = "",
  staggerChildren = 0.08,
  delayChildren = 0,
  once = true,
  amount = 0.15,
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren,
            delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "", y = 18, x = 0 }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y, x, filter: "blur(10px)" },
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
          filter: "blur(0px)",
          transition: defaultTransition,
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default SectionReveal;
