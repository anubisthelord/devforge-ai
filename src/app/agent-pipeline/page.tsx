'use client';

import { useState } from 'react';
import {
  Bot,
  Brain,
  GitBranch,
  GitPullRequest,
  GitMerge,
  ShieldCheck,
  Layers,
  ClipboardCheck,
  ListChecks,
  ArrowRight,
  ChartLine,
  MessagesSquare,
  Network,
  Gauge,
  Search,
  Users,
  TrendingDown,
  Clock,
  HeartPulse,
  Bolt,
  ArrowUp,
  Database,
  IdCard,
  ChevronDown,
  Sparkles,
  CheckCircle2,
  Target,
  GitCommit,
  FileCheck,
  Lock,
  Star,
  GitFork,
  MoreHorizontal,
  Workflow,
  Zap,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimateSection from '@/components/AnimateSection';
import { motion } from 'framer-motion';
import CallToActionData from '@/components/CallToActionData';
import TestimonialsInnerPages from '@/components/TestimonialsInnerPages';
import ProblemSolutionSection from '@/components/ProblemSolutionSection';

const SectionDivider = () => (
  <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8">
    <div className="relative h-px w-full bg-[#1c2029] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-full bg-gradient-to-r from-transparent via-emerald-800 to-transparent origin-center animate-[dividerReveal_2.4s_ease-out_forwards]" />
    </div>
  </div>
);

/* ═══════════════ HERO ═══════════════ */
function AgentPipelineHero() {
  const pullRequests = [
    { id: '#142', title: 'Add user authentication flow', branch: 'feat/auth-flow', status: 'open', author: 'context-agent', time: '2m ago', additions: 247, deletions: 32, checks: 'passing' },
    { id: '#141', title: 'Fix pagination in user list', branch: 'fix/pagination', status: 'merged', author: 'coder-agent', time: '18m ago', additions: 56, deletions: 12, checks: 'passing' },
    { id: '#140', title: 'Update API rate limiting', branch: 'chore/rate-limit', status: 'open', author: 'reviewer-agent', time: '1h ago', additions: 89, deletions: 5, checks: 'pending' },
  ];

  const statusIcon = (status: string) => {
    if (status === 'open') return <GitPullRequest className="h-3.5 w-3.5 text-emerald-300" />;
    if (status === 'merged') return <GitMerge className="h-3.5 w-3.5 text-emerald-400" />;
    return <GitPullRequest className="h-3.5 w-3.5 text-[#5a6478]" />;
  };

  const XCirclePlaceholder = () => (
    <svg className="h-3 w-3 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  );

  const checkIcon = (checks: string) => {
    if (checks === 'passing') return <CheckCircle2 className="h-3 w-3 text-emerald-400" />;
    if (checks === 'failing') return <XCirclePlaceholder />;
    return <Clock className="h-3 w-3 text-emerald-300/70" />;
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-[160px] pb-[100px] min-h-[90vh] flex items-center"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-emerald-900/20 blur-[180px] rounded-full pointer-events-none" />

      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage:
            'linear-gradient(rgba(16,185,129,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.035) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-[1240px] mx-auto px-5 sm:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, staggerChildren: 0.08 }}
          className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12"
        >
          <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 mx-auto lg:mx-0 rounded-full border border-emerald-800 bg-emerald-800/15 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Context → Code → Sandbox → Review
            </div>

            <h1 className="text-[clamp(2rem,4.4vw,3.2rem)] font-semibold tracking-[-0.02em] leading-[1.12] text-white">
              From ticket to{' '}
              <span className="bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">
                reviewed pull request
              </span>
            </h1>

            <p className="mx-auto lg:mx-0 max-w-[48ch] text-[1.02rem] leading-[1.7] text-[#8a95a8]">
              Four agents pick up requirements, write the code, prove it against real tests in an{' '}
              <span className="text-white font-medium">isolated sandbox</span>, and review it — inside your existing Jira,
              Azure DevOps, and Git workflow, under a{' '}
              <span className="text-white font-medium">human approval gate</span>.
            </p>

            <div className="flex gap-3 justify-center lg:justify-start flex-wrap">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-[6px] bg-emerald-700 px-6 py-3 text-[0.85rem] font-semibold text-white transition-all duration-300 hover:bg-emerald-600 hover:-translate-y-0.5"
              >
                Request walkthrough
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#agents"
                className="inline-flex items-center gap-2 rounded-[6px] border border-[#2a3140] bg-transparent px-6 py-3 text-[0.85rem] font-semibold text-[#e8ecf2] transition-all duration-300 hover:border-emerald-800 hover:bg-emerald-800/10"
              >
                See the agents
              </a>
            </div>

            <div className="flex items-center gap-4 justify-center lg:justify-start text-[0.72rem] text-[#5a6478] flex-wrap pt-2">
              <span className="inline-flex items-center gap-1.5">
                <Layers className="h-3.5 w-3.5 text-emerald-400" />
                4 agents · 1 human gate
              </span>
              <span className="h-3 w-px bg-[#1c2029] hidden sm:inline-block" />
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                Model-agnostic · ports &amp; adapters
              </span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative order-1 lg:order-2 w-full max-w-2xl mx-auto lg:mx-0"
          >
            <div className="h-[360px] lg:h-[520px] relative">
              <div className="relative h-full overflow-hidden rounded-[10px] border border-[#1c2029] bg-[#0b0d12] shadow-[0_0_60px_-20px_rgba(16,185,129,0.3)]">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-900/8 via-transparent to-emerald-900/5" />

                <div className="relative border-b border-[#1c2029] bg-[#0f1218] px-5 py-3.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <svg height="18" viewBox="0 0 16 16" width="18" className="fill-emerald-300" aria-hidden="true">
                        <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
                      </svg>
                      <span className="text-sm font-semibold text-white">agent-pipeline / app</span>
                      <span className="flex items-center gap-1 rounded border border-emerald-800 bg-emerald-800/15 px-2 py-0.5 text-[0.6rem] text-emerald-300">
                        <Lock className="h-2.5 w-2.5" />
                        Private
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-[#5a6478]">
                      <Star className="h-3.5 w-3.5 transition hover:text-emerald-300" />
                      <GitFork className="h-3.5 w-3.5 transition hover:text-emerald-300" />
                      <MoreHorizontal className="h-4 w-4 transition hover:text-emerald-300" />
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-4 text-[0.72rem] text-[#8a95a8]">
                    <span className="flex items-center gap-1">
                      <GitBranch className="h-3.5 w-3.5 text-emerald-400" />
                      main
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
                      All checks passing
                    </span>
                  </div>
                </div>

                <div className="relative divide-y divide-[#1c2029]">
                  <div className="px-5 py-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[0.72rem] font-semibold text-emerald-300">Pull Requests</span>
                      <span className="text-[0.62rem] text-[#5a6478]">3 open</span>
                    </div>
                  </div>

                  {pullRequests.map((pr, index) => (
                    <motion.div
                      key={pr.id}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                      className="group cursor-pointer px-5 py-3.5 transition hover:bg-emerald-800/5"
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5">{statusIcon(pr.status)}</div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="truncate text-sm font-medium text-white/90 transition group-hover:text-emerald-300">
                              {pr.title}
                            </span>
                            <span className="shrink-0 text-[0.62rem] text-[#5a6478]">{pr.id}</span>
                          </div>
                          <div className="mt-1 flex flex-wrap items-center gap-2 text-[0.62rem] text-[#5a6478]">
                            <span className="flex items-center gap-1">
                              <GitBranch className="h-3 w-3 text-emerald-400/70" />
                              {pr.branch}
                            </span>
                            <span className="flex items-center gap-1">
                              {checkIcon(pr.checks)}
                              {pr.checks}
                            </span>
                            <span className="text-emerald-400">+{pr.additions}</span>
                            <span className="text-red-400/80">-{pr.deletions}</span>
                          </div>
                          <div className="mt-1 flex items-center gap-2 text-[0.62rem] text-[#5a6478]">
                            <span>{pr.author}</span>
                            <span>·</span>
                            <span>{pr.time}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="absolute bottom-0 left-0 right-0 border-t border-[#1c2029] bg-[#0f1218]/95 backdrop-blur-sm">
                  <div className="px-5 py-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[0.6rem] uppercase tracking-[0.14em] text-emerald-300/70 font-semibold">Pipeline Status</span>
                      <span className="flex items-center gap-1.5 text-[0.62rem] text-emerald-300">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
                        Live
                      </span>
                    </div>
                    <div className="mt-2 flex items-center gap-1">
                      {['Intake', 'Build', 'Verify', 'Review', 'Gate'].map((stage, i) => (
                        <div key={stage} className="flex flex-1 items-center gap-1">
                          <div className="flex flex-col items-center gap-1 w-full">
                            <div
                              className={`h-1.5 w-full rounded-full ${
                                i < 3
                                  ? 'bg-gradient-to-r from-emerald-700 to-emerald-400'
                                  : i === 3
                                  ? 'bg-emerald-400/60 animate-pulse'
                                  : 'bg-[#1c2029]'
                              }`}
                            />
                            <span className="text-[0.5rem] text-[#5a6478]">{stage}</span>
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

/* ═══════════════ PAGE ═══════════════ */
export default function AgentPipelinePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const features = [
    {
      icon: ChartLine,
      title: 'Context that compounds',
      description: 'Every verified fact is committed back to the shared context graph. Each PR makes the next one start from a better position — no re-guessing the same domain rules.',
      bullets: ['Compounding domain brief', 'Git-committed context', 'Shared across the team'],
    },
    {
      icon: MessagesSquare,
      title: 'Agent handoff, not hand-cuff',
      description: 'Agents pass structured state between stages — brief, code, tests, review — so nothing is re-derived from scratch and the pipeline stays portable.',
      bullets: ['Structured state passing', 'Ports-and-adapters core', 'No platform lock-in'],
    },
    {
      icon: Network,
      title: 'Faster rounds, same gate',
      description: 'Automated review rounds compress from hours to minutes. The human gate stays exactly where it is — at the end, with final authority over every merge.',
      bullets: ['Up to 3 automated rounds', 'Human merge gate always', 'Full audit trail to git'],
    },
  ];

  const techStack = [
    { icon: Network, label: 'Frontend', value: 'React' },
    { icon: Database, label: 'Backend', value: 'Python · FastAPI' },
    { icon: Brain, label: 'Agents', value: 'Model-agnostic adapter layer' },
    { icon: Workflow, label: 'Orchestration', value: 'Ports & adapters' },
    { icon: IdCard, label: 'Identity', value: 'Per-developer keys' },
    { icon: ShieldCheck, label: 'Sandbox', value: 'Docker · ephemeral' },
  ];

  const steps = [
    {
      number: '01',
      title: 'Capture & brief automatically',
      description: 'Requirements enter from Jira or Azure DevOps. The Context Agent assembles a grounded domain brief and tags every fact verified, inferred, unknown, or stale — before any code is written.',
    },
    {
      number: '02',
      title: 'Build & verify in isolation',
      description: "The Coder Agent writes code and tests under the developer's own identity. The Sandbox runs them in an ephemeral Docker container against synthetic data. Failures loop back; only passing PRs open.",
    },
    {
      number: '03',
      title: 'Review, gate & commit to git',
      description: 'The Reviewer Agent runs up to 3 automated rounds. Then a human reviews and merges — always. The curated context is committed alongside the code so the next PR starts smarter.',
    },
  ];

  const metrics = [
    { label: 'Context cost reduction', value: '30×', delta: 'vs unconstrained agents', accent: true },
    { label: 'Context token share of spend', value: '>99%', delta: 'addressed by briefing', accent: true },
    { label: 'Automated review rounds', value: '3', delta: 'before human gate', accent: false },
    { label: 'Merge on agent alone', value: '0%', delta: 'human required · always', accent: false },
  ];

  const evidenceCards = [
    { icon: Gauge, title: 'Verified', description: 'Traced to a graph edge, a passing test, or human sign-off. Safe to build on.' },
    { icon: Search, title: 'Inferred', description: 'An educated guess with no structural confirmation yet — flagged, not acted on blindly.' },
    { icon: Users, title: 'Unknown', description: 'Not established. The honest default for most business rules on a first pass — never silently guessed.' },
    { icon: TrendingDown, title: 'Stale', description: 'Was verified, but the source has since changed. Needs revalidation before reuse.' },
  ];

  const evidenceRules = [
    { rank: 'RULE / 01', text: <>Structural facts — what calls what, what imports what — are extracted directly from the codebase and can be trusted immediately; <strong className="text-white font-medium">business rules and constraints come from existing docs or a short one-time Q&amp;A</strong> with someone who knows the system.</> },
    { rank: 'RULE / 02', text: <>A fact only moves from inferred to verified with <strong className="text-white font-medium">independent evidence</strong> — a graph edge, a passing test, or a human sign-off in the same review loop already used today. The model raising its own confidence is never enough on its own.</> },
    { rank: 'RULE / 03', text: <>This curated context is <strong className="text-white font-medium">committed to git alongside the code change</strong>, so every developer&apos;s agent works from the same shared understanding instead of each one quietly re-guessing the same facts.</> },
    { rank: 'RULE / 04', text: <>Designed to <strong className="text-white font-medium">degrade gracefully</strong> — if any single layer is unavailable, the Coder Agent keeps working with what it has, rather than stalling.</> },
  ];

  const architectureRows = [
    { i: '/ 01', title: <>Model-<span className="text-emerald-300">agnostic</span></>, desc: 'Agent logic talks to a model through an adapter, not a hardwired call — the underlying model can change without rewriting the agents.' },
    { i: '/ 02', title: <>Orchestration-<span className="text-emerald-300">portable</span></>, desc: "The same ports-and-adapters approach means the pipeline isn't locked into one orchestration platform. LangGraph is supported as an optional adapter, not a dependency." },
    { i: '/ 03', title: <>Individual developer <span className="text-emerald-300">identity</span></>, desc: 'Each developer connects their own Anthropic API key and Git token. Every commit and PR is attributable to a real person, not a shared bot account.' },
    { i: '/ 04', title: <>Requirement-source <span className="text-emerald-300">integration</span></>, desc: 'Connects directly to Jira and Azure DevOps for requirements intake — the pipeline starts where your team already tracks work.' },
  ];

  const nextGenFeatures = [
    { icon: Brain, num: '01', title: 'Context that compounds', desc: 'Every verified fact is committed back to the shared context. Each PR makes the next one start from a better position.' },
    { icon: Workflow, num: '02', title: 'Agent handoff, not hand-cuff', desc: 'Agents pass structured state between stages — brief, code, tests, review — so nothing is re-derived from scratch.' },
    { icon: Zap, num: '03', title: 'Faster rounds, same gate', desc: 'Automated rounds compress from hours to minutes. The human gate stays exactly where it is — at the end, with final authority.' },
  ];

  const roadmap = [
    { icon: Sparkles, label: 'Semantic diff review', status: 'Live' },
    { icon: GitCommit, label: 'Multi-repo context graph', status: 'Q2' },
    { icon: FileCheck, label: 'Policy-as-code gates', status: 'Q3' },
    { icon: Layers, label: 'Cross-team brief sharing', status: 'Q4' },
  ];

  const timeline = [
    { time: 'T + 0', title: 'Requirement enters the pipeline', desc: 'A ticket in Jira or a work item in Azure DevOps is picked up by the Context Agent. No prompt is hand-written — the requirement is read directly from the source.' },
    { time: 'T + 1', title: 'Domain brief is assembled', desc: 'Structural facts are extracted from the codebase. Business rules come from existing docs or a short Q&A. Every fact is tagged verified, inferred, unknown, or stale.' },
    { time: 'T + 2', title: 'Coder Agent writes code + tests', desc: "Under the developer's own API key and Git identity. Commits carry their name. The tests are written alongside the implementation in the same pass." },
    { time: 'T + 3', title: 'Sandbox runs the tests', desc: "Isolated Docker container, synthetic data only. If tests fail, the agent fixes the code and re-runs. The PR isn't opened until they pass — then the container is destroyed." },
    { time: 'T + 4', title: 'Reviewer Agent does up to 3 rounds', desc: 'Automated review passes. The cap exists to bound churn, not to replace the human — the PR is queued for human review in parallel.' },
    { time: 'T + 5', title: 'Human decides', desc: 'Fix directly in the branch, or merge. Nothing merges on agent approval alone. This is the only step in the pipeline with final authority.' },
  ];

  const pillars = [
    { icon: Clock, title: 'Fewer wasted agent tokens', description: 'Ground every run in a curated brief so the agent stops re-guessing the same facts on every PR.' },
    { icon: Network, title: 'Live pipeline visibility', description: 'Track briefs, sandbox runs, review rounds, and merge gates — all from one workspace.' },
    { icon: HeartPulse, title: 'Positive operating rhythm', description: 'Reward fast, high-quality reviews and consistent context curation across the team.' },
  ];

  return (
    <div className="min-h-screen bg-[#050608] text-[#e8ecf2] text-[15px] leading-[1.55] antialiased overflow-x-hidden">
      <Navbar />

      <div
        className="fixed inset-0 -z-10 pointer-events-none opacity-100"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <style jsx global>{`
        @keyframes dividerReveal {
          0% { transform: translateX(-50%) scaleX(0); opacity: 0; }
          40% { opacity: 1; }
          100% { transform: translateX(-50%) scaleX(1); opacity: 1; }
        }
        @keyframes spinSlow { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes corePulse { 0% { transform: scale(1); opacity: 0.6; } 100% { transform: scale(1.35); opacity: 0; } }
        @keyframes nodePulse { 0% { transform: scale(1); opacity: 0.8; } 100% { transform: scale(1.6); opacity: 0; } }
        @keyframes radarRing { 0% { transform: scale(0.6); opacity: 0; } 20% { opacity: 0.6; } 100% { transform: scale(1.1); opacity: 0; } }
        @keyframes radarSweep { 0% { transform: rotate(0deg); opacity: 0.9; } 100% { transform: rotate(360deg); opacity: 0.9; } }
        @keyframes signalPing { 0%, 100% { opacity: 0.6; } 40% { opacity: 1; } }
        @keyframes bubbleIn {
          0% { opacity: 0; transform: translateY(4px) scale(0.96); }
          15% { opacity: 1; transform: translateY(0) scale(1); }
          85% { opacity: 1; transform: translateY(0) scale(1); }
          100% { opacity: 0; transform: translateY(-2px) scale(0.98); }
        }
        @keyframes typingDot {
          0%, 60%, 100% { opacity: 0.3; transform: translateY(0); }
          30% { opacity: 1; transform: translateY(-2px); }
        }
        @keyframes orbit { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
      `}</style>

      <AgentPipelineHero />
      <SectionDivider />

      {/* ═══════════════ 01 — PIPELINE WORKSPACE ═══════════════ */}
      <AnimateSection type="fadeUp">
        <section className="py-14 lg:py-[5.5rem] max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="text-center max-w-[780px] mx-auto mb-12">
            <div className="inline-block text-[0.72rem] uppercase tracking-[0.18em] text-emerald-300 font-semibold mb-4 border-l-2 border-emerald-800 pl-[0.7rem]">
              Sample Pipeline Overview
            </div>
            <h2 className="text-[clamp(1.7rem,3.6vw,2.5rem)] text-white font-semibold tracking-[-0.02em] leading-[1.2]">
              Every ticket,<br /> fully briefed and PR-ready
            </h2>
          </div>

          <div className="relative max-w-[1100px] mx-auto">
            <div className="relative rounded-[10px] border border-[#1c2029] bg-[#0b0d12] overflow-hidden">
              <div className="flex flex-wrap gap-4 justify-between items-center px-6 py-4 bg-[#0f1218] border-b border-[#1c2029]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[6px] bg-emerald-800 flex items-center justify-center text-emerald-300 font-bold text-[0.75rem]">
                    AP
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="inline-flex items-center gap-1.5 w-fit text-[0.55rem] uppercase tracking-[0.14em] text-emerald-300 font-semibold">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Pipeline Run · Live
                    </span>
                    <p className="text-base font-bold text-white">TICKET-142</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-2 px-3 py-[0.35rem] rounded-full bg-emerald-800/25 border border-emerald-800">
                    <span className="text-[0.7rem] text-emerald-300 font-semibold">
                      Tier A · feat/auth-flow
                    </span>
                  </span>
                  <span className="hidden sm:flex items-center gap-1.5 text-[0.68rem] text-[#8a95a8]">
                    <Clock className="h-3 w-3" />
                    Reviewed 12m ago
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[#1c2029] border-b border-[#1c2029]">
                <div className="px-6 py-5">
                  <p className="text-[0.6rem] uppercase tracking-[0.1em] text-[#5a6478] font-semibold mb-2">Brief Confidence</p>
                  <p className="text-[1.8rem] font-bold text-emerald-300 leading-none">High</p>
                  <p className="text-[0.62rem] text-[#5a6478] mt-1.5">6 signals aligned</p>
                </div>
                <div className="px-6 py-5">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[0.6rem] uppercase tracking-[0.1em] text-[#5a6478] font-semibold">Sandbox Tests</p>
                    <Target className="h-3.5 w-3.5 text-emerald-300" />
                  </div>
                  <p className="text-[1.8rem] font-bold text-emerald-300 leading-none">47</p>
                  <p className="text-[0.62rem] text-[#5a6478] mt-1.5">Passing · PR open</p>
                </div>
                <div className="px-6 py-5">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[0.6rem] uppercase tracking-[0.1em] text-[#5a6478] font-semibold">Review Rounds</p>
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-300" />
                  </div>
                  <p className="text-[1.8rem] font-bold text-white leading-none">2 / 3</p>
                  <p className="text-[0.62rem] text-[#5a6478] mt-1.5">Awaiting human</p>
                </div>
                <div className="px-6 py-5">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[0.6rem] uppercase tracking-[0.1em] text-[#5a6478] font-semibold">Response Time</p>
                    <Clock className="h-3.5 w-3.5 text-emerald-300" />
                  </div>
                  <p className="text-[1.8rem] font-bold text-white leading-none">12m</p>
                  <p className="text-[0.62rem] text-[#5a6478] mt-1.5">End to end</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-[#1c2029] border-b border-[#1c2029] bg-[#0b0d12]">
                {[
                  { label: 'Ticket', value: 'TICKET-142' },
                  { label: 'Category', value: 'Auth Flow' },
                  { label: 'Budget Signal', value: 'Confirmed' },
                  { label: 'Sandbox', value: 'Docker · ephemeral' },
                  { label: 'Priority', value: 'Immediate' },
                  { label: 'Owner', value: 'Dev · A1' },
                ].map((row, i) => (
                  <div key={i} className="px-5 py-4">
                    <p className="text-[0.55rem] uppercase tracking-[0.1em] text-[#5a6478] mb-1.5">{row.label}</p>
                    <p className="text-[0.8rem] text-[#e8ecf2] font-semibold leading-snug">{row.value}</p>
                  </div>
                ))}
              </div>

              <div className="px-6 py-5 border-b border-[#1c2029]">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <ChartLine className="h-3.5 w-3.5 text-emerald-300" />
                    <p className="text-[0.68rem] uppercase tracking-[0.12em] text-emerald-300 font-semibold">
                      Context Signal Breakdown
                    </p>
                  </div>
                  <span className="text-[0.62rem] text-[#5a6478]">6 dimensions scored</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3.5">
                  {[
                    { label: 'Verified', value: 88 },
                    { label: 'Inferred', value: 62 },
                    { label: 'Unknown', value: 22 },
                    { label: 'Stale', value: 12 },
                    { label: 'Structural', value: 91 },
                    { label: 'Business rules', value: 74 },
                  ].map((s, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-[0.72rem] text-[#8a95a8]">{s.label}</span>
                        <span className="text-[0.72rem] font-semibold text-[#e8ecf2]">{s.value}</span>
                      </div>
                      <div className="h-1 rounded-full bg-[#1c2029] overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-emerald-700 to-emerald-400"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, delay: i * 0.06, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#1c2029]">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                  className="p-6"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 rounded-[5px] bg-emerald-800/40 border border-emerald-800 flex items-center justify-center shrink-0">
                      <ClipboardCheck size={13} className="text-emerald-300" />
                    </div>
                    <p className="text-[0.62rem] uppercase tracking-[0.12em] text-emerald-300 font-semibold">
                      Domain Brief
                    </p>
                  </div>
                  <p className="text-[0.83rem] text-[#8a95a8] leading-[1.65]">
                    Grounded domain brief assembled from Jira ticket and codebase structure. Every fact tagged with confidence — verified facts dominate.
                  </p>
                  <div className="mt-4 pt-3 border-t border-[#1c2029] flex items-center gap-1.5 text-[0.62rem] text-emerald-300">
                    <CheckCircle2 className="h-3 w-3" />
                    <span>Ready for code generation</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.08 }}
                  className="p-6"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 rounded-[5px] bg-emerald-800/40 border border-emerald-800 flex items-center justify-center shrink-0">
                      <Bot size={13} className="text-emerald-300" />
                    </div>
                    <p className="text-[0.62rem] uppercase tracking-[0.12em] text-emerald-300 font-semibold">
                      Sandbox Test Results
                    </p>
                  </div>
                  <div className="rounded-[5px] bg-[#0f1218] border border-[#1c2029] p-3 mb-3">
                    <p className="text-[0.55rem] text-[#5a6478] uppercase tracking-[0.08em] mb-1">Last run</p>
                    <p className="text-[0.8rem] text-[#e8ecf2] font-medium leading-[1.5]">
                      47 / 47 tests passing · container destroyed
                    </p>
                  </div>
                  <p className="text-[0.78rem] text-[#8a95a8] leading-[1.6]">
                    Tests authored alongside code, run in an isolated Docker container against synthetic fixtures.
                  </p>
                  <div className="mt-4 pt-3 border-t border-[#1c2029] flex items-center gap-1.5 text-[0.62rem] text-[#8a95a8]">
                    <Sparkles className="h-3 w-3 text-emerald-300" />
                    <span>Zero production credential exposure</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.16 }}
                  className="p-6"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 rounded-[5px] bg-emerald-800/40 border border-emerald-800 flex items-center justify-center shrink-0">
                      <ListChecks size={13} className="text-emerald-300" />
                    </div>
                    <p className="text-[0.62rem] uppercase tracking-[0.12em] text-emerald-300 font-semibold">
                      Next Steps
                    </p>
                  </div>
                  <ol className="flex flex-col gap-2.5">
                    {[
                      'Human reviews PR and approves or requests changes',
                      'Merge to main after human approval — never automated',
                      'Curated context committed alongside the code change',
                    ].map((a, i) => (
                      <li key={i} className="flex gap-2.5 items-start text-[0.8rem] text-[#8a95a8] leading-[1.55]">
                        <span className="w-5 h-5 rounded-full bg-emerald-800/40 border border-emerald-800 text-emerald-300 text-[0.6rem] font-bold flex items-center justify-center shrink-0 mt-[0.05rem]">
                          {i + 1}
                        </span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ol>
                  <div className="mt-4 pt-3 border-t border-[#1c2029] flex items-center gap-1.5 text-[0.62rem] text-[#8a95a8]">
                    <ArrowRight className="h-3 w-3 text-emerald-300" />
                    <span>Human gate always required</span>
                  </div>
                </motion.div>
              </div>

              <div className="px-6 py-4 border-t border-[#1c2029] bg-[#0f1218] flex flex-wrap gap-4 justify-between items-center text-[0.68rem]">
                <div className="flex items-center gap-5 text-[#8a95a8]">
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Auto-briefed on ingest
                  </span>
                  <span className="hidden sm:flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Human-in-the-loop merge
                  </span>
                  <span className="hidden md:flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#5a6478]" />
                    Audit-logged to git
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="inline-flex items-center gap-1.5 px-3.5 py-[0.45rem] rounded-[5px] border border-[#2a3140] text-[#e8ecf2] bg-transparent hover:border-emerald-800 hover:bg-emerald-800/10 transition text-[0.68rem] font-semibold">
                    View history
                  </button>
                  <button className="inline-flex items-center gap-1.5 px-3.5 py-[0.45rem] rounded-[5px] border border-emerald-800 text-emerald-300 bg-emerald-800/20 hover:bg-emerald-800/30 transition text-[0.68rem] font-semibold">
                    <ArrowRight className="h-3 w-3" />
                    Open workspace
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimateSection>

      {/* ═══════════════ 02 — PROBLEM & SOLUTION ═══════════════ */}
      <ProblemSolutionSection />

      {/* ═══════════════ 03 — KEY FEATURES ═══════════════ */}
      <AnimateSection type="fadeUp">
        <section className="py-14 lg:py-[5.5rem] max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="text-center max-w-[780px] mx-auto mb-16">
            <div className="inline-block text-[0.72rem] uppercase tracking-[0.18em] text-emerald-300 font-semibold mb-4 border-l-2 border-emerald-800 pl-[0.7rem]">
              Key Features
            </div>
            <h2 className="text-[clamp(1.7rem,3.6vw,2.5rem)] text-white font-semibold tracking-[-0.02em] leading-[1.2] mb-4">
              An engineering intelligence engine <br /> built for real-world dev teams.
            </h2>
            <p className="text-[#8a95a8] text-[1.02rem] leading-[1.7]">
              The Agent Pipeline translates dense ticket requirements into clear, prioritized actions. No generic AI walls of text — just the specific briefs, sandbox results, and review steps your team needs to move code forward.
            </p>
          </div>

          <div className="flex flex-col gap-16 max-w-[1000px] mx-auto">
            {features.map((f, i) => {
              const Icon = f.icon;
              const reversed = i % 2 === 1;
              return (
                <div key={i} className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center`}>
                  <div className="flex-1 w-full">
                    <div className="relative aspect-[4/3] rounded-[8px] border border-[#1c2029] bg-[#0b0d12] overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-800 to-transparent opacity-70" />
                      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(16,185,129,0.12) 0%, transparent 55%)' }} />

                      {i === 0 && (
                        <div className="relative h-full flex flex-col items-center justify-center gap-6 p-8">
                          <div className="relative w-36 h-36 flex items-center justify-center shrink-0">
                            <span className="absolute inset-0 rounded-full border border-emerald-800/40 animate-[radarRing_3s_ease-out_infinite]" />
                            <span className="absolute inset-0 rounded-full border border-emerald-800/30 animate-[radarRing_3s_ease-out_infinite_0.6s]" />
                            <span className="absolute inset-0 rounded-full border border-emerald-800/20 animate-[radarRing_3s_ease-out_infinite_1.2s]" />
                            <span className="absolute inset-0 rounded-full overflow-hidden">
                              <span className="absolute top-1/2 left-1/2 w-1/2 h-[2px] origin-left bg-gradient-to-r from-emerald-400 to-transparent animate-[radarSweep_3s_linear_infinite]" />
                            </span>
                            <div className="relative w-20 h-20 rounded-full bg-emerald-800/30 border border-emerald-800 flex items-center justify-center z-10">
                              <Icon size={28} className="text-emerald-300" />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 gap-2 w-full max-w-[240px]">
                            {f.bullets.map((b, j) => (
                              <div
                                key={j}
                                className="flex items-center gap-2 text-[0.75rem] text-[#8a95a8] px-3 py-[0.5rem] rounded-[4px] bg-[#0f1218] border border-[#1c2029] animate-[signalPing_3s_ease-out_infinite]"
                                style={{ animationDelay: `${j * 0.5}s` }}
                              >
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shrink-0 animate-pulse" />
                                {b}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {i === 1 && (
                        <div className="relative h-full flex flex-col items-center justify-center gap-6 p-8">
                          <div className="relative w-36 h-36 flex items-center justify-center shrink-0">
                            <span className="absolute top-4 left-2 rounded-[10px] rounded-bl-[3px] bg-[#0f1218] border border-[#1c2029] px-3 py-1.5 text-[0.62rem] text-[#8a95a8] animate-[bubbleIn_5s_ease-out_infinite]">
                              Brief ready
                            </span>
                            <span className="absolute bottom-8 right-2 rounded-[10px] rounded-br-[3px] bg-emerald-800/25 border border-emerald-800 px-3 py-2 text-[0.62rem] text-emerald-100 animate-[bubbleIn_5s_ease-out_infinite_0.8s]">
                              <span className="inline-flex gap-1">
                                <span className="w-1 h-1 rounded-full bg-emerald-300 animate-[typingDot_1.4s_ease-in-out_infinite]" />
                                <span className="w-1 h-1 rounded-full bg-emerald-300 animate-[typingDot_1.4s_ease-in-out_infinite_0.2s]" />
                                <span className="w-1 h-1 rounded-full bg-emerald-300 animate-[typingDot_1.4s_ease-in-out_infinite_0.4s]" />
                              </span>
                            </span>
                            <span className="absolute top-1/2 right-0 -translate-y-1/2 text-[0.58rem] text-emerald-300 px-2 py-0.5 rounded-full bg-emerald-800/20 border border-emerald-800 whitespace-nowrap animate-[bubbleIn_5s_ease-out_infinite_1.6s]">
                              3 stages
                            </span>
                            <div className="relative w-16 h-16 rounded-full bg-emerald-800/30 border border-emerald-800 flex items-center justify-center z-10">
                              <Icon size={22} className="text-emerald-300" />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 gap-2 w-full max-w-[240px]">
                            {f.bullets.map((b, j) => (
                              <div key={j} className="flex items-center gap-2 text-[0.75rem] text-[#8a95a8] px-3 py-[0.5rem] rounded-[4px] bg-[#0f1218] border border-[#1c2029]">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shrink-0" />
                                {b}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {i === 2 && (
                        <div className="relative h-full flex flex-col items-center justify-center gap-6 p-8">
                          <div className="relative w-36 h-36 flex items-center justify-center shrink-0">
                            <span className="absolute inset-0 rounded-full border border-emerald-800/40" />
                            {[
                              { label: 'Brief', pos: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2' },
                              { label: 'Code', pos: 'top-1/2 right-0 translate-x-1/2 -translate-y-1/2' },
                              { label: 'Test', pos: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2' },
                              { label: 'Gate', pos: 'top-1/2 left-0 -translate-x-1/2 -translate-y-1/2' },
                            ].map((node, k) => (
                              <span key={k} className={`absolute ${node.pos} flex flex-col items-center gap-0.5 z-10`}>
                                <span className="w-7 h-7 rounded-full bg-[#0f1218] border border-emerald-800/70 flex items-center justify-center text-[0.55rem] font-bold text-emerald-300">
                                  {k + 1}
                                </span>
                                <span className="text-[0.5rem] uppercase tracking-[0.06em] text-[#5a6478] font-semibold">
                                  {node.label}
                                </span>
                              </span>
                            ))}
                            <span className="absolute inset-0 rounded-full animate-[orbit_4s_linear_infinite]">
                              <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.9)]" />
                            </span>
                            <div className="relative w-16 h-16 rounded-full bg-emerald-800/30 border border-emerald-800 flex items-center justify-center z-10">
                              <Icon size={22} className="text-emerald-300" />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 gap-2 w-full max-w-[240px]">
                            {f.bullets.map((b, j) => (
                              <div key={j} className="flex items-center gap-2 text-[0.75rem] text-[#8a95a8] px-3 py-[0.5rem] rounded-[4px] bg-[#0f1218] border border-[#1c2029]">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shrink-0" />
                                {b}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex-1 w-full">
                    <p className="text-[0.72rem] uppercase tracking-[0.16em] text-emerald-300 font-semibold mb-3">
                      Feature {String(i + 1).padStart(2, '0')}
                    </p>
                    <h3 className="text-[1.5rem] md:text-[1.7rem] mb-4 text-white font-semibold tracking-[-0.02em] leading-[1.25]">{f.title}</h3>
                    <p className="text-[#8a95a8] text-base leading-[1.7]">{f.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </AnimateSection>

      <SectionDivider />

      {/* ═══════════════ 04 — TECH STACK ═══════════════ */}
      <AnimateSection type="fadeUp">
        <section className="py-14 lg:py-[5.5rem] max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="text-center max-w-[780px] mx-auto mb-16">
            <div className="inline-block text-[0.72rem] uppercase tracking-[0.18em] text-emerald-300 font-semibold mb-4 border-l-2 border-emerald-800 pl-[0.7rem]">
              Tech Stack
            </div>
            <h2 className="text-[clamp(1.7rem,3.6vw,2.5rem)] text-white font-semibold tracking-[-0.02em] leading-[1.2]">
              Built on proven, <br /> enterprise-grade technology
            </h2>
          </div>

          <div className="relative max-w-[720px] mx-auto aspect-square flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-[#1c2029]" />
            <div className="absolute inset-[12%] rounded-full border border-dashed border-[#1c2029]/70 animate-[spinSlow_60s_linear_infinite]" />
            <div className="absolute inset-[26%] rounded-full border border-[#1c2029]/50" />
            <div className="absolute inset-[12%] rounded-full overflow-hidden">
              <div className="absolute top-1/2 left-1/2 w-1/2 h-[1px] origin-left bg-gradient-to-r from-emerald-400 via-emerald-400/40 to-transparent animate-[spinSlow_12s_linear_infinite]" />
            </div>
            <div className="absolute inset-[12%] animate-[spinSlow_20s_linear_infinite]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.9)]" />
            </div>

            <motion.div
              className="relative z-20 flex flex-col items-center justify-center w-[140px] h-[140px] rounded-full bg-gradient-to-b from-[#0f1218] to-[#0b0d12] border border-emerald-800/60 shadow-[0_0_60px_-10px_rgba(16,185,129,0.35),inset_0_1px_0_rgba(255,255,255,0.04)]"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="absolute inset-0 rounded-full border border-emerald-800/40 animate-[corePulse_3s_ease-out_infinite]" />
              <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.9)]" />
              <p className="text-[0.55rem] uppercase tracking-[0.18em] text-emerald-300 font-semibold mb-1">Core</p>
              <p className="text-[0.85rem] font-bold text-white leading-tight text-center px-3">
                Agent<br />Pipeline
              </p>
              <p className="text-[0.55rem] text-[#5a6478] mt-1">Enterprise-grade</p>
            </motion.div>

            {techStack.map((t, i) => {
              const Icon = t.icon;
              const angle = (i * 360) / techStack.length - 90;
              const radius = 44;
              const rad = (angle * Math.PI) / 180;
              const x = 50 + radius * Math.cos(rad);
              const y = 50 + radius * Math.sin(rad);
              return (
                <motion.div
                  key={i}
                  className="absolute z-10 -translate-x-1/2 -translate-y-1/2 group"
                  style={{ left: `${x}%`, top: `${y}%` }}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.08, ease: 'easeOut' }}
                >
                  <div
                    className="absolute top-1/2 left-1/2 h-px bg-gradient-to-r from-emerald-800/60 to-transparent pointer-events-none origin-left"
                    style={{ width: '70px', transform: `rotate(${angle + 180}deg)` }}
                  />
                  <div className="relative flex flex-col items-center gap-2 w-[110px] transition-transform duration-300 group-hover:scale-105">
                    <div className="relative w-12 h-12 rounded-full bg-[#0f1218] border border-emerald-800/60 flex items-center justify-center shadow-[0_0_20px_-6px_rgba(16,185,129,0.5)] group-hover:border-emerald-700 transition-colors">
                      <Icon size={18} className="text-emerald-300" />
                      <span className="absolute inset-0 rounded-full border border-emerald-800/40 opacity-0 group-hover:opacity-100 group-hover:animate-[nodePulse_1.6s_ease-out_infinite]" />
                    </div>
                    <div className="text-center">
                      <p className="text-[0.55rem] uppercase tracking-[0.14em] text-[#5a6478] font-semibold leading-none mb-1">{t.label}</p>
                      <p className="text-[0.7rem] text-white font-semibold leading-[1.3]">{t.value}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-14 flex flex-wrap gap-x-6 gap-y-3 justify-center max-w-[720px] mx-auto text-[0.68rem]">
            {techStack.map((t, i) => {
              const Icon = t.icon;
              return (
                <span key={i} className="inline-flex items-center gap-2 text-[#8a95a8]">
                  <Icon size={12} className="text-emerald-300" />
                  <span className="text-[#5a6478]">{t.label}</span>
                  <span className="text-white font-semibold">{t.value}</span>
                </span>
              );
            })}
          </div>
        </section>
      </AnimateSection>

      <SectionDivider />

      {/* ═══════════════ 05 — HOW IT WORKS ═══════════════ */}
      <AnimateSection type="fadeUp">
        <section className="py-14 lg:py-[5.5rem] max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="text-center max-w-[780px] mx-auto mb-14">
            <div className="inline-block text-[0.72rem] uppercase tracking-[0.18em] text-emerald-300 font-semibold mb-4 border-l-2 border-emerald-800 pl-[0.7rem]">
              How It Works
            </div>
            <h2 className="text-[clamp(1.7rem,3.6vw,2.5rem)] text-white font-semibold tracking-[-0.02em] leading-[1.2] mb-4">
              An intelligent <br /> engineering pipeline for every ticket.
            </h2>
            <p className="text-[#8a95a8] text-[1.02rem] leading-[1.7]">
              The Agent Pipeline wraps your existing engineering motion with an AI layer. No new rituals. No duplicate spreadsheets. Just smarter briefing, code generation, and review coordination from the moment a ticket arrives.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <span className="inline-flex items-center gap-2 bg-emerald-800/20 border border-emerald-800 text-emerald-300 text-[0.8rem] font-semibold px-[1.1rem] py-2 rounded-full">
              <Bolt size={14} />
              Drop-in for your current engineering workflow
            </span>
          </div>

          <div className="relative max-w-[1000px] mx-auto">
            <div className="hidden md:block absolute top-[38px] left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-emerald-800/40 via-emerald-800 to-emerald-800/40" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
              {steps.map((s, i) => (
                <div key={i} className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 w-[76px] h-[76px] rounded-full bg-[#0b0d12] border-2 border-emerald-800 flex items-center justify-center mb-5 shadow-[0_0_0_6px_rgba(6,78,59,0.15)]">
                    <span className="text-[1.3rem] font-bold text-emerald-300">{s.number}</span>
                  </div>
                  <h3 className="text-[1.05rem] mb-2 text-white font-semibold">{s.title}</h3>
                  <p className="text-[#8a95a8] text-[0.86rem] leading-[1.65] max-w-[280px]">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimateSection>

      <SectionDivider />

      {/* ═══════════════ 06 — EVIDENCE / CONFIDENCE TAGS ═══════════════ */}
      <AnimateSection type="fadeUp">
        <section className="py-14 lg:py-[5.5rem] max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="text-center max-w-[780px] mx-auto mb-14">
            <div className="inline-block text-[0.72rem] uppercase tracking-[0.18em] text-emerald-300 font-semibold mb-4 border-l-2 border-emerald-800 pl-[0.7rem]">
              Context Confidence
            </div>
            <h2 className="text-[clamp(1.7rem,3.6vw,2.5rem)] text-white font-semibold tracking-[-0.02em] leading-[1.2] mb-4">
              Dropping into a codebase it didn&apos;t write —<br /> without guessing.
            </h2>
            <p className="text-[#8a95a8] text-[1.02rem] leading-[1.7] max-w-3xl mx-auto">
              Most coding agents perform well on projects they started and poorly on an existing one. That gap is exactly where wrong implementations and wasted retries come from. The Context Agent closes it by tagging every fact with how sure it actually is.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[1080px] mx-auto">
            <div className="relative rounded-[12px] border border-[#1c2029] bg-[#0b0d12]/80 backdrop-blur-md overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-800/60 to-transparent" />
              <div className="flex items-start gap-3 px-6 py-5 border-b border-[#1c2029] bg-white/[0.015]">
                <div className="w-9 h-9 rounded-[6px] bg-emerald-800/30 border border-emerald-800 flex items-center justify-center shrink-0">
                  <Search size={15} className="text-emerald-300" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-3 mb-1">
                    <p className="text-[0.62rem] uppercase tracking-[0.14em] text-emerald-300 font-semibold">Confidence tags</p>
                    <span className="text-[0.6rem] text-[#5a6478] shrink-0">04 tags</span>
                  </div>
                  <p className="text-[0.78rem] text-[#8a95a8] leading-[1.55]">
                    Four states every fact can hold — expand any tag to see what it covers.
                  </p>
                </div>
              </div>

              <div className="relative px-6 py-2">
                <div className="absolute left-[42px] top-4 bottom-4 w-px bg-[#1c2029]" />
                <div className="flex flex-col">
                  {evidenceCards.map((l, i) => {
                    const Icon = l.icon;
                    const isOpen = openFaq === i;
                    return (
                      <div key={i} className="relative">
                        <button
                          onClick={() => setOpenFaq(isOpen ? null : i)}
                          className="group w-full flex items-start gap-4 py-4 text-left"
                        >
                          <span className="relative shrink-0 flex items-center justify-center w-[30px]">
                            <span
                              className={`rounded-full transition-all duration-300 flex items-center justify-center ${
                                isOpen
                                  ? 'w-8 h-8 bg-emerald-800/50 border border-emerald-700 shadow-[0_0_0_4px_rgba(16,185,129,0.12)]'
                                  : 'w-8 h-8 bg-[#0f1218] border border-[#1c2029] group-hover:border-emerald-800/60'
                              }`}
                            >
                              <Icon
                                size={14}
                                className={`transition-colors duration-300 ${
                                  isOpen ? 'text-emerald-300' : 'text-[#5a6478] group-hover:text-emerald-300/80'
                                }`}
                              />
                            </span>
                          </span>
                          <span className="flex-1 min-w-0 pt-[0.35rem]">
                            <span className="flex items-center justify-between gap-3">
                              <span
                                className={`text-base font-semibold transition-colors duration-300 ${
                                  isOpen ? 'text-white' : 'text-[#8a95a8] group-hover:text-[#e8ecf2]'
                                }`}
                              >
                                {l.title}
                              </span>
                              <ChevronDown
                                size={15}
                                className={`shrink-0 transition-all duration-300 ${
                                  isOpen ? 'rotate-180 text-emerald-300' : 'text-[#5a6478] group-hover:text-emerald-300/70'
                                }`}
                              />
                            </span>
                            <div
                              className={`overflow-hidden transition-all duration-500 ease-out ${
                                isOpen ? 'max-h-40 opacity-100 mt-2.5' : 'max-h-0 opacity-0 mt-0'
                              }`}
                            >
                              <p className="text-[0.83rem] text-[#8a95a8] leading-[1.65] pr-2">{l.description}</p>
                            </div>
                          </span>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="relative rounded-[12px] border border-[#1c2029] bg-[#0b0d12]/80 backdrop-blur-md overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-800/60 to-transparent" />
              <div className="flex items-start gap-3 px-6 py-5 border-b border-[#1c2029] bg-white/[0.015]">
                <div className="w-9 h-9 rounded-[6px] bg-emerald-800/30 border border-emerald-800 flex items-center justify-center shrink-0">
                  <ShieldCheck size={15} className="text-emerald-300" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-3 mb-1">
                    <p className="text-[0.62rem] uppercase tracking-[0.14em] text-emerald-300 font-semibold">Context rules</p>
                    <span className="flex items-center gap-1.5 text-[0.6rem] text-[#5a6478] shrink-0">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Enforced
                    </span>
                  </div>
                  <p className="text-[0.78rem] text-[#8a95a8] leading-[1.55]">
                    How context moves from inferred to verified — the four governing rules.
                  </p>
                </div>
              </div>

              <div className="relative px-6 py-2">
                <div className="flex flex-col">
                  {evidenceRules.map((rule, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                      className="group relative flex items-start gap-4 py-4 border-b border-[#1c2029] last:border-b-0"
                    >
                      <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full text-[0.62rem] font-bold bg-[#0f1218] border border-[#1c2029] text-[#5a6478] group-hover:border-emerald-800/60 group-hover:text-emerald-300/80 transition-colors duration-300">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className="flex-1 min-w-0 pt-[0.35rem]">
                        <span className="text-[0.62rem] font-mono tracking-[0.14em] text-emerald-300 block mb-2">
                          {rule.rank}
                        </span>
                        <p className="text-[0.83rem] text-[#8a95a8] leading-[1.65]">{rule.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimateSection>

      <SectionDivider />

      {/* ═══════════════ 07 — ARCHITECTURE ═══════════════ */}
      <AnimateSection type="fadeUp">
        <section className="py-14 lg:py-[5.5rem] max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="text-center max-w-[780px] mx-auto mb-14">
            <div className="inline-block text-[0.72rem] uppercase tracking-[0.18em] text-emerald-300 font-semibold mb-4 border-l-2 border-emerald-800 pl-[0.7rem]">
              The Stack
            </div>
            <h2 className="text-[clamp(1.7rem,3.6vw,2.5rem)] text-white font-semibold tracking-[-0.02em] leading-[1.2] mb-4">
              Built to sit inside your stack —<br /> not replace it.
            </h2>
            <p className="text-[#8a95a8] text-[1.02rem] leading-[1.7] max-w-3xl mx-auto">
              Every integration is an adapter. The pipeline has no opinions about your model, your orchestrator, or your identity provider beyond what&apos;s needed to ship code safely.
            </p>
          </div>

          <div className="max-w-[1000px] mx-auto border-t border-[#1c2029]">
            {architectureRows.map((row, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="border-b border-[#1c2029] py-[52px] grid grid-cols-[80px_1fr_1.2fr] gap-12 items-start transition-colors duration-[400ms] relative group hover:bg-white/[0.02] max-[860px]:grid-cols-1 max-[860px]:gap-4 max-[860px]:py-9"
              >
                <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-emerald-400 origin-top scale-y-0 transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-y-100" />
                <div className="font-mono text-xs text-[#5a6478] tracking-[.1em] pt-1.5">{row.i}</div>
                <h4 className="text-[clamp(1.1rem,1.6vw,1.4rem)] text-white font-semibold tracking-[-0.02em] leading-[1.3]">{row.title}</h4>
                <p className="text-[14.5px] text-[#8a95a8] leading-[1.7] max-w-[56ch]">{row.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </AnimateSection>

      <SectionDivider />

      {/* ═══════════════ 08 — NEXT GENERATION ═══════════════ */}
      <AnimateSection type="fadeUp">
        <section className="py-14 lg:py-[5.5rem] max-w-[1240px] mx-auto px-5 sm:px-8 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-900/15 blur-[200px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            <div className="text-center max-w-[780px] mx-auto mb-14">
              <div className="inline-block text-[0.72rem] uppercase tracking-[0.18em] text-emerald-300 font-semibold mb-4 border-l-2 border-emerald-800 pl-[0.7rem]">
                What&apos;s Next
              </div>
              <h2 className="text-[clamp(1.7rem,3.6vw,2.5rem)] text-white font-semibold tracking-[-0.02em] leading-[1.2] mb-4">
                The next generation of agentic delivery —<br /> already in the pipeline.
              </h2>
              <p className="text-[#8a95a8] text-[1.02rem] leading-[1.7] max-w-3xl mx-auto">
                This isn&apos;t a static system. Every pipeline run feeds back into the shared context, sharpening the domain brief for the next developer. The result compounds: fewer wrong implementations, less context re-guessing, and a codebase that gets easier to work in over time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-[#1c2029] max-w-[1080px] mx-auto">
              {nextGenFeatures.map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <motion.div
                    key={feat.num}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="border-r border-b border-[#1c2029] p-8 relative transition-colors duration-[450ms] hover:bg-white/[0.03] min-h-[240px] group"
                  >
                    <span className="absolute top-7 right-7 font-mono text-[11px] text-[#5a6478]">{feat.num}</span>
                    <div className="w-10 h-10 rounded-[6px] border border-emerald-800/40 bg-emerald-800/10 flex items-center justify-center text-emerald-300 mb-6 transition-colors duration-500 group-hover:bg-emerald-800/20">
                      <Icon size={18} />
                    </div>
                    <h4 className="text-[clamp(1.05rem,1.5vw,1.25rem)] text-white font-semibold tracking-[-0.02em] leading-[1.3] mb-4">
                      {feat.title}
                    </h4>
                    <p className="text-[14.5px] text-[#8a95a8] leading-[1.7]">{feat.desc}</p>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 border border-[#1c2029] max-w-[1080px] mx-auto">
              {roadmap.map((r, i) => {
                const Icon = r.icon;
                return (
                  <motion.div
                    key={r.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="border-r border-b border-[#1c2029] last:border-r-0 px-5 py-6 flex flex-col gap-3 transition-colors duration-300 hover:bg-white/[0.02] max-[860px]:last:border-r"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-emerald-300"><Icon size={15} /></span>
                      <span className="font-mono text-[0.6rem] tracking-[0.12em] uppercase text-[#5a6478]">{r.status}</span>
                    </div>
                    <span className="text-[0.85rem] text-[#e8ecf2] font-semibold leading-[1.4]">{r.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </AnimateSection>

      <SectionDivider />

      {/* ═══════════════ 09 — METRICS ═══════════════ */}
      <AnimateSection type="fadeUp">
        <section className="py-14 lg:py-[5.5rem] max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="text-center max-w-[780px] mx-auto mb-12">
            <div className="inline-block text-[0.72rem] uppercase tracking-[0.18em] text-emerald-300 font-semibold mb-4 border-l-2 border-emerald-800 pl-[0.7rem]">
              Metrics Dashboard
            </div>
            <h2 className="text-[clamp(1.7rem,3.6vw,2.5rem)] text-white font-semibold tracking-[-0.02em] leading-[1.2]">
              Turn pipeline quality <br /> into insight leadership can act on.
            </h2>
          </div>

          <p className="text-center text-[0.72rem] uppercase tracking-[0.12em] text-[#5a6478] font-semibold mb-8">
            Pipeline snapshot — last 30 days
          </p>

          <div className="max-w-[1000px] mx-auto grid grid-cols-2 lg:grid-cols-4 divide-y divide-x divide-[#1c2029] border border-[#1c2029] rounded-[6px] overflow-hidden bg-[#0b0d12]">
            {metrics.map((m, i) => (
              <div key={i} className="px-5 py-8 text-center">
                <p className="text-[0.62rem] uppercase tracking-[0.08em] text-[#5a6478] mb-3 min-h-[2.2em] flex items-center justify-center">
                  {m.label}
                </p>
                <p className="text-[2.4rem] font-bold text-white leading-none mb-2">{m.value}</p>
                <p className={`text-[0.75rem] flex items-center justify-center gap-1 ${m.accent ? 'text-emerald-400' : 'text-[#8a95a8]'}`}>
                  {m.accent && <ArrowUp size={11} />}
                  {m.delta}
                </p>
              </div>
            ))}
          </div>
        </section>
      </AnimateSection>

      <SectionDivider />

      {/* ═══════════════ 10 — GOVERNANCE ═══════════════ */}
      <AnimateSection type="fadeUp">
        <section className="py-14 lg:py-[5.5rem] max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="text-center max-w-[780px] mx-auto mb-14">
            <div className="inline-block text-[0.72rem] uppercase tracking-[0.18em] text-emerald-300 font-semibold mb-4 border-l-2 border-emerald-800 pl-[0.7rem]">
              The Gate
            </div>
            <h2 className="text-[clamp(1.7rem,3.6vw,2.5rem)] text-white font-semibold tracking-[-0.02em] leading-[1.2]">
              Every PR sees a human. <span className="text-[#8a95a8]">Period.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-[1080px] mx-auto">
            <div>
              <p className="text-[clamp(1.1rem,2vw,1.6rem)] leading-[1.35] tracking-[-0.01em] mb-6 text-white font-semibold">
                Whether the Reviewer approves on{' '}
                <span className="text-emerald-300">round one</span> or hits the cap on{' '}
                <span className="text-emerald-300">round three</span> — every pull request goes to a person before merge.
              </p>
              <p className="text-[#8a95a8] text-base leading-[1.75] max-w-[52ch] mb-8">
                Nothing merges on agent approval alone. The three-round cap between the Coder and Reviewer agents limits how many automated passes a PR gets before it reaches a person — it isn&apos;t the trigger for human involvement.
              </p>
              <div className="inline-flex items-center gap-3 font-mono text-[0.7rem] tracking-[0.12em] uppercase px-[1.1rem] py-3 border border-emerald-800 text-emerald-300 rounded-full bg-emerald-800/10">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Human-gated merge · no exceptions
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-square max-w-[480px] mx-auto"
            >
              <svg viewBox="0 0 520 520" fill="none" className="w-full h-full">
                <g className="animate-[spinSlow_60s_linear_infinite]" style={{ transformOrigin: '260px 260px' }}>
                  <circle cx="260" cy="260" r="220" stroke="#1c2029" strokeWidth="1" strokeDasharray="2 10" />
                  <circle cx="260" cy="40" r="6" fill="#10b981" />
                </g>
                <g className="animate-[spinSlow_40s_linear_infinite_reverse]" style={{ transformOrigin: '260px 260px' }}>
                  <circle cx="260" cy="260" r="180" stroke="#10b981" strokeOpacity=".28" strokeWidth="1" strokeDasharray="1 7" />
                  <circle cx="260" cy="440" r="5" fill="#10b981" />
                </g>
                <circle cx="260" cy="260" r="140" stroke="#10b981" strokeOpacity=".35" strokeWidth="1" strokeDasharray="1 5" className="animate-[spinSlow_50s_linear_infinite]" style={{ transformOrigin: '260px 260px' }} />
                <circle cx="260" cy="260" r="100" fill="none" stroke="#1c2029" strokeWidth="1" />
                <g fontFamily="monospace" fontSize="11" fill="#8a95a8" textAnchor="middle">
                  <text x="260" y="180">ROUND 1</text>
                  <text x="260" y="270">ROUND 2</text>
                  <text x="260" y="360">ROUND 3</text>
                </g>
                <circle cx="260" cy="260" r="46" fill="#0b0d12" stroke="#10b981" strokeWidth="2" />
                <text x="260" y="255" textAnchor="middle" fill="#10b981" fontFamily="monospace" fontSize="10" letterSpacing=".14em">HUMAN</text>
                <text x="260" y="272" textAnchor="middle" fill="#e8ecf2" fontFamily="monospace" fontSize="10" letterSpacing=".14em">GATE</text>
                <path d="M306 260 L440 260" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 4" />
                <polygon points="444,260 434,254 434,266" fill="#10b981" />
                <text x="400" y="248" textAnchor="middle" fill="#10b981" fontFamily="monospace" fontSize="10" letterSpacing=".1em">MERGE</text>
              </svg>
            </motion.div>
          </div>
        </section>
      </AnimateSection>

      <SectionDivider />

      {/* ═══════════════ 11 — LEADERSHIP VIEWS ═══════════════ */}
      <AnimateSection type="fadeUp">
        <section className="py-14 lg:py-[5.5rem] max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="max-w-[780px] mx-auto text-center mb-14">
            <div className="inline-block text-[0.72rem] uppercase tracking-[0.18em] text-emerald-300 font-semibold mb-4 border-l-2 border-emerald-800 pl-[0.7rem]">
              Leadership Insights
            </div>
            <h2 className="text-[clamp(1.7rem,3.6vw,2.5rem)] text-white font-semibold tracking-[-0.02em] leading-[1.2] mb-4">
              Leadership views you can act on
            </h2>
            <p className="text-[#8a95a8] text-base leading-[1.7] mx-auto">
              Four views give leadership a full read on pipeline quality — from overview down to churn patterns.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[1080px] mx-auto">
            <div className="relative rounded-[12px] border border-[#1c2029] bg-[#0b0d12]/80 backdrop-blur-md overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-800/60 to-transparent" />
              <div className="flex items-start gap-3 px-6 py-5 border-b border-[#1c2029] bg-white/[0.015]">
                <div className="w-9 h-9 rounded-[6px] bg-emerald-800/30 border border-emerald-800 flex items-center justify-center shrink-0">
                  <Search size={15} className="text-emerald-300" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-3 mb-1">
                    <p className="text-[0.62rem] uppercase tracking-[0.14em] text-emerald-300 font-semibold">Pipeline views</p>
                    <span className="text-[0.6rem] text-[#5a6478] shrink-0">04 views</span>
                  </div>
                  <p className="text-[0.78rem] text-[#8a95a8] leading-[1.55]">
                    Four perspectives on pipeline quality — expand any view to see what it covers.
                  </p>
                </div>
              </div>
              <div className="relative px-6 py-2">
                <div className="absolute left-[42px] top-4 bottom-4 w-px bg-[#1c2029]" />
                <div className="flex flex-col">
                  {[
                    { icon: Gauge, title: 'Overview', description: 'Total tickets, PR throughput, review rounds, human gate compliance' },
                    { icon: Search, title: 'Source Analysis', description: 'Which Jira and Azure DevOps projects produce the highest-quality context' },
                    { icon: Users, title: 'Team Performance', description: 'Per-developer PR conversion, review rounds, and sandbox pass rate' },
                    { icon: TrendingDown, title: 'Risk Analysis', description: 'Stale context patterns, unverified facts, and abandoned PR signals' },
                  ].map((l, i) => {
                    const Icon = l.icon;
                    const isOpen = openFaq === i;
                    return (
                      <div key={i} className="relative">
                        <button
                          onClick={() => setOpenFaq(isOpen ? null : i)}
                          className="group w-full flex items-start gap-4 py-4 text-left"
                        >
                          <span className="relative shrink-0 flex items-center justify-center w-[30px]">
                            <span
                              className={`rounded-full transition-all duration-300 flex items-center justify-center ${
                                isOpen
                                  ? 'w-8 h-8 bg-emerald-800/50 border border-emerald-700 shadow-[0_0_0_4px_rgba(16,185,129,0.12)]'
                                  : 'w-8 h-8 bg-[#0f1218] border border-[#1c2029] group-hover:border-emerald-800/60'
                              }`}
                            >
                              <Icon
                                size={14}
                                className={`transition-colors duration-300 ${
                                  isOpen ? 'text-emerald-300' : 'text-[#5a6478] group-hover:text-emerald-300/80'
                                }`}
                              />
                            </span>
                          </span>
                          <span className="flex-1 min-w-0 pt-[0.35rem]">
                            <span className="flex items-center justify-between gap-3">
                              <span
                                className={`text-base font-semibold transition-colors duration-300 ${
                                  isOpen ? 'text-white' : 'text-[#8a95a8] group-hover:text-[#e8ecf2]'
                                }`}
                              >
                                {l.title}
                              </span>
                              <ChevronDown
                                size={15}
                                className={`shrink-0 transition-all duration-300 ${
                                  isOpen ? 'rotate-180 text-emerald-300' : 'text-[#5a6478] group-hover:text-emerald-300/70'
                                }`}
                              />
                            </span>
                            <div
                              className={`overflow-hidden transition-all duration-500 ease-out ${
                                isOpen ? 'max-h-40 opacity-100 mt-2.5' : 'max-h-0 opacity-0 mt-0'
                              }`}
                            >
                              <p className="text-[0.83rem] text-[#8a95a8] leading-[1.65] pr-2">{l.description}</p>
                            </div>
                          </span>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="relative rounded-[12px] border border-[#1c2029] bg-[#0b0d12]/80 backdrop-blur-md overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-800/60 to-transparent" />
              <div className="flex items-start gap-3 px-6 py-5 border-b border-[#1c2029] bg-white/[0.015]">
                <div className="w-9 h-9 rounded-[6px] bg-emerald-800/30 border border-emerald-800 flex items-center justify-center shrink-0">
                  <Sparkles size={15} className="text-emerald-300" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-3 mb-1">
                    <p className="text-[0.62rem] uppercase tracking-[0.14em] text-emerald-300 font-semibold">Agent throughput</p>
                    <span className="flex items-center gap-1.5 text-[0.6rem] text-[#5a6478] shrink-0">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live
                    </span>
                  </div>
                  <p className="text-[0.78rem] text-[#8a95a8] leading-[1.55]">
                    Top-performing pipeline stages this month, ranked by qualified throughput.
                  </p>
                </div>
              </div>
              <div className="relative px-6 py-2">
                <div className="flex flex-col">
                  {[
                    { name: 'Context Agent', stat: '94 briefs assembled', delta: '(+12)' },
                    { name: 'Coder Agent', stat: '91 PRs opened', delta: '(+8)' },
                    { name: 'Reviewer Agent', stat: '89 rounds completed', delta: '(+5)' },
                  ].map((row, i) => {
                    const isTop = i === 0;
                    const fillWidth = isTop ? 94 : i === 1 ? 88 : 82;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                        className="group relative flex items-start gap-4 py-4 border-b border-[#1c2029] last:border-b-0"
                      >
                        <span
                          className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full text-[0.7rem] font-bold transition-colors duration-300 ${
                            isTop
                              ? 'bg-emerald-800/50 border border-emerald-700 text-emerald-300'
                              : 'bg-[#0f1218] border border-[#1c2029] text-[#5a6478] group-hover:border-emerald-800/60 group-hover:text-emerald-300/80'
                          }`}
                        >
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <div className="flex-1 min-w-0 pt-[0.35rem]">
                          <div className="flex items-center justify-between gap-3 mb-2">
                            <span className="text-base text-[#e8ecf2] font-semibold truncate">{row.name}</span>
                            <span className={`text-[0.7rem] font-semibold shrink-0 ${isTop ? 'text-emerald-300' : 'text-emerald-400'}`}>
                              {row.delta}
                            </span>
                          </div>
                          <p className="text-[0.75rem] text-[#8a95a8] mb-2.5">{row.stat}</p>
                          <div className="relative h-[3px] rounded-full bg-[#1c2029] overflow-hidden">
                            <motion.div
                              className={`absolute inset-y-0 left-0 rounded-full ${
                                isTop
                                  ? 'bg-gradient-to-r from-emerald-400 to-emerald-300'
                                  : 'bg-gradient-to-r from-emerald-700 to-emerald-500/60'
                              }`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${fillWidth}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.9, delay: 0.3 + i * 0.12, ease: 'easeOut' }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimateSection>

      <SectionDivider />

      {/* ═══════════════ 12 — TIMELINE ═══════════════ */}
      <AnimateSection type="fadeUp">
        <section className="py-14 lg:py-[5.5rem] max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="text-center max-w-[780px] mx-auto mb-14">
            <div className="inline-block text-[0.72rem] uppercase tracking-[0.18em] text-emerald-300 font-semibold mb-4 border-l-2 border-emerald-800 pl-[0.7rem]">
              The Flow
            </div>
            <h2 className="text-[clamp(1.7rem,3.6vw,2.5rem)] text-white font-semibold tracking-[-0.02em] leading-[1.2] mb-4">
              One ticket, end to end.
            </h2>
            <p className="text-[#8a95a8] text-[1.02rem] leading-[1.7] max-w-3xl mx-auto">
              From the moment a requirement lands on your board to the moment a human merges the PR.
            </p>
          </div>

          <div className="max-w-[860px] mx-auto relative pl-[72px] max-[640px]:pl-10 before:content-[''] before:absolute before:left-[22px] before:top-2 before:bottom-2 before:w-px before:bg-[#1c2029] max-[640px]:before:left-3">
            {timeline.map((it, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="relative pb-16 last:pb-0"
              >
                <span className="absolute -left-[58px] top-1.5 w-4 h-4 rounded-full bg-[#050608] border-2 border-emerald-700 max-[640px]:-left-9 max-[640px]:w-3 max-[640px]:h-3 max-[640px]:top-2" />
                <h5 className="text-[clamp(1.05rem,1.5vw,1.3rem)] text-white font-semibold tracking-[-0.02em] leading-[1.3] mb-3">
                  <span className="font-mono text-[0.7rem] text-emerald-300 tracking-[.14em] uppercase block mb-2.5">
                    {it.time}
                  </span>
                  {it.title}
                </h5>
                <p className="text-[0.9rem] text-[#8a95a8] leading-[1.7] max-w-[60ch]">{it.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </AnimateSection>

      <SectionDivider />

      {/* ═══════════════ 13 — VALUE PILLARS ═══════════════ */}
      <AnimateSection type="fadeUp">
        <section className="py-14 lg:py-[5.5rem] max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="text-center max-w-[780px] mx-auto mb-14">
            <div className="inline-block text-[0.72rem] uppercase tracking-[0.18em] text-emerald-300 font-semibold mb-4 border-l-2 border-emerald-800 pl-[0.7rem]">
              Value Pillars
            </div>
            <h2 className="text-[clamp(1.7rem,3.6vw,2.5rem)] text-white font-semibold tracking-[-0.02em] leading-[1.2]">
              Turn engineering discipline into <br /> a system your team can scale.
            </h2>
          </div>

          <div className="max-w-[1080px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              const isPrimary = i === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                  className="group relative flex flex-col rounded-[12px] border border-[#1c2029] bg-[#0b0d12]/80 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-emerald-800/60 hover:-translate-y-1"
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-800/40 to-transparent group-hover:via-emerald-500/80 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/0 to-transparent group-hover:via-emerald-500/70 transition-all duration-500" />
                  <span className="absolute top-5 right-6 text-[3.5rem] font-bold leading-none text-[#1c2029] group-hover:text-emerald-800/50 transition-colors duration-500 select-none tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <div className="relative flex flex-col h-full p-6 md:p-7">
                    <div className="relative mb-6 shrink-0">
                      <div
                        className={`relative z-10 w-12 h-12 rounded-[10px] flex items-center justify-center transition-all duration-300 ${
                          isPrimary
                            ? 'bg-emerald-800/40 border border-emerald-700 group-hover:scale-105'
                            : 'bg-emerald-800/25 border border-emerald-800 group-hover:scale-105'
                        }`}
                      >
                        <Icon size={20} className="text-emerald-300" />
                      </div>
                      <span className="absolute inset-0 rounded-[10px] bg-emerald-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="mb-5 h-px w-10 bg-[#1c2029] group-hover:w-16 group-hover:bg-emerald-800/60 transition-all duration-500" />
                    <h3 className="text-[1.05rem] text-white font-semibold leading-[1.3] mb-3">{p.title}</h3>
                    <p className="text-[0.88rem] text-[#8a95a8] leading-[1.7] flex-1">{p.description}</p>
                    <div className="mt-6 pt-5 border-t border-[#1c2029] flex items-center justify-between">
                      <span className="text-[0.6rem] uppercase tracking-[0.16em] text-[#5a6478] font-semibold">
                        Pillar {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="flex items-center gap-1.5 text-[0.62rem] text-emerald-300/60 group-hover:text-emerald-300 transition-colors duration-300">
                        <span className="h-1 w-1 rounded-full bg-emerald-400" />
                        Active
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </AnimateSection>

      <TestimonialsInnerPages />

      <CallToActionData
        title="Ready to accelerate your engineering pipeline?"
        description="See how the Agent Pipeline helps your team brief faster, ship smarter, and merge with confidence — under a human gate that never moves."
        primaryCTA={{ label: 'Book A Demo', href: '/book-demo' }}
        secondaryCTA={{ label: 'Contact Sales', href: '/book-demo' }}
      />

      <Footer />
    </div>
  );
}