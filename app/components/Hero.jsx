"use client";

import { useEffect, useRef, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Github, Mail, Code2, Terminal } from "lucide-react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiFirebase,
  SiTailwindcss,
  SiPostgresql,
} from "react-icons/si";
import BackgroundLines from "./ui/background-lines";
import CyberDefense from "./CyberDefense";

export default function Hero() {
  const [isGameActive, setGameActive] = useState(false);
  const photoRef = useRef(null);

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
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-transparent px-6">
      <BackgroundLines className="flex min-h-screen w-full items-center justify-center">
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-10" />
          <div className="absolute left-[-10%] top-[-12%] h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-5%] h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[120px]" />
        </div>

        <div className="absolute left-10 top-24 hidden flex-col gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-blue-500/40 lg:flex">
          <span>
            <Terminal size={10} className="mr-2 inline" />
            INIT_SEQUENCE_START
          </span>
          <span>LOADING_MODULES... OK</span>
        </div>

        <div className="relative z-10 grid w-full max-w-7xl items-center gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-20 lg:col-span-7"
          >
            <div className="mb-6 flex items-center gap-2 font-mono text-xs text-blue-400 md:text-sm">
              <div className="rounded border border-blue-500/20 bg-blue-500/10 px-2 py-1">
                <Code2 size={14} className="mr-2 inline" />
                <span className="tracking-widest uppercase">
                  Full_Stack_Engineer
                </span>
              </div>
            </div>

            <h1 className="relative z-30 mb-6 text-5xl font-black leading-[0.9] tracking-tighter text-white md:text-7xl">
              Engineering <br />
              <span
                onClick={(event) => {
                  event.stopPropagation();
                  setGameActive(true);
                }}
                className="group relative z-[100] inline-block cursor-pointer select-none transition-transform active:scale-95"
              >
                <span
                  className={`bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent transition-all duration-300 ${
                    isGameActive
                      ? "bg-none text-red-500 brightness-150"
                      : "group-hover:brightness-125"
                  }`}
                >
                  {isGameActive ? "SYSTEM_BREACH_DETECTED" : "Scalable Systems"}
                </span>

                <span className="absolute -top-6 left-0 whitespace-nowrap rounded border border-red-500/30 bg-black/90 px-2 py-0.5 font-mono text-[10px] text-red-500 opacity-0 transition-opacity pointer-events-none group-hover:opacity-100">
                  WARNING CLICK_TO_INIT_DEFENSE
                </span>
              </span>
            </h1>

            <p className="max-w-xl border-l-2 border-white/10 pl-6 text-lg font-light leading-relaxed text-gray-400 md:text-xl">
              I&apos;m <span className="font-medium text-white">Jomar Lorigas</span>.
              I bridge the gap between complex IT infrastructure and
              high-performance user experiences.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="group flex cursor-default items-center gap-2 rounded border border-white/10 bg-white/5 px-3 py-2 transition-all hover:border-blue-500/50 hover:bg-white/10"
                >
                  <span className="text-lg opacity-70 transition-opacity group-hover:opacity-100">
                    {tech.icon}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-gray-400 group-hover:text-blue-200">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="relative z-40 mt-12 flex flex-wrap items-center gap-5">
              <a
                href="/Resume.pdf"
                className="group relative flex items-center gap-3 overflow-hidden rounded-lg bg-blue-600 px-8 py-4 font-bold text-white shadow-[0_0_30px_rgba(37,99,235,0.3)] transition-all hover:bg-blue-500"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Terminal size={18} /> Initialize CV
                </span>
                <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-[100%]" />
              </a>

              <div className="flex gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer rounded-lg border border-white/10 bg-white/5 p-4 transition-all hover:border-blue-500/50 hover:text-blue-400"
                >
                  <Github size={20} />
                </a>
                <a
                  href="mailto:your@email.com"
                  className="cursor-pointer rounded-lg border border-white/10 bg-white/5 p-4 transition-all hover:border-blue-500/50 hover:text-blue-400"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 flex justify-center lg:col-span-5"
          >
            <div className="absolute inset-0 -z-10 hidden opacity-30 lg:block">
              <svg width="100%" height="100%" viewBox="0 0 400 400">
                <path
                  d="M 200 200 L 400 50"
                  stroke="#3b82f6"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="5,5"
                />
                <path
                  d="M 200 200 L 400 350"
                  stroke="#a855f7"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="5,5"
                />
              </svg>
            </div>

            <div
              ref={photoRef}
              className="relative aspect-square w-full max-w-[360px] overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 p-1 backdrop-blur-sm"
            >
              <div className="absolute inset-0 z-0 rounded-2xl bg-[#0a0a0a]/80" />
              <Image
                src="/profile.png"
                alt="Jomar Lorigas"
                fill
                className="relative z-10 rounded-xl object-cover opacity-90 transition-all duration-500 hover:opacity-100"
              />
            </div>
          </motion.div>
        </div>
      </BackgroundLines>

      <AnimatePresence>
        {isGameActive && <CyberDefense onClose={() => setGameActive(false)} />}
      </AnimatePresence>
    </section>
  );
}
