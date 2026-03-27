"use client";

import { motion } from "framer-motion";
import {
  FaCodeBranch,
  FaMicrochip,
  FaNetworkWired,
  FaServer,
  FaTerminal,
} from "react-icons/fa";
import { ArrowUpRight, Sparkles } from "lucide-react";
import SpotlightCard from "./ui/spotlight-card";
import {
  SectionReveal,
  StaggerItem,
  StaggerReveal,
} from "./ui/section-reveal";

const stats = [
  {
    icon: <FaServer className="text-cyan-300" />,
    value: "4+",
    label: "Years Building",
    note: "production-minded systems",
  },
  {
    icon: <FaCodeBranch className="text-blue-300" />,
    value: "15+",
    label: "Deployments",
    note: "shipped across real projects",
  },
  {
    icon: <FaNetworkWired className="text-fuchsia-300" />,
    value: "99.9%",
    label: "Uptime Focus",
    note: "reliability-first thinking",
  },
];

const capabilityCards = [
  {
    title: "System Design",
    body: "I approach products as systems, not isolated screens, so architecture, maintainability, and clarity stay aligned from the start.",
  },
  {
    title: "Scalable Delivery",
    body: "From database structure to frontend composition, I build with future growth, team handoff, and operational stability in mind.",
  },
  {
    title: "Secure Execution",
    body: "Authentication, environment setup, and production discipline are part of the implementation, not afterthoughts layered on later.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-7xl overflow-hidden px-6 py-28"
    >
      <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
      <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 bottom-8 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-[140px]" />

      <div className="grid items-start gap-10 lg:grid-cols-12">
        <SectionReveal className="lg:col-span-7" x={-24}>
          <StaggerReveal className="space-y-8" staggerChildren={0.1}>
            <StaggerItem>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/10 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.34em] text-cyan-200 shadow-[0_0_40px_rgba(34,211,238,0.12)]">
                <Sparkles size={14} />
                Section_02 / About_Me
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="max-w-3xl space-y-5">
                <h2 className="text-4xl font-black leading-[0.92] tracking-tight text-white md:text-6xl">
                  I build digital products
                  <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-fuchsia-400 bg-clip-text text-transparent">
                    with system-level thinking.
                  </span>
                </h2>
                <p className="max-w-2xl text-lg leading-8 text-gray-300 md:text-xl">
                  I&apos;m <span className="font-semibold text-white">Jomar Lorigas</span>,
                  an Information Technology Engineer focused on full-stack
                  development, infrastructure-aware architecture, and interfaces
                  that feel polished under real-world pressure.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="grid gap-4 md:grid-cols-3">
                {stats.map((stat) => (
                  <SpotlightCard key={stat.label} className="p-5 md:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-2xl">
                        {stat.icon}
                      </div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-gray-500">
                        live
                      </p>
                    </div>
                    <p className="mt-6 text-3xl font-black text-white md:text-4xl">
                      {stat.value}
                    </p>
                    <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.24em] text-cyan-200">
                      {stat.label}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-gray-400">
                      {stat.note}
                    </p>
                  </SpotlightCard>
                ))}
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="grid gap-4 md:grid-cols-3">
                {capabilityCards.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-cyan-300/80">
                      {item.title}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-gray-300">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </StaggerItem>
          </StaggerReveal>
        </SectionReveal>

        <SectionReveal
          className="relative lg:col-span-5"
          x={28}
          delay={0.08}
          scale={0.98}
        >
          <div className="relative">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4.4, ease: "easeInOut" }}
              className="absolute -left-4 top-8 z-20 hidden rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-100 shadow-[0_20px_60px_rgba(34,211,238,0.12)] lg:block"
            >
              Architecture-led
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4.8,
                ease: "easeInOut",
                delay: 0.3,
              }}
              className="absolute -right-4 bottom-10 z-20 hidden rounded-2xl border border-fuchsia-400/20 bg-fuchsia-400/10 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.24em] text-fuchsia-100 shadow-[0_20px_60px_rgba(217,70,239,0.12)] lg:block"
            >
              UI with discipline
            </motion.div>

            <SpotlightCard className="relative p-4 md:p-5">
              <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#050910]/95 p-5">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.14),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.12),transparent_30%)]" />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:34px_34px]" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1.5">
                        <span className="h-3 w-3 rounded-full bg-red-400/70" />
                        <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                        <span className="h-3 w-3 rounded-full bg-green-400/70" />
                      </div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-500">
                        engineer.profile
                      </p>
                    </div>
                    <FaTerminal className="text-cyan-300/80" />
                  </div>

                  <div className="space-y-5 py-6">
                    <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5">
                      <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-cyan-300">
                        Core Stack
                      </p>
                      <div className="mt-4 space-y-3 font-mono text-sm text-blue-100/85">
                        <p>
                          <span className="text-fuchsia-300">const</span> focus = [
                        </p>
                        <p className="pl-4">&quot;Next.js interfaces&quot;,</p>
                        <p className="pl-4">&quot;Node.js backends&quot;,</p>
                        <p className="pl-4">&quot;secure auth flows&quot;,</p>
                        <p className="pl-4">&quot;scalable data models&quot;</p>
                        <p>];</p>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5">
                        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-cyan-300/80">
                          Approach
                        </p>
                        <p className="mt-4 text-sm leading-7 text-gray-300">
                          I connect backend logic, deployment thinking, and
                          frontend clarity into one cohesive build process.
                        </p>
                      </div>

                      <div className="flex min-h-[160px] items-center justify-center rounded-[1.4rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10 p-5">
                        <motion.div
                          animate={{
                            rotate: [0, 8, 0, -8, 0],
                            scale: [1, 1.04, 1],
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 6,
                            ease: "easeInOut",
                          }}
                        >
                          <FaMicrochip className="text-8xl text-cyan-300/25" />
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/10 pt-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-gray-500">
                      Available for impactful builds
                    </p>
                    <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/10 px-3 py-1.5 text-[11px] font-semibold text-cyan-100">
                      Let&apos;s build
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
