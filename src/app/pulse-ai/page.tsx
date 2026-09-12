'use client';

import React from 'react';
import {
    Route,
    Database,
    Layers,
    GitBranch,
    Scale,
    Flag,
    Building2,
    ShieldCheck,
    FileText,
    Sliders,

    ChartLine,
    TriangleAlert,
    Flame,
    Globe,
    Lock,
    Award,
    FileCheck,
    AlertTriangle,
    Scan,

} from 'lucide-react';
import PlusHero from '@/components/PlusHero';
import PulseTabsSection from '@/components/PulseTabsSection';
import VerticalTimeline from '@/components/VerticalTimeline';
import CallToActionData from '@/components/CallToActionData';
import TestimonialsInnerPages from '@/components/TestimonialsInnerPages';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

/* ── Animated reveal border between sections ── */
const SectionDivider = () => (
    <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="relative h-px w-full bg-[#1c2029] overflow-hidden">
            {/* Center-out reveal line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-full bg-gradient-to-r from-transparent via-emerald-800 to-transparent origin-center animate-[dividerReveal_2.4s_ease-out_forwards]" />
        </div>
    </div>
);

export default function PulseLanding() {
    const benefits = [
        {
            icon: Scan,
            title: "Contextual intake",
            description:
                "Pulse connects to firmographic sources and reads the visitor's company context — industry, size, recent signals — before a single question is asked.",
        },
        {
            icon: AlertTriangle,
            title: "Structure & calibrate",
            description:
                "A single maturity question, cross-checked against early answers, places the respondent into one of four depth tiers.",
        },
        {
            icon: ShieldCheck,
            title: "Assess key dimensions",
            description:
                "Pulse draws 7–9 questions from a ten-dimension bank, asking only what's relevant to that tier — trust, governance, pilots, competitive pressure, and more.",
        },
        {
            icon: FileCheck,
            title: "Score & deliver",
            description:
                "Confidence-weighted scoring produces a personalized report for the respondent, and an internal Opportunity Fit signal routed straight to sales — before a human ever joins the conversation.",
        },


    ];

   
    const engineChips = [
        { icon: Database, label: 'Company Enrichment' },
        { icon: Layers, label: 'Maturity Tiering' },
        { icon: GitBranch, label: 'Adaptive Questioning' },
        { icon: Scale, label: 'Confidence-Weighted Scoring' },
        { icon: Flag, label: 'Pilot & Failure Signals' },
        { icon: Route, label: 'Opportunity Routing' },
    ];

    const caseSteps = [
        { icon: FileText, label: 'Project\nDescription' },
        { icon: Sliders, label: 'Scoring\nModel' },
        { icon: Building2, label: 'Enterprise\nDeployments' },
        { icon: ShieldCheck, label: 'Security &\nCompliance' },
    ];

    const caseDetails = [
        {
            icon: FileText,
            title: 'Project Description',
            description:
                'Pulse helps organizations understand where they actually stand on AI — awareness, adoption, governance, and investment readiness — replacing static surveys with an adaptive, conversational assessment that adjusts to the respondent in real time.',
        },
        {
            icon: Sliders,
            title: 'Scoring Model & Calibration',
            description:
                'Built on a ten-dimension, confidence-weighted scoring framework. Dimension weights and readiness thresholds are configurable and get tuned as real session data comes in — currently calibrated against 3,100+ production sessions across 14 industries.',
        },
        {
            icon: Building2,
            title: 'Enterprise Implementations',
            description:
                'Deployed across logistics, financial services, healthcare, and manufacturing — including a 12,000-employee logistics firm running Pulse across 14 business units.',
        },
        {
            icon: ShieldCheck,
            title: 'Security & Compliance',
            description:
                'Built with encryption, role-based access control, and compliance-ready practices for handling enterprise company data.',
        },
    ];

    const complianceRows = [
        {
            icon: Flag,
            framework: 'DPDP Act (India)',
            description:
                "Enrichment limited to public/firmographic data; visitor is informed a company lookup ran; data handling aligned to India's Digital Personal Data Protection Act",
        },
        {
            icon: Globe,
            framework: 'GDPR',
            description:
                'Data handling practices and access controls that support compliance for visitors and prospects outside India',
        },
        {
            icon: Lock,
            framework: 'SOC 2',
            description:
                'Role-based access control separating user-facing report data from internal-only sales signals, with audit-ready logging',
        },
        {
            icon: Award,
            framework: 'ISO/IEC 27001',
            description:
                'Information security practices aligned to enterprise procurement and vendor-risk requirements',
        },
    ];

    return (

        <div >
            <div className="min-h-screen bg-[#07090E] text-white overflow-hidden">
                <Navbar />
                <div className="min-h-screen bg-[#050608] text-[#e8ecf2] text-[15px] leading-[1.55] antialiased overflow-x-hidden">
                    {/* Background atmosphere */}
                    <div
                        className="fixed inset-0 -z-10 pointer-events-none opacity-100"
                        style={{
                            backgroundImage:
                                'linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)',
                            backgroundSize: '60px 60px',
                        }}
                    />

                    {/* Global keyframes */}
                    <style jsx global>{`
        @keyframes breathe {
          0% { opacity: 0.7; }
          100% { opacity: 1; }
        }
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes floatIn {
          0% { opacity: 0; transform: translateY(24px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(16px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          0% { opacity: 0; transform: translateX(-16px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes blobMorph {
          0% { border-radius: 58% 42% 46% 54% / 52% 48% 52% 48%; }
          50% { border-radius: 44% 56% 58% 42% / 48% 52% 44% 56%; }
          100% { border-radius: 52% 48% 40% 60% / 56% 44% 56% 44%; }
        }
        @keyframes dotTravel {
          0% { left: 0; opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { left: calc(100% - 6px); opacity: 0; }
        }
        @keyframes glowPulse {
          0% { opacity: 0.5; transform: scale(0.98); }
          100% { opacity: 0.9; transform: scale(1.02); }
        }
        @keyframes dividerReveal {
          0% {
            transform: translateX(-50%) scaleX(0);
            opacity: 0;
          }
          40% {
            opacity: 1;
          }
          100% {
            transform: translateX(-50%) scaleX(1);
            opacity: 1;
          }
        }
      `}</style>


                    <PlusHero />
                    <PulseTabsSection />

                    <VerticalTimeline
                        badge="HOW PULSE WORKS"
                        heading="From conversation to a company-ready readiness profile"
                        subheading="Pulse combines firmographic context, adaptive questioning, and confidence-weighted scoring — keeping a human in the loop for every lead that matters."
                        items={benefits}

                        backgroundClass='bg-[#07090E] py-32'

                    />

                    <SectionDivider />


                    <section className="py-14 lg:py-[5.5rem] max-w-[1240px] mx-auto px-5 sm:px-8">
                        {/* HEADER */}
                        <div className="text-center max-w-[780px] mx-auto mb-14 animate-[fadeUp_0.7s_both]">
                            <div className="inline-block text-[0.72rem] uppercase tracking-[0.18em] text-emerald-300 font-semibold mb-4 border-l-2 border-emerald-800 pl-[0.7rem]">
                                WHAT MAKES PULSE DIFFERENT
                            </div>
                            <h2 className="text-[clamp(1.7rem,3.6vw,2.5rem)] mb-4 text-white font-semibold tracking-[-0.02em] leading-tight">
                                Not another checklist survey
                            </h2>
                            <p className="text-[#8a95a8] text-[1.02rem] mt-4 leading-[1.7]">
                                Anyone can ask "what's your AI maturity." Pulse is built to say back something the
                                respondent couldn't have gotten from a static form — pulled straight from their own
                                answers.
                            </p>
                        </div>

                        {/* CARD GRID — 3 columns */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                            {/* CARD 1 — How You Compare */}
                            <div className="bg-[#0b0d12] border border-[rgba(79,124,255,0.28)] rounded-[4px] p-6 sm:p-7 flex flex-col">
                                <div className="flex items-center gap-2 mb-4">
                                    <ChartLine size={16} className="text-emerald-300 shrink-0" />
                                    <strong className="text-white text-[0.95rem] font-semibold">
                                        "How You Compare"
                                    </strong>
                                </div>
                                <p className="text-[#8a95a8] text-[0.9rem] leading-[1.7] mb-4">
                                    A directional peer/industry benchmark line, built from the enriched company profile and
                                    the competitive-pressure answer.
                                </p>
                                <p className="text-[#8a95a8] text-[0.9rem] italic leading-[1.7] border-l-2 border-emerald-800/40 pl-3 mt-auto">
                                    "Companies of similar size in [Industry] are, on average, a step ahead on formal AI
                                    governance but behind you on automation. Your comment that competitors are 'moving
                                    faster' lines up with what we're seeing across the sector."
                                </p>
                            </div>

                            {/* CARD 2 — What Hasn't Worked Yet */}
                            <div className="bg-[#0b0d12] border border-[rgba(79,124,255,0.28)] rounded-[4px] p-6 sm:p-7 flex flex-col">
                                <div className="flex items-center gap-2 mb-4">
                                    <TriangleAlert size={16} className="text-emerald-300 shrink-0" />
                                    <strong className="text-white text-[0.95rem] font-semibold">
                                        "What Hasn't Worked Yet"
                                    </strong>
                                </div>
                                <p className="text-[#8a95a8] text-[0.9rem] leading-[1.7] mb-4">
                                    Where a respondent discloses a failed pilot, Pulse names it back specifically instead of
                                    staying generic — the single most credible line in the report.
                                </p>
                                <p className="text-[#8a95a8] text-[0.9rem] italic leading-[1.7] border-l-2 border-emerald-800/40 pl-3 mt-auto">
                                    "Your earlier attempt at [use case] stalled on [stated reason]. That's a common
                                    failure point at your stage — and a fixable one."
                                </p>
                            </div>

                            {/* CARD 3 — Opportunity Fit Score */}
                            <div className="bg-[#0b0d12] border border-[rgba(79,124,255,0.28)] rounded-[4px] p-6 sm:p-7 flex flex-col">
                                <div className="flex items-center gap-2 mb-4">
                                    <Flame size={16} className="text-emerald-300 shrink-0" />
                                    <strong className="text-white text-[0.95rem] font-semibold">
                                        "Opportunity Fit Score"
                                    </strong>
                                </div>
                                <p className="text-[#8a95a8] text-[0.9rem] leading-[1.7] mb-4">
                                    For your sales team — an internal-only signal that routes each lead into Hot, Warm,
                                    Advanced-nurture, or Early-nurture, built from disclosed pain, urgency, and budget
                                    posture.
                                </p>
                                <p className="text-[#8a95a8] text-[0.9rem] italic leading-[1.7] border-l-2 border-emerald-800/40 pl-3 mt-auto">
                                    "Disclosed pain: manual reporting. Urgency: this quarter. Budget: allocated. Opening
                                    line: reference their stated reporting bottleneck before anything else."
                                </p>
                            </div>

                        </div>
                    </section>

                    <SectionDivider />


                    {/* ========== SECTION 5 — THE PULSE ENGINE ========== */}
                    <section className="py-14 lg:py-[5.5rem] max-w-[1240px] mx-auto px-5 sm:px-8">
                        <div className="text-center max-w-xl mx-auto mb-14 animate-[fadeUp_0.7s_both]">
                            <div className="inline-block text-[0.72rem] uppercase tracking-[0.18em] text-emerald-300 font-semibold mb-4 border-l-2 border-emerald-800 pl-[0.7rem]">
                                PULSE ENGINE
                            </div>
                            <h2 className="text-[clamp(1.7rem,3.6vw,2.5rem)] mb-4 text-white font-semibold tracking-[-0.02em] leading-tight">
                                Inside the Pulse engine
                            </h2>
                            <p className="text-[#8a95a8] text-[1.02rem] mt-4 leading-[1.7]">
                                At the core of Pulse is a readiness intelligence layer that reads company context,
                                adapts its questions to maturity, scores across ten weighted dimensions, and
                                sharpens its own thresholds as more sessions complete.
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-2.5">
                            {engineChips.map((chip, i) => {
                                const Icon = chip.icon;
                                return (
                                    <span
                                        key={i}
                                        className="flex items-center gap-2 bg-[#0b0d12] border border-[#1c2029] text-[#8a95a8] px-[1.1rem] py-[0.55rem] rounded-[4px] text-[0.82rem] font-medium transition-all duration-[250ms] hover:border-[rgba(79,124,255,0.28)] hover:text-[#e8ecf2] hover:bg-[#0f1218] animate-[fadeUp_0.5s_both]"
                                        style={{ animationDelay: `${i * 0.05}s` }}
                                    >
                                        <Icon size={14} className="text-emerald-300" />
                                        {chip.label}
                                    </span>
                                );
                            })}
                        </div>
                    </section>

                    <SectionDivider />


                    {/* ========== SECTION 6 — CASE STUDY OVERVIEW (Blob diagram) ========== */}
                    <section className="py-14 lg:py-[5.5rem] max-w-[1240px] mx-auto px-5 sm:px-8">
                        <div className="text-center max-w-[780px] mx-auto mb-14 animate-[fadeUp_0.7s_both]">
                            <div className="inline-block text-[0.72rem] uppercase tracking-[0.18em] text-emerald-300 font-semibold mb-4 border-l-2 border-emerald-800 pl-[0.7rem]">
                                CASE STUDY OVERVIEW
                            </div>
                            <h2 className="text-[clamp(1.7rem,3.6vw,2.5rem)] mb-4 text-white font-semibold tracking-[-0.02em] leading-tight">
                                From framework to live deployment
                            </h2>
                            <p className="text-[#8a95a8] text-[1.02rem] mt-4 leading-[1.7]">
                                A four-stage journey from scoring framework to production-ready deployment — each
                                step connected and continuously refined.
                            </p>
                        </div>

                        <div className="relative max-w-[1100px] mx-auto pt-8 pb-12">
                            {/* Blob diagram row */}
                            <div className="flex flex-wrap lg:flex-nowrap justify-center items-center">
                                {caseSteps.map((step, i) => {
                                    const Icon = step.icon;
                                    return (
                                        <React.Fragment key={i}>
                                            <div
                                                className="flex flex-col items-center relative z-10 animate-[fadeUp_0.7s_both]"
                                                style={{ animationDelay: `${i * 0.1}s`, flex: '1 1 0', minWidth: 0 }}
                                            >
                                                <div
                                                    className="group w-[100px] h-[100px] sm:w-[135px] sm:h-[135px] flex flex-col items-center justify-center text-center p-4 bg-[#0b0d12] border-[1.5px] border-[rgba(79,124,255,0.28)] shadow-[0_0_0_6px_rgba(79,124,255,0.04),0_12px_30px_-10px_rgba(0,0,0,0.8)] transition-all duration-400 hover:scale-[1.07] hover:border-[#4f7cff] hover:shadow-[0_0_0_8px_rgba(79,124,255,0.08),0_18px_40px_-12px_rgba(79,124,255,0.35)]"
                                                    style={{
                                                        backgroundImage:
                                                            'radial-gradient(circle at 35% 30%, rgba(79,124,255,0.14) 0%, transparent 55%)',
                                                        animation: `blobMorph 8s ${i * 0.5}s infinite alternate ease-in-out`,
                                                    }}
                                                >
                                                    <Icon
                                                        size={24}
                                                        className="text-emerald-300 mb-[0.4rem] group-hover:text-emerald-700 transition-colors duration-300"
                                                    />
                                                    <span className="text-[0.55rem] sm:text-[0.62rem] font-semibold uppercase tracking-[0.06em] text-[#e8ecf2] leading-[1.3] whitespace-pre-line">
                                                        {step.label}
                                                    </span>
                                                </div>
                                            </div>
                                            {i < caseSteps.length - 1 && (
                                                <div className="hidden lg:block flex-[0_0_60px] h-[2px] bg-gradient-to-r from-[#4f7cff] to-[rgba(79,124,255,0.28)] relative z-[1] mt-[-67px] self-center opacity-60 transition-opacity duration-300">
                                                    <div className="absolute -top-[2px] left-0 w-[6px] h-[6px] rounded-full bg-[#4f7cff] opacity-90 animate-[dotTravel_2.5s_infinite_ease-in-out]" />
                                                </div>
                                            )}
                                        </React.Fragment>
                                    );
                                })}
                            </div>

                            {/* Detail blobs */}
                            <div className="flex flex-wrap justify-center gap-6 mt-12">
                                {caseDetails.map((detail, i) => {
                                    const Icon = detail.icon;
                                    return (
                                        <div
                                            key={i}
                                            className="flex-1 min-w-[180px] max-w-[260px] text-center p-7 sm:p-[1.8rem_1.6rem] bg-[#0b0d12] border border-[#1c2029] transition-all duration-[350ms] hover:border-[rgba(79,124,255,0.28)] hover:-translate-y-1 animate-[fadeUp_0.6s_both]"
                                            style={{
                                                backgroundImage:
                                                    'radial-gradient(circle at 30% 25%, rgba(79,124,255,0.08) 0%, transparent 60%)',
                                                animation: `blobMorph 9s ${i * 0.4}s infinite alternate ease-in-out, fadeUp 0.6s ${i * 0.1}s both`,
                                            }}
                                        >
                                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[rgba(79,124,255,0.12)] border border-[rgba(79,124,255,0.28)] text-emerald-300 mb-[0.9rem]">
                                                <Icon size={16} />
                                            </div>
                                            <h4 className="text-[0.92rem] mb-[0.5rem] text-white font-semibold">
                                                {detail.title}
                                            </h4>
                                            <p className="text-[0.8rem] text-[#8a95a8] leading-[1.6]">
                                                {detail.description}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>

                    <SectionDivider />


                    <section className="py-14 lg:py-[5.5rem] max-w-[1240px] mx-auto px-5 sm:px-8">
                        {/* HEADER */}
                        <div className="text-center  mx-auto mb-14 animate-[fadeUp_0.7s_both]">
                            <div className="inline-block text-[0.72rem] uppercase tracking-[0.18em] text-emerald-300 font-semibold mb-4 border-l-2 border-emerald-800 pl-[0.7rem]">
                                KEY BENEFITS
                            </div>
                            <h2 className="text-[clamp(1.7rem,3.6vw,2.5rem)] mb-4 text-white font-semibold tracking-[-0.02em] leading-tight">
                                Stay audit-ready with built-in data safeguards
                            </h2>
                            <p className="text-[#8a95a8] text-[1.02rem] mt-4 leading-[1.7]">
                                Pulse keeps the data it collects and infers aligned to the frameworks enterprise
                                buyers expect — simplifying due diligence for security-conscious prospects.
                            </p>
                        </div>

                        {/* TABLE */}
                        <div className="animate-[fadeUp_0.8s_both] rounded-[6px] border border-[#1c2029] overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full min-w-[640px] border-collapse text-left">
                                    {/* HEAD */}
                                    <thead className="bg-[#0b0d12]">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="w-[30%] px-5 py-4 text-emerald-300 font-semibold text-[0.72rem] uppercase tracking-[0.08em] border-b border-[#1c2029]"
                                            >
                                                Framework
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-5 py-4 text-emerald-300 font-semibold text-[0.72rem] uppercase tracking-[0.08em] border-b border-[#1c2029]"
                                            >
                                                How Pulse addresses it
                                            </th>
                                        </tr>
                                    </thead>

                                    {/* BODY */}
                                    <tbody>
                                        {complianceRows.map((row, i) => {
                                            const Icon = row.icon;
                                            return (
                                                <tr
                                                    key={i}
                                                    className="group transition-colors duration-200 hover:bg-[rgba(79,124,255,0.04)]"
                                                >
                                                    <th
                                                        scope="row"
                                                        className="align-top px-5 py-4 text-[0.9rem] font-normal leading-[1.6] border-b border-[#1c2029] group-last:border-b-0"
                                                    >
                                                        <span className="flex items-center gap-2.5">
                                                            <span className="flex items-center justify-center w-[26px] h-[26px] shrink-0 rounded-[5px] bg-[rgba(79,124,255,0.1)] border border-[rgba(79,124,255,0.2)] text-emerald-300 transition-transform duration-300 group-hover:scale-110">
                                                                <Icon size={13} />
                                                            </span>
                                                            <strong className="text-white font-semibold">
                                                                {row.framework}
                                                            </strong>
                                                        </span>
                                                    </th>
                                                    <td className="align-top px-5 py-4 text-[#8a95a8] text-[0.9rem] leading-[1.6] border-b border-[#1c2029] group-last:border-b-0">
                                                        {row.description}
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    <TestimonialsInnerPages />
                    <CallToActionData

                        title={"Find out your organization's AI readiness in 5 minutes"}
                        description={"Start with Pulse and get a personalized readiness score, your key gaps, and a clear next step — no long survey, no sales pitch."}
                        primaryCTA={{
                            label: 'Start Your Pulse Assessment',
                            href: "/book-demo",

                        }}
                        secondaryCTA={
                            {
                                label: "Book a Demo",
                                href: "/book-demo",
                            }
                        }

                    />

                </div>
                <Footer />
            </div>
        </div>

    );
}