import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { SpecialGarmentsSection } from "@/components/services/SpecialGarmentsSection";
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
    <div className="min-h-screen flex flex-col bg-[#F4F8FA] text-[#1E293B]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Main Services */}
        <Services />

        {/* 3. Special Items Section */}
        <SpecialGarmentsSection />

        {/* 4. How It Works: The 3 Steps */}
        <HowItWorks />

        {/* 5. Real Customer Reviews */}
        <CustomerReviews />

        {/* 6. About & Why Choose */}
        <About />

        {/* 7. Areas We Serve in Hyderabad */}
        <AreasWeServe />

        {/* 8. FAQ */}
        <FAQ />

        {/* 9. Booking Form (WhatsApp) */}
        <section
          id="contact"
          className="relative overflow-hidden py-10 sm:py-14 md:py-16 bg-[#F4F8FA] border-t border-[#E2EDF3]"
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
