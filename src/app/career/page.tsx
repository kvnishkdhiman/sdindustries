import Link from "next/link";
import { Mail } from "lucide-react";

export const metadata = {
  title: "Careers at SD Industries | Join Our Engineering Team",
  description: "Explore employment opportunities for metallurgical design consultants, CNC machinists, and project engineers.",
};

export default function Career() {
  return (
    <div className="bg-white min-h-screen pt-8 pb-16">
      <div className="container mx-auto px-6 max-w-4xl space-y-12">
        <div className="border-b border-[#E0E0E0] pb-6">
          <h1 className="text-4xl font-bold font-heading text-[#0B2A4A]">
            <strong>Join</strong> Our Team
          </h1>
          <p className="text-muted-foreground mt-2 font-body text-lg">
            Build a rewardable career in heavy industrial design, metallurgy consulting, and project execution.
          </p>
        </div>

        <div className="space-y-6 text-[#1C1C1C]/80 leading-relaxed font-body">
          <p>
            At SD Industries, we are always on the lookout for talented engineers, design draftsmen, project planners, and metallurgy experts ready to solve complex industrial rolling challenges.
          </p>
        </div>

        <div className="space-y-6">
          {[
            {
              title: "Senior Mechanical Design Engineer",
              department: "Design & FEA Division",
              // TODO: Replace with verified location
              location: "City, State, Country",
              req: "B.Tech/M.Tech in Mechanical Engineering with 5+ years of experience modeling gear teeth profiles and rolling stands configurations using SolidWorks or ANSYS."
            },
            {
              title: "Lead Project Commissioning Engineer",
              department: "Project Consulting & Commissioning",
              // TODO: Replace with verified location
              location: "On-site (Domestic & International travel required)",
              req: "Degree in Metallurgy or Mechanical Engineering. Minimum 4 years supervising hot mill trial sequences, billet alignments, and quenching systems calibrations."
            }
          ].map((job, idx) => (
            <div key={idx} className="border border-[#E0E0E0] p-6 rounded-[4px] bg-[#F5F6F7] space-y-3">
              <h3 className="text-xl font-bold text-[#0B2A4A]">{job.title}</h3>
              <div className="flex gap-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                <span>{job.department}</span>
                <span>Location: {job.location}</span>
              </div>
              <p className="text-sm text-[#1C1C1C]/85 font-body leading-relaxed">{job.req}</p>
              <div className="pt-2">
                <Link
                  href="mailto:careers@example.com"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#E4572E] hover:underline"
                >
                  <Mail size={16} /> Apply via Email
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
