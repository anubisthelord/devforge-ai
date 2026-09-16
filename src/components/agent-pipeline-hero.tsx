'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Layers, ShieldCheck } from 'lucide-react';
import {
  FaGithub,
  FaStar,
  FaCodeBranch,
  FaCodePullRequest,
  FaCodeMerge,
  FaCircleCheck,
  FaCircleXmark,
  FaClock,
  FaEllipsis,
  FaLock,
  FaCodeFork,
} from 'react-icons/fa6';
import DotGrid from '@/components/dotgrid';

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

const stats: [string, string, string][] = [
  ['Agents', '4', 'text-[#87CBFF]'],
  ['Rounds', '3', 'text-[#38BDF8]'],
  ['Sandbox', 'Docker', 'text-[#0EA5E9]'],
  ['Gate', 'Human', 'text-[#22D3EE]'],
];

const stages: [string, string][] = [
  ['01 · Intake', 'Context Agent'],
  ['02 · Build', 'Coder Agent'],
  ['03 · Verify', 'Sandbox Test'],
  ['04 · Review', 'Reviewer Agent'],
  ['Identity', 'Per-developer key'],
  ['Output', 'Reviewed PR'],
  ['Merge Gate', 'Human approval'],
  ['Audit', 'Committed to git'],
];

// GitHub-style PR data for the dashboard
const pullRequests = [
  {
    id: '#142',
    title: 'Add user authentication flow',
    branch: 'feat/auth-flow',
    status: 'open',
    author: 'context-agent',
    time: '2m ago',
    additions: 247,
    deletions: 32,
    checks: 'passing',
  },
  {
    id: '#141',
    title: 'Fix pagination in user list',
    branch: 'fix/pagination',
    status: 'merged',
    author: 'coder-agent',
    time: '18m ago',
    additions: 56,
    deletions: 12,
    checks: 'passing',
  },
  {
    id: '#140',
    title: 'Update API rate limiting',
    branch: 'chore/rate-limit',
    status: 'open',
    author: 'reviewer-agent',
    time: '1h ago',
    additions: 89,
    deletions: 5,
    checks: 'pending',
  },
];

const statusIcon = (status: string) => {
  switch (status) {
    case 'open':
      return <FaCodePullRequest className="h-3.5 w-3.5 text-[#58a6ff]" />;
    case 'merged':
      return <FaCodeMerge className="h-3.5 w-3.5 text-[#87CBFF]" />;
    default:
      return <FaCodePullRequest className="h-3.5 w-3.5 text-white/50" />;
  }
};

const checkIcon = (checks: string) => {
  switch (checks) {
    case 'passing':
      return <FaCircleCheck className="h-3 w-3 text-[#38BDF8]" />;
    case 'failing':
      return <FaCircleXmark className="h-3 w-3 text-red-400" />;
    default:
      return <FaClock className="h-3 w-3 text-[#0EA5E9]" />;
  }
};

export default function AgentPipelineHero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-[#020617] via-[#020617] to-[#030712] pt-[180px] pb-[120px] min-h-screen flex items-center"
    >
      <DotGrid
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        dotSize={4}
        gap={15}
        baseColor="#181322ff"
        activeColor="#0078D4"
        proximity={280}
        shockRadius={280}
        shockStrength={5}
        resistance={450}
        returnDuration={1.5}
        autoMode
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[637px] h-[1159px] bg-[#0360A7]/60 blur-[190px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-10 max-md:px-[22px] w-full">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12"
        >
          {/* LEFT SIDE */}
          <div className="space-y-5 text-center lg:text-left order-2 lg:order-1">
            <motion.div
              variants={heroItem}
              className="inline-flex items-center gap-2 mx-auto lg:mx-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-[#C5E6FF]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
              CONTEXT → CODE → SANDBOX → REVIEW
            </motion.div>

            <motion.h1
              variants={heroItem}
              className="font-medium tracking-[-0.02em] text-white text-[28px] leading-[1.15] sm:text-[32px] md:text-[38px] lg:text-[44px] xl:text-[52px]"
            >
              From ticket to
              <span className="bg-gradient-to-r from-[#87CBFF] to-[#C5E6FF] bg-clip-text text-transparent">
                {' '}
                reviewed pull request
              </span>
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="mx-auto lg:mx-0 max-w-[36ch] sm:max-w-md text-sm md:text-base leading-relaxed text-white/65"
            >
              Four agents pick up requirements, write the code, prove it against real tests in an{' '}
              <span className="text-white font-medium">isolated sandbox</span>, and review it — inside your existing Jira,
              Azure DevOps, and Git workflow, under a{' '}
              <span className="text-white font-medium">human approval gate</span>.
            </motion.p>

            <motion.div
              variants={heroItem}
              className="flex gap-3 justify-center lg:justify-start flex-wrap"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md bg-[#0078D4] px-6 py-3 text-sm font-medium text-white transition hover:scale-105 hover:bg-[#0EA5E9]"
              >
                Request walkthrough
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#agents"
                className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                See the agents
              </a>
            </motion.div>

            <motion.div
              variants={heroItem}
              className="flex items-center gap-3 justify-center lg:justify-start text-[11px] text-white/55 flex-wrap"
            >
              <span className="inline-flex items-center gap-1">
                <Layers className="h-4 w-4 text-[#38BDF8]" />
                4 agents · 1 human gate
              </span>
              <span className="h-3 w-px bg-white/15 hidden sm:inline-block" />
              <span className="inline-flex items-center gap-1">
                <ShieldCheck className="h-4 w-4 text-[#38BDF8]" />
                Model-agnostic · ports &amp; adapters
              </span>
            </motion.div>
          </div>

          {/* RIGHT SIDE — GitHub Dashboard Panel (Blue Theme) */}
          <motion.div
            variants={heroItem}
            className="relative order-1 lg:order-2 w-full max-w-md mx-auto lg:mx-0"
          >
            <div className="h-[300px] lg:h-[480px] relative">
              <div className="relative h-full overflow-hidden rounded-3xl border border-[#1e3a5f] bg-[#0a1628] shadow-[0_0_40px_-10px_rgba(0,120,212,0.4)]">
                {/* Subtle blue gradient overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0078D4]/5 via-transparent to-[#0360A7]/10" />

                {/* GitHub-style header */}
                <div className="relative border-b border-[#1e3a5f] px-4 py-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FaGithub className="h-5 w-5 text-[#C5E6FF]" />
                      <span className="text-sm font-semibold text-white/90">agent-pipeline / app</span>
                      <span className="flex items-center gap-1 rounded-full border border-[#1e3a5f] bg-[#0078D4]/10 px-2 py-0.5 text-[10px] text-[#87CBFF]">
                        <FaLock className="h-2.5 w-2.5" />
                        Private
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-[#58a6ff]/60">
                      <FaStar className="h-3.5 w-3.5 transition hover:text-[#58a6ff]" />
                      <FaCodeFork className="h-3.5 w-3.5 transition hover:text-[#58a6ff]" />
                      <FaEllipsis className="h-4 w-4 transition hover:text-[#58a6ff]" />
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-4 text-xs text-white/50">
                    <span className="flex items-center gap-1">
                      <FaCodeBranch className="h-3.5 w-3.5 text-[#38BDF8]" />
                      main
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-[#38BDF8] shadow-[0_0_6px_rgba(56,189,248,0.8)]" />
                      All checks passing
                    </span>
                  </div>
                </div>

                {/* Pull Requests list */}
                <div className="relative divide-y divide-[#1e3a5f]">
                  <div className="px-4 py-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-[#C5E6FF]">Pull Requests</span>
                      <span className="text-[10px] text-[#58a6ff]">3 open</span>
                    </div>
                  </div>

                  {pullRequests.map((pr, index) => (
                    <motion.div
                      key={pr.id}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                      className="group cursor-pointer px-4 py-3 transition hover:bg-[#0078D4]/5"
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5">{statusIcon(pr.status)}</div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="truncate text-sm font-medium text-white/90 transition group-hover:text-[#58a6ff]">
                              {pr.title}
                            </span>
                            <span className="shrink-0 text-[10px] text-white/40">{pr.id}</span>
                          </div>
                          <div className="mt-1 flex flex-wrap items-center gap-2 text-[10px] text-white/40">
                            <span className="flex items-center gap-1">
                              <FaCodeBranch className="h-3 w-3 text-[#38BDF8]/70" />
                              {pr.branch}
                            </span>
                            <span className="flex items-center gap-1">
                              {checkIcon(pr.checks)}
                              {pr.checks}
                            </span>
                            <span className="text-[#38BDF8]">+{pr.additions}</span>
                            <span className="text-red-400/80">-{pr.deletions}</span>
                          </div>
                          <div className="mt-1 flex items-center gap-2 text-[10px] text-white/30">
                            <span>{pr.author}</span>
                            <span>·</span>
                            <span>{pr.time}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Pipeline stages footer */}
                <div className="absolute bottom-0 left-0 right-0 border-t border-[#1e3a5f] bg-[#0a1628]/95 backdrop-blur-sm">
                  <div className="px-4 py-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-wider text-[#87CBFF]/60">
                        Pipeline Status
                      </span>
                      <span className="flex items-center gap-1 text-[10px] text-[#38BDF8]">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#38BDF8] shadow-[0_0_6px_rgba(56,189,248,0.8)]" />
                        Live
                      </span>
                    </div>
                    <div className="mt-2 flex items-center gap-1">
                      {['Intake', 'Build', 'Verify', 'Review', 'Gate'].map((stage, i) => (
                        <div key={stage} className="flex flex-1 items-center gap-1">
                          <div className="flex flex-col items-center gap-1">
                            <div
                              className={`h-1.5 w-full rounded-full transition-all ${
                                i < 3
                                  ? 'bg-gradient-to-r from-[#0078D4] to-[#38BDF8]'
                                  : i === 3
                                  ? 'bg-[#38BDF8]/60 animate-pulse'
                                  : 'bg-[#1e3a5f]'
                              }`}
                            />
                            <span className="text-[8px] text-white/40">{stage}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}