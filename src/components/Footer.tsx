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
      className="bg-[#EFE4D6] text-[#202020] border-t border-[#DECDBD]"
      aria-label="Footer"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-28 sm:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="sm:col-span-2 md:col-span-1">
            <Link
              href="/"
              aria-label="APM Laundry & Dry Cleaning Home"
              className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C74708] rounded-lg min-h-[44px]"
            >
              <APMLogo className="h-10 w-auto" />
            </Link>

            <p className="mt-3 text-sm text-[#38312B] leading-relaxed [text-wrap:pretty]">
              Professional laundry, wash &amp; iron, and dry cleaning services across Hyderabad with doorstep pickup and delivery.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#38312B] mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "Services & Rates", href: "/#services" },
                { label: "How It Works", href: "/#how-it-works" },
                { label: "Reviews", href: "/#reviews" },
                { label: "About APM", href: "/#about" },
                { label: "FAQ", href: "/#faq" },
                { label: "Book Service", href: "/#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#202020] hover:text-[#C74708] transition-colors py-1 inline-block font-medium min-h-[36px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#38312B] mb-3">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Wash & Iron", href: "/#wash-and-iron" },
                { label: "Dry Cleaning", href: "/#dry-cleaning" },
                { label: "Wash & Fold", href: "/#wash-and-fold" },
                { label: "Areas We Serve", href: "/#areas-served" },
              ].map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-[#202020] hover:text-[#C74708] transition-colors py-1 inline-block font-medium min-h-[36px]"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information with confirmed details */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#38312B] mb-3">
              Contact &amp; Hours
            </h3>
            <ul className="space-y-3 text-sm text-[#202020]">
              {/* WhatsApp */}
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#202020] hover:text-[#C74708] transition-colors font-medium min-h-[44px]"
                >
                  <span className="w-6 h-6 rounded-md bg-[#25D366] text-white flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </span>
                  <span>WhatsApp: {siteConfig.contactPhone}</span>
                </a>
              </li>

              {/* Direct Call */}
              <li>
                <a
                  href={`tel:${siteConfig.contactPhone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-2 text-[#202020] hover:text-[#C74708] transition-colors font-medium min-h-[44px]"
                >
                  <span className="w-6 h-6 rounded-md bg-[#DFD1C1] text-[#202020] flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </span>
                  <span>Call: {siteConfig.contactPhone}</span>
                </a>
              </li>

              {/* Hours */}
              <li className="flex items-center gap-2 text-[#38312B]">
                <span className="w-6 h-6 rounded-md bg-[#DFD1C1] text-[#202020] flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <span>Hours: 8:00 AM – 9:00 PM Daily</span>
              </li>

              {/* Address */}
              <li className="flex items-start gap-2 text-[#38312B]">
                <span className="w-6 h-6 rounded-md bg-[#DFD1C1] text-[#202020] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </span>
                <span>{siteConfig.address.streetAddress}, {siteConfig.address.addressLocality}, Telangana</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-[#DECDBD] flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#38312B]">
          <p>&copy; {new Date().getFullYear()} APM Laundry &amp; Dry Cleaning. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/terms" className="hover:text-[#C74708] transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/privacy" className="hover:text-[#C74708] transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
