"use client";

import { useState, useEffect } from "react";
import OpeningAnimation from "./components/OpeningAnimation";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";          // <-- already imported
import Skills from "./components/Skills";
import ProjectCard from "./components/ProjectCard";
import Certificates from "./components/Certificates";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // animation duration

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <OpeningAnimation />;

  return (
    <>
      <Navbar />

      <main className="text-foreground">
        <Hero />
        <About />          {/* <-- About section added here */}
        <Skills />

        <section id="projects" className="max-w-6xl mx-auto px-6 py-28">
          <div className="grid md:grid-cols-3 gap-8">
            <ProjectCard
              title="Guys and Gals Salon Booking Website"
              description="Online salon booking system"
              repo="https://guys-gals-salon.vercel.app/"
              image="/Projects/Guys and Gals proj.png"
            />

            <ProjectCard
              title="Sentra - Head Monitoring System"
              description="AI cheating detection using head tracking"
              repo="https://github.com/YojLuengas/Setra-Cheating-Detection.git"
              image="/Projects/Sentra.png"
            />
          </div>
        </section>

        <Certificates />
      </main>
    </>
  );
}