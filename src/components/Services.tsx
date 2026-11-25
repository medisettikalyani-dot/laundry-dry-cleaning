"use client";

import React, { useRef, useState, useEffect, useMemo } from "react";
import { ServiceCard } from "./services/ServiceCard";
import { servicesList, type ServiceCategory } from "./services/servicesData";
import { cn } from "@/lib/utils";

interface CategoryTab {
  id: ServiceCategory;
  label: string;
}

export function Services() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>("all");
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Clean Category Tabs for 9 Services
  const categories: CategoryTab[] = useMemo(
    () => [
      { id: "all", label: "All Services" },
      { id: "laundry", label: "Daily Laundry" },
      { id: "dryclean", label: "Dry Clean & Press" },
      { id: "home", label: "Shoe & Carpet Care" },
    ],
    []
  );

  // Filtered Services
  const filteredServices = useMemo(() => {
    if (activeCategory === "all") return servicesList;
    return servicesList.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  // Scroll Position Check
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
  }, [filteredServices]);

  // Handle Tab Switch
  const handleCategoryChange = (cat: ServiceCategory) => {
    setActiveCategory(cat);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  // Scroll Step Handler
  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const card = scrollContainerRef.current.firstElementChild as HTMLElement;
      const scrollStep = card ? card.offsetWidth + 20 : 340;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollStep : scrollStep,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="services"
      className="relative overflow-hidden py-12 sm:py-16 md:py-20 bg-[#F4F8FA]"
      aria-label="Our Laundry & Dry Cleaning Services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header: Clean, Simple & Direct */}
        <div className="flex items-center justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1E293B]">
              Our Services
            </h2>
          </div>

          {/* Arrow Controls for all screen sizes */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={() => handleScroll("left")}
              disabled={!canScrollLeft}
              aria-label="Previous service"
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
              aria-label="Next service"
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

        {/* Clean, Simple Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6 no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategoryChange(cat.id)}
                className={cn(
                  "min-h-[36px] px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-150",
                  isActive
                    ? "bg-[#1D6F9E] text-white shadow-xs"
                    : "bg-white text-[#64748B] border border-[#E2EDF3] hover:text-[#1E293B] hover:border-slate-300"
                )}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Carousel Track with no-scrollbar */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            tabIndex={0}
            role="region"
            aria-label="Main services carousel"
            className="flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 pt-1 no-scrollbar focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6F9E] rounded-2xl"
          >
            {filteredServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
