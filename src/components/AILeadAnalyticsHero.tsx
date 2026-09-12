'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    Key,
    BookOpen,
    Network,
    ShieldCheck,
    ArrowRight,
    Play,
    Zap,
    CircleAlert,
    WandSparkles,
    Activity,
    Target,
    Clock,
    TrendingUp,
} from 'lucide-react';
import DotGrid from '@/components/dotgrid';

/* ----------------------------------------
   Motion presets — same as PlusHero
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

export default function AILeadAnalyticsHero() {
    const random = (min: number, max: number) =>
        Math.round(min + Math.random() * (max - min));

    const [stats, setStats] = useState({
        leadsScored: 2847,
        responseTime: 12,
        qualifiedRate: 31,
        activeSignals: 6,
    });

    useEffect(() => {
        const t = setInterval(() => {
            setStats({
                leadsScored: random(2700, 3100),
                responseTime: random(8, 18),
                qualifiedRate: random(28, 35),
                activeSignals: 6,
            });
        }, 2200);
        return () => clearInterval(t);
    }, []);

    const challenges = [
        'Slow lead response (24–48 hours before meaningful follow-up)',
        'Inconsistent qualification and scoring across reps',
        'Manual profile/JD coordination across sales and delivery',
        'Limited visibility into pipeline health and source ROI',
    ];

    const railTags = [
        { icon: Key, label: 'Microsoft SSO & role-based access' },
        { icon: BookOpen, label: 'RAG-backed case study personalization' },
        { icon: Network, label: 'n8n automation for scoring, email, and ingestion' },
    ];

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
                            AI Lead Analytics <span className="text-[#5a6478]">·</span>{' '}
                            <span className="text-[#8a95a8] normal-case tracking-normal">
                                Intelligence Dashboard
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={heroItem}
                            className="font-medium tracking-[-0.02em] text-white text-[26px] leading-[1.15] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px]"
                        >
                            AI Lead Analytics{' '}
                            <span className="bg-gradient-to-r from-[#4f7cff] to-[#9ab4e8] bg-clip-text text-transparent">
                                {' '}
                                Qualifies Every
                                Inbound Inquiry
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={heroItem}
                            className="mx-auto lg:mx-0 max-w-[32ch] sm:max-w-xl text-[1.08rem] leading-[1.7] text-[#8a95a8]"
                        >
                            Scoring intent, drafting follow-ups, and coordinating staffing — in minutes, not days. Your presales team focuses on discovery, solution design, and closing, while AI handles scoring, classification, personalized outreach, and profile coordination.
                        </motion.p>

                        <motion.div
                            variants={heroItem}
                            className="flex flex-wrap gap-3 justify-center lg:justify-start"
                        >
                            <Link
                                href="/book-demo"
                                className="inline-flex items-center gap-2 rounded-md bg-[#0078D4] px-6 py-3 text-sm font-medium text-white transition hover:scale-105"
                            >
                                Book a Demo <ArrowRight className="h-4 w-4" />
                            </Link>
                            <button className="glass-card inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-[#C5E6FF] hover:bg-white/10 transition">
                                <Play className="h-4 w-4 text-[#38BDF8]" />
                                Contact sales
                            </button>
                        </motion.div>

                        <motion.div
                            variants={heroItem}
                            className="flex items-center gap-2 justify-center lg:justify-start text-[0.82rem] text-[#5a6478]"
                        >
                            <ShieldCheck className="h-4 w-4 text-[#4f7cff]" />
                            An intelligence platform built for fast-moving IT services and staffing teams
                        </motion.div>

                        <motion.div
                            variants={heroItem}
                            className="flex hidden flex-wrap gap-2 justify-center lg:justify-start pt-2"
                        >
                            {railTags.map((t, i) => {
                                const Icon = t.icon;
                                return (
                                    <span
                                        key={i}
                                        className="inline-flex items-center gap-[0.5rem] text-[0.76rem] text-[#8a95a8] px-3 py-[0.4rem] bg-white/[0.03] border border-white/10 rounded-full"
                                    >
                                        <Icon size={12} className="text-[#4f7cff]" />
                                        {t.label}
                                    </span>
                                );
                            })}
                        </motion.div>
                    </div>

                    {/* ============================================
                        RIGHT COLUMN — Dashboard with stats + challenges
                    ============================================ */}
                    <div className="relative order-1 lg:order-2 w-full max-w-[640px] mx-auto lg:mx-0 lg:justify-self-end">
                        <motion.div variants={heroItem} className="relative w-full">
                            {/* Ambient blue glow */}
                            <div className="absolute -inset-8 bg-[#4f7cff]/20 blur-3xl rounded-full pointer-events-none z-0" />

                            {/* FLOATING CARD — Left */}
                            <div className="absolute -left-16 top-8 z-20 hidden xl:flex">
                                <motion.div
                                    className="w-44 -rotate-6 rounded-[6px] border border-[#4f7cff]/25 bg-gradient-to-b from-[#0f1a35]/85 to-[#0b0d12]/95 backdrop-blur-2xl p-3.5 shadow-[0_24px_48px_-20px_rgba(0,0,0,0.9),0_0_24px_-4px_rgba(79,124,255,0.35),inset_0_1px_0_rgba(255,255,255,0.08)]"
                                    animate={{ x: [-6, -14, -6], y: [0, -6, 0] }}
                                    transition={{ duration: 5, repeat: Infinity }}
                                >
                                    <div className="flex items-center gap-1.5 mb-2">
                                        <Activity className="h-3 w-3 text-[#4f7cff]" />
                                        <p className="text-[0.52rem] uppercase tracking-[0.16em] text-[#4f7cff] font-semibold">
                                            Response Time
                                        </p>
                                    </div>
                                    <p className="text-sm font-bold text-white">
                                        {stats.responseTime} min
                                    </p>
                                    <p className="text-[0.48rem] text-[#8a95a8] mt-1">
                                        Median first follow-up
                                    </p>
                                </motion.div>
                            </div>

                            {/* FLOATING CARD — Right */}
                            <div className="absolute -right-14 top-1/3 z-20 hidden xl:flex">
                                <motion.div
                                    className="w-44 rotate-6 rounded-[6px] border border-[#4f7cff]/25 bg-gradient-to-b from-[#0f1a35]/85 to-[#0b0d12]/95 backdrop-blur-2xl p-3.5 shadow-[0_24px_48px_-20px_rgba(0,0,0,0.9),0_0_24px_-4px_rgba(79,124,255,0.35),inset_0_1px_0_rgba(255,255,255,0.08)]"
                                    animate={{ x: [6, 14, 6], y: [0, -8, 0] }}
                                    transition={{ duration: 6, repeat: Infinity }}
                                >
                                    <div className="flex items-center gap-1.5 mb-2">
                                        <Target className="h-3 w-3 text-[#4f7cff]" />
                                        <p className="text-[0.52rem] uppercase tracking-[0.16em] text-[#4f7cff] font-semibold">
                                            Qualified Rate
                                        </p>
                                    </div>
                                    <p className="text-sm font-bold text-[#4f7cff]">
                                        {stats.qualifiedRate}%
                                    </p>
                                    <p className="text-[0.48rem] text-[#8a95a8] mt-1">
                                        Of active pipeline
                                    </p>
                                </motion.div>
                            </div>

                            {/* MAIN PANEL */}
                            <motion.div
                                className="relative z-10 overflow-hidden rounded-[14px] border border-[#4f7cff]/25 bg-gradient-to-b from-[#0f1a35]/85 via-[#0b1225]/90 to-[#0b0d12]/95 backdrop-blur-2xl p-6 shadow-[0_32px_64px_-24px_rgba(0,0,0,0.95),0_0_48px_-8px_rgba(79,124,255,0.4),inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-1px_0_rgba(79,124,255,0.1)]"
                                animate={{ y: [0, -6, 0] }}
                                transition={{ duration: 6, repeat: Infinity }}
                            >
                                {/* Top scan line */}
                                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4f7cff] to-transparent opacity-80 animate-[scan_4s_linear_infinite]" />

                                {/* Inner aura */}
                                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[80%] h-40 bg-[#4f7cff]/20 blur-3xl rounded-full pointer-events-none" />

                                {/* Header */}
                                <div className="relative mb-5 flex justify-between items-start pb-4 border-b border-[#4f7cff]/15">
                                    <div className="flex flex-col gap-1">
                                        <span className="inline-flex items-center gap-1.5 w-fit text-[0.55rem] uppercase tracking-[0.16em] text-[#4f7cff] bg-[rgba(79,124,255,0.15)] px-2 py-[0.25rem] rounded-[3px] border border-[rgba(79,124,255,0.35)] font-semibold backdrop-blur-sm">
                                            <Zap className="h-2.5 w-2.5" />
                                            BUSINESS CHALLENGES
                                        </span>
                                        <p className="text-[0.75rem] font-semibold text-[#e8ecf2] mt-1">
                                            What presales teams face today
                                        </p>
                                    </div>
                                    <span className="flex items-center gap-1 text-[0.68rem] text-[#8a95a8] shrink-0">
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#ff6b6b] animate-pulse" />
                                        4 signals
                                    </span>
                                </div>

                                {/* ── STAT STRIP ── */}
                                <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-5">
                                    {[
                                        { icon: TrendingUp, label: 'Leads Scored', value: stats.leadsScored.toLocaleString() },
                                        { icon: Clock, label: 'Response', value: `${stats.responseTime}m` },
                                        { icon: Target, label: 'Qualified', value: `${stats.qualifiedRate}%` },
                                        { icon: Activity, label: 'Signals', value: stats.activeSignals },
                                    ].map((s, i) => {
                                        const Icon = s.icon;
                                        return (
                                            <motion.div
                                                key={i}
                                                className="bg-[#4f7cff]/[0.08] rounded-[6px] py-2.5 px-2 text-center border border-[#4f7cff]/20 backdrop-blur-sm transition-colors duration-[250ms] hover:border-[#4f7cff]/40 hover:bg-[#4f7cff]/[0.12]"
                                                animate={{ opacity: [0.92, 1, 0.92] }}
                                                transition={{ duration: 4, repeat: Infinity, delay: i * 0.2 }}
                                            >
                                                <Icon className="h-3 w-3 text-[#4f7cff] mx-auto mb-1" />
                                                <span className="block text-[0.5rem] uppercase text-[#8a95a8] tracking-[0.08em] mb-0.5">
                                                    {s.label}
                                                </span>
                                                <span className="text-[0.82rem] font-bold text-white">
                                                    {s.value}
                                                </span>
                                            </motion.div>
                                        );
                                    })}
                                </div>

                                {/* Challenge list */}
                                <ul className="relative flex flex-col gap-2.5 mb-5">
                                    {challenges.map((c, i) => (
                                        <motion.li
                                            key={i}
                                            className="flex gap-3 items-start text-[0.84rem] text-[#e8ecf2] px-3.5 py-[0.7rem] rounded-[6px] bg-[#4f7cff]/[0.06] border border-[#4f7cff]/15 backdrop-blur-sm transition-colors duration-[250ms] hover:border-[#4f7cff]/35 hover:bg-[#4f7cff]/[0.1]"
                                            initial={{ opacity: 0, x: -8 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                                        >
                                            <CircleAlert size={14} className="text-[#ff6b6b] mt-[0.15rem] shrink-0" />
                                            <span className="leading-[1.55]">{c}</span>
                                        </motion.li>
                                    ))}
                                </ul>

                                {/* Automated presales insights callout */}
                                <div className="relative rounded-[8px] bg-[#4f7cff]/[0.08] border border-[#4f7cff]/25 p-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="flex items-center justify-center w-6 h-6 rounded-[4px] bg-[#4f7cff]/20 border border-[#4f7cff]/40">
                                            <WandSparkles className="h-3 w-3 text-[#4f7cff]" />
                                        </div>
                                        <p className="text-[0.62rem] uppercase tracking-[0.12em] text-[#4f7cff] font-semibold">
                                            Automated presales insights
                                        </p>
                                        <span className="ml-auto flex items-center gap-1 text-[0.58rem] text-emerald-400">
                                            <span className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse" />
                                            live
                                        </span>
                                    </div>
                                    <p className="text-[0.78rem] text-[#e8ecf2] leading-[1.6]">
                                        Multi-dimensional scoring across demographic, behavioral, engagement, firmographic, intent, and risk signals — then drafts case-study-backed follow-ups directly on every lead.
                                    </p>
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