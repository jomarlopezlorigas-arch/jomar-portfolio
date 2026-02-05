"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");

  // Detect scroll shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["projects", "certificates", "contact"];
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 100;
          const bottom = top + section.offsetHeight;

          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Projects", id: "projects" },
    { name: "Certificates", id: "certificates" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-black/40 border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="font-bold text-xl bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
          Jomar.dev
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative group transition ${
                active === link.id ? "text-primary" : "text-white/80"
              }`}
            >
              {link.name}

              {/* Animated underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-primary transition-all duration-300 ${
                  active === link.id ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden backdrop-blur-xl bg-black/60 border-t border-white/10">
          <div className="flex flex-col items-center py-6 gap-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMobileOpen(false)}
                className="text-lg hover:text-primary transition"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
