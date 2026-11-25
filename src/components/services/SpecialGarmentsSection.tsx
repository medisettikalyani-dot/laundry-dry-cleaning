"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/seoConfig";
import { specialItemsList } from "./servicesData";

// Clean, short 1-line descriptions matching clean boutique aesthetic
const garmentDescriptions: Record<string, string> = {
  "wedding-wear": "Bridal lehengas, gowns & party wear",
  "heavy-sarees": "Kanchipuram, Banarasi & pure silk care",
  sherwani: "Designer sherwanis, kurtas & ethnic wear",
  curtains: "Deep dust removal & steam pressing",
  blankets: "Sanitized deep wash for quilts & blankets",
};

export function SpecialGarmentsSection() {
  // Center active card index (0 to 4)
  const [activeIndex, setActiveIndex] = useState<number>(2); // Starts on Heavy Sarees
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const totalItems = specialItemsList.length;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1));
  };

  // Mobile Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 40) handleNext();
    if (diff < -40) handlePrev();
    setTouchStart(null);
  };

  // 5 visible slots relative to activeIndex: [-2, -1, 0, 1, 2]
  const visibleSlots = [-2, -1, 0, 1, 2].map((offset) => {
    const itemIndex = (activeIndex + offset + totalItems) % totalItems;
    return {
      offset,
      item: specialItemsList[itemIndex],
      itemIndex,
    };
  });

  return (
    <section
      id="special-items"
      className="relative overflow-hidden py-14 sm:py-18 md:py-22 bg-[#F4F8FA] border-t border-[#E2EDF3]"
      aria-label="Special Garments & Items We Accept"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Clean, Simple & Direct */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1E293B]">
            Special Items &amp; Clothes
          </h2>

          <p className="mt-2 text-sm sm:text-base text-[#64748B] [text-wrap:pretty]">
            Care for wedding wear, silk sarees, curtains, and blankets.
          </p>
        </div>

        {/* Carousel Stage Container with Dedicated Outer Margins for Floating Arrows */}
        <div
          className="relative max-w-6xl mx-auto px-10 sm:px-14 lg:px-16 select-none"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Floating Left Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous special item"
            className="absolute left-0 sm:left-2 lg:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center border transition-all duration-150 bg-white text-[#1E293B] border-[#E2EDF3] hover:border-[#1D6F9E] hover:text-[#1D6F9E] hover:scale-105 active:scale-95 shadow-md"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Floating Right Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next special item"
            className="absolute right-0 sm:right-2 lg:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center border transition-all duration-150 bg-white text-[#1E293B] border-[#E2EDF3] hover:border-[#1D6F9E] hover:text-[#1D6F9E] hover:scale-105 active:scale-95 shadow-md"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* ========================================================= */}
          {/* 5-CARD GROUNDED STAGE (Pure Minimalist: Image, Name, Desc) */}
          {/* ========================================================= */}
          <div className="flex items-end justify-center gap-3 sm:gap-4 lg:gap-5 pb-2 pt-3 overflow-hidden">
            {visibleSlots.map(({ offset, item, itemIndex }) => {
              const isCenter = offset === 0;
              const isNear = Math.abs(offset) === 1;
              const isFar = Math.abs(offset) === 2;

              const shortDesc =
                garmentDescriptions[item.id] || item.subtitle || item.shortDescription;

              const bookingUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                `Hello APM Laundry! I would like to book special care for "${item.title}".`
              )}`;

              const handleCardClick = () => {
                if (isCenter) {
                  window.open(bookingUrl, "_blank", "noopener,noreferrer");
                } else {
                  setActiveIndex(itemIndex);
                }
              };

              return (
                <div
                  key={`${item.id}-${offset}`}
                  onClick={handleCardClick}
                  title={
                    isCenter
                      ? `Click to book special care for ${item.title} on WhatsApp`
                      : `Click to view ${item.title}`
                  }
                  className={cn(
                    "cursor-pointer transition-all duration-500 ease-out flex flex-col shrink-0",
                    "rounded-2xl sm:rounded-3xl bg-white border border-[#E2EDF3]",
                    // Proportional sizing & grounded bottom alignment
                    isFar &&
                      "hidden lg:flex w-[185px] xl:w-[195px] opacity-70 hover:opacity-100 shadow-2xs hover:shadow-xs",
                    isNear &&
                      "hidden sm:flex w-[215px] sm:w-[225px] lg:w-[230px] xl:w-[240px] opacity-90 hover:opacity-100 shadow-xs hover:shadow-md",
                    isCenter &&
                      "flex w-[82vw] max-w-[275px] sm:w-[260px] lg:w-[270px] xl:w-[280px] z-20 shadow-[0_20px_45px_-10px_rgba(29,111,158,0.18)] border-[#1D6F9E]/40",
                    isCenter ? "p-3.5 sm:p-4 pb-4 sm:pb-5" : "p-3 pb-3.5 sm:pb-4"
                  )}
                >
                  {/* Garment Image on Clean Soft Background */}
                  <div className="relative w-full aspect-[1/1] rounded-2xl overflow-hidden bg-[#F1F5F9] flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes={isCenter ? "300px" : "240px"}
                      className="object-cover object-center transition-transform duration-500 ease-out hover:scale-105"
                      priority={isCenter}
                    />
                  </div>

                  {/* Card Title & Little Description ONLY */}
                  <div className="text-center pt-3 pb-0.5">
                    <h3
                      className={cn(
                        "font-bold tracking-tight text-[#1E293B] truncate leading-snug",
                        isCenter ? "text-base sm:text-lg text-[#1E293B]" : "text-sm sm:text-base"
                      )}
                    >
                      {item.title}
                    </h3>

                    <p className="text-xs text-[#64748B] mt-0.5 line-clamp-1 leading-normal px-1">
                      {shortDesc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpecialGarmentsSection;
