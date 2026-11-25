import React from "react";
import Image from "next/image";
import Link from "next/link";

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-14 sm:py-20 bg-[#F4F8FA]"
      aria-label="About APM Laundry and Dry Cleaning"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
          {/* Staggered Images without pills/labels */}
          <div className="lg:col-span-6 relative w-full order-2 lg:order-1">
            <div className="relative flex items-center justify-center max-w-[500px] mx-auto py-3 sm:py-5">
              {/* Wash & Iron Card */}
              <div className="relative w-1/2 translate-y-4 sm:translate-y-6">
                <div className="relative aspect-[3/4.2] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-[#E2EDF3] bg-[#E2EDF3]">
                  <Image
                    src="/images/about-card-wash-iron.jpg"
                    alt="Wash and Iron - Cleanly pressed garments"
                    fill
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 250px"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Dry Cleaning Card */}
              <div className="relative w-1/2 -translate-y-4 sm:-translate-y-6 ml-4 sm:ml-6">
                <div className="relative aspect-[3/4.2] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-[#E2EDF3] bg-[#E2EDF3]">
                  <Image
                    src="/images/about-card-dry-cleaning.jpg"
                    alt="Dry Cleaning - Tailored garments on hangers"
                    fill
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 250px"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Column: Merged Story & Real Commitments */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1E293B]">
              Caring for Your Clothes in Hyderabad
            </h2>
            <p className="mt-4 text-base text-[#475569] leading-relaxed [text-wrap:pretty]">
              We started APM to make laundry simple, reliable, and convenient. No more carrying heavy bags to the laundry shop or waiting in line. From everyday clothes to delicate silk sarees and suits, we clean, press, and deliver your garments right to your door across Hyderabad.
            </p>

            {/* List format with trust stats & commitments */}
            <div className="mt-8 space-y-4 text-sm sm:text-base">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#74A72E] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <strong className="font-semibold text-[#1E293B]">Gentle, Safe Cleaning:</strong>{" "}
                  <span className="text-[#475569]">
                    We use gentle, skin-friendly solvents that remove stains from silk sarees, suits, and sherwanis without chemical smells, shrinkage, or fabric damage.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#74A72E] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <strong className="font-semibold text-[#1E293B]">Free Pickup Within 3 km:</strong>{" "}
                  <span className="text-[#475569]">
                    Enjoy free doorstep pickup and delivery within 3 km of our Panchavati Colony shop, with regular service scheduled across Hyderabad.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#74A72E] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <strong className="font-semibold text-[#1E293B]">Trusted by Thousands:</strong>{" "}
                  <span className="text-[#475569]">
                    Over 2 years of experience and more than 40,000 customer orders handled with care.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#74A72E] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <strong className="font-semibold text-[#1E293B]">Working Hours:</strong>{" "}
                  <span className="text-[#475569]">
                    Open Saturday to Thursday from 10:00 AM to 10:00 PM (Closed on Fridays).
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-[#1D6F9E] hover:bg-[#16587E] transition-colors"
              >
                Schedule a Pickup
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
