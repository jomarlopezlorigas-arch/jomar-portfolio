"use client";

import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Mail, ShieldCheck, Zap, Server, Code2 } from "lucide-react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiFirebase, SiTailwindcss, SiPostgresql } from "react-icons/si";

export default function Hero() {
  const photoRef = useRef(null);

  useEffect(() => {
    const tiltNode = photoRef.current;
    if (tiltNode) {
      VanillaTilt.init(tiltNode, {
        max: 12,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
        scale: 1.02,
      });
    }
    return () => tiltNode?.vanillaTilt?.destroy();
  }, []);

  const techStack = [
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "React Native", icon: <FaReact className="text-blue-400" /> },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-[#020202]">
      
      {/* --- IT INFRASTRUCTURE BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
        
        {/* Your Original Color Palette Gels */}
        <div className="absolute w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full top-[-10%] left-[-5%]" />
        <div className="absolute w-[400px] h-[400px] bg-purple-600/10 blur-[120px] rounded-full bottom-[-10%] right-[-5%]" />
      </div>

      {/* --- SYSTEM METADATA OVERLAYS --- */}
      <div className="absolute top-10 left-10 hidden lg:block font-mono text-[10px] text-blue-500/40 uppercase tracking-[0.3em]">
       
      </div>
      <div className="absolute bottom-10 right-10 hidden lg:block font-mono text-[10px] text-purple-500/40 uppercase tracking-[0.3em] text-right">
        <p>Status: Operating_Optimal</p>
        <p>© 2026 Jomar.Dev</p>
      </div>

      <div className="max-w-7xl w-full grid lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* --- LEFT: TEXT CONTENT --- */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          <div className="flex items-center gap-2 mb-6 text-blue-400 font-mono text-sm">
            <Code2 size={16} />
            <span className="tracking-widest uppercase">Information Technology Professional</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter">
            Engineering <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Scalable Systems
            </span>
          </h1>

          <p className="mt-8 text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed font-light">
            I’m <span className="text-white font-medium">Jomar Lorigas</span>. I bridge the gap between complex IT infrastructure and high-performance user experiences. 
          </p>

          {/* Tech Nodes */}
          <div className="flex flex-wrap gap-3 mt-8">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors group cursor-default"
              >
                <span className="text-xl opacity-70 group-hover:opacity-100 transition-opacity">
                  {tech.icon}
                </span>
                <span className="text-xs font-mono text-gray-300 uppercase tracking-tighter">{tech.name}</span>
              </div>
            ))}
          </div>

          {/* CTA Group */}
          <div className="mt-10 flex flex-wrap gap-5 items-center">
            <a
              href="/Resume.pdf"
              className="flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]"
            >
              Access Portfolio CV
            </a>
            
            <div className="flex gap-4">
              <a href="https://github.com/..." className="p-4 rounded-xl bg-white/5 border border-white/10 hover:text-blue-400 transition-all">
                <Github size={20} />
              </a>
              <a href="mailto:..." className="p-4 rounded-xl bg-white/5 border border-white/10 hover:text-blue-400 transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* --- RIGHT: THE SYSTEM NODE (PHOTO) --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div 
            ref={photoRef}
            className="relative w-full max-w-[380px] aspect-square rounded-3xl p-[2px] bg-gradient-to-br from-blue-500/50 to-purple-500/50 overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-[#0a0a0a] rounded-3xl" />
            
            <Image
              src="/profile.png"
              alt="Jomar Lorigas"
              fill
              className="object-cover opacity-90 grayscale hover:grayscale-0 transition-all duration-500"
            />

            {/* IT Status Badges inside the Frame */}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <div className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-green-500/50 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-mono text-green-400 uppercase">Secure_Node</span>
              </div>
            </div>

            <div className="absolute bottom-4 left-4 right-4 bg-black/40 backdrop-blur-xl border border-white/10 p-4 rounded-2xl">
              <div className="flex justify-between items-center text-[10px] font-mono text-blue-300">
                <span>// FULL_STACK_INFRA</span>
                <span>ID_8829</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}