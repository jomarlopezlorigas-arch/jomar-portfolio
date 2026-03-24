"use client";

import { motion } from "framer-motion";
import type { CSSProperties } from "react";

type DottedGlowBackgroundProps = {
  className?: string;
  opacity?: number;
  gap?: number;
  radius?: number;
  colorLightVar?: string;
  glowColorLightVar?: string;
  colorDarkVar?: string;
  glowColorDarkVar?: string;
  backgroundOpacity?: number;
  speedMin?: number;
  speedMax?: number;
  speedScale?: number;
};

function resolveCssVar(variableName: string | undefined, fallback: string) {
  if (!variableName) {
    return fallback;
  }

  return `var(${variableName}, ${fallback})`;
}

export function DottedGlowBackground({
  className = "",
  opacity = 1,
  gap = 10,
  radius = 1.6,
  colorLightVar,
  glowColorLightVar,
  colorDarkVar,
  glowColorDarkVar,
  backgroundOpacity = 0,
  speedMin = 0.3,
  speedMax = 1.6,
  speedScale = 1,
}: DottedGlowBackgroundProps) {
  const dotColor = resolveCssVar(
    colorDarkVar ?? colorLightVar,
    "rgba(148, 163, 184, 0.38)"
  );
  const glowPrimary = resolveCssVar(
    glowColorDarkVar ?? glowColorLightVar,
    "rgba(56, 189, 248, 0.32)"
  );
  const glowSecondary = resolveCssVar(
    glowColorLightVar ?? glowColorDarkVar,
    "rgba(99, 102, 241, 0.22)"
  );

  const dotStyle: CSSProperties = {
    opacity,
    backgroundColor: `rgba(3, 4, 8, ${backgroundOpacity})`,
    backgroundImage: `radial-gradient(circle, ${dotColor} ${radius}px, transparent ${
      radius + 0.65
    }px)`,
    backgroundSize: `${gap}px ${gap}px`,
  };

  const slowDuration = Math.max(16, 28 / Math.max(speedMin * speedScale, 0.15));
  const fastDuration = Math.max(12, 20 / Math.max(speedMax * speedScale, 0.15));

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute inset-0" style={dotStyle} />

      <motion.div
        className="absolute left-[-12%] top-[-18%] h-[28rem] w-[28rem] rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, ${glowPrimary} 0%, transparent 70%)`,
        }}
        animate={{
          x: [0, 90, -30, 0],
          y: [0, 50, 110, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: slowDuration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-[-20%] right-[-10%] h-[24rem] w-[24rem] rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, ${glowSecondary} 0%, transparent 72%)`,
        }}
        animate={{
          x: [0, -80, 20, 0],
          y: [0, -70, -10, 0],
          scale: [1, 0.92, 1.08, 1],
        }}
        transition={{
          duration: fastDuration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_32%),radial-gradient(circle_at_50%_120%,rgba(56,189,248,0.12),transparent_38%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(3,4,8,0.28),rgba(3,4,8,0.72))]" />
    </div>
  );
}
