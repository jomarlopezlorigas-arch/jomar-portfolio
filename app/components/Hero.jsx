"use client";

import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Mail } from "lucide-react";
import { 
  FaReact, 
  FaNodeJs, 
  FaDatabase 
} from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiFirebase, 
  SiTailwindcss 
} from "react-icons/si";

export default function Hero() {
  const photoRef = useRef(null);

  useEffect(() => {
    const tiltNode = photoRef.current;
    if (tiltNode) {
      VanillaTilt.init(tiltNode, {
        max: 15,
        speed: 400,
        scale: 1.03,
      });
    }
    return () => tiltNode?.vanillaTilt?.destroy();
  }, []);

  // Tech stack with icons and names
  const techStack = [
    { name: "React", icon: <FaReact className="text-blue-400" size={24} /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" size={22} /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" size={22} /> },
    { name: "React Native", icon: <FaReact className="text-blue-400" size={24} /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" size={22} /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" size={24} /> },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

      {/* Soft Background Glow */}
      <div className="absolute w-[450px] h-[450px] bg-primary/15 blur-[120px] rounded-full top-20 left-20" />
      <div className="absolute w-[350px] h-[350px] bg-purple-500/15 blur-[120px] rounded-full bottom-10 right-20" />

      <div className="grid md:grid-cols-2 gap-16 items-center z-10">

        {/* Profile Image */}
        <motion.div
          ref={photoRef}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <Image
            src="/profile.png"
            alt="Jomar Lorigas"
            width={300}
            height={300}
            priority
            className="rounded-full border-4 border-primary shadow-xl"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Jomar Lorigas
            </span>
          </h1>

          <p className="mt-6 text-gray-400 text-lg max-w-lg leading-relaxed">
            Full-Stack Developer building modern, scalable web and mobile
            applications using React, Next.js, React Native, and Firebase.
          </p>

          {/* Tech Icons */}
          <div className="flex flex-wrap gap-4 mt-6">
            {techStack.map((tech) => (
              <span
                key={tech.name}
                title={tech.name}
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition cursor-pointer"
              >
                {tech.icon}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/Resume.pdf"
              download
              className="border border-purple-400 px-7 py-3 rounded-xl hover:bg-purple-500 hover:text-black transition"
            >
              Download CV
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 mt-8">
            <a
              href="https://github.com/jomarlopezlorigas-arch"
              target="_blank"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:text-black transition"
            >
              <Github size={22} />
            </a>
            <a
              href="mailto:jomarlopezl@gmail.com"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:text-black transition"
            >
              <Mail size={22} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}