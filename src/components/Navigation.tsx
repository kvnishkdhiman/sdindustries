"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    children: [
      { name: "Who We Are", href: "/about/who-we-are" },
      { name: "Chairman's Message", href: "/about/chairman-message" },
      { name: "Our Associations", href: "/about/associations" },
    ],
  },
  {
    name: "Products",
    children: [
      { name: "TMT Bar Mill", href: "/products/tmt-bar-mill" },
      { name: "Structural Mill", href: "/products/structural-mill" },
      { name: "Wire Rod Mill", href: "/products/wire-rod-mill" },
      { name: "Mill Stands", href: "/products/mill-stands" },
      { name: "Reheating Furnace", href: "/products/reheating-furnace" },
      { name: "Rolling Mill Gearbox", href: "/products/rolling-mill-gearbox" },
    ],
  },
  { name: "Solutions", href: "/solutions" },
  { name: "Services", href: "/services" },
  { name: "Infrastructure", href: "/infrastructure" },
  {
    name: "Contact Us",
    children: [
      { name: "Contact", href: "/contact" },
      { name: "Product Inquiry", href: "/contact/product-inquiry" },
      { name: "Customer Feedback", href: "/contact/customer-feedback" },
      { name: "Customer Support", href: "/contact/customer-support" },
    ],
  },
  { name: "Career", href: "/career" },
  { name: "Gallery", href: "/gallery" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#E0E0E0] top-0 left-0 h-20 flex items-center shadow-sm">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold flex items-center gap-2 text-[#1C1C1C]">
          <span className="text-[#0B2A4A]">SD Industries</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <div key={item.name} className="relative group py-2">
              <Link
                href={item.href || "#"}
                className="text-[13px] font-bold text-[#1C1C1C]/80 hover:text-[#0B2A4A] transition-colors uppercase tracking-wider"
              >
                {item.name}
              </Link>
              {item.children && (
                <div className="absolute left-0 mt-2 w-52 bg-[#FFFFFF] border border-[#E0E0E0] rounded shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-150 z-50">
                  {item.children.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className="block px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#1c1c1c]/70 hover:text-[#0B2A4A] hover:bg-[#F5F6F7] border-b border-[#E0E0E0]/30 last:border-b-0"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            className="px-5 py-2.5 bg-[#0B2A4A] hover:bg-[#0B2A4A]/90 text-white text-xs font-bold uppercase tracking-widest rounded-[4px] transition-all shadow-sm hover:shadow-md ml-4"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-[#1C1C1C] hover:bg-[#F5F6F7] rounded-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-[#FFFFFF] border-b border-[#E0E0E0] shadow-lg md:hidden flex flex-col p-6 gap-4 z-50 max-h-[85vh] overflow-y-auto"
          >
            {menuItems.map((item) => (
              <div key={item.name} className="pb-2 border-b border-[#E0E0E0]/50">
                <Link
                  href={item.href || "#"}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between text-sm font-bold uppercase tracking-wider text-[#1C1C1C]/80 hover:text-[#0B2A4A] transition-colors"
                >
                  {item.name}
                  {item.children && <ChevronRight size={16} className="text-[#0B2A4A]" />}
                </Link>
                {item.children && (
                  <div className="ml-4 mt-2 flex flex-col space-y-2 border-l border-[#E0E0E0] pl-3">
                    {item.children.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        onClick={() => setIsOpen(false)}
                        className="block text-xs font-bold uppercase tracking-wider text-[#1C1C1C]/60 hover:text-[#0B2A4A]"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 w-full text-center py-3 bg-[#0B2A4A] text-white text-xs font-bold uppercase tracking-widest rounded-[4px] hover:bg-[#0B2A4A]/90 transition-all"
            >
              Get a Quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
