"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");
  const [time, setTime] = useState("");

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
      {/* 1. Added relative to this container to anchor the absolute center */}
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative h-10">
        
        {/* LEFT: LOGO / SYSTEM ID */}
        <div className="flex items-center gap-2">
          <Terminal size={18} className="text-blue-500" />
          <div className="flex flex-col">
            <span className="text-[10px] font-mono font-bold text-white tracking-tighter leading-none">JOMAR.SYS</span>
            <span className="text-[8px] font-mono text-blue-500/60 leading-none">v2.0.4</span>
          </div>
        </div>

        {/* CENTER: DESKTOP NAV (Perfectly Centered) */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-2 p-1 bg-white/5 rounded-full border border-white/5 backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative px-5 py-1.5 text-[10px] font-mono uppercase tracking-[0.2em] transition-colors duration-300 ${
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

        {/* RIGHT: SYSTEM TIME & TOGGLE */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:block font-mono text-[10px] text-gray-400 tracking-widest bg-white/5 px-3 py-1.5 rounded border border-white/10">
            {time} <span className="animate-pulse">_</span>
          </div>

          <button
            className="p-2 rounded-lg bg-white/5 border border-white/10 md:hidden text-white hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-white/10 md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link, i) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between text-xl font-mono uppercase tracking-tighter text-gray-400 hover:text-blue-500 py-2 border-b border-white/5"
                >
                  <span>{link.name}</span>
                  <span className="text-[10px] text-gray-700">0{i+1}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}