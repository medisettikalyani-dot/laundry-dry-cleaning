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
        "p-2 sm:p-2.5 rounded-xl sm:rounded-2xl",
        "bg-[#FCF9F5]/90 hover:bg-white",
        "border border-[#E9D9C9]/85",
        "shadow-[0_2px_6px_rgba(32,32,32,0.02)]",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1.5 cursor-pointer focus:outline-none focus-visible:ring-2",
        isOrange
          ? "hover:border-[#C74708]/50 hover:shadow-[0_8px_20px_rgba(199,71,8,0.1)] focus-visible:ring-[#C74708]"
          : "hover:border-[#2869AE]/50 hover:shadow-[0_8px_20px_rgba(40,105,174,0.1)] focus-visible:ring-[#2869AE]"
      )}
    >
      {/* 3D Garment Display Stage */}
      <div
        className={cn(
          "relative w-full aspect-square rounded-lg sm:rounded-xl overflow-hidden",
          "bg-white/80 border border-[#E9D9C9]/50",
          "flex items-center justify-center p-1.5",
          "transition-all duration-300 ease-out",
          isOrange
            ? "group-hover:bg-[#FFF6F0] group-hover:border-[#C74708]/25"
            : "group-hover:bg-[#F3F8FD] group-hover:border-[#2869AE]/25"
        )}
      >
        <Image
          src={garment.image}
          alt={`${garment.name} - Professional Laundry & Dry Cleaning`}
          fill
          sizes="(max-width: 640px) 70px, (max-width: 1024px) 90px, 110px"
          className="object-contain p-0.5 transition-transform duration-300 ease-out group-hover:scale-110 drop-shadow-[0_4px_8px_rgba(32,32,32,0.1)]"
        />
      </div>

      {/* Clean Garment Label */}
      <span
        className={cn(
          "mt-1.5 sm:mt-2 text-[11px] sm:text-xs font-bold tracking-tight text-center leading-tight",
          "text-[#202020] transition-colors duration-200 line-clamp-1 w-full px-0.5",
          isOrange ? "group-hover:text-[#C74708]" : "group-hover:text-[#2869AE]"
        )}
        title={garment.name}
      >
        {garment.name}
      </span>
    </Link>
  );
}

export default GarmentCard;
