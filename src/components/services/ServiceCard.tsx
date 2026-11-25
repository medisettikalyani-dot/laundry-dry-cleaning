"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/seoConfig";
import type { ServiceItem } from "./servicesData";

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const bookingUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    `Hello APM Laundry! I would like to book the "${service.title}" service.`
  )}`;

  return (
    <article
      id={service.id}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden",
        "w-[82vw] max-w-[320px] sm:w-[300px] md:w-[320px] lg:w-[340px] shrink-0 snap-start",
        "rounded-2xl bg-white border border-[#E2EDF3]",
        "shadow-xs hover:shadow-md transition-all duration-200",
        "hover:-translate-y-1 hover:border-[#1D6F9E]/40"
      )}
    >
      <div>
        {/* Simple & Crisp Image */}
        <div className="relative w-full aspect-[16/10] bg-[#F1F5F9] overflow-hidden">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            sizes="(max-width: 640px) 82vw, (max-width: 1024px) 310px, 340px"
            className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transform-none"
            priority={index < 3}
          />
        </div>

        {/* Card Content: Simple, Neat & Breathable */}
        <div className="p-4 sm:p-5">
          {/* Title */}
          <h3 className="text-lg font-bold tracking-tight text-[#1E293B] group-hover:text-[#1D6F9E] transition-colors mb-1.5">
            {service.title}
          </h3>

          {/* Short 1-Line Description */}
          <p className="text-sm text-[#64748B] leading-relaxed line-clamp-2">
            {service.shortDescription}
          </p>
        </div>
      </div>

      {/* Clean Booking Action */}
      <div className="px-4 pb-4 sm:px-5 sm:pb-5">
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full min-h-[42px] px-4 py-2.5 rounded-xl text-sm font-semibold text-[#1D6F9E] bg-[#EBF5FA] hover:bg-[#1D6F9E] hover:text-white transition-all duration-150 inline-flex items-center justify-center gap-2 group/btn"
        >
          <span>Book Service</span>
          <svg
            className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </a>
      </div>
    </article>
  );
}

export default ServiceCard;
