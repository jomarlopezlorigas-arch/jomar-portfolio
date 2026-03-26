"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+";
const logs = [
  "[SYS] INITIALIZING_ENCRYPTION_LAYER",
  "[NET] ESTABLISHING_SECURE_HANDSHAKE",
  "[DEV] COMPILING_REACT_RESOURCES",
  "[UX] RENDERING_VISUAL_INTERFACE",
];
const statusPanels = [
  { label: "Core", value: "Frontend + Backend", accent: "text-blue-200" },
  { label: "Mode", value: "Interactive Portfolio", accent: "text-cyan-200" },
  { label: "Theme", value: "Cyber Systems", accent: "text-violet-200" },
  { label: "State", value: "Production Ready", accent: "text-emerald-200" },
];

export default function TechCloudIntro() {
  const [progress, setProgress] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const targetText = "JOMAR.DEV";

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) =>
        prev >= 100 ? 100 : prev + Math.floor(Math.random() * 10 + 6)
      );
    }, 120);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
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
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.03, filter: "blur(8px)" }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
      className="fixed inset-0 z-[999] overflow-hidden bg-[#02040a] px-6 py-6 md:px-12 md:py-10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.2),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.18),transparent_28%),linear-gradient(180deg,#02040a_0%,#03060d_55%,#010205_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.12]" />

      <motion.div
        className="absolute left-[-12%] top-[-18%] h-[34rem] w-[34rem] rounded-full bg-blue-500/20 blur-[140px]"
        animate={{ y: [0, 36, 0], x: [0, 50, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-16%] right-[-8%] h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/12 blur-[120px]"
        animate={{ y: [0, -34, 0], x: [0, -44, 0] }}
        transition={{ repeat: Infinity, duration: 8.5, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-y-0 left-[-30%] w-[40%] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)]"
        animate={{ x: ["0%", "220%"] }}
        transition={{ repeat: Infinity, duration: 3.4, ease: "linear" }}
      />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.18)_50%)] bg-[length:100%_4px] opacity-35" />

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="space-y-2 font-mono text-[10px] uppercase tracking-[0.25em] text-blue-200/75"
          >
            <p>Deployment_ID: 0x82FA9</p>
            <p>Status: System_Check_In_Progress</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="space-y-2 text-left font-mono text-[10px] uppercase tracking-[0.25em] text-blue-200/60 md:text-right"
          >
            <p>Loc: 14.5995 N, 120.9842 E</p>
            <p>Rel: 2026.1.0</p>
          </motion.div>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="inline-flex items-center gap-3 rounded-full border border-blue-400/15 bg-blue-500/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.32em] text-blue-100"
            >
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.9)]" />
              Boot Sequence Active
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.14 }}
              className="text-5xl font-black tracking-[-0.08em] text-white sm:text-6xl md:text-8xl"
            >
              {displayText || targetText}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="max-w-2xl border-l border-blue-400/20 pl-4 text-sm leading-relaxed text-gray-400 md:text-base"
            >
              Combining interactive UI, cloud-focused thinking, and system-level
              structure into a single portfolio experience.
            </motion.p>

            <div className="space-y-2">
              {logs.map((log, index) => (
                <motion.p
                  key={log}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.32 + index * 0.12, duration: 0.32 }}
                  className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-gray-400"
                >
                  <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.75)]" />
                  {log}
                </motion.p>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {statusPanels.map((panel, index) => (
              <motion.div
                key={panel.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.36, delay: 0.26 + index * 0.08 }}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-gray-500">
                  {panel.label}
                </p>
                <p className={`mt-3 text-sm font-semibold md:text-base ${panel.accent}`}>
                  {panel.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid items-end gap-8 md:grid-cols-[minmax(0,1fr)_260px]">
          <div className="space-y-4">
            <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.25em] text-blue-200">
              <span className="flex items-center gap-3">
                <motion.span
                  animate={{ opacity: [1, 0.3, 1], scale: [1, 0.85, 1] }}
                  transition={{ repeat: Infinity, duration: 1.2 }}
                  className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.9)]"
                />
                Uploading_Portfolio_Core
              </span>
              <span>{Math.min(progress, 100)}%</span>
            </div>

            <div className="overflow-hidden rounded-full border border-white/10 bg-white/5 p-1">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: "easeOut", duration: 0.28 }}
                className="h-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 shadow-[0_0_18px_rgba(59,130,246,0.55)]"
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.45 }}
            className="hidden rounded-[1.5rem] border border-white/10 bg-black/25 px-5 py-4 text-right font-mono text-[10px] uppercase tracking-[0.28em] text-gray-500 md:block"
          >
            <p>Full-Stack Architecture</p>
            <p className="mt-2">Cloud Infrastructure / UI/UX</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
