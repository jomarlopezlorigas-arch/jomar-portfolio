"use client";

import { motion } from "framer-motion";
import { 
  FaReact, FaNetworkWired, FaDatabase, FaServer, FaCode, FaMicrochip 
} from "react-icons/fa";
import { 
  SiTailwindcss, SiJavascript, SiFirebase, SiNodedotjs, SiTypescript 
} from "react-icons/si";

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
    ]
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
    ]
  }
];

export default function TechSkills() {
  return (
    <section id="skills" className="py-28 px-6 max-w-7xl mx-auto relative">
      {/* Background Tech Mesh */}
      <div className="absolute inset-0 opacity-5 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      <div className="relative z-10 mb-20 text-center lg:text-left lg:flex lg:items-end lg:justify-between border-b border-white/10 pb-10">
        <div>
          <h2 className="text-sm font-mono text-blue-400 uppercase tracking-[0.5em] mb-4">Capability_Matrix_v2</h2>
          <h3 className="text-5xl font-black text-white tracking-tighter italic">Technical Proficiencies</h3>
        </div>
        <p className="text-gray-500 font-mono text-xs mt-4 lg:mt-0 max-w-xs">
          // Quantitative assessment of full-stack engineering capabilities across distributed systems.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {skillCategories.map((category) => (
          <div key={category.id} className="relative group">
            {/* Glass Card Container */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000" />
            
            <div className="relative p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl h-full">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  {category.icon}
                </div>
                <h4 className="text-xl font-bold text-white tracking-tight">{category.title}</h4>
              </div>

              <div className="space-y-8">
                {category.skills.map((skill, index) => (
                  <div key={index} className="relative">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-sm font-medium text-gray-200">{skill.name}</span>
                      </div>
                      <span className="text-[10px] font-mono text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded border border-blue-400/20">
                        {skill.level}%_LOAD
                      </span>
                    </div>

                    {/* Industrial Progress Bar */}
                    <div className="h-2 w-full bg-white/5 rounded-full relative overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, ease: "circOut" }}
                        className="absolute h-full bg-gradient-to-r from-blue-600 via-purple-500 to-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.4)]"
                      />
                      {/* Grid Pattern Overlay on bar */}
                      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,transparent_90%,rgba(0,0,0,0.3)_90%)] bg-[length:10px_100%]" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute top-4 right-4 text-white/5">
                <FaMicrochip size={40} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dynamic Status Bar */}
      <div className="mt-12 p-4 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-center gap-8 text-[10px] font-mono text-gray-500">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          SYSTEM_OPTIMIZED
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          EDGE_LATENCY: 24ms
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
          UPTIME: 99.99%
        </div>
      </div>
    </section>
  );
}