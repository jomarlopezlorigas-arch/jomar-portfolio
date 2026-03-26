"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SpotlightCard({
  children,
  className = "",
  glowClassName = "from-cyan-500/20 via-blue-500/20 to-fuchsia-500/20",
}) {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const spotlightStyle = useMemo(
    () => ({
      background: `radial-gradient(240px circle at ${position.x}% ${position.y}%, rgba(96, 165, 250, 0.22), transparent 45%)`,
    }),
    [position]
  );

  return (
    <motion.div
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        setPosition({ x, y });
      }}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
      className={cn(
        "group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#070b12]/80 shadow-[0_18px_70px_rgba(0,0,0,0.45)] backdrop-blur-xl",
        className
      )}
    >
      <div className={cn("pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100", glowClassName)} />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={spotlightStyle}
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:42px_42px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}
