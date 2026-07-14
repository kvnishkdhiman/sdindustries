import Link from "next/link";
import { Mail, MapPin, Phone, Linkedin, Facebook, Youtube, Instagram, ArrowUp } from "lucide-react";
import { footerNavigation, companyInfo } from "@/lib/navigation";

const socialIcons = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
} as const;

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#F5F6F7] border-t border-[#E0E0E0] pt-16 pb-8 text-[#1C1C1C]">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Column 1: Brand & Certification */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-[#0B2A4A]">{companyInfo.name}</h2>
          <p className="text-sm leading-relaxed text-[#1C1C1C]/80">
            {companyInfo.tagline}
          </p>
          <Link href="/about" className="text-sm font-semibold text-[#E4572E] hover:underline block">
            More About Us
          </Link>
          <div className="pt-2">
            <div className="inline-flex items-center gap-2 border border-[#E0E0E0] p-2 bg-white rounded">
              <span className="text-xs font-bold text-[#0B2A4A] border-r border-[#E0E0E0] pr-2">
                {companyInfo.certifications[0]}
              </span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
                {companyInfo.certifications[1]}
              </span>
            </div>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#0B2A4A]">Quick Links</h3>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {footerNavigation.quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-[#E4572E] transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Info & Socials */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#0B2A4A]">Contact</h3>
          <div className="space-y-3 text-sm text-[#1C1C1C]/80">
            <div className="flex items-start gap-3">
              <MapPin className="text-[#E4572E] shrink-0 mt-0.5" size={18} />
              <p>{footerNavigation.contact.address}</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-[#E4572E] shrink-0" size={18} />
              <div>
                {footerNavigation.contact.phones.map((phone, idx) => (
                  <p key={idx}>
                    <Link href={`tel:${phone.replace(/\s/g, "")}`} className="hover:underline">
                      {phone}
                    </Link>
                  </p>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-[#E4572E] shrink-0" size={18} />
              <div>
                {footerNavigation.contact.emails.map((email, idx) => (
                  <p key={idx}>
                    <Link href={`mailto:${email}`} className="hover:underline">
                      {email}
                    </Link>
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-4">
            {footerNavigation.social.map((social) => {
              const Icon = socialIcons[social.icon as keyof typeof socialIcons];
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white border border-[#E0E0E0] rounded hover:bg-[#E4572E] hover:text-white transition-all text-[#1C1C1C]"
                  aria-label={social.name}
                >
                  <Icon size={18} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-[#E0E0E0] flex flex-col md:flex-row justify-between items-center text-sm text-[#1C1C1C]/60">
        <p>&copy; {new Date().getFullYear()} {companyInfo.name} Pvt. Ltd. All rights reserved.</p>
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1 hover:text-[#E4572E] transition-colors mt-4 md:mt-0 font-semibold"
          aria-label="Back to top"
        >
          Back to top <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}