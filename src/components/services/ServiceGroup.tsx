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
    <div id={service.id} className="scroll-mt-24 space-y-5">
      {/* Service Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#202020]">
            {service.title}
          </h3>
          <p className="mt-1 text-sm sm:text-base text-[#4F4F4F] max-w-2xl [text-wrap:pretty]">
            {service.subtitle}
          </p>
        </div>
        <div className="flex items-center gap-3 self-start md:self-auto text-sm">
          <span className="px-3.5 py-1.5 rounded-xl bg-[#E9D9C9] text-[#202020] font-semibold">
            {service.turnaround}
          </span>
        </div>
      </div>

      {/* Hero Image Container without text pills */}
      <div
        className={cn(
          "relative w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[2.4/1] min-h-[260px] sm:min-h-[320px]",
          "rounded-2xl sm:rounded-3xl overflow-hidden",
          "border border-[#E9D9C9] bg-[#E9D9C9] shadow-sm"
        )}
      >
        <Image
          src={service.photoSrc}
          alt={service.photoAlt}
          fill
          sizes="(max-width: 1200px) 100vw, 1152px"
          className="object-cover object-center"
        />
      </div>

      {/* Garments Container with solid background */}
      <div className="rounded-2xl sm:rounded-3xl p-5 sm:p-6 bg-white border border-[#E9D9C9] shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <span
              className={cn(
                "w-2 h-6 rounded-full",
                isOrange ? "bg-[#C74708]" : "bg-[#2869AE]"
              )}
            />
            <h4 className="text-lg sm:text-xl font-bold text-[#202020]">
              {service.garmentsHeading}
            </h4>
          </div>

          <Link
            href="#contact"
            className={cn(
              "min-h-[44px] px-4 inline-flex items-center justify-center text-sm font-bold rounded-xl transition-colors",
              isOrange
                ? "bg-[#C74708] text-white hover:bg-[#AF3C05]"
                : "bg-[#2869AE] text-white hover:bg-[#215792]"
            )}
          >
            Book {service.title}
          </Link>
        </div>

        {/* Garment Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
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
