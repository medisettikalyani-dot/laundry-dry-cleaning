"use client";

import React from "react";
import Link from "next/link";
import { APMLogo } from "./APMLogo";

/**
 * APM Laundry & Dry Cleaning - Footer
 *
 * Clean, balanced, and mobile-optimized:
 * - Mobile: Brand at top, symmetrical 2-column navigation (Quick Links & Our Services),
 *   followed by a clean Contact section with compact icon chips.
 * - Desktop: Balanced 4 columns across the grid.
 * - Bottom Bar: Copyright, Terms & Privacy, Edone Solutions credit, and Back to top,
 *   with comfortable bottom clearance (pb-28 on mobile) so floating buttons never block content.
 */
export function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer
      className="bg-[#EFE4D6] text-[#202020] border-t border-[#DECDBD]"
      aria-label="Footer"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-28 sm:pb-10">
        {/* ========================================================= */}
        {/* MAIN FOOTER GRID                                          */}
        {/* Mobile: 2-column grid | Desktop: 4-column grid            */}
        {/* ========================================================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          
          {/* BRAND COLUMN (Full width on mobile, 1 col on desktop) */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              aria-label="APM Laundry & Dry Cleaning Home"
              className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C74708] rounded-lg"
            >
              <APMLogo className="h-10 sm:h-11 w-auto" />
            </Link>

            <p className="mt-2.5 text-xs text-[#554E46] leading-relaxed max-w-sm">
              We care for your clothes with quality cleaning and reliable laundry services across Hyderabad.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="col-span-1">
            <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#8A7565] mb-2.5">
              Quick Links
            </h3>
            <ul className="space-y-1.5 text-xs">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/#about" },
                { label: "Services", href: "/#services" },
                { label: "Gallery", href: "/#gallery" },
                { label: "Contact", href: "/#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#202020] hover:text-[#C74708] transition-colors py-0.5 inline-block font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* OUR SERVICES */}
          <div className="col-span-1">
            <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#8A7565] mb-2.5">
              Our Services
            </h3>
            <ul className="space-y-1.5 text-xs">
              {[
                { label: "Wash & Iron", href: "/#wash-and-iron" },
                { label: "Dry Cleaning", href: "/#dry-cleaning" },
                { label: "Doorstep Pickup", href: "/#why-choose-apm" },
                { label: "Garment Care", href: "/#services" },
              ].map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-[#202020] hover:text-[#C74708] transition-colors py-0.5 inline-block font-medium"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFORMATION (Full width on mobile, 1 col on desktop) */}
          <div className="col-span-2 md:col-span-1 pt-4 md:pt-0 border-t border-[#DFD1C1]/70 md:border-t-0">
            <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#8A7565] mb-2.5">
              Contact Information
            </h3>
            <ul className="space-y-2.5 text-xs text-[#202020]">
              {/* WhatsApp */}
              <li>
                <a
                  href="https://wa.me/?text=Hello%20APM%20Laundry%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#C74708] transition-colors font-medium group"
                >
                  <span className="w-5 h-5 rounded-md bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </span>
                  <span>Chat on WhatsApp (+91)</span>
                </a>
              </li>

              {/* Booking */}
              <li>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 hover:text-[#C74708] transition-colors font-medium group"
                >
                  <span className="w-5 h-5 rounded-md bg-[#FFF0E6] text-[#C74708] border border-[#F3D5C3] flex items-center justify-center flex-shrink-0 group-hover:bg-[#C74708] group-hover:text-white transition-colors">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </span>
                  <span>Service Booking &amp; Inquiry</span>
                </Link>
              </li>

              {/* Address */}
              <li className="flex items-center gap-2 text-[#554E46]">
                <span className="w-5 h-5 rounded-md bg-[#E5D8C8] text-[#7A6A5C] flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </span>
                <span>Hyderabad, Telangana &bull; Doorstep Pickup</span>
              </li>

              {/* Hours */}
              <li className="flex items-center gap-2 text-[#554E46]">
                <span className="w-5 h-5 rounded-md bg-[#E5D8C8] text-[#7A6A5C] flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <span>Scheduled Pickups &bull; 24/7 Booking</span>
              </li>
            </ul>
          </div>

        </div>

        {/* ========================================================= */}
        {/* BOTTOM DIVIDER & CREDITS                                  */}
        {/* ========================================================= */}
        <div className="border-t border-[#DECDBD] mt-8 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6B6158]">
          {/* Copyright & Legal */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p>
              &copy; 2026 APM Laundry &amp; Dry Cleaning. All rights reserved.
            </p>
            <div className="flex items-center gap-3 text-[11px] text-[#7A7268]">
              <Link href="/terms" className="hover:text-[#C74708] underline transition-colors">
                Terms
              </Link>
              <span>&bull;</span>
              <Link href="/privacy" className="hover:text-[#C74708] underline transition-colors">
                Privacy
              </Link>
            </div>
          </div>

          {/* Edone Solutions Credit */}
          <p className="text-center">
            Website created by{" "}
            <a
              href="https://www.edonesolution.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Website created by Edone Solutions"
              className="font-semibold text-[#202020] hover:text-[#C74708] underline underline-offset-2 decoration-[#C74708]/40 hover:decoration-[#C74708] transition-colors"
            >
              Edone Solutions
            </a>
          </p>

          {/* Back to top */}
          <div className="pr-0 sm:pr-14 lg:pr-0">
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top of page"
              className="hover:text-[#C74708] transition-colors flex items-center gap-1 font-medium"
            >
              <span>Back to top</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
