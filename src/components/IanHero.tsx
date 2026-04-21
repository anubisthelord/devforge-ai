"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Network,
  Zap,
  ArrowRight,
} from "lucide-react";
import { useEffect, useState } from "react";
import DotGrid from "@/components/dotgrid";

/* ----------------------------------------
   Feature strip (kept same data)
---------------------------------------- */
const FEATURES = [
  { label: "AI client insights", icon: Network },
  { label: "Smart property matching", icon: Zap },
  { label: "Deal visibility", icon: Cloud },
];

export default function IanHero() {
  const random = (min: number, max: number) =>
    Math.round(min + Math.random() * (max - min));

  const randomFloat = (min: number, max: number, d = 1) =>
    +(min + Math.random() * (max - min)).toFixed(d);

  const [metrics, setMetrics] = useState({
    score: 7.8,
    hotLeads: 9,
    match: 92,
    deals: 6,
    followUps: 14,
    conversion: 18.4,
    clients: 42,
    responseTime: 23,
    bars: {
      matching: 80,
      engagement: 62,
      pipeline: 47,
    },
  });

  useEffect(() => {
    const metricTimer = setInterval(() => {
      setMetrics({
        score: randomFloat(6, 9),
        hotLeads: random(6, 14),
        match: random(85, 98),
        deals: random(4, 10),
        followUps: random(10, 20),
        conversion: randomFloat(15, 25),
        clients: random(35, 60),
        responseTime: random(10, 30),
        bars: {
          matching: random(72, 90),
          engagement: random(55, 75),
          pipeline: random(40, 60),
        },
      });
    }, 2200);

    return () => clearInterval(metricTimer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#020617] py-14 lg:py-20 xl:py-28">

      {/* DotGrid background (PropIQ style) */}
      <DotGrid
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        dotSize={4}
        gap={16}
        baseColor="#0B1220"
        activeColor="#38BDF8"
        proximity={260}
        shockRadius={240}
        shockStrength={4}
        resistance={420}
        returnDuration={1.6}
        autoMode
      />

      {/* Soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0360A7]/40 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left space-y-6">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#C5E6FF]">
              <Zap className="h-3.5 w-3.5 text-[#38BDF8]" />
              IAN Technology • Cloud Intelligence
            </div>

            {/* Title */}
            <h1 className="text-white font-medium tracking-tight text-[28px] sm:text-[34px] lg:text-[42px] leading-[1.1]">
              Unified Cloud Intelligence <br />
              <span className="bg-gradient-to-r from-[#87CBFF] to-[#38BDF8] bg-clip-text text-transparent">
                with IAN Engine
              </span>
            </h1>

            {/* Description */}
            <p className="text-white/65 max-w-md mx-auto lg:mx-0 text-sm sm:text-base leading-relaxed">
              Monitor Azure services with real-time intelligence, predictive insights,
              and automated recommendations for faster decision-making.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start text-sm text-white/70">
              {FEATURES.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div key={f.label} className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-[#38BDF8]" />
                    {f.label}
                    {i !== FEATURES.length - 1 && (
                      <span className="h-4 w-px bg-white/10 ml-3" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <button className="inline-flex items-center gap-2 bg-[#0078D4] hover:bg-[#0A84E0] text-white px-6 py-3 rounded-md text-sm font-medium transition cursor-pointer">
                View live dashboard
                <ArrowRight className="h-4 w-4" />
              </button>

              {/* <span className="flex items-center gap-2 text-xs text-white/55 justify-center lg:justify-start">
                <ShieldCheck className="h-4 w-4 text-[#38BDF8]" />
                Always-on Azure monitoring
              </span> */}
            </div>
          </div>

          {/* RIGHT DASHBOARD */}
          {/* RIGHT DASHBOARD */}
          <div className="relative hidden sm:block">

            {/* FLOATING CARDS (RESTORED + PROPIQ THEME) */}
            {/* DESKTOP DASHBOARD */}
            <motion.div className="relative hidden sm:block col-span-2 justify-self-end w-full max-w-md">

              {/* FLOATING CARDS (PRESERVED SKEW + POSITIONING) */}
              <div className="absolute bottom-0 left-0 z-20 flex flex-col items-center gap-3 -translate-x-[85%] hidden lg:flex">

                {/* Card 1 */}
                <motion.div
                  className="w-48 -rotate-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 text-center"
                  animate={{ x: [-10, -18, -10] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  <p className="mb-3 text-xs text-white/60">Client Intelligence</p>

                  <div className="flex gap-3">
                    <div className="flex-1">
                      <p className="text-[11px] text-white/40">Active Clients</p>
                      <p className="text-lg font-semibold text-white">
                        {metrics.clients}
                      </p>
                    </div>

                    <div className="w-px bg-white/10" />

                    <div className="flex-1">
                      <p className="text-[11px] text-white/40">Hot Leads</p>
                      <p className="text-lg font-semibold text-[#38BDF8]">
                        {metrics.hotLeads}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                  className="w-48 rotate-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 text-center"
                  animate={{ x: [-6, -12, -6] }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  <p className="mb-3 text-xs text-white/60">Deal Readiness</p>

                  <div className="flex gap-3">
                    <div className="flex-1">
                      <p className="text-[11px] text-white/40">Client Score</p>
                      <p className="text-lg font-semibold text-emerald-400">
                        {metrics.score}/10
                      </p>
                    </div>

                    <div className="w-px bg-white/10" />

                    <div className="flex-1">
                      <p className="text-[11px] text-white/40">Match Rate</p>
                      <p className="text-lg font-semibold text-[#38BDF8]">
                        {metrics.match}%
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                  className="w-48 -rotate-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 text-center"
                  animate={{ x: [-4, -8, -4] }}
                  transition={{ duration: 7, repeat: Infinity }}
                >
                  <p className="mb-3 text-xs text-white/60">Sales Activity</p>

                  <div className="flex gap-3">
                    <div className="flex-1">
                      <p className="text-[11px] text-white/40">Deals Closing</p>
                      <p className="text-lg font-semibold text-white">
                        {metrics.deals}
                      </p>
                    </div>

                    <div className="w-px bg-white/10" />

                    <div className="flex-1">
                      <p className="text-[11px] text-white/40">Follow-ups</p>
                      <p className="text-lg font-semibold text-emerald-400">
                        {metrics.followUps}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* MAIN DASHBOARD */}
              <motion.div
                className="relative z-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                {/* Header */}
                <div className="mb-5 flex justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/50">
                      PropIQ • AI Pipeline
                    </p>
                    <p className="text-sm text-white">
                      Broker Dashboard
                    </p>
                  </div>

                  <span className="flex items-center gap-1 text-xs text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Active
                  </span>
                </div>

                {/* Metric Cards */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    ["Clients", metrics.clients],
                    ["Hot Leads", metrics.hotLeads],
                    ["Match Score", `${metrics.match}%`],
                    ["Deals Closed", metrics.deals],
                  ].map(([label, value]) => (
                    <motion.div
                      key={label as string}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4"
                      animate={{ opacity: [0.9, 1, 0.9] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <p className="text-xs text-white/55">{label}</p>
                      <p className="mt-1 text-xl font-semibold text-white">
                        {value}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Progress Bars */}
                <div className="mt-5 space-y-3">
                  {[
                    ["Matching Accuracy", metrics.bars.matching],
                    ["Client Engagement", metrics.bars.engagement],
                    ["Deal Pipeline", metrics.bars.pipeline],
                  ].map(([label, value], i) => (
                    <div key={label as string}>
                      <div className="mb-1 flex justify-between text-[11px] text-white/55">
                        <span>{label}</span>
                        <span>{value}%</span>
                      </div>

                      <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-[#38BDF8]"
                          animate={{
                            width: [
                              `${(Number(value) - 5)}%`,
                              `${value}%`,
                              `${(Number(value) - 5)}%`,
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
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}