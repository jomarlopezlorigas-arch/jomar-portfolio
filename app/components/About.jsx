"use client";

import { motion } from "framer-motion";
import {
  FaServer,
  FaNetworkWired,
  FaMicrochip,
  FaCodeBranch,
  FaTerminal,
} from "react-icons/fa";
import SpotlightCard from "./ui/spotlight-card";
import { SectionReveal, StaggerItem, StaggerReveal } from "./ui/section-reveal";

export default function About() {
  const stats = [
    { icon: <FaServer className="text-blue-400" />, value: "4+ Yrs", label: "Infrastructure" },
    { icon: <FaCodeBranch className="text-purple-400" />, value: "15+", label: "Prod Deployments" },
    { icon: <FaNetworkWired className="text-cyan-400" />, value: "99.9%", label: "System Uptime" },
  ];

  return (
    <section id="about" className="relative mx-auto max-w-7xl overflow-hidden px-6 py-28">
      <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent" />
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-500/10 blur-[110px]" />

      <div className="grid items-start gap-16 lg:grid-cols-12">
        <SectionReveal className="relative lg:col-span-5" x={-26}>
          <SpotlightCard className="p-6 md:p-7">
            <div className="relative z-10 aspect-square rounded-[1.5rem] border border-white/10 bg-[#0a0a0a]/80 p-6 shadow-2xl">
              <div className="mb-6 flex items-center gap-2 border-b border-white/5 pb-4">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/50" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                  <div className="h-3 w-3 rounded-full bg-green-500/50" />
                </div>
                <span className="ml-2 font-mono text-[10px] uppercase tracking-widest text-gray-500">
                  sys_profile.sh
                </span>
              </div>

              <div className="space-y-4 font-mono text-sm leading-relaxed text-blue-100/80">
                <p className="font-bold italic text-blue-400">{`// The Full-Stack Engineer`}</p>
                <p className="border-l border-blue-500/30 pl-2">
                  <span className="text-purple-400">const</span> skills = [<br />
                  &nbsp;&nbsp;&quot;Cloud Infrastructure&quot;,<br />
                  &nbsp;&nbsp;&quot;System Architecture&quot;,<br />
                  &nbsp;&nbsp;&quot;Secure Auth Implementation&quot;,<br />
                  &nbsp;&nbsp;&quot;DB Optimization&quot;<br />
                  ];
                </p>
                <div className="flex justify-center pt-8">
                  <motion.div
                    animate={{ rotate: [0, 6, 0, -6, 0], scale: [1, 1.04, 1] }}
                    transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
                  >
                    <FaMicrochip className="text-8xl text-blue-500/15" />
                  </motion.div>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
              className="absolute -bottom-5 -right-2 z-20 hidden rounded-2xl border border-blue-500/20 bg-blue-600/10 p-6 backdrop-blur-xl md:block"
            >
              <p className="mb-1 text-4xl font-bold text-white">04</p>
              <p className="font-mono text-[10px] uppercase tracking-tighter text-blue-400">
                Years in Tech Industry
              </p>
            </motion.div>
          </SpotlightCard>
        </SectionReveal>

        <SectionReveal className="space-y-8 lg:col-span-7" x={30} delay={0.08}>
          <StaggerReveal className="space-y-8" staggerChildren={0.1}>
            <StaggerItem>
              <div className="space-y-4">
                <h2 className="text-sm font-mono uppercase tracking-[0.4em] text-blue-400">
                  Section_02: Introduction
                </h2>
                <h3 className="text-4xl font-bold leading-tight text-white md:text-5xl">
                  Solving problems with <br />
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Technical Precision.
                  </span>
                </h3>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="space-y-6 text-lg font-light leading-relaxed text-gray-400">
                <p>
                  I am an <span className="font-medium text-white">Information Technology Engineer</span>
                  specializing in full-stack architecture. My approach combines the rigor of IT infrastructure with the fluidity of modern web development.
                </p>
                <p>
                  I do not just write code; I design systems. Whether it is optimizing
                  <span className="text-blue-300"> Firebase clusters</span>, architecting
                  <span className="text-purple-300"> Next.js micro-frontends</span>, or securing
                  <span className="text-cyan-300"> Node.js environments</span>, my focus stays on scalability and high availability.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="grid gap-6 sm:grid-cols-3">
                {stats.map((stat) => (
                  <SpotlightCard key={stat.label} className="p-6">
                    <div className="text-3xl opacity-80 transition-transform duration-300 group-hover:scale-110">
                      {stat.icon}
                    </div>
                    <div className="mt-4 text-2xl font-black text-white">{stat.value}</div>
                    <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-gray-500">
                      {stat.label}
                    </div>
                  </SpotlightCard>
                ))}
              </div>
            </StaggerItem>

            <StaggerItem>
              <button className="group flex items-center gap-3 font-mono text-xs text-blue-400 transition-colors hover:text-white">
                <FaTerminal />
                <span>READ_FULL_DOCUMENTATION.PDF</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  -&gt;
                </motion.span>
              </button>
            </StaggerItem>
          </StaggerReveal>
        </SectionReveal>
      </div>
    </section>
  );
}
