import { FileDown } from "lucide-react";

export const metadata = {
  title: "Newsletters | SD Industries",
  description: "Download the monthly engineering bulletins and structural newsletters published by SD Industries.",
};

export default function Newsletters() {
  return (
    <div className="bg-white min-h-screen pt-8 pb-16">
      <div className="container mx-auto px-6 max-w-4xl space-y-12">
        <div className="border-b border-[#E0E0E0] pb-6">
          <h1 className="text-4xl font-bold font-heading text-[#0B2A4A]">
            <strong>Technical</strong> Newsletters
          </h1>
          <p className="text-muted-foreground mt-2 font-body text-lg">
            Download our quarterly engineering circulars highlighting mill optimizations and thermodynamic efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              issue: "Q2 2026 Edition",
              topic: "Walking Beam Furnaces and Thermal Optimization",
              desc: "Deep dive analysis into furnace zone layouts, scale formation reduction, and computerized heat profiles."
            },
            {
              issue: "Q1 2026 Edition",
              topic: "Mill Stand Rigidity and Axial Torsion Management",
              desc: "Engineering report on structural deflection calculations for housingless stands and cardan shaft load profiles."
            }
          ].map((newsletter, idx) => (
            <div key={idx} className="border border-[#E0E0E0] p-6 rounded-[4px] bg-[#F5F6F7] flex flex-col justify-between h-48">
              <div>
                <span className="text-xs font-bold text-[#E4572E] uppercase tracking-wider">{newsletter.issue}</span>
                <h3 className="text-lg font-bold text-[#0B2A4A] mt-1 mb-2">{newsletter.topic}</h3>
                <p className="text-xs text-[#1C1C1C]/70 font-body leading-relaxed">{newsletter.desc}</p>
              </div>
              <button className="text-xs font-bold text-[#0B2A4A] hover:text-[#E4572E] transition-colors flex items-center gap-1 self-start mt-4">
                <FileDown size={16} /> Download PDF Bulletin
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
