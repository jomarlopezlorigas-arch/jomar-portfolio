"use client";

import { motion } from "framer-motion";
import { 
  FaReact, 
  FaNetworkWired, 
  FaDatabase 
} from "react-icons/fa";
import { 
  SiTailwindcss, 
  SiJavascript, 
  SiFirebase, 
  SiNodedotjs 
} from "react-icons/si";

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
    { name: "REST API", level: 85 },
    { name: "Database Design", level: 80 },
  ],
};

// Map skill names to their corresponding icons (with optional colors)
const iconMap = {
  "React / Next.js": <FaReact className="inline mr-2 text-blue-400" />,
  "Tailwind CSS": <SiTailwindcss className="inline mr-2 text-cyan-400" />,
  "JavaScript / TypeScript": <SiJavascript className="inline mr-2 text-yellow-400" />,
  "React Native": <FaReact className="inline mr-2 text-blue-400" />,
  "Firebase": <SiFirebase className="inline mr-2 text-yellow-500" />,
  "Node.js": <SiNodedotjs className="inline mr-2 text-green-500" />,
  "REST API": <FaNetworkWired className="inline mr-2 text-gray-400" />,
  "Database Design": <FaDatabase className="inline mr-2 text-blue-500" />,
};

export default function Skills() {
  const SkillCard = ({ title, data, color }) => (
    <div className="relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
      <h3 className={`text-2xl font-semibold mb-8 ${color}`}>
        {title}
      </h3>

      {data.map((skill, index) => (
        <div key={index} className="mb-6">
          <div className="flex justify-between mb-2 text-sm">
            <span>
              {iconMap[skill.name]} {skill.name}
            </span>
            <span>{skill.level}%</span>
          </div>

          <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1 }}
              className={`h-full bg-gradient-to-r ${
                color === "text-primary"
                  ? "from-primary to-purple-400"
                  : "from-purple-400 to-primary"
              }`}
            />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="skills" className="py-28 px-6 max-w-6xl mx-auto relative">
      <div className="absolute w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full top-0 right-0" />

      <h2 className="text-4xl font-bold text-center mb-16">
        My <span className="text-primary">Skills</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        <SkillCard
          title="Frontend Development"
          data={skills.frontend}
          color="text-purple-400"
        />
        <SkillCard
          title="Backend Development"
          data={skills.backend}
          color="text-primary"
        />
      </div>
    </section>
  );
}