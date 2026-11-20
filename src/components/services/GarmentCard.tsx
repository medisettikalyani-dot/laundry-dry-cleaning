import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { GarmentItem } from "./servicesData";

interface GarmentCardProps {
  garment: GarmentItem;
  accent: "orange" | "blue";
  index?: number;
}

export function GarmentCard({ garment, accent }: GarmentCardProps) {
  const isOrange = accent === "orange";

  return (
    <Link
      href="#contact"
      aria-label={`Book ${garment.name} care service`}
      className={cn(
        "group relative flex flex-col items-center justify-between",
        "p-3 rounded-2xl",
        "bg-white hover:bg-[#FCF8F3]",
        "border border-[#E9D9C9]",
        "shadow-sm hover:shadow-md",
        "transition-all duration-200 motion-reduce:transition-none motion-reduce:transform-none",
        "hover:-translate-y-1 cursor-pointer focus:outline-none focus-visible:ring-2 min-h-[120px]",
        isOrange
          ? "hover:border-[#C74708] focus-visible:ring-[#C74708]"
          : "hover:border-[#2869AE] focus-visible:ring-[#2869AE]"
      )}
    >
      {/* Garment Image Stage */}
      <div
        className={cn(
          "relative w-full aspect-square rounded-xl overflow-hidden",
          "bg-[#FAF5EF] border border-[#E9D9C9]",
          "flex items-center justify-center p-2",
          "transition-colors duration-200"
        )}
      >
        <Image
          src={garment.image}
          alt={`${garment.name} cleaning and fabric care`}
          fill
          sizes="(max-width: 640px) 100px, 140px"
          className="object-contain p-1 transition-transform duration-300 group-hover:scale-105 motion-reduce:transform-none"
        />
      </div>

      {/* Garment Name */}
      <div className="mt-2 text-center w-full px-1">
        <span
          className="block text-sm font-semibold text-[#202020] truncate"
          title={garment.name}
        >
          {garment.name}
        </span>
      </div>
    </Link>
  );
}

export default GarmentCard;
