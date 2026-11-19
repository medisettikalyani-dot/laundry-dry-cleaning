import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { WhyChooseAPM } from "@/components/WhyChooseAPM";
import { Gallery } from "@/components/Gallery";
import { CustomerReviews } from "@/components/CustomerReviews";
import { FAQ } from "@/components/FAQ";
import { ContactCard } from "@/components/ContactCard";
import { Footer } from "@/components/Footer";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of laundry services does APM offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "APM offers three specialized fabric and garment care services tailored to your needs in Hyderabad: Wash & Fold (everyday routine laundry billed by weight with eco-safe hypoallergenic detergents), Wash & Iron (commercial-grade washing with crisp steam pressing for shirts, kurtas, and daily wear), and Dry Cleaning (specialized eco-friendly solvent care for delicate and luxury garments including suits, sherwanis, silk sarees, and formal wear).",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide pickup and doorstep delivery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, APM provides convenient doorstep pickup and delivery across Hyderabad. You can schedule a pickup directly through our online booking form or via WhatsApp. Our team collects your garments from your doorstep, cleans them with expert care, and delivers them back fresh, clean, and neatly packaged.",
      },
    },
    {
      "@type": "Question",
      name: "How is laundry service pricing calculated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our pricing is transparent with clear quotes and no hidden fees: Wash & Fold is calculated transparently by weight/load (per-kg billing); Wash & Iron is billed per garment piece with itemized rates for shirts, trousers, and daily clothing; Dry Cleaning is itemized based on fabric type, embroidery, and specific garment requirements.",
      },
    },
    {
      "@type": "Question",
      name: "How long does laundry processing take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our standard turnaround time is 24 to 48 hours for regular laundry services, accompanied by scheduled doorstep pickup and prompt return in Hyderabad. Turnaround times may vary depending on order volume or specialized care required for delicate dry-cleaning items and tough stain treatments.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide separate dry-cleaning services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide dedicated dry-cleaning services handled completely separately from everyday wash loads. We utilize gentle, eco-friendly solvents, customized stain treatments, and individualized inspection designed specifically for delicate fabrics, ornate embroidery, woolens, silk sarees, and formal suits.",
      },
    },
    {
      "@type": "Question",
      name: "How should I prepare my clothes for pickup?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Preparing your clothes for pickup is simple: 1. Place your garments in any laundry or carry bag ready for our pickup team. 2. Check and empty all pockets of coins, receipts, and personal valuables. 3. If you have items requiring special stain removal, delicate handling, or dry cleaning, you can separate them or note them in your booking message.",
      },
    },
    {
      "@type": "Question",
      name: "How can I book a laundry service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Booking is quick and simple: you can fill out our online booking form in the Contact & Book Service section by choosing your preferred service and contact details, or simply tap the Chat on WhatsApp button to arrange a doorstep pickup directly with our team in Hyderabad.",
      },
    },
    {
      "@type": "Question",
      name: "How can I contact APM for assistance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can reach APM through WhatsApp Chat for quick answers and pickup coordination, or submit an inquiry anytime using the online contact form.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F0E7] text-[#202020]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <Services />
        <About />
        <WhyChooseAPM />
        <Gallery />
        <CustomerReviews />
        <FAQ />
        <section
          id="contact"
          className="relative overflow-hidden py-10 sm:py-14 md:py-18 lg:py-20 bg-[#F8F0E7] border-t border-[#E9D9C9]/60"
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
