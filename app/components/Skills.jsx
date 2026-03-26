"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNetworkWired,
  FaDatabase,
  FaServer,
  FaCode,
  FaMicrochip,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiNodedotjs,
  SiTypescript,
} from "react-icons/si";
import SpotlightCard from "./ui/spotlight-card";
import { SectionReveal, StaggerItem, StaggerReveal } from "./ui/section-reveal";

const skillCategories = [
  {
    id: "frontend",
    title: "Client-Side Architecture",
    icon: <FaCode className="text-blue-400" />,
    skills: [
      { name: "React / Next.js", level: 92, icon: <FaReact className="text-blue-400" /> },
      { name: "TypeScript", level: 88, icon: <SiTypescript className="text-blue-500" /> },
      { name: "Tailwind CSS", level: 95, icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "React Native", level: 82, icon: <FaReact className="text-blue-300" /> },
    ],
  },
  {
    id: "backend",
    title: "Infrastructure & Logic",
    icon: <FaServer className="text-purple-400" />,
    skills: [
      { name: "Firebase / GCP", level: 90, icon: <SiFirebase className="text-yellow-500" /> },
      { name: "Node.js Engine", level: 85, icon: <SiNodedotjs className="text-green-500" /> },
      { name: "System Design", level: 80, icon: <FaDatabase className="text-blue-500" /> },
      { name: "API Gateway", level: 88, icon: <FaNetworkWired className="text-gray-400" /> },
    ],
  },
];

export default function TechSkills() {
  return (
    <section id="skills" className="relative mx-auto max-w-7xl px-6 py-28">
      <div className="absolute inset-0 opacity-5 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <SectionReveal className="relative z-10 mb-20 border-b border-white/10 pb-10 lg:flex lg:items-end lg:justify-between">
        <div>
          <h2 className="mb-4 text-sm font-mono uppercase tracking-[0.5em] text-blue-400">
            Capability_Matrix_v2
          </h2>
          <h3 className="text-5xl font-black tracking-tighter text-white">
            Technical <span className="bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent">Proficiencies</span>
          </h3>
        </div>
        <p className="mt-4 max-w-sm font-mono text-xs text-gray-500 lg:mt-0">
          {`// Quantitative assessment of full-stack engineering capabilities across modern product systems.`}
        </p>
      </SectionReveal>

      <StaggerReveal className="grid gap-8 lg:grid-cols-2" staggerChildren={0.12}>
        {skillCategories.map((category) => (
          <StaggerItem key={category.id}>
            <SpotlightCard className="h-full p-8">
              <div className="flex items-center gap-4 mb-10">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  {category.icon}
                </div>
                <h4 className="text-xl font-bold tracking-tight text-white">{category.title}</h4>
              </div>

              <div className="space-y-8">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="relative">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-sm font-medium text-gray-200">{skill.name}</span>
                      </div>
                      <span className="rounded border border-blue-400/20 bg-blue-400/10 px-2 py-0.5 font-mono text-[10px] text-blue-400">
                        {skill.level}%_LOAD
                      </span>
                    </div>

                    <div className="relative h-2 w-full overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 1.4, ease: "circOut" }}
                        className="absolute h-full bg-gradient-to-r from-blue-600 via-purple-500 to-blue-400 shadow-[0_0_14px_rgba(59,130,246,0.45)]"
                      />
                      <motion.div
                        className="absolute inset-y-0 w-16 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.55),transparent)]"
                        animate={{ x: ["-120%", "620%"] }}
                        transition={{ repeat: Infinity, duration: 2.6, ease: "linear" }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute right-5 top-5 text-white/5">
                <FaMicrochip size={42} />
              </div>
            </SpotlightCard>
          </StaggerItem>
        ))}
      </StaggerReveal>

      <SectionReveal className="mt-12">
        <SpotlightCard className="flex flex-wrap items-center justify-center gap-8 rounded-2xl p-4 font-mono text-[10px] text-gray-500">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
            SYSTEM_OPTIMIZED
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            EDGE_LATENCY: 24ms
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
            UPTIME: 99.99%
          </div>
        </SpotlightCard>
      </SectionReveal>
    </section>
  );
}
