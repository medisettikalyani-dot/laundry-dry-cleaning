"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ServiceType = "wash-and-fold" | "wash-and-iron" | "dry-cleaning" | "";

interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  service: ServiceType;
  message: string;
  whatsappUpdates: boolean;
}

interface ContactCardProps {
  isHomepage?: boolean;
}

export function ContactCard({ isHomepage = false }: ContactCardProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phoneNumber: "",
    service: "",
    message: "",
    whatsappUpdates: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean client-side submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
      // Reset input form
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        service: "",
        message: "",
        whatsappUpdates: true,
      });
      // Log for developer inspection without claiming backend synchronization
      console.info("[APM Contact Page] Service booking submitted:", formData);
    }, 700);
  };

  const handleReset = () => {
    setSubmittedData(null);
  };

  return (
    <div
      className={cn(
        "relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        isHomepage ? "py-2 sm:py-4" : "py-6 sm:py-8 lg:py-10"
      )}
    >
      {/* Subtle Breadcrumb Navigation - only on dedicated page */}
      {!isHomepage && (
        <nav
          aria-label="Breadcrumb"
          className="flex items-center space-x-2 text-xs sm:text-sm text-[#4F4F4F] mb-4 sm:mb-6"
        >
          <Link
            href="/"
            className="hover:text-[#C74708] transition-colors flex items-center gap-1 font-medium"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span>Home</span>
          </Link>
          <span className="text-[#A0988E]">/</span>
          <span className="text-[#C74708] font-semibold">Contact &amp; Book Service</span>
        </nav>
      )}

      {/* Main Two-Column Card Container Matching Reference Layout */}
      <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_16px_50px_rgba(32,32,32,0.08)] border border-[#E9D9C9] bg-white flex flex-col lg:flex-row items-stretch">
        
        {/* ========================================================= */}
        {/* LEFT SIDE (65%): Professional Laundry Photograph          */}
        {/* ========================================================= */}
        <div className="relative w-full lg:w-[65%] min-h-[360px] sm:min-h-[460px] lg:min-h-[720px] bg-[#E9D9C9]/30 overflow-hidden group">
          <Image
            src="/images/contact-laundry.jpg"
            alt="APM Luxury laundry atelier with freshly pressed linens and garment care"
            fill
            sizes="(max-width: 1024px) 100vw, 65vw"
            className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
          />

          {/* Gentle vignette / gradient overlay to enhance visual richness */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10 pointer-events-none" />

          {/* Bottom Badge / Pill on Image (Mirroring Reference Floating Bar) */}
          <div className="absolute bottom-5 sm:bottom-7 left-5 sm:left-7 right-5 sm:right-7 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-[#E9D9C9]/80 shadow-[0_8px_20px_rgba(0,0,0,0.12)]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C74708] animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-[#202020]">
                Doorstep Pickup &amp; Express Delivery in Hyderabad
              </span>
            </div>

            <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-medium">
              <span>Eco-Friendly Organic Solvents</span>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* RIGHT SIDE (35%): Warm Cream/Beige Booking Form           */}
        {/* ========================================================= */}
        <div className="w-full lg:w-[35%] bg-[#FAF5EF] p-6 sm:p-8 lg:p-9 xl:p-11 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-[#E9D9C9]">
          
          {/* Header Block */}
          <div className="mb-6 sm:mb-7">
            {isHomepage ? (
              <h2 className="text-2xl sm:text-3xl lg:text-[2.1rem] font-bold text-[#202020] tracking-tight leading-tight">
                Let&apos;s Make Laundry Easier
              </h2>
            ) : (
              <h1 className="text-2xl sm:text-3xl lg:text-[2.1rem] font-bold text-[#202020] tracking-tight leading-tight">
                Let&apos;s Make Laundry Easier
              </h1>
            )}
            <p className="mt-2 text-xs sm:text-sm text-[#4F4F4F] leading-relaxed">
              Book your laundry service in Hyderabad today. We&apos;ll take care of your clothes.
            </p>
          </div>

          {/* If form was just submitted, show confirmation state */}
          {submittedData ? (
            <div className="rounded-2xl bg-white border border-[#E9D9C9] p-6 shadow-sm animate-fadeIn space-y-4">
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

              <div className="text-center">
                <h3 className="text-lg font-bold text-[#202020]">
                  Service Request Received!
                </h3>
                <p className="text-xs sm:text-sm text-[#4F4F4F] mt-1.5 leading-relaxed">
                  Thank you, <strong className="text-[#202020]">{submittedData.fullName}</strong>.
                  We have noted your interest in our{" "}
                  <strong className="text-[#C74708]">
                    {submittedData.service === "wash-and-fold"
                      ? "Wash & Fold"
                      : submittedData.service === "wash-and-iron"
                      ? "Wash & Iron"
                      : "Dry Cleaning"}
                  </strong>{" "}
                  service.
                </p>
                <div className="mt-3 p-3 rounded-xl bg-[#FAF5EF] border border-[#E9D9C9] text-xs text-[#595959] leading-relaxed text-left space-y-1">
                  <p>
                    <span className="font-semibold text-[#202020]">Contact:</span> +91{" "}
                    {submittedData.phoneNumber}
                  </p>
                  <p>
                    <span className="font-semibold text-[#202020]">Email:</span>{" "}
                    {submittedData.email}
                  </p>
                  <p className="pt-1 text-[#C74708] font-medium text-[11px]">
                    We will contact you shortly to coordinate your doorstep pickup.
                  </p>
                </div>
              </div>

              {/* Instant WhatsApp Confirmation Button */}
              <a
                href={`https://wa.me/?text=${encodeURIComponent(
                  `Hello APM Laundry! I have booked a service:\nName: ${submittedData.fullName}\nService: ${submittedData.service}\nPhone: +91 ${submittedData.phoneNumber}\nEmail: ${submittedData.email}${
                    submittedData.message ? `\nNotes: ${submittedData.message}` : ""
                  }`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#25D366] hover:bg-[#20BA5A] transition-colors shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>Send via WhatsApp to Confirm</span>
              </a>

              <button
                type="button"
                onClick={handleReset}
                className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-[#202020] bg-white border border-[#E9D9C9] hover:bg-[#F8F0E7] transition-colors shadow-xs"
              >
                Book Another Service
              </button>
            </div>
          ) : (
            /* Interactive Booking Form */
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-4.5">
              
              {/* Full Name Field */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-[11px] font-bold tracking-wider text-[#3D3A37] uppercase mb-1.5"
                >
                  Full Name <span className="text-[#C74708]">*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-3.5 py-2.5 sm:py-3 text-sm rounded-lg bg-white border border-[#DBCFC2] text-[#202020] placeholder:text-[#9C948B] hover:border-[#C74708]/50 focus:outline-none focus:border-[#C74708] focus:ring-2 focus:ring-[#C74708]/15 transition-all duration-200"
                />
              </div>

              {/* Email Address Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-[11px] font-bold tracking-wider text-[#3D3A37] uppercase mb-1.5"
                >
                  Email Address <span className="text-[#C74708]">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  className="w-full px-3.5 py-2.5 sm:py-3 text-sm rounded-lg bg-white border border-[#DBCFC2] text-[#202020] placeholder:text-[#9C948B] hover:border-[#C74708]/50 focus:outline-none focus:border-[#C74708] focus:ring-2 focus:ring-[#C74708]/15 transition-all duration-200"
                />
              </div>

              {/* Phone Number Field with Indian Flag / Country Prefix */}
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-[11px] font-bold tracking-wider text-[#3D3A37] uppercase mb-1.5"
                >
                  Phone Number <span className="text-[#C74708]">*</span>
                </label>
                <div className="relative flex rounded-lg border border-[#DBCFC2] bg-white hover:border-[#C74708]/50 focus-within:border-[#C74708] focus-within:ring-2 focus-within:ring-[#C74708]/15 transition-all duration-200 overflow-hidden">
                  <div className="flex items-center gap-1.5 px-3 bg-[#F4EDE4]/60 border-r border-[#DBCFC2]/70 select-none text-xs font-semibold text-[#3D3A37]">
                    <span className="text-base leading-none" role="img" aria-label="India flag">
                      🇮🇳
                    </span>
                    <span>+91</span>
                  </div>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    autoComplete="tel"
                    required
                    pattern="[0-9\s-]{10,13}"
                    title="Please enter a valid 10-digit phone number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Enter 10-digit number"
                    className="w-full px-3.5 py-2.5 sm:py-3 text-sm bg-transparent text-[#202020] placeholder:text-[#9C948B] focus:outline-none"
                  />
                </div>

                {/* WhatsApp Updates Checkbox (Directly from reference screenshot) */}
                <label className="flex items-center gap-2.5 mt-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    name="whatsappUpdates"
                    checked={formData.whatsappUpdates}
                    onChange={handleChange}
                    className="w-4 h-4 rounded text-[#C74708] accent-[#C74708] focus:ring-[#C74708] border-[#DBCFC2] cursor-pointer"
                  />
                  <span className="text-xs text-[#5A5550]">
                    Send me updates on WhatsApp
                  </span>
                </label>
              </div>

              {/* Select Service Dropdown */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-[11px] font-bold tracking-wider text-[#3D3A37] uppercase mb-1.5"
                >
                  Select Service <span className="text-[#C74708]">*</span>
                </label>
                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full appearance-none px-3.5 py-2.5 sm:py-3 text-sm rounded-lg bg-white border border-[#DBCFC2] text-[#202020] hover:border-[#C74708]/50 focus:outline-none focus:border-[#C74708] focus:ring-2 focus:ring-[#C74708]/15 transition-all duration-200 pr-10 cursor-pointer"
                  >
                    <option value="" disabled>
                      Select Service
                    </option>
                    <option value="wash-and-fold">Wash &amp; Fold</option>
                    <option value="wash-and-iron">Wash &amp; Iron</option>
                    <option value="dry-cleaning">Dry Cleaning</option>
                  </select>
                  <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#7A7268]">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-[11px] font-bold tracking-wider text-[#3D3A37] uppercase mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Special instructions, pickup time, or delicate fabric notes..."
                  className="w-full px-3.5 py-2.5 sm:py-3 text-sm rounded-lg bg-white border border-[#DBCFC2] text-[#202020] placeholder:text-[#9C948B] hover:border-[#C74708]/50 focus:outline-none focus:border-[#C74708] focus:ring-2 focus:ring-[#C74708]/15 transition-all duration-200 resize-none"
                />
              </div>

              {/* Submit Button: "BOOK YOUR SERVICE" */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full py-3.5 px-6 rounded-lg font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200",
                    "text-white bg-[#C74708] hover:bg-[#AF3C05] active:scale-[0.99]",
                    "shadow-[0_4px_14px_rgba(199,71,8,0.25)] hover:shadow-[0_6px_20px_rgba(199,71,8,0.35)]",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2869AE] focus-visible:ring-offset-2",
                    "flex items-center justify-center gap-2",
                    isSubmitting && "opacity-80 cursor-wait"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      <span>PROCESSING...</span>
                    </>
                  ) : (
                    <span>BOOK YOUR SERVICE</span>
                  )}
                </button>
              </div>

              {/* Terms and Privacy Note */}
              <p className="text-[11px] sm:text-xs text-[#7A7268] text-center leading-relaxed pt-1">
                By submitting this form, you agree to the{" "}
                <Link
                  href="/terms"
                  className="underline hover:text-[#C74708] transition-colors"
                >
                  terms &amp; conditions
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="underline hover:text-[#C74708] transition-colors"
                >
                  privacy policy
                </Link>
                .
              </p>
            </form>
          )}
        </div>
      </div>

      {/* Floating Action Buttons Matching Reference UI (Right Edge) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/?text=Hello%20APM%20Laundry%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with APM Laundry on WhatsApp"
          className="group relative w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_20px_rgba(37,211,102,0.35)] hover:shadow-[0_10px_25px_rgba(37,211,102,0.5)] hover:scale-105 active:scale-95 transition-all duration-200"
        >
          {/* WhatsApp SVG Icon */}
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          <span className="absolute right-full mr-3 px-2.5 py-1 rounded-md bg-[#202020] text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
            Chat on WhatsApp
          </span>
        </a>

        {/* Quick Assistance Call/Chat Floating Button */}
        <button
          type="button"
          onClick={() => {
            const formElement = document.getElementById("fullName");
            formElement?.scrollIntoView({ behavior: "smooth", block: "center" });
            formElement?.focus();
          }}
          aria-label="Quick Booking Assistance"
          className="group relative w-12 h-12 rounded-2xl bg-[#C74708] text-white flex items-center justify-center shadow-[0_8px_20px_rgba(199,71,8,0.35)] hover:shadow-[0_10px_25px_rgba(199,71,8,0.5)] hover:scale-105 active:scale-95 transition-all duration-200"
        >
          {/* Chat Bubble Icon */}
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <span className="absolute right-full mr-3 px-2.5 py-1 rounded-md bg-[#202020] text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
            Book Service Form
          </span>
        </button>
      </div>
    </div>
  );
}

export default ContactCard;
