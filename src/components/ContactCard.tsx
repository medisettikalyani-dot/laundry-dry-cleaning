"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/seoConfig";

interface BookingFormData {
  name: string;
  phone: string;
  service: string;
  area: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  service?: string;
  area?: string;
}

interface ContactCardProps {
  isHomepage?: boolean;
}

export function ContactCard({ isHomepage = false }: ContactCardProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    phone: "",
    service: "Wash & Iron",
    area: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);
  const [generatedUrl, setGeneratedUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const s = params.get("service");
      if (s) {
        setFormData((prev) => ({ ...prev, service: s }));
      }
    }
  }, []);

  const validate = (data: BookingFormData): FormErrors => {
    const errs: FormErrors = {};

    if (!data.name.trim() || data.name.trim().length < 2) {
      errs.name = "Please enter your full name.";
    }

    const cleanPhone = data.phone.replace(/\D/g, "");
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      errs.phone = "Please enter a valid 10-digit mobile number.";
    }

    if (!data.service) {
      errs.service = "Please choose a service.";
    }

    if (!data.area.trim() || data.area.trim().length < 2) {
      errs.area = "Please enter your pickup area or address in Hyderabad.";
    }

    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const number = siteConfig.whatsappNumber;

    const messageLines = [
      "New booking from website",
      `Name: ${formData.name.trim()}`,
      `Phone: ${formData.phone.trim()}`,
      `Service: ${formData.service}`,
      `Area: ${formData.area.trim()}`,
    ];

    const message = messageLines.join("\n");
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    setGeneratedUrl(url);

    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const handleEdit = () => {
    setSent(false);
  };

  return (
    <div
      className={cn(
        "relative w-full max-w-5xl mx-auto",
        isHomepage ? "px-4 sm:px-6 py-2" : "px-3 sm:px-6 py-1 sm:py-2"
      )}
    >
      {!isHomepage && (
        <nav
          aria-label="Breadcrumb"
          className="flex items-center space-x-2 text-xs sm:text-sm text-[#475569] mb-2 sm:mb-3"
        >
          <Link
            href="/"
            className="hover:text-[#1D6F9E] transition-colors font-medium inline-flex items-center min-h-[32px]"
          >
            Home
          </Link>
          <span className="text-[#64748B]">/</span>
          <span className="text-[#1D6F9E] font-semibold">Book Service</span>
        </nav>
      )}

      {/* 50 / 50 Container Layout - Original Design Fitted to Screen */}
      <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E2EDF3] bg-white shadow-sm flex flex-col lg:flex-row items-stretch">
        {/* Left Side (50%): Original Photo */}
        <div className="relative w-full lg:w-1/2 min-h-[180px] sm:min-h-[240px] md:min-h-[280px] lg:min-h-0 bg-[#E2EDF3] overflow-hidden">
          <Image
            src="/images/contact-laundry.jpg"
            alt="APM Laundry studio with freshly pressed garments"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Right Side (50%): Original Clean Booking Form */}
        <div className="w-full lg:w-1/2 bg-[#F4F8FA] p-4 sm:p-6 lg:p-7 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-[#E2EDF3]">
          <div className="mb-3.5">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#EBF5FA] border border-[#C3DFEE] text-[#1D6F9E] text-xs font-semibold mb-2">
              <span>Free Pickup &amp; Delivery within 3 km</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#1E293B] tracking-tight">
              Schedule Your Pickup
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-[#475569] leading-relaxed [text-wrap:pretty]">
              Enter your details below to schedule a pickup on WhatsApp. Doorstep service is free within 3 km across Hyderabad. We are open from 10:00 AM to 10:00 PM (closed Fridays).
            </p>
          </div>

          {sent ? (
            <div className="rounded-xl bg-white border border-[#E2EDF3] p-4 sm:p-5 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#EBF5FA] text-[#1D6F9E] flex items-center justify-center mx-auto">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>

              <div className="text-center space-y-1">
                <h3 className="text-base sm:text-lg font-bold text-[#1E293B]">
                  WhatsApp Opened
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed [text-wrap:pretty]">
                  WhatsApp has opened with your booking details ready. Tap <strong>Send</strong> in WhatsApp to confirm your pickup with our team.
                </p>

                {generatedUrl && (
                  <p className="text-xs text-[#475569] pt-1">
                    Didn&apos;t open?{" "}
                    <a
                      href={generatedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#1D6F9E] underline hover:text-[#16587E]"
                    >
                      Tap here to open WhatsApp
                    </a>
                  </p>
                )}
              </div>

              <div className="p-3 rounded-lg bg-[#F4F8FA] border border-[#E2EDF3] text-xs text-[#1E293B] space-y-1">
                <p>
                  <strong>Customer:</strong> {formData.name}
                </p>
                <p>
                  <strong>Phone:</strong> +91 {formData.phone}
                </p>
                <p>
                  <strong>Service:</strong> {formData.service}
                </p>
                <p>
                  <strong>Pickup Area:</strong> {formData.area}
                </p>
                <p>
                  <strong>Helpline / Direct Call:</strong>{" "}
                  <a
                    href={`tel:${siteConfig.contactPhone.replace(/\s+/g, "")}`}
                    className="underline hover:text-[#1D6F9E]"
                  >
                    {siteConfig.contactPhone}
                  </a>
                </p>
              </div>

              <button
                type="button"
                onClick={handleEdit}
                className="w-full min-h-[40px] py-2 px-3 rounded-lg text-xs font-semibold text-[#1E293B] bg-white border border-[#E2EDF3] hover:bg-[#EBF5FA] transition-colors"
              >
                Edit Booking Details
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3" noValidate>
              {/* Full Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold text-[#1E293B] mb-1"
                >
                  Full name <span className="text-[#1D6F9E]">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={cn(
                    "w-full min-h-[40px] px-3 py-2 text-xs sm:text-sm rounded-xl bg-white border text-[#1E293B] placeholder:text-[#64748B] focus:outline-none focus:ring-2 transition-colors",
                    errors.name
                      ? "border-red-500 focus:ring-red-200"
                      : "border-[#CBD5E1] focus:border-[#1D6F9E] focus:ring-[#1D6F9E]/20"
                  )}
                />
                {errors.name && (
                  <p className="text-xs text-red-600 mt-0.5 font-medium">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-semibold text-[#1E293B] mb-1"
                >
                  Phone number <span className="text-[#1D6F9E]">*</span>
                </label>
                <div className="relative flex rounded-xl border border-[#CBD5E1] bg-white overflow-hidden focus-within:border-[#1D6F9E] focus-within:ring-2 focus-within:ring-[#1D6F9E]/20 transition-colors">
                  <div className="flex items-center px-3 bg-[#F4F8FA] border-r border-[#CBD5E1] select-none text-xs font-semibold text-[#1E293B]">
                    +91
                  </div>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    maxLength={10}
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    className="w-full min-h-[40px] px-3 py-2 text-xs sm:text-sm bg-transparent text-[#1E293B] placeholder:text-[#64748B] focus:outline-none"
                  />
                </div>
                {errors.phone && (
                  <p className="text-xs text-red-600 mt-0.5 font-medium">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Service Selection */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-xs font-semibold text-[#1E293B] mb-1"
                >
                  Select service <span className="text-[#1D6F9E]">*</span>
                </label>
                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full min-h-[40px] appearance-none px-3 py-2 text-xs sm:text-sm rounded-xl bg-white border border-[#CBD5E1] text-[#1E293B] focus:outline-none focus:border-[#1D6F9E] focus:ring-2 focus:ring-[#1D6F9E]/20 pr-10 cursor-pointer"
                  >
                    <option value="Wash & Iron">Wash &amp; Iron</option>
                    <option value="Dry Cleaning">Dry Cleaning</option>
                    <option value="Wash & Fold">Wash &amp; Fold</option>
                    <option value="Ironing Only">Ironing Only</option>
                    <option value="Shoe Cleaning">Shoe Cleaning</option>
                    <option value="Carpet Cleaning">Carpet Cleaning</option>
                    <option value="Steam Iron">Steam Iron</option>
                    <option value="Electric Wash">Electric Wash</option>
                    <option value="Hand Wash">Hand Wash</option>
                    <optgroup label="Special Garments & Items">
                      <option value="Wedding Wear">Wedding Wear</option>
                      <option value="Sherwani">Sherwani</option>
                      <option value="Heavy Sarees">Heavy Sarees</option>
                      <option value="Curtains">Curtains</option>
                      <option value="Blankets">Blankets</option>
                    </optgroup>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#64748B]">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                {errors.service && (
                  <p className="text-xs text-red-600 mt-0.5 font-medium">
                    {errors.service}
                  </p>
                )}
              </div>

              {/* Area / Address */}
              <div>
                <label
                  htmlFor="area"
                  className="block text-xs font-semibold text-[#1E293B] mb-1"
                >
                  Pickup area or address <span className="text-[#1D6F9E]">*</span>
                </label>
                <input
                  id="area"
                  name="area"
                  type="text"
                  required
                  value={formData.area}
                  onChange={handleChange}
                  placeholder="e.g. Panchavati Colony, Manikonda"
                  className={cn(
                    "w-full min-h-[40px] px-3 py-2 text-xs sm:text-sm rounded-xl bg-white border text-[#1E293B] placeholder:text-[#64748B] focus:outline-none focus:ring-2 transition-colors",
                    errors.area
                      ? "border-red-500 focus:ring-red-200"
                      : "border-[#CBD5E1] focus:border-[#1D6F9E] focus:ring-[#1D6F9E]/20"
                  )}
                />
                {errors.area && (
                  <p className="text-xs text-red-600 mt-0.5 font-medium">
                    {errors.area}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-1">
                <button
                  type="submit"
                  className="w-full min-h-[44px] py-2.5 px-6 rounded-xl font-bold text-sm tracking-wide text-white bg-[#1D6F9E] hover:bg-[#16587E] active:scale-[0.99] transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6F9E] flex items-center justify-center gap-2"
                >
                  <span>Book Now</span>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </button>
              </div>

              <p className="text-[11px] sm:text-xs text-[#64748B] text-center pt-0.5">
                Opens directly in WhatsApp (10:00 AM – 10:00 PM, closed Fridays). Need help? Call{" "}
                <a
                  href={`tel:${siteConfig.contactPhone.replace(/\s+/g, "")}`}
                  className="font-semibold text-[#1E293B] hover:text-[#1D6F9E] underline"
                >
                  {siteConfig.contactPhone}
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
