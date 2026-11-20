import React from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/seoConfig";

interface HeroFact {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const heroFacts: HeroFact[] = [
  {
    id: "hygiene",
    title: "Fresh & Hygienic Cleaning",
    description: "Sanitized daily wash with gentle, skin-safe care.",
    icon: (
      <svg className="w-5 h-5 text-[#202020]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H4.875A1.125 1.125 0 003.75 4.875v3c0 .356.17.69.458.9l2.792 2.031V19.5a1.5 1.5 0 001.5 1.5h7a1.5 1.5 0 001.5-1.5v-8.694l2.792-2.03a1.125 1.125 0 00.458-.901v-3a1.125 1.125 0 00-1.125-1.125H15M9 3.75a3 3 0 006 0M9 3.75h6" />
      </svg>
    ),
  },
  {
    id: "dry-cleaning",
    title: "Expert Dry Cleaning",
    description: "Stain care for suits, silks & ethnic wear.",
    icon: (
      <svg className="w-5 h-5 text-[#202020]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <rect x="3.75" y="3" width="16.5" height="18" rx="2.25" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12.75" r="4.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="7.5" cy="6" r="0.75" fill="currentColor" />
        <circle cx="10.5" cy="6" r="0.75" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "fabric-care",
    title: "Delicate Fabric Care",
    description: "Color protection & safe handling for fine fabrics.",
    icon: (
      <svg className="w-5 h-5 text-[#202020]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    id: "finishing",
    title: "Quality Garment Finishing",
    description: "Crisp steam press & fast doorstep delivery.",
    icon: (
      <svg className="w-5 h-5 text-[#202020]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5v4.5l3 3" />
      </svg>
    ),
  },
];

export function Hero() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hello APM Laundry! I would like to schedule a doorstep pickup in Hyderabad."
  )}`;

  return (
    <section className="relative overflow-hidden pt-2 pb-6 sm:pb-8 lg:pb-10" aria-label="Hero section">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Headline with H1 and accent styling */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#202020] leading-[1.15] [text-wrap:balance]">
            Fresh Clothes, <br className="hidden sm:inline" />
            <span className="text-[#C74708]">Expert Care</span>, Every Time.
          </h1>

          <p className="mt-2.5 sm:mt-3 text-sm sm:text-base text-[#555555] max-w-xl mx-auto leading-relaxed [text-wrap:pretty]">
            Professional laundry and dry cleaning in Hyderabad with doorstep pickup, delicate fabric care, and fast 24–48h return.
          </p>

          {/* Single Sleek CTA Button */}
          <div className="mt-4 sm:mt-5 flex items-center justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[44px] sm:min-h-[46px] px-7 py-2.5 rounded-full text-sm sm:text-base font-semibold text-white bg-[#C74708] hover:bg-[#AF3C05] active:scale-[0.99] transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C74708] gap-2"
            >
              <span>Book Your Service</span>
              <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth={2.2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Central Arch Composition flanked by minimal circular highlights */}
        <div className="mt-4 sm:mt-5 lg:mt-6 flex items-center justify-center">
          <div className="w-full max-w-4xl flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 xl:gap-12">
            {/* Left 2 Highlights (Desktop) */}
            <div className="hidden lg:flex flex-col justify-between h-[280px] lg:h-[305px] w-[180px] xl:w-[200px] py-1 text-center">
              {/* Feature 1 */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#EFE6DD] flex items-center justify-center mb-1.5 shadow-xs">
                  {heroFacts[0].icon}
                </div>
                <h3 className="text-sm font-bold text-[#202020]">
                  {heroFacts[0].title}
                </h3>
                <p className="mt-0.5 text-xs text-[#555555] leading-snug max-w-[170px]">
                  {heroFacts[0].description}
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#EFE6DD] flex items-center justify-center mb-1.5 shadow-xs">
                  {heroFacts[1].icon}
                </div>
                <h3 className="text-sm font-bold text-[#202020]">
                  {heroFacts[1].title}
                </h3>
                <p className="mt-0.5 text-xs text-[#555555] leading-snug max-w-[170px]">
                  {heroFacts[1].description}
                </p>
              </div>
            </div>

            {/* Central Arch Frame */}
            <div className="relative flex-shrink-0">
              <div className="w-[230px] sm:w-[250px] lg:w-[260px] h-[270px] sm:h-[290px] lg:h-[305px] rounded-t-[135px] rounded-b-2xl bg-[#C74708] p-2 shadow-md">
                <div className="relative w-full h-full rounded-t-[127px] rounded-b-xl overflow-hidden bg-[#FAF5EF]">
                  <Image
                    src="/images/hero-arch-crop.jpg"
                    alt="APM professional laundry and dry cleaning services in Hyderabad"
                    fill
                    priority
                    sizes="(max-width: 640px) 230px, (max-width: 1024px) 250px, 260px"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Right 2 Highlights (Desktop) */}
            <div className="hidden lg:flex flex-col justify-between h-[280px] lg:h-[305px] w-[180px] xl:w-[200px] py-1 text-center">
              {/* Feature 3 */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#EFE6DD] flex items-center justify-center mb-1.5 shadow-xs">
                  {heroFacts[2].icon}
                </div>
                <h3 className="text-sm font-bold text-[#202020]">
                  {heroFacts[2].title}
                </h3>
                <p className="mt-0.5 text-xs text-[#555555] leading-snug max-w-[170px]">
                  {heroFacts[2].description}
                </p>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#EFE6DD] flex items-center justify-center mb-1.5 shadow-xs">
                  {heroFacts[3].icon}
                </div>
                <h3 className="text-sm font-bold text-[#202020]">
                  {heroFacts[3].title}
                </h3>
                <p className="mt-0.5 text-xs text-[#555555] leading-snug max-w-[170px]">
                  {heroFacts[3].description}
                </p>
              </div>
            </div>

            {/* Mobile & Tablet Layout (2x2 Grid below the Arch) */}
            <div className="lg:hidden grid grid-cols-2 gap-y-5 gap-x-4 w-full max-w-md mt-6 text-center">
              {heroFacts.map((fact) => (
                <div key={fact.id} className="flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-[#EFE6DD] flex items-center justify-center mb-1.5 shadow-xs">
                    {fact.icon}
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#202020]">
                    {fact.title}
                  </h3>
                  <p className="mt-0.5 text-[11px] sm:text-xs text-[#555555] leading-snug max-w-[160px]">
                    {fact.description}
                  </p>
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
