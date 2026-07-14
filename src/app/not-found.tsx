import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-[#E4572E] mb-4">404</h1>
        <h2 className="text-2xl font-bold text-[#0B2A4A] mb-4">Page Not Found</h2>
        <p className="text-[#1C1C1C]/80 mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#E4572E] text-white font-bold uppercase tracking-wider text-sm px-6 py-3 rounded-[4px] hover:bg-[#E4572E]/90 transition-all"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}