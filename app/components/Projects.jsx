"use client";

import { motion } from "framer-motion";
import { FolderKanban } from "lucide-react";
import ExpandableCardGrid from "./ui/expandable-card-grid";

const projects = [
  {
    id: "PROJECT-03",
    eyebrow: "PHASE_1_ACCESS",
    status: "LIVE",
    statusClassName: "border-green-500/20 bg-green-500/10 text-green-300",
    title: "Code Explainer Workspace",
    description:
      "A Next.js and TypeScript workspace that reads code, generates structured analysis, and saves explanation history behind authentication.",
    image: "/Projects/code-explainer-workspace.svg",
    cardImageClassName: "scale-[1.08]",
    modalImageClassName: "scale-[1.03]",
    footer: "ROOT://REPOSITORIES/CODE_EXPLAINER_WORKSPACE",
    tags: ["Next.js", "TypeScript", "Code Analysis"],
    primaryAction: {
      label: "Launch Site",
      href: "https://ai-code-reader.vercel.app/",
    },
    secondaryAction: {
      label: "Open Demo",
      href: "https://ai-code-reader.vercel.app/",
    },
    content: (
      <div className="space-y-5">
        <p>
          This project is designed as a code explainer workspace where users
          can sign in, submit source files, and receive structured breakdowns
          of how the code works. The experience is aimed at making analysis
          feel approachable, organized, and reusable.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-blue-200">
              Auth
            </p>
            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              <li>Supabase email and password sign-in flow</li>
              <li>Simple access point for returning users</li>
              <li>Workspace-oriented account entry screen</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-blue-200">
              Explain
            </p>
            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              <li>Reads uploaded or pasted code for analysis</li>
              <li>Supports structured AI-backed explanations</li>
              <li>Built for clearer learning and review workflows</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-blue-200">
              History
            </p>
            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              <li>Stores previous explanation results</li>
              <li>Lets users revisit reusable code insights</li>
              <li>Keeps analysis sessions organized over time</li>
            </ul>
          </div>
        </div>
        <p>
          The UI direction leans into a clean product feel with a soft,
          high-trust authentication screen and a focused workspace entry point
          for code reading and analysis tasks.
        </p>
      </div>
    ),
  },
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
      label: "Launch Site",
      href: "https://guys-gals-salon.vercel.app/",
    },
    secondaryAction: {
      label: "Open Demo",
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
      label: "Private Build",
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
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-28">
      <div className="absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500/25 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true, amount: 0.25 }}
        className="relative z-10 mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
      >
        <div className="space-y-3">
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
      </motion.div>

      <ExpandableCardGrid items={projects} columns="lg:grid-cols-2 2xl:grid-cols-3" />
    </section>
  );
}
