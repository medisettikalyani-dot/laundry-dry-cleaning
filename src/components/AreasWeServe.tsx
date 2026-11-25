import React from "react";
import { siteConfig } from "@/lib/seoConfig";

export function AreasWeServe() {
  return (
    <section
      id="areas-served"
      className="relative overflow-hidden py-12 sm:py-16 md:py-20 bg-[#F4F8FA] border-t border-[#E2EDF3]"
      aria-label="Areas We Serve in Hyderabad"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1E293B]">
            Areas We Serve in Hyderabad
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#475569] [text-wrap:pretty]">
            We provide doorstep pickup and delivery across major neighborhoods and business areas in Hyderabad.
          </p>
        </div>

        {/* Hyderabad Area Pills / Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 sm:gap-3.5 md:gap-4">
          {siteConfig.areasServed.map((area) => (
            <div
              key={area}
              className="flex items-center gap-2 sm:gap-2.5 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white border border-[#E2EDF3] shadow-xs hover:border-[#1D6F9E] transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-[#74A72E] flex-shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-[#1E293B] truncate">
                {area}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AreasWeServe;
