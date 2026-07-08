import { ShieldCheck, HardHat, Warehouse } from "lucide-react";

export const metadata = {
  title: "Manufacturing Infrastructure | SD Industries",
  description: "Take a tour of our Ludhiana machine tooling shop, custom test beds, and assembly floors.",
};

export default function Infrastructure() {
  return (
    <div className="bg-white min-h-screen pt-8 pb-16">
      <div className="container mx-auto px-6 max-w-4xl space-y-12">
        <div className="border-b border-[#E0E0E0] pb-6">
          <h1 className="text-4xl font-bold font-heading text-[#0B2A4A]">
            <strong>Our</strong> Infrastructure
          </h1>
          <p className="text-muted-foreground mt-2 font-body text-lg">
            Inside our machining and manufacturing division located in Ludhiana, Punjab.
          </p>
        </div>

        <div className="space-y-6 text-[#1C1C1C]/80 leading-relaxed font-body">
          <p>
            SD Industries operates a highly integrated heavy engineering shop spanning over 45,000 square feet. Outfitted with advanced horizontal boring machinery, CNC gear profile grinders, and computerized dynamic balancing test-beds, our facilities ensure all manufactured mill gearboxes and stands satisfy global technical tolerance limits.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-[#E0E0E0] p-6 rounded-[4px] bg-[#F5F6F7] space-y-3">
            <Warehouse className="text-[#E4572E]" size={28} />
            <h3 className="font-bold text-[#0B2A4A]">Machining Center</h3>
            <p className="text-xs text-[#1C1C1C]/80 leading-relaxed font-body">
              Outfitted with CNC planners, heavy lathe machining units, and radial drilling blocks for precision casting adjustments.
            </p>
          </div>

          <div className="border border-[#E0E0E0] p-6 rounded-[4px] bg-[#F5F6F7] space-y-3">
            <ShieldCheck className="text-[#E4572E]" size={28} />
            <h3 className="font-bold text-[#0B2A4A]">Quality Assurance Desk</h3>
            <p className="text-xs text-[#1C1C1C]/80 leading-relaxed font-body">
              Equipped with ultrasonic testers, gear teeth micro-profile analyzers, and hardness verification tools matching ISO standards.
            </p>
          </div>

          <div className="border border-[#E0E0E0] p-6 rounded-[4px] bg-[#F5F6F7] space-y-3">
            <HardHat className="text-[#E4572E]" size={28} />
            <h3 className="font-bold text-[#0B2A4A]">Assembly & Trial Floor</h3>
            <p className="text-xs text-[#1C1C1C]/80 leading-relaxed font-body">
              Dedicated test bed area allowing complete run-time validation of combination speed reducers and intermediate stand alignments prior to shipment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
