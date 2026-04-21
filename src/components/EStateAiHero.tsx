"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  ArrowRight,
  Play,
  Zap,
} from "lucide-react";
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

    return () => {
      clearInterval(metricTimer);
    };
  }, []);
  return (
    <section
      id="hero"
      className="relative overflow-hidden rounded-b-4xl bg-gradient-to-b from-[#020617] via-[#020617] to-[#030712] py-12 lg:py-16 xl:py-24 2xl:py-32"
    >
      {/* DotGrid — same as HomePageHero */}
      <DotGrid
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        dotSize={4}
        gap={15}
        baseColor="#181322ff"
        activeColor="#5227FF"
        proximity={280}
        shockRadius={280}
        shockStrength={5}
        resistance={450}
        returnDuration={1.5}
        autoMode
      />

      {/* Background images — same as HomePageHero */}
      <div className="absolute top-0 left-0 pointer-events-none z-0">
        <Image
          src="/herodecorleft.png"
          alt=""
          width={1000}
          height={1000}
        />
      </div>
      <div className="absolute top-0 right-0 pointer-events-none z-0">
        <Image
          src="/herodecorright.png"
          alt=""
          width={1000}
          height={1000}
        />
      </div>

      {/* Center glow — same as HomePageHero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[637px] h-[1159px] bg-[#0360A7]/60 blur-[190px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 mx-auto max-w-7xl 2xl:max-w-[1440px] px-6 sm:px-8 lg:px-10 xl:px-12">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-10 xl:gap-12 lg:grid-cols-2"
        >
          {/* LEFT COLUMN — Content (HomePageHero + HeroCard theme) */}
          <div className="order-2 lg:order-1 space-y-5 text-center lg:text-left">
            <motion.div
              variants={heroItem}
              className="inline-flex items-center gap-2 mx-auto lg:mx-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-[#C5E6FF]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#38BDF8] uppercase" />
              Now in Beta <span className="text-white/50">·</span> Limited Access
            </motion.div>

            <motion.h1
              variants={heroItem}
              className="font-medium tracking-[-0.02em] text-white text-[26px] leading-[1.15] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px]"
            >
              Close More Property Deals <br /> with 

              <span className="bg-gradient-to-r from-[#87CBFF] to-[#C5E6FF] bg-clip-text text-transparent">
                {" "}
                AI-Powered Engine <br />
              </span>{" "}
             
              </motion.h1>

            <motion.p
              variants={heroItem}
              className="mx-auto lg:mx-0 max-w-[32ch] sm:max-w-md text-sm md:text-base leading-relaxed text-white/65"
            >
            A smart platform for real estate Agents / brokers to identify serious buyers, recommend the right properties, and generate personalized sales pitches in seconds.
            </motion.p>

            <motion.div
              variants={heroItem}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <Link
                href="/book-demo"
                className="inline-flex items-center gap-2 rounded-md bg-[#0078D4] px-6 py-3 text-sm font-medium text-white transition hover:scale-105"
              >
                Get a live demo <ArrowRight className="h-4 w-4" />
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
              className="flex items-center gap-2 justify-center lg:justify-start text-[11px] text-white/55"
            >
              <ShieldCheck className="h-4 w-4 text-[#38BDF8]" />
              Real-time property recommendations for serious buyers
            </motion.div>
          </div>

          {/* RIGHT COLUMN — Radar animation (original animation retained) */}
          <div className="relative mx-auto aspect-square w-full order-1 lg:order-2 max-w-[260px] sm:max-w-[300px] md:max-w-[340px] xl:max-w-md">
          <motion.div className="order-1 block sm:hidden col-span-2 w-full mx-auto flex flex-col gap-2">
            <motion.div className="inline-flex items-center w-fit gap-2 mx-auto rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] text-sky-100/80 backdrop-blur">
              <Zap className="h-3.5 w-3.5 text-sky-300" />
              <span className="uppercase tracking-[0.18em]">PropIQ AI Engine</span>
            </motion.div>

            <motion.div
              className="relative z-10 rounded-2xl border border-white/10 bg-[#020617]/80 p-6 backdrop-blur"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <div className="mb-5 flex justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/50">
                    PropIQ • Live Insights
                  </p>
                  <p className="text-sm text-white">Broker Performance</p>
                </div>
                <span className="flex items-center gap-1 text-xs text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Active
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {[
                  ["Client Score", `${metrics.score}/10`, "text-emerald-400"],
                  ["Hot Leads", metrics.hotLeads, "text-red-400"],
                  ["Match Rate", `${metrics.match}%`, "text-sky-400"],
                  ["Deals Closing", metrics.deals, "text-amber-400"],
                ].map(([label, value, color]) => (
                  <motion.div
                    key={label as string}
                    className="rounded-xl border border-white/8 bg-white/5 py-2 px-3"
                    animate={{ opacity: [0.9, 1, 0.9] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <p className="text-xs text-white/55">{label}</p>
                    <p className={`mt-1 text-md font-semibold ${color}`}>{value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* DESKTOP DASHBOARD */}
          <motion.div className="relative hidden sm:block col-span-2 justify-self-end w-full max-w-md">

            {/* FLOATING CARDS */}
            <div className="absolute bottom-0 left-0 z-20 flex flex-col items-center gap-3 -translate-x-[85%] hidden lg:flex">

              <motion.div className="w-48 -rotate-8 rounded-2xl border border-white/10 bg-[#020617]/90 p-4 text-center"
                animate={{ x: [-10, -18, -10] }} transition={{ duration: 5, repeat: Infinity }}>
                <p className="mb-3 text-xs text-white/70">Client Intelligence</p>
                <div className="flex gap-3">
                  <div className="flex-1">
                    <p className="text-[11px] text-white/50">Active Clients</p>
                    <p className="text-lg font-semibold text-amber-400">{metrics.clients}</p>
                  </div>
                  <div className="w-px bg-white/10" />
                  <div className="flex-1">
                    <p className="text-[11px] text-white/50">Hot Leads</p>
                    <p className="text-lg font-semibold text-emerald-400">{metrics.hotLeads}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div className="w-48 rotate-8 rounded-2xl border border-white/10 bg-[#020617]/90 p-4 text-center"
                animate={{ x: [-6, -12, -6] }} transition={{ duration: 6, repeat: Infinity }}>
                <p className="mb-3 text-xs text-white/70">Deal Readiness</p>
                <div className="flex gap-3">
                  <div className="flex-1">
                    <p className="text-[11px] text-white/50">Client Score</p>
                    <p className="text-lg font-semibold text-sky-400">
                      {metrics.score}/10
                    </p>
                  </div>
                  <div className="w-px bg-white/10" />
                  <div className="flex-1">
                    <p className="text-[11px] text-white/50">Match Rate</p>
                    <p className="text-lg font-semibold text-indigo-400">
                      {metrics.match}%
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div className="w-48 -rotate-8 rounded-2xl border border-white/10 bg-[#020617]/90 p-4 text-center"
                animate={{ x: [-4, -8, -4] }} transition={{ duration: 7, repeat: Infinity }}>
                <p className="mb-3 text-xs text-white/70">Sales Activity</p>
                <div className="flex gap-3">
                  <div className="flex-1">
                    <p className="text-[11px] text-white/50">Deals Closing</p>
                    <p className="text-lg font-semibold text-sky-400">
                      {metrics.deals}
                    </p>
                  </div>
                  <div className="w-px bg-white/10" />
                  <div className="flex-1">
                    <p className="text-[11px] text-white/50">Follow-ups</p>
                    <p className="text-lg font-semibold text-emerald-400">
                      {metrics.followUps}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* MAIN DASHBOARD */}
            <motion.div
              className="relative z-10 rounded-2xl border border-white/10 bg-[#020617]/80 p-6 backdrop-blur"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
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

              <div className="grid grid-cols-2 gap-4">
                {[
                  ["Clients", metrics.clients, "text-white"],
                  ["Hot Leads", metrics.hotLeads, "text-red-400"],
                  ["Match Score", `${metrics.match}%`, "text-sky-400"],
                  ["Deals Closed", metrics.deals, "text-emerald-400"],
                ].map(([label, value, color]) => (
                  <motion.div
                    key={label as string}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                    animate={{ opacity: [0.9, 1, 0.9] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <p className="text-xs text-white/55">{label}</p>
                    <p className={`mt-1 text-xl font-semibold ${color}`}>{value}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 space-y-2">
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
                        className="h-full rounded-full bg-sky-400"
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
        </motion.div>
      </div>
    </section>
  );
}
