"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

type CTAButton = {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
};

type CallToActionProps = {
  title: React.ReactNode;
  description?: string;
  backgroundImage?: string;
  primaryCTA?: CTAButton;
  secondaryCTA?: CTAButton;
  className?: string;
};

export default function CallToAction({
  title,
  description,
  backgroundImage = "/banner-overlay.png",
  primaryCTA,
  secondaryCTA,
  className = "",
}: CallToActionProps) {
  return (
    <section className={`relative overflow-hidden ${className}`}>
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="Call to action background"
        fill
        className="block absolute inset-0 w-full h-full xl:object-contain"
        priority
      />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-0 text-center relative xl:pt-60 xl:pb-50 py-16 lg:py-20 z-10 flex flex-col items-center justify-center gap-4 md:gap-6 xl:gap-8">
        
        {/* Title */}
        <h2 className="text-4xl md:text-5xl 2xl:text-[64px] tracking-tight font-medium leading-tight bg-[radial-gradient(60%_200%_at_50%_50%,#FFFFFF_0%,rgba(255,255,255,0)_100%)] bg-clip-text text-transparent">
          {title}
        </h2>

        {/* Description */}
        {description && (
          <p className="text-[#FFFFFF99] font-light max-w-xs md:max-w-none mx-auto">
            {description}
          </p>
        )}

        {/* Buttons */}
        {(primaryCTA || secondaryCTA) && (
          <div className="flex flex-row gap-4 justify-center">
            
            {/* Primary CTA */}
            {primaryCTA?.href ? (
              <Link
                href={primaryCTA.href}
                className="px-5 lg:px-8 py-2 lg:py-3 rounded-lg bg-[#0078D4] font-medium text-sm lg:text-base text-white transition-all hover:scale-105"
              >
                {primaryCTA.label}
              </Link>
            ) : primaryCTA ? (
              <button
                onClick={primaryCTA.onClick}
                className="px-5 lg:px-8 py-2 lg:py-3 rounded-lg bg-[#0078D4] font-medium text-sm lg:text-base text-white transition-all hover:scale-105"
              >
                {primaryCTA.label}
              </button>
            ) : null}

            {/* Secondary CTA */}
            {secondaryCTA && (
              <button
                onClick={secondaryCTA.onClick}
                className="px-5 lg:px-8 py-3 rounded-lg border font-medium text-sm lg:text-base border-white hover:border-gray-500 text-white transition-all"
              >
                {secondaryCTA.label}
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}