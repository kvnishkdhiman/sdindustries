"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-[#1C1C1C]">
        <div className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center max-w-md">
            <h1 className="text-4xl font-bold text-[#0B2A4A] mb-4">Application Error</h1>
            <p className="text-[#1C1C1C]/80 mb-6">
              An unexpected error occurred. Please try refreshing the page.
            </p>
            <button
              onClick={reset}
              className="bg-[#E4572E] text-white font-bold uppercase tracking-wider text-sm px-6 py-3 rounded-[4px] hover:bg-[#E4572E]/90 transition-all"
            >
              Refresh Page
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}