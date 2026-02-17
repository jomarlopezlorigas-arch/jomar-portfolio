"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+";

export default function TechCloudIntro() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const targetText = "JOMAR.DEV";

  // Loading Progress Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + Math.floor(Math.random() * 12)));
    }, 120);
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => { clearInterval(interval); clearTimeout(timer); };
  }, []);

  // Glitch Effect Logic
  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        targetText.split("")
          .map((letter, index) => {
            if (index < iteration) return targetText[index];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );
      if (iteration >= targetText.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const logs = [
    "[SYS] INITIALIZING_ENCRYPTION_LAYER",
    "[NET] ESTABLISHING_SECURE_HANDSHAKE",
    "[DEV] COMPILING_REACT_RESOURCES",
    "[UX] RENDERING_VISUAL_INTERFACE",
  ];

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          className="fixed inset-0 z-[999] bg-black flex flex-col justify-between p-6 md:p-12 overflow-hidden"
        >
          {/* Background Gradients (From your original code) */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-100" />
          
          <motion.div
            className="absolute w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] top-[-10%] left-[-10%]"
            animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
            transition={{ repeat: Infinity, duration: 10 }}
          />
          <motion.div
            className="absolute w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] bottom-[-5%] right-[-5%]"
            animate={{ y: [0, -30, 0], x: [0, -50, 0] }}
            transition={{ repeat: Infinity, duration: 8 }}
          />

          {/* Top Info Bar */}
          <div className="relative z-10 flex justify-between font-mono text-[10px] text-blue-400/60 tracking-[0.2em]">
            <div className="space-y-1">
              <p>DEPLOYMENT_ID: 0x82FA9</p>
              <p>STATUS: SYSTEM_CHECK_IN_PROGRESS</p>
            </div>
            <div className="text-right">
              <p>LOC: 14.5995° N, 120.9842° E</p>
              <p>REL: 2026.1.0</p>
            </div>
          </div>

          {/* Center Content */}
          <div className="relative z-10">
            <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter font-mono">
              {displayText}
            </h1>
            
            <div className="mt-4 space-y-1">
              {logs.map((log, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.3 }}
                  className="text-xs font-mono text-gray-500 flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-blue-500 rounded-full animate-pulse" />
                  {log}
                </motion.p>
              ))}
            </div>
          </div>

          {/* Bottom Control Panel */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
            <div className="col-span-2 space-y-3">
              <div className="flex justify-between font-mono text-[10px] text-blue-300">
                <span className="flex items-center gap-2">
                  <motion.span 
                    animate={{ opacity: [1, 0, 1] }} 
                    transition={{ repeat: Infinity, duration: 1 }}
                  >
                    ●
                  </motion.span>
                  UPLOADING_PORTFOLIO_CORE
                </span>
                <span>{progress}%</span>
              </div>
              
              {/* Sleek Progress Bar */}
              <div className="h-1 w-full bg-white/5 border border-white/10 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                />
              </div>
            </div>

            <div className="text-right hidden md:block">
              <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest leading-relaxed">
                Full-Stack Architecture<br />
                Cloud Infrastructure / UI/UX
              </p>
            </div>
          </div>

          {/* Scanning Scanline overlay */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] z-20 bg-[length:100%_4px]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}