"use client";

import { useEffect, useMemo, useState } from "react";
import OpeningAnimation from "./components/OpeningAnimation";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";          // <-- already imported
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import { DottedGlowBackground } from "./components/ui/dotted-glow-background";

export default function Home() {
  const [loading, setLoading] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return !window.matchMedia("(prefers-reduced-motion: reduce), (max-width: 768px)").matches;
  });

  const portfolioBackground = useMemo(
    () => (
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
    ),
    []
  );

  useEffect(() => {
    if (!loading) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => window.clearTimeout(timer);
  }, [loading]);

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
