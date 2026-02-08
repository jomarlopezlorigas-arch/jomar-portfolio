"use client";

import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import Image from "next/image";

export default function ProjectCard({
  title,
  description,
  repo,
  image,
  tech = [],
}) {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (!tiltRef.current) return;

    VanillaTilt.init(tiltRef.current, {
      max: 12,
      speed: 400,
      scale: 1.03,
    });

    return () => tiltRef.current?.vanillaTilt?.destroy();
  }, []);

  return (
    <div
      ref={tiltRef}
      className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md hover:border-primary transition"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.png"}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition duration-700"
        />

        {/* Overlay CTA */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
          <a
            href={repo}
            target="_blank"
            className="px-6 py-2 bg-primary text-black rounded-xl font-semibold hover:scale-105 transition"
          >
            View Project
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold">{title}</h3>

        <p className="text-gray-400 mt-3 text-sm">{description}</p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 text-xs bg-primary/20 text-primary rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
