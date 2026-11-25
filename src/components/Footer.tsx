import React from "react";
import Link from "next/link";
import { APMLogo } from "./APMLogo";
import { siteConfig } from "@/lib/seoConfig";

export function Footer() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hello APM Laundry! I would like to inquire about your services."
  )}`;

  return (
    <footer
      className="bg-[#0B2538] text-white border-t border-[#133A54]"
      aria-label="Footer"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 pb-24 sm:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              aria-label="APM Laundry & Dry Cleaning Home"
              className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#74A72E] rounded-lg min-h-[44px]"
            >
              <APMLogo className="h-10 sm:h-12 w-auto" priority={false} lightText />
            </Link>

            <p className="mt-3 text-sm text-[#94A3B8] leading-relaxed [text-wrap:pretty] max-w-sm">
              Dependable laundry, wash &amp; iron, and dry cleaning services in Hyderabad, with doorstep pickup and delivery.
            </p>

            <div className="mt-4 hidden sm:flex items-center gap-2 text-xs text-[#84CC16]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16]" />
              <span>Doorstep Pickup &amp; Delivery Across Hyderabad</span>
            </div>
          </div>

          {/* Links Block: 2 Columns Side-by-Side on Mobile */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4 sm:gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#94A3B8] mb-3">
                Quick Links
              </h3>
              <ul className="space-y-1.5 text-sm">
                {[
                  { label: "Home", href: "/" },
                  { label: "Services", href: "/#services" },
                  { label: "How It Works", href: "/#how-it-works" },
                  { label: "Reviews", href: "/#reviews" },
                  { label: "About APM", href: "/#about" },
                  { label: "FAQ", href: "/#faq" },
                  { label: "Book Service", href: "/contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[#CBD5E1] hover:text-[#74A72E] transition-colors py-1 inline-block font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#94A3B8] mb-3">
                Our Services
              </h3>
              <ul className="space-y-1.5 text-sm">
                {[
                  { label: "Wash & Iron", href: "/#wash-and-iron" },
                  { label: "Dry Cleaning", href: "/#dry-cleaning" },
                  { label: "Wash & Fold", href: "/#wash-and-fold" },
                  { label: "Shoe & Carpet Care", href: "/#shoe-cleaning" },
                  { label: "Special Items & Clothes", href: "/#special-items" },
                ].map((service) => (
                  <li key={service.label}>
                    <Link
                      href={service.href}
                      className="text-[#CBD5E1] hover:text-[#74A72E] transition-colors py-1 inline-block font-medium"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact & Hours Card */}
          <div className="lg:col-span-4 bg-[#0E2F46]/70 lg:bg-transparent rounded-2xl p-4 sm:p-5 lg:p-0 border border-[#133A54] lg:border-0">
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#94A3B8] mb-3">
              Contact &amp; Hours
            </h3>

            {/* Quick Contact Action Buttons on Mobile */}
            <div className="grid grid-cols-2 gap-2.5 mb-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-white text-xs sm:text-sm font-semibold transition-colors"
                aria-label="Message on WhatsApp"
              >
                <span className="w-5 h-5 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </span>
                <span>WhatsApp</span>
              </a>

              <a
                href={`tel:${siteConfig.contactPhone.replace(/\s+/g, "")}`}
                className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-[#153B55] hover:bg-[#1A4563] border border-[#1A4563] text-white text-xs sm:text-sm font-semibold transition-colors"
                aria-label="Call APM Laundry"
              >
                <span className="w-5 h-5 rounded-full bg-[#74A72E] text-white flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </span>
                <span>Call Now</span>
              </a>
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm text-[#CBD5E1]">
              {/* Hours */}
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-md bg-[#153B55] text-[#74A72E] flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <span>Hours: 10:00 AM – 10:00 PM (Closed Fridays)</span>
              </li>

              {/* Free Pickup */}
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-md bg-[#153B55] text-[#74A72E] flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375A1.125 1.125 0 012.25 17.625V6.75a1.125 1.125 0 011.125-1.125h11.25c.621 0 1.125.504 1.125 1.125v4.5m-13.5 7.5v-1.5m13.5-6h4.125a1.125 1.125 0 01.993.6l1.71 3.42a1.125 1.125 0 01.172.58v3.65a1.125 1.125 0 01-1.125 1.125h-.75m-6-9.375v9.375m0 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h.75" />
                  </svg>
                </span>
                <span className="text-[#84CC16] font-semibold">Pickup: Free within 3 km</span>
              </li>

              {/* Address */}
              <li className="flex items-start gap-2 pt-1">
                <span className="w-5 h-5 rounded-md bg-[#153B55] text-[#74A72E] flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </span>
                <span className="leading-snug text-[#94A3B8]">
                  {siteConfig.address.streetAddress}, {siteConfig.address.addressLocality}, Telangana - {siteConfig.address.postalCode}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-12 pt-6 border-t border-[#133A54] flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-[#94A3B8]">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} APM Laundry &amp; Dry Cleaning. All rights reserved.
          </p>

          <div className="flex items-center justify-center gap-4 text-xs">
            <Link href="/terms" className="hover:text-[#74A72E] transition-colors py-1">
              Terms &amp; Conditions
            </Link>
            <span className="text-[#1A4563]">•</span>
            <Link href="/privacy" className="hover:text-[#74A72E] transition-colors py-1">
              Privacy Policy
            </Link>
          </div>

          <p className="text-center text-[11px] sm:text-xs text-[#64748B]">
            Website created by{" "}
            <a
              href="https://www.edonesolution.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#94A3B8] hover:text-[#74A72E] font-medium transition-colors underline decoration-[#1A4563] hover:decoration-[#74A72E] underline-offset-4"
            >
              Edone solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;