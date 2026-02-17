"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, FileText, ExternalLink, Award } from "lucide-react";

const certificates = [
  {
    title: "Introduction to SQL",
    issuer: "Simplilearn",
    image: "/Certificates/sqlcert.jpg",
    file: "/Certificates/Sql Cert.pdf",
    id: "CERT-SQL-882",
  },
  {
    title: "Build CMS Blog using PHP & MySQL",
    issuer: "Udemy",
    image: "/Certificates/PHP.jpg",
    file: "/Certificates/IMcert.pdf",
    id: "CERT-PHP-441",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="max-w-7xl mx-auto px-6 py-28 relative overflow-hidden">
      
      {/* Background Architectural Glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600/5 blur-[140px] rounded-full -top-20 -right-20 pointer-events-none" />

      <div className="relative z-10 mb-16 text-center lg:text-left">
        <div className="flex items-center justify-center lg:justify-start gap-2 text-blue-400 font-mono text-[10px] mb-3 uppercase tracking-[0.4em]">
          <ShieldCheck size={14} />
          <span>Verified_Credentials_Repository</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase">
          Certifi<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">cations</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden shadow-2xl hover:border-blue-500/50 transition-colors"
          >
            {/* Header: ID Bar */}
            <div className="flex justify-between items-center px-4 py-2 bg-white/5 border-b border-white/10 text-[9px] font-mono text-gray-500">
              <span className="flex items-center gap-2 text-blue-400">
                <Award size={10} /> {cert.id}
              </span>
              <span className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e]" />
                VERIFIED_CREDENTIAL
              </span>
            </div>

            <div className="flex flex-col md:flex-row h-full">
              {/* Preview Image */}
              <div className="relative w-full md:w-40 h-48 md:h-auto bg-black">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                />
              </div>

              {/* Certificate Content */}
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                    {cert.title}
                  </h3>
                  <div className="inline-flex items-center gap-2 px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-gray-400">
                    <span className="text-gray-600">ISSUER:</span>
                    <span className="text-blue-200">{cert.issuer}</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-4 pt-4 border-t border-white/5">
                  <a
                    href={cert.file}
                    target="_blank"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white text-black text-xs font-bold rounded-lg hover:bg-blue-50 transition"
                  >
                    <FileText size={14} /> Open Document
                  </a>
                  <div className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white transition">
                    <ExternalLink size={16} />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Corner Accent */}
            <div className="absolute top-1/2 -right-4 -translate-y-1/2 rotate-90 hidden lg:block">
               <span className="text-[10px] font-mono text-white/[0.03] tracking-[1em] uppercase">Auth_Verified</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Vault Footer Info */}
      <div className="mt-12 text-center">
        <p className="font-mono text-[10px] text-gray-600 uppercase tracking-widest">
          Repository Integrity Check: <span className="text-green-500/50">Passed</span> // Indexing Complete
        </p>
      </div>
    </section>
  );
}