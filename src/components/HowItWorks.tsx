import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface StepItem {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  image: string;
  accent: "orange" | "blue";
  icon: React.ReactNode;
}

const steps: StepItem[] = [
  {
    id: "step-1",
    stepNumber: "1",
    title: "Schedule a Pickup",
    description: "Book your laundry pickup at a convenient time.",
    image: "/images/how-it-works/step-1-pickup.jpg",
    accent: "orange",
    icon: (
      /* Calendar & Clock Schedule Icon */
      <svg
        className="w-3.5 h-3.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <rect x="3" y="4" width="18" height="17" rx="3" strokeWidth={2} />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 2v4M8 2v4M3 9.5h18" />
        <circle cx="12" cy="15" r="3" strokeWidth={1.8} />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 13.5v1.5l1 1" />
      </svg>
    ),
  },
  {
    id: "step-2",
    stepNumber: "2",
    title: "Expert Cleaning",
    description: "Our team carefully washes and cleans your clothes.",
    image: "/images/how-it-works/step-2-cleaning.jpg",
    accent: "blue",
    icon: (
      /* Washing Machine Drum & Bubbles Icon */
      <svg
        className="w-3.5 h-3.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="3" strokeWidth={2} />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h18" />
        <circle cx="6.5" cy="5.5" r="1" fill="currentColor" />
        <circle cx="9.5" cy="5.5" r="1" fill="currentColor" />
        <circle cx="12" cy="14" r="4.5" strokeWidth={2} />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.8 14c.7-.8 1.5-.8 2.2 0s1.5.8 2.2 0" />
      </svg>
    ),
  },
  {
    id: "step-3",
    stepNumber: "3",
    title: "Doorstep Delivery",
    description: "Receive your fresh, clean clothes at your doorstep.",
    image: "/images/how-it-works/step-3-delivery.jpg",
    accent: "orange",
    icon: (
      /* Doorstep Delivery Van Icon */
      <svg
        className="w-3.5 h-3.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
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
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden py-10 sm:py-14 md:py-16 bg-[#F8F0E7]"
      aria-label="How APM Works - Laundry Made Simple in 3 Easy Steps"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================= */}
        {/* SECTION HEADER                                            */}
        {/* ========================================================= */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12">
          {/* Subtle Accent Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E9D9C9]/70 border border-[#E9D9C9] text-[11px] font-semibold text-[#202020] uppercase tracking-wider mb-2.5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C74708]" />
            <span>How It Works</span>
          </div>

          {/* Section Main Title */}
          <h2 className="text-2xl sm:text-3xl md:text-[2.25rem] font-bold tracking-tight text-[#202020] leading-tight">
            Laundry Made Simple in <span className="text-[#C74708]">3 Easy Steps</span>
          </h2>

          {/* Section Subtitle */}
          <p className="mt-2 text-xs sm:text-sm md:text-base text-[#4F4F4F] leading-relaxed max-w-md mx-auto">
            From pickup to delivery, we make laundry effortless.
          </p>
        </div>

        {/* ========================================================= */}
        {/* THREE COMPACT CARDS: HORIZONTAL ON DESKTOP, STACKED MOBILE */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 items-stretch max-w-4xl mx-auto">
          {steps.map((step) => {
            const isOrange = step.accent === "orange";

            return (
              <div
                key={step.id}
                className={cn(
                  "group relative flex flex-col justify-between",
                  "p-4 sm:p-5 rounded-2xl",
                  "bg-white/90 backdrop-blur-sm hover:bg-white",
                  "border border-[#E9D9C9]",
                  "shadow-[0_4px_16px_rgba(32,32,32,0.03)]",
                  "hover:shadow-[0_14px_30px_rgba(32,32,32,0.08)]",
                  "transition-all duration-300 ease-out",
                  "hover:-translate-y-1.5",
                  isOrange
                    ? "hover:border-[#C74708]/40 hover:shadow-[0_14px_30px_rgba(199,71,8,0.10)]"
                    : "hover:border-[#2869AE]/40 hover:shadow-[0_14px_30px_rgba(40,105,174,0.10)]"
                )}
              >
                <div>
                  {/* Top Header: Step Badge with Icon + Step Numeral */}
                  <div className="flex items-center justify-between mb-3">
                    {/* Pill Badge with SVG Icon + Step Label */}
                    <div
                      className={cn(
                        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border transition-colors duration-300",
                        isOrange
                          ? "bg-[#FDF2EC] text-[#C74708] border-[#C74708]/20 group-hover:bg-[#C74708] group-hover:text-white group-hover:border-[#C74708]"
                          : "bg-[#EAF1F8] text-[#2869AE] border-[#2869AE]/20 group-hover:bg-[#2869AE] group-hover:text-white group-hover:border-[#2869AE]"
                      )}
                    >
                      <span>{step.icon}</span>
                      <span>Step {step.stepNumber}</span>
                    </div>

                    {/* Faint Decorative Step Numeral */}
                    <span
                      className={cn(
                        "text-xl sm:text-2xl font-black tracking-tight transition-colors duration-300 select-none",
                        isOrange
                          ? "text-[#E9D9C9] group-hover:text-[#C74708]/25"
                          : "text-[#E9D9C9] group-hover:text-[#2869AE]/25"
                      )}
                    >
                      0{step.stepNumber}
                    </span>
                  </div>

                  {/* 3D Illustration Container (Compact & Refined) */}
                  <div
                    className={cn(
                      "relative w-full aspect-[16/11] rounded-xl overflow-hidden mb-3.5",
                      "border border-[#E9D9C9]/80 bg-[#F8F0E7]",
                      "shadow-[0_2px_10px_rgba(32,32,32,0.03)] transition-all duration-300",
                      isOrange
                        ? "group-hover:border-[#C74708]/30 group-hover:shadow-[0_6px_18px_rgba(199,71,8,0.08)]"
                        : "group-hover:border-[#2869AE]/30 group-hover:shadow-[0_6px_18px_rgba(40,105,174,0.08)]"
                    )}
                  >
                    <Image
                      src={step.image}
                      alt={`${step.title} - APM Laundry Care`}
                      fill
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 30vw, 300px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>

                  {/* Step Title */}
                  <h3 className="text-base sm:text-lg font-bold text-[#202020] tracking-tight transition-colors duration-200">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="mt-1 sm:mt-1.5 text-xs sm:text-[13px] text-[#4F4F4F] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
