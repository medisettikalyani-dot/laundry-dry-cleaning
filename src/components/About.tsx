import React from "react";
import Image from "next/image";
import Link from "next/link";

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-14 sm:py-20 bg-[#F8F0E7]"
      aria-label="About APM Laundry and Dry Cleaning"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Staggered Images without pills/labels */}
          <div className="lg:col-span-6 relative w-full order-2 lg:order-1">
            <div className="relative flex items-center justify-center max-w-[500px] mx-auto">
              {/* Wash & Iron Card */}
              <div className="relative w-1/2 translate-y-4 sm:translate-y-6">
                <div className="relative aspect-[3/4.2] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-[#E9D9C9] bg-[#E9D9C9]">
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
                <div className="relative aspect-[3/4.2] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-[#E9D9C9] bg-[#E9D9C9]">
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
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#202020]">
              Caring for Hyderabad&apos;s Wardrobes
            </h2>
            <p className="mt-4 text-base text-[#4F4F4F] leading-relaxed [text-wrap:pretty]">
              APM was built to provide dependable, professional garment care without the hassle of drop-offs and queues. We combine commercial-grade wash cycles, specialized dry cleaning, and artisan steam pressing with convenient doorstep pickup across Hyderabad.
            </p>

            {/* List format instead of same-size repetitive cards */}
            <div className="mt-8 space-y-4 text-sm sm:text-base">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#C74708] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <strong className="font-semibold text-[#202020]">Dedicated Processing:</strong>{" "}
                  <span className="text-[#4F4F4F]">
                    Everyday wash &amp; iron is kept completely separate from fine silks, woolens, and wedding wear.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#C74708] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <strong className="font-semibold text-[#202020]">Doorstep Convenience:</strong>{" "}
                  <span className="text-[#4F4F4F]">
                    Scheduled pickups and deliveries across Jubilee Hills, Banjara Hills, Hitec City, Madhapur, and surrounding areas.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#C74708] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <strong className="font-semibold text-[#202020]">Clear &amp; Honest Billing:</strong>{" "}
                  <span className="text-[#4F4F4F]">
                    Itemized care for fine garments and simple by-weight service for everyday laundry with no hidden charges.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-[#C74708] hover:bg-[#AF3C05] transition-colors"
              >
                Schedule Doorstep Pickup
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
