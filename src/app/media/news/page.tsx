import Link from "next/link";
import { Calendar } from "lucide-react";

export const metadata = {
  title: "Latest News | SD Industries",
  description: "Get the latest updates, contract signs, and project delivery news from SD Industries.",
};

export default function News() {
  return (
    <div className="bg-white min-h-screen pt-8 pb-16">
      <div className="container mx-auto px-6 max-w-4xl space-y-12">
        <div className="border-b border-[#E0E0E0] pb-6">
          <h1 className="text-4xl font-bold font-heading text-[#0B2A4A]">
            <strong>Latest</strong> News
          </h1>
          <p className="text-muted-foreground mt-2 font-body text-lg">
            Stay informed with corporate announcements, overseas contracts, and commissioning milestones.
          </p>
        </div>

        <div className="space-y-8">
          {[
            {
              // TODO: Verify news item from official records
              title: "Expanding Greenfield Presence in East Africa",
              date: "May 14, 2026",
              desc: "SD Industries has finalized a complete design, engineering, and equipment coordination contract with a prominent structural steel producer in Country A. The project covers a new multi-stand rolling layout designed to roll heavy structural sections."
            },
            {
              // TODO: Verify news item from official records
              title: "Successful Commissioning of TMT Mill Upgrade",
              date: "March 18, 2026",
              desc: "Our automation and design divisions successfully completed structural upgrades and sequence tuning for a major steel mill operator in Region B. The deployment of smart loops resulted in an instant daily capacity yield increase of 12%."
            },
            {
              // TODO: Verify news item from official records
              title: "Metallurgy Delegates Visit Production Facility",
              date: "January 22, 2026",
              desc: "A foreign engineering delegation inspected our manufacturing plants. The visit focused on inspecting our case-hardened custom rolling mill gearbox fabrications and high precision stands tolerance matching."
            }
          ].map((item, idx) => (
            <div key={idx} className="space-y-3">
              <span className="flex items-center gap-1 text-xs font-semibold text-[#E4572E] uppercase tracking-wider">
                <Calendar size={14} /> {item.date}
              </span>
              <h3 className="text-2xl font-bold text-[#0B2A4A]">{item.title}</h3>
              <p className="text-sm text-[#1C1C1C]/80 leading-relaxed font-body">{item.desc}</p>
              <div className="pt-2">
                <Link href="/contact" className="text-xs font-bold text-[#0B2A4A] hover:underline flex items-center gap-1">
                  Inquire details &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
