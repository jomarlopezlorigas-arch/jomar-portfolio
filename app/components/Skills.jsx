"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Blocks,
  Cloud,
  Cpu,
  Layers3,
  Workflow,
} from "lucide-react";
import {
  FaDatabase,
  FaNetworkWired,
  FaReact,
  FaServer,
} from "react-icons/fa";
import {
  SiFirebase,
  SiNodedotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { SectionReveal, StaggerItem, StaggerReveal } from "./ui/section-reveal";

const capabilityStats = [
  { label: "Tools Practiced", value: "06+", icon: <Layers3 size={16} /> },
  { label: "Main Stack", value: "Next + Node", icon: <Blocks size={16} /> },
  { label: "Cloud Basics", value: "Firebase / GCP", icon: <Cloud size={16} /> },
];

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Skills",
    eyebrow: "Interface building",
    icon: <FaReact className="text-sky-300" />,
    accent: "from-sky-400/30 via-cyan-300/15 to-transparent",
    borderAccent: "border-sky-300/20",
    summary:
      "The tools I use to build responsive interfaces and practice creating cleaner user experiences.",
    tools: ["React / Next.js", "TypeScript", "Tailwind CSS", "React Native"],
    metrics: [
      { label: "UI Systems", value: "92%" },
      { label: "Confidence", value: "88%" },
    ],
    skills: [
      { name: "React / Next.js", level: 92, icon: <FaReact className="text-sky-300" /> },
      { name: "TypeScript", level: 88, icon: <SiTypescript className="text-blue-400" /> },
      { name: "Tailwind CSS", level: 95, icon: <SiTailwindcss className="text-cyan-300" /> },
      { name: "React Native", level: 82, icon: <FaReact className="text-blue-300" /> },
    ],
  },
  {
    id: "backend",
    title: "Backend Skills",
    eyebrow: "Logic and setup",
    icon: <FaServer className="text-emerald-300" />,
    accent: "from-emerald-400/30 via-teal-300/15 to-transparent",
    borderAccent: "border-emerald-300/20",
    summary:
      "The backend and system topics I&apos;ve been learning through projects, school work, and practice builds.",
    tools: ["Firebase / GCP", "Node.js", "System Design", "API Gateway"],
    metrics: [
      { label: "Cloud Practice", value: "90%" },
      { label: "API Practice", value: "88%" },
    ],
    skills: [
      { name: "Firebase / GCP", level: 90, icon: <SiFirebase className="text-yellow-400" /> },
      { name: "Node.js Engine", level: 85, icon: <SiNodedotjs className="text-green-400" /> },
      { name: "System Design", level: 80, icon: <FaDatabase className="text-cyan-300" /> },
      { name: "API Gateway", level: 88, icon: <FaNetworkWired className="text-slate-300" /> },
    ],
  },
];

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function SkillMeter({ skill, index, shouldReduceMotion }) {
  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="rounded-[1.4rem] border border-white/10 bg-black/20 p-4 transition duration-300 hover:border-white/20 hover:bg-white/[0.04]"
    >
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="text-lg">{skill.icon}</span>
          <div>
            <p className="text-sm font-semibold text-white">{skill.name}</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/35">
              Capability score
            </p>
          </div>
        </div>
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/55">
          {skill.level}%
        </span>
      </div>

      <div className="relative h-2 overflow-hidden rounded-full bg-white/8">
        <motion.div
          initial={shouldReduceMotion ? false : { scaleX: 0 }}
          whileInView={shouldReduceMotion ? undefined : { scaleX: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.08 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          style={{ width: `${skill.level}%`, transformOrigin: "left center" }}
          className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 shadow-[0_0_18px_rgba(56,189,248,0.45)]"
        />
      </div>
    </motion.div>
  );
}

export default function TechSkills() {
  const shouldReduceMotion = useReducedMotion();

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
              A quick look at the tools and areas I&apos;ve been learning as a
              fresh graduate building my confidence through real projects.
            </p>
          </div>
        </div>
      </SectionReveal>

      <div className="relative z-10 grid gap-6">
        <SectionReveal className="rounded-[2rem] border border-white/10 bg-[#07101b]/90 p-6 shadow-[0_28px_120px_rgba(0,0,0,0.4)] backdrop-blur-xl md:p-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-cyan-200/70">
              <Cpu size={14} />
              Learning Overview
            </div>

            <div className="space-y-4">
              <h3 className="max-w-3xl text-3xl font-black tracking-tight text-white md:text-5xl">
                Growing my skills in
                <span className="text-cyan-300"> frontend, backend, and modern tools.</span>
              </h3>
              <p className="max-w-3xl text-sm leading-7 text-gray-300 md:text-base">
                These are the technologies I&apos;ve been using the most while
                building portfolio work, school projects, and personal practice.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {capabilityStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                  whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: 0.08 + index * 0.07 }}
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
          </div>
        </SectionReveal>

        <StaggerReveal className="grid gap-6" staggerChildren={0.08}>
          {skillCategories.map((category) => (
            <StaggerItem key={category.id}>
              <motion.article
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                transition={{ duration: 0.28 }}
                className={cn(
                  "group relative overflow-hidden rounded-[2rem] border bg-[#060b14]/90 p-6 shadow-[0_24px_100px_rgba(0,0,0,0.38)] backdrop-blur-xl md:p-7",
                  category.borderAccent
                )}
              >
                <div className={cn("pointer-events-none absolute inset-0 bg-gradient-to-br opacity-100", category.accent)} />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_28%,transparent_72%,rgba(255,255,255,0.03))]" />

                <div className="relative space-y-6">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="space-y-3">
                      <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2">
                        <span className="text-lg">{category.icon}</span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/65">
                          {category.eyebrow}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-black tracking-tight text-white">
                          {category.title}
                        </h3>
                        <p className="mt-3 max-w-xl text-sm leading-7 text-gray-300">
                          {category.summary}
                        </p>
                      </div>
                    </div>

                    <div className="grid min-w-[150px] gap-3">
                      {category.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="rounded-[1.2rem] border border-white/10 bg-black/20 px-4 py-3 text-right"
                        >
                          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/40">
                            {metric.label}
                          </p>
                          <p className="mt-2 text-lg font-bold text-white">{metric.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

              <div className="flex flex-wrap gap-2">
                    {category.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/65 transition duration-300 group-hover:border-white/20 group-hover:text-white/85"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="grid gap-4">
                    {category.skills.map((skill, index) => (
                      <SkillMeter
                        key={skill.name}
                        skill={skill}
                        index={index}
                        shouldReduceMotion={shouldReduceMotion}
                      />
                    ))}
                  </div>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>

      <SectionReveal className="relative z-10 mt-8">
        <div className="flex flex-wrap items-center gap-3 rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-4 shadow-[0_20px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl">
          {[
            "Motion tuned for clarity",
            "Student growth mindset",
            "Responsive layouts",
            "Still learning every project",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-black/20 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-white/60"
            >
              {item}
            </span>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
