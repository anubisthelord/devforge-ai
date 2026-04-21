"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Play,
  Mic,
  FileText,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import DotGrid from "@/components/dotgrid";

/* ---------------- DATA ---------------- */
const FEATURES = [
  { label: "One-click walkthroughs", icon: Play },
  { label: "AI voice narration", icon: Mic },
  { label: "Docs-driven control", icon: FileText },
];



/* ---------------- MOTION ---------------- */
const container = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1, duration: 0.6 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function DemoAgentHero() {
  return (
    <section className="relative overflow-hidden bg-[#020617] py-12 lg:py-16 xl:py-24 2xl:py-32">

      {/* DOT GRID BACKGROUND (FIXED) */}
      <DotGrid
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        dotSize={4}
        gap={18}
        baseColor="#0B1220"
        activeColor="#34D399"
        proximity={240}
        shockRadius={200}
        shockStrength={3}
        resistance={400}
        returnDuration={1.4}
        autoMode
      />

      {/* soft glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(16,185,129,0.15),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >

          {/* ================= LEFT ================= */}
          <div className="text-center lg:text-left space-y-6">

            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-emerald-200"
            >
              <Play className="h-3.5 w-3.5 text-emerald-400" />
              AI Demo Automation Engine
            </motion.div>

            <motion.h1
              variants={item}
              className="text-white font-semibold text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.1]"
            >
              Turn product flows into
              <span className="bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">
                {" "}interactive AI demos
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-white/65 max-w-md mx-auto lg:mx-0 text-sm sm:text-base"
            >
              Capture real user journeys, convert them into structured demo flows,
              and generate AI narration automatically for consistent product storytelling.
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-wrap gap-3 justify-center lg:justify-start text-sm text-white/70"
            >
              {FEATURES.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div key={f.label} className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-emerald-400" />
                    {f.label}
                    {i !== FEATURES.length - 1 && (
                      <span className="h-4 w-px bg-white/10 ml-3" />
                    )}
                  </div>
                );
              })}
            </motion.div>

            <motion.div
              variants={item}
              className="flex gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/book-demo"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black px-6 py-3 rounded-xl text-sm font-medium transition"
              >
                See live demo
                <ArrowRight className="h-4 w-4" />
              </Link>

              <span className="flex items-center gap-2 text-xs text-white/55">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                AI narration enabled
              </span>
            </motion.div>
          </div>
          <div className="relative flex items-center justify-center">
  <motion.div
    className="relative w-full max-w-md h-[450px] rounded-2xl border border-white/10 bg-[#020617]/80 backdrop-blur-2xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.4)]"
    animate={{ y: [0, -3, 0] }}
    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
  >
    {/* SOFT DEPTH LAYER */}
    <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent opacity-60" />

    {/* GRID */}
    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,rgba(52,211,153,0.18)_1px,transparent_0)] [background-size:18px_18px]" />

    {/* floating micro nodes (adds life) */}
    {[...Array(10)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute h-1 w-1 rounded-full bg-emerald-400/40"
        style={{
          top: `${10 + i * 8}%`,
          left: `${10 + (i % 5) * 18}%`,
        }}
        animate={{
          opacity: [0.2, 0.8, 0.2],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 3 + i * 0.2,
          repeat: Infinity,
        }}
      />
    ))}

    {/* HEADER */}
    <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
      <p className="text-[10px] text-white/50 tracking-[0.25em] uppercase">
        STAGE AI Engine
      </p>
      <span className="text-[10px] text-emerald-400 flex items-center gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
        Live
      </span>
    </div>

    {/* STAGE 1 */}
    <motion.div
      className="absolute left-4 top-[18%] w-[42%] rounded-xl border border-white/10 bg-white/5 p-3"
      animate={{ opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      <p className="text-[10px] text-white/60 mb-2">Capture Layer</p>

      <div className="space-y-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-1">
            <motion.div
              className="h-1.5 rounded bg-emerald-400/30"
              animate={{ width: ["40%", "100%", "60%"] }}
              transition={{ duration: 2 + i * 0.2, repeat: Infinity }}
            />
            <div className="h-1 w-2/3 bg-white/5 rounded" />
          </div>
        ))}
      </div>
    </motion.div>

    {/* FLOW */}
    <motion.div
      className="absolute left-1/2 top-[30%] -translate-x-1/2 text-emerald-400/70"
      animate={{ y: [0, 4, 0] }}
      transition={{ duration: 2.5, repeat: Infinity }}
    >
      ↓
    </motion.div>

    {/* STAGE 2 */}
    <motion.div
      className="absolute left-1/2 -translate-x-1/2 top-[38%] w-[70%] rounded-xl border border-emerald-400/15 bg-emerald-500/10 p-3"
      animate={{
        boxShadow: [
          "0 0 0px rgba(16,185,129,0.08)",
          "0 0 25px rgba(16,185,129,0.18)",
          "0 0 0px rgba(16,185,129,0.08)",
        ],
      }}
      transition={{ duration: 4, repeat: Infinity }}
    >
      <p className="text-[10px] text-emerald-300 mb-2">
        AI Understanding Layer
      </p>

      {/* richer processing visualization */}
      <div className="space-y-2">
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="h-1.5 rounded bg-emerald-400/20 origin-left"
            animate={{ scaleX: [0.3, 1, 0.5] }}
            transition={{ duration: 2 + i * 0.2, repeat: Infinity }}
          />
        ))}
      </div>

      {/* tiny activity log */}
      <div className="mt-2 space-y-1">
        <p className="text-[9px] text-white/40">• parsing intent</p>
        <p className="text-[9px] text-white/40">• mapping structure</p>
      </div>
    </motion.div>

    {/* FLOW */}
    <motion.div
      className="absolute left-1/2 top-[55%] -translate-x-1/2 text-emerald-400/60"
      animate={{ y: [0, 4, 0] }}
      transition={{ duration: 2.5, repeat: Infinity }}
    >
      ↓
    </motion.div>

    {/* STAGE 3 */}
    <motion.div
      className="absolute right-4 top-[62%] w-[42%] rounded-xl border border-white/10 bg-white/5 p-3"
      animate={{ opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      <p className="text-[10px] text-white/60 mb-2">Output Layer</p>

      <div className="space-y-2">
        <div className="h-2.5 w-full rounded bg-white/10" />
        <div className="h-2 w-4/5 rounded bg-white/10" />
        <div className="h-2 w-2/3 rounded bg-white/10" />
      </div>

      {/* subtle result tags */}
      <div className="mt-2 flex gap-1 flex-wrap">
        <span className="text-[8px] px-1.5 py-[2px] rounded bg-emerald-400/10 text-emerald-300">
          structured
        </span>
        <span className="text-[8px] px-1.5 py-[2px] rounded bg-emerald-400/10 text-emerald-300">
          realtime
        </span>
      </div>
    </motion.div>

    {/* CORE */}
    <motion.div
      className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center shadow-[0_0_60px_rgba(16,185,129,0.25)]"
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 4, repeat: Infinity }}
    >
      <Play className="h-6 w-6 text-emerald-400" />
    </motion.div>
  </motion.div>
</div>

        </motion.div>
      </div>
    </section>
  );
}