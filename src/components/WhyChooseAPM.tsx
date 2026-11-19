import React from "react";
import { cn } from "@/lib/utils";

interface BenefitItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const benefits: BenefitItem[] = [
  {
    id: "quality-cleaning",
    title: "Quality Cleaning",
    description: "Professional cleaning to keep your clothes fresh and clean.",
    icon: (
      /* Clean Sparkle / Garment Care Icon */
      <svg
        className="w-7 h-7 sm:w-8 sm:h-8"
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
    title: "Fabric Protection",
    description: "Careful handling for different fabrics and garments.",
    icon: (
      /* Protective Shield & Delicate Care Icon */
      <svg
        className="w-7 h-7 sm:w-8 sm:h-8"
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
    title: "Convenient Service",
    description: "Easy laundry pickup and doorstep delivery.",
    icon: (
      /* Doorstep Pickup & Delivery Van Icon */
      <svg
        className="w-7 h-7 sm:w-8 sm:h-8"
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
    title: "Customer Care",
    description: "Friendly support and attention to every order.",
    icon: (
      /* Warm & Attentive Customer Heart Icon */
      <svg
        className="w-7 h-7 sm:w-8 sm:h-8"
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
      className="relative overflow-hidden py-16 sm:py-20 md:py-24 bg-[#F8F0E7]"
      aria-label="Why Choose APM Laundry and Dry Cleaning"
    >
      {/* Subtle Background Gradient Decorative Detail */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(253,242,236,0.8),rgba(248,240,231,1))]"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================= */}
        {/* SECTION HEADER                                            */}
        {/* ========================================================= */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          {/* Small Eyebrow Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E9D9C9]/70 border border-[#E9D9C9] text-[11px] font-semibold text-[#202020] uppercase tracking-wider mb-2.5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C74708]" />
            <span>WHY APM</span>
          </div>

          {/* Main Heading with Brand Orange Highlight */}
          <h2 className="text-2xl sm:text-3xl md:text-[2.25rem] font-bold tracking-tight text-[#202020] leading-tight">
            Why Choose <span className="text-[#C74708]">APM</span>?
          </h2>

          {/* Small Decorative Orange Accent Below Heading */}
          <div className="w-10 h-1 bg-[#C74708] rounded-full mx-auto mt-3 mb-3.5" />

          {/* Short Centered Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-[#4F4F4F] leading-relaxed max-w-md mx-auto">
            We care for your clothes with attention, quality and convenience.
          </p>
        </div>

        {/* ========================================================= */}
        {/* FOUR BENEFIT CARDS                                        */}
        {/* Desktop: 4 columns | Tablet: 2 columns | Mobile: 1 col    */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className={cn(
                "group relative flex flex-col justify-start",
                "p-6 sm:p-7 rounded-2xl",
                "bg-white",
                "border border-[#E9D9C9]",
                "shadow-[0_4px_20px_rgba(32,32,32,0.03)]",
                "hover:shadow-[0_16px_32px_rgba(199,71,8,0.09)]",
                "hover:border-[#C74708]/35",
                "transition-all duration-300 ease-out",
                "hover:-translate-y-1.5",
                "overflow-hidden"
              )}
            >
              {/* Thin Orange Accent Detail on Card */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-[#C74708] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Soft Peach Circular Background with Orange Line Icon */}
              <div
                className={cn(
                  "w-14 h-14 sm:w-16 sm:h-16 rounded-full mb-5",
                  "bg-[#FDF2EC] text-[#C74708] border border-[#F3D5C3]",
                  "flex items-center justify-center flex-shrink-0",
                  "shadow-[0_2px_8px_rgba(199,71,8,0.06)]",
                  "transition-all duration-300 ease-out",
                  "group-hover:bg-[#C74708] group-hover:text-white group-hover:border-[#C74708]",
                  "group-hover:shadow-[0_6px_16px_rgba(199,71,8,0.22)]"
                )}
              >
                {benefit.icon}
              </div>

              {/* Card Title */}
              <h3 className="text-base sm:text-lg font-bold text-[#202020] tracking-tight mb-2 group-hover:text-[#C74708] transition-colors duration-200">
                {benefit.title}
              </h3>

              {/* Card Description */}
              <p className="text-xs sm:text-sm text-[#4F4F4F] leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseAPM;
