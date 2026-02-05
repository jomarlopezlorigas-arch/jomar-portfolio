"use client";

import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import Image from "next/image";

/**
 * @typedef {Object} ProjectCardProps
 * @property {string} title
 * @property {string} description
 * @property {string} repo
 * @property {string} image
 */

/**
 * @param {ProjectCardProps} props
 */
export default function ProjectCard({
  title,
  description,
  repo,
  image,
}) {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.3,
      });
    }
  }, []);

  return (
    <a href={repo} target="_blank" rel="noopener noreferrer">
      <div
        ref={tiltRef}
        className="bg-card rounded-2xl overflow-hidden hover:shadow-primary/30 hover:shadow-xl transition"
      >
        {/* Image */}
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-text-sub mt-3">{description}</p>
        </div>
      </div>
    </a>
  );
}
