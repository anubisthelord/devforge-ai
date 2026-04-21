"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialsInnerPages from "@/components/TestimonialsInnerPages";
import EStateAiHero from "@/components/EStateAiHero";
import ToolOverviewSection, {
} from "@/components/Organisms/ToolOverviewSection";
import HowToolWorksSection, {
  type HowToolWorksSectionProps,
} from "@/components/HowToolWorksSection";
import { AlertTriangle, Brain, FileCheck, House, MessageSquare, Scan, ShieldCheck } from "lucide-react";
import ShineCardsSection from "@/components/ShineCardsSection";
import VerticalTimeline from "@/components/VerticalTimeline";
import PropAiOverview from "@/components/PropAiOverview";
import CallToActionData from "@/components/CallToActionData";



const viraHowItWorksSteps: HowToolWorksSectionProps['steps'] = [
  {
    label: "01",
    title: "Smart Client Profiling",
    description:
      "AI-powered understanding of every client — their budget signals, urgency, and property preferences — all in one profile.",
    icon: Scan,
    points: [
      "Understands urgency and readiness",
      "Predicts buying timeline",
      "Identifies property preferences",
    ],
  },
  {
    label: "02",
    title: "AI Pitch Generator",
    description:
      "Never write a sales message from scratch again. One click generates a personalized pitch for any client–property pair.",
    icon: AlertTriangle,
    points: [
      "Generates personalized pitches",
      "Includes property details and value proposition",
      "Tailored to client's goals",
    ],
  },
  {
    label: "03",
    title: "AI Property Recommendations",
    description:
      "PropIQ automatically matches your listed properties to the right clients based on budget, location, and property type.",
    icon: FileCheck,
    points: [
      "Matches properties to client profiles",
      "Filters by budget and location",
      "Suggests best-fit properties",
    ],
  },

];

const frameworks = [
  {
    icon: Brain,
    name: "Client Intelligence",
    description:
      "AI-powered profiling that understands buyer budget, behavior, urgency, and preferences.",
  },

  {
    icon: MessageSquare,
    name: "AI Pitch Engine",
    description:
      "Generates personalized sales pitches instantly for every client–property match.",
  },
  {
    icon: House,
    name: "Smart Property Matching",
    description:
      "Recommends the right properties based on budget, location, and buyer preferences.",
  },
];

const benefits = [
  {
    icon: Scan,
    title: "Data Injection",
    description:
      "Client details, budget range, location preferences, and contact information are entered into the system.",
  },
  {
    icon: AlertTriangle,
    title: "AI Analysis",
    description:
      "Behavioral signals, response patterns, and preference data are analyzed to score intent and readiness.",
  },
  {
    icon: ShieldCheck,
    title: "Client Profiling",
    description:
      "An auto-generated profile is created with  preferences and predicted buying timeline.",
  },
  {
    icon: FileCheck,
    title: "Property Recommendations",
    description:
      "PropIQ matches the best-fit properties from your portfolio based on the client's profile and preferences.",
  },
  {
    icon: Brain,
    title: "Generate Pitch",
    description:
      "A personalized sales pitch is generated automatically — tailored to the client's goals and matched property that can be send by via Email / WhatsApp / SMS  etc.",
  },

];

export default function ViraPage() {
  return (
    <div className="min-h-screen bg-[#07090E] text-white overflow-hidden">
      <Navbar />
      <main>
        <EStateAiHero />



        <section className="max-w-7xl 2xl:max-w-[1440px] mx-auto rounded-4xl my-12 lg:my-16 xl:my-20 2xl:my-24 ">

          <PropAiOverview />
        </section>
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto  rounded-3xl 2xl:rounded-4xl  border border-white/5 my-12 lg:my-16 xl:my-20 2xl:my-24 overflow-hidden                    shadow-[inset_0_-1px_2px_rgba(255,255,255,0.05),inset_0_1px_1px_rgba(255,255,255,0.20)]
 ">
          <HowToolWorksSection
            eyebrow="Core Features"
            accent="emerald"
            heading={
              <>
                Everything a Real Estate <br /> Broker Actually Needs
              </>
            }
            description="Built specifically for real estate Agents / brokers managing multiple clients and properties."
            steps={viraHowItWorksSteps}
            cardCount={3}
          />
        </div>


        <VerticalTimeline
          badge="System Architecture"
          heading="How PropIQ Works"
          subheading="Two parallel AI flows — one for client management, one for investor matching."
          items={benefits}
          accentColorClass="emerald"
        />

        <section className="max-w-7xl 2xl:max-w-[1440px] mx-auto rounded-4xl my-12 lg:my-16 xl:my-20 2xl:my-24 border-2 border-dashed border-white/5  bg-[#ffffff08] overflow-hidden shadow-[inset_0_-1px_2px_rgba(255,255,255,0.05),inset_0_1px_1px_rgba(255,255,255,0.20)]">
          <ShineCardsSection
            eyebrow="AI Sales Framework"
            title="Close more deals with smarter insights"
            subtitle="Identify serious buyers, match them with the right properties, and generate winning pitches — all powered by a unified AI engine."
            items={frameworks}
            columns={3}
            backgroundClass="bg-[#07090E]"
          />
        </section>

        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto rounded-4xl my-12 ">  <ToolOverviewSection
          badge="Coming Soon"
          accent="emerald"
          title={
            <>
              The next evolution of PropIQ —{" "}
              <span className="text-emerald-400">AI-powered brokerage intelligence</span>
            </>
          }
          description="PropIQ is evolving into a fully autonomous real estate intelligence system — helping  agents / brokers track deals, understand clients, and close faster with AI-driven insights and automation."

          steps={[
            {
              title: "End-to-End Deal Tracking",
              description:
                "Track every stage of the deal lifecycle — from first inquiry to final closure — with complete visibility, pipeline clarity, and smart status updates.",
              status: "active",
            },
            {
              title: "Real-Time AI Sales Insights",
              description:
                "Get instant AI-driven feedback on client engagement, pitch performance, and property fit to improve conversion rates and decision-making.",
              status: "active",
            },
            {
              title: "AI Chat Assistant for Agents / Brokers",
              description:
                "An intelligent chatbot that helps agents / brokers manage clients, suggest properties, and answer queries instantly using PropIQ data.",
              status: "active",
            },
            {
              title: "Smart Follow-up Automation",
              description:
                "Never miss a deal again — automated reminders and AI-triggered follow-ups based on client behavior and urgency signals.",
              status: "idle",
            },
          ]}

          footerStatus="These features are currently in development and will be rolled out in upcoming PropIQ releases."
        /></div>
        <TestimonialsInnerPages />
        <CallToActionData
          title={"Be Among The First Agents / Brokers To Use AI In Real Estate"}
          description={undefined}
          primaryCTA={{
            label: "Book a Demo",
            href: "/book-demo",
          }}

        />
      </main>
      <Footer />
    </div>
  );
}