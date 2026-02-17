"use client";

import { useState, useEffect } from "react";
import OpeningAnimation from "./components/OpeningAnimation";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About"; 
import Skills from "./components/Skills";
import ProjectCard from "./components/ProjectCard";
import Certificates from "./components/Certificates";
import { Terminal } from "lucide-react"; // Matching our IT theme

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <OpeningAnimation />;

  return (
    <>
      <Navbar />

      <main className="text-foreground bg-[#020202]">
        {/* 1. HERO SECTION */}
        <Hero />

        {/* 2. ABOUT SECTION */}
        <About /> 

        {/* 3. SKILLS SECTION */}
        <Skills />

        {/* 4. PROJECTS SECTION */}
        <section id="projects" className="max-w-7xl mx-auto px-6 py-28 relative">
          {/* Infrastructure Background Accent */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/5 blur-[100px] pointer-events-none" />

          {/* Section Heading to match Skills/Certs */}
          <div className="relative z-10 mb-16">
            <div className="flex items-center gap-2 text-blue-500 font-mono text-[10px] mb-2 uppercase tracking-[0.4em]">
              <Terminal size={12} />
              <span>Deployed_Assets_Index</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase">
              Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Logs</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
            <ProjectCard
              title="Guys and Gals Salon Booking Website"
              description="Full-stack online salon booking system with real-time scheduling and customer management."
              repo="https://github.com/Chizstic/final-proj.git"
              image="/Projects/Guys and Gals proj.png"
              tech={["React", "Node.js", "Firebase", "Tailwind"]}
            />

            <ProjectCard
              title="Sentra - Head Monitoring System"
              description="Advanced AI integrity tool utilizing computer vision and head tracking for cheat detection."
              repo="https://github.com/YojLuengas/Setra-Cheating-Detection.git"
              image="/Projects/Sentra.png"
              tech={["Python", "OpenCV", "MediaPipe", "Next.js"]}
            />
          </div>
          
          {/* Visual Divider */}
          <div className="mt-20 border-t border-white/5 w-full h-px" />
        </section>

        {/* 5. CERTIFICATES SECTION */}
        <Certificates />

        {/* 6. SYSTEM FOOTER */}
        <footer className="py-10 border-t border-white/5 text-center">
          <p className="font-mono text-[10px] text-gray-600 uppercase tracking-[0.5em]">
            Connection: Stable // End of Transmission
          </p>
        </footer>
      </main>
    </>
  );
}