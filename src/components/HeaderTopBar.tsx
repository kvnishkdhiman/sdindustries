import Link from "next/link";

export default function HeaderTopBar() {
  return (
    <div className="bg-[#FFFFFF]/95 border-b border-[#E0E0E0] h-12 flex items-center justify-between px-6 container mx-auto text-xs text-[#1C1C1C]">
      {/* Left side: logo and tagline */}
      <div className="flex items-center gap-3">
        <span className="text-[#0B2A4A] font-extrabold tracking-wider uppercase">SD Industries</span>
        <span className="text-[#1C1C1C]/60 hidden md:inline border-l border-[#E0E0E0] pl-3">Engineering Strength. Delivering Precision.</span>
      </div>
      {/* Right side: contact & secondary links */}
      <div className="flex items-center gap-6 font-bold uppercase tracking-wider text-[10px]">
        <Link href="tel:+919876543210" className="hover:text-[#0B2A4A] transition-colors">
          +91 98765 43210
        </Link>
        <Link href="mailto:info@sdindustries.co.in" className="hover:text-[#0B2A4A] transition-colors">
          info@sdindustries.co.in
        </Link>
        <Link href="/career" className="hover:text-[#0B2A4A] transition-colors">
          Career
        </Link>
        <Link href="/gallery" className="hover:text-[#0B2A4A] transition-colors">
          Gallery
        </Link>
      </div>
    </div>
  );
}
