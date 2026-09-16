'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Hourglass,
  Microchip,
  UsersRound,
} from 'lucide-react';
import AnimateSection from '@/components/AnimateSection';

/* ────────────────────────────────────────────────────────────
   Problem & Solution — standalone section
   Includes its own state + data so it can be dropped in anywhere.
   If you already define `problemTabs` / `activeTab` at page level,
   delete the local versions below.
──────────────────────────────────────────────────────────── */
export default function ProblemSolutionSection() {
  const [activeTab, setActiveTab] = useState(0);

  const problemTabs = [
    {
      id: 'risk',
      label: 'Cost & risk hotspots',
      icon: Hourglass,
      subtitle: 'The realities of unmanaged context at scale.',
      items: [
        'Input and re-sent context tokens dominate the bill — not generated code',
        'Unconstrained coding agents vary up to 30x on identical tasks',
        'Variance tracks with retrieved context quality, not the underlying model',
        'Existing codebases get poorly-served without structural grounding',
      ],
    },
    {
      id: 'engine',
      label: 'Presales-to-PR engine',
      icon: Microchip,
      subtitle: 'Automated intelligence at every pipeline stage.',
      items: [
        'Requirements read directly from Jira and Azure DevOps on ingest',
        'Domain brief assembled and tagged before any code is written',
        "Code + tests generated under the individual developer's identity",
        'Isolated Docker sandbox validates before the PR opens',
        'Governed review loop with a mandatory human merge gate',
      ],
    },
    {
      id: 'engine',
      label: 'Presales-to-PR engine',
      icon: Microchip,
      subtitle: 'Automated intelligence at every pipeline stage.',
      items: [
        'Requirements read directly from Jira and Azure DevOps on ingest',
        'Domain brief assembled and tagged before any code is written',
        "Code + tests generated under the individual developer's identity",
        'Isolated Docker sandbox validates before the PR opens',
        'Governed review loop with a mandatory human merge gate',
      ],
    },
    {
      id: 'team',
      label: 'Team experience',
      icon: UsersRound,
      subtitle: 'Built for how engineering teams actually work.',
      items: [
        'Single PR workspace for brief, code, tests, and review comments',
        'Per-developer API keys and Git tokens — no shared bot accounts',
        'Sandbox test output attached to every pull request',
        'Model-agnostic and orchestration-portable by design',
        'Every commit and PR attributable to a real person',
      ],
    },
  ];

  return (
    <AnimateSection type="fadeUp">
      <section className="py-14 lg:py-[5.5rem] max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="text-center mx-auto mb-16">
          <div className="inline-block text-[0.72rem] uppercase tracking-[0.18em] text-emerald-300 font-semibold mb-4 border-l-2 border-emerald-800 pl-[0.7rem]">
            Problem &amp; Solution
          </div>
          <h2 className="text-[clamp(1.7rem,3.6vw,2.5rem)] text-white font-semibold tracking-[-0.02em] leading-[1.2] mb-4">
            Remove the friction <br /> from every agent handoff.
          </h2>
          <p className="text-[#8a95a8] text-[1.02rem] leading-[1.7] max-w-5xl mx-auto">
            The Agent Pipeline acts as a tireless engineering co-pilot that never forgets the checklist. It grounds every run in a curated brief, proves the code in an isolated sandbox, and prepares a reviewed PR — so your team ships faster without sacrificing quality or governance.
          </p>
        </div>

        <div className="max-w-[1000px] mx-auto">
          {/* ── TAB BAR ── */}
          <div className="relative">
            <div className="absolute left-0 right-0 bottom-0 h-px bg-[#1c2029]" />
            <div className="relative flex flex-wrap justify-center gap-0">
              {problemTabs.map((tab, i) => {
                const Icon = tab.icon;
                const isActive = activeTab === i;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(i)}
                    className="group relative flex items-center gap-2.5 px-5 sm:px-7 py-4 text-left transition-colors duration-300"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="horizontal-tab-underline"
                        className="absolute left-0 right-0 bottom-0 h-[2px] bg-emerald-400"
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      />
                    )}
                    {isActive && (
                      <motion.span
                        layoutId="horizontal-tab-dot"
                        className="absolute left-1/2 -translate-x-1/2 -bottom-[5px] w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.18)]"
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      />
                    )}
                    <Icon
                      size={15}
                      className={`transition-colors duration-300 shrink-0 ${
                        isActive ? 'text-emerald-300' : 'text-[#5a6478] group-hover:text-emerald-300/80'
                      }`}
                    />
                    <span
                      className={`text-[0.88rem] font-medium whitespace-nowrap transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-[#8a95a8] group-hover:text-[#e8ecf2]'
                      }`}
                    >
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── PULSE THREAD ── */}
          <div className="relative h-10 flex justify-center">
            <div className="relative w-px h-full bg-[#1c2029] overflow-hidden">
              <motion.div
                key={`pulse-${activeTab}`}
                className="absolute left-0 w-px bg-gradient-to-b from-emerald-400 to-transparent"
                initial={{ top: '-100%', height: '60%' }}
                animate={{ top: '100%', height: '60%' }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              />
            </div>
          </div>

          {/* ── CONTENT ── */}
          <div className="relative">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="text-center"
            >
              <div className="mb-10">
                <motion.span
                  key={`eyebrow-${activeTab}`}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 }}
                  className="inline-block text-[0.62rem] uppercase tracking-[0.16em] text-emerald-300 font-semibold mb-3"
                >
                  {activeTab === 0
                    ? 'Detected risk areas'
                    : activeTab === 1
                    ? 'Automated capabilities'
                    : 'Team-facing features'}
                </motion.span>
                <motion.p
                  key={`sub-${activeTab}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.1 }}
                  className="text-[0.98rem] text-[#8a95a8] leading-[1.75] max-w-[560px] mx-auto"
                >
                  {problemTabs[activeTab].subtitle}
                </motion.p>
              </div>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 max-w-[760px] mx-auto text-left">
                {problemTabs[activeTab].items.map((item, j) => (
                  <motion.li
                    key={`${activeTab}-${j}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 + j * 0.06, ease: 'easeOut' }}
                    className="group flex gap-3.5 items-start"
                  >
                    <span className="flex items-center justify-center w-5 h-5 shrink-0 rounded-full border border-emerald-800/60 bg-emerald-800/10 mt-[0.15rem] transition-all duration-300 group-hover:bg-emerald-800/30 group-hover:border-emerald-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    </span>
                    <span className="text-[0.9rem] text-[#8a95a8] group-hover:text-[#e8ecf2] leading-[1.65] transition-colors duration-300">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                key={`footer-${activeTab}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="mt-12 flex flex-wrap items-center justify-center gap-4"
              >
                <button
                  type="button"
                  className="inline-flex items-center gap-2 text-[0.78rem] font-semibold text-emerald-300 hover:text-emerald-200 transition-colors duration-200 group"
                >
                  Explore capability
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                </button>
                <span className="h-px w-[100px] bg-[#1c2029]" />
                <span className="text-[0.68rem] text-[#5a6478]">
                  Part of the Agent Pipeline engine
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </AnimateSection>
  );
}