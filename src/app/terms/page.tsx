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
    <div className="min-h-screen flex flex-col bg-[#F4F8FA] text-[#1E293B]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main className="flex-1 py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-xs sm:text-sm text-[#475569]">
            <Link href="/" className="hover:text-[#1D6F9E] transition-colors">
              Home
            </Link>
            <span className="text-[#A0988E]">/</span>
            <span className="text-[#1D6F9E] font-semibold">Terms &amp; Conditions</span>
          </nav>

          <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#E2EDF3] p-6 sm:p-10 shadow-[0_4px_24px_rgba(32,32,32,0.04)]">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1E293B] mb-2">
              Terms &amp; Conditions
            </h1>
            <p className="text-xs sm:text-sm text-[#787878] mb-8 pb-4 border-b border-[#E2EDF3]">
              Last updated: January 2026
            </p>

            <div className="space-y-6 text-sm sm:text-base text-[#475569] leading-relaxed">
              <section>
                <h2 className="text-lg sm:text-xl font-bold text-[#1E293B] mb-2">1. Scope of Services</h2>
                <p>
                  APM Laundry &amp; Dry Cleaning (&quot;APM&quot;) provides professional wash &amp; fold, wash &amp; iron, and dry cleaning services, along with doorstep pickup and delivery. By booking or using our services, you agree to these Terms and Conditions.
                </p>
              </section>

              <section>
                <h2 className="text-lg sm:text-xl font-bold text-[#1E293B] mb-2">2. Garment Inspection &amp; Personal Valuables</h2>
                <p>
                  Please check all pockets and remove cash, jewelry, cufflinks, pens, receipts, and personal items before handing over your clothes. While our team checks pockets before cleaning, APM cannot be held responsible for items left inside garments.
                </p>
              </section>

              <section>
                <h2 className="text-lg sm:text-xl font-bold text-[#1E293B] mb-2">3. Fabric Care &amp; Manufacturer Instructions</h2>
                <p>
                  We follow garment care labels closely. If an item does not have a care label, our team uses gentle, standard methods suited to the fabric. We cannot be held responsible for pre-existing defects, color bleeding from unfast dyes, or fabric weakness due to age and normal wear.
                </p>
              </section>

              <section>
                <h2 className="text-lg sm:text-xl font-bold text-[#1E293B] mb-2">4. Turnaround Time &amp; Delivery</h2>
                <p>
                  Standard turnaround time is 24 to 48 hours for everyday laundry and wash &amp; iron orders. Special dry cleaning or difficult stain removal may take a little longer. Deliveries are made to your designated address during our working hours.
                </p>
              </section>

              <section>
                <h2 className="text-lg sm:text-xl font-bold text-[#1E293B] mb-2">5. Pricing &amp; Payment</h2>
                <p>
                  Our pricing is clear and transparent: Wash &amp; Fold is charged by weight, while Wash &amp; Iron and Dry Cleaning are priced per piece depending on the garment. Payment can be made upon delivery via cash, UPI, or card.
                </p>
              </section>

              <section>
                <h2 className="text-lg sm:text-xl font-bold text-[#1E293B] mb-2">6. Inquiries &amp; Support</h2>
                <p>
                  If you have any questions regarding your order or these terms, please contact our support team directly via WhatsApp or through our{" "}
                  <Link href="/#contact" className="text-[#1D6F9E] font-semibold hover:underline">
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
