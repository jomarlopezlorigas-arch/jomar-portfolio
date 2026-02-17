"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  FaUserGraduate, 
  FaProjectDiagram, 
  FaClock, 
  FaHeart 
} from "react-icons/fa";

export default function About() {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const stats = [
    { icon: <FaClock className="text-2xl text-primary" />, value: "4+", label: "Years Experience" },
    { icon: <FaProjectDiagram className="text-2xl text-primary" />, value: "10+", label: "Projects Completed" },
    { icon: <FaHeart className="text-2xl text-primary" />, value: "100%", label: "Passion" },
  ];

  return (
    <section id="about" className="py-28 px-6 max-w-6xl mx-auto relative">
      {/* Background blur effect */}
      <div className="absolute w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full -top-20 -left-20 -z-10" />
      <div className="absolute w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full bottom-0 right-0 -z-10" />

      <motion.h2 
        className="text-4xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        About <span className="text-primary">Me</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left column - Profile image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-3xl overflow-hidden border-4 border-white/10 bg-white/5 backdrop-blur-md p-2 shadow-2xl">
            {/* Replace with your actual photo */}
            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-purple-400/20 to-primary/20 flex items-center justify-center">
              <span className="text-7xl">👨‍💻</span>
            </div>
          </div>
          {/* Decorative gradient ring */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-400 rounded-3xl blur opacity-30 -z-10" />
        </motion.div>

        {/* Right column - Bio & Stats */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-semibold">
            I'm <span className="text-primary">Jomar Lorigas</span>
          </h3>
          
          <p className="text-gray-300 leading-relaxed">
            A passionate full-stack developer with over 4 years of experience building 
            modern web applications. I specialize in React, Next.js, and Node.js, 
            creating seamless user experiences from frontend to backend.
          </p>
          
          <p className="text-gray-300 leading-relaxed">
            I believe in clean code, continuous learning, and turning complex problems 
            into simple, elegant solutions. When I'm not coding, you'll find me 
            exploring new technologies or contributing to open source.
          </p>

          {/* Stats grid - first two in two columns */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            {stats.slice(0, 2).map((stat, index) => (
              <motion.div
                key={index}
                className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md text-center"
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Passion card - centered full width */}
          <motion.div
            className="flex justify-center pt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md text-center w-full max-w-xs">
              <div className="flex justify-center mb-2">{stats[2].icon}</div>
              <div className="text-2xl font-bold text-white">{stats[2].value}</div>
              <div className="text-xs text-gray-400">{stats[2].label}</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}