"use client";

import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import Image from "next/image";
import { ExternalLink, Github, Terminal, Activity } from "lucide-react";

export default function ProjectCard({
  title,
  description,
  repo,
  image,
  tech = [],
}) {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (!tiltRef.current) return;

    VanillaTilt.init(tiltRef.current, {
      max: 10,
      speed: 400,
      glare: true,
      "max-glare": 0.2,
      scale: 1.02,
    });

    return () => tiltRef.current?.vanillaTilt?.destroy();
  }, []);

  return (
    <div
      ref={tiltRef}
      className="group relative bg-[#0a0a0a] border border-white/10 overflow-hidden shadow-2xl transition-all hover:border-blue-500/50"
    >
      {/* 1. TERMINAL HEADER */}
      <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-500/30" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/30" />
          <div className="w-2 h-2 rounded-full bg-green-500/30" />
        </div>
        <div className="flex items-center gap-2 font-mono text-[9px] text-gray-500 tracking-widest uppercase">
          <Terminal size={10} />
          <span>Project_Deployment_0{Math.floor(Math.random() * 9) + 1}</span>
        </div>
      </div>

      {/* 2. SYSTEM PREVIEW (IMAGE) */}
      <div className="relative h-52 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
        <Image
          src={image || "/placeholder.png"}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        
        {/* Hardware Overlay Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />
        
        {/* Interactive Overlay */}
        <div className="absolute inset-0 bg-blue-600/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-4 backdrop-blur-sm">
          <a
            href={repo}
            target="_blank"
            className="flex items-center gap-2 px-6 py-2 bg-white text-black text-sm font-bold rounded-full hover:scale-105 transition shadow-lg"
          >
            <Github size={16} /> Source Code
          </a>
        </div>
      </div>

      {/* 3. TECHNICAL METADATA (CONTENT) */}
      <div className="p-5 space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <div className="flex items-center gap-1 text-[10px] font-mono text-green-500 bg-green-500/10 px-2 py-0.5 rounded border border-green-500/20">
            <Activity size={8} className="animate-pulse" />
            LIVE
          </div>
        </div>

        <p className="text-gray-400 text-xs leading-relaxed line-clamp-2 font-light">
          {description}
        </p>

        {/* Technical Stack Tags */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
          {tech.map((t) => (
            <span
              key={t}
              className="px-2 py-1 text-[9px] font-mono bg-white/5 text-blue-300 border border-white/10 uppercase tracking-tighter"
            >
              {t}
            </span>
          ))}
        </div>

        {/* ID Bottom Bar */}
        <div className="flex justify-between items-center pt-2 text-[8px] font-mono text-gray-600">
          <span>ROOT://REPOSITORIES/{title.replace(/\s+/g, '_').toUpperCase()}</span>
          <span>©2026</span>
        </div>
      </div>
    </div>
  );
}