"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Page error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-white">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold text-[#0B2A4A] mb-4">Page Error</h1>
        <p className="text-[#1C1C1C]/80 mb-6">
          Something went wrong while loading this page.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-[#E4572E] text-white font-bold uppercase tracking-wider text-sm px-6 py-3 rounded-[4px] hover:bg-[#E4572E]/90 transition-all"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="bg-[#0B2A4A] text-white font-bold uppercase tracking-wider text-sm px-6 py-3 rounded-[4px] hover:bg-[#0B2A4A]/90 transition-all"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}