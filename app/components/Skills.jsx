"use client";

import { motion } from "framer-motion";
import { Blocks, Cloud, Layers3, Sparkles, Workflow } from "lucide-react";
import { FaDatabase, FaReact, FaServer } from "react-icons/fa";
import {
  SiFirebase,
  SiNodedotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import useSafeReducedMotion from "../hooks/use-safe-reduced-motion";
import { SectionReveal } from "./ui/section-reveal";

const quickStats = [
  { label: "Tools Practiced", value: "06+", icon: <Layers3 size={16} /> },
  { label: "Main Stack", value: "Next + Node", icon: <Blocks size={16} /> },
  { label: "Cloud Basics", value: "Firebase / GCP", icon: <Cloud size={16} /> },
];

const skillGroups = [
  {
    id: "frontend",
    eyebrow: "Frontend",
    title: "Building interfaces I can keep improving.",
    summary:
      "These are the tools I use most when creating responsive pages, cleaner layouts, and student projects on the web.",
    accent:
      "from-cyan-400/25 via-sky-300/10 to-transparent",
    chips: ["Responsive UI", "Component practice", "Clean layouts"],
    skills: [
      {
        name: "React",
        note: "Reusable components",
        icon: <FaReact className="text-[2rem] text-sky-300" />,
      },
      {
        name: "TypeScript",
        note: "Safer code structure",
        icon: <SiTypescript className="text-[2rem] text-blue-400" />,
      },
      {
        name: "Tailwind CSS",
        note: "Fast styling workflow",
        icon: <SiTailwindcss className="text-[2rem] text-cyan-300" />,
      },
    ],
  },
  {
    id: "backend",
    eyebrow: "Backend",
    title: "Learning how the logic works behind the screen.",
    summary:
      "I use these tools to practice data handling, backend structure, deployment basics, and connecting frontend to backend.",
    accent:
      "from-emerald-400/25 via-teal-300/10 to-transparent",
    chips: ["API practice", "Database basics", "Project setup"],
    skills: [
      {
        name: "Node.js",
        note: "Backend practice",
        icon: <SiNodedotjs className="text-[2rem] text-green-400" />,
      },
      {
        name: "Firebase",
        note: "Auth and cloud tools",
        icon: <SiFirebase className="text-[2rem] text-yellow-400" />,
      },
      {
        name: "PostgreSQL",
        note: "Database learning",
        icon: <SiPostgresql className="text-[2rem] text-sky-300" />,
      },
    ],
  },
];

const extraSkills = [
  {
    name: "System Design",
    icon: <FaDatabase className="text-[1.5rem] text-cyan-300" />,
  },
  {
    name: "Backend Setup",
    icon: <FaServer className="text-[1.5rem] text-emerald-300" />,
  },
  {
    name: "Workflow",
    icon: <Workflow size={24} className="text-cyan-200" />,
  },
  {
    name: "UI Practice",
    icon: <Sparkles size={24} className="text-sky-300" />,
  },
];

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function LogoTile({ skill, index, shouldReduceMotion }) {
  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18, scale: 0.96 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 1.02 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      className="group rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_14px_50px_rgba(0,0,0,0.22)] backdrop-blur-xl"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
          {skill.icon}
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/30">
          skill
        </span>
      </div>

      <div className="mt-5">
        <p className="text-base font-semibold text-white">{skill.name}</p>
        <p className="mt-2 text-sm leading-6 text-gray-400">{skill.note}</p>
      </div>
    </motion.div>
  );
}

export default function TechSkills() {
  const shouldReduceMotion = useSafeReducedMotion();

  return (
    <section id="skills" className="relative mx-auto max-w-7xl overflow-hidden px-6 py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_24%),radial-gradient(circle_at_85%_25%,rgba(16,185,129,0.12),transparent_20%),linear-gradient(180deg,rgba(4,7,16,0.3)_0%,rgba(4,7,16,0)_35%,rgba(4,7,16,0.42)_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [mask-image:radial-gradient(circle_at_center,white,transparent_78%)]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <SectionReveal className="relative z-10 mb-14 border-b border-white/10 pb-10">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/15 bg-cyan-400/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.32em] text-cyan-100">
            <Workflow size={14} />
            Skills_Overview
          </div>

          <div className="space-y-4">
            <h2 className="max-w-4xl text-4xl font-black leading-[0.92] tracking-[-0.06em] text-white md:text-6xl">
              Technical{" "}
              <span className="bg-gradient-to-r from-cyan-200 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
                Proficiencies
              </span>
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-gray-300 md:text-base">
              A more visual skills section focused on the tools I use most,
              with simple motion and logo-based cards instead of loading bars.
            </p>
          </div>
        </div>
      </SectionReveal>

      <div className="relative z-10 grid gap-6">
        <SectionReveal className="rounded-[2rem] border border-white/10 bg-[#07101b]/90 p-6 shadow-[0_28px_120px_rgba(0,0,0,0.4)] backdrop-blur-xl md:p-8">
          <div className="grid gap-4 sm:grid-cols-3">
            {quickStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4"
              >
                <div className="flex items-center gap-2 text-cyan-200/80">
                  {stat.icon}
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em]">
                    {stat.label}
                  </span>
                </div>
                <p className="mt-4 text-lg font-bold text-white">{stat.value}</p>
              </motion.div>
            ))}
          </div>
        </SectionReveal>

        <div className="grid gap-6 xl:grid-cols-2">
          {skillGroups.map((group) => (
            <SectionReveal
              key={group.id}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#060b14]/90 p-6 shadow-[0_24px_100px_rgba(0,0,0,0.38)] backdrop-blur-xl md:p-7"
            >
              <div className={cn("pointer-events-none absolute inset-0 bg-gradient-to-br", group.accent)} />
              <div className="relative">
                <div className="mb-6 space-y-4">
                  <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/65">
                      {group.eyebrow}
                    </span>
                  </div>

                  <div>
                    <h3 className="max-w-xl text-2xl font-black tracking-tight text-white md:text-3xl">
                      {group.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-gray-300">
                      {group.summary}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.chips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/60"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {group.skills.map((skill, index) => (
                    <LogoTile
                      key={skill.name}
                      skill={skill}
                      index={index}
                      shouldReduceMotion={shouldReduceMotion}
                    />
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_20px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {extraSkills.map((item, index) => (
              <motion.div
                key={item.name}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-center gap-3 rounded-full border border-white/10 bg-black/20 px-4 py-3"
              >
                <span>{item.icon}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/70">
                  {item.name}
                </span>
              </motion.div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
