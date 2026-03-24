"use client";

import { FolderKanban } from "lucide-react";
import ExpandableCardGrid from "./ui/expandable-card-grid";

const projects = [
  {
    id: "PROJECT-01",
    eyebrow: "PROJECT_DEPLOYMENT_01",
    status: "LIVE",
    statusClassName: "border-green-500/20 bg-green-500/10 text-green-300",
    title: "Guys and Gals Salon Booking Website",
    description:
      "A booking flow for salon clients with service browsing, streamlined scheduling, and a cleaner online appointment experience.",
    image: "/Projects/Guys and Gals proj.png",
    footer: "ROOT://REPOSITORIES/GUYS_AND_GALS",
    tags: ["Next.js", "Scheduling", "UI/UX"],
    primaryAction: {
      label: "Visit Project",
      href: "https://guys-gals-salon.vercel.app/",
    },
    secondaryAction: {
      label: "Live Demo",
      href: "https://guys-gals-salon.vercel.app/",
    },
    content: (
      <div className="space-y-5">
        <p>
          This project focuses on making salon reservations faster and clearer
          for clients. The interface reduces friction around choosing services,
          checking availability, and confirming appointments.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-blue-200">
              Highlights
            </p>
            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              <li>Responsive customer-facing booking flow</li>
              <li>Clear service presentation and call-to-action hierarchy</li>
              <li>Modern styling built for trust and readability</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-blue-200">
              Focus
            </p>
            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              <li>Conversion-friendly scheduling experience</li>
              <li>Mobile-first portfolio presentation</li>
              <li>Clean deployment and visual polish</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "PROJECT-02",
    eyebrow: "PROJECT_DEPLOYMENT_02",
    status: "PRIVATE",
    statusClassName: "border-amber-500/20 bg-amber-500/10 text-amber-300",
    title: "Sentra - Head Monitoring System",
    description:
      "An AI-assisted monitoring concept that uses head tracking signals to detect suspicious behavior during assessments.",
    image: "/Projects/Sentra.png",
    footer: "ROOT://REPOSITORIES/SENTRA",
    tags: ["AI", "Monitoring", "Computer Vision"],
    primaryAction: {
      label: "Case Study Soon",
      href: "",
    },
    content: (
      <div className="space-y-5">
        <p>
          Sentra explores how behavior monitoring can support more secure online
          evaluation workflows. The concept centers on using head-position data
          as one signal for flagging unusual activity patterns during tests.
        </p>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-blue-200">
            System Goals
          </p>
          <ul className="mt-3 space-y-2 text-sm text-gray-300">
            <li>Capture head orientation patterns in real time</li>
            <li>Surface possible cheating indicators for review</li>
            <li>Package the results in a clear operator dashboard</li>
          </ul>
        </div>
        <p>
          The public demo link is not available yet, so this card currently
          acts as an animated case-study preview inside the portfolio.
        </p>
      </div>
    ),
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-28">
      <div className="absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500/25 to-transparent" />

      <div className="relative z-10 mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.35em] text-blue-300">
            <FolderKanban size={14} />
            <span>Active_Project_Archive</span>
          </div>
          <h2 className="text-4xl font-black uppercase tracking-tight text-white md:text-6xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </div>

        <p className="max-w-xl text-sm leading-relaxed text-gray-400 md:text-base">
          These cards now expand into a full detail view so the portfolio feels
          more alive and gives each project more room to explain the work.
        </p>
      </div>

      <ExpandableCardGrid items={projects} columns="lg:grid-cols-2" />
    </section>
  );
}
