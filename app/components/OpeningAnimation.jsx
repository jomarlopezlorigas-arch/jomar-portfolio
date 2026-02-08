"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function OpeningAnimation() {
  const [text, setText] = useState("");
  const fullText = "Jomar.dev";

  // Typing effect
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(typing);
    }, 120);

    return () => clearInterval(typing);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center overflow-hidden z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      {/* Floating Glow Circles */}
      <motion.div
        className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20"
        animate={{ y: [0, -40, 0], x: [0, 40, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />

      <motion.div
        className="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20"
        animate={{ y: [0, 40, 0], x: [0, -40, 0] }}
        transition={{ repeat: Infinity, duration: 7 }}
      />

      {/* Main Content */}
      <div className="relative text-center">
        {/* Typing Title */}
        <motion.h1
          className="text-white text-6xl font-bold tracking-widest"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {text}
          <span className="animate-pulse text-blue-400">|</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-gray-400 mt-6 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          Full Stack Developer • UI Designer • Problem Solver
        </motion.p>

        {/* Loading Bar */}
        <motion.div
          className="w-64 h-1 bg-gray-700 rounded-full mt-10 mx-auto overflow-hidden"
        >
          <motion.div
            className="h-full bg-blue-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
