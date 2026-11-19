import React from "react";
import { ServiceGroup } from "./services/ServiceGroup";
import { servicesData } from "./services/servicesData";

export function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-10 sm:py-14 md:py-18 bg-[#F8F0E7]"
      aria-label="Our Garment Care Services"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Clean & Minimal */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E9D9C9]/70 border border-[#E9D9C9] text-xs font-semibold text-[#202020] uppercase tracking-wider mb-2.5">
            <span className="w-2 h-2 rounded-full bg-[#C74708]" />
            <span>Services</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#202020]">
            Our <span className="text-[#C74708]">Services</span>
          </h2>
        </div>

        {/* Vertical Service Groups */}
        <div className="flex flex-col space-y-12 sm:space-y-16">
          {servicesData.map((service) => (
            <ServiceGroup key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
