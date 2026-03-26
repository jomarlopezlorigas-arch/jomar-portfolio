"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import ExpandableCardGrid from "./ui/expandable-card-grid";

const certificates = [
  {
    id: "CERT-SQL-882",
    eyebrow: "VERIFIED_CREDENTIAL",
    status: "ACTIVE",
    statusClassName: "border-green-500/20 bg-green-500/10 text-green-300",
    title: "Introduction to SQL",
    description:
      "Foundational database certificate covering SQL querying, relational concepts, and structured data workflows.",
    image: "/Certificates/sqlcert.jpg",
    footer: "ISSUER://SIMPLILEARN",
    tags: ["SQL", "Databases", "Queries"],
    primaryAction: {
      label: "Open Certificate",
      href: "/Certificates/Sql Cert.pdf",
    },
    secondaryAction: {
      label: "View PDF",
      href: "/Certificates/Sql Cert.pdf",
    },
    content: (
      <div className="space-y-5">
        <p>
          This certificate validates my baseline SQL knowledge, including how I
          structure queries, work with relational data, and reason about clean
          database operations.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-blue-200">
              Issuer
            </p>
            <p className="mt-3 text-sm text-gray-300">Simplilearn</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-blue-200">
              Credential ID
            </p>
            <p className="mt-3 text-sm text-gray-300">CERT-SQL-882</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "CERT-PHP-441",
    eyebrow: "VERIFIED_CREDENTIAL",
    status: "ACTIVE",
    statusClassName: "border-green-500/20 bg-green-500/10 text-green-300",
    title: "Build CMS Blog using PHP & MySQL",
    description:
      "Certificate focused on practical PHP and MySQL work for content-driven applications and CRUD-based systems.",
    image: "/Certificates/PHP.jpg",
    footer: "ISSUER://UDEMY",
    tags: ["PHP", "MySQL", "CMS"],
    primaryAction: {
      label: "Open Certificate",
      href: "/Certificates/IMcert.pdf",
    },
    secondaryAction: {
      label: "View PDF",
      href: "/Certificates/IMcert.pdf",
    },
    content: (
      <div className="space-y-5">
        <p>
          This coursework focused on building a CMS-style blog with PHP and
          MySQL, reinforcing server-side logic, persistence, and admin-facing
          workflow design.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-blue-200">
              Issuer
            </p>
            <p className="mt-3 text-sm text-gray-300">Udemy</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-blue-200">
              Credential ID
            </p>
            <p className="mt-3 text-sm text-gray-300">CERT-PHP-441</p>
          </div>
        </div>
      </div>
    ),
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="relative mx-auto max-w-7xl overflow-hidden px-6 py-28"
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-[500px] w-[500px] rounded-full bg-blue-600/5 blur-[140px]" />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true, amount: 0.25 }}
        className="relative z-10 mb-16 text-center lg:text-left"
      >
        <div className="flex items-center justify-center lg:justify-start gap-2 text-blue-400 font-mono text-[10px] mb-3 uppercase tracking-[0.4em]">
          <ShieldCheck size={14} />
          <span>Verified_Credentials_Repository</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase">
          Certifi<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">cations</span>
        </h2>
      </motion.div>

      <ExpandableCardGrid items={certificates} columns="lg:grid-cols-2" imageHeightClassName="h-64" />

      {/* Vault Footer Info */}
      <div className="mt-12 text-center">
        <p className="font-mono text-[10px] text-gray-600 uppercase tracking-widest">
          Repository Integrity Check:{" "}
          <span className="text-green-500/50">Passed</span>
          <span className="text-gray-600"> | Indexing Complete</span>
        </p>
      </div>
    </section>
  );
}
