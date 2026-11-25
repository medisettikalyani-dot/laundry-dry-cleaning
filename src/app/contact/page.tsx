import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { ContactCard } from "@/components/ContactCard";
import { siteConfig } from "@/lib/seoConfig";

export const metadata: Metadata = {
  title: "Contact & Book Pickup | APM Laundry & Dry Cleaning Hyderabad",
  description:
    "Contact APM Laundry & Dry Cleaning in Manikonda, Hyderabad. Book a doorstep pickup on WhatsApp or call us directly. Free pickup within 3 km.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact & Book Pickup | APM Laundry & Dry Cleaning Hyderabad",
    description:
      "Schedule a doorstep laundry or dry cleaning pickup in Hyderabad with APM. Call us or book directly on WhatsApp.",
    url: "/contact",
    images: [
      {
        url: "/images/contact-laundry.jpg",
        width: 1200,
        height: 896,
        alt: "APM Laundry & Dry Cleaning - Contact & Booking Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact & Book Pickup | APM Laundry & Dry Cleaning Hyderabad",
    description:
      "Schedule a doorstep laundry or dry cleaning pickup in Hyderabad with APM. Quick turnaround, clear pricing, and careful fabric care.",
    images: ["/images/contact-laundry.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteConfig.siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contact & Booking",
      item: `${siteConfig.siteUrl}/contact`,
    },
  ],
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact APM Laundry & Dry Cleaning Hyderabad",
  description:
    "Direct contact details, location, phone, and pickup coordination for APM Laundry & Dry Cleaning services across Hyderabad.",
  url: `${siteConfig.siteUrl}/contact`,
  mainEntity: {
    "@id": `${siteConfig.siteUrl}/#localbusiness`,
  },
};

export default function ContactPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F8FA] text-[#1E293B] overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, contactPageSchema]),
        }}
      />
      {/* Navbar */}
      <Navbar />

      {/* Main Dedicated Contact View - Centered and Screen Fitted */}
      <main className="flex-1 flex items-center justify-center py-4 sm:py-6 px-3 sm:px-6">
        <ContactCard isHomepage={false} />
      </main>

      {/* Compact Clean Footer to fit screen size without bloated scrolling */}
      <footer className="w-full border-t border-[#E2EDF3] bg-white py-3 px-4 sm:px-6 text-xs text-[#64748B]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5 text-center md:text-left">
          <p>
            © {currentYear} {siteConfig.name} · {siteConfig.address.addressLocality} · Free pickup within 3 km
          </p>
          <p className="text-[#64748B]">
            Website created by{" "}
            <a
              href="https://www.edonesolution.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1D6F9E] hover:text-[#0B2538] font-medium transition-colors underline decoration-[#CBD5E1] hover:decoration-[#1D6F9E] underline-offset-2"
            >
              Edone solutions
            </a>
          </p>
          <div className="flex items-center gap-4 font-medium">
            <Link href="/" className="hover:text-[#1D6F9E] transition-colors">
              Home
            </Link>
            <Link href="/#services" className="hover:text-[#1D6F9E] transition-colors">
              Services
            </Link>
            <Link href="/privacy" className="hover:text-[#1D6F9E] transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[#1D6F9E] transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
