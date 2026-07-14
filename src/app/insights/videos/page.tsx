import { Play } from "lucide-react";

export const metadata = {
  title: "Videos & Walkthroughs | SD Industries",
  description: "Watch industrial video footage of commissioned rolling mills and custom speed reducer trials.",
};

export default function Videos() {
  return (
    <div className="bg-white min-h-screen pt-8 pb-16">
      <div className="container mx-auto px-6 max-w-4xl space-y-12">
        <div className="border-b border-[#E0E0E0] pb-6">
          <h1 className="text-4xl font-bold font-heading text-[#0B2A4A]">
            <strong>Media</strong> Videos
          </h1>
          <p className="text-muted-foreground mt-2 font-body text-lg">
            Watch commissioned plant lines, automated cooling beds, and intermediate stands trials.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Continuous 300,000 TPA TMT Mill Commissioning",
              duration: "4 mins 12 secs",
              desc: "Complete video walkthrough of a fully automated hot rolling bar mill line, featuring thermex water systems, automated guides, and dynamic rake-type cooling bed."
            },
            {
              title: "High Torque Combine Reducer Custom Sizing Trial",
              duration: "2 mins 45 secs",
              // TODO: Replace with verified test facility location
              desc: "Inspection video of our test bed trials for a custom combination gearbox-cum-pinion stand built for heavy section intermediate stands."
            }
          ].map((video, idx) => (
            <div key={idx} className="border border-[#E0E0E0] rounded-[4px] bg-[#F5F6F7] overflow-hidden">
              <div className="h-48 bg-[#0B2A4A] flex items-center justify-center relative text-white">
                <Play className="opacity-80 hover:opacity-100 transition-opacity cursor-pointer" size={48} />
              </div>
              <div className="p-6 space-y-2">
                <span className="text-xs text-[#E4572E] font-semibold uppercase tracking-wider">Duration: {video.duration}</span>
                <h3 className="text-lg font-bold text-[#0B2A4A]">{video.title}</h3>
                <p className="text-xs text-[#1C1C1C]/80 font-body leading-relaxed">{video.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
