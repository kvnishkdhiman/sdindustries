import Link from "next/link";
import { Network, Handshake, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Our Associations | SD Industries",
  description: "Learn about the international associations, technical affiliations, and bodies connected with SD Industries.",
};

export default function Associations() {
  return (
    <div className="bg-white min-h-screen pt-8 pb-16">
      <div className="container mx-auto px-6 max-w-4xl space-y-12">
        <div className="border-b border-[#E0E0E0] pb-6">
          <h1 className="text-4xl font-bold font-heading text-[#0B2A4A]">
            <strong>Our</strong> Associations
          </h1>
          <p className="text-muted-foreground mt-2 font-body text-lg">
            Technical collaborations and industry body memberships driving steel mill innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-[#E0E0E0] p-8 rounded-[4px] space-y-4">
            <div className="h-12 w-12 bg-[#F5F6F7] flex items-center justify-center rounded">
              <Network className="text-[#E4572E]" size={24} />
            </div>
            <h3 className="text-xl font-bold text-[#0B2A4A]">Metallurgical Design Guild</h3>
            <p className="text-sm text-[#1C1C1C]/80 leading-relaxed font-body">
              SD Industries maintains active membership in core steel consultancy organizations, collaborating on state-of-the-art software modeling.
            </p>
          </div>

          <div className="border border-[#E0E0E0] p-8 rounded-[4px] space-y-4">
            <div className="h-12 w-12 bg-[#F5F6F7] flex items-center justify-center rounded">
              <Handshake className="text-[#E4572E]" size={24} />
            </div>
            <h3 className="text-xl font-bold text-[#0B2A4A]">Star Export Affiliations</h3>
            <p className="text-sm text-[#1C1C1C]/80 leading-relaxed font-body">
              Member of regional export promotional councils, enabling efficient cargo dispatch and technical clearance across international ports.
            </p>
          </div>

          <div className="border border-[#E0E0E0] p-8 rounded-[4px] space-y-4">
            <div className="h-12 w-12 bg-[#F5F6F7] flex items-center justify-center rounded">
              <ShieldCheck className="text-[#E4572E]" size={24} />
            </div>
            <h3 className="text-xl font-bold text-[#0B2A4A]">ISO Regulatory Compliance</h3>
            <p className="text-sm text-[#1C1C1C]/80 leading-relaxed font-body">
              Our processes undergo regular external validation checks to guarantee alignment with globally recognized ISO 9001 quality audits.
            </p>
          </div>
        </div>

        <div className="bg-[#F5F6F7] p-8 border border-[#E0E0E0] rounded-[4px] text-center space-y-4">
          <h3 className="text-lg font-bold text-[#0B2A4A]">Looking for Collaborative Turnkey Solutions?</h3>
          <p className="text-sm text-[#1C1C1C]/80 max-w-xl mx-auto font-body">
            We partner with regional contractors, civil engineers, and local project planners to deliver top quality greenfield steel plant commissionings.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-block bg-[#E4572E] text-white font-semibold uppercase tracking-wider text-sm px-6 py-3 rounded-[4px] hover:bg-[#E4572E]/90 transition-all"
            >
              Contact Collaboration Desk
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
