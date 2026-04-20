"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateSection from "./AnimateSection";

const tabs = ["Overview", "The Hard Truth", "Solutions"];

export default function AutonomoAIOverview() {
  const [activeTab, setActiveTab] = useState("Overview");

  const overview = [
    {
      title: "Centralized Semantic Layer",
      desc: "Unify Slack, Notion, GitHub, databases, and internal tools into one AI-ready intelligence layer.",
    },
    {
      title: "Contextual Reasoning Engine",
      desc: "Understand relationships between documents, code, and workflows instead of isolated search results.",
    },
    {
      title: "Enterprise Security Model",
      desc: "Role-based access control ensures every query respects organizational permissions.",
    },
    {
      title: "Infrastructure Flexibility",
      desc: "Deploy on cloud, hybrid, or fully on-prem environments with full control.",
    },
    {
      title: "Real-time Knowledge Sync",
      desc: "Continuously index and update your internal systems without manual intervention.",
    },
    {
      title: "AI-Powered Workflows",
      desc: "Trigger actions, generate outputs, and automate enterprise processes instantly.",
    },
  ];

  const problems = [
    {
      title: "Knowledge is scattered everywhere",
      desc: "Critical information is locked across multiple tools with no unified access layer.",
    },
    {
      title: "AI hallucinations in enterprise systems",
      desc: "Generic LLMs fail when they lack domain-specific and internal context.",
    },
    {
      title: "Security & compliance risks",
      desc: "Sensitive data exposure happens when using external AI systems.",
    },
    {
      title: "Slow decision-making",
      desc: "Teams waste time searching instead of acting on insights.",
    },
    {
      title: "No single source of truth",
      desc: "Different teams operate on conflicting versions of the same information.",
    },
    {
      title: "Expensive scaling problems",
      desc: "Enterprise AI tools become cost-heavy as usage grows.",
    },
  ];

  const solutions = [
    {
      title: "Unified Organizational Brain",
      desc: "Everything your company knows becomes searchable, structured, and connected.",
      points: [
        "Single semantic index",
        "Cross-platform intelligence",
        "Always-updated knowledge base",
      ],
    },
    {
      title: "Grounded AI Responses",
      desc: "Every response is strictly based on your verified internal data.",
      points: [
        "No hallucination layer",
        "Source-backed answers",
        "Controlled knowledge scope",
      ],
    },
    {
      title: "Private AI Infrastructure",
      desc: "Run everything inside your own secure environment.",
      points: [
        "On-prem deployment ready",
        "Zero external data exposure",
        "Full compliance control",
      ],
    },
    {
      title: "Autonomous Workflows",
      desc: "Turn insights into actions automatically across systems.",
      points: [
        "API automation triggers",
        "Smart workflow execution",
        "Event-driven AI actions",
      ],
    },
    {
      title: "Enterprise Scale Architecture",
      desc: "Built to scale from startup teams to large organizations.",
      points: [
        "Multi-team support",
        "High availability design",
        "Distributed processing",
      ],
    },
    {
      title: "Zero Vendor Lock-in",
      desc: "Fully portable AI system you can move, extend, or modify anytime.",
      points: [
        "Open architecture",
        "Flexible integrations",
        "No dependency lock",
      ],
    },
  ];

  return (
    <div className="bg-[#07090E] text-white">
      <AnimateSection type="fadeUp">
        <section className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6">

          {/* TABS */}
          <div className="overflow-x-auto mb-14 flex justify-center">
            <div className="relative inline-flex rounded-xl border border-emerald-500/20 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-1.5 backdrop-blur-md shadow-[0_0_30px_rgba(16,185,129,0.10)]">

              {tabs.map((tab) => {
                const isActive = activeTab === tab;

                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className="relative px-5 py-2.5 text-sm font-semibold min-w-[130px] text-center rounded-lg"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeTab"
                        className="absolute inset-0 rounded bg-emerald-500/15"
                        transition={{ type: "spring", stiffness: 320, damping: 28 }}
                      />
                    )}

                    <span
                      className={`relative z-10 transition ${
                        isActive
                          ? "text-emerald-300"
                          : "text-white/50 hover:text-emerald-300"
                      }`}
                    >
                      {tab}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* CONTENT */}
          <div className="relative min-h-[500px]">

            <AnimatePresence mode="wait">

              {/* ================= OVERVIEW ================= */}
              {activeTab === "Overview" && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  className="space-y-12"
                >
                  <div className="text-center">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                      AutonomoAI
                      <span className="text-emerald-400 ml-2">Overview</span>
                    </h3>

                    <p className="text-white/60 mt-3 max-w-3xl mx-auto text-sm md:text-base">
                      A unified enterprise intelligence system that connects your tools, data, and workflows into one AI brain.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {overview.map((item) => (
                      <div
                        key={item.title}
                        className="p-5 rounded-2xl border border-white/5 bg-white/[0.02]"
                      >
                        <h4 className="text-emerald-300 text-sm font-medium mb-2">
                          {item.title}
                        </h4>
                        <p className="text-white/60 text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* ================= PROBLEMS ================= */}
              {activeTab === "The Hard Truth" && (
                <motion.div
                  key="problems"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  className="space-y-12"
                >
                  <div className="text-center">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                      Enterprise AI is
                      <span className="text-red-400 ml-2">Broken</span>
                    </h3>

                    <p className="text-white/60 mt-3 max-w-3xl mx-auto text-sm md:text-base">
                      Companies lose productivity, accuracy, and security because their knowledge is fragmented.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {problems.map((item) => (
                      <div
                        key={item.title}
                        className="p-5 rounded-2xl border border-red-500/10 bg-red-500/[0.02]"
                      >
                        <h4 className="text-red-300 text-sm font-medium mb-2">
                          {item.title}
                        </h4>
                        <p className="text-white/60 text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* ================= SOLUTIONS ================= */}
              {activeTab === "Solutions" && (
                <motion.div
                  key="solutions"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  className="space-y-12"
                >
                  <div className="text-center">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                      Built to Fix
                      <span className="text-emerald-400 ml-2">Everything</span>
                    </h3>

                    <p className="text-white/60 mt-3 max-w-3xl mx-auto text-sm md:text-base">
                      A secure, scalable AI system that transforms enterprise knowledge into action.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {solutions.map((item) => (
                      <div
                        key={item.title}
                        className="p-5 rounded-2xl border border-emerald-500/10 bg-emerald-500/[0.02]"
                      >
                        <h4 className="text-emerald-300 text-sm font-medium mb-2">
                          {item.title}
                        </h4>

                        <p className="text-white/60 text-sm mb-3">
                          {item.desc}
                        </p>

                        <ul className="space-y-1">
                          {item.points.map((p) => (
                            <li
                              key={p}
                              className="text-xs text-white/50 flex gap-2"
                            >
                              <span className="text-emerald-400">•</span>
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </section>
      </AnimateSection>
    </div>
  );
}