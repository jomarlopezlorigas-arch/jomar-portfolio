"use client";

import { useEffect, useRef, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Github, Mail, Code2, Terminal, Cpu } from "lucide-react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiFirebase, SiTailwindcss, SiPostgresql } from "react-icons/si";

// Import the Game Component
import CyberDefense from "./CyberDefense"; 

export default function Hero() {
  const [isGameActive, setGameActive] = useState(false);
  const photoRef = useRef(null);

  // Initialize Tilt Effect
  useEffect(() => {
    const tiltNode = photoRef.current;
    if (tiltNode) {
      VanillaTilt.init(tiltNode, {
        max: 10,
        speed: 400,
        glare: true,
        "max-glare": 0.1,
        scale: 1.02,
        gyroscope: true,
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
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
        <div className="absolute w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full top-[-10%] left-[-10%]" />
        <div className="absolute w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full bottom-[-10%] right-[-5%]" />
      </div>

      {/* --- SYSTEM METADATA OVERLAYS --- */}
      <div className="absolute top-24 left-10 hidden lg:flex flex-col gap-2 font-mono text-[10px] text-blue-500/40 uppercase tracking-[0.2em]">
        <span><Terminal size={10} className="inline mr-2"/>INIT_SEQUENCE_START</span>
        <span>LOADING_MODULES... OK</span>
      </div>

      <div className="max-w-7xl w-full grid lg:grid-cols-12 gap-12 items-center z-10 relative">
        
        {/* --- LEFT: TEXT CONTENT --- */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 relative z-20"
        >
          <div className="flex items-center gap-2 mb-6 text-blue-400 font-mono text-xs md:text-sm">
            <div className="px-2 py-1 rounded bg-blue-500/10 border border-blue-500/20">
              <Code2 size={14} className="inline mr-2" />
              <span className="tracking-widest uppercase">Full_Stack_Engineer</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter mb-6 relative z-30">
            Engineering <br />
            {/* FIXED CLICKABLE SPAN */}
            <span 
              onClick={(e) => {
                e.stopPropagation();
                setGameActive(true);
              }}
              className="relative inline-block cursor-pointer group select-none transition-transform active:scale-95 pointer-events-auto z-[100]"
            >
              <span className={`bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent transition-all duration-300 ${isGameActive ? "text-red-500 bg-none brightness-150" : "group-hover:brightness-125"}`}>
                {isGameActive ? "SYSTEM_BREACH_DETECTED" : "Scalable Systems"}
              </span>
              
              <span className="absolute -top-6 left-0 text-[10px] font-mono text-red-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black/90 px-2 py-0.5 rounded border border-red-500/30 pointer-events-none">
                 ⚠ CLICK_TO_INIT_DEFENSE
              </span>
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed font-light border-l-2 border-white/10 pl-6">
            I’m <span className="text-white font-medium">Jomar Lorigas</span>. I bridge the gap between complex IT infrastructure and high-performance user experiences. 
          </p>

          {/* Tech Nodes */}
          <div className="flex flex-wrap gap-3 mt-10">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 px-3 py-2 rounded bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all group cursor-default"
              >
                <span className="text-lg opacity-70 group-hover:opacity-100 transition-opacity">
                  {tech.icon}
                </span>
                <span className="text-[10px] font-mono text-gray-400 group-hover:text-blue-200 uppercase tracking-wider">{tech.name}</span>
              </div>
            ))}
          </div>

          {/* CTA Group */}
          <div className="mt-12 flex flex-wrap gap-5 items-center relative z-40">
            <a
              href="/Resume.pdf"
              className="relative overflow-hidden group flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Terminal size={18} /> Initialize CV
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </a>
            
            <div className="flex gap-3">
              <a href="https://github.com" target="_blank" className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500/50 hover:text-blue-400 transition-all cursor-pointer pointer-events-auto">
                <Github size={20} />
              </a>
              <a href="mailto:your@email.com" className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500/50 hover:text-blue-400 transition-all cursor-pointer pointer-events-auto">
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
          className="lg:col-span-5 flex justify-center relative z-10"
        >
          <div className="absolute inset-0 -z-10 opacity-30 hidden lg:block">
            <svg width="100%" height="100%" viewBox="0 0 400 400">
               <path d="M 200 200 L 400 50" stroke="#3b82f6" strokeWidth="1" fill="none" strokeDasharray="5,5" />
               <path d="M 200 200 L 400 350" stroke="#a855f7" strokeWidth="1" fill="none" strokeDasharray="5,5" />
            </svg>
          </div>

          <div 
            ref={photoRef}
            className="relative w-full max-w-[360px] aspect-square rounded-2xl p-1 bg-gradient-to-br from-blue-500/30 to-purple-500/30 overflow-hidden backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-[#0a0a0a]/80 rounded-2xl z-0" />
            <Image
              src="/profile.png"
              alt="Jomar Lorigas"
              fill
              className="relative z-10 object-cover opacity-90 hover:opacity-100 transition-all duration-500 rounded-xl"
            />
          </div>
        </motion.div>
      </div>

      {/* --- EASTER EGG GAME OVERLAY --- */}
      <AnimatePresence>
        {isGameActive && <CyberDefense onClose={() => setGameActive(false)} />}
      </AnimatePresence>
    </section>
  );
}