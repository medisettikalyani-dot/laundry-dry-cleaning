import React from "react";
import Image from "next/image";
import Link from "next/link";

interface FeatureCallout {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const leftFeatures: FeatureCallout[] = [
  {
    id: "hygienic",
    title: "Fresh & Hygienic Cleaning",
    description: "Soft, fresh, and revitalized garments",
    icon: (
      /* Clean Shirt Outline Icon */
      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#202020]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a2 2 0 001.34 1.57L6 11.4V20a2 2 0 002 2h8a2 2 0 002-2v-8.6l1.8-0.67a2 2 0 001.34-1.57l.58-3.47a2 2 0 00-1.34-2.23z" />
      </svg>
    ),
  },
  {
    id: "dry-cleaning",
    title: "Expert Dry Cleaning",
    description: "Expertly dry-cleaned for pristine results",
    icon: (
      /* Washing Machine Drum Icon */
      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#202020]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <rect x="3" y="3" width="18" height="18" rx="3" strokeWidth={1.8} />
        <circle cx="12" cy="13" r="4.5" strokeWidth={1.8} />
        <circle cx="12" cy="13" r="1.5" fill="currentColor" />
        <circle cx="7" cy="6" r="1" fill="currentColor" />
        <circle cx="10" cy="6" r="1" fill="currentColor" />
      </svg>
    ),
  },
];

const rightFeatures: FeatureCallout[] = [
  {
    id: "delicate",
    title: "Delicate Fabric Care",
    description: "Delicate fabrics treated with expertise",
    icon: (
      /* Delicate Garment / Star Care Icon */
      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#202020]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    id: "finishing",
    title: "Quality Garment Finishing",
    description: "Hand-finished & ready to wear",
    icon: (
      /* Quality Garment Finishing / Clock Icon */
      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#202020]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="12" cy="12" r="9" strokeWidth={1.8} />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
      </svg>
    ),
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-1 pb-6 sm:pb-8 lg:pb-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================= */}
        {/* 1. CENTERED HERO HEADLINE & CTA                           */}
        {/* ========================================================= */}
        <div className="text-center max-w-2xl mx-auto">
          {/* Large Bold Centered Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-bold tracking-tight text-[#202020] leading-[1.14]">
            Fresh Clothes, <br className="hidden sm:inline" />
            <span className="text-[#C74708]">Expert Care</span>, Every Time.
          </h1>

          {/* Short Supporting Description */}
          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm md:text-[15px] text-[#4F4F4F] max-w-md mx-auto leading-relaxed">
            Professional laundry and dry cleaning services in Hyderabad with doorstep care for every garment.
          </p>

          {/* Prominent Burnt Orange CTA Button */}
          <div className="mt-3 sm:mt-3.5 flex items-center justify-center">
            <Link
              href="#contact"
              className="group inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#C74708] hover:bg-[#AF3C05] active:scale-[0.98] transition-all duration-200 shadow-[0_4px_16px_rgba(199,71,8,0.28)] hover:shadow-[0_8px_24px_rgba(199,71,8,0.38)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2869AE]"
            >
              <span>Book Your Service</span>
              <svg
                className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. MAIN VISUAL: BURNT ORANGE ARCH + 4 BALANCED CALLOUTS   */}
        {/* ========================================================= */}
        <div className="mt-5 sm:mt-6 flex flex-col items-center">
          {/* Accessible Semantic Parent Heading for Feature Callouts (visually hidden) */}
          <h2 className="sr-only">Core Garment Care Features</h2>

          {/* Desktop Composition: Left Callouts - Solid Orange Arch - Right Callouts */}
          <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-10">
            
            {/* Left Feature Column (Desktop: Exactly 2 items, vertically distributed) */}
            <div className="hidden lg:flex flex-col justify-between h-[280px] sm:h-[305px] md:h-[325px] w-[160px] xl:w-[175px] flex-shrink-0 py-1">
              {leftFeatures.map((feature) => (
                <div
                  key={feature.id}
                  className="group flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1"
                >
                  {/* Clean Circular Badge */}
                  <div className="w-12 h-12 rounded-full bg-[#EAD8C7] flex items-center justify-center mb-2 shadow-[0_2px_8px_rgba(32,32,32,0.04)] group-hover:bg-[#E2CEBC] transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xs sm:text-[13px] font-bold text-[#202020] leading-snug mb-0.5">
                    {feature.title}
                  </h3>
                  <p className="text-[11px] text-[#595959] leading-tight max-w-[155px]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Central Solid Burnt Orange Arch Frame */}
            <div className="relative flex-shrink-0">
              <div className="w-[240px] sm:w-[260px] md:w-[280px] h-[280px] sm:h-[305px] md:h-[325px] rounded-t-[120px] sm:rounded-t-[130px] md:rounded-t-[140px] rounded-b-2xl bg-[#C74708] p-2 sm:p-2.5 shadow-[0_16px_40px_rgba(199,71,8,0.22)]">
                {/* Inner Image Container (Centered directly on hands & colorful folded laundry) */}
                <div className="relative w-full h-full rounded-t-[112px] sm:rounded-t-[122px] md:rounded-t-[132px] rounded-b-xl overflow-hidden bg-[#E9D9C9]">
                  <Image
                    src="/images/hero-arch-crop.jpg"
                    alt="Neatly folded colorful clothes held in hands - APM Care"
                    fill
                    priority
                    className="object-cover hover:scale-[1.03] transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 240px, (max-width: 1024px) 260px, 280px"
                  />
                </div>
              </div>
            </div>

            {/* Right Feature Column (Desktop: Exactly 2 items, vertically distributed) */}
            <div className="hidden lg:flex flex-col justify-between h-[280px] sm:h-[305px] md:h-[325px] w-[160px] xl:w-[175px] flex-shrink-0 py-1">
              {rightFeatures.map((feature) => (
                <div
                  key={feature.id}
                  className="group flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1"
                >
                  {/* Clean Circular Badge */}
                  <div className="w-12 h-12 rounded-full bg-[#EAD8C7] flex items-center justify-center mb-2 shadow-[0_2px_8px_rgba(32,32,32,0.04)] group-hover:bg-[#E2CEBC] transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xs sm:text-[13px] font-bold text-[#202020] leading-snug mb-0.5">
                    {feature.title}
                  </h3>
                  <p className="text-[11px] text-[#595959] leading-tight max-w-[155px]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ========================================================= */}
          {/* MOBILE & TABLET: CLEAN 2x2 CIRCULAR CALLOUT GRID         */}
          {/* ========================================================= */}
          <div className="grid grid-cols-2 gap-5 sm:gap-6 w-full max-w-sm sm:max-w-md lg:hidden mt-6">
            {[...leftFeatures, ...rightFeatures].map((feature) => (
              <div
                key={feature.id}
                className="flex flex-col items-center text-center"
              >
                <div className="w-11 h-11 rounded-full bg-[#EAD8C7] flex items-center justify-center mb-2 shadow-sm">
                  {feature.icon}
                </div>
                <p className="text-xs sm:text-[13px] font-bold text-[#202020] leading-snug mb-0.5">
                  {feature.title}
                </p>
                <p className="text-[11px] text-[#595959] leading-tight max-w-[145px]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
