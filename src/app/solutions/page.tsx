import Link from "next/link";
import { CheckCircle2, BarChart3 } from "lucide-react";

export const metadata = {
  title: "Solutions | SD Industries",
  description: "Turnkey plant engineering, greenfield consultancy, and brownfield modernization services offered by SD Industries.",
};

export default function Solutions() {
  return (
    <div className="bg-white min-h-screen pt-8 pb-16">
      <div className="container mx-auto px-6 max-w-5xl space-y-12">
        <div className="border-b border-[#E0E0E0] pb-6">
          <h1 className="text-4xl font-bold font-heading text-[#0B2A4A]">
            <strong>Engineering</strong> Solutions
          </h1>
          <p className="text-muted-foreground mt-2 font-body text-lg">
            Technical advisory, plant architecture, and execution support by metallurgy experts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 pt-4">
          <div className="border border-[#E0E0E0] p-8 rounded-[4px] space-y-4">
            <h3 className="text-2xl font-bold text-[#0B2A4A] flex items-center gap-2">
              <CheckCircle2 className="text-[#E4572E]" /> Greenfield Setup
            </h3>
            <p className="text-sm text-[#1C1C1C]/80 leading-relaxed font-body">
              SD Industries guides operators through conceptual layout planning, civil drafting reviews, structural framing designs, machine procurement, utilities planning, and line commissioning.
            </p>
          </div>

          <div className="border border-[#E0E0E0] p-8 rounded-[4px] space-y-4">
            <h3 className="text-2xl font-bold text-[#0B2A4A] flex items-center gap-2">
              <BarChart3 className="text-[#E4572E]" /> Brownfield Upgrades
            </h3>
            <p className="text-sm text-[#1C1C1C]/80 leading-relaxed font-body">
              Modernize existing mills. We conduct thorough audit sequences to optimize stand gears, increase automation loops, speed up coiling lines, and reduce specific energy consumption per ton.
            </p>
          </div>
        </div>

        <div className="bg-[#F5F6F7] p-8 border border-[#E0E0E0] rounded-[4px] space-y-4">
          <h3 className="text-xl font-bold text-[#0B2A4A]">Customized Engineering Inquiries</h3>
          <p className="text-sm text-[#1C1C1C]/80 font-body">
            Need special purpose shear controls, dynamic furnace heat tuning software, or custom mechanical stands alignments? Get in touch with our engineering desk.
          </p>
          <div className="pt-2">
            <Link
              href="/contact/product-inquiry"
              className="bg-[#E4572E] text-white font-semibold uppercase tracking-wider text-sm px-6 py-3 rounded-[4px] hover:bg-[#E4572E]/90 transition-all inline-block"
            >
              Inquire Solutions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
