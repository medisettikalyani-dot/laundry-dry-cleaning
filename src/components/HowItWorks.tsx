import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface StepItem {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  image: string;
  tag: string;
}

const steps: StepItem[] = [
  {
    id: "step-1",
    stepNumber: "1",
    title: "Schedule a Pickup",
    description: "Book a pickup on WhatsApp or through our quick online form in less than a minute.",
    image: "/images/how-it-works/step-1-pickup.jpg",
    tag: "WhatsApp or Online",
  },
  {
    id: "step-2",
    stepNumber: "2",
    title: "Careful Cleaning",
    description: "We sort your clothes by fabric type, clean them using gentle methods, and steam press them neatly.",
    image: "/images/how-it-works/step-2-cleaning.jpg",
    tag: "Gentle Wash & Press",
  },
  {
    id: "step-3",
    stepNumber: "3",
    title: "Doorstep Delivery",
    description: "Your clean, neatly packed clothes are delivered back to your home in 24 to 48 hours.",
    image: "/images/how-it-works/step-3-delivery-van.jpg",
    tag: "Delivered in 24–48h",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden py-12 sm:py-16 md:py-20 bg-[#F4F8FA]"
      aria-label="How APM Laundry Care Works"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Simple, Clean & Direct */}
        <div className="max-w-2xl mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1E293B]">
            How It Works
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#64748B] [text-wrap:pretty]">
            Doorstep pickup, expert cleaning, and quick delivery in three simple steps.
          </p>
        </div>

        {/* Three Steps Grid: Simple, Neat & Breathable */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {steps.map((step) => (
            <article
              key={step.id}
              className={cn(
                "group relative flex flex-col justify-between overflow-hidden",
                "rounded-2xl bg-white border border-[#E2EDF3]",
                "shadow-xs hover:shadow-md transition-all duration-200",
                "hover:-translate-y-1 hover:border-[#1D6F9E]/40"
              )}
            >
              <div>
                {/* Crisp Image with Subtle Step Badge */}
                <div className="relative w-full aspect-[16/10] bg-[#F1F5F9] overflow-hidden">
                  <Image
                    src={step.image}
                    alt={`${step.title} - APM Laundry Care`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 360px"
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transform-none"
                  />
                  {/* Floating Clean Step Indicator */}
                  <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-xs font-bold text-[#1D6F9E] shadow-xs border border-white/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#74A72E]" />
                    <span>Step {step.stepNumber}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#1E293B] group-hover:text-[#1D6F9E] transition-colors duration-200 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed [text-wrap:pretty]">
                    {step.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
