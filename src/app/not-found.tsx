import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist or has been moved.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F0E7] text-[#202020]">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center bg-white rounded-3xl border border-[#E9D9C9] p-8 sm:p-10 shadow-[0_8px_30px_rgba(32,32,32,0.06)]">
          <div className="w-16 h-16 rounded-full bg-[#FDF2EC] text-[#C74708] flex items-center justify-center mx-auto mb-4 border border-[#F3D5C3]">
            <span className="text-2xl font-black">404</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#202020] tracking-tight mb-2">
            Page Not Found
          </h1>
          <p className="text-sm text-[#4F4F4F] leading-relaxed mb-6">
            The page you are looking for doesn&apos;t exist, has been removed, or is temporarily unavailable.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold text-white bg-[#C74708] hover:bg-[#AF3C05] active:scale-[0.98] transition-all duration-200 shadow-sm"
          >
            Return to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
