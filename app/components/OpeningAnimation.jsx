"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function OpeningAnimation() {
  const [showSubtitle, setShowSubtitle] = useState(false);

  // Show subtitle after name animation
  useEffect(() => {
    const timer = setTimeout(() => setShowSubtitle(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const name = "Jomar.dev".split("");

  // Floating code symbols (developer vibe)
  const particles = [
    { char: "{", top: "15%", left: "10%", delay: 0.2 },
    { char: "}", top: "70%", left: "85%", delay: 0.5 },
    { char: "<", top: "80%", left: "20%", delay: 0.1 },
    { char: "/>", top: "25%", left: "80%", delay: 0.4 },
    { char: "()", top: "60%", left: "5%", delay: 0.3 },
    { char: "[]", top: "10%", left: "70%", delay: 0.6 },
    { char: "=>", top: "45%", left: "90%", delay: 0.2 },
  ];

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center overflow-hidden z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Dark gradient background (original) */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      {/* Floating Glow Circles (original colors) */}
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

      {/* Floating code symbols */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute text-white/10 text-4xl font-mono font-bold"
          style={{ top: p.top, left: p.left }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: p.delay, duration: 0.8 }}
          whileInView={{
            y: [0, -20, 0, 20, 0],
            x: [0, 15, -10, -15, 0],
            rotate: [0, 10, -10, 5, 0],
            transition: {
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          {p.char}
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative text-center z-10">
        {/* Animated name with staggered letters */}
        <div className="flex justify-center text-6xl md:text-7xl font-bold text-white mb-4">
          {name.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 50, rotateZ: -10 }}
              animate={{ opacity: 1, y: 0, rotateZ: 0 }}
              transition={{
                delay: index * 0.08,
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
              className="inline-block"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </div>

        {/* Subtitle */}
        {showSubtitle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-400 text-lg md:text-xl tracking-widest">
              full-stack developer • ui designer • problem solver
            </p>
            {/* Decorative line with primary color */}
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-primary to-purple-400 mx-auto mt-6 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 0.2, duration: 0.15}}
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}