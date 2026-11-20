"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/seoConfig";

interface BookingFormData {
  name: string;
  phone: string;
  service: string;
  area: string;
  date: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  service?: string;
  area?: string;
  date?: string;
  message?: string;
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
    date: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);
  const [generatedUrl, setGeneratedUrl] = useState("");

  const todayStr = new Date().toISOString().split("T")[0];

  const validate = (data: BookingFormData): FormErrors => {
    const errs: FormErrors = {};

    if (!data.name.trim() || data.name.trim().length < 2) {
      errs.name = "Please enter your name (at least 2 characters).";
    }

    const cleanPhone = data.phone.replace(/\D/g, "");
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      errs.phone = "Enter a 10-digit mobile number starting with 6, 7, 8 or 9.";
    }

    if (!data.service) {
      errs.service = "Please select a service.";
    }

    if (!data.area.trim() || data.area.trim().length < 2) {
      errs.area = "Please enter your pickup area or address in Hyderabad.";
    }

    if (data.date && data.date < todayStr) {
      errs.date = "Pickup date cannot be in the past.";
    }

    if (data.message && data.message.length > 300) {
      errs.message = "Message must be 300 characters or fewer.";
    }

    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
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
      formData.date ? `Pickup date: ${formData.date}` : null,
      formData.message.trim() ? `Note: ${formData.message.trim()}` : null,
    ].filter(Boolean);

    const message = messageLines.join("\n");
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    setGeneratedUrl(url);

    // Open WhatsApp in a new tab without arbitrary timeouts
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const handleEdit = () => {
    setSent(false);
  };

  return (
    <div
      className={cn(
        "relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
        isHomepage ? "py-2 sm:py-4" : "py-6 sm:py-8 lg:py-10"
      )}
    >
      {!isHomepage && (
        <nav
          aria-label="Breadcrumb"
          className="flex items-center space-x-2 text-sm text-[#4F4F4F] mb-6"
        >
          <Link
            href="/"
            className="hover:text-[#C74708] transition-colors font-medium min-h-[44px] inline-flex items-center"
          >
            Home
          </Link>
          <span className="text-[#54504C]">/</span>
          <span className="text-[#C74708] font-semibold">Book Service</span>
        </nav>
      )}

      {/* 50 / 50 Container Layout */}
      <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E9D9C9] bg-white shadow-sm flex flex-col lg:flex-row items-stretch">
        {/* Left Side (50%): Photo without distracting image pills */}
        <div className="relative w-full lg:w-1/2 min-h-[300px] sm:min-h-[420px] lg:min-h-[640px] bg-[#E9D9C9] overflow-hidden">
          <Image
            src="/images/contact-laundry.jpg"
            alt="APM Laundry studio with freshly pressed garments"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Right Side (50%): Clean Booking Form */}
        <div className="w-full lg:w-1/2 bg-[#FAF5EF] p-6 sm:p-8 lg:p-10 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-[#E9D9C9]">
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#202020] tracking-tight">
              Schedule Your Pickup
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#4F4F4F] leading-relaxed [text-wrap:pretty]">
              Fill in your details below to book via WhatsApp. Our pickup team coordinates directly with you across Hyderabad.
            </p>
          </div>

          {sent ? (
            <div className="rounded-2xl bg-white border border-[#E9D9C9] p-6 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#EAF1F8] text-[#2869AE] flex items-center justify-center mx-auto">
                <svg
                  className="w-6 h-6"
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

              <div className="text-center space-y-2">
                <h3 className="text-lg sm:text-xl font-bold text-[#202020]">
                  WhatsApp Opened
                </h3>
                <p className="text-sm text-[#4F4F4F] leading-relaxed [text-wrap:pretty]">
                  WhatsApp opened with your booking details typed in. Tap <strong>Send</strong> in WhatsApp to confirm your pickup with our team.
                </p>

                {generatedUrl && (
                  <p className="text-sm text-[#4F4F4F] pt-2">
                    Didn&apos;t open?{" "}
                    <a
                      href={generatedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#C74708] underline hover:text-[#AF3C05]"
                    >
                      Tap here to open WhatsApp
                    </a>
                  </p>
                )}
              </div>

              <div className="p-4 rounded-xl bg-[#FAF5EF] border border-[#E9D9C9] text-sm text-[#202020] space-y-1.5">
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
                {formData.date && (
                  <p>
                    <strong>Preferred Date:</strong> {formData.date}
                  </p>
                )}
                <p>
                  <strong>Helpline / Direct Call:</strong>{" "}
                  <a
                    href={`tel:${siteConfig.contactPhone.replace(/\s+/g, "")}`}
                    className="underline hover:text-[#C74708]"
                  >
                    {siteConfig.contactPhone}
                  </a>
                </p>
              </div>

              <button
                type="button"
                onClick={handleEdit}
                className="w-full min-h-[44px] py-2.5 px-4 rounded-xl text-sm font-semibold text-[#202020] bg-white border border-[#E9D9C9] hover:bg-[#F8F0E7] transition-colors"
              >
                Edit Booking Details
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Full Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#202020] mb-1.5"
                >
                  Full name <span className="text-[#C74708]">*</span>
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
                    "w-full min-h-[44px] px-3.5 py-2.5 text-sm rounded-xl bg-white border text-[#202020] placeholder:text-[#54504C] focus:outline-none focus:ring-2 transition-colors",
                    errors.name
                      ? "border-red-500 focus:ring-red-200"
                      : "border-[#DBCFC2] focus:border-[#C74708] focus:ring-[#C74708]/20"
                  )}
                />
                {errors.name && (
                  <p className="text-sm text-red-600 mt-1 font-medium">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Phone Number: Clean +91 prefix alone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-[#202020] mb-1.5"
                >
                  Phone number <span className="text-[#C74708]">*</span>
                </label>
                <div className="relative flex rounded-xl border border-[#DBCFC2] bg-white overflow-hidden focus-within:border-[#C74708] focus-within:ring-2 focus-within:ring-[#C74708]/20 transition-colors">
                  <div className="flex items-center px-3.5 bg-[#FAF5EF] border-r border-[#DBCFC2] select-none text-sm font-medium text-[#202020]">
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
                    className="w-full min-h-[44px] px-3.5 py-2.5 text-sm bg-transparent text-[#202020] placeholder:text-[#54504C] focus:outline-none"
                  />
                </div>
                {errors.phone && (
                  <p className="text-sm text-red-600 mt-1 font-medium">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Service Selection */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-[#202020] mb-1.5"
                >
                  Select service <span className="text-[#C74708]">*</span>
                </label>
                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full min-h-[44px] appearance-none px-3.5 py-2.5 text-sm rounded-xl bg-white border border-[#DBCFC2] text-[#202020] focus:outline-none focus:border-[#C74708] focus:ring-2 focus:ring-[#C74708]/20 pr-10 cursor-pointer"
                  >
                    <option value="Wash & Iron">Wash &amp; Iron</option>
                    <option value="Dry Cleaning">Dry Cleaning</option>
                    <option value="Wash & Fold">Wash &amp; Fold</option>
                  </select>
                  <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#54504C]">
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
                  <p className="text-sm text-red-600 mt-1 font-medium">
                    {errors.service}
                  </p>
                )}
              </div>

              {/* Area / Address */}
              <div>
                <label
                  htmlFor="area"
                  className="block text-sm font-medium text-[#202020] mb-1.5"
                >
                  Pickup area or address <span className="text-[#C74708]">*</span>
                </label>
                <input
                  id="area"
                  name="area"
                  type="text"
                  required
                  value={formData.area}
                  onChange={handleChange}
                  placeholder="e.g. Jubilee Hills, Road No. 36"
                  className={cn(
                    "w-full min-h-[44px] px-3.5 py-2.5 text-sm rounded-xl bg-white border text-[#202020] placeholder:text-[#54504C] focus:outline-none focus:ring-2 transition-colors",
                    errors.area
                      ? "border-red-500 focus:ring-red-200"
                      : "border-[#DBCFC2] focus:border-[#C74708] focus:ring-[#C74708]/20"
                  )}
                />
                {errors.area && (
                  <p className="text-sm text-red-600 mt-1 font-medium">
                    {errors.area}
                  </p>
                )}
              </div>

              {/* Pickup Date (Optional, min today) */}
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-[#202020] mb-1.5"
                >
                  Preferred pickup date (optional)
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  min={todayStr}
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full min-h-[44px] px-3.5 py-2.5 text-sm rounded-xl bg-white border border-[#DBCFC2] text-[#202020] focus:outline-none focus:border-[#C74708] focus:ring-2 focus:ring-[#C74708]/20"
                />
                {errors.date && (
                  <p className="text-sm text-red-600 mt-1 font-medium">
                    {errors.date}
                  </p>
                )}
              </div>

              {/* Message (Optional, max 300) */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#202020] mb-1.5"
                >
                  Notes or instructions (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={2}
                  maxLength={300}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Special instructions, delicate fabric notes, or preferred time..."
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-white border border-[#DBCFC2] text-[#202020] placeholder:text-[#54504C] focus:outline-none focus:border-[#C74708] focus:ring-2 focus:ring-[#C74708]/20 resize-none"
                />
                {errors.message && (
                  <p className="text-sm text-red-600 mt-1 font-medium">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button: Title-case "Book Now" */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full min-h-[48px] py-3 px-6 rounded-xl font-bold text-sm tracking-wide text-white bg-[#C74708] hover:bg-[#AF3C05] active:scale-[0.99] transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2869AE] flex items-center justify-center gap-2"
                >
                  <span>Book Now</span>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </button>
              </div>

              <p className="text-sm text-[#54504C] text-center pt-1">
                Opens directly in WhatsApp. Need immediate help? Call{" "}
                <a
                  href={`tel:${siteConfig.contactPhone.replace(/\s+/g, "")}`}
                  className="font-semibold text-[#202020] hover:text-[#C74708] underline"
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
