import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F4F8FA] text-[#1E293B]">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center bg-white rounded-3xl border border-[#E2EDF3] p-8 sm:p-10 shadow-xs">
          <div className="w-16 h-16 rounded-full bg-[#EBF5FA] text-[#1D6F9E] flex items-center justify-center mx-auto mb-4 border border-[#C3DFEE]">
            <span className="text-2xl font-black">404</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1E293B] tracking-tight mb-2">
            Page Not Found
          </h1>
          <p className="text-sm text-[#475569] leading-relaxed mb-6">
            The page you are looking for doesn&apos;t exist, has been removed, or is temporarily unavailable.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold text-white bg-[#1D6F9E] hover:bg-[#16587E] active:scale-[0.98] transition-all duration-200 shadow-sm"
          >
            Return to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
