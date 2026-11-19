import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/seoConfig";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Read the service terms and conditions for APM Laundry & Dry Cleaning.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms & Conditions | APM Laundry & Dry Cleaning",
    description: "Read the service terms and conditions for APM Laundry & Dry Cleaning.",
    url: "/terms",
    images: [
      {
        url: "/images/contact-laundry.jpg",
        width: 1200,
        height: 896,
        alt: "APM Laundry & Dry Cleaning - Terms & Conditions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | APM Laundry & Dry Cleaning",
    description: "Read the service terms and conditions for APM Laundry & Dry Cleaning.",
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
      name: "Terms & Conditions",
      item: `${siteConfig.siteUrl}/terms`,
    },
  ],
};

export default function TermsPage() {
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
            <span className="text-[#C74708] font-semibold">Terms &amp; Conditions</span>
          </nav>

          <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#E9D9C9] p-6 sm:p-10 shadow-[0_4px_24px_rgba(32,32,32,0.04)]">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#202020] mb-2">
              Terms &amp; Conditions
            </h1>
            <p className="text-xs sm:text-sm text-[#787878] mb-8 pb-4 border-b border-[#E9D9C9]">
              Last updated: January 2026
            </p>

            <div className="space-y-6 text-sm sm:text-base text-[#4F4F4F] leading-relaxed">
              <section>
                <h2 className="text-lg sm:text-xl font-bold text-[#202020] mb-2">1. Scope of Services</h2>
                <p>
                  APM Laundry &amp; Dry Cleaning (&quot;APM&quot;) provides professional wash &amp; fold, wash &amp; steam iron, and eco-solvent dry cleaning services, along with scheduled doorstep pickup and delivery. By booking or utilizing our services, you agree to these Terms and Conditions.
                </p>
              </section>

              <section>
                <h2 className="text-lg sm:text-xl font-bold text-[#202020] mb-2">2. Garment Inspection &amp; Personal Valuables</h2>
                <p>
                  Customers are kindly requested to check all pockets and remove all valuables, jewelry, cufflinks, pens, receipts, and personal property prior to handing garments to our pickup team. While our team inspects pockets during intake, APM is not responsible for any personal items left inside garments.
                </p>
              </section>

              <section>
                <h2 className="text-lg sm:text-xl font-bold text-[#202020] mb-2">3. Fabric Care &amp; Manufacturer Instructions</h2>
                <p>
                  We adhere strictly to manufacturer care labels and industry best practices. In the absence of a care label, our fabric care specialists apply standard conservative treatments suitable for the textile blend. APM is not liable for inherent defects, color bleed in unfast dyes, weakness from age, or previous misuse by third-party treatments.
                </p>
              </section>

              <section>
                <h2 className="text-lg sm:text-xl font-bold text-[#202020] mb-2">4. Turnaround Time &amp; Delivery</h2>
                <p>
                  Standard turnaround time is 24 to 48 hours for everyday laundry and wash &amp; iron orders. Specialized dry cleaning or intricate stain removal treatments may require additional processing time. Deliveries are made to the designated pickup address during agreed operating hours.
                </p>
              </section>

              <section>
                <h2 className="text-lg sm:text-xl font-bold text-[#202020] mb-2">5. Pricing &amp; Payment</h2>
                <p>
                  Pricing is transparent: Wash &amp; Fold is calculated by weight/load, Wash &amp; Iron is billed per garment piece, and Dry Cleaning is itemized based on fabric composition and garment complexity. Payment is due upon delivery or invoice confirmation via agreed payment channels.
                </p>
              </section>

              <section>
                <h2 className="text-lg sm:text-xl font-bold text-[#202020] mb-2">6. Inquiries &amp; Support</h2>
                <p>
                  If you have any questions regarding your order or these terms, please contact our support team directly via WhatsApp or through our{" "}
                  <Link href="/#contact" className="text-[#C74708] font-semibold hover:underline">
                    Contact &amp; Booking page
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
