import { Calendar, MapPin } from "lucide-react";

export const metadata = {
  title: "Events | SD Industries",
  description: "Join SD Industries at upcoming metallurgy trade shows, safety symposiums, and manufacturing events.",
};

export default function Events() {
  return (
    <div className="bg-white min-h-screen pt-8 pb-16">
      <div className="container mx-auto px-6 max-w-4xl space-y-12">
        <div className="border-b border-[#E0E0E0] pb-6">
          <h1 className="text-4xl font-bold font-heading text-[#0B2A4A]">
            <strong>Upcoming</strong> Events
          </h1>
          <p className="text-muted-foreground mt-2 font-body text-lg">
            Connect with our engineering and consultancy teams at leading metallurgical conventions.
          </p>
        </div>

        <div className="space-y-6">
          {[
            {
              title: "International Steel Expo 2026",
              date: "November 12-15, 2026",
              // TODO: Replace with verified event location from official records
              location: "Convention Center, City, State, Country",
              desc: "SD Industries is showcasing modern automated mill speed controls and custom walking beam furnace heat models at Booth 4B-12. Drop by to review technical blueprints with our senior design staff."
            },
            {
              // TODO: Verify event details from official records
              title: "Engineering and Safety Symposium",
              date: "September 08, 2026",
              location: "Engineering Club, City, State, Country",
              desc: "Our founder & Chairman is presenting the keynote paper on modern rolling mill safety improvements, automated shearing guards, and high load cardan shafts stability controls."
            }
          ].map((item, idx) => (
            <div key={idx} className="border border-[#E0E0E0] p-8 rounded-[4px] bg-[#F5F6F7] space-y-4">
              <h3 className="text-2xl font-bold text-[#0B2A4A]">{item.title}</h3>
              <div className="flex flex-wrap gap-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                <span className="flex items-center gap-1"><Calendar size={14} /> {item.date}</span>
                <span className="flex items-center gap-1"><MapPin size={14} /> {item.location}</span>
              </div>
              <p className="text-sm text-[#1C1C1C]/80 leading-relaxed font-body">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
