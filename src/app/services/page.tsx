import { Hammer, Cog, ClipboardCheck, Shuffle } from "lucide-react";

export const metadata = {
  title: "Our Services | SD Industries",
  description: "Explore the consulting, mechanical maintenance, engineering design, and installation services of SD Industries.",
};

export default function Services() {
  return (
    <div className="bg-white min-h-screen pt-8 pb-16">
      <div className="container mx-auto px-6 max-w-5xl space-y-12">
        <div className="border-b border-[#E0E0E0] pb-6">
          <h1 className="text-4xl font-bold font-heading text-[#0B2A4A]">
            <strong>Our</strong> Services
          </h1>
          <p className="text-muted-foreground mt-2 font-body text-lg">
            Engineering services designed to optimize rolling mill profitability and reduce specific energy use.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-[#E0E0E0] p-8 rounded-[4px] space-y-4">
            <div className="h-12 w-12 bg-[#F5F6F7] flex items-center justify-center rounded">
              <ClipboardCheck className="text-[#E4572E]" size={24} />
            </div>
            <h3 className="text-xl font-bold text-[#0B2A4A]">Feasibility & Conceptualization</h3>
            <p className="text-sm text-[#1C1C1C]/80 leading-relaxed font-body">
              Techno-economic viability reviews, metallurgical load profiles, land mapping audits, and utilities budget preparation.
            </p>
          </div>

          <div className="border border-[#E0E0E0] p-8 rounded-[4px] space-y-4">
            <div className="h-12 w-12 bg-[#F5F6F7] flex items-center justify-center rounded">
              <Cog className="text-[#E4572E]" size={24} />
            </div>
            <h3 className="text-xl font-bold text-[#0B2A4A]">Detailed Engineering & Design</h3>
            <p className="text-sm text-[#1C1C1C]/80 leading-relaxed font-body">
              Finite Element Analysis (FEA) testing of stand housings, custom speed reducer sizing, and reheating furnace thermodynamic optimization.
            </p>
          </div>

          <div className="border border-[#E0E0E0] p-8 rounded-[4px] space-y-4">
            <div className="h-12 w-12 bg-[#F5F6F7] flex items-center justify-center rounded">
              <Hammer className="text-[#E4572E]" size={24} />
            </div>
            <h3 className="text-xl font-bold text-[#0B2A4A]">Installation & Alignment</h3>
            <p className="text-sm text-[#1C1C1C]/80 leading-relaxed font-body">
              Mill stand level alignments, dynamic pinion shafts calibration, coiler alignment checks, and water system testing.
            </p>
          </div>

          <div className="border border-[#E0E0E0] p-8 rounded-[4px] space-y-4">
            <div className="h-12 w-12 bg-[#F5F6F7] flex items-center justify-center rounded">
              <Shuffle className="text-[#E4572E]" size={24} />
            </div>
            <h3 className="text-xl font-bold text-[#0B2A4A]">Commissioning Support</h3>
            <p className="text-sm text-[#1C1C1C]/80 leading-relaxed font-body">
              Supervising hot trials, validating output tonnage parameters, conducting quality audits, and operator safety training.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
