"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, Linkedin, Facebook, Youtube, Instagram, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F5F6F7] border-t border-[#E0E0E0] pt-16 pb-8 text-[#1C1C1C]">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Column 1: Brand & Certification */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-[#0B2A4A]">SD Industries</h2>
          <p className="text-sm leading-relaxed text-[#1C1C1C]/80">
            Leading turnkey rolling mill & steel plant consultancy. Engineering Strength. Delivering Precision.
          </p>
          <Link href="/about" className="text-sm font-semibold text-[#E4572E] hover:underline block">
            More About Us
          </Link>
          <div className="pt-2">
            <div className="inline-flex items-center gap-2 border border-[#E0E0E0] p-2 bg-white rounded">
              <span className="text-xs font-bold text-[#0B2A4A] border-r border-[#E0E0E0] pr-2">ISO 9001:2015</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Certified Consultancy</span>
            </div>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#0B2A4A]">Quick Links</h3>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            <li><Link href="/" className="hover:text-[#E4572E] transition-colors">Home</Link></li>
            <li><Link href="/about/who-we-are" className="hover:text-[#E4572E] transition-colors">Who We Are</Link></li>
            <li><Link href="/solutions" className="hover:text-[#E4572E] transition-colors">Solutions</Link></li>
            <li><Link href="/services" className="hover:text-[#E4572E] transition-colors">Services</Link></li>
            <li><Link href="/infrastructure" className="hover:text-[#E4572E] transition-colors">Infrastructure</Link></li>
            <li><Link href="/career" className="hover:text-[#E4572E] transition-colors">Career</Link></li>
            <li><Link href="/gallery" className="hover:text-[#E4572E] transition-colors">Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-[#E4572E] transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact Info & Socials */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#0B2A4A]">Contact</h3>
          <div className="space-y-3 text-sm text-[#1C1C1C]/80">
            <div className="flex items-start gap-3">
              <MapPin className="text-[#E4572E] shrink-0 mt-0.5" size={18} />
              <p>Plot No. 47, Industrial Area Phase-II, Ludhiana, Punjab – 141003, India</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-[#E4572E] shrink-0" size={18} />
              <div>
                <p><Link href="tel:+919876543210" className="hover:underline">+91 98765 43210</Link></p>
                <p><Link href="tel:+919876543211" className="hover:underline">+91 98765 43211</Link></p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-[#E4572E] shrink-0" size={18} />
              <div>
                <p><Link href="mailto:info@sdindustries.co.in" className="hover:underline">info@sdindustries.co.in</Link></p>
                <p><Link href="mailto:support@sdindustries.co.in" className="hover:underline">support@sdindustries.co.in</Link></p>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-4">
            <Link href="https://facebook.com/sdindustries" target="_blank" className="p-2 bg-white border border-[#E0E0E0] rounded hover:bg-[#E4572E] hover:text-white transition-all text-[#1C1C1C]">
              <Facebook size={18} />
            </Link>
            <Link href="https://instagram.com/sdindustries" target="_blank" className="p-2 bg-white border border-[#E0E0E0] rounded hover:bg-[#E4572E] hover:text-white transition-all text-[#1C1C1C]">
              <Instagram size={18} />
            </Link>
            <Link href="https://linkedin.com/company/sdindustries" target="_blank" className="p-2 bg-white border border-[#E0E0E0] rounded hover:bg-[#E4572E] hover:text-white transition-all text-[#1C1C1C]">
              <Linkedin size={18} />
            </Link>
            <Link href="https://youtube.com/@sdindustries" target="_blank" className="p-2 bg-white border border-[#E0E0E0] rounded hover:bg-[#E4572E] hover:text-white transition-all text-[#1C1C1C]">
              <Youtube size={18} />
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-[#E0E0E0] flex flex-col md:flex-row justify-between items-center text-sm text-[#1C1C1C]/60">
        <p>&copy; {new Date().getFullYear()} SD Industries Pvt. Ltd. All rights reserved.</p>
        <button 
          onClick={scrollToTop}
          className="flex items-center gap-1 hover:text-[#E4572E] transition-colors mt-4 md:mt-0 font-semibold"
        >
          Back to top <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}
