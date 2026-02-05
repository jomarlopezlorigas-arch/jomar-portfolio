"use client";

import { motion } from "framer-motion";

const skills = {
  frontend: [
    { name: "React / Next.js", level: 75 },
    { name: "Tailwind CSS", level: 80 },
    { name: "JavaScript / TypeScript", level: 75 },
    { name: "React Native", level: 70 },
  ],
  backend: [
    { name: "Firebase", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "REST API Development", level: 85 },
    { name: "Database Design", level: 80 },
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      
      <h2 className="text-4xl font-bold mb-16 text-center">
        My <span className="text-primary">Skills</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-14">

        {/* FRONTEND */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-purple-400">
            Frontend Development
          </h3>

          {skills.frontend.map((skill, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between mb-2">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>

              <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  className="h-full bg-gradient-to-r from-purple-400 to-primary"
                />
              </div>
            </div>
          ))}
        </div>

        {/* BACKEND */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-primary">
            Backend Development
          </h3>

          {skills.backend.map((skill, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between mb-2">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>

              <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  className="h-full bg-gradient-to-r from-primary to-purple-400"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
