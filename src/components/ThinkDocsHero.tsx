"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  ArrowRight,
  FolderOpen,
  Tag,
  MessageSquare,

} from "lucide-react";
import { useEffect, useState } from "react";
import DotGrid from "@/components/dotgrid";

/* ----------------------------------------
   Data
---------------------------------------- */
const INSIGHTS = [
  "Real-time signals detected across system",
  "Behavioral anomaly pattern identified",
  "Automated classification triggered",
  "AI summary generated successfully",
  "Proactive response executed across layer",
];

const STATS = [
  { label: "Signals processed", value: 12400 },
  { label: "Patterns detected", value: 320 },
  { label: "AI decisions", value: 890 },
  { label: "Active systems", value: 48 },
];

/* ----------------------------------------
   Motion
---------------------------------------- */
const container = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

export default function ThinkDocsHero() {
  const [insightIndex, setInsightIndex] = useState(0);
  const [statsCount, setStatsCount] = useState(STATS.map(() => 0));

  useEffect(() => {
    const t = setInterval(
      () => setInsightIndex((v) => (v + 1) % INSIGHTS.length),
      3000
    );
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setStatsCount((prev) =>
        prev.map((v, i) =>
          v < STATS[i].value
            ? Math.min(v + Math.ceil(STATS[i].value / 70), STATS[i].value)
            : v
        )
      );
    }, 35);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#020617] py-14 lg:py-20">

      {/* Background Grid */}
      <DotGrid
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        dotSize={4}
        gap={16}
        baseColor="#0B1220"
        activeColor="#38BDF8"
        proximity={240}
        shockRadius={200}
        shockStrength={3}
        resistance={400}
        returnDuration={1.4}
        autoMode
      />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0360A7]/30 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

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
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-sky-200"
            >
              <FileText className="h-3.5 w-3.5 text-sky-400" />
              ThinkDocs AI Intelligence Layer
            </motion.div>

            <motion.h1
              variants={item}
              className="text-white font-medium text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.1]"
            >
              Turn documents into
              <span className="bg-gradient-to-r from-[#87CBFF] to-[#38BDF8] bg-clip-text text-transparent">
                {" "}real-time intelligence
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-white/65 max-w-md mx-auto lg:mx-0 text-sm sm:text-base"
            >
              AI-powered system that understands, classifies, summarizes and
              executes actions from enterprise documents instantly.
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <Link
                href="/book-demo"
                className="inline-flex items-center gap-2 bg-[#0078D4] hover:bg-[#0A84E0] text-white px-6 py-3 rounded-md text-sm"
              >
                Get live demo
                <ArrowRight className="h-4 w-4" />
              </Link>

              <button className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-5 py-3 rounded-md text-sm text-white/80 hover:bg-white/10">
                <FolderOpen className="h-4 w-4 text-sky-400" />
                System overview
              </button>
            </motion.div>

            <motion.div
              variants={item}
              className="flex items-center gap-2 justify-center lg:justify-start text-xs text-white/50"
            >
              <Tag className="h-4 w-4 text-sky-400" />
              Semantic AI · Auto-tagging · Workflow automation
            </motion.div>
          </div>

          {/* ================= RIGHT (NEW CLEAN DASHBOARD) ================= */}
       {/* ================= RIGHT (ANIMATED PROPIQ STYLE DASHBOARD) ================= */}
<motion.div
  variants={item}
  className="relative"
>

  {/* Outer glow ring */}
  <motion.div
    className="absolute inset-0 rounded-2xl bg-sky-500/10 blur-2xl"
    animate={{
      opacity: [0.2, 0.35, 0.2],
      scale: [0.98, 1.02, 0.98],
    }}
    transition={{ duration: 6, repeat: Infinity }}
  />

  {/* MAIN CARD */}
  <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 overflow-hidden">

    {/* SCAN BEAM */}
    <motion.div className="absolute inset-0 pointer-events-none">
      <motion.div
        className="absolute -left-1/2 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-sky-400/10 to-transparent"
        animate={{ x: ["0%", "230%"] }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>

    {/* floating noise pulse dots */}
    <motion.div
      className="absolute inset-0 opacity-30"
      animate={{
        opacity: [0.15, 0.25, 0.15],
      }}
      transition={{ duration: 5, repeat: Infinity }}
    />

    {/* HEADER */}
    <div className="flex items-center justify-between mb-5 relative z-10">

      <div>
        <motion.p
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-[10px] uppercase tracking-widest text-white/50"
        >
          ThinkDocs • AI Core
        </motion.p>

        <p className="text-sm text-white flex items-center gap-2">
          <motion.span
            animate={{ rotate: [0, 10, 0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            ⚡
          </motion.span>
          Intelligence Engine
        </p>
      </div>

      {/* LIVE PULSE */}
      <div className="flex items-center gap-1 text-[10px] text-emerald-400">
        <motion.span
          className="h-2 w-2 rounded-full bg-emerald-400"
          animate={{ scale: [1, 1.6, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        Live
      </div>
    </div>

    {/* STREAMING EVENTS */}
    <div className="space-y-3 relative z-10">

      {[
        "Document ingestion completed",
        "AI classification running",
        "Semantic index updating",
      ].map((t, i) => (
        <motion.div
          key={t}
          className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3"
          initial={{ opacity: 0, x: -15 }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: i * 0.15,
            duration: 0.6,
          }}
        >

          <div className="flex items-center gap-2">
            {/* pulsing dot */}
            <motion.div
              className="h-2 w-2 rounded-full bg-sky-400"
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />

            <span className="text-sm text-white/80">
              {t}
            </span>
          </div>

          <motion.span
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[10px] text-sky-300 bg-sky-500/10 px-2 py-0.5 rounded-full"
          >
            live
          </motion.span>
        </motion.div>
      ))}
    </div>

    {/* INSIGHT BOX */}
    <AnimatePresence mode="wait">
      <motion.div
        key={insightIndex}
        className="mt-5 flex items-center gap-2 text-xs text-white/70 rounded-xl border border-sky-400/20 bg-[#0B1220]/80 p-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
      >
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        >
          <MessageSquare className="h-4 w-4 text-sky-400" />
        </motion.div>

        {INSIGHTS[insightIndex]}
      </motion.div>
    </AnimatePresence>

    {/* STATS GRID */}
    <div className="mt-5 grid grid-cols-2 gap-3 relative z-10">

      {STATS.map((s, i) => (
        <motion.div
          key={i}
          className="rounded-xl border border-white/10 bg-white/5 p-3 text-center"
          animate={{
            y: [0, -2, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        >
          <div className="text-sky-300 font-semibold">
            {statsCount[i].toLocaleString()}
          </div>

          <div className="text-[10px] text-white/50 uppercase">
            {s.label}
          </div>
        </motion.div>
      ))}
    </div>

    {/* subtle bottom glow line */}
    <motion.div
      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400/40 to-transparent"
      animate={{ opacity: [0.2, 0.6, 0.2] }}
      transition={{ duration: 3, repeat: Infinity }}
    />
  </div>
</motion.div>
        </motion.div>
      </div>
    </section>
  );
}