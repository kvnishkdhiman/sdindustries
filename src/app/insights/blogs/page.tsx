import { User, Calendar } from "lucide-react";

export const metadata = {
  title: "Blogs & Technical Insights | SD Industries",
  description: "Read technical articles on hot rolling mill alignments, TMT quenching, and combustion furnace efficiencies written by SD Industries consultants.",
};

export default function Blogs() {
  return (
    <div className="bg-white min-h-screen pt-8 pb-16">
      <div className="container mx-auto px-6 max-w-4xl space-y-12">
        <div className="border-b border-[#E0E0E0] pb-6">
          <h1 className="text-4xl font-bold font-heading text-[#0B2A4A]">
            <strong>Technical</strong> Blogs
          </h1>
          <p className="text-muted-foreground mt-2 font-body text-lg">
            Engineering insights and metallurgical study guides published by our senior design associates.
          </p>
        </div>

        <div className="space-y-12">
          {[
            {
              title: "Optimizing Specific Fuel Consumption in Reheating Furnaces",
              author: "Engineering Division",
              date: "June 05, 2026",
              excerpt: "Billets processed inside hot rolling mills rely on efficient reheating systems. This article details dynamic modeling steps to decrease fuel requirements per ton while controlling scaling losses.",
              content: "Thermodyanmic calibration inside walking beam reheating systems is essential for minimizing energy waste. Scaling losses and high fuel utilization levels can be corrected by deploying automated air-to-fuel ratio control loops. We discuss Zone tuning techniques, fuel recuperation systems, and billet residence configurations that optimize overall heat propagation."
            },
            {
              title: "Solving Stand Alignment & Torsion in TMT Rolling Lines",
              author: "Consulting Division",
              date: "April 12, 2026",
              excerpt: "Continuous deformation demands absolute alignment precision. Learn how structural mill stand deflection impacts reinforcing bar geometrical tolerances and mechanical qualities.",
              content: "Maintaining consistent dimensional properties across hot rolling bar lines requires stiff housing structures. Under hot loads, slight shifts in roll stands cause profile shifts and thickness variation. This article analyzes mechanical guides positioning, cardan shafts torsional resistance, and housingless mill stand setup procedures to ensure uniform bar output properties."
            }
          ].map((blog, idx) => (
            <article key={idx} className="space-y-3">
              <h2 className="text-2xl font-bold text-[#0B2A4A] hover:text-[#E4572E] transition-colors">
                {blog.title}
              </h2>
              <div className="flex gap-4 text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                <span className="flex items-center gap-1"><User size={14} /> By {blog.author}</span>
                <span className="flex items-center gap-1"><Calendar size={14} /> {blog.date}</span>
              </div>
              <p className="text-[#1C1C1C]/80 leading-relaxed font-body text-sm font-semibold">{blog.excerpt}</p>
              <p className="text-[#1C1C1C]/75 leading-relaxed font-body text-sm">{blog.content}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
