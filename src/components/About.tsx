import React from "react";
import Image from "next/image";
import Link from "next/link";

interface HighlightItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const highlights: HighlightItem[] = [
  {
    id: "advanced-cleaning",
    title: "Advanced Garment Cleaning",
    description: "Advanced washing and steam pressing for spotless garments.",
    icon: (
      /* Sparkle Icon */
      <svg
        className="w-4 h-4 text-[#202020]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
        />
      </svg>
    ),
  },
  {
    id: "gentle-fabric-care",
    title: "Gentle Fabric Care",
    description: "Eco-safe detergents calibrated to protect delicate fibers.",
    icon: (
      /* Leaf / Gentle Care Icon */
      <svg
        className="w-4 h-4 text-[#202020]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918"
        />
      </svg>
    ),
  },
  {
    id: "fresh-hygienic-clothes",
    title: "Fresh & Hygienic Clothes",
    description: "Sanitization treatments for revitalized, allergen-free clothes.",
    icon: (
      /* Shield / Hygiene Icon */
      <svg
        className="w-4 h-4 text-[#202020]"
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
];

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-14 sm:py-20 lg:py-28 bg-[#F8F0E7]"
      aria-label="About APM - Our Approach"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-18 items-center">
          
          {/* ======================================================= */}
          {/* LEFT SIDE: 2-CARD STAGGERED IMAGES                      */}
          {/* (Card 1: Wash & Iron | Card 2: Dry Cleaning)            */}
          {/* ======================================================= */}
          <div className="lg:col-span-7 xl:col-span-7 relative w-full pt-6 pb-8 sm:py-8 order-2 lg:order-1">
            <div className="relative flex items-center justify-center max-w-[520px] mx-auto">
              
              {/* CARD 1: WASH & IRON (Offset Downward) */}
              <div className="relative w-1/2 translate-y-6 sm:translate-y-10 group">
                <div className="relative aspect-[3/4.2] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_16px_36px_rgba(32,32,32,0.08)] border border-[#E9D9C9] bg-[#E9D9C9]/40 transition-transform duration-500 group-hover:-translate-y-1">
                  <Image
                    src="/images/about-card-wash-iron.jpg"
                    alt="Wash and Iron - Freshly laundered colorful clothes"
                    fill
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 250px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle Minimal Floating Label */}
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-[#202020] shadow-sm border border-[#E9D9C9]">
                      Wash &amp; Iron
                    </span>
                  </div>
                </div>
              </div>

              {/* TOP CIRCULAR OUTLINE BUTTON (← arrow to Wash & Iron) */}
              <div className="absolute -top-3 sm:-top-5 left-[48%] -translate-x-1/2 z-20">
                <Link
                  href="#wash-and-iron"
                  aria-label="View Wash & Iron Service"
                  className="w-12 h-12 sm:w-15 sm:h-15 rounded-full border border-[#202020]/25 bg-[#F8F0E7] flex items-center justify-center text-[#202020] shadow-sm hover:border-[#C74708] hover:text-[#C74708] hover:scale-105 transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                  </svg>
                </Link>
              </div>

              {/* CARD 2: DRY CLEANING (Offset Upward) */}
              <div className="relative w-1/2 -translate-y-6 sm:-translate-y-10 ml-4 sm:ml-6 group">
                <div className="relative aspect-[3/4.2] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_16px_36px_rgba(32,32,32,0.08)] border border-[#E9D9C9] bg-[#E9D9C9]/40 transition-transform duration-500 group-hover:-translate-y-1">
                  <Image
                    src="/images/about-card-dry-cleaning.jpg"
                    alt="Dry Cleaning - Tailored garments on boutique racks"
                    fill
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 250px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Subtle Minimal Floating Label */}
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-[#202020] shadow-sm border border-[#E9D9C9]">
                      Dry Cleaning
                    </span>
                  </div>
                </div>
              </div>

              {/* BOTTOM CIRCULAR OUTLINE BUTTON (→ arrow to Dry Cleaning) */}
              <div className="absolute -bottom-4 sm:-bottom-6 right-2 sm:right-4 z-20">
                <Link
                  href="#dry-cleaning"
                  aria-label="View Dry Cleaning Service"
                  className="w-12 h-12 sm:w-15 sm:h-15 rounded-full border border-[#202020]/25 bg-[#F8F0E7] flex items-center justify-center text-[#202020] shadow-sm hover:border-[#2869AE] hover:text-[#2869AE] hover:scale-105 transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>

            </div>
          </div>

          {/* ======================================================= */}
          {/* RIGHT SIDE: SIMPLE, CLEAN SEO CONTENT                   */}
          {/* ======================================================= */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center order-1 lg:order-2">
            
            {/* Small Label */}
            <span className="text-xs font-semibold tracking-[0.25em] text-[#787878] uppercase mb-2">
              ABOUT APM
            </span>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-[0.04em] text-[#202020] uppercase leading-[1.15]">
              OUR APPROACH
            </h2>

            {/* Slogan Subtitle */}
            <p className="mt-2 text-base sm:text-lg font-semibold text-[#C74708]">
              Fresh Clothes, Better Care, Every Time.
            </p>

            {/* Simple, Concise SEO Description */}
            <p className="mt-4 text-sm sm:text-base text-[#4F4F4F] leading-relaxed">
              APM delivers professional laundry and specialized dry-cleaning services in Hyderabad. Combining eco-friendly wash cycles with artisan steam pressing, we keep your everyday wear and delicate garments impeccably clean, soft, and long-lasting.
            </p>

            {/* 3 Simple Highlight Points */}
            <div className="mt-6 pt-5 border-t border-[#E9D9C9]/80 space-y-3">
              {highlights.map((item) => (
                <div key={item.id} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#EAD8C7] flex items-center justify-center flex-shrink-0 text-[#202020] mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#202020] leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#595959] mt-0.5 leading-snug">
                      {item.description}
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

export default About;
