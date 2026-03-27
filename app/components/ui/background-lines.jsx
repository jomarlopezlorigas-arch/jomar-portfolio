"use client";

import { motion } from "framer-motion";
import useSafeReducedMotion from "../../hooks/use-safe-reduced-motion";

const linePositions = [6, 14, 22, 31, 41, 52, 64, 74, 84, 93];

export function BackgroundLines({ children, className = "" }) {
  const shouldReduceMotion = useSafeReducedMotion();

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.14),transparent_26%),linear-gradient(180deg,rgba(2,6,23,0.08)_0%,rgba(2,6,23,0.45)_100%)]" />

        <div className="absolute inset-0 [mask-image:radial-gradient(circle_at_center,black_22%,transparent_85%)]">
          {linePositions.map((left, index) => (
            <motion.span
              key={left}
              className="absolute top-[-15%] h-[130%] w-px bg-gradient-to-b from-transparent via-blue-200/45 to-transparent"
              style={{ left: `${left}%` }}
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      opacity: [0.12, 0.65, 0.12],
                      scaleY: [0.96, 1.02, 0.96],
                    }
              }
              transition={
                shouldReduceMotion
                  ? undefined
                  : {
                      duration: 3.8 + index * 0.35,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.18,
                    }
              }
            />
          ))}
        </div>

        <motion.div
          className="absolute inset-y-0 left-[-20%] w-[30%] bg-[linear-gradient(90deg,transparent,rgba(125,211,252,0.16),transparent)] blur-xl"
          animate={shouldReduceMotion ? undefined : { x: ["0%", "420%"] }}
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 7.5, repeat: Infinity, ease: "linear" }
          }
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:96px_100%] opacity-50" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_96px] opacity-25" />
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default BackgroundLines;
