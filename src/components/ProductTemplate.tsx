import Link from "next/link";
import { Check } from "lucide-react";

export interface ProductTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  applications: string[];
  titleHighlight?: string;
}

export default function ProductTemplate({
  title,
  subtitle,
  description,
  features,
  applications,
  titleHighlight,
}: ProductTemplateProps) {
  // If titleHighlight is provided, use it; otherwise fallback to first word
  const highlightText = titleHighlight || title.split(" ")[0];
  const remainingText = titleHighlight
    ? title.replace(titleHighlight, "").trim()
    : title.split(" ").slice(1).join(" ");
  const showHighlight = title.includes(highlightText);

  return (
    <div className="bg-white min-h-screen pt-8 pb-16">
      <div className="container mx-auto px-6 max-w-4xl space-y-12">
        <div className="border-b border-[#E0E0E0] pb-6">
          <Link href="/" className="text-[#E4572E] text-sm font-semibold hover:underline">
            &larr; Back to Home
          </Link>
          <h1 className="text-4xl font-bold font-heading text-[#0B2A4A] mt-4">
            {showHighlight ? (
              <>
                <strong>{highlightText}</strong>{" "}
                {remainingText}
              </>
            ) : (
              title
            )}
          </h1>
          <p className="text-muted-foreground mt-2 font-body text-lg">{subtitle}</p>
        </div>

        <div className="space-y-6 text-[#1C1C1C]/80 leading-relaxed font-body">
          <p>{description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 pt-4">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#0B2A4A]">Key Technical Specifications</h3>
            <ul className="space-y-2">
              {features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-[#1C1C1C]/80 font-body">
                  <Check className="text-[#E4572E] shrink-0 mt-0.5" size={16} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#0B2A4A]">Typical Applications</h3>
            <ul className="space-y-2">
              {applications.map((app, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-[#1C1C1C]/80 font-body">
                  <Check className="text-[#E4572E] shrink-0 mt-0.5" size={16} />
                  <span>{app}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-[#F5F6F7] p-8 border border-[#E0E0E0] rounded-[4px] flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h4 className="font-bold text-[#0B2A4A] text-lg">Request Quotation & Tech Sheet</h4>
            <p className="text-sm text-muted-foreground font-body mt-1">Get precise structural dimensional prints and custom layouts from our engineering division.</p>
          </div>
          <Link
            href="/contact/product-inquiry"
            className="bg-[#E4572E] text-white font-semibold uppercase tracking-wider text-sm px-6 py-3 rounded-[4px] hover:bg-[#E4572E]/90 transition-all whitespace-nowrap"
          >
            Inquire Now
          </Link>
        </div>
      </div>
    </div>
  );
}
