"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface FAQItem {
  id: string;
  question: string;
  answer: React.ReactNode;
}

const faqItems: FAQItem[] = [
  {
    id: "services-offered",
    question: "What types of laundry services does APM offer?",
    answer: (
      <div className="space-y-2">
        <p>
          APM offers three specialized fabric and garment care services tailored to your needs:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-sm sm:text-base">
          <li>
            <strong className="text-[#202020]">Wash &amp; Fold:</strong> Routine everyday laundry care billed by weight/load with eco-safe hypoallergenic detergents, careful color separation, gentle tumble drying, and neat folding ready for your wardrobe.
          </li>
          <li>
            <strong className="text-[#202020]">Wash &amp; Iron:</strong> Commercial-grade washing paired with crisp, hand-finished steam pressing, button checks, and collar crisping for shirts, kurtas, trousers, and daily wear.
          </li>
          <li>
            <strong className="text-[#202020]">Dry Cleaning:</strong> Specialized eco-friendly solvent care for delicate and luxury garments including suits, sherwanis, silk sarees, blazers, formal wear, and blankets.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "pickup-delivery",
    question: "Do you provide pickup and doorstep delivery?",
    answer: (
      <p>
        Yes, APM provides convenient doorstep pickup and delivery across Hyderabad. You can schedule a pickup directly through our online booking form or via WhatsApp. Our team collects your garments from your doorstep, cleans them with expert care, and delivers them back fresh, clean, and neatly packaged.
      </p>
    ),
  },
  {
    id: "pricing-calculation",
    question: "How is laundry service pricing calculated?",
    answer: (
      <div className="space-y-2">
        <p>
          Our pricing is transparent with clear quotes and no hidden fees:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
          <li>
            <strong className="text-[#202020]">Wash &amp; Fold:</strong> Calculated transparently by weight/load (per-kg billing).
          </li>
          <li>
            <strong className="text-[#202020]">Wash &amp; Iron:</strong> Billed per garment piece with itemized rates for shirts, trousers, and daily clothing.
          </li>
          <li>
            <strong className="text-[#202020]">Dry Cleaning:</strong> Calibrated based on fabric type, embroidery, and specific garment requirements (e.g. delicate silks, 3-piece suits, sherwanis).
          </li>
        </ul>
        <p className="text-xs sm:text-sm text-[#787878] pt-1">
          Feel free to reach out to our team for custom itemized estimates and specific rate inquiries.
        </p>
      </div>
    ),
  },
  {
    id: "processing-time",
    question: "How long does laundry processing take?",
    answer: (
      <p>
        Our standard turnaround time is 24 to 48 hours for regular laundry services, accompanied by scheduled doorstep pickup and prompt return in Hyderabad. Turnaround times may vary depending on order volume or specialized care required for delicate dry-cleaning items and tough stain treatments. If you require specific delivery timing, please check with our team when scheduling your service.
      </p>
    ),
  },
  {
    id: "separate-dry-cleaning",
    question: "Do you provide separate dry-cleaning services?",
    answer: (
      <p>
        Yes, we provide dedicated dry-cleaning services handled completely separately from everyday wash loads. We utilize gentle, eco-friendly solvents, customized stain treatments, and individualized inspection designed specifically for delicate fabrics, ornate embroidery, woolens, silk sarees, and formal suits.
      </p>
    ),
  },
  {
    id: "prepare-clothes",
    question: "How should I prepare my clothes for pickup?",
    answer: (
      <div className="space-y-2">
        <p>Preparing your clothes for pickup is simple:</p>
        <ol className="list-decimal pl-5 space-y-1 text-sm sm:text-base">
          <li>Place your garments in any laundry or carry bag ready for our pickup team.</li>
          <li>Check and empty all pockets of coins, receipts, and personal valuables.</li>
          <li>If you have items requiring special stain removal, delicate handling, or dry cleaning, you can separate them or note them in your booking message.</li>
        </ol>
      </div>
    ),
  },
  {
    id: "booking-service",
    question: "How can I book a laundry service?",
    answer: (
      <p>
        Booking is quick and simple: you can fill out our online booking form in the{" "}
        <Link href="/#contact" className="text-[#C74708] font-medium hover:underline">
          Contact &amp; Book Service section
        </Link>{" "}
        by choosing your preferred service and contact details, or simply tap the{" "}
        <a
          href="https://wa.me/?text=Hello%20APM%20Laundry%2C%20I%20would%20like%20to%20book%20a%20laundry%20pickup."
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#C74708] font-medium hover:underline"
        >
          Chat on WhatsApp
        </a>{" "}
        button to arrange a pickup directly with our team.
      </p>
    ),
  },
  {
    id: "contact-assistance",
    question: "How can I contact APM for assistance?",
    answer: (
      <div className="space-y-2">
        <p>
          You can reach APM through any of the following channels:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
          <li>
            <strong className="text-[#202020]">WhatsApp Chat:</strong> Connect with us instantly via our website&apos;s WhatsApp buttons (+91) for quick answers and pickup coordination.
          </li>
          <li>
            <strong className="text-[#202020]">Online Contact Form:</strong> Submit an inquiry or service request anytime using the contact form below.
          </li>
        </ul>
        <p className="text-xs sm:text-sm text-[#787878] pt-1">
          If you have specific questions about our services, pricing, or ongoing orders, feel free to reach out and our team will be delighted to help you.
        </p>
      </div>
    ),
  },
];

export function FAQ() {
  // Allow toggling open items. First item open by default for immediate preview
  const [openId, setOpenId] = useState<string | null>("services-offered");

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 bg-[#F8F0E7] border-t border-[#E9D9C9]/60"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================= */}
        {/* SECTION HEADER                                            */}
        {/* ========================================================= */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 md:mb-16">
          {/* Subtle Accent Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E9D9C9]/70 border border-[#E9D9C9] text-xs font-semibold text-[#202020] uppercase tracking-wider mb-3.5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#C74708]" />
            <span>Got Questions?</span>
          </div>

          {/* Section Main Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-bold tracking-tight text-[#202020] leading-tight">
            Frequently Asked <span className="text-[#C74708]">Questions</span>
          </h2>

          {/* Section Subtitle */}
          <p className="mt-3 text-sm sm:text-base md:text-lg text-[#4F4F4F] leading-relaxed">
            Find answers to common questions about our laundry services.
          </p>
        </div>

        {/* ========================================================= */}
        {/* ELEGANT ACCORDION LIST                                    */}
        {/* ========================================================= */}
        <div className="space-y-3.5 sm:space-y-4">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={cn(
                  "rounded-2xl transition-all duration-200 border",
                  isOpen
                    ? "bg-white border-[#C74708]/40 shadow-[0_8px_24px_rgba(199,71,8,0.06)]"
                    : "bg-white/85 hover:bg-white border-[#E9D9C9] hover:border-[#D8C2AC] shadow-[0_2px_8px_rgba(32,32,32,0.03)]"
                )}
              >
                {/* Accordion Trigger Button */}
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  id={`faq-question-${item.id}`}
                  className="w-full text-left py-4 sm:py-5 px-5 sm:px-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C74708] rounded-2xl group select-none"
                >
                  <span
                    className={cn(
                      "text-base sm:text-lg font-semibold transition-colors duration-200 leading-snug",
                      isOpen
                        ? "text-[#C74708]"
                        : "text-[#202020] group-hover:text-[#C74708]"
                    )}
                  >
                    {item.question}
                  </span>

                  {/* Clean Plus / Minus Icon Container */}
                  <span
                    className={cn(
                      "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200",
                      isOpen
                        ? "bg-[#C74708] text-white"
                        : "bg-[#E9D9C9]/60 text-[#202020] group-hover:bg-[#E9D9C9] group-hover:text-[#C74708]"
                    )}
                    aria-hidden="true"
                  >
                    {isOpen ? (
                      /* Simple Minus Icon */
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    ) : (
                      /* Simple Plus Icon */
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    )}
                  </span>
                </button>

                {/* Accordion Content with Smooth Expand/Collapse */}
                <div
                  id={`faq-answer-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-question-${item.id}`}
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="pb-5 sm:pb-6 px-5 sm:px-6 text-sm sm:text-base text-[#4F4F4F] leading-relaxed border-t border-[#F0E1D2]/70 pt-3.5">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
