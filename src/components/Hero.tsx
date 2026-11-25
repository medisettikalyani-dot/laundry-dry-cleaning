import React from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/seoConfig";

interface HeroFact {
  id: string;
  title: string;
  subtitle: string;
  iconBg: string;
  iconColor: string;
  iconBorder: string;
  icon: React.ReactNode;
}

const heroFacts: HeroFact[] = [
  {
    id: "hygiene",
    title: "Hygienic Wash",
    subtitle: "Clean & gentle on skin",
    iconBg: "bg-[#EBF5FA]",
    iconColor: "text-[#1D6F9E]",
    iconBorder: "border-[#C3DFEE]",
    icon: (
      <svg className="w-5 h-5 text-[#1D6F9E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H4.875A1.125 1.125 0 003.75 4.875v3c0 .356.17.69.458.9l2.792 2.031V19.5a1.5 1.5 0 001.5 1.5h7a1.5 1.5 0 001.5-1.5v-8.694l2.792-2.03a1.125 1.125 0 00.458-.901v-3a1.125 1.125 0 00-1.125-1.125H15M9 3.75a3 3 0 006 0M9 3.75h6" />
      </svg>
    ),
  },
  {
    id: "dry-cleaning",
    title: "Eco Dry Cleaning",
    subtitle: "Suits, silks & formals",
    iconBg: "bg-[#EBF5FA]",
    iconColor: "text-[#1D6F9E]",
    iconBorder: "border-[#C3DFEE]",
    icon: (
      <svg className="w-5 h-5 text-[#1D6F9E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <rect x="3.75" y="3" width="16.5" height="18" rx="2.25" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12.75" r="4.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="7.5" cy="6" r="0.75" fill="currentColor" />
        <circle cx="10.5" cy="6" r="0.75" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "fabric-care",
    title: "Free Pickup & Drop",
    subtitle: "Free within 3 km",
    iconBg: "bg-[#F3F9EA]",
    iconColor: "text-[#74A72E]",
    iconBorder: "border-[#D8ECBD]",
    icon: (
      <svg className="w-5 h-5 text-[#74A72E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375A1.125 1.125 0 012.25 17.625V6.75a1.125 1.125 0 011.125-1.125h11.25c.621 0 1.125.504 1.125 1.125v4.5m-13.5 7.5v-1.5m13.5-6h4.125a1.125 1.125 0 01.993.6l1.71 3.42a1.125 1.125 0 01.172.58v3.65a1.125 1.125 0 01-1.125 1.125h-.75m-6-9.375v9.375m0 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h.75" />
      </svg>
    ),
  },
  {
    id: "finishing",
    title: "Steam Pressing",
    subtitle: "Ready in 24–48 hours",
    iconBg: "bg-[#EBF5FA]",
    iconColor: "text-[#1D6F9E]",
    iconBorder: "border-[#C3DFEE]",
    icon: (
      <svg className="w-5 h-5 text-[#1D6F9E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
  },
];

export function Hero() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hello APM Laundry! I would like to schedule a doorstep pickup in Hyderabad."
  )}`;

  return (
    <section className="relative overflow-hidden pt-3 pb-8 sm:pb-10 lg:pb-12" aria-label="Hero section">
      {/* Soft atmospheric background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[680px] h-[340px] bg-gradient-to-b from-[#E0F2FE]/60 via-[#EBF5FA]/20 to-transparent blur-3xl -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Headline with minimal content */}
        <div className="text-center max-w-2xl mx-auto pt-2 sm:pt-4">
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#1E293B] leading-[1.15] [text-wrap:balance]">
            Fresh Clothes, <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#1D6F9E] via-[#0284C7] to-[#1D6F9E] bg-clip-text text-transparent">
              Expert Care
            </span>
            , Every Time.
          </h1>

          {/* Single concise sentence (no text clutter) */}
          <p className="mt-2.5 sm:mt-3 text-sm sm:text-base text-[#475569] max-w-lg mx-auto leading-relaxed [text-wrap:pretty]">
            Doorstep laundry and dry cleaning across Hyderabad. Clean clothes delivered to your door in 24 to 48 hours.
          </p>

          {/* Action Buttons */}
          <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 w-full max-w-xs sm:max-w-none mx-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center min-h-[44px] sm:min-h-[46px] px-6 sm:px-7 py-2.5 rounded-full text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#1D6F9E] to-[#16587E] hover:from-[#16587E] hover:to-[#124665] active:scale-[0.99] transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6F9E] gap-2"
            >
              <span>Book a Pickup</span>
              <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth={2.2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>

            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center min-h-[44px] sm:min-h-[46px] px-6 py-2.5 rounded-full text-sm sm:text-base font-semibold text-[#1E293B] bg-white border border-[#E2EDF3] hover:bg-[#EBF5FA] hover:border-[#1D6F9E] active:scale-[0.99] transition-all duration-200 shadow-2xs"
            >
              <span>View Services</span>
            </a>
          </div>
        </div>

        {/* Central Arch Composition flanked by sleek micro-cards */}
        <div className="mt-5 sm:mt-6 lg:mt-7 flex items-center justify-center">
          <div className="w-full max-w-4xl flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6 xl:gap-8">
            {/* Left 2 Highlights (Desktop) */}
            <div className="hidden lg:flex flex-col justify-around h-[270px] lg:h-[295px] w-[190px] xl:w-[210px]">
              {/* Feature 1 */}
              <div className="group bg-white/95 hover:bg-white backdrop-blur-xs rounded-2xl p-3 border border-[#E2EDF3] shadow-2xs hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-3">
                <div className={`w-9 h-9 rounded-xl ${heroFacts[0].iconBg} ${heroFacts[0].iconColor} ${heroFacts[0].iconBorder} border flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-2xs`}>
                  {heroFacts[0].icon}
                </div>
                <div className="text-left min-w-0">
                  <h3 className="text-xs sm:text-sm font-bold text-[#1E293B] leading-tight truncate">
                    {heroFacts[0].title}
                  </h3>
                  <p className="text-[11px] text-[#64748B] mt-0.5 truncate">
                    {heroFacts[0].subtitle}
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="group bg-white/95 hover:bg-white backdrop-blur-xs rounded-2xl p-3 border border-[#E2EDF3] shadow-2xs hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-3">
                <div className={`w-9 h-9 rounded-xl ${heroFacts[1].iconBg} ${heroFacts[1].iconColor} ${heroFacts[1].iconBorder} border flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-2xs`}>
                  {heroFacts[1].icon}
                </div>
                <div className="text-left min-w-0">
                  <h3 className="text-xs sm:text-sm font-bold text-[#1E293B] leading-tight truncate">
                    {heroFacts[1].title}
                  </h3>
                  <p className="text-[11px] text-[#64748B] mt-0.5 truncate">
                    {heroFacts[1].subtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Central Arch Frame */}
            <div className="relative flex-shrink-0">
              <div className="w-[220px] sm:w-[250px] lg:w-[260px] h-[260px] sm:h-[290px] lg:h-[305px] rounded-t-[120px] sm:rounded-t-[135px] rounded-b-2xl bg-gradient-to-b from-[#1D6F9E] via-[#38BDF8] to-[#74A72E] p-[3px] shadow-lg shadow-[#1D6F9E]/15">
                <div className="relative w-full h-full rounded-t-[117px] sm:rounded-t-[132px] rounded-b-[13px] overflow-hidden bg-white">
                  <Image
                    src="/images/hero-arch-crop.jpg"
                    alt="APM professional laundry and dry cleaning services in Hyderabad"
                    fill
                    priority
                    sizes="(max-width: 640px) 220px, (max-width: 1024px) 250px, 260px"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Minimal social proof badge floating on bottom of arch */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-full shadow-md border border-[#E2EDF3] text-[11px] sm:text-xs font-semibold text-[#1E293B] whitespace-nowrap flex items-center gap-1.5">
                <span className="text-[#74A72E] font-bold">✓</span>
                <span>40,000+ Orders Delivered</span>
              </div>
            </div>

            {/* Right 2 Highlights (Desktop) */}
            <div className="hidden lg:flex flex-col justify-around h-[270px] lg:h-[295px] w-[190px] xl:w-[210px]">
              {/* Feature 3 */}
              <div className="group bg-white/95 hover:bg-white backdrop-blur-xs rounded-2xl p-3 border border-[#E2EDF3] shadow-2xs hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-3">
                <div className={`w-9 h-9 rounded-xl ${heroFacts[2].iconBg} ${heroFacts[2].iconColor} ${heroFacts[2].iconBorder} border flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-2xs`}>
                  {heroFacts[2].icon}
                </div>
                <div className="text-left min-w-0">
                  <h3 className="text-xs sm:text-sm font-bold text-[#1E293B] leading-tight truncate">
                    {heroFacts[2].title}
                  </h3>
                  <p className="text-[11px] text-[#64748B] mt-0.5 truncate">
                    {heroFacts[2].subtitle}
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="group bg-white/95 hover:bg-white backdrop-blur-xs rounded-2xl p-3 border border-[#E2EDF3] shadow-2xs hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-3">
                <div className={`w-9 h-9 rounded-xl ${heroFacts[3].iconBg} ${heroFacts[3].iconColor} ${heroFacts[3].iconBorder} border flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-2xs`}>
                  {heroFacts[3].icon}
                </div>
                <div className="text-left min-w-0">
                  <h3 className="text-xs sm:text-sm font-bold text-[#1E293B] leading-tight truncate">
                    {heroFacts[3].title}
                  </h3>
                  <p className="text-[11px] text-[#64748B] mt-0.5 truncate">
                    {heroFacts[3].subtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile & Tablet Layout (Responsive Grid below the Arch) */}
            <div className="lg:hidden grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 w-full max-w-sm sm:max-w-2xl mt-5 sm:mt-6 px-1">
              {heroFacts.map((fact) => (
                <div
                  key={fact.id}
                  className="bg-white/95 backdrop-blur-xs rounded-xl p-2.5 sm:p-3 border border-[#E2EDF3] shadow-2xs flex items-center gap-2 sm:gap-2.5 transition-all"
                >
                  <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg ${fact.iconBg} ${fact.iconColor} ${fact.iconBorder} border flex items-center justify-center flex-shrink-0 shadow-2xs`}>
                    {fact.icon}
                  </div>
                  <div className="text-left min-w-0">
                    <h3 className="text-xs sm:text-sm font-bold text-[#1E293B] leading-tight truncate">
                      {fact.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-[#64748B] mt-0.5 truncate">
                      {fact.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
