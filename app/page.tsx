"use client";

import { useState, useEffect } from "react";
import OpeningAnimation from "./components/OpeningAnimation";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";          // <-- already imported
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import { DottedGlowBackground } from "./components/ui/dotted-glow-background";

export default function Home() {
  const [loading, setLoading] = useState(true);

  const portfolioBackground = (
    <DottedGlowBackground
      className="pointer-events-none fixed inset-0 -z-10"
      opacity={0.9}
      gap={18}
      radius={1.35}
      colorDarkVar="--color-neutral-500"
      glowColorDarkVar="--color-sky-800"
      glowColorLightVar="--color-neutral-600"
      backgroundOpacity={0.96}
      speedMin={0.35}
      speedMax={1.1}
      speedScale={1}
    />
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // animation duration

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="relative isolate min-h-screen overflow-hidden">
        {portfolioBackground}
        <OpeningAnimation />
      </div>
    );
  }

  return (
    <div className="relative isolate min-h-screen overflow-hidden">
      {portfolioBackground}
      <Navbar />

      <main className="relative z-10 text-foreground">
        <Hero />
        <About />          {/* <-- About section added here */}
        <Skills />
        <Projects />
        <Certificates />
      </main>
    </div>
  );
}
