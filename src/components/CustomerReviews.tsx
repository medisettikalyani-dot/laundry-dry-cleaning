"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export interface CustomerReview {
  id: string;
  name: string;
  area?: string;
  rating: number;
  review: string;
  timeAgo: string;
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
    rating: 5,
    review:
      "Got my 3-piece suit and sherwani dry cleaned for a family wedding. Flawless finish, perfectly steam pressed, and delivered right on time.",
    timeAgo: "2 weeks ago",
  },
  {
    id: "review-2",
    name: "Priya Sharma",
    rating: 5,
    review:
      "Regular wash and iron service is fantastic. My office shirts and daily kurtas always come back crisp, neatly packed, and fresh.",
    timeAgo: "1 month ago",
  },
  {
    id: "review-3",
    name: "Karthik Subramanian",
    rating: 5,
    review:
      "The doorstep pickup and delivery is super convenient. They took great care of our clothes and delivered everything right on time. Highly recommended!",
    timeAgo: "3 weeks ago",
  },
  {
    id: "review-4",
    name: "Ananya Rao",
    rating: 5,
    review:
      "Handled my pure silk sarees with great care. The fabric feels soft, colors look vibrant, and the pleats are neat and crisp.",
    timeAgo: "1 month ago",
  },
  {
    id: "review-5",
    name: "Rohit Varma",
    rating: 5,
    review:
      "Best everyday laundry service. Clothes smell clean, neatly sorted, and folded ready for the closet. Saves me hours every single week.",
    timeAgo: "2 months ago",
  },
  {
    id: "review-6",
    name: "Dr. Meera Nair",
    rating: 5,
    review:
      "Sent heavy winter coats and woolen blazers for dry cleaning. Stains were completely removed with zero fabric damage. Outstanding service.",
    timeAgo: "2 months ago",
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
        "relative overflow-hidden py-12 sm:py-16 md:py-20 bg-[#F4F8FA]",
        className
      )}
      aria-label="Customer Reviews"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Arrow Controls */}
        <div className="flex items-center justify-between gap-4 mb-8 sm:mb-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1E293B]">
              Customer Reviews
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#475569] [text-wrap:pretty]">
              Read what our customers across Hyderabad have to say about our service.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              type="button"
              onClick={() => handleScroll("left")}
              disabled={!canScrollLeft}
              aria-label="Previous reviews"
              className={cn(
                "w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border transition-all duration-150",
                canScrollLeft
                  ? "bg-white text-[#1E293B] border-[#E2EDF3] hover:border-[#1D6F9E] hover:text-[#1D6F9E] active:scale-95 shadow-2xs"
                  : "bg-white/40 text-slate-300 border-[#E2EDF3]/50 cursor-not-allowed"
              )}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => handleScroll("right")}
              disabled={!canScrollRight}
              aria-label="Next reviews"
              className={cn(
                "w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border transition-all duration-150",
                canScrollRight
                  ? "bg-white text-[#1E293B] border-[#E2EDF3] hover:border-[#1D6F9E] hover:text-[#1D6F9E] active:scale-95 shadow-2xs"
                  : "bg-white/40 text-slate-300 border-[#E2EDF3]/50 cursor-not-allowed"
              )}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel / Card Track */}
        <div className="relative">
          {/* Scrollable Track */}
          <div
            ref={scrollContainerRef}
            className={cn(
              "flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto scroll-smooth py-2 px-1",
              "snap-x snap-mandatory items-stretch no-scrollbar"
            )}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reviews.map((item) => (
              <div
                key={item.id}
                className={cn(
                  "flex-shrink-0 w-[82vw] max-w-[320px] sm:w-[320px] md:w-[340px] snap-start",
                  "flex flex-col justify-between",
                  "p-5 sm:p-6 rounded-2xl",
                  "bg-white border border-[#E2EDF3]",
                  "shadow-xs hover:shadow-md transition-shadow duration-200"
                )}
              >
                <div>
                  {/* Top Row: Stars + Time */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div
                      className="flex items-center gap-1"
                      aria-label={`${item.rating} out of 5 stars`}
                    >
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-4 h-4 text-[#EAB308] fill-[#EAB308]"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                          />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-[#64748B]">{item.timeAgo}</span>
                  </div>

                  {/* Customer Review text */}
                  <p className="text-sm sm:text-base text-[#1E293B] leading-relaxed [text-wrap:pretty]">
                    &ldquo;{item.review}&rdquo;
                  </p>
                </div>

                {/* Bottom Reviewer Info: H3 for heading order */}
                <div className="pt-4 mt-4 border-t border-[#E2EDF3] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div
                      className="w-9 h-9 rounded-full bg-[#EBF5FA] border border-[#E2EDF3] text-[#1E293B] font-bold text-sm flex items-center justify-center flex-shrink-0"
                      aria-hidden="true"
                    >
                      {getInitials(item.name)}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold text-[#1E293B] truncate">
                        {item.name}
                      </h3>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-[#64748B] flex items-center gap-1">
                    Google Review
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomerReviews;
