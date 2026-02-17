"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Cpu, Globe } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");
  const [time, setTime] = useState("");

  // System Clock Effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["about", "projects", "certificates"];
      const currentSection = sections.find((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (currentSection) setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Certificates", id: "certificates" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-[100] transition-all duration-500 ${
        scrolled
          ? "py-3 bg-black/60 backdrop-blur-md border-b border-white/10"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO / SYSTEM ID */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <h1 className="font-mono font-black text-xl tracking-tighter text-white group cursor-pointer">
              JOMAR<span className="text-blue-500">.</span>SYS
            </h1>
            <motion.div 
              className="absolute -bottom-1 left-0 h-[2px] bg-blue-500"
              initial={{ width: 0 }}
              animate={{ width: scrolled ? "100%" : "40%" }}
            />
          </div>
          
          {/* Metadata hidden on mobile */}
          <div className="hidden lg:flex items-center gap-3 border-l border-white/10 pl-4 font-mono text-[10px] text-gray-500">
            <div className="flex items-center gap-1">
              <Globe size={10} className="text-blue-500" />
              <span>127.0.0.1</span>
            </div>
            <div className="flex items-center gap-1">
              <Cpu size={10} className="text-purple-500" />
              <span>v2.0.26</span>
            </div>
          </div>
        </div>

        {/* DESKTOP NAV (SMOOTH SLIDER) */}
        <div className="hidden md:flex items-center gap-2 p-1 bg-white/5 rounded-full border border-white/5">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative px-6 py-2 text-xs font-mono uppercase tracking-widest transition-colors duration-300 ${
                active === link.id ? "text-white" : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {active === link.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-blue-600/20 border border-blue-500/30 rounded-full z-[-1]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {link.name}
            </a>
          ))}
        </div>

        {/* SYSTEM TIME & TOGGLE */}
        <div className="flex items-center gap-6">
          <div className="hidden sm:block font-mono text-xs text-gray-400 tracking-widest bg-white/5 px-3 py-1 rounded border border-white/10">
            {time} <span className="animate-pulse">_</span>
          </div>

          <button
            className="p-2 rounded-lg bg-white/5 border border-white/10 md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU (FULL OVERLAY) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-white/10 md:hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-mono uppercase tracking-tighter text-gray-400 hover:text-blue-500 transition-colors"
                >
                  <span className="text-sm mr-4 text-gray-700">0{i+1}</span>
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}