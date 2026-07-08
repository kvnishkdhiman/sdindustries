import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Award, Shield, FileText } from "lucide-react";

export const metadata = {
  title: "Who We Are | SD Industries",
  description: "Learn about SD Industries, our history, credentials, and our turnkey engineering solutions for steel mills.",
};

export default function WhoWeAre() {
  return (
    <div className="bg-white min-h-screen pt-8 pb-16">
      <div className="container mx-auto px-6 max-w-5xl space-y-12">
        <div className="border-b border-[#E0E0E0] pb-6">
          <h1 className="text-4xl font-bold font-heading text-[#0B2A4A]">
            <strong>Who</strong> We Are
          </h1>
          <p className="text-muted-foreground mt-2 font-body text-lg">
            About SD Industries Pvt. Ltd. — Engineering strength and delivering precision since 1998.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-[#1C1C1C]/80 leading-relaxed font-body">
            <p>
              SD Industries Pvt. Ltd. is a globally recognized turnkey solutions provider specializing in the design, manufacture, erection, and commissioning of hot rolling mills and steel plant equipment. Founded in 1998, we have consistently pushed the boundaries of metallurgical engineering.
            </p>
            <p>
              Operating from Ludhiana, Punjab, we have grown from a local machinery manufacturing unit to an international consultancy serving clients across more than 12 countries. Our turnkey expertise spans Greenfield plant setup, Brownfield modernization, structural mills, and custom gearboxes.
            </p>
          </div>
          <div className="relative h-[300px] border border-[#E0E0E0] rounded-[4px] overflow-hidden">
            <Image
              src="/who_we_are.jpg"
              alt="Engineers reviewing blueprints"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Core Values & Certifications */}
        <div className="grid md:grid-cols-3 gap-6 pt-6">
          <div className="border border-[#E0E0E0] p-6 rounded-[4px] bg-[#F5F6F7]">
            <Award className="text-[#E4572E] mb-3" size={32} />
            <h3 className="text-lg font-bold text-[#0B2A4A] mb-2">ISO 9001:2015</h3>
            <p className="text-sm text-[#1C1C1C]/70 font-body">
              Our engineering designs, processes, and fabrication operations strictly follow ISO 9001 certification frameworks.
            </p>
          </div>
          <div className="border border-[#E0E0E0] p-6 rounded-[4px] bg-[#F5F6F7]">
            <Shield className="text-[#E4572E] mb-3" size={32} />
            <h3 className="text-lg font-bold text-[#0B2A4A] mb-2">Turnkey Integrity</h3>
            <p className="text-sm text-[#1C1C1C]/70 font-body">
              From mechanical stands to thermodynamic reheating furnace calibration, we assume end-to-end operational accountability.
            </p>
          </div>
          <div className="border border-[#E0E0E0] p-6 rounded-[4px] bg-[#F5F6F7]">
            <FileText className="text-[#E4572E] mb-3" size={32} />
            <h3 className="text-lg font-bold text-[#0B2A4A] mb-2">Star Export House</h3>
            <p className="text-sm text-[#1C1C1C]/70 font-body">
              Government recognized export house exporting high precision heavy engineering equipment to Asia, Africa, and the Middle East.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
