"use client";

import { motion } from "framer-motion";
import AnimateSection from "./AnimateSection";
import { Check, type LucideIcon } from "lucide-react";

type StepItem = {
  label: string;
  title: string;
  description: string;
  icon: LucideIcon;
  points?: string[];
};

export type HowToolWorksSectionProps = {
  eyebrow?: string;
  heading: React.ReactNode;
  description?: string;
  steps: StepItem[];
  accent?: "emerald" | "sky";

  // ✅ NEW CONTROL
  cardCount?: 2 | 3 | 4;
};

export default function HowToolWorksSection({
  eyebrow,
  heading,
  description,
  steps,
  accent = "emerald",
  cardCount = 4, // ✅ default 4
}: HowToolWorksSectionProps) {
  const accentMap = {
    emerald: {
      eyebrow: "text-emerald-300",
      labelBg: "bg-emerald-500/10",
      labelText: "text-emerald-200",
      iconText: "text-emerald-300",
    },
    sky: {
      eyebrow: "text-sky-300",
      labelBg: "bg-sky-500/10",
      labelText: "text-sky-200",
      iconText: "text-sky-300",
    },
  };

  const c = accentMap[accent];

  // ✅ GRID CONTROLLER
  const gridClass =
    cardCount === 2
      ? "md:grid-cols-2"
      : cardCount === 3
      ? "md:grid-cols-2 lg:grid-cols-3"
      : "md:grid-cols-2 lg:grid-cols-4";

  return (
    <div className="bg-[#07090E] py-10 sm:py-12 lg:py-16">
      <AnimateSection type="fadeUp">
        <section className="mx-auto max-w-7xl 2xl:max-w-[1440px] px-4 sm:px-6 lg:px-8">
          
          {/* HEADER */}
          <div className="mb-8 sm:mb-10 lg:mb-12 flex flex-col gap-4 md:grid md:grid-cols-[1.3fr_0.7fr] md:items-end">
            <div>
              {eyebrow && (
                <p className={`mb-2 text-[10px] font-semibold tracking-[0.24em] uppercase ${c.eyebrow}`}>
                  {eyebrow}
                </p>
              )}

              <h2 className="text-[26px] leading-tight sm:text-3xl md:text-4xl font-semibold text-white">
                {heading}
              </h2>
            </div>

            {description && (
              <p className="text-sm sm:text-base leading-relaxed text-white/65 max-w-md">
                {description}
              </p>
            )}
          </div>

          {/* GRID (DYNAMIC) */}
          <div className={`grid gap-4 sm:gap-5 ${gridClass}`}>
            {steps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="relative p-5 rounded-2xl bg-[#FFFFFF08] border border-white/5 flex flex-col shadow-[inset_0_-1px_2px_rgba(255,255,255,0.05),inset_0_1px_1px_rgba(255,255,255,0.20)]"
              >
                {/* HEADER */}
                <div className="mb-3 flex items-center gap-3">
                  <span className={`inline-flex h-6 w-6 items-center justify-center rounded-md text-[10px] font-semibold tracking-widest ${c.labelBg} ${c.labelText}`}>
                    {step.label}
                  </span>

                  <h3 className="text-base sm:text-lg font-medium text-white">
                    {step.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <p className="text-sm leading-snug text-white/65">
                  {step.description}
                </p>

                {/* OPTIONAL POINTS */}
                {step.points && step.points.length > 0 && (
                  <ul className="mt-6 space-y-1.5">
                    {step.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-white/60">
                        <Check className="h-4 w-4 text-emerald-400 mt-[2px]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>

        </section>
      </AnimateSection>
    </div>
  );
}