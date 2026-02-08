"use client";

import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import Image from "next/image";

/**
 * @typedef {Object} ProjectCardProps
 * @property {string} title
 * @property {string} description
 * @property {string} repo
 * @property {string | import("next/image").StaticImageData} image
 */

/**
 * @param {ProjectCardProps} props
 */
export default function ProjectCard({
  title = "Project",
  description = "No description available.",
  repo = "#",
  image,
}) {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (!tiltRef.current) return;

    VanillaTilt.init(tiltRef.current, {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.3,
    });

    // ✅ Cleanup to avoid memory leak
    return () => {
      if (tiltRef.current?.vanillaTilt) {
        tiltRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  // ✅ Fallback image if invalid or missing
  const safeImage = image || "/placeholder.png";

  // ✅ Safe repo link
  const safeRepo = repo && repo.startsWith("http") ? repo : "#";

  return (
    <a href={safeRepo} target="_blank" rel="noopener noreferrer">
      <div
        ref={tiltRef}
        className="bg-card rounded-2xl overflow-hidden hover:shadow-primary/30 hover:shadow-xl transition"
      >
        {/* Image */}
        <div className="relative h-48 w-full">
          <Image
            src={safeImage}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={false}
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
