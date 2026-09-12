"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, Play, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import DotGrid from "@/components/dotgrid";

/* ----------------------------------------
   Motion presets
---------------------------------------- */
const heroContainer = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, staggerChildren: 0.08 },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function IanHero() {
  const random = (min: number, max: number) =>
    Math.round(min + Math.random() * (max - min));

  const [metrics, setMetrics] = useState({
    confidence: "High",
    dimensionsScored: 10,
    sessionLength: 280,
    sessionsProcessed: 2847,
    company: "Northwind Logistics",
    industry: "Supply Chain & Logistics",
    maturityTier: "Average",
    readinessScore: 66,
    topGap: "No formal AI usage guidelines",
    nextStep: "Identify and prioritize AI use cases",
    bars: {
      matching: 80,
      engagement: 62,
      pipeline: 47,
    },
  });

  useEffect(() => {
    const metricTimer = setInterval(() => {
      setMetrics((prev) => ({
        ...prev,
        sessionLength: random(240, 320),
        sessionsProcessed: random(2700, 3100),
        readinessScore: random(58, 72),
        bars: {
          matching: random(72, 90),
          engagement: random(55, 75),
          pipeline: random(40, 60),
        },
      }));
    }, 2200);

    return () => clearInterval(metricTimer);
  }, []);

  const fmtDuration = (s: number) => `${Math.floor(s / 60)}m ${s % 60}s`;

  return (
    <section
      id="hero"
      className="relative overflow-hidden rounded-b-4xl bg-gradient-to-b from-[#030712] via-[#030712] to-[#0b0d12] py-12 lg:py-16 xl:py-24 2xl:py-32"
    >
      <DotGrid
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        dotSize={4}
        gap={15}
        baseColor="#0f1218"
        activeColor="#4f7cff"
        proximity={280}
        shockRadius={280}
        shockStrength={5}
        resistance={450}
        returnDuration={1.5}
        autoMode
      />

      <div className="absolute top-0 left-0 pointer-events-none z-0 opacity-40">
        <Image src="/herodecorleft.png" alt="" width={1000} height={1000} />
      </div>
      <div className="absolute top-0 right-0 pointer-events-none z-0 opacity-40">
        <Image src="/herodecorright.png" alt="" width={1000} height={1000} />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[637px] h-[1159px] bg-[#4f7cff]/20 blur-[190px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 mx-auto max-w-7xl 2xl:max-w-[1440px] px-6 sm:px-8 lg:px-10 xl:px-12">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-10 xl:gap-14 lg:grid-cols-[1fr_1.15fr]"
        >
          {/* ============================================
              LEFT COLUMN — Content
          ============================================ */}
          <div className="order-2 lg:order-1 space-y-5 text-center lg:text-left">
            <motion.div
              variants={heroItem}
              className="inline-flex items-center gap-2 mx-auto lg:mx-0 text-[0.72rem] uppercase tracking-[0.18em] text-[#4f7cff] font-semibold border-l-2 border-[#4f7cff] pl-[0.7rem]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#4f7cff] animate-pulse" />
              Now in Beta <span className="text-[#5a6478]">·</span>{" "}
              <span className="text-[#8a95a8] normal-case tracking-normal">
                Limited Access
              </span>
            </motion.div>

            <motion.h1
              variants={heroItem}
              className="font-medium tracking-[-0.02em] text-white text-[26px] leading-[1.15] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px]"
            >
              Pulse AI{" "}
              <span className="bg-gradient-to-r from-[#4f7cff] to-[#9ab4e8] bg-clip-text text-transparent">
                {" "}
                Readiness <br />
                Intelligence At Scale
              </span>
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="mx-auto lg:mx-0 max-w-[32ch] sm:max-w-xl text-[1.08rem] leading-[1.7] text-[#8a95a8]"
            >
              Turn a 5-minute conversation into a company's AI maturity score,
              its real gaps, and its next move — while turning every response
              into a qualified signal for your team.
            </motion.p>

            <motion.div
              variants={heroItem}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <Link
                href="/book-demo"
                className="inline-flex items-center gap-2 rounded-md bg-[#0078D4] px-6 py-3 text-sm font-medium text-white transition hover:scale-105"
              >
                Talk to Our Team <ArrowRight className="h-4 w-4" />
              </Link>
              <button
                className="glass-card inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-[#C5E6FF] hover:bg-white/10 transition"
              >
                <Play className="h-4 w-4 text-[#38BDF8]" />
                Product overview
              </button>
            </motion.div>


            <motion.div
              variants={heroItem}
              className="flex items-center gap-2 justify-center lg:justify-start text-[0.82rem] text-[#5a6478]"
            >
              <ShieldCheck className="h-4 w-4 text-[#4f7cff]" />
              Adaptive across 10 readiness dimensions · Enterprise-grade lead
              intelligence
            </motion.div>
          </div>

          {/* ============================================
              RIGHT COLUMN — Wider board
          ============================================ */}
          <div className="relative order-1 lg:order-2 w-full max-w-[640px] mx-auto lg:mx-0 lg:justify-self-end">
            {/* MOBILE PANEL */}
            <motion.div
              variants={heroItem}
              className="block sm:hidden w-full mx-auto flex flex-col gap-2"
            >
              <motion.div className="inline-flex items-center w-fit gap-2 mx-auto text-[0.62rem] uppercase tracking-[0.16em] text-[#4f7cff] bg-[rgba(79,124,255,0.12)] px-3 py-[0.3rem] rounded-[3px] border border-[rgba(79,124,255,0.28)] font-semibold">
                <Zap className="h-3.5 w-3.5" />
                Pulse Engine
              </motion.div>

              <motion.div
                className="relative z-10 overflow-hidden rounded-[6px] border border-[#4f7cff]/25 bg-gradient-to-b from-[#0f1a35]/80 to-[#0b0d12]/95 backdrop-blur-2xl p-4 shadow-[0_24px_48px_-20px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.06)]"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4f7cff] to-transparent opacity-60 animate-[scan_4s_linear_infinite]" />

                <div className="mb-4 flex justify-between pb-3 border-b border-[#4f7cff]/15">
                  <div>
                    <p className="text-[0.58rem] uppercase tracking-[0.16em] text-[#4f7cff] font-semibold">
                      Live Assessment
                    </p>
                    <p className="text-[0.75rem] font-semibold text-[#e8ecf2] mt-0.5">
                      Pulse Engine — Live Scoring
                    </p>
                  </div>
                  <span className="flex items-center gap-1 text-[0.68rem] text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Active
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {[
                    ["Confidence", metrics.confidence, "text-[#4f7cff]"],
                    ["Dimensions", metrics.dimensionsScored, "text-white"],
                    ["Session", fmtDuration(metrics.sessionLength), "text-white"],
                    [
                      "Sessions",
                      metrics.sessionsProcessed.toLocaleString(),
                      "text-white",
                    ],
                  ].map(([label, value, color]) => (
                    <motion.div
                      key={label as string}
                      className="bg-[#4f7cff]/[0.06] rounded-[3px] py-2 px-2 text-center border border-[#4f7cff]/15 backdrop-blur-sm"
                      animate={{ opacity: [0.9, 1, 0.9] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <p className="text-[0.52rem] uppercase text-[#8a95a8] tracking-[0.08em] mb-1">
                        {label}
                      </p>
                      <p className={`text-[0.82rem] font-bold ${color}`}>
                        {value}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* DESKTOP DASHBOARD — BLUE GLASSMORPHISM */}
            <motion.div
              variants={heroItem}
              className="relative hidden sm:block w-full"
            >
              {/* Ambient blue glow */}
              <div className="absolute -inset-8 bg-[#4f7cff]/20 blur-3xl rounded-full pointer-events-none z-0" />

              {/* FLOATING CARDS — blue glass */}
              <div className="absolute -left-16 top-8 z-20 hidden xl:flex">
                <motion.div
                  className="w-40 -rotate-6 rounded-[6px] border border-[#4f7cff]/25 bg-gradient-to-b from-[#0f1a35]/85 to-[#0b0d12]/95 backdrop-blur-2xl p-3 shadow-[0_24px_48px_-20px_rgba(0,0,0,0.9),0_0_24px_-4px_rgba(79,124,255,0.35),inset_0_1px_0_rgba(255,255,255,0.08)]"
                  animate={{ x: [-6, -14, -6], y: [0, -6, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  <p className="mb-2 text-[0.52rem] uppercase tracking-[0.16em] text-[#4f7cff] font-semibold">
                    Session Length
                  </p>
                  <p className="text-sm font-bold text-white">
                    {fmtDuration(metrics.sessionLength)}
                  </p>
                  <p className="text-[0.48rem] text-[#8a95a8] mt-1">
                    5-min target window
                  </p>
                </motion.div>
              </div>

              <div className="absolute -right-14 top-1/3 z-20 hidden xl:flex">
                <motion.div
                  className="w-40 rotate-6 rounded-[6px] border border-[#4f7cff]/25 bg-gradient-to-b from-[#0f1a35]/85 to-[#0b0d12]/95 backdrop-blur-2xl p-3 shadow-[0_24px_48px_-20px_rgba(0,0,0,0.9),0_0_24px_-4px_rgba(79,124,255,0.35),inset_0_1px_0_rgba(255,255,255,0.08)]"
                  animate={{ x: [6, 14, 6], y: [0, -8, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  <p className="mb-2 text-[0.52rem] uppercase tracking-[0.16em] text-[#4f7cff] font-semibold">
                    Maturity Tier
                  </p>
                  <p className="text-sm font-bold text-[#4f7cff]">
                    {metrics.maturityTier}
                  </p>
                  <p className="text-[0.48rem] text-[#8a95a8] mt-1">
                    Score: {metrics.readinessScore} / 100
                  </p>
                </motion.div>
              </div>

              {/* ============================================
                  MAIN DASHBOARD — BLUE GLASSMORPHISM PANEL
              ============================================ */}
              <motion.div
                className="relative z-10 overflow-hidden rounded-[14px] border border-[#4f7cff]/25 bg-gradient-to-b from-[#0f1a35]/85 via-[#0b1225]/90 to-[#0b0d12]/95 backdrop-blur-2xl p-6 shadow-[0_32px_64px_-24px_rgba(0,0,0,0.95),0_0_48px_-8px_rgba(79,124,255,0.4),inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-1px_0_rgba(79,124,255,0.1)]"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                {/* Top scan line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4f7cff] to-transparent opacity-80 animate-[scan_4s_linear_infinite]" />

                {/* Inner blue aura */}
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[80%] h-40 bg-[#4f7cff]/20 blur-3xl rounded-full pointer-events-none" />

                {/* Header */}
                <div className="relative mb-5 flex justify-between items-start pb-4 border-b border-[#4f7cff]/15">
                  <div className="flex flex-col gap-1">
                    <span className="inline-flex items-center gap-1.5 w-fit text-[0.55rem] uppercase tracking-[0.16em] text-[#4f7cff] bg-[rgba(79,124,255,0.15)] px-2 py-[0.25rem] rounded-[3px] border border-[rgba(79,124,255,0.35)] font-semibold backdrop-blur-sm">
                      <Zap className="h-2.5 w-2.5" />
                      LIVE ASSESSMENT · SAMPLE SESSION
                    </span>
                    <p className="text-[0.75rem] font-semibold text-[#e8ecf2] mt-1">
                      PULSE ENGINE — Live Readiness Scoring
                    </p>
                  </div>
                  <span className="flex items-center gap-1 text-[0.68rem] text-emerald-400 shrink-0">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Active
                  </span>
                </div>

                {/* Stat grid — blue glass tiles */}
                <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-5">
                  {[
                    {
                      label: "Confidence",
                      value: metrics.confidence,
                      highlight: true,
                    },
                    {
                      label: "Dimensions",
                      value: metrics.dimensionsScored,
                      highlight: false,
                    },
                    {
                      label: "Session",
                      value: fmtDuration(metrics.sessionLength),
                      highlight: false,
                    },
                    {
                      label: "Sessions",
                      value: metrics.sessionsProcessed.toLocaleString(),
                      highlight: false,
                    },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="bg-[#4f7cff]/[0.08] rounded-[6px] py-2.5 px-2 text-center border border-[#4f7cff]/20 backdrop-blur-sm transition-colors duration-[250ms] hover:border-[#4f7cff]/40 hover:bg-[#4f7cff]/[0.12]"
                    >
                      <span className="block text-[0.5rem] uppercase text-[#8a95a8] tracking-[0.08em] mb-1">
                        {stat.label}
                      </span>
                      <span
                        className={`text-[0.82rem] font-bold ${
                          stat.highlight ? "text-[#4f7cff]" : "text-white"
                        }`}
                      >
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* DETAIL ROWS — 2-column grid */}
                <div className="relative mb-5 grid grid-cols-2 gap-x-5 gap-y-0">
                  {[
                    { label: "Company", value: metrics.company },
                    { label: "Industry", value: metrics.industry },
                    {
                      label: "Maturity Tier",
                      value: (
                        <span className="inline-block bg-[rgba(79,124,255,0.15)] text-[#4f7cff] px-2 py-[0.1rem] rounded-[3px] text-[0.62rem] font-semibold border border-[rgba(79,124,255,0.35)]">
                          {metrics.maturityTier}
                        </span>
                      ),
                    },
                    {
                      label: "Readiness Score",
                      value: (
                        <span className="text-[#4f7cff] font-bold">
                          {metrics.readinessScore} / 100
                        </span>
                      ),
                    },
                    { label: "Top Gap", value: metrics.topGap },
                    { label: "Next Step", value: metrics.nextStep },
                  ].map((row, i) => (
                    <div
                      key={i}
                      className={`py-[0.55rem] ${
                        i < 4 ? "border-b border-[#4f7cff]/10" : ""
                      }`}
                    >
                      <p className="text-[0.52rem] uppercase text-[#8a95a8] tracking-[0.1em] mb-1">
                        {row.label}
                      </p>
                      <p className="text-[0.78rem] text-[#e8ecf2] font-medium leading-snug">
                        {row.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Progress bars — blue glass track */}
                <div className="relative space-y-2.5">
                  {[
                    ["Matching Accuracy", metrics.bars.matching],
                    ["Client Engagement", metrics.bars.engagement],
                    ["Deal Pipeline", metrics.bars.pipeline],
                  ].map(([label, value], i) => (
                    <div key={label as string}>
                      <div className="mb-1 flex justify-between text-[0.68rem] text-[#8a95a8]">
                        <span>{label}</span>
                        <span className="text-[#e8ecf2] font-semibold">
                          {value}%
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full bg-[#4f7cff]/10 border border-[#4f7cff]/10 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-[#4f7cff] to-[#9ab4e8] shadow-[0_0_10px_rgba(79,124,255,0.7)]"
                          animate={{
                            width: [
                              `${Number(value) - 5}%`,
                              `${value}%`,
                              `${Number(value) - 5}%`,
                            ],
                          }}
                          transition={{
                            duration: 3,
                            delay: i * 0.2,
                            repeat: Infinity,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer strip — blue glass */}
                <div className="relative mt-5 pt-4 border-t border-[#4f7cff]/15 grid grid-cols-3 gap-3 text-[0.68rem]">
                  <div className="text-center">
                    <p className="text-[#8a95a8] uppercase tracking-[0.06em] text-[0.52rem]">
                      Confidence
                    </p>
                    <p className="text-[#4f7cff] font-bold mt-1 text-[0.78rem]">
                      {metrics.confidence}
                    </p>
                  </div>
                  <div className="text-center border-x border-[#4f7cff]/15">
                    <p className="text-[#8a95a8] uppercase tracking-[0.06em] text-[0.52rem]">
                      Dimensions
                    </p>
                    <p className="text-emerald-400 font-bold mt-1 text-[0.78rem]">
                      {metrics.dimensionsScored}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-[#8a95a8] uppercase tracking-[0.06em] text-[0.52rem]">
                      Readiness
                    </p>
                    <p className="text-white font-bold mt-1 text-[0.78rem]">
                      {metrics.readinessScore}/100
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes scan {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(100%);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}