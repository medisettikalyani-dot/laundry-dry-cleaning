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
    description: "Book your laundry or dry cleaning pickup via WhatsApp or our online booking form.",
    image: "/images/how-it-works/step-1-pickup.jpg",
    accent: "orange",
    icon: (
      <svg
        className="w-4 h-4"
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
    description: "Garments are sorted by fabric, washed or dry cleaned, and steam pressed with precision.",
    image: "/images/how-it-works/step-2-cleaning.jpg",
    accent: "blue",
    icon: (
      <svg
        className="w-4 h-4"
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
    description: "Freshly packaged clothes are delivered back to your doorstep across Hyderabad in 24-48 hours.",
    image: "/images/how-it-works/step-3-delivery-van.jpg",
    accent: "orange",
    icon: (
      <svg
        className="w-4 h-4"
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
      className="relative overflow-hidden py-12 sm:py-16 md:py-20 bg-[#F8F0E7]"
      aria-label="How APM Works"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Plain heading without eyebrow label */}
        <div className="max-w-2xl mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#202020]">
            How It Works
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#4F4F4F] [text-wrap:pretty]">
            Effortless pickup, professional care, and prompt return in three simple steps.
          </p>
        </div>

        {/* Three Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {steps.map((step) => {
            const isOrange = step.accent === "orange";

            return (
              <div
                key={step.id}
                className={cn(
                  "flex flex-col justify-between",
                  "p-5 sm:p-6 rounded-2xl",
                  "bg-white border border-[#E9D9C9]",
                  "shadow-sm hover:shadow-md transition-shadow duration-200"
                )}
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={cn(
                        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold border",
                        isOrange
                          ? "bg-[#FDF2EC] text-[#C74708] border-[#C74708]/30"
                          : "bg-[#EAF1F8] text-[#2869AE] border-[#2869AE]/30"
                      )}
                    >
                      {step.icon}
                      <span>Step {step.stepNumber}</span>
                    </span>
                  </div>

                  {/* Photo Container */}
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-4 border border-[#E9D9C9] bg-[#F8F0E7]">
                    <Image
                      src={step.image}
                      alt={`${step.title} - APM Laundry Care`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 360px"
                      className="object-cover object-center"
                    />
                  </div>

                  {/* Step Title & Description */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#202020]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#4F4F4F] leading-relaxed [text-wrap:pretty]">
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
