import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/seoConfig";

export function AreasWeServe() {
  return (
    <section
      id="areas-served"
      className="relative overflow-hidden py-12 sm:py-16 md:py-20 bg-[#F8F0E7] border-t border-[#E9D9C9]"
      aria-label="Areas We Serve in Hyderabad"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#202020]">
            Areas We Serve in Hyderabad
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#4F4F4F] [text-wrap:pretty]">
            Prompt doorstep pickup and scheduled delivery across Hyderabad’s residential neighborhoods and business hubs.
          </p>
        </div>

        {/* Hyderabad Area Pills / Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
          {siteConfig.areasServed.map((area) => (
            <div
              key={area}
              className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-white border border-[#E9D9C9] shadow-sm hover:border-[#C74708] transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-[#C74708] flex-shrink-0" />
              <span className="text-sm font-semibold text-[#202020] truncate">
                {area}
              </span>
            </div>
          ))}
        </div>

        {/* Pickup Hours & Call to Action Bar */}
        <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-white border border-[#E9D9C9] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-[#202020]">
              Pickup &amp; Delivery Hours: 8:00 AM – 9:00 PM Daily
            </h3>
            <p className="mt-1 text-sm text-[#4F4F4F]">
              Standard 24 to 48-hour return with WhatsApp order updates.
            </p>
          </div>
          <Link
            href="#contact"
            className="min-h-[44px] px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-[#C74708] hover:bg-[#AF3C05] transition-colors self-start sm:self-auto inline-flex items-center justify-center"
          >
            Book Doorstep Pickup
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AreasWeServe;
