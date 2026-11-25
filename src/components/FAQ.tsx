import React from "react";
import Link from "next/link";
import { faqList } from "@/data/faqData";

export function FAQ() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden py-12 sm:py-16 md:py-20 bg-[#F4F8FA]"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1E293B]">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#475569] [text-wrap:pretty]">
            Helpful answers to common questions about our laundry, dry cleaning, pickup, and delivery.
          </p>
        </div>

        {/* Semantic native details / summary accordion */}
        <div className="space-y-3.5">
          {faqList.map((item, idx) => (
            <details
              key={item.id}
              className="group rounded-2xl bg-white border border-[#E2EDF3] p-5 shadow-xs transition-all duration-200 open:shadow-md"
              open={idx === 0}
            >
              <summary className="flex items-center justify-between cursor-pointer list-none font-semibold text-base sm:text-lg text-[#1E293B] select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6F9E] rounded-lg">
                <span className="pr-4">{item.question}</span>
                <span className="w-8 h-8 rounded-full bg-[#EBF5FA] border border-[#C3DFEE] flex items-center justify-center flex-shrink-0 text-[#1D6F9E] group-open:rotate-180 transition-transform duration-200">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </summary>
              <div className="mt-3.5 pt-3.5 border-t border-[#E2EDF3] text-sm sm:text-base text-[#475569] leading-relaxed [text-wrap:pretty]">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>

        {/* Assistance footer prompt */}
        <div className="mt-8 text-center text-sm text-[#475569]">
          Have a question not listed here?{" "}
          <Link
            href="#contact"
            className="font-semibold text-[#1D6F9E] hover:underline"
          >
            Send us a message on WhatsApp &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
