"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Zap, Activity, AlertTriangle, ShieldCheck, Flame } from "lucide-react";

export default function TerminalOverload({ onClose }) {
  const [nodes, setNodes] = useState(Array(12).fill({ heat: 0 }));
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [isGameOver, setIsGameOver] = useState(false);

  // Difficulty multiplier
  const isOverloaded = score >= 1000;

  // 1. DYNAMIC HEAT LOGIC
  useEffect(() => {
    if (isGameOver) return;

    // Base interval is 800ms. 
    // If score > 1000, it drops to ~300ms (Very Fast)
    const speed = isOverloaded 
      ? Math.max(400 - (score / 20), 200) 
      : 800 - Math.min(score / 10, 400);

    const heatInterval = setInterval(() => {
      setNodes((prevNodes) => {
        const newNodes = [...prevNodes];
        const randomIndex = Math.floor(Math.random() * newNodes.length);
        
        if (newNodes[randomIndex].heat < 3) {
          newNodes[randomIndex] = { ...newNodes[randomIndex], heat: newNodes[randomIndex].heat + 1 };
        }
        return newNodes;
      });
    }, speed);

    return () => clearInterval(heatInterval);
  }, [isGameOver, score, isOverloaded]);

  // 2. MELTDOWN CHECK
  useEffect(() => {
    const overheatingNodes = nodes.filter(n => n.heat >= 3).length;
    
    // DIFFICULTY SPIKE: At 1k score, you can only handle 2 critical nodes. 
    // The 3rd one causes a life loss.
    const limit = isOverloaded ? 3 : 4;

    if (overheatingNodes >= limit && !isGameOver) {
      setLives(l => {
        if (l <= 1) setIsGameOver(true);
        return l - 1;
      });
      setNodes(Array(12).fill({ heat: 0 }));
    }
  }, [nodes, isGameOver, isOverloaded]);

  const patchNode = (index) => {
    if (nodes[index].heat > 0) {
      // Bonus points for higher heat
      setScore(s => s + (nodes[index].heat * 50));
      setNodes(prev => {
        const next = [...prev];
        next[index] = { heat: 0 };
        return next;
      });
    }
  };

  return (
    <div className={`fixed inset-0 z-[999] flex items-center justify-center p-4 font-mono transition-colors duration-500 ${isOverloaded ? 'bg-red-950/90' : 'bg-black/95'} backdrop-blur-2xl`}>
      
      {/* OVERLOAD ALERT TEXT */}
      <AnimatePresence>
        {isOverloaded && !isGameOver && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="absolute top-10 text-red-500 font-black tracking-[1em] uppercase text-xl pointer-events-none"
          >
            ⚠ System_Overload_Detected ⚠
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`w-full max-w-2xl bg-[#0a0a0a] border ${isOverloaded ? 'border-red-500 shadow-[0_0_80px_rgba(239,68,68,0.3)]' : 'border-blue-500/30'} rounded-2xl overflow-hidden transition-all`}>
        
        {/* Header */}
        <div className={`p-6 border-b border-white/10 flex justify-between items-center ${isOverloaded ? 'bg-red-500/10' : 'bg-blue-500/5'}`}>
          <div className="flex items-center gap-6">
            <div>
              <p className={`text-[10px] uppercase tracking-widest ${isOverloaded ? 'text-red-400' : 'text-blue-400'}`}>
                {isOverloaded ? "Emergency_Power" : "System_Load"}
              </p>
              <div className="flex gap-1 mt-1">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className={`w-6 h-2 rounded-full ${i < lives ? (isOverloaded ? "bg-red-500 shadow-[0_0_10px_red]" : "bg-blue-500 shadow-[0_0_10px_#3b82f6]") : "bg-white/10"}`} />
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] text-purple-400 uppercase tracking-widest">Efficiency</p>
              <p className="text-xl font-bold text-white tracking-tighter">{score}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"><X /></button>
        </div>

        {/* Game Grid */}
        <div className="p-10 grid grid-cols-3 md:grid-cols-4 gap-4 relative">
          {nodes.map((node, i) => (
            <motion.button
              key={i}
              whileTap={{ scale: 0.9 }}
              onClick={() => patchNode(i)}
              className={`relative aspect-square rounded-xl border-2 flex items-center justify-center transition-all duration-150 ${
                node.heat === 0 ? "border-white/5 bg-white/5 text-white/10" :
                node.heat === 1 ? "border-yellow-500/50 bg-yellow-500/10 text-yellow-500" :
                node.heat === 2 ? "border-orange-500 bg-orange-500/20 text-orange-500 animate-pulse" :
                "border-red-500 bg-red-600 text-white animate-bounce shadow-[0_0_20px_#ef4444] z-10"
              }`}
            >
              {node.heat === 0 ? <ShieldCheck size={20} /> : 
               node.heat === 3 ? <Flame size={28} className="animate-pulse" /> : <Activity size={20} />}
            </motion.button>
          ))}

          <AnimatePresence>
            {isGameOver && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 bg-red-950/95 flex flex-col items-center justify-center z-50 text-center p-6"
              >
                <AlertTriangle className="text-white w-16 h-16 mb-4 animate-bounce" />
                <h2 className="text-3xl font-black text-white uppercase italic">Critical Failure</h2>
                <p className="text-red-200 mt-2 mb-8 uppercase text-xs tracking-[0.3em]">Hardware Meltdown @ {score} Units</p>
                <button 
                  onClick={() => { setNodes(Array(12).fill({ heat: 0 })); setScore(0); setLives(3); setIsGameOver(false); }}
                  className="px-10 py-4 bg-white text-red-600 font-black rounded-full hover:scale-105 transition-transform uppercase italic"
                >
                  Force_Reboot
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="p-4 bg-black border-t border-white/5 flex justify-between items-center text-[9px] font-mono">
          <span className={`flex items-center gap-2 ${isOverloaded ? 'text-red-500 animate-pulse' : 'text-gray-500'}`}>
            <div className={`w-1.5 h-1.5 rounded-full ${isOverloaded ? 'bg-red-500' : 'bg-green-500'}`} /> 
            {isOverloaded ? "STATUS: HARDWARE_MAX_TEMP" : "STATUS: NORMAL_OPS"}
          </span>
          <span className="text-gray-600 uppercase">Ver_2.0.Overload</span>
        </div>
      </div>
    </div>
  );
}