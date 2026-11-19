import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { ContactCard } from "@/components/ContactCard";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/seoConfig";

export const metadata: Metadata = {
  title: "Book Laundry & Dry Cleaning Pickup in Hyderabad",
  description:
    "Schedule doorstep laundry, wash & iron, or luxury dry cleaning pickup in Hyderabad with APM. Fast turnaround, transparent pricing, and gentle fabric care. Book online now.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Book Laundry & Dry Cleaning Pickup in Hyderabad | APM",
    description:
      "Schedule doorstep laundry, wash & iron, or luxury dry cleaning pickup in Hyderabad with APM. Fast turnaround, transparent pricing, and gentle fabric care.",
    url: "/contact",
    images: [
      {
        url: "/images/contact-laundry.jpg",
        width: 1200,
        height: 896,
        alt: "APM Laundry & Dry Cleaning - Book Your Service in Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Laundry & Dry Cleaning Pickup in Hyderabad | APM",
    description:
      "Schedule doorstep laundry, wash & iron, or luxury dry cleaning pickup in Hyderabad with APM. Fast turnaround, transparent pricing, and gentle fabric care.",
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
      name: "Book Your Service",
      item: `${siteConfig.siteUrl}/contact`,
    },
  ],
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Book Laundry Service in Hyderabad",
  description:
    "Online booking and pickup coordination for APM Laundry & Dry Cleaning services across Hyderabad.",
  url: `${siteConfig.siteUrl}/contact`,
  mainEntity: {
    "@id": `${siteConfig.siteUrl}/#localbusiness`,
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F0E7] text-[#202020]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, contactPageSchema]),
        }}
      />
      {/* Existing Consistent Navbar */}
      <Navbar />

      {/* Main Dedicated Contact Page View */}
      <main className="flex-1 flex flex-col justify-center py-4 sm:py-6">
        <ContactCard />
      </main>
      <Footer />
    </div>
  );
}
