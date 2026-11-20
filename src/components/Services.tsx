import React from "react";
import { ServiceGroup } from "./services/ServiceGroup";
import { servicesData } from "./services/servicesData";

export function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-10 sm:py-14 md:py-16 bg-[#F8F0E7]"
      aria-label="Our Garment Care Services"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vertical Service Groups */}
        <div className="flex flex-col space-y-14 sm:space-y-18">
          {servicesData.map((service) => (
            <ServiceGroup key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
