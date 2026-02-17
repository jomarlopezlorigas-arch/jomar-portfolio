"use client";

import { motion } from "framer-motion";
import { 
  FaServer, 
  FaNetworkWired, 
  FaMicrochip, 
  FaCodeBranch,
  FaTerminal
} from "react-icons/fa";

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  // IT-Centric Stats
  const stats = [
    { icon: <FaServer className="text-blue-400" />, value: "4+ Yrs", label: "Infrastructure" },
    { icon: <FaCodeBranch className="text-purple-400" />, value: "15+", label: "Prod Deployments" },
    { icon: <FaNetworkWired className="text-cyan-400" />, value: "99.9%", label: "System Uptime" },
  ];

  return (
    <section id="about" className="py-28 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background architectural elements */}
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent" />
      
      <div className="grid lg:grid-cols-12 gap-16 items-start">
        
        {/* LEFT: THE TECHNICAL STACK VISUAL (5 Columns) */}
        <motion.div
          className="lg:col-span-5 relative"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Main Container - Framed like a System Component */}
          <div className="relative group">
            <div className="relative z-10 aspect-square rounded-2xl bg-[#0a0a0a] border border-white/10 overflow-hidden p-6 shadow-2xl">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <span className="text-[10px] font-mono text-gray-500 ml-2 uppercase tracking-widest">sys_profile.sh</span>
              </div>

              {/* IT Content Simulation */}
              <div className="space-y-4 font-mono text-sm leading-relaxed text-blue-100/80">
                <p className="text-blue-400 italic font-bold">// The Full-Stack Engineer</p>
                <p className="pl-2 border-l border-blue-500/30">
                  <span className="text-purple-400">const</span> skills = [<br />
                  &nbsp;&nbsp;"Cloud Infrastructure",<br />
                  &nbsp;&nbsp;"System Architecture",<br />
                  &nbsp;&nbsp;"Secure Auth Implementation",<br />
                  &nbsp;&nbsp;"DB Optimization"<br />
                  ];
                </p>
                <div className="pt-8 flex justify-center">
                   <FaMicrochip className="text-8xl text-blue-500/10 animate-pulse" />
                </div>
              </div>
            </div>

            {/* Floating Glass Tag */}
            <div className="absolute -bottom-6 -right-6 bg-blue-600/10 backdrop-blur-xl border border-blue-500/20 p-6 rounded-2xl z-20 hidden md:block">
              <p className="text-4xl font-bold text-white mb-1">04</p>
              <p className="text-[10px] font-mono text-blue-400 uppercase tracking-tighter">Years in Tech Industry</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: THE CONTENT (7 Columns) */}
        <motion.div
          className="lg:col-span-7 space-y-8"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            <h2 className="text-sm font-mono text-blue-400 uppercase tracking-[0.4em]">Section_02: Introduction</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Solving problems with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Technical Precision.
              </span>
            </h3>
          </div>
          
          <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed">
            <p>
              I am an <span className="text-white font-medium">Information Technology Engineer</span> specializing in full-stack architecture. My approach combines the rigor of IT infrastructure with the fluidity of modern web development.
            </p>
            <p>
              I don't just write code; I design systems. Whether it's optimizing <span className="text-blue-300">Firebase clusters</span>, architecting <span className="text-purple-300">Next.js micro-frontends</span>, or securing <span className="text-cyan-300">Node.js environments</span>, my focus is on scalability and high-availability.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-6 pt-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="group relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all"
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl mb-3 opacity-80 group-hover:scale-110 transition-transform">{stat.icon}</div>
                <div className="text-2xl font-black text-white">{stat.value}</div>
                <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="pt-8">
            <button className="flex items-center gap-3 font-mono text-xs text-blue-400 hover:text-white transition-colors group">
              <FaTerminal />
              <span>READ_FULL_DOCUMENTATION.PDF</span>
              <motion.span 
                animate={{ x: [0, 5, 0] }} 
                transition={{ repeat: Infinity, duration: 1.5 }}
              >→</motion.span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}