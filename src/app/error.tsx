"use client";

import React, { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center p-6 text-center">
      <h2 className="text-xl font-bold text-[#1E293B] mb-2">Something went wrong</h2>
      <p className="text-sm text-[#475569] mb-4 max-w-md">
        An error occurred while loading this section. Please try again.
      </p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 rounded-full text-xs font-semibold text-white bg-[#1D6F9E] hover:bg-[#16587E] transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
