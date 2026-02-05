"use client";

import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Mail } from "lucide-react";

export default function Hero() {
  const photoRef = useRef(null);

  useEffect(() => {
    const tiltNode = photoRef.current;

    if (tiltNode) {
      VanillaTilt.init(tiltNode, {
        max: 20,
        speed: 400,
        glare: true,
        "max-glare": 0.4,
        scale: 1.05,
      });
    }

    // ✅ Prevent memory leaks
    return () => tiltNode?.vanillaTilt?.destroy();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

      {/* Aurora Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full top-20 left-10 animate-pulse" />
      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full bottom-10 right-10 animate-pulse" />

      <div className="grid md:grid-cols-2 gap-12 items-center z-10">

        {/* Profile Image */}
        <motion.div
          ref={photoRef}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative group"
        >
          {/* Glow Ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-purple-500 blur-xl opacity-60 group-hover:opacity-90 transition" />

          <Image
            src="/profile.png"
            alt="Jomar Lorigas Profile Photo"
            width={280}
            height={280}
            priority
            className="relative rounded-full border-4 border-primary shadow-2xl"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Jomar Lorigas
            </span>
          </h1>

          <p className="mt-6 text-gray-400 text-lg max-w-xl leading-relaxed">
            Full-Stack Developer passionate about building modern web and mobile
            applications using React, Next.js, React Native, and Firebase.
            BSIT Candidate 2026.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-primary px-7 py-3 rounded-xl font-semibold text-black hover:scale-105 hover:shadow-lg hover:shadow-primary/40 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-primary px-7 py-3 rounded-xl hover:bg-primary hover:text-black transition"
            >
              Contact Me
            </a>

            <a
              href="/Jomar-Lorigas-CV.pdf"
              download
              className="border border-purple-400 px-7 py-3 rounded-xl hover:bg-purple-500 hover:text-black transition"
            >
              Download CV
            </a>
          </div>

          {/* ⭐ SOCIAL CONTACTS */}
          <div className="flex gap-5 mt-8">

            {/* GitHub */}
            <a
              href="https://github.com/jomarlopezlorigas-arch"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-primary hover:text-black transition hover:scale-110 hover:shadow-lg hover:shadow-primary/40"
            >
              <Github size={22} />
            </a>

            {/* Email */}
            <a
              href="mailto:jomarlopezl@gmail.com"
              aria-label="Send Email"
              className="p-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-primary hover:text-black transition hover:scale-110 hover:shadow-lg hover:shadow-primary/40"
            >
              <Mail size={22} />
            </a>

          </div>

        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}
