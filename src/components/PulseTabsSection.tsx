"use client";

import { useState } from "react";
import { Box, Signal, Clock, MessageSquare, Gauge, Target, Compass } from "lucide-react";

/* ----------------------------------------
   Tabs data
---------------------------------------- */
const tabs = [
  {
    id: "conversation",
    icon: MessageSquare,
    label: "Conversation",
    title: "A 5-minute conversation that replaces the checklist",
    description:
      "Pulse starts with a natural dialogue — no forms, no rigid surveys. It adapts to how your team actually talks about AI, extracting signals that a static assessment would miss.",
  },
  {
    id: "scoring",
    icon: Gauge,
    label: "Scoring Engine",
    title: "10 dimensions scored in real time",
    description:
      "Every response maps to a readiness dimension — data, people, process, tooling, governance, and more. The engine weighs each signal and returns a live maturity score as the conversation unfolds.",
  },
  {
    id: "gaps",
    icon: Target,
    label: "Gap Detection",
    title: "The real gaps, not the ones you expected",
    description:
      "Pulse surfaces the specific blockers holding your AI program back — from missing usage guidelines to unclear ownership — ranked by impact so you know exactly what to fix first.",
  },
  {
    id: "roadmap",
    icon: Compass,
    label: "Next Move",
    title: "A prioritized next step, every time",
    description:
      "Instead of a raw score, every session ends with a concrete recommended action — the highest-leverage move your organization can take in the next 30 days to advance AI readiness.",
  },
];

export default function PulseTabsSection() {
  const [activeTab, setActiveTab] = useState("conversation");

  return (
    <section className="py-14 lg:py-[5.5rem] border-b border-[#1c2029] max-w-[1240px] mx-auto px-5 sm:px-8">
      {/* Section heading */}
      <div className="text-center max-w-[780px] mx-auto mb-14">
        <div className="inline-block text-[0.72rem] uppercase tracking-[0.18em] text-[#4f7cff] font-semibold mb-4 border-l-2 border-[#4f7cff] pl-[0.7rem]">
          AI-ENABLED READINESS ASSESSMENT — PULSE
        </div>
        <h2 className="text-[clamp(1.7rem,3.6vw,2.5rem)] mb-4 text-white font-semibold tracking-[-0.02em] leading-tight">
          Pulse: Turning conversations <br/> into a clear AI roadmap
        </h2>
        <p className="text-[#8a95a8] text-[1.02rem] mt-4 leading-[1.7]">
          Pulse is a conversational readiness engine designed for
          organizations that want a fast, credible answer to "where do we
          stand on AI" — without a static checklist survey.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-[0.5rem] flex-wrap mb-10">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-[0.55rem] px-[1.4rem] py-[0.7rem] rounded text-[0.85rem] font-semibold border transition-all duration-200 cursor-pointer ${
                isActive
                  ? "border-[#4f7cff] bg-[#4f7cff]/10 text-white"
                  : "border-[#2a2f3a] bg-transparent text-[#8a95a8] hover:border-[#4f7cff]/50 hover:text-[#e8ecf2]"
              }`}
            >
              <Icon
                size={16}
                className={`transition-colors duration-200 ${
                  isActive ? "text-white" : "text-[#4f7cff]"
                }`}
              />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab panel */}
      {tabs.map((tab) => {
        const Icon = tab.icon;
        if (activeTab !== tab.id) return null;
        return (
          <div key={tab.id}>
            <div className="max-w-3xl mx-auto rounded border border-[#2a2f3a] bg-[#0f1117]  p-5 flex flex-col sm:flex-row gap-7 items-center sm:items-start">
              {/* Icon tile */}
              <div className="flex items-center justify-center w-[58px] h-[58px] shrink-0 rounded-[10px] border border-[#2a2f3a] bg-[#161a22] text-[#4f7cff]">
                <Icon size={22} />
              </div>

              {/* Content */}
              <div className="text-center sm:text-left">
                <h3 className="text-[1.25rem] mb-[0.7rem] text-white font-semibold tracking-[-0.01em]">
                  {tab.title}
                </h3>
                <p className="text-[#8a95a8] text-[0.93rem] leading-[1.7]">
                  {tab.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}

      {/* Chips */}
      <div className="flex flex-wrap gap-[0.6rem] justify-center mt-10">
        {[
          { icon: Box, label: "10 readiness dimensions" },
          { icon: Signal, label: "4 maturity tiers" },
          { icon: Clock, label: "under 6-minute sessions" },
        ].map((chip, i) => {
          const Icon = chip.icon;
          return (
            <span
              key={i}
              className="flex items-center gap-2 rounded border border-[#2a2f3a] bg-[#0f1117] px-[1.1rem] py-[0.55rem] text-[0.82rem] font-medium text-[#8a95a8] transition-colors duration-200 "
            >
              <Icon size={14} className="text-[#4f7cff]" />
              {chip.label}
            </span>
          );
        })}
      </div>
    </section>
  );
}