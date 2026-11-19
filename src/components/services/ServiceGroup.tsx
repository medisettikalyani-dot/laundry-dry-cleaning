import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { GarmentCard } from "./GarmentCard";
import type { ServiceData } from "./servicesData";

interface ServiceGroupProps {
  service: ServiceData;
}

export function ServiceGroup({ service }: ServiceGroupProps) {
  const isOrange = service.accent === "orange";

  return (
    <div id={service.id} className="space-y-5 sm:space-y-6">
      {/* =========================================================== */}
      {/* 1. BIG HERO CARD (ONLY the Service Name ON the Image)       */}
      {/* =========================================================== */}
      <div
        className={cn(
          "relative w-full aspect-[16/10] sm:aspect-[21/9] md:aspect-[2.35/1] min-h-[320px] sm:min-h-[380px] md:min-h-[420px]",
          "rounded-2xl sm:rounded-3xl lg:rounded-[32px] overflow-hidden",
          "border border-[#E9D9C9]",
          "shadow-[0_12px_36px_rgba(32,32,32,0.06)]",
          "bg-[#F8F0E7]",
          "group"
        )}
      >
        {/* Full Bright Photo */}
        <Image
          src={service.photoSrc}
          alt={service.photoAlt}
          fill
          sizes="(max-width: 1200px) 100vw, 1152px"
          className="object-cover object-center group-hover:scale-[1.015] transition-transform duration-700 ease-out"
        />

        {/* ONLY the Service Name ON the Image */}
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
          <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-2xl backdrop-blur-md bg-white/90 border border-white/80 shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
            <span
              className={cn(
                "w-2.5 h-2.5 rounded-full animate-pulse",
                isOrange ? "bg-[#C74708]" : "bg-[#2869AE]"
              )}
            />
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-[#202020]">
              {service.title}
            </h3>
          </div>
        </div>
      </div>

      {/* =========================================================== */}
      {/* 2. SEPARATE SMALL CARDS CONTAINER (Kept Separately)         */}
      {/* =========================================================== */}
      <div
        className={cn(
          "rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6",
          "bg-white/85 backdrop-blur-sm",
          "border border-[#E9D9C9]",
          "shadow-[0_8px_28px_rgba(32,32,32,0.03)]"
        )}
      >
        {/* Subheading Header */}
        <div className="flex items-center justify-between mb-3.5 sm:mb-4">
          <div className="flex items-center gap-2.5">
            <span
              className={cn(
                "w-1.5 h-5 sm:h-6 rounded-full",
                isOrange ? "bg-[#C74708]" : "bg-[#2869AE]"
              )}
            />
            <h4 className="text-base sm:text-lg md:text-xl font-bold text-[#202020] tracking-tight">
              {service.garmentsHeading}
            </h4>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-[#787878] hidden sm:inline">
              {service.garments.length} Garment Categories
            </span>
            <Link
              href="#contact"
              className={cn(
                "text-xs font-bold px-3 py-1.5 rounded-full transition-colors",
                isOrange
                  ? "bg-[#C74708]/10 text-[#C74708] hover:bg-[#C74708] hover:text-white"
                  : "bg-[#2869AE]/10 text-[#2869AE] hover:bg-[#2869AE] hover:text-white"
              )}
            >
              Order Now &rarr;
            </Link>
          </div>
        </div>

        {/* 11 Small 3D Garment Cards */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-2 sm:gap-2.5 md:gap-3">
          {service.garments.map((garment, idx) => (
            <GarmentCard
              key={`${service.id}-${garment.id}`}
              garment={garment}
              accent={service.accent}
              index={idx}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceGroup;
