'use client';

import { useState } from 'react';
import {

    Key,
    BookOpen,
    ClipboardCheck,

    ListChecks,
    ArrowRight,
    Hourglass,
    Microchip,
    UsersRound,
    ChartLine,
    MessagesSquare,
    Network,
    Trophy,
    Gauge,
    Search,
    Users,
    TrendingDown,
    Clock,
    HeartPulse,
    Bolt,
    ArrowUp,
    Database,
    Brain,
    IdCard,
    ChevronDown,
    Sparkles,
    CheckCircle2,

    Bot,

    ShieldCheck,
    Target,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimateSection from '@/components/AnimateSection';
import AILeadAnalyticsHero from '@/components/AILeadAnalyticsHero';
import { motion } from 'framer-motion';
import CallToActionData from '@/components/CallToActionData';
import TestimonialsInnerPages from '@/components/TestimonialsInnerPages';

const SectionDivider = () => (
    <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="relative h-px w-full bg-[#1c2029] overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-full bg-gradient-to-r from-transparent via-emerald-800 to-transparent origin-center animate-[dividerReveal_2.4s_ease-out_forwards]" />
        </div>
    </div>
);

export default function AILeadAnalytics() {
    const [activeTab, setActiveTab] = useState(0);
    const [openFaq, setOpenFaq] = useState<number | null>(0);



    const actionItems = [
        'Send AI-drafted follow-up with embedded case studies',
        'Request profiles with JD and assign delivery lead',
        'Move status to Meeting Scheduled after client reply',
    ];

    /* Section 3: Tabs */
    const problemTabs = [
        {
            id: 'risk',
            label: 'Time & risk hotspots',
            icon: Hourglass,
            subtitle: 'The realities of manual presales at scale.',
            items: [
                'Long response cycles while reps manually read inquiries and threads',
                'Inconsistent lead scoring and qualification standards across the team',
                'Profile and JD requests lost in email chains and spreadsheets',
                'Limited leadership visibility into conversion, churn, and source performance',
            ],
        },
        {
            id: 'engine',
            label: 'Presales intelligence engine',
            icon: Microchip,
            subtitle: 'Automated intelligence at every step.',
            items: [
                'Automated multi-factor lead scoring on ingest',
                'Intent, budget, and qualification reasoning on every record',
                'AI-generated follow-up emails with semantic case-study matching',
                'Profile request workflow with JD upload and assignee tracking',
                'Governed prompt-feedback loop for continuous AI improvement',
            ],
        },
        {
            id: 'team',
            label: 'Team experience',
            icon: UsersRound,
            subtitle: 'Built for how presales teams actually work.',
            items: [
                'Single lead workspace for scores, emails, profiles, and comments',
                'Role-based access for sales, admins, project leads, and leadership',
                'Email thread tracking with assignee response-time metrics',
                'Interview assessments, mock tests, and communication evaluations',
                'Microsoft Entra ID sign-in with approved-user governance',
            ],
        },
    ];

    /* Section 4: Split-panel features */
    const features = [
        {
            icon: ChartLine,
            title: 'Deep lead scoring',
            description:
                'Demographic, behavioral, engagement, firmographic, intent, and negative-risk dimensions on every lead — with explainable reasoning.',
            bullets: ['6 signal families', 'Explainable score breakdown', 'Confidence-weighted'],
        },
        {
            icon: MessagesSquare,
            title: 'Conversation-aware outreach',
            description:
                'RAG-backed follow-up drafts using lead context, email history, and the most relevant case studies.',
            bullets: ['Semantic case-study matching', 'Thread-aware drafts', 'Human-in-the-loop review'],
        },
        {
            icon: Network,
            title: 'Staffing-ready workflow',
            description:
                'Request profiles with JDs, assign delivery owners, track uploads, and keep sales and delivery aligned on one lead record.',
            bullets: ['JD upload + assignee', 'Delivery ownership', 'Single lead record'],
        },
    ];

    /* Section 5: Bento tech stack */
    const techStack = [
        { icon: Network, label: 'Frontend', value: 'React' },
        { icon: Database, label: 'Backend', value: 'Python / Flask' },
        { icon: Brain, label: 'AI / RAG', value: 'Azure OpenAI · Chroma · Llama integrations' },
        { icon: Network, label: 'Automation', value: 'n8n workflows' },
        { icon: IdCard, label: 'Identity', value: 'Microsoft Entra ID (SSO)' },
        { icon: Database, label: 'Database', value: 'MySQL' },
    ];

    /* Section 6: Vertical timeline steps */
    const steps = [
        {
            number: '01',
            title: 'Capture & score automatically',
            description:
                'Leads enter from forms, email, WhatsApp, LinkedIn, calls, or manual entry. Automation ingests the record and AI scores intent, budget, tier, and qualification in minutes.',
        },
        {
            number: '02',
            title: 'Act with AI-assisted follow-up',
            description:
                'Reps open a unified lead workspace, review score breakdowns, edit AI-drafted emails, send through integrated automation, and track replies with response-time analytics.',
        },
        {
            number: '03',
            title: 'Coordinate delivery & measure outcomes',
            description:
                'Request profiles with JDs, assign the right delivery owner, upload candidate profiles, run interview assessments, and monitor pipeline health in leadership dashboards.',
        },
    ];

    /* Section 7: Metrics with big numbers */
    const metrics = [
        { label: 'Org average lead score', value: '78', delta: '+6 this month', accent: true },
        { label: 'Median first-response improvement', value: '42%', delta: 'faster follow-up', accent: true },
        { label: 'Qualified lead rate', value: '31%', delta: 'of active pipeline', accent: false },
        { label: 'Profiles delivered on time', value: '89%', delta: 'within SLA', accent: false },
    ];

    /* Section 8: Accordion (leadership cards) */
    const leadershipCards = [
        { icon: Gauge, title: 'Overview', description: 'Total leads, qualification rate, conversion rate, team coverage' },
        { icon: Search, title: 'Source Analysis', description: 'Which channels produce the highest-quality opportunities' },
        { icon: Users, title: 'Team Performance', description: 'Assignee conversion, qualification, and score trends' },
        { icon: TrendingDown, title: 'Churn Analysis', description: 'Lost/disqualified patterns and risk signals' },
    ];

    /* Section 9: Ranked leaderboard */
    const leaderboard = [
        { rank: '#1', name: 'Enterprise Sales', stat: '94 qualified opportunities', delta: '(+12)' },
        { rank: '#2', name: 'Digital Practice', stat: '91 high-intent leads', delta: '(+8)' },
        { rank: '#3', name: 'Staffing Desk', stat: '89 profile requests fulfilled', delta: '(+5)' },
    ];

    const pillars = [
        { icon: Clock, title: 'Fewer missed opportunities', description: 'Respond while intent is still high.' },
        {
            icon: Network,
            title: 'Live pipeline trends',
            description: 'Track qualification, source ROI, and team performance in one place.',
        },
        {
            icon: HeartPulse,
            title: 'Positive operating rhythm',
            description: 'Reward fast, high-quality follow-up and consistent qualification.',
        },
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
        @keyframes breathe { 0% { opacity: 0.7; } 100% { opacity: 1; } }
        @keyframes scan { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
        @keyframes floatIn { 0% { opacity: 0; transform: translateY(24px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes fadeUp { 0% { opacity: 0; transform: translateY(16px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { 0% { opacity: 0; transform: translateY(8px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes slideIn { 0% { opacity: 0; transform: translateX(-16px); } 100% { opacity: 1; transform: translateX(0); } }
        @keyframes blobMorph {
          0% { border-radius: 58% 42% 46% 54% / 52% 48% 52% 48%; }
          50% { border-radius: 44% 56% 58% 42% / 48% 52% 44% 56%; }
          100% { border-radius: 52% 48% 40% 60% / 56% 44% 56% 44%; }
        }
        @keyframes dotTravel {
          0% { left: 0; opacity: 0; } 15% { opacity: 1; } 85% { opacity: 1; }
          100% { left: calc(100% - 6px); opacity: 0; }
        }
        @keyframes glowPulse { 0% { opacity: 0.5; transform: scale(0.98); } 100% { opacity: 0.9; transform: scale(1.02); } }
        @keyframes dividerReveal {
          0% { transform: translateX(-50%) scaleX(0); opacity: 0; }
          40% { opacity: 1; }
          100% { transform: translateX(-50%) scaleX(1); opacity: 1; }
        }
      `}</style>

            <AILeadAnalyticsHero />
            <SectionDivider />

            <AnimateSection type="fadeUp">
                <section className="py-14 lg:py-[5.5rem] max-w-[1240px] mx-auto px-5 sm:px-8">
                    <div className="text-center max-w-[780px] mx-auto mb-12">
                        <div className="inline-block text-[0.72rem] uppercase tracking-[0.18em] text-emerald-300 font-semibold mb-4 border-l-2 border-emerald-800 pl-[0.7rem]">
                            Sample Lead Overview
                        </div>
                        <h2 className="text-[clamp(1.7rem,3.6vw,2.5rem)] text-white font-semibold tracking-[-0.02em] leading-[1.2]">
                            Every lead record,<br /> fully qualified and action-ready
                        </h2>
                    </div>

                    {/* DASHBOARD WRAPPER — clean, flat surface */}
                    <div className="relative max-w-[1100px] mx-auto">
                        <div className="relative rounded-[10px] border border-[#1c2029] bg-[#0b0d12] overflow-hidden">

                            {/* ══════════ TOP HEADER STRIP ══════════ */}
                            <div className="flex flex-wrap gap-4 justify-between items-center px-6 py-4 bg-[#0f1218] border-b border-[#1c2029]">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-[6px] bg-emerald-800 flex items-center justify-center text-emerald-300 font-bold text-[0.75rem]">
                                        S9
                                    </div>
                                    <div className="flex flex-col gap-0.5">
                                        <span className="inline-flex items-center gap-1.5 w-fit text-[0.55rem] uppercase tracking-[0.14em] text-emerald-300 font-semibold">
                                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                            Lead Record · Live
                                        </span>
                                        <p className="text-base font-bold text-white">S_9_O_12</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <span className="inline-flex items-center gap-2 px-3 py-[0.35rem] rounded-full bg-emerald-800/25 border border-emerald-800">
                                        <span className="text-[0.7rem] text-emerald-300 font-semibold">
                                            Tier A · Enterprise Modernization
                                        </span>
                                    </span>
                                    <span className="hidden sm:flex items-center gap-1.5 text-[0.68rem] text-[#8a95a8]">
                                        <Clock className="h-3 w-3" />
                                        Scored 12m ago
                                    </span>
                                </div>
                            </div>

                            {/* ══════════ PRIMARY SCORE STRIP — 4 stats ══════════ */}
                            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[#1c2029] border-b border-[#1c2029]">
                                <div className="px-6 py-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <p className="text-[0.6rem] uppercase tracking-[0.1em] text-[#5a6478] font-semibold">
                                            Lead Score
                                        </p>
                                        {/* <Activity className="h-3.5 w-3.5 text-emerald-300" /> */}
                                    </div>
                                    <p className="text-[1.8rem] font-bold text-emerald-300 leading-none">87</p>
                                    <p className="text-[0.62rem] text-[#5a6478] mt-1.5">Tier A band</p>
                                </div>

                                <div className="px-6 py-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <p className="text-[0.6rem] uppercase tracking-[0.1em] text-[#5a6478] font-semibold">
                                            Intent Score
                                        </p>
                                        <Target className="h-3.5 w-3.5 text-emerald-300" />
                                    </div>
                                    <p className="text-[1.8rem] font-bold text-emerald-300 leading-none">82</p>
                                    <p className="text-[0.62rem] text-[#5a6478] mt-1.5">Meeting-ready</p>
                                </div>

                                <div className="px-6 py-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <p className="text-[0.6rem] uppercase tracking-[0.1em] text-[#5a6478] font-semibold">
                                            Confidence
                                        </p>
                                        <ShieldCheck className="h-3.5 w-3.5 text-emerald-300" />
                                    </div>
                                    <p className="text-[1.8rem] font-bold text-white leading-none">High</p>
                                    <p className="text-[0.62rem] text-[#5a6478] mt-1.5">6 signals aligned</p>
                                </div>

                                <div className="px-6 py-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <p className="text-[0.6rem] uppercase tracking-[0.1em] text-[#5a6478] font-semibold">
                                            Response Time
                                        </p>
                                        <Clock className="h-3.5 w-3.5 text-emerald-300" />
                                    </div>
                                    <p className="text-[1.8rem] font-bold text-white leading-none">12m</p>
                                    <p className="text-[0.62rem] text-[#5a6478] mt-1.5">Draft ready</p>
                                </div>
                            </div>

                            {/* ══════════ DETAIL GRID — Lead attributes ══════════ */}
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-[#1c2029] border-b border-[#1c2029] bg-[#0b0d12]">
                                {[
                                    { label: 'Lead ID', value: 'S_9_O_12' },
                                    { label: 'Category', value: 'Modernization' },
                                    { label: 'Budget Signal', value: 'Confirmed' },
                                    { label: 'Industry Fit', value: 'Logistics · High' },
                                    { label: 'Priority', value: 'Immediate' },
                                    { label: 'Owner', value: 'Presales · A1' },
                                ].map((row, i) => (
                                    <div key={i} className="px-5 py-4">
                                        <p className="text-[0.55rem] uppercase tracking-[0.1em] text-[#5a6478] mb-1.5">
                                            {row.label}
                                        </p>
                                        <p className="text-[0.8rem] text-[#e8ecf2] font-semibold leading-snug">
                                            {row.value}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* ══════════ SIGNAL BREAKDOWN — scoring dimensions ══════════ */}
                            <div className="px-6 py-5 border-b border-[#1c2029]">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                        <ChartLine className="h-3.5 w-3.5 text-emerald-300" />
                                        <p className="text-[0.68rem] uppercase tracking-[0.12em] text-emerald-300 font-semibold">
                                            Scoring Signal Breakdown
                                        </p>
                                    </div>
                                    <span className="text-[0.62rem] text-[#5a6478]">6 dimensions scored</span>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3.5">
                                    {[
                                        { label: 'Demographic', value: 88 },
                                        { label: 'Behavioral', value: 84 },
                                        { label: 'Engagement', value: 79 },
                                        { label: 'Firmographic', value: 91 },
                                        { label: 'Intent', value: 82 },
                                        { label: 'Risk', value: 15 },
                                    ].map((s, i) => (
                                        <div key={i}>
                                            <div className="flex justify-between items-center mb-1.5">
                                                <span className="text-[0.72rem] text-[#8a95a8]">{s.label}</span>
                                                <span className="text-[0.72rem] font-semibold text-[#e8ecf2]">
                                                    {s.value}
                                                </span>
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

                            {/* ══════════ ACTIVITY GRID — 3 detail blocks ══════════ */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#1c2029]">

                                {/* ── Qualification ── */}
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
                                            Qualification
                                        </p>
                                    </div>
                                    <p className="text-[0.83rem] text-[#8a95a8] leading-[1.65]">
                                        High-intent modernization inquiry with clear budget signals and relevant industry fit. Recommended for immediate presales engagement.
                                    </p>
                                    <div className="mt-4 pt-3 border-t border-[#1c2029] flex items-center gap-1.5 text-[0.62rem] text-emerald-300">
                                        <CheckCircle2 className="h-3 w-3" />
                                        <span>Ready for presales engagement</span>
                                    </div>
                                </motion.div>

                                {/* ── AI Follow-up Draft ── */}
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
                                            AI follow-up draft
                                        </p>
                                    </div>

                                    <div className="rounded-[5px] bg-[#0f1218] border border-[#1c2029] p-3 mb-3">
                                        <p className="text-[0.55rem] text-[#5a6478] uppercase tracking-[0.08em] mb-1">
                                            Subject
                                        </p>
                                        <p className="text-[0.8rem] text-[#e8ecf2] font-medium leading-[1.5]">
                                            Re: Cloud migration support for your logistics platform
                                        </p>
                                    </div>

                                    <p className="text-[0.78rem] text-[#8a95a8] leading-[1.6]">
                                        Body includes 3 matched case studies, prior thread context, and a clear next-step CTA.
                                    </p>
                                    <div className="mt-4 pt-3 border-t border-[#1c2029] flex items-center gap-1.5 text-[0.62rem] text-[#8a95a8]">
                                        <Sparkles className="h-3 w-3 text-emerald-300" />
                                        <span>RAG-backed · 3 case studies matched</span>
                                    </div>
                                </motion.div>

                                {/* ── Recommended Actions ── */}
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
                                            Recommended actions
                                        </p>
                                    </div>

                                    <ol className="flex flex-col gap-2.5">
                                        {actionItems.map((a, i) => (
                                            <li
                                                key={i}
                                                className="flex gap-2.5 items-start text-[0.8rem] text-[#8a95a8] leading-[1.55]"
                                            >
                                                <span className="w-5 h-5 rounded-full bg-emerald-800/40 border border-emerald-800 text-emerald-300 text-[0.6rem] font-bold flex items-center justify-center shrink-0 mt-[0.05rem]">
                                                    {i + 1}
                                                </span>
                                                <span>{a}</span>
                                            </li>
                                        ))}
                                    </ol>

                                    <div className="mt-4 pt-3 border-t border-[#1c2029] flex items-center gap-1.5 text-[0.62rem] text-[#8a95a8]">
                                        <ArrowRight className="h-3 w-3 text-emerald-300" />
                                        <span>3 next best actions surfaced</span>
                                    </div>
                                </motion.div>
                            </div>

                            {/* ══════════ FOOTER STRIP ══════════ */}
                            <div className="px-6 py-4 border-t border-[#1c2029] bg-[#0f1218] flex flex-wrap gap-4 justify-between items-center text-[0.68rem]">
                                <div className="flex items-center gap-5 text-[#8a95a8]">
                                    <span className="flex items-center gap-1.5">
                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                        Auto-scored on ingest
                                    </span>
                                    <span className="hidden sm:flex items-center gap-1.5">
                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                        Human-in-the-loop review
                                    </span>
                                    <span className="hidden md:flex items-center gap-1.5">
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#5a6478]" />
                                        Audit-logged
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

            <AnimateSection type="fadeUp">
                <section className="py-14 lg:py-[5.5rem] max-w-[1240px] mx-auto px-5 sm:px-8">
                    <div className="text-center  mx-auto mb-16">
                        <div className="inline-block text-[0.72rem] uppercase tracking-[0.18em] text-emerald-300 font-semibold mb-4 border-l-2 border-emerald-800 pl-[0.7rem]">
                            Problem & Solution
                        </div>
                        <h2 className="text-[clamp(1.7rem,3.6vw,2.5rem)] text-white font-semibold tracking-[-0.02em] leading-[1.2] mb-4">
                            Remove the friction <br /> from every presales handoff.
                        </h2>
                        <p className="text-[#8a95a8] text-[1.02rem] leading-[1.7] max-w-5xl mx-auto">
                            AI Lead Analytics acts as a tireless presales co-pilot that never forgets the checklist. It scores every inquiry, surfaces qualification reasoning, and prepares the next best action — so your team responds faster without sacrificing quality or governance.
                        </p>
                    </div>

                    {/* ══════════ HORIZONTAL LINKED TABS ══════════ */}
                    <div className="max-w-[1000px] mx-auto">

                        {/* ── TAB BAR ── */}
                        <div className="relative">
                            {/* Base track line under tabs */}
                            <div className="absolute left-0 right-0 bottom-0 h-px bg-[#1c2029]" />

                            {/* Animated emerald indicator that slides between tabs */}
                            <div className="relative flex justify-center gap-0">
                                {problemTabs.map((tab, i) => {
                                    const Icon = tab.icon;
                                    const isActive = activeTab === i;

                                    return (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(i)}
                                            className="group relative flex items-center gap-2.5 px-5 sm:px-7 py-4 text-left transition-colors duration-300"
                                        >
                                            {/* Sliding underline */}
                                            {isActive && (
                                                <motion.span
                                                    layoutId="horizontal-tab-underline"
                                                    className="absolute left-0 right-0 bottom-0 h-[2px] bg-emerald-400"
                                                    transition={{
                                                        type: 'spring',
                                                        stiffness: 400,
                                                        damping: 32,
                                                    }}
                                                />
                                            )}

                                            {/* Active glow dot */}
                                            {isActive && (
                                                <motion.span
                                                    layoutId="horizontal-tab-dot"
                                                    className="absolute left-1/2 -translate-x-1/2 -bottom-[5px] w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.18)]"
                                                    transition={{
                                                        type: 'spring',
                                                        stiffness: 400,
                                                        damping: 32,
                                                    }}
                                                />
                                            )}

                                            <Icon
                                                size={15}
                                                className={`transition-colors duration-300 shrink-0 ${isActive
                                                    ? 'text-emerald-300'
                                                    : 'text-[#5a6478] group-hover:text-emerald-300/80'
                                                    }`}
                                            />

                                            <span
                                                className={`text-[0.88rem] font-medium whitespace-nowrap transition-colors duration-300 ${isActive
                                                    ? 'text-white'
                                                    : 'text-[#8a95a8] group-hover:text-[#e8ecf2]'
                                                    }`}
                                            >
                                                {tab.label}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* ── PULSE TRAVELING DOWN ── */}
                        <div className="relative h-10 flex justify-center">
                            {/* Vertical thread from the active tab down to content */}
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
                                {/* Header */}
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

                                {/* Items — two-column, flowing */}
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 max-w-[760px] mx-auto text-left">
                                    {problemTabs[activeTab].items.map((item, j) => (
                                        <motion.li
                                            key={`${activeTab}-${j}`}
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.4,
                                                delay: 0.15 + j * 0.06,
                                                ease: 'easeOut',
                                            }}
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

                                {/* Footer */}
                                <motion.div
                                    key={`footer-${activeTab}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.4, delay: 0.4 }}
                                    className="mt-12 flex items-center justify-center gap-4"
                                >
                                    <button className="inline-flex items-center gap-2 text-[0.78rem] font-semibold text-emerald-300 hover:text-emerald-200 transition-colors duration-200 group">
                                        Explore capability
                                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                                    </button>
                                    <span className="h-px w-[100px] bg-[#1c2029]" />
                                    <span className="text-[0.68rem] text-[#5a6478]">
                                        Part of the AI Lead Analytics engine
                                    </span>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </AnimateSection>

            {/* ═══════════════ 4. KEY FEATURES — alternating split panels ═══════════════ */}
            <AnimateSection type="fadeUp">
                <section className="py-14 lg:py-[5.5rem] max-w-[1240px] mx-auto px-5 sm:px-8">
                    <div className="text-center max-w-[780px] mx-auto mb-16">
                        <div className="inline-block text-[0.72rem] uppercase tracking-[0.18em] text-emerald-300 font-semibold mb-4 border-l-2 border-emerald-800 pl-[0.7rem]">
                            Key Features
                        </div>
                        <h2 className="text-[clamp(1.7rem,3.6vw,2.5rem)] text-white font-semibold tracking-[-0.02em] leading-[1.2] mb-4">
                            A presales intelligence engine <br /> built for real-world revenue teams.
                        </h2>
                        <p className="text-[#8a95a8] text-[1.02rem] leading-[1.7]">
                            AI Lead Analytics translates dense lead signals into clear, prioritized actions. No generic AI walls of text — just the specific scores, drafts, and workflow steps your team needs to move opportunities forward.
                        </p>
                    </div>

                    <div className="flex flex-col gap-16 max-w-[1000px] mx-auto">
                        {features.map((f, i) => {
                            const Icon = f.icon;
                            const reversed = i % 2 === 1;
                            return (
                                <div key={i} className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center`}>
                                    {/* Visual side */}
                                    <div className="flex-1 w-full">
                                        <div className="relative aspect-[4/3] rounded-[8px] border border-[#1c2029] bg-[#0b0d12] overflow-hidden">
                                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-800 to-transparent opacity-70" />
                                            <div
                                                className="absolute inset-0"
                                                style={{
                                                    backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(79,124,255,0.14) 0%, transparent 55%)',
                                                }}
                                            />

                                            {/* ───────── FEATURE 01: Deep Lead Scoring — radar ───────── */}
                                            {i === 0 && (
                                                <div className="relative h-full flex flex-col items-center justify-center gap-6 p-8">
                                                    {/* Radar cluster */}
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

                                                    {/* Bullets */}
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

                                            {/* ───────── FEATURE 02: Conversation-aware outreach — chat ───────── */}
                                            {i === 1 && (
                                                <div className="relative h-full flex flex-col items-center justify-center gap-6 p-8">
                                                    {/* Chat cluster */}
                                                    <div className="relative w-36 h-36 flex items-center justify-center shrink-0">
                                                        {/* Incoming bubble */}
                                                        <span className="absolute top-4 left-2 rounded-[10px] rounded-bl-[3px] bg-[#0f1218] border border-[#1c2029] px-3 py-1.5 text-[0.62rem] text-[#8a95a8] animate-[bubbleIn_5s_ease-out_infinite]">
                                                            Inquiry received
                                                        </span>

                                                        {/* AI typing bubble */}
                                                        <span className="absolute bottom-8 right-2 rounded-[10px] rounded-br-[3px] bg-emerald-800/25 border border-emerald-800 px-3 py-2 text-[0.62rem] text-emerald-100 animate-[bubbleIn_5s_ease-out_infinite_0.8s]">
                                                            <span className="inline-flex gap-1">
                                                                <span className="w-1 h-1 rounded-full bg-emerald-300 animate-[typingDot_1.4s_ease-in-out_infinite]" />
                                                                <span className="w-1 h-1 rounded-full bg-emerald-300 animate-[typingDot_1.4s_ease-in-out_infinite_0.2s]" />
                                                                <span className="w-1 h-1 rounded-full bg-emerald-300 animate-[typingDot_1.4s_ease-in-out_infinite_0.4s]" />
                                                            </span>
                                                        </span>

                                                        {/* Match chip */}
                                                        <span className="absolute top-1/2 right-0 -translate-y-1/2 text-[0.58rem] text-emerald-300 px-2 py-0.5 rounded-full bg-emerald-800/20 border border-emerald-800 whitespace-nowrap animate-[bubbleIn_5s_ease-out_infinite_1.6s]">
                                                            3 matched
                                                        </span>

                                                        {/* Core icon */}
                                                        <div className="relative w-16 h-16 rounded-full bg-emerald-800/30 border border-emerald-800 flex items-center justify-center z-10">
                                                            <Icon size={22} className="text-emerald-300" />
                                                        </div>
                                                    </div>

                                                    {/* Bullets */}
                                                    <div className="grid grid-cols-1 gap-2 w-full max-w-[240px]">
                                                        {f.bullets.map((b, j) => (
                                                            <div
                                                                key={j}
                                                                className="flex items-center gap-2 text-[0.75rem] text-[#8a95a8] px-3 py-[0.5rem] rounded-[4px] bg-[#0f1218] border border-[#1c2029]"
                                                            >
                                                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shrink-0" />
                                                                {b}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* ───────── FEATURE 03: Staffing-ready workflow — routing ───────── */}
                                            {i === 2 && (
                                                <div className="relative h-full flex flex-col items-center justify-center gap-6 p-8">
                                                    {/* Routing cluster */}
                                                    <div className="relative w-36 h-36 flex items-center justify-center shrink-0">
                                                        {/* Ring of nodes */}
                                                        <span className="absolute inset-0 rounded-full border border-emerald-800/40" />

                                                        {/* 4 nodes around the ring */}
                                                        {[
                                                            { label: 'JD', pos: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2' },
                                                            { label: 'Assign', pos: 'top-1/2 right-0 translate-x-1/2 -translate-y-1/2' },
                                                            { label: 'Track', pos: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2' },
                                                            { label: 'Deliver', pos: 'top-1/2 left-0 -translate-x-1/2 -translate-y-1/2' },
                                                        ].map((node, k) => (
                                                            <span
                                                                key={k}
                                                                className={`absolute ${node.pos} flex flex-col items-center gap-0.5 z-10`}
                                                            >
                                                                <span className="w-7 h-7 rounded-full bg-[#0f1218] border border-emerald-800/70 flex items-center justify-center text-[0.55rem] font-bold text-emerald-300">
                                                                    {k + 1}
                                                                </span>
                                                                <span className="text-[0.5rem] uppercase tracking-[0.06em] text-[#5a6478] font-semibold">
                                                                    {node.label}
                                                                </span>
                                                            </span>
                                                        ))}

                                                        {/* Traveling packet around the ring */}
                                                        <span className="absolute inset-0 rounded-full animate-[orbit_4s_linear_infinite]">
                                                            <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.9)]" />
                                                        </span>

                                                        {/* Core icon */}
                                                        <div className="relative w-16 h-16 rounded-full bg-emerald-800/30 border border-emerald-800 flex items-center justify-center z-10">
                                                            <Icon size={22} className="text-emerald-300" />
                                                        </div>
                                                    </div>

                                                    {/* Bullets */}
                                                    <div className="grid grid-cols-1 gap-2 w-full max-w-[240px]">
                                                        {f.bullets.map((b, j) => (
                                                            <div
                                                                key={j}
                                                                className="flex items-center gap-2 text-[0.75rem] text-[#8a95a8] px-3 py-[0.5rem] rounded-[4px] bg-[#0f1218] border border-[#1c2029]"
                                                            >
                                                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shrink-0" />
                                                                {b}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Text side */}
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

            {/* ═══════════════ FEATURE ANIMATION KEYFRAMES ═══════════════ */}
            <style jsx global>{`
    /* Feature 01 — Deep lead scoring: radar */
    @keyframes radarRing {
        0%   { transform: scale(0.6); opacity: 0; }
        20%  { opacity: 0.6; }
        100% { transform: scale(1.1); opacity: 0; }
    }
    @keyframes radarSweep {
        0%   { transform: rotate(0deg); opacity: 0.9; }
        100% { transform: rotate(360deg); opacity: 0.9; }
    }
    @keyframes signalPing {
        0%, 100% { opacity: 0.6; }
        40%      { opacity: 1; }
    }

    /* Feature 02 — Conversation-aware outreach: chat */
    @keyframes bubbleIn {
        0%   { opacity: 0; transform: translateY(4px) scale(0.96); }
        15%  { opacity: 1; transform: translateY(0)   scale(1); }
        85%  { opacity: 1; transform: translateY(0)   scale(1); }
        100% { opacity: 0; transform: translateY(-2px) scale(0.98); }
    }
    @keyframes typingDot {
        0%, 60%, 100% { opacity: 0.3; transform: translateY(0); }
        30%           { opacity: 1;   transform: translateY(-2px); }
    }

    /* Feature 03 — Staffing-ready workflow: orbiting packet */
    @keyframes orbit {
        0%   { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`}</style>

            <SectionDivider />



            <AnimateSection type="fadeUp">
                <section className="py-14 lg:py-[5.5rem] max-w-[1240px] mx-auto px-5 sm:px-8">
                    <div className="text-center max-w-[780px] mx-auto mb-16">
                        <div className="inline-block text-[0.72rem] uppercase tracking-[0.18em] text-emerald-300 font-semibold mb-4 border-l-2 border-emerald-800 pl-[0.7rem]">
                            Tech Stack
                        </div>
                        <h2 className="text-[clamp(1.7rem,3.6vw,2.5rem)] text-white font-semibold tracking-[-0.02em] leading-[1.2] capitalize">
                            Built on proven, <br /> enterprise-grade technology
                        </h2>
                    </div>

                    {/* ══════════ CIRCULAR RING FORMATION ══════════ */}
                    <div className="relative max-w-[720px] mx-auto aspect-square flex items-center justify-center">

                        {/* Outer decorative ring */}
                        <div className="absolute inset-0 rounded-full border border-[#1c2029]" />

                        {/* Middle decorative ring (dashed) */}
                        <div
                            className="absolute inset-[12%] rounded-full border border-dashed border-[#1c2029]/70 animate-[spinSlow_60s_linear_infinite]"
                        />

                        {/* Inner decorative ring */}
                        <div className="absolute inset-[26%] rounded-full border border-[#1c2029]/50" />

                        {/* Rotating sweep line (like a radar) */}
                        <div className="absolute inset-[12%] rounded-full overflow-hidden">
                            <div
                                className="absolute top-1/2 left-1/2 w-1/2 h-[1px] origin-left bg-gradient-to-r from-emerald-400 via-emerald-400/40 to-transparent animate-[spinSlow_12s_linear_infinite]"
                            />
                        </div>

                        {/* Orbiting packet that travels around the middle ring */}
                        <div className="absolute inset-[12%] animate-[spinSlow_20s_linear_infinite]">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.9)]" />
                        </div>

                        {/* ══ CENTER CORE ══ */}
                        <motion.div
                            className="relative z-20 flex flex-col items-center justify-center w-[140px] h-[140px] rounded-full bg-gradient-to-b from-[#0f1218] to-[#0b0d12] border border-emerald-800/60 shadow-[0_0_60px_-10px_rgba(16,185,129,0.35),inset_0_1px_0_rgba(255,255,255,0.04)]"
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Pulsing ring */}
                            <span className="absolute inset-0 rounded-full border border-emerald-800/40 animate-[corePulse_3s_ease-out_infinite]" />

                            {/* Small dot indicator */}
                            <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.9)]" />

                            <p className="text-[0.55rem] uppercase tracking-[0.18em] text-emerald-300 font-semibold mb-1">
                                Core
                            </p>
                            <p className="text-[0.85rem] font-bold text-white leading-tight text-center px-3">
                                AI Lead<br />Analytics
                            </p>
                            <p className="text-[0.55rem] text-[#5a6478] mt-1">
                                Enterprise-grade
                            </p>
                        </motion.div>

                        {/* ══ 6 NODES AROUND THE RING ══ */}
                        {techStack.map((t, i) => {
                            const Icon = t.icon;
                            // 6 nodes evenly distributed, starting from top (-90deg)
                            const angle = (i * 360) / techStack.length - 90;
                            const radius = 44; // % from center
                            const rad = (angle * Math.PI) / 180;
                            const x = 50 + radius * Math.cos(rad);
                            const y = 50 + radius * Math.sin(rad);

                            return (
                                <motion.div
                                    key={i}
                                    className="absolute z-10 -translate-x-1/2 -translate-y-1/2 group"
                                    style={{
                                        left: `${x}%`,
                                        top: `${y}%`,
                                    }}
                                    initial={{ opacity: 0, scale: 0.7 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.15 + i * 0.08,
                                        ease: 'easeOut',
                                    }}
                                >
                                    {/* Connector line to center */}
                                    <div
                                        className="absolute top-1/2 left-1/2 h-px bg-gradient-to-r from-emerald-800/60 to-transparent pointer-events-none origin-left"
                                        style={{
                                            width: '70px',
                                            transform: `rotate(${angle + 180}deg)`,
                                        }}
                                    />

                                    {/* Node card — floating, no box */}
                                    <div className="relative flex flex-col items-center gap-2 w-[110px] transition-transform duration-300 group-hover:scale-105">
                                        {/* Icon tile */}
                                        <div className="relative w-12 h-12 rounded-full bg-[#0f1218] border border-emerald-800/60 flex items-center justify-center shadow-[0_0_20px_-6px_rgba(16,185,129,0.5)] group-hover:border-emerald-700 transition-colors">
                                            <Icon size={18} className="text-emerald-300" />

                                            {/* Ring pulse on hover */}
                                            <span className="absolute inset-0 rounded-full border border-emerald-800/40 opacity-0 group-hover:opacity-100 group-hover:animate-[nodePulse_1.6s_ease-out_infinite]" />
                                        </div>

                                        {/* Label + value */}
                                        <div className="text-center">
                                            <p className="text-[0.55rem] uppercase tracking-[0.14em] text-[#5a6478] font-semibold leading-none mb-1">
                                                {t.label}
                                            </p>
                                            <p className="text-[0.7rem] text-white font-semibold leading-[1.3]">
                                                {t.value}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* ══ Legend strip below ══ */}
                    <div className="mt-14 flex flex-wrap gap-x-6 gap-y-3 justify-center max-w-[720px] mx-auto text-[0.68rem]">
                        {techStack.map((t, i) => {
                            const Icon = t.icon;
                            return (
                                <span
                                    key={i}
                                    className="inline-flex items-center gap-2 text-[#8a95a8]"
                                >
                                    <Icon size={12} className="text-emerald-300" />
                                    <span className="text-[#5a6478]">{t.label}</span>
                                    <span className="text-white font-semibold">{t.value}</span>
                                </span>
                            );
                        })}
                    </div>
                </section>
            </AnimateSection>

            {/* ═══════════════ KEYFRAMES ═══════════════ */}
            <style jsx global>{`
    @keyframes spinSlow {
        0%   { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    @keyframes corePulse {
        0%   { transform: scale(1);    opacity: 0.6; }
        100% { transform: scale(1.35); opacity: 0; }
    }
    @keyframes nodePulse {
        0%   { transform: scale(1);   opacity: 0.8; }
        100% { transform: scale(1.6); opacity: 0; }
    }
`}</style>


            {/* ═══════════════ 5. TECH STACK — BENTO GRID ═══════════════ */}


            <SectionDivider />

            {/* ═══════════════ 6. HOW IT WORKS — HORIZONTAL TIMELINE ═══════════════ */}
            <AnimateSection type="fadeUp">
                <section className="py-14 lg:py-[5.5rem] max-w-[1240px] mx-auto px-5 sm:px-8">
                    <div className="text-center max-w-[780px] mx-auto mb-14">
                        <div className="inline-block text-[0.72rem] uppercase tracking-[0.18em] text-emerald-300 font-semibold mb-4 border-l-2 border-emerald-800 pl-[0.7rem]">
                            How It Works
                        </div>
                        <h2 className="text-[clamp(1.7rem,3.6vw,2.5rem)] text-white capitalize font-semibold tracking-[-0.02em] leading-[1.2] mb-4">
                            An intelligent <br /> presales  pipeline for every inbound lead.
                        </h2>
                        <p className="text-[#8a95a8] text-[1.02rem] leading-[1.7]">
                            AI Lead Analytics wraps your existing presales motion with an AI layer. No new rituals. No duplicate spreadsheets. Just smarter qualification, outreach, and staffing coordination from the moment a lead arrives.
                        </p>
                    </div>

                    <div className="flex justify-center mb-12">
                        <span className="inline-flex items-center gap-2 bg-emerald-800/20 border border-emerald-800 text-emerald-300 text-[0.8rem] font-semibold px-[1.1rem] py-2 rounded-full">
                            <Bolt size={14} />
                            Drop-in for your current presales workflow
                        </span>
                    </div>

                    {/* Horizontal timeline */}
                    <div className="relative max-w-[1000px] mx-auto">
                        {/* Connector line */}
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

            {/* ═══════════════ 7. METRICS — BIG NUMBER HERO ROW ═══════════════ */}
            <AnimateSection type="fadeUp">
                <section className="py-14 lg:py-[5.5rem] max-w-[1240px] mx-auto px-5 sm:px-8">
                    <div className="text-center max-w-[780px] mx-auto mb-12">
                        <div className="inline-block text-[0.72rem] uppercase  tracking-[0.18em] text-emerald-300 font-semibold mb-4 border-l-2 border-emerald-800 pl-[0.7rem]">
                            Metrics Dashboard
                        </div>
                        <h2 className="text-[clamp(1.7rem,3.6vw,2.5rem)] capitalize text-white font-semibold tracking-[-0.02em] capitalize leading-[1.2]">
                            Turn pipeline quality <br /> into insight leadership can act on.
                        </h2>
                    </div>

                    <p className="text-center text-[0.72rem] uppercase tracking-[0.12em] text-[#5a6478] font-semibold mb-8">
                        Dashboard snapshot — last 30 days
                    </p>

                    {/* Big number row — no boxes */}
                    <div className="max-w-[1000px] mx-auto grid grid-cols-2 lg:grid-cols-4 divide-y divide-x divide-[#1c2029] border border-[#1c2029] rounded-[6px] overflow-hidden bg-[#0b0d12]">
                        {metrics.map((m, i) => (
                            <div key={i} className="px-5 py-8 text-center">
                                <p className="text-[0.62rem] uppercase tracking-[0.08em] text-[#5a6478] mb-3 min-h-[2.2em] flex items-center justify-center">
                                    {m.label}
                                </p>
                                <p className="text-[2.4rem] font-bold text-white leading-none mb-2">{m.value}</p>
                                <p className={`text-[0.75rem] flex items-center justify-center gap-1 ${m.accent ? 'text-[#4ade80]' : 'text-[#8a95a8]'}`}>
                                    {m.accent && <ArrowUp size={11} />}
                                    {m.delta}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </AnimateSection>

            <SectionDivider />

            <AnimateSection type="fadeUp">
                <section className="py-14 lg:py-[5.5rem] max-w-[1240px] mx-auto px-5 sm:px-8">
                    {/* ══════════ SECTION HEADER ══════════ */}
                    <div className="max-w-[780px] mx-auto text-center mb-14">
                        <div className="inline-block text-[0.72rem] uppercase tracking-[0.18em] text-emerald-300 font-semibold mb-4 border-l-2 border-emerald-800 pl-[0.7rem]">
                            Leadership Insights
                        </div>
                        <h2 className="text-[clamp(1.7rem,3.6vw,2.5rem)] text-white font-semibold tracking-[-0.02em] leading-[1.2] mb-4">
                            Leadership views you can act on
                        </h2>
                        <p className="text-[#8a95a8] text-base leading-[1.7]  mx-auto">
                            Four views give leadership a full read on pipeline quality — from overview down to churn patterns.
                        </p>
                    </div>

                    {/* ══════════ TWO PANELS ══════════ */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[1080px] mx-auto">

                        {/* ────────── LEFT PANEL — Views ────────── */}
                        <div className="relative rounded-[12px] border border-[#1c2029] bg-[#0b0d12]/80 backdrop-blur-md overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-800/60 to-transparent" />

                            {/* Panel header — title + description + count */}
                            <div className="flex items-start gap-3 px-6 py-5 border-b border-[#1c2029] bg-white/[0.015]">
                                <div className="w-9 h-9 rounded-[6px] bg-emerald-800/30 border border-emerald-800 flex items-center justify-center shrink-0">
                                    <Search size={15} className="text-emerald-300" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between gap-3 mb-1">
                                        <p className="text-[0.62rem] uppercase tracking-[0.14em] text-emerald-300 font-semibold">
                                            Leadership views
                                        </p>
                                        <span className="text-[0.6rem] text-[#5a6478] shrink-0">
                                            04 views
                                        </span>
                                    </div>
                                    <p className="text-[0.78rem] text-[#8a95a8] leading-[1.55]">
                                        Four perspectives on pipeline quality — expand any view to see what it covers.
                                    </p>
                                </div>
                            </div>

                            {/* Views list */}
                            <div className="relative px-6 py-2">
                                <div className="absolute left-[42px] top-4 bottom-4 w-px bg-[#1c2029]" />

                                <div className="flex flex-col">
                                    {leadershipCards.map((l, i) => {
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
                                                            className={`rounded-full transition-all duration-300 flex items-center justify-center ${isOpen
                                                                ? 'w-8 h-8 bg-emerald-800/50 border border-emerald-700 shadow-[0_0_0_4px_rgba(16,185,129,0.12)]'
                                                                : 'w-8 h-8 bg-[#0f1218] border border-[#1c2029] group-hover:border-emerald-800/60'
                                                                }`}
                                                        >
                                                            <Icon
                                                                size={14}
                                                                className={`transition-colors duration-300 ${isOpen
                                                                    ? 'text-emerald-300'
                                                                    : 'text-[#5a6478] group-hover:text-emerald-300/80'
                                                                    }`}
                                                            />
                                                        </span>
                                                    </span>

                                                    <span className="flex-1 min-w-0 pt-[0.35rem]">
                                                        <span className="flex items-center justify-between gap-3">
                                                            <span
                                                                className={`text-base font-semibold transition-colors duration-300 ${isOpen
                                                                    ? 'text-white'
                                                                    : 'text-[#8a95a8] group-hover:text-[#e8ecf2]'
                                                                    }`}
                                                            >
                                                                {l.title}
                                                            </span>
                                                            <ChevronDown
                                                                size={15}
                                                                className={`shrink-0 transition-all duration-300 ${isOpen
                                                                    ? 'rotate-180 text-emerald-300'
                                                                    : 'text-[#5a6478] group-hover:text-emerald-300/70'
                                                                    }`}
                                                            />
                                                        </span>

                                                        <div
                                                            className={`overflow-hidden transition-all duration-500 ease-out ${isOpen
                                                                ? 'max-h-40 opacity-100 mt-2.5'
                                                                : 'max-h-0 opacity-0 mt-0'
                                                                }`}
                                                        >
                                                            <p className="text-[0.83rem] text-[#8a95a8] leading-[1.65] pr-2">
                                                                {l.description}
                                                            </p>
                                                        </div>
                                                    </span>
                                                </button>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* ────────── RIGHT PANEL — Leaderboard ────────── */}
                        <div className="relative rounded-[12px] border border-[#1c2029] bg-[#0b0d12]/80 backdrop-blur-md overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-800/60 to-transparent" />

                            {/* Panel header — title + description + live */}
                            <div className="flex items-start gap-3 px-6 py-5 border-b border-[#1c2029] bg-white/[0.015]">
                                <div className="w-9 h-9 rounded-[6px] bg-emerald-800/30 border border-emerald-800 flex items-center justify-center shrink-0">
                                    <Trophy size={15} className="text-emerald-300" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between gap-3 mb-1">
                                        <p className="text-[0.62rem] uppercase tracking-[0.14em] text-emerald-300 font-semibold">
                                            Sample leaderboard
                                        </p>
                                        <span className="flex items-center gap-1.5 text-[0.6rem] text-[#5a6478] shrink-0">
                                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                            Live
                                        </span>
                                    </div>
                                    <p className="text-[0.78rem] text-[#8a95a8] leading-[1.55]">
                                        Top performing teams this month, ranked by qualified output.
                                    </p>
                                </div>
                            </div>

                            {/* Ranked rows */}
                            <div className="relative px-6 py-2">
                                <div className="flex flex-col">
                                    {leaderboard.map((row, i) => {
                                        const isTop = i === 0;
                                        const fillWidth = isTop ? 94 : i === 1 ? 88 : 82;

                                        return (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: 8 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    duration: 0.5,
                                                    delay: 0.1 + i * 0.1,
                                                }}
                                                className="group relative flex items-start gap-4 py-4 border-b border-[#1c2029] last:border-b-0"
                                            >
                                                <span
                                                    className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full text-[0.7rem] font-bold transition-colors duration-300 ${isTop
                                                        ? 'bg-emerald-800/50 border border-emerald-700 text-emerald-300'
                                                        : 'bg-[#0f1218] border border-[#1c2029] text-[#5a6478] group-hover:border-emerald-800/60 group-hover:text-emerald-300/80'
                                                        }`}
                                                >
                                                    {String(i + 1).padStart(2, '0')}
                                                </span>

                                                <div className="flex-1 min-w-0 pt-[0.35rem]">
                                                    <div className="flex items-center justify-between gap-3 mb-2">
                                                        <span className="text-base text-[#e8ecf2] font-semibold truncate">
                                                            {row.name}
                                                        </span>
                                                        <span
                                                            className={`text-[0.7rem] font-semibold shrink-0 ${isTop ? 'text-emerald-300' : 'text-[#4ade80]'
                                                                }`}
                                                        >
                                                            {row.delta}
                                                        </span>
                                                    </div>

                                                    <p className="text-[0.75rem] text-[#8a95a8] mb-2.5">
                                                        {row.stat}
                                                    </p>

                                                    <div className="relative h-[3px] rounded-full bg-[#1c2029] overflow-hidden">
                                                        <motion.div
                                                            className={`absolute inset-y-0 left-0 rounded-full ${isTop
                                                                ? 'bg-gradient-to-r from-emerald-400 to-emerald-300'
                                                                : 'bg-gradient-to-r from-emerald-700 to-emerald-500/60'
                                                                }`}
                                                            initial={{ width: 0 }}
                                                            whileInView={{ width: `${fillWidth}%` }}
                                                            viewport={{ once: true }}
                                                            transition={{
                                                                duration: 0.9,
                                                                delay: 0.3 + i * 0.12,
                                                                ease: 'easeOut',
                                                            }}
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

            {/* ═══════════════ 8. LEADERSHIP INSIGHTS — ACCORDION ═══════════════ */}

            <SectionDivider />


            <AnimateSection type="fadeUp">
                <section className="py-14 lg:py-[5.5rem] max-w-[1240px] mx-auto px-5 sm:px-8">
                    <div className="text-center max-w-[780px] mx-auto mb-14">
                        <div className="inline-block text-[0.72rem] uppercase tracking-[0.18em] text-emerald-300 font-semibold mb-4 border-l-2 border-emerald-800 pl-[0.7rem]">
                            Value Pillars
                        </div>
                        <h2 className="text-[clamp(1.7rem,3.6vw,2.5rem)] text-white font-semibold tracking-[-0.02em] capitalize  leading-[1.2]">
                            Turn presales discipline into <br /> a system your team can scale.
                        </h2>
                    </div>

                    {/* ══════════ VERTICAL PILLAR CARDS ══════════ */}
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
                                    transition={{
                                        duration: 0.5,
                                        delay: i * 0.1,
                                        ease: 'easeOut',
                                    }}
                                    className="group relative flex flex-col rounded-[12px] border border-[#1c2029] bg-[#0b0d12]/80 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-emerald-800/60 hover:-translate-y-1"
                                >
                                    {/* Top accent bar — animates on hover */}
                                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-800/40 to-transparent group-hover:via-emerald-500/80 transition-all duration-500" />

                                    {/* Bottom accent glow that grows on hover */}
                                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/0 to-transparent group-hover:via-emerald-500/70 transition-all duration-500" />

                                    {/* Numbered watermark — top right */}
                                    <span className="absolute top-5 right-6 text-[3.5rem] font-bold leading-none text-[#1c2029] group-hover:text-emerald-800/50 transition-colors duration-500 select-none tabular-nums">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>

                                    {/* Body */}
                                    <div className="relative flex flex-col h-full p-6 md:p-7">

                                        {/* Icon tile */}
                                        <div className="relative mb-6 shrink-0">
                                            <div
                                                className={`relative z-10 w-12 h-12 rounded-[10px] flex items-center justify-center transition-all duration-300 ${isPrimary
                                                    ? 'bg-emerald-800/40 border border-emerald-700 group-hover:scale-105'
                                                    : 'bg-emerald-800/25 border border-emerald-800 group-hover:scale-105'
                                                    }`}
                                            >
                                                <Icon
                                                    size={20}
                                                    className="text-emerald-300"
                                                />
                                            </div>

                                            {/* Soft halo behind the icon */}
                                            <span className="absolute inset-0 rounded-[10px] bg-emerald-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        </div>

                                        {/* Divider line — grows on hover */}
                                        <div className="mb-5 h-px w-10 bg-[#1c2029] group-hover:w-16 group-hover:bg-emerald-800/60 transition-all duration-500" />

                                        {/* Title */}
                                        <h3 className="text-[1.05rem] text-white font-semibold leading-[1.3] mb-3">
                                            {p.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-[0.88rem] text-[#8a95a8] leading-[1.7] flex-1">
                                            {p.description}
                                        </p>

                                        {/* Footer marker — subtle "pillar index" */}
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

                title={"Ready to accelerate your presales pipeline?"}
                description={"See how AI Lead Analytics helps your team qualify faster, follow up smarter, and coordinate delivery with confidence."}
                primaryCTA={{
                    label: 'Book A Demo',
                    href: "/book-demo",

                }}
                secondaryCTA={
                    {
                        label: "Contact Sales",
                        href: "/book-demo",
                    }
                }

            />
            <Footer />
        </div>
    );
}