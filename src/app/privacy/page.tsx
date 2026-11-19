import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/seoConfig";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the privacy policy and data protection practices of APM Laundry & Dry Cleaning.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy | APM Laundry & Dry Cleaning",
    description: "Read the privacy policy and data protection practices of APM Laundry & Dry Cleaning.",
    url: "/privacy",
    images: [
      {
        url: "/images/contact-laundry.jpg",
        width: 1200,
        height: 896,
        alt: "APM Laundry & Dry Cleaning - Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | APM Laundry & Dry Cleaning",
    description: "Read the privacy policy and data protection practices of APM Laundry & Dry Cleaning.",
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
      name: "Privacy Policy",
      item: `${siteConfig.siteUrl}/privacy`,
    },
  ],
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F0E7] text-[#202020]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main className="flex-1 py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-xs sm:text-sm text-[#4F4F4F]">
            <Link href="/" className="hover:text-[#C74708] transition-colors">
              Home
            </Link>
            <span className="text-[#A0988E]">/</span>
            <span className="text-[#C74708] font-semibold">Privacy Policy</span>
          </nav>

          <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#E9D9C9] p-6 sm:p-10 shadow-[0_4px_24px_rgba(32,32,32,0.04)]">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#202020] mb-2">
              Privacy Policy
            </h1>
            <p className="text-xs sm:text-sm text-[#787878] mb-8 pb-4 border-b border-[#E9D9C9]">
              Last updated: January 2026
            </p>

            <div className="space-y-6 text-sm sm:text-base text-[#4F4F4F] leading-relaxed">
              <section>
                <h2 className="text-lg sm:text-xl font-bold text-[#202020] mb-2">1. Information We Collect</h2>
                <p>
                  When you schedule a pickup or book a service with APM Laundry &amp; Dry Cleaning (&quot;APM&quot;), we collect basic contact information necessary to provide our service, including your full name, phone number, email address, physical pickup/delivery address, and any special care instructions.
                </p>
              </section>

              <section>
                <h2 className="text-lg sm:text-xl font-bold text-[#202020] mb-2">2. How We Use Your Information</h2>
                <p>
                  Your information is utilized solely to:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Coordinate doorstep laundry pickup and return deliveries.</li>
                  <li>Provide service confirmations, invoices, and status updates via WhatsApp or phone.</li>
                  <li>Address special garment treatment instructions and respond to customer queries.</li>
                  <li>Improve our service quality and customer care standards.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg sm:text-xl font-bold text-[#202020] mb-2">3. Data Protection &amp; Confidentiality</h2>
                <p>
                  We treat your personal details with strict confidentiality. We do not sell, rent, or trade your contact information to third parties for marketing purposes. Access is restricted to authorized operations personnel for pickup logistics.
                </p>
              </section>

              <section>
                <h2 className="text-lg sm:text-xl font-bold text-[#202020] mb-2">4. Communications &amp; WhatsApp Updates</h2>
                <p>
                  If you opt in to receive WhatsApp updates, we use your phone number to share timely order progress notifications and delivery dispatch alerts. You can opt out of non-critical messaging at any time by notifying our support line.
                </p>
              </section>

              <section>
                <h2 className="text-lg sm:text-xl font-bold text-[#202020] mb-2">5. Contact Us</h2>
                <p>
                  If you have questions regarding this Privacy Policy or wish to update your contact preferences, please reach out via our{" "}
                  <Link href="/#contact" className="text-[#C74708] font-semibold hover:underline">
                    Contact &amp; Booking section
                  </Link>
                  .
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
