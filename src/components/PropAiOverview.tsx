"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateSection from "./AnimateSection";

const tabs = ["Overview", "The Hard Truth", "Solutions"];

export default function EstateAIOverview() {
  const [activeTab, setActiveTab] = useState("Overview");

  const Overview = [
    {
      title: "AI-powered client profiling",
      desc: "Understand every client deeply with automatic profiling based on budget signals, behavior, urgency, and property preferences.",
    },
    {
      title: "Smart seriousness scoring",
      desc: "Know exactly who to focus on with an AI-generated seriousness score that ranks clients based on intent and engagement.",
    },
    {
      title: "Personalized AI pitch generation",
      desc: "Generate tailored sales pitches instantly for each client–property pair, saving time and improving conversion rates.",
    },
    {
      title: "Intelligent property recommendations",
      desc: "Automatically match the right properties to the right clients based on budget, location, and preferences.",
    },
    // {
    //   title: "End-to-end deal tracking",
    //   desc: "Track every stage of the deal lifecycle—from first inquiry to closure—with complete visibility and control.",
    // },
    // {
    //   title: "Real-time AI sales insights",
    //   desc: "Get actionable feedback on client engagement, pitch effectiveness, and property fit to improve your sales strategy.",
    // },
   
    // {
    //   title: "Chatbot functionality",
    //   desc: "A chatbot is available to answer questions and help with the client management and property recommendations.",
    // },
    {
      title: "Centralized broker dashboard",
      desc: "Manage all clients, properties, and interactions in one unified dashboard with real-time updates.",
    },
    {
      title: "Scalable SaaS-ready platform",
      desc: "Built for growth with a secure, cloud-based architecture that supports multiple users and teams seamlessly.",
    },
  ];

  const problems = [
    {
      title: "Too many clients, no clarity",
      desc: "You have 40 clients but can't tell who will actually buy this month.",
    },
    {
      title: "Leads go cold quickly",
      desc: "Manual follow-ups and scattered data cause delays, making high-intent clients lose interest.",
    },
    {
      title: "Wrong property, wrong pitch",
      desc: "Without structured data, matching the right property to the right buyer becomes guesswork.",
    },
    {
      title: "Time wasted on unqualified leads",
      desc: "Hours on people who aren't serious, ignoring those who are.",
    },

    // ✅ NEW
    {
      title: "No structured follow-up system",
      desc: "Important conversations slip through the cracks because there's no clear process to track and act on every lead.",
    },
    {
      title: "No visibility into deal progress",
      desc: "You don’t know which stage your deals are in, making it hard to prioritize actions and close faster.",
    },
  ];

  const solutions = [
    {
      id: "1",
      icon: "🎯",
      title: "Identify Serious Buyers",
      desc: "Stop guessing. PropIQ scores every client based on behavior, responses, and engagement — so you know exactly who to call first.",
      points: [
        "AI Seriousness Score out of 10",
        "Auto-ranked client list every morning",
        "Behavioral signals tracked passively",
      ],
    },
    {
      id: "2",
      icon: "🤝",
      title: "Close Deals Faster",
      desc: "From the first inquiry to the final signature — every stage is tracked, every follow-up is timed, and every pitch is personalized.",
      points: [
        "Stage-by-stage deal visibility",
        "AI pitch generator for every client",
        "Smart follow-up reminders",
      ],
    },
    {
      id: "3",
      icon: "🏡",
      title: "Match Right Property",
      desc: "Automatically connect buyers with properties that actually fit their needs, budget, and intent.",
      points: [
        "Preference-based recommendations",
        "Budget + behavior mapping",
        "Instant property suggestions",
      ],
    },
    {
      id: "4",
      icon: "📊",
      title: "Track Everything in One Place",
      desc: "No more scattered data. All clients and properties are centralized.",
      points: [
        "Unified dashboard",
        "Client + deal timeline",
        "Real-time updates",
      ],
    },
    {
      id: "5",
      icon: "⚡",
      title: "Automate Follow-Ups",
      desc: "Never lose a deal due to delay. Automate reminders and engagement.",
      points: [
        "Smart reminders",
        "Auto notifications",
        "Follow-up tracking",
      ],
    },
    {
      id: "6",
      icon: "🚀",
      title: "Scale Without Chaos",
      desc: "Handle more clients and deals without increasing workload or missing opportunities.",
      points: [
        "Multi-client handling",
        "Priority-based workflows",
        "Team collaboration ready",
      ],
    },
  ];

  return (
    <div className="bg-[#07090E] ">
      <AnimateSection type="fadeUp">
        <section className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6">


          {/* Tabs */}
          <div className="overflow-x-auto mb-14 flex justify-center">
            <div className="relative inline-flex rounded-xl border border-blue-500/20 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-1.5 backdrop-blur-md shadow-[0_0_30px_rgba(59,130,246,0.12)]">

              {tabs.map((tab) => {
                const isActive = activeTab === tab;

                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className="relative px-5 py-2.5 cursor-pointer text-sm font-semibold min-w-[120px] md:min-w-[150px] text-center rounded-lg"
                  >
                    {/* Active Background Glow */}
                    {isActive && (
                      <motion.span
                        layoutId="activeTab"
                        className="absolute inset-0 rounded bg-blue-500/20 "
                        transition={{ type: "spring", stiffness: 320, damping: 28 }}
                      />
                    )}

                    {/* Text */}
                    <span
                      className={`relative z-10 transition-all duration-300 ${isActive
                        ? "text-blue-300"
                        : "text-white/50 hover:text-blue-300"
                        }`}
                    >
                      {tab}
                    </span>

                    {/* Bottom indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="tabUnderline"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-8 bg-blue-400 rounded-full"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content */}
          <div className="relative min-h-[450px]  mx-auto max-w-7xl">
            <AnimatePresence mode="wait">

              {/* Overview */}
              {activeTab === "Overview" && (
                <motion.div
                  key="Overview"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-12 max-w-7xl"
                >
                  <div className="text-center">

                    <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-white">
                      PropIQ

                      <span className="text-emerald-400 ml-2">
                        Overview
                      </span>
                    </h3>
                    <p className="text-sm md:text-base text-white/65 mt-2 max-w-7xl">
                      PropIQ is a smart platform for real estate broker to identify serious buyers, recommend the right properties, and generate personalized sales pitches in seconds.
                    </p>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3  gap-5 mx-auto">
                    {Overview.map((item) => (
                      <div
                        key={item.title}
                        className="p-5 rounded-2xl border border-white/5 bg-white/[0.02]"
                      >
                        <h4 className="text-emerald-300   mb-2">
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

              {/* The Hard Truth */}
              {activeTab === "The Hard Truth" && (
                <motion.div
                  key="problems"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-12 max-w-7xl"
                >
                  <div className="text-center">

                    <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-white">
                      Brokers Are Losing Deals

                      <span className="text-emerald-400 ml-2">
                        Every Day
                      </span>
                    </h3>
                    <p className="text-sm md:text-base text-white/65 mt-2 max-w-7xl">
                      Not because they lack clients — but because they lack a system to know who is serious and what to offer them.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3  gap-5">
                    {problems.map((item) => (
                      <div
                        key={item.title}
                        className="p-5 rounded-2xl border border-red-500/10 bg-red-500/[0.02]"
                      >
                        <h4 className="text-red-300   mb-2">
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

              {/* Solutions */}
              {activeTab === "Solutions" && (
                <motion.div
                  key="solutions"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-12 max-w-7xl"
                >
                  {/* Heading */}
                  <div className="text-center">

                    <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-white">
                      Manage, Monitor & Close
                    </h3>
                    <p className="text-sm md:text-base text-white/65 mt-2 max-w-7xl">
                      PropIQ is not just a CRM. It tells you which client to focus on and what to sell them — automatically.
                    </p>
                  </div>

                  {/* Cards */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {solutions.map((item) => (
                      <div
                        key={item.id}
                        className="p-5 rounded-2xl border border-emerald-500/10 bg-emerald-500/[0.02]"
                      >



                        {/* Title */}
                        <h4 className="text-emerald-300   mb-2">
                          {item.title}
                        </h4>

                        {/* Description */}
                        <p className="text-white/60 text-sm leading-relaxed mb-3">
                          {item.desc}
                        </p>

                        {/* Points */}
                        <ul className="space-y-1">
                          {item.points.map((point) => (
                            <li
                              key={point}
                              className="text-xs text-white/50 flex items-start gap-2"
                            >
                              <span className="text-emerald-400 mt-[2px]">•</span>
                              {point}
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