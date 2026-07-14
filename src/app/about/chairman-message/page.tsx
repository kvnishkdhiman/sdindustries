import Link from "next/link";
import { MessageSquare } from "lucide-react";

export const metadata = {
  title: "Chairman's Message | SD Industries",
  description: "Read the official statement and founding vision from the Chairman of SD Industries.",
};

export default function ChairmanMessage() {
  return (
    <div className="bg-white min-h-screen pt-8 pb-16">
      <div className="container mx-auto px-6 max-w-3xl space-y-8">
        <div className="border-b border-[#E0E0E0] pb-6">
          <h1 className="text-4xl font-bold font-heading text-[#0B2A4A]">
            <strong>Chairman&apos;s</strong> Message
          </h1>
          <p className="text-muted-foreground mt-2 font-body text-lg">
            A message from our founder & chairman.
          </p>
        </div>

        <div className="space-y-6 text-[#1C1C1C]/80 leading-relaxed font-body text-base">
          <p className="text-xl italic text-[#0B2A4A] border-l-4 border-[#E4572E] pl-6 font-serif my-6">
            &ldquo;Since our founding, SD Industries has stood for one principle &mdash; engineering that never compromises. Every rolling mill we consult on carries that promise forward.&rdquo;
          </p>

          <p>
            {/* TODO: Verify founding year and details from official records */}
            Welcome to SD Industries. When we initiated operations in 1998, the rolling mill sector faced massive challenges regarding energy efficiency and specific fuel consumption. We recognized that B2B steel mill operators required more than generic vendor parts; they needed customized, scientific layout consultation that translates directly into operational uptime.
          </p>

          <p>
            Over the past quarter-century, we have worked diligently to integrate advanced thermodynamic analysis in reheating furnaces and robust gearing layout designs in mill stands. Today, as a recognized Star Export House, our mission remains clear: engineering steel plants that deliver long-lasting, optimized tonnage.
          </p>

          <p>
            We thank our global clients for their trust in our consultancy and engineering services, and we promise to maintain our uncompromising approach to mechanical quality.
          </p>
        </div>

        <div className="pt-6 border-t border-[#E0E0E0] flex items-center justify-between">
          <div>
            {/* TODO: Replace with verified chairman name */}
            <h4 className="font-bold text-[#0B2A4A] text-lg">Chairman Name</h4>
            <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">Founder & Chairman, SD Industries</p>
          </div>
          <Link
            href="/contact"
            className="flex items-center gap-2 border border-[#0B2A4A] hover:bg-[#0B2A4A] hover:text-white text-[#0B2A4A] font-semibold text-sm px-5 py-3 rounded-[4px] transition-all"
          >
            <MessageSquare size={16} /> Partner With Us
          </Link>
        </div>
      </div>
    </div>
  );
}
