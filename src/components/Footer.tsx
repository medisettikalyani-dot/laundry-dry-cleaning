"use client";

import React from "react";
import Link from "next/link";
import { APMLogo } from "./APMLogo";

/**
 * APM Laundry & Dry Cleaning - Neat & Simple Footer
 *
 * Premium, clean, and compact 4-column layout without bulky cards:
 * - Column 1: APM Logo, short description, simple WhatsApp chat pill.
 * - Column 2: Quick Links (Home, About, Services, Gallery, Pricing, Contact).
 * - Column 3: Our Services (Wash & Fold, Wash & Iron, Dry Cleaning).
 * - Column 4: Contact Information (Phone/WhatsApp, Email/Booking, Address, Working Hours).
 * - Bottom Bar: Copyright 2026, "Website created by Edone Solutions", Back to top.
 */
export function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer
      className="bg-[#F0E5D8] text-[#202020] border-t border-[#DFD1C1]"
      aria-label="Footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        {/* ========================================================= */}
        {/* FOUR COLUMNS - CLEAN, NEAT & BALANCED                     */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          
          {/* COLUMN 1: BRAND */}
          <div>
            <Link
              href="/"
              aria-label="APM Laundry & Dry Cleaning Home"
              className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C74708] rounded-lg"
            >
              <APMLogo className="h-10 sm:h-11 w-auto" />
            </Link>

            <p className="mt-3 text-xs text-[#554E46] leading-relaxed max-w-xs">
              We care for your clothes with quality cleaning and reliable laundry services in Hyderabad.
            </p>

            {/* Simple, Neat WhatsApp Action Pill */}
            <a
              href="https://wa.me/?text=Hello%20APM%20Laundry%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with APM Laundry on WhatsApp"
              className="inline-flex items-center gap-2 mt-4 px-3 py-1.5 rounded-lg bg-white/90 hover:bg-white border border-[#DFD1C1] text-xs font-semibold text-[#202020] hover:text-[#C74708] hover:border-[#25D366] transition-all duration-200 shadow-xs group"
            >
              <span className="w-5 h-5 rounded-md bg-[#25D366] text-white flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </span>
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#202020] mb-3 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C74708]" />
              <span>Quick Links</span>
            </h3>

            <ul className="space-y-1.5">
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
                    className="text-xs sm:text-sm text-[#554E46] hover:text-[#C74708] transition-colors py-0.5 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: OUR SERVICES */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#202020] mb-3 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C74708]" />
              <span>Our Services</span>
            </h3>

            <ul className="space-y-1.5">
              {[
                { label: "Wash & Iron", href: "/#wash-and-iron" },
                { label: "Dry Cleaning", href: "/#dry-cleaning" },
              ].map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-xs sm:text-sm text-[#554E46] hover:text-[#C74708] transition-colors py-0.5 inline-block"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: CONTACT INFORMATION */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#202020] mb-3 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C74708]" />
              <span>Contact Information</span>
            </h3>

            <ul className="space-y-2.5 text-xs text-[#554E46]">
              {/* Phone / WhatsApp */}
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#C74708] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <div>
                  <a
                    href="https://wa.me/?text=Hello%20APM%20Laundry%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#202020] hover:text-[#C74708] transition-colors"
                  >
                    Chat on WhatsApp (+91)
                  </a>
                </div>
              </li>

              {/* Email / Online Booking */}
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#C74708] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <div>
                  <Link
                    href="/#contact"
                    className="font-medium text-[#202020] hover:text-[#C74708] transition-colors"
                  >
                    Service Booking &amp; Inquiry
                  </Link>
                </div>
              </li>

              {/* Business Address */}
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#C74708] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>Hyderabad, Telangana &bull; Doorstep Pickup &amp; Delivery</span>
              </li>

              {/* Working Hours */}
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#C74708] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Scheduled Pickups &bull; 24/7 Booking</span>
              </li>
            </ul>
          </div>

        </div>

        {/* ========================================================= */}
        {/* BOTTOM DIVIDER & CREDITS - CLEAN & COMPACT                */}
        {/* ========================================================= */}
        <div className="border-t border-[#DFD1C1] mt-8 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6B6158]">
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
