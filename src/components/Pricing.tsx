import React from "react";
import Link from "next/link";

interface PricingPackage {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  rateType: string;
  rateDescription: string;
  accent: "charcoal" | "orange" | "blue";
  icon: React.ReactNode;
  features: string[];
  additionalPerks: string[];
  popular?: boolean;
}

const pricingPackages: PricingPackage[] = [
  {
    id: "wash-and-fold",
    name: "Wash & Fold",
    tagline: "Effortless routine laundry care for everyday wardrobe and home linens.",
    badge: "Everyday Essential",
    rateType: "By Weight / Load",
    rateDescription: "Fair, transparent per-kg billing with no hidden fees or extra charges.",
    accent: "charcoal",
    popular: false,
    icon: (
      /* Folded Clothes Stack Icon */
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3.5 7.5L12 3.5l8.5 4-8.5 4-8.5-4Z" />
        <path d="M3.5 12l8.5 4 8.5-4" />
        <path d="M3.5 16.5l8.5 4 8.5-4" />
      </svg>
    ),
    features: [
      "Everyday laundry cleaning",
      "Neatly folded clothes",
      "Gentle fabric care",
    ],
    additionalPerks: [
      "Eco-safe hypoallergenic detergents",
      "Color separation & low-heat tumble drying",
      "Carefully packaged, ready to put away",
    ],
  },
  {
    id: "wash-and-iron",
    name: "Wash & Iron",
    tagline: "Commercial-grade wash cycles paired with crisp, hand-finished steam pressing.",
    badge: "Most Popular",
    rateType: "Per Garment Piece",
    rateDescription: "Itemized per-piece rates for shirts, trousers, suits, and daily wear.",
    accent: "orange",
    popular: true,
    icon: (
      /* Clothes Steam Iron Icon */
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 18h17.5a1.5 1.5 0 0 0 1.5-1.5c0-4.5-4.5-8.5-9.5-8.5H4a1 1 0 0 0-1 1v9z" />
        <path d="M6 8V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3" />
        <circle cx="8" cy="14" r="1" fill="currentColor" />
        <circle cx="12" cy="14" r="1" fill="currentColor" />
        <circle cx="16" cy="14" r="1" fill="currentColor" />
      </svg>
    ),
    features: [
      "Professional washing",
      "Neatly ironed clothes",
      "Fresh and clean finish",
    ],
    additionalPerks: [
      "Artisan steam press with collar crisping",
      "Individual garment inspection & button check",
      "Choice of hanger presentation or compact fold",
    ],
  },
  {
    id: "dry-cleaning",
    name: "Dry Cleaning",
    tagline: "Specialized solvent care for fine suits, evening gowns, silk, and couture.",
    badge: "Delicate & Luxury",
    rateType: "By Fabric & Garment",
    rateDescription: "Specialist pricing calibrated to delicate textiles, ornate embroidery & formal cuts.",
    accent: "blue",
    popular: false,
    icon: (
      /* Coat Hanger with Luxury Garment & Sparkle Care Icon */
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 4a2.5 2.5 0 0 1 2.5 2.5c0 1.5-1.5 2-2.5 3" />
        <path d="M12 9.5L2.5 15.5a1 1 0 0 0 .5 1.5h18a1 1 0 0 0 .5-1.5L12 9.5Z" />
        <path d="M19 2.5l.8 1.7 1.7.8-1.7.8-.8 1.7-.8-1.7-1.7-.8 1.7-.8.8-1.7Z" />
      </svg>
    ),
    features: [
      "Special garment care",
      "Professional stain treatment",
      "Suitable for delicate fabrics",
    ],
    additionalPerks: [
      "Gentle eco-solvent technology",
      "Color rejuvenation & odor neutralization",
      "Breathable garment bags & custom hangers",
    ],
  },
];

const guarantees = [
  {
    title: "No Hidden Costs",
    description: "Clear quotes before we begin — you pay only for what is cleaned.",
    icon: (
      <svg className="w-5 h-5 text-[#C74708]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Fast Turnaround",
    description: "Standard 24 to 48-hour service with prompt doorstep pickup and return.",
    icon: (
      <svg className="w-5 h-5 text-[#2869AE]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "100% Quality Guarantee",
    description: "Every item is hand-inspected by certified fabric care specialists.",
    icon: (
      <svg className="w-5 h-5 text-[#202020]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 bg-[#F8F0E7]"
      aria-label="Simple & Transparent Pricing"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================= */}
        {/* SECTION HEADER                                            */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
          {/* Subtle Accent Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E9D9C9]/70 border border-[#E9D9C9] text-xs font-semibold text-[#202020] uppercase tracking-wider mb-3.5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#C74708]" />
            <span>Pricing &amp; Packages</span>
          </div>

          {/* Section Main Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-[#202020] leading-tight">
            Simple &amp; Transparent <span className="text-[#C74708]">Pricing</span>
          </h2>

          {/* Section Subtitle */}
          <p className="mt-3 text-base sm:text-lg md:text-xl text-[#4F4F4F] leading-relaxed max-w-2xl mx-auto">
            Quality laundry care at prices that make sense.
          </p>
        </div>

        {/* ========================================================= */}
        {/* THREE BALANCED PRICING CARDS                              */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {pricingPackages.map((pkg) => {
            const isOrange = pkg.accent === "orange";
            const isBlue = pkg.accent === "blue";

            return (
              <div
                key={pkg.id}
                className={`group relative flex flex-col justify-between rounded-3xl p-6 sm:p-7 lg:p-8 bg-white/85 backdrop-blur-sm border transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(32,32,32,0.08)] ${
                  pkg.popular
                    ? "border-[#C74708]/40 shadow-[0_12px_36px_rgba(199,71,8,0.08)] ring-1 ring-[#C74708]/20"
                    : "border-[#E9D9C9] shadow-[0_12px_36px_rgba(32,32,32,0.04)] hover:border-[#202020]/25"
                }`}
              >
                {/* Popular Pill Marker (Wash & Iron) */}
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold text-white bg-[#C74708] shadow-sm uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      {pkg.badge}
                    </span>
                  </div>
                )}

                {/* Top Section: Icon, Badge, Title, Tagline */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    {/* Icon Container with subtle hover animation */}
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 ${
                        isOrange
                          ? "bg-[#C74708]/10 text-[#C74708] border border-[#C74708]/20"
                          : isBlue
                          ? "bg-[#2869AE]/10 text-[#2869AE] border border-[#2869AE]/20"
                          : "bg-[#202020]/5 text-[#202020] border border-[#202020]/10"
                      }`}
                    >
                      {pkg.icon}
                    </div>

                    {/* Non-popular Badge Pill */}
                    {!pkg.popular && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-[#787878] bg-[#F8F0E7] border border-[#E9D9C9]">
                        {pkg.badge}
                      </span>
                    )}
                  </div>

                  {/* Package Title */}
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#202020]">
                    {pkg.name}
                  </h3>

                  {/* Package Short Tagline */}
                  <p className="mt-1.5 text-xs sm:text-sm text-[#4F4F4F] leading-relaxed">
                    {pkg.tagline}
                  </p>

                  {/* Rate Type & Description (Transparent rate indicator) */}
                  <div className="my-5 p-3.5 rounded-2xl bg-[#F8F0E7]/70 border border-[#E9D9C9]/80">
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="text-[#787878] uppercase tracking-wider">Rate Structure</span>
                      <span
                        className={`font-bold ${
                          isOrange
                            ? "text-[#C74708]"
                            : isBlue
                            ? "text-[#2869AE]"
                            : "text-[#202020]"
                        }`}
                      >
                        {pkg.rateType}
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs text-[#595959] leading-snug">
                      {pkg.rateDescription}
                    </p>
                  </div>

                  {/* Core Features Section */}
                  <div className="mt-5 space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#787878]">
                      Included Services
                    </p>
                    <ul className="space-y-2.5">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span
                            className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 text-xs ${
                              isOrange
                                ? "bg-[#C74708]/15 text-[#C74708]"
                                : isBlue
                                ? "bg-[#2869AE]/15 text-[#2869AE]"
                                : "bg-[#202020]/10 text-[#202020]"
                            }`}
                          >
                            <svg
                              className="w-3.5 h-3.5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                          <span className="text-sm font-semibold text-[#202020] leading-snug">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Additional Value Highlights */}
                  <div className="mt-4 pt-4 border-t border-[#E9D9C9]/60">
                    <ul className="space-y-2">
                      {pkg.additionalPerks.map((perk, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-[#595959]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D8C2AC] flex-shrink-0" />
                          <span>{perk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="mt-8 pt-5 border-t border-[#E9D9C9]/80">
                  <Link
                    href="#contact"
                    className={`group/btn w-full inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 active:scale-[0.98] ${
                      isOrange
                        ? "text-white bg-[#C74708] hover:bg-[#AF3C05] shadow-sm hover:shadow-[0_4px_14px_rgba(199,71,8,0.35)] focus:ring-2 focus:ring-[#C74708] focus:ring-offset-2"
                        : isBlue
                        ? "text-white bg-[#2869AE] hover:bg-[#215792] shadow-sm hover:shadow-[0_4px_14px_rgba(40,105,174,0.35)] focus:ring-2 focus:ring-[#2869AE] focus:ring-offset-2"
                        : "text-white bg-[#202020] hover:bg-[#353535] shadow-sm hover:shadow-[0_4px_14px_rgba(32,32,32,0.25)] focus:ring-2 focus:ring-[#202020] focus:ring-offset-2"
                    }`}
                  >
                    <span>Contact for Pricing</span>
                    <svg
                      className="w-4 h-4 ml-2 transition-transform duration-200 group-hover/btn:translate-x-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* PRICING TRANSPARENCY & ASSURANCE BANNER                   */}
        {/* ========================================================= */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-[#E9D9C9] grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {guarantees.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-white/80 border border-[#E9D9C9] flex items-center justify-center flex-shrink-0 shadow-sm">
                {item.icon}
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#202020]">
                  {item.title}
                </h4>
                <p className="mt-1 text-xs text-[#595959] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;