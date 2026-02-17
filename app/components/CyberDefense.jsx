"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Zap, AlertTriangle, Cpu, RefreshCw, ShieldAlert, Terminal } from "lucide-react";

export default function PacketRunner({ onClose }) {
  // Game Constants
  const GRAVITY = 0.55;
  const JUMP_STRENGTH = -7.5;
  const PIPE_SPEED = 4.5;
  const PIPE_SPAWN_RATE = 1600;
  const BIRD_SIZE = 34;
  const PIPE_WIDTH = 70;
  const GAP_SIZE = 170;

  const [birdY, setBirdY] = useState(250);
  const [velocity, setVelocity] = useState(0);
  const [pipes, setPipes] = useState([]);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  
  const requestRef = useRef();

  const jump = useCallback(() => {
    if (isGameOver) return;
    if (!hasStarted) setHasStarted(true);
    setVelocity(JUMP_STRENGTH);
  }, [isGameOver, hasStarted]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Space") { e.preventDefault(); jump(); }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [jump]);

  const update = useCallback(() => {
    if (!hasStarted || isGameOver) return;

    setBirdY((y) => {
      const newY = y + velocity;
      if (newY > 460 || newY < 0) { setIsGameOver(true); return y; }
      return newY;
    });

    setVelocity((v) => v + GRAVITY);

    setPipes((prevPipes) => {
      const nextPipes = prevPipes
        .map((p) => ({ ...p, x: p.x - PIPE_SPEED }))
        .filter((p) => p.x > -PIPE_WIDTH);

      for (const p of nextPipes) {
        const withinX = 60 + BIRD_SIZE > p.x && 60 < p.x + PIPE_WIDTH;
        const hitTop = birdY < p.topHeight;
        const hitBottom = birdY + BIRD_SIZE > p.topHeight + GAP_SIZE;
        if (withinX && (hitTop || hitBottom)) setIsGameOver(true);
      }
      return nextPipes;
    });

    requestRef.current = requestAnimationFrame(update);
  }, [hasStarted, isGameOver, velocity, birdY]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(requestRef.current);
  }, [update]);

  useEffect(() => {
    if (!hasStarted || isGameOver) return;
    const timer = setInterval(() => {
      const topHeight = Math.floor(Math.random() * (300 - 100)) + 50;
      setPipes((prev) => [...prev, { x: 600, topHeight, id: Date.now() }]);
      setScore((s) => s + 1);
    }, PIPE_SPAWN_RATE);
    return () => clearInterval(timer);
  }, [hasStarted, isGameOver]);

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 font-mono bg-black/95 backdrop-blur-2xl">
      <div 
        onClick={jump}
        className={`relative w-full max-w-[600px] h-[500px] bg-[#020202] border-2 rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer shadow-[0_0_50px_rgba(59,130,246,0.1)] ${isGameOver ? 'border-red-600' : 'border-blue-500/40'}`}
      >
        {/* SCANLINE EFFECT */}
        <div className="absolute inset-0 pointer-events-none z-40 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
        
        {/* GRID BACKGROUND */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#1e40af 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
        />

        {/* TOP STATUS BAR */}
        <div className="absolute top-0 w-full p-6 flex justify-between items-start z-50 pointer-events-none">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-blue-400">
              <Terminal size={14} />
              <span className="text-[10px] tracking-widest font-bold uppercase">Packet_Injection_Status</span>
            </div>
            <div className="text-2xl font-black text-white italic">
              {score.toString().padStart(4, '0')}
            </div>
          </div>
          <button 
            onClick={(e) => { e.stopPropagation(); onClose(); }} 
            className="p-2 bg-white/5 border border-white/10 rounded-full hover:bg-red-500/20 hover:border-red-500/50 transition-all pointer-events-auto"
          >
            <X size={18} className="text-white" />
          </button>
        </div>

        {/* DATA PACKET (THE BIRD) */}
        <motion.div
          animate={{ y: birdY, rotate: velocity * 2.5 }}
          className="absolute left-[60px] z-30"
          style={{ width: BIRD_SIZE, height: BIRD_SIZE }}
        >
          <div className="w-full h-full bg-blue-500 rounded-md shadow-[0_0_20px_#3b82f6] flex items-center justify-center relative border border-blue-400/50">
            <Cpu size={20} className="text-white" />
            {/* Trail Particles */}
            <div className="absolute -left-4 w-6 h-1 bg-gradient-to-r from-transparent to-blue-400 blur-sm opacity-50" />
          </div>
        </motion.div>

        {/* FIREWALLS (PIPES) */}
        {pipes.map((pipe) => (
          <div key={pipe.id}>
            {/* Top Firewall */}
            <div 
              className="absolute bg-[#1a0000] border-b-4 border-red-600 group"
              style={{ left: pipe.x, top: 0, width: PIPE_WIDTH, height: pipe.topHeight }}
            >
              <div className="absolute inset-0 bg-red-600/10 animate-pulse" />
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[8px] text-red-500 font-bold opacity-40 uppercase">Firewall</div>
            </div>
            {/* Bottom Firewall */}
            <div 
              className="absolute bg-[#1a0000] border-t-4 border-red-600"
              style={{ left: pipe.x, top: pipe.topHeight + GAP_SIZE, width: PIPE_WIDTH, height: 500 - (pipe.topHeight + GAP_SIZE) }}
            >
              <div className="absolute inset-0 bg-red-600/10 animate-pulse" />
              <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[8px] text-red-500 font-bold opacity-40 uppercase">Firewall</div>
            </div>
          </div>
        ))}

        {/* OVERLAYS */}
        <AnimatePresence>
          {!hasStarted && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 z-[60] backdrop-blur-sm">
              <div className="p-4 rounded-full bg-blue-500/10 border border-blue-500/30 mb-6">
                <Zap size={40} className="text-blue-400 animate-pulse" />
              </div>
              <h2 className="text-3xl font-black text-white tracking-tighter italic uppercase">Network Breach</h2>
              <p className="text-blue-400/60 text-[10px] tracking-[0.3em] mt-2 mb-8">CLICK TO INITIALIZE DATA STREAM</p>
              <div className="flex gap-4 text-[9px] text-gray-500 uppercase font-mono">
                <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Jump: Space/Click</span>
                <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-red-500" /> Avoid: Firewalls</span>
              </div>
            </motion.div>
          )}

          {isGameOver && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="absolute inset-0 flex flex-col items-center justify-center bg-red-950/90 z-[70] p-8 text-center">
              <ShieldAlert size={60} className="text-white mb-6 animate-bounce" />
              <h2 className="text-5xl font-black text-white italic uppercase tracking-tighter">Connection Lost</h2>
              <p className="text-red-300 text-xs tracking-[0.4em] mt-2 mb-10 opacity-70">PACKET_INTERCEPTED // STATUS_TERMINATED</p>
              
              <div className="bg-black/40 border border-white/10 p-4 rounded-xl mb-8 w-full max-w-[240px]">
                <p className="text-[10px] text-gray-400 uppercase">Total Bits Sent</p>
                <p className="text-3xl font-bold text-white tracking-tight">{score}</p>
              </div>

              <button 
                onClick={(e) => { e.stopPropagation(); setBirdY(250); setVelocity(0); setPipes([]); setScore(0); setIsGameOver(false); setHasStarted(false); }}
                className="group flex items-center gap-3 px-10 py-4 bg-white text-red-600 font-black rounded-full hover:scale-105 transition-all shadow-2xl active:scale-95"
              >
                <RefreshCw size={20} className="group-hover:rotate-180 transition-transform duration-500" />
                RE-INITIALIZE
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}