import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { CustomerReviews } from "@/components/CustomerReviews";
import { About } from "@/components/About";
import { AreasWeServe } from "@/components/AreasWeServe";
import { FAQ } from "@/components/FAQ";
import { ContactCard } from "@/components/ContactCard";
import { Footer } from "@/components/Footer";
import { faqSchema } from "@/data/faqData";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F0E7] text-[#202020]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Services with Pricing & Garments */}
        <Services />

        {/* 3. How It Works: The 3 Steps */}
        <HowItWorks />

        {/* 4. Real Customer Reviews (Moved up to build trust early) */}
        <CustomerReviews />

        {/* 5. About & Why Choose (Merged concise section) */}
        <About />

        {/* 6. Areas We Serve in Hyderabad */}
        <AreasWeServe />

        {/* 7. FAQ (Native details/summary with shared schema) */}
        <FAQ />

        {/* 8. Booking Form (WhatsApp) */}
        <section
          id="contact"
          className="relative overflow-hidden py-10 sm:py-14 md:py-16 bg-[#F8F0E7] border-t border-[#E9D9C9]"
          aria-label="Contact and Service Booking"
        >
          <div id="book" className="scroll-mt-24" />
          <ContactCard isHomepage={true} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
