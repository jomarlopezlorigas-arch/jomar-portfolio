"use client";
import React from "react";
import { motion } from "framer-motion";

const certificates = [
  {
    title: "Meta Front-End Developer",
    issuer: "Coursera / Meta",
    date: "2024",
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2023",
  },
  {
    title: "Full Stack Open",
    issuer: "University of Helsinki",
    date: "2023",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="max-w-7xl mx-auto px-8 py-20 bg-black/20">
      <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-12 text-center">
        Verified <span className="text-sky-500">Skills</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5, scale: 1.02 }}
            className="relative group flex flex-col items-center p-8 rounded-xl border border-white/10 bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 backdrop-blur-sm overflow-hidden"
          >
            {/* Spotlight Effect overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_var(--x,_50%)_var(--y,_50%),_rgba(14,165,233,0.15)_0%,_transparent_60%)]" />
            
            <div className="w-12 h-12 rounded-full bg-sky-500/10 flex items-center justify-center mb-6">
              <div className="w-6 h-6 rounded bg-sky-500/40" />
            </div>
            
            <h3 className="text-lg font-semibold text-white mb-2 text-center">{cert.title}</h3>
            <p className="text-sky-500 text-sm font-medium mb-1">{cert.issuer}</p>
            <p className="text-neutral-500 text-xs">{cert.date}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
