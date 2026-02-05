"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const certificates = [
  {
    title: "Introduction to SQL",
    issuer: "SIMPLILEARN",
    image: "/sqlcert.jpg",
    file: "public/sqlcert.pdf",
  },
  {
    title: "Build Complete CMS Blog in PHP & MySQL Bootstrap & PDO",
    issuer: "Coursera",
    image: "/PHP.jpg",
    file: "public/IMcert.pdf",
  },
 
];

export default function Certificates() {
  return (
    <section id="certificates" className="max-w-6xl mx-auto px-6 py-28">
      <h2 className="text-4xl font-bold text-center mb-14">
        Certificates
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-primary/30 hover:shadow-xl transition"
          >
            {/* Certificate Image */}
            <div className="relative h-52">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Certificate Info */}
            <div className="p-6">
              <h3 className="text-xl font-semibold">
                {cert.title}
              </h3>

              <p className="text-gray-400 mt-2 text-sm">
                Issued by {cert.issuer}
              </p>

              <a
                href={cert.file}
                target="_blank"
                className="inline-block mt-4 text-primary font-medium hover:underline"
              >
                View Certificate →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
