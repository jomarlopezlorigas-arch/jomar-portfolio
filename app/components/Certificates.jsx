"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const certificates = [
  {
    title: "Introduction to SQL",
    issuer: "Simplilearn",
    image: "/Certificates/sqlcert.jpg",
    file: "/Certificates/Sql Cert.pdf",
  },
  {
    title: "Build CMS Blog using PHP & MySQL",
    issuer: "Coursera",
    image: "/Certificates/PHP.jpg",
    file: "/Certificates/IMcert.pdf",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="max-w-6xl mx-auto px-6 py-28 relative">

      {/* Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-primary/10 blur-[120px] rounded-full top-0 left-10" />

      <h2 className="text-4xl font-bold text-center mb-16">
        My <span className="text-primary">Certificates</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md"
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <a
                  href={cert.file}
                  target="_blank"
                  className="px-6 py-2 bg-primary text-black rounded-xl font-semibold hover:scale-105 transition"
                >
                  View Certificate
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold">{cert.title}</h3>

              <span className="inline-block mt-2 px-3 py-1 text-xs bg-primary/20 text-primary rounded-full">
                {cert.issuer}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
  