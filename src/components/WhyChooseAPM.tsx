import React from "react";
import { cn } from "@/lib/utils";

interface BenefitItem {
  id: string;
  number: string;
  title: string;
  description: string;
  tag: string;
  icon: React.ReactNode;
}

const benefits: BenefitItem[] = [
  {
    id: "quality-cleaning",
    number: "01",
    title: "Quality Cleaning",
    description: "Professional cleaning to keep your clothes fresh, bright, and spotless.",
    tag: "Spotless Wash",
    icon: (
      /* Clean Sparkle / Garment Care Icon */
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"
        />
      </svg>
    ),
  },
  {
    id: "fabric-protection",
    number: "02",
    title: "Fabric Protection",
    description: "Careful handling for delicate fabrics, silks, and everyday garments.",
    tag: "Gentle Care",
    icon: (
      /* Protective Shield & Delicate Care Icon */
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
  {
    id: "convenient-service",
    number: "03",
    title: "Convenient Service",
    description: "Effortless scheduling with doorstep pickup and prompt delivery.",
    tag: "Doorstep Pickup",
    icon: (
      /* Doorstep Pickup & Delivery Van Icon */
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375A1.125 1.125 0 012.25 17.625V6.75a1.125 1.125 0 011.125-1.125h11.25c.621 0 1.125.504 1.125 1.125v4.5m-13.5 7.5v-1.5m13.5-6h4.125a1.125 1.125 0 01.993.6l1.71 3.42a1.125 1.125 0 01.172.58v3.65a1.125 1.125 0 01-1.125 1.125h-.75m-6-9.375v9.375m0 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h.75"
        />
      </svg>
    ),
  },
  {
    id: "customer-care",
    number: "04",
    title: "Customer Care",
    description: "Friendly assistance, order updates, and attention to every detail.",
    tag: "Direct Support",
    icon: (
      /* Warm & Attentive Customer Heart Icon */
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    ),
  },
];

export function WhyChooseAPM() {
  return (
    <section
      id="why-choose-apm"
      className="relative overflow-hidden py-10 sm:py-14 md:py-18 bg-[#F8F0E7]"
      aria-label="Why Choose APM Laundry and Dry Cleaning"
    >
      {/* Subtle Background Radial Warm Glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(253,242,236,0.85),rgba(248,240,231,1))]"
        aria-hidden="true"
      />

      {/* Decorative Soft Ambient Glow Behind Cards */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-4xl h-72 bg-gradient-to-r from-[#FDE8DC]/30 via-[#F5D8C4]/20 to-[#EAD2BE]/25 blur-3xl rounded-full"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================= */}
        {/* SECTION HEADER                                            */}
        {/* ========================================================= */}
        <div className="text-center max-w-2xl mx-auto mb-7 sm:mb-10 md:mb-12">
          {/* Eyebrow Pill Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE3D5] border border-[#DECCB8] text-[11px] font-bold text-[#202020] uppercase tracking-wider mb-2.5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C74708]" />
            <span>Why APM</span>
          </div>

          {/* Main Heading with Brand Orange Accent */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#202020] leading-tight">
            Why Choose <span className="text-[#C74708]">APM</span>?
          </h2>

          {/* Clean Orange Accent Line */}
          <div className="w-10 sm:w-12 h-1 bg-[#C74708] rounded-full mx-auto mt-2.5 mb-2.5 sm:mt-3 sm:mb-3" />

          {/* Centered Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-[#4F4F4F] leading-relaxed max-w-md mx-auto">
            We care for your clothes with attention, quality and convenience.
          </p>
        </div>

        {/* ========================================================= */}
        {/* FOUR BENEFIT CARDS                                        */}
        {/* Mobile: 2x2 Grid | Desktop: 4 Columns                     */}
        {/* ========================================================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 items-stretch">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className={cn(
                "group relative flex flex-col justify-between",
                "p-3.5 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl",
                "bg-gradient-to-b from-white via-white to-[#FDFBF7]",
                "border border-[#EADCCF]/90",
                "shadow-[0_4px_20px_-4px_rgba(199,71,8,0.05),0_2px_6px_-1px_rgba(0,0,0,0.02)]",
                "hover:shadow-[0_16px_36px_-6px_rgba(199,71,8,0.14),0_6px_12px_-2px_rgba(0,0,0,0.04)]",
                "hover:border-[#C74708]/35",
                "transition-all duration-300 ease-out",
                "hover:-translate-y-1.5",
                "overflow-hidden"
              )}
            >
              {/* Top Accent Gradient Bar on Hover */}
              <div className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-[#C74708] via-[#E86726] to-[#F9C943] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Faint Warm Ambient Glow in Corner on Hover */}
              <div
                className="pointer-events-none absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-gradient-to-br from-[#C74708]/10 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                aria-hidden="true"
              />

              <div>
                {/* Top Row: Icon Badge + Step Numeral Pill */}
                <div className="flex items-center justify-between mb-2.5 sm:mb-4">
                  {/* Rich Squircle Icon Container with Soft Glow */}
                  <div
                    className={cn(
                      "w-10 h-10 sm:w-12 sm:h-12 md:w-13 md:h-13 rounded-xl sm:rounded-2xl",
                      "bg-gradient-to-br from-[#FFF5EE] to-[#FDE8DC] text-[#C74708] border border-[#F3D5C3]",
                      "flex items-center justify-center flex-shrink-0",
                      "shadow-sm",
                      "transition-all duration-300 ease-out",
                      "group-hover:bg-[#C74708] group-hover:text-white group-hover:border-[#C74708]",
                      "group-hover:shadow-[0_8px_20px_rgba(199,71,8,0.25)]",
                      "group-hover:scale-105"
                    )}
                  >
                    {benefit.icon}
                  </div>

                  {/* Refined Step Number Badge */}
                  <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wider bg-[#F9F1E8] text-[#9E7356] border border-[#EBDCCF] group-hover:bg-[#C74708] group-hover:text-white group-hover:border-[#C74708] transition-all duration-300 shadow-sm">
                    {benefit.number}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-xs sm:text-base md:text-lg font-bold text-[#202020] tracking-tight mb-1 sm:mb-1.5 group-hover:text-[#C74708] transition-colors duration-200 leading-snug">
                  {benefit.title}
                </h3>

                {/* Card Description */}
                <p className="text-[11px] sm:text-xs md:text-sm text-[#555] leading-snug sm:leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {/* Bottom Feature Verification Pill / Tag */}
              <div className="mt-3 pt-2.5 sm:mt-4 sm:pt-3 border-t border-[#F4E8DC] flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold text-[#8B4513]">
                <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#FFF2EB] border border-[#F3D5C3] flex items-center justify-center flex-shrink-0 text-[#C74708] group-hover:bg-[#C74708] group-hover:text-white group-hover:border-[#C74708] transition-colors">
                  <svg
                    className="w-2.5 h-2.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.8}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="truncate tracking-tight font-medium text-[#7C3612] group-hover:text-[#C74708] transition-colors">
                  {benefit.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseAPM;
