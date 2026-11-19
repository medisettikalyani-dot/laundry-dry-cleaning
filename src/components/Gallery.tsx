import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface GalleryPhoto {
  id: string;
  title: string;
  alt: string;
  src: string;
}

const galleryPhotos: Record<string, GalleryPhoto> = {
  washing: {
    id: "washing",
    title: "Washing Clothes",
    alt: "Gentle front-load washing machine cycle with water and fabric care",
    src: "/images/gallery/gallery-washing.jpg",
  },
  ironing: {
    id: "ironing",
    title: "Professional Ironing",
    alt: "Professional steam ironing of a crisp white cotton shirt",
    src: "/images/gallery/gallery-ironing.jpg",
  },
  folded: {
    id: "folded",
    title: "Neatly Folded Clothes",
    alt: "Pristine stack of freshly folded pastel towels and cotton shirts",
    src: "/images/gallery/gallery-folded.jpg",
  },
  dryCleaning: {
    id: "dry-cleaning",
    title: "Dry Cleaning Garments",
    alt: "Tailored suits and fine garments on wooden hangers in boutique atelier",
    src: "/images/gallery/gallery-dry-cleaning.jpg",
  },
  equipment: {
    id: "equipment",
    title: "Modern Laundry Equipment",
    alt: "Sleek row of commercial stainless-steel washing and finishing machines",
    src: "/images/gallery/gallery-equipment.jpg",
  },
  fabricCare: {
    id: "fabric-care",
    title: "Fabric Care",
    alt: "Gentle hand inspection of delicate cashmere and silk fabric weave",
    src: "/images/gallery/gallery-fabric-care.jpg",
  },
  delivery: {
    id: "delivery",
    title: "Fresh Clothes Ready for Delivery",
    alt: "Fresh clothes packaged with protective covers and ribbons ready for delivery",
    src: "/images/gallery/gallery-delivery.jpg",
  },
};

export function Gallery() {
  const { washing, ironing, folded, dryCleaning, equipment, fabricCare, delivery } = galleryPhotos;

  return (
    <section
      id="gallery"
      className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28 bg-[#F8F0E7]"
      aria-label="Our Gallery - A Closer Look at Our Care"
    >
      {/* ========================================================= */}
      {/* 1. BACKGROUND TYPOGRAPHY WATERMARKS & ACCENTS              */}
      {/* Editorial typography layered subtly behind the photos      */}
      {/* ========================================================= */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,rgba(253,242,236,0.85),rgba(248,240,231,1))]"
        aria-hidden="true"
      />

      {/* Top Right Subtle Serif Watermark */}
      <div
        className="pointer-events-none absolute -top-4 sm:top-4 right-4 sm:right-8 lg:right-16 select-none z-0"
        aria-hidden="true"
      >
        <span
          className="font-serif italic text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-light tracking-[0.25em] text-[#C74708]/[0.05] uppercase leading-none"
          style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Didot, 'Bodoni MT', Georgia, serif" }}
        >
          FRESHNESS
        </span>
      </div>

      {/* Bottom Left Subtle Serif Watermark */}
      <div
        className="pointer-events-none absolute -bottom-4 sm:bottom-4 left-4 sm:left-8 lg:left-16 select-none z-0"
        aria-hidden="true"
      >
        <span
          className="font-serif italic text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-light tracking-[0.25em] text-[#202020]/[0.035] uppercase leading-none"
          style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Didot, 'Bodoni MT', Georgia, serif" }}
        >
          EVERY FOLD
        </span>
      </div>

      {/* Large Center Background Outlined / Shaded Editorial Typography */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none overflow-hidden z-0"
        aria-hidden="true"
      >
        {/* Left Side Layered Text (intertwined behind columns 2 & 3) */}
        <div className="hidden lg:block absolute left-1/2 -translate-x-[62%] top-[48%] -translate-y-1/2">
          <span
            className="block font-serif italic text-7xl xl:text-8xl 2xl:text-9xl font-normal tracking-[0.14em] text-[#202020]/[0.05] uppercase whitespace-nowrap"
            style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Didot, 'Bodoni MT', Georgia, serif" }}
          >
            FRESHNESS
          </span>
        </div>

        {/* Right Side Layered Text (intertwined behind columns 3 & 4) */}
        <div className="hidden lg:block absolute left-1/2 -translate-x-[36%] top-[56%] -translate-y-1/2">
          <span
            className="block font-serif italic text-6xl xl:text-7xl 2xl:text-8xl font-light tracking-[0.18em] text-[#C74708]/[0.05] uppercase whitespace-nowrap"
            style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Didot, 'Bodoni MT', Georgia, serif" }}
          >
            IN EVERY FOLD
          </span>
        </div>

        {/* Ambient Subtle Outlined Headline Banner Across the Entire Row */}
        <span
          className="text-[9vw] font-serif uppercase tracking-[0.2em] font-bold text-transparent select-none leading-none opacity-40"
          style={{
            fontFamily: "'Playfair Display', 'Cormorant Garamond', Didot, 'Bodoni MT', Georgia, serif",
            WebkitTextStroke: "1px rgba(32, 32, 32, 0.05)",
          }}
        >
          FRESHNESS IN EVERY FOLD
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* ========================================================= */}
        {/* 2. SECTION HEADER                                         */}
        {/* ========================================================= */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          {/* Eyebrow Label Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E9D9C9]/70 border border-[#E9D9C9] text-[11px] font-semibold text-[#202020] uppercase tracking-wider mb-2.5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C74708]" />
            <span>OUR GALLERY</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold tracking-tight text-[#202020] leading-tight">
            A Closer Look at <span className="text-[#C74708]">Our Care</span>
          </h2>

          {/* Decorative Orange Accent Line */}
          <div className="w-10 h-1 bg-[#C74708] rounded-full mx-auto mt-3 mb-3.5" />

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-[#4F4F4F] leading-relaxed max-w-md mx-auto">
            Every garment receives the attention and care it deserves.
          </p>
        </div>

        {/* ========================================================= */}
        {/* 3. ASYMMETRICAL EDITORIAL COLLAGE                         */}
        {/* Desktop: 5-column asymmetrical layout inspired by ref     */}
        {/* Tablet: Balanced 12-col / 2-tier editorial collage       */}
        {/* Mobile: Clean 2-col image layout without overflow        */}
        {/* ========================================================= */}

        {/* --------------------------------------------------------- */}
        {/* A. DESKTOP VIEW (lg and above: 1024px+)                   */}
        {/* 5 Distinct Columns:                                       */}
        {/* Col 1: Medium-height (offset lower)                       */}
        {/* Col 2: 2 stacked images (starts high)                     */}
        {/* Col 3: Prominent large vertical center hero (tallest)     */}
        {/* Col 4: 2 stacked images (starts high)                     */}
        {/* Col 5: Medium-height (offset lower)                       */}
        {/* --------------------------------------------------------- */}
        <div className="hidden lg:flex items-start justify-center gap-3.5 xl:gap-4.5 w-full">
          {/* COLUMN 1 (Far Left): One medium-height laundry photo, offset lower */}
          <div className="w-[18%] flex-shrink-0 pt-16 xl:pt-20">
            <div
              className={cn(
                "group relative w-full h-[390px] xl:h-[430px]",
                "rounded-2xl xl:rounded-3xl overflow-hidden",
                "shadow-[0_10px_30px_rgba(32,32,32,0.08)] hover:shadow-[0_20px_40px_rgba(32,32,32,0.14)]",
                "border border-[#E9D9C9] bg-[#E9D9C9]/40",
                "transition-all duration-500 hover:-translate-y-1.5"
              )}
            >
              <Image
                src={washing.src}
                alt={washing.alt}
                fill
                sizes="(min-width: 1280px) 240px, (min-width: 1024px) 200px, 300px"
                className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          </div>

          {/* COLUMN 2 (Left-Middle): Two vertically arranged photos with different heights */}
          <div className="w-[19%] flex-shrink-0 flex flex-col gap-3.5 xl:gap-4.5 pt-3 xl:pt-4">
            {/* Top Photo: Professional Ironing (landscape/medium height) */}
            <div
              className={cn(
                "group relative w-full h-[225px] xl:h-[245px]",
                "rounded-2xl xl:rounded-3xl overflow-hidden",
                "shadow-[0_10px_30px_rgba(32,32,32,0.08)] hover:shadow-[0_20px_40px_rgba(32,32,32,0.14)]",
                "border border-[#E9D9C9] bg-[#E9D9C9]/40",
                "transition-all duration-500 hover:-translate-y-1.5"
              )}
            >
              <Image
                src={ironing.src}
                alt={ironing.alt}
                fill
                sizes="(min-width: 1280px) 260px, (min-width: 1024px) 210px, 300px"
                className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>

            {/* Bottom Photo: Neatly Folded Clothes (square/portrait) */}
            <div
              className={cn(
                "group relative w-full h-[215px] xl:h-[235px]",
                "rounded-2xl xl:rounded-3xl overflow-hidden",
                "shadow-[0_10px_30px_rgba(32,32,32,0.08)] hover:shadow-[0_20px_40px_rgba(32,32,32,0.14)]",
                "border border-[#E9D9C9] bg-[#E9D9C9]/40",
                "transition-all duration-500 hover:-translate-y-1.5"
              )}
            >
              <Image
                src={folded.src}
                alt={folded.alt}
                fill
                sizes="(min-width: 1280px) 260px, (min-width: 1024px) 210px, 300px"
                className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          </div>

          {/* COLUMN 3 (Center Hero): One large, prominent vertical photograph (Tallest) */}
          <div className="w-[23%] flex-shrink-0 pt-0">
            <div
              className={cn(
                "group relative w-full h-[520px] xl:h-[570px]",
                "rounded-2xl xl:rounded-3xl overflow-hidden",
                "shadow-[0_22px_55px_rgba(32,32,32,0.18)] hover:shadow-[0_28px_65px_rgba(199,71,8,0.22)]",
                "border-2 border-[#C74708]/40 hover:border-[#C74708]",
                "bg-[#E9D9C9]/50",
                "transition-all duration-500 hover:-translate-y-2 z-20"
              )}
            >
              <Image
                src={dryCleaning.src}
                alt={dryCleaning.alt}
                fill
                sizes="(min-width: 1280px) 320px, (min-width: 1024px) 270px, 400px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Subtle Ambient Vignette on Center Hero */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 opacity-60 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none" />
            </div>
          </div>

          {/* COLUMN 4 (Right-Middle): Two photographs arranged vertically */}
          <div className="w-[19%] flex-shrink-0 flex flex-col gap-3.5 xl:gap-4.5 pt-3 xl:pt-4">
            {/* Top Photo: Modern Laundry Equipment (taller portrait) */}
            <div
              className={cn(
                "group relative w-full h-[255px] xl:h-[280px]",
                "rounded-2xl xl:rounded-3xl overflow-hidden",
                "shadow-[0_10px_30px_rgba(32,32,32,0.08)] hover:shadow-[0_20px_40px_rgba(32,32,32,0.14)]",
                "border border-[#E9D9C9] bg-[#E9D9C9]/40",
                "transition-all duration-500 hover:-translate-y-1.5"
              )}
            >
              <Image
                src={equipment.src}
                alt={equipment.alt}
                fill
                sizes="(min-width: 1280px) 260px, (min-width: 1024px) 210px, 300px"
                className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>

            {/* Bottom Photo: Fabric Care (compact square) */}
            <div
              className={cn(
                "group relative w-full h-[185px] xl:h-[200px]",
                "rounded-2xl xl:rounded-3xl overflow-hidden",
                "shadow-[0_10px_30px_rgba(32,32,32,0.08)] hover:shadow-[0_20px_40px_rgba(32,32,32,0.14)]",
                "border border-[#E9D9C9] bg-[#E9D9C9]/40",
                "transition-all duration-500 hover:-translate-y-1.5"
              )}
            >
              <Image
                src={fabricCare.src}
                alt={fabricCare.alt}
                fill
                sizes="(min-width: 1280px) 260px, (min-width: 1024px) 210px, 300px"
                className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          </div>

          {/* COLUMN 5 (Far Right): One medium-height laundry photo, offset lower */}
          <div className="w-[18%] flex-shrink-0 pt-16 xl:pt-20">
            <div
              className={cn(
                "group relative w-full h-[390px] xl:h-[430px]",
                "rounded-2xl xl:rounded-3xl overflow-hidden",
                "shadow-[0_10px_30px_rgba(32,32,32,0.08)] hover:shadow-[0_20px_40px_rgba(32,32,32,0.14)]",
                "border border-[#E9D9C9] bg-[#E9D9C9]/40",
                "transition-all duration-500 hover:-translate-y-1.5"
              )}
            >
              <Image
                src={delivery.src}
                alt={delivery.alt}
                fill
                sizes="(min-width: 1280px) 240px, (min-width: 1024px) 200px, 300px"
                className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* --------------------------------------------------------- */}
        {/* B. TABLET VIEW (md to lg: 768px - 1023px)                 */}
        {/* Balanced 2-Tier Editorial Collage:                        */}
        {/* Tier 1: 3 cards (Left medium, Center Hero, Right medium)  */}
        {/* Tier 2: 4 cards in a harmonious 4-column balanced row    */}
        {/* --------------------------------------------------------- */}
        <div className="hidden md:flex lg:hidden flex-col gap-4">
          {/* Tier 1: 3 Featured Photos with Prominent Center Hero */}
          <div className="grid grid-cols-12 gap-4 items-center">
            {/* Left: Washing Clothes */}
            <div className="col-span-4 h-[280px]">
              <div className="group relative w-full h-full rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(32,32,32,0.08)] border border-[#E9D9C9] bg-[#E9D9C9]/40 transition-all duration-500 hover:-translate-y-1">
                <Image
                  src={washing.src}
                  alt={washing.alt}
                  fill
                  sizes="(max-width: 1023px) 33vw, 250px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>

            {/* Center Hero: Dry Cleaning (Taller, Prominent) */}
            <div className="col-span-4 h-[330px]">
              <div className="group relative w-full h-full rounded-2xl overflow-hidden shadow-[0_18px_45px_rgba(32,32,32,0.16)] border-2 border-[#C74708]/50 bg-[#E9D9C9]/40 transition-all duration-500 hover:-translate-y-1.5 z-10">
                <Image
                  src={dryCleaning.src}
                  alt={dryCleaning.alt}
                  fill
                  sizes="(max-width: 1023px) 34vw, 300px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-40 group-hover:opacity-75 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>

            {/* Right: Delivery Ready */}
            <div className="col-span-4 h-[280px]">
              <div className="group relative w-full h-full rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(32,32,32,0.08)] border border-[#E9D9C9] bg-[#E9D9C9]/40 transition-all duration-500 hover:-translate-y-1">
                <Image
                  src={delivery.src}
                  alt={delivery.alt}
                  fill
                  sizes="(max-width: 1023px) 33vw, 250px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Tier 2: 4 Balanced Photos in a clean 4-column row */}
          <div className="grid grid-cols-4 gap-4">
            {/* Ironing */}
            <div className="h-[190px]">
              <div className="group relative w-full h-full rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(32,32,32,0.06)] border border-[#E9D9C9] bg-[#E9D9C9]/40 transition-all duration-500 hover:-translate-y-1">
                <Image
                  src={ironing.src}
                  alt={ironing.alt}
                  fill
                  sizes="(max-width: 1023px) 25vw, 200px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>

            {/* Folded */}
            <div className="h-[190px]">
              <div className="group relative w-full h-full rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(32,32,32,0.06)] border border-[#E9D9C9] bg-[#E9D9C9]/40 transition-all duration-500 hover:-translate-y-1">
                <Image
                  src={folded.src}
                  alt={folded.alt}
                  fill
                  sizes="(max-width: 1023px) 25vw, 200px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>

            {/* Equipment */}
            <div className="h-[190px]">
              <div className="group relative w-full h-full rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(32,32,32,0.06)] border border-[#E9D9C9] bg-[#E9D9C9]/40 transition-all duration-500 hover:-translate-y-1">
                <Image
                  src={equipment.src}
                  alt={equipment.alt}
                  fill
                  sizes="(max-width: 1023px) 25vw, 200px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>

            {/* Fabric Care */}
            <div className="h-[190px]">
              <div className="group relative w-full h-full rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(32,32,32,0.06)] border border-[#E9D9C9] bg-[#E9D9C9]/40 transition-all duration-500 hover:-translate-y-1">
                <Image
                  src={fabricCare.src}
                  alt={fabricCare.alt}
                  fill
                  sizes="(max-width: 1023px) 25vw, 200px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* --------------------------------------------------------- */}
        {/* C. MOBILE VIEW (< 768px)                                  */}
        {/* Clean 2-column image layout without horizontal overflow   */}
        {/* Center hero spans both columns for visual prominence       */}
        {/* --------------------------------------------------------- */}
        <div className="block md:hidden">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {/* Item 1: Washing Clothes (Col 1) */}
            <div className="col-span-1 relative aspect-[3/3.8] rounded-2xl overflow-hidden shadow-sm border border-[#E9D9C9] bg-[#E9D9C9]/40 group">
              <Image
                src={washing.src}
                alt={washing.alt}
                fill
                sizes="(max-width: 767px) 50vw, 200px"
                className="object-cover object-center active:scale-105 transition-transform duration-500 ease-out"
              />
            </div>

            {/* Item 2: Professional Ironing (Col 2) */}
            <div className="col-span-1 relative aspect-[3/3.8] rounded-2xl overflow-hidden shadow-sm border border-[#E9D9C9] bg-[#E9D9C9]/40 group">
              <Image
                src={ironing.src}
                alt={ironing.alt}
                fill
                sizes="(max-width: 767px) 50vw, 200px"
                className="object-cover object-center active:scale-105 transition-transform duration-500 ease-out"
              />
            </div>

            {/* Item 3 (Center Hero): Dry Cleaning Garments (Spans both columns) */}
            <div className="col-span-2 relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_12px_32px_rgba(32,32,32,0.12)] border-2 border-[#C74708]/50 bg-[#E9D9C9]/50 group my-0.5">
              <Image
                src={dryCleaning.src}
                alt={dryCleaning.alt}
                fill
                sizes="(max-width: 767px) 100vw, 450px"
                className="object-cover object-center active:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Item 4: Neatly Folded Clothes */}
            <div className="col-span-1 relative aspect-[1/1] rounded-2xl overflow-hidden shadow-sm border border-[#E9D9C9] bg-[#E9D9C9]/40 group">
              <Image
                src={folded.src}
                alt={folded.alt}
                fill
                sizes="(max-width: 767px) 50vw, 200px"
                className="object-cover object-center active:scale-105 transition-transform duration-500 ease-out"
              />
            </div>

            {/* Item 5: Modern Laundry Equipment */}
            <div className="col-span-1 relative aspect-[1/1] rounded-2xl overflow-hidden shadow-sm border border-[#E9D9C9] bg-[#E9D9C9]/40 group">
              <Image
                src={equipment.src}
                alt={equipment.alt}
                fill
                sizes="(max-width: 767px) 50vw, 200px"
                className="object-cover object-center active:scale-105 transition-transform duration-500 ease-out"
              />
            </div>

            {/* Item 6: Fabric Care */}
            <div className="col-span-1 relative aspect-[1/1] rounded-2xl overflow-hidden shadow-sm border border-[#E9D9C9] bg-[#E9D9C9]/40 group">
              <Image
                src={fabricCare.src}
                alt={fabricCare.alt}
                fill
                sizes="(max-width: 767px) 50vw, 200px"
                className="object-cover object-center active:scale-105 transition-transform duration-500 ease-out"
              />
            </div>

            {/* Item 7: Fresh Clothes Ready for Delivery */}
            <div className="col-span-1 relative aspect-[1/1] rounded-2xl overflow-hidden shadow-sm border border-[#E9D9C9] bg-[#E9D9C9]/40 group">
              <Image
                src={delivery.src}
                alt={delivery.alt}
                fill
                sizes="(max-width: 767px) 50vw, 200px"
                className="object-cover object-center active:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
