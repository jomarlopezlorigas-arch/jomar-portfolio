"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Zap, Activity, AlertTriangle, ShieldCheck } from "lucide-react";

export default function TerminalOverload({ onClose }) {
  const [nodes, setNodes] = useState(Array(12).fill({ heat: 0 }));
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [isGameOver, setIsGameOver] = useState(false);

  // Increase heat randomly
  useEffect(() => {
    if (isGameOver) return;

    const heatInterval = setInterval(() => {
      setNodes((prevNodes) => {
        const newNodes = [...prevNodes];
        const randomIndex = Math.floor(Math.random() * newNodes.length);
        
        // If node is already hot, it gets closer to exploding
        if (newNodes[randomIndex].heat < 3) {
          newNodes[randomIndex] = { ...newNodes[randomIndex], heat: newNodes[randomIndex].heat + 1 };
        }
        return newNodes;
      });
    }, 800 - Math.min(score / 10, 500)); // Gets faster as score increases

    return () => clearInterval(heatInterval);
  }, [isGameOver, score]);

  // Check for meltdowns
  useEffect(() => {
    const overheatingNodes = nodes.filter(n => n.heat >= 3).length;
    if (overheatingNodes >= 4 && !isGameOver) {
      setLives(l => {
        if (l <= 1) setIsGameOver(true);
        return l - 1;
      });
      // Reset heat after losing a life
      setNodes(Array(12).fill({ heat: 0 }));
    }
  }, [nodes, isGameOver]);

  const patchNode = (index) => {
    if (nodes[index].heat > 0) {
      setScore(s => s + (nodes[index].heat * 50));
      setNodes(prev => {
        const next = [...prev];
        next[index] = { heat: 0 };
        return next;
      });
    }
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 font-mono">
      <div className="w-full max-w-2xl bg-[#0a0a0a] border border-blue-500/30 rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(59,130,246,0.15)]">
        
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-blue-500/5">
          <div className="flex items-center gap-6">
            <div>
              <p className="text-[10px] text-blue-400 uppercase tracking-widest">System_Load</p>
              <div className="flex gap-1 mt-1">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className={`w-6 h-2 rounded-full ${i < lives ? "bg-blue-500 shadow-[0_0_10px_#3b82f6]" : "bg-white/10"}`} />
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] text-purple-400 uppercase tracking-widest">Efficiency</p>
              <p className="text-xl font-bold text-white tracking-tighter">{score}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors"><X /></button>
        </div>

        {/* Game Grid */}
        <div className="p-10 grid grid-cols-3 md:grid-cols-4 gap-6 relative">
          {nodes.map((node, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => patchNode(i)}
              className={`relative aspect-square rounded-xl border-2 flex items-center justify-center transition-all duration-300 ${
                node.heat === 0 ? "border-white/5 bg-white/5 text-white/20" :
                node.heat === 1 ? "border-yellow-500/50 bg-yellow-500/10 text-yellow-500" :
                node.heat === 2 ? "border-orange-500 bg-orange-500/20 text-orange-500 animate-pulse" :
                "border-red-500 bg-red-500 text-white animate-bounce shadow-[0_0_20px_#ef4444]"
              }`}
            >
              {node.heat === 0 ? <ShieldCheck size={24} /> : 
               node.heat === 3 ? <AlertTriangle size={32} /> : <Activity size={24} />}
              
              {node.heat > 0 && (
                <span className="absolute -top-2 -right-2 bg-black border border-current text-[10px] px-1 rounded">
                  {node.heat === 3 ? "CRITICAL" : `lvl_${node.heat}`}
                </span>
              )}
            </motion.button>
          ))}

          <AnimatePresence>
            {isGameOver && (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center z-50 text-center p-6"
              >
                <Zap className="text-yellow-500 w-16 h-16 mb-4" />
                <h2 className="text-3xl font-black text-white uppercase italic">Critical Failure</h2>
                <p className="text-gray-400 mt-2 mb-8 uppercase text-sm tracking-widest">Final Throughput: {score}</p>
                <button 
                  onClick={() => { setNodes(Array(12).fill({ heat: 0 })); setScore(0); setLives(3); setIsGameOver(false); }}
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all"
                >
                  RESTART_ENGINE
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="p-4 bg-white/5 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-gray-500">
          <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500" /> STATUS: MONITORING_ACTIVE</span>
          <span>PATCH_VERSION: 1.0.4</span>
        </div>
      </div>
    </div>
  );
}