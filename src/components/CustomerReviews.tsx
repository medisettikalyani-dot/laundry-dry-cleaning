"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export interface CustomerReview {
  id: string;
  name: string;
  service?: string;
  rating: number;
  review: string;
}

function getInitials(name?: string): string {
  if (!name) return "AP";
  const clean = name.replace(/^(Dr\.|Mr\.|Mrs\.|Ms\.)\s+/i, "").trim();
  const parts = clean.split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "AP";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

const customerReviews: CustomerReview[] = [
  {
    id: "review-1",
    name: "Vikram Reddy",
    service: "Suit & Sherwani Dry Cleaning",
    rating: 5,
    review:
      "Got my 3-piece suit and sherwani dry cleaned for a family wedding. Flawless finish, perfectly pressed, and delivered right on time.",
  },
  {
    id: "review-2",
    name: "Priya Sharma",
    service: "Wash & Steam Iron",
    rating: 5,
    review:
      "Regular wash and iron service is fantastic. My formal shirts and kurtas always come back crisp, neatly packed, and fresh.",
  },
  {
    id: "review-3",
    name: "Karthik Subramanian",
    service: "Doorstep Pickup & Delivery",
    rating: 5,
    review:
      "Super convenient doorstep pickup and delivery. Great fabric care and very reliable turnaround time. Highly recommended!",
  },
  {
    id: "review-4",
    name: "Ananya Rao",
    service: "Delicate Silk Saree Care",
    rating: 5,
    review:
      "Handled my expensive silk sarees with exceptional care. Fabric feels soft, colors remain vibrant, and the fold is immaculate.",
  },
  {
    id: "review-5",
    name: "Rohit Varma",
    service: "Routine Wash & Fold",
    rating: 5,
    review:
      "Best everyday laundry service. Clothes smell clean, neatly sorted, and folded ready for the closet. Saves me hours every single week.",
  },
  {
    id: "review-6",
    name: "Dr. Meera Nair",
    service: "Winter Coat & Blazer Care",
    rating: 5,
    review:
      "Sent my wool coat and heavy blazers for dry cleaning. Stains were completely removed with zero fabric damage. Outstanding craftsmanship!",
  },
];

interface CustomerReviewsProps {
  reviews?: CustomerReview[];
  className?: string;
}

export function CustomerReviews({
  reviews = customerReviews,
  className,
}: CustomerReviewsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const animId = requestAnimationFrame(checkScroll);
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll, { passive: true });
      window.addEventListener("resize", checkScroll);
      return () => {
        cancelAnimationFrame(animId);
        container.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
    return () => cancelAnimationFrame(animId);
  }, [reviews]);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const card = scrollContainerRef.current.firstElementChild as HTMLElement;
      const scrollStep = card ? card.offsetWidth + 24 : 360;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollStep : scrollStep,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="reviews"
      className={cn(
        "relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 bg-[#F8F0E7]",
        className
      )}
      aria-label="What Our Customers Say"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================= */}
        {/* SECTION HEADER                                            */}
        {/* ========================================================= */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-14">
          {/* Accent Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E9D9C9]/70 border border-[#E9D9C9] text-[11px] font-semibold text-[#202020] uppercase tracking-wider mb-2.5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C74708]" />
            <span>Customer Reviews</span>
          </div>

          {/* Section Main Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold tracking-tight text-[#202020] leading-tight">
            What Our Customers <span className="text-[#C74708]">Say</span>
          </h2>

          {/* Section Subtitle */}
          <p className="mt-2.5 text-sm sm:text-base md:text-lg text-[#4F4F4F] leading-relaxed">
            Our customers&apos; experience means everything to us.
          </p>
        </div>

        {/* ========================================================= */}
        {/* ONE-LINE CAROUSEL WITH LEFT & RIGHT ARROWS                */}
        {/* ========================================================= */}
        <div className="relative">
          {/* Left Arrow Button (Desktop Side) */}
          <button
            type="button"
            onClick={() => handleScroll("left")}
            disabled={!canScrollLeft}
            aria-label="Previous reviews"
            className={cn(
              "hidden md:flex absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20",
              "w-11 h-11 rounded-full items-center justify-center",
              "bg-white border border-[#E9D9C9] text-[#202020]",
              "shadow-[0_4px_14px_rgba(32,32,32,0.08)]",
              "transition-all duration-200",
              "hover:bg-[#C74708] hover:text-white hover:border-[#C74708] hover:scale-105 active:scale-95",
              "disabled:opacity-25 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#202020] disabled:hover:scale-100"
            )}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Scrollable Track - One Horizontal Line */}
          <div
            ref={scrollContainerRef}
            className={cn(
              "flex gap-5 sm:gap-6 overflow-x-auto scroll-smooth py-3 px-1",
              "snap-x snap-mandatory items-stretch",
              "[&::-webkit-scrollbar]:hidden"
            )}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reviews.map((item) => (
              <div
                key={item.id}
                className={cn(
                  "flex-shrink-0 w-[280px] sm:w-[320px] md:w-[340px] lg:w-[350px] snap-start",
                  "group relative flex flex-col justify-between",
                  "p-6 sm:p-7 rounded-2xl",
                  "bg-white/95 backdrop-blur-sm hover:bg-white",
                  "border border-[#E9D9C9]",
                  "shadow-[0_4px_16px_rgba(32,32,32,0.03)]",
                  "hover:shadow-[0_12px_28px_rgba(199,71,8,0.08)]",
                  "hover:border-[#C74708]/35",
                  "transition-all duration-300 ease-out",
                  "hover:-translate-y-1"
                )}
              >
                <div>
                  {/* Top Row: Small Quote Icon + 5-Star Rating */}
                  <div className="flex items-center justify-between mb-4">
                    {/* Small Quote Icon */}
                    <div
                      className={cn(
                        "w-8 h-8 rounded-lg",
                        "bg-[#FDF2EC] text-[#C74708] border border-[#C74708]/15",
                        "flex items-center justify-center flex-shrink-0",
                        "transition-colors duration-200 group-hover:bg-[#C74708] group-hover:text-white"
                      )}
                      aria-hidden="true"
                    >
                      <svg
                        className="w-3.5 h-3.5 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>

                    {/* 5-Star Rating */}
                    <div
                      className="flex items-center gap-1"
                      aria-label={`${item.rating} out of 5 stars`}
                    >
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className={cn(
                            "w-4 h-4",
                            star <= item.rating
                              ? "text-[#F9C943] fill-[#F9C943]"
                              : "text-[#D8C2AC] fill-none stroke-current"
                          )}
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                          />
                        </svg>
                      ))}
                    </div>
                  </div>

                  {/* Short Customer Review */}
                  <p className="text-sm sm:text-[15px] text-[#4F4F4F] leading-relaxed">
                    &ldquo;{item.review}&rdquo;
                  </p>
                </div>

                {/* Bottom Customer Info & Verified Badge */}
                <div className="pt-3.5 mt-5 border-t border-[#E9D9C9]/70 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div
                      className="w-8 h-8 rounded-full bg-[#FDF2EC] border border-[#C74708]/15 text-[#C74708] font-bold text-xs flex items-center justify-center flex-shrink-0"
                      aria-hidden="true"
                    >
                      {getInitials(item.name)}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm font-semibold text-[#202020] truncate leading-tight">
                        {item.name}
                      </h4>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#C74708] bg-[#FDF2EC] px-2.5 py-0.5 rounded-full border border-[#C74708]/15 flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C74708]" />
                    Verified Order
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow Button (Desktop Side) */}
          <button
            type="button"
            onClick={() => handleScroll("right")}
            disabled={!canScrollRight}
            aria-label="Next reviews"
            className={cn(
              "hidden md:flex absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20",
              "w-11 h-11 rounded-full items-center justify-center",
              "bg-white border border-[#E9D9C9] text-[#202020]",
              "shadow-[0_4px_14px_rgba(32,32,32,0.08)]",
              "transition-all duration-200",
              "hover:bg-[#C74708] hover:text-white hover:border-[#C74708] hover:scale-105 active:scale-95",
              "disabled:opacity-25 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#202020] disabled:hover:scale-100"
            )}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        {/* ========================================================= */}
        {/* MOBILE & TABLET NAVIGATION ARROWS (Center Below)          */}
        {/* ========================================================= */}
        <div className="flex md:hidden items-center justify-center gap-3 mt-6">
          <button
            type="button"
            onClick={() => handleScroll("left")}
            disabled={!canScrollLeft}
            aria-label="Previous reviews"
            className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center",
              "bg-white border border-[#E9D9C9] text-[#202020] shadow-sm",
              "transition-all duration-200",
              "hover:bg-[#C74708] hover:text-white hover:border-[#C74708]",
              "disabled:opacity-25 disabled:cursor-not-allowed"
            )}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => handleScroll("right")}
            disabled={!canScrollRight}
            aria-label="Next reviews"
            className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center",
              "bg-white border border-[#E9D9C9] text-[#202020] shadow-sm",
              "transition-all duration-200",
              "hover:bg-[#C74708] hover:text-white hover:border-[#C74708]",
              "disabled:opacity-25 disabled:cursor-not-allowed"
            )}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default CustomerReviews;
