"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AutonomoAIHero from "@/components/AutonomoAiHero";
import ToolOverviewSection from "@/components/Organisms/ToolOverviewSection";
import AutonomoAIOverview from "@/components/AutonomoAiOverview";
import AutonomoAIKeyBenefitsNarrative from "@/components/AutonomoAiKeyBenefits";
import TestimonialsInnerPages from "@/components/TestimonialsInnerPages";
import CallToAction from "@/components/CallToAction";
import HowToolWorksSection from "@/components/HowToolWorksSection";
import { AlertTriangle, FileCheck, Scan, ShieldCheck } from "lucide-react";
import { HowToolWorksSectionProps } from "@/components/HowToolWorksSection";


const AutonomoAIHowItWorksSteps: HowToolWorksSectionProps['steps'] = [
  {
    label: "01",
    title: "Ingest & connect",
    description:
      "Securely connect docs, wikis, tickets, databases, and internal APIs into a unified knowledge graph.",
    icon: Scan,
  },
  {
    label: "02",
    title: "Index & understand",
    description:
      "AutonomoAI chunks, embeds, and enriches content with metadata so agents can answer with real context.",
    icon: AlertTriangle,
  },
  {
    label: "03",
    title: "Search & chat",
    description:
      "Teams search naturally, ask questions, and get grounded answers with citations across all connected data.",
    icon: FileCheck,
  },
  {
    label: "04",
    title: "Deploy agents",
    description:
      "Ship custom agents for support, engineering, and operations that run on your infra and respect your rules.",
    icon: ShieldCheck,
  },
];

export default function AutonomoAIPage() {
  return (
    <div className="min-h-screen bg-[#07090E] text-white overflow-hidden">
      <Navbar />
      <main>
        <AutonomoAIHero />
      
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto rounded-4xl my-12 lg:my-16 xl:my-20 2xl:my-24 ">
        <AutonomoAIOverview />
        </div>
       


        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto  rounded-3xl 2xl:rounded-4xl  border border-white/5   overflow-hidden                    shadow-[inset_0_-1px_2px_rgba(255,255,255,0.05),inset_0_1px_1px_rgba(255,255,255,0.20)]
 ">
          <HowToolWorksSection
            eyebrow="How it works"
            accent="emerald"
            heading={
              <>
                From scattered knowledge to <br/>unified, AI-ready search.
              </>
            }
            description="AutonomoAI plugs into your existing stack, builds a search-ready index on top of it, and exposes everything through secure search, chat, and agents."
            steps={AutonomoAIHowItWorksSteps}
          />
        </div>
        <AutonomoAIKeyBenefitsNarrative />
        <TestimonialsInnerPages />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

