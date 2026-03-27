"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const loadingNotes = [
  "Loading portfolio",
  "Preparing student projects",
  "Getting everything ready",
];

export default function TechCloudIntro() {
  const [progress, setProgress] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const targetText = "JOMAR LORIGAS";
  const shouldReduceMotion = useReducedMotion();
  const resolvedProgress = shouldReduceMotion ? 100 : Math.min(progress, 100);
  const resolvedDisplayText = shouldReduceMotion
    ? targetText
    : displayText || targetText;

  useEffect(() => {
    if (shouldReduceMotion) {
      return undefined;
    }

    const interval = setInterval(() => {
      setProgress((prev) =>
        prev >= 100 ? 100 : prev + Math.floor(Math.random() * 10 + 6)
      );
    }, 120);

    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  useEffect(() => {
    if (shouldReduceMotion) {
      return undefined;
    }

    let iteration = 0;

    const interval = setInterval(() => {
      setDisplayText(
        targetText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return targetText[index];
            }

            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iteration >= targetText.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 50);

    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.01, filter: "blur(10px)" }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed inset-0 z-[999] overflow-hidden bg-[#050814] px-6 py-8 md:px-10 md:py-10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_26%),radial-gradient(circle_at_85%_25%,rgba(59,130,246,0.14),transparent_24%),linear-gradient(180deg,#050814_0%,#07101b_60%,#03050b_100%)]" />
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <motion.div
        className="absolute left-[-8%] top-[-10%] h-[28rem] w-[28rem] rounded-full bg-cyan-400/15 blur-[120px]"
        animate={shouldReduceMotion ? undefined : { y: [0, 24, 0], x: [0, 30, 0] }}
        transition={
          shouldReduceMotion
            ? undefined
            : { repeat: Infinity, duration: 8, ease: "easeInOut" }
        }
      />
      <motion.div
        className="absolute bottom-[-12%] right-[-6%] h-[24rem] w-[24rem] rounded-full bg-blue-500/15 blur-[110px]"
        animate={shouldReduceMotion ? undefined : { y: [0, -20, 0], x: [0, -28, 0] }}
        transition={
          shouldReduceMotion
            ? undefined
            : { repeat: Infinity, duration: 7.2, ease: "easeInOut" }
        }
      />

      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="w-full max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:p-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.26em] text-cyan-100/70"
          >
            <span>Portfolio Loading</span>
            <span>{resolvedProgress}%</span>
          </motion.div>

          <div className="mt-10 grid gap-8 md:grid-cols-[minmax(0,1.15fr)_280px] md:items-end">
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="text-4xl font-black leading-[0.92] tracking-[-0.06em] text-white sm:text-5xl md:text-7xl"
            >
              {resolvedDisplayText}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.14 }}
              className="space-y-3 rounded-[1.6rem] border border-white/10 bg-black/20 p-5"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/45">
                Session State
              </p>
              {loadingNotes.map((note) => (
                <div key={note} className="flex items-center gap-3 text-sm text-white/80">
                  <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.9)]" />
                  <span>{note}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="mt-10 space-y-4">
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.28em] text-white/55">
              <span>Loading Experience</span>
              <span>{resolvedProgress}%</span>
            </div>

            <div className="overflow-hidden rounded-full border border-white/10 bg-white/5 p-1.5">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${resolvedProgress}%` }}
                transition={{ ease: "easeOut", duration: 0.28 }}
                className="h-2.5 rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 shadow-[0_0_18px_rgba(56,189,248,0.45)]"
              />
            </div>

            <p className="text-sm leading-7 text-gray-300">
              A simple look into my work, projects, and the skills I&apos;m
              continuing to grow as a fresh graduate.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
