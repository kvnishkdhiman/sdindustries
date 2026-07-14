"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import { mainNavigation } from "@/lib/navigation";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<Set<string>>(new Set());

  const toggleSubmenu = (name: string) => {
    setOpenSubmenus((prev) => {
      const next = new Set(prev);
      if (next.has(name)) {
        next.delete(name);
      } else {
        next.add(name);
      }
      return next;
    });
  };

  const isSubmenuOpen = (name: string) => openSubmenus.has(name);

  return (
    <nav className="fixed w-full z-50 bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#E0E0E0] top-0 left-0 h-20 flex items-center shadow-sm">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold flex items-center gap-2 text-[#1C1C1C]" aria-label="SD Industries Home">
          <span className="text-[#0B2A4A]">SD Industries</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {mainNavigation.map((item) => (
            <div key={item.name} className="relative group py-2">
              <Link
                href={item.href || "#"}
                className="text-[13px] font-bold text-[#1C1C1C]/80 hover:text-[#0B2A4A] transition-colors uppercase tracking-wider"
                aria-haspopup={item.children ? "true" : "false"}
                aria-expanded={item.children ? isSubmenuOpen(item.name) : undefined}
              >
                {item.name}
                {item.children && (
                  <ChevronRight
                    size={12}
                    className={`text-[#0B2A4A] ml-1 transition-transform ${isSubmenuOpen(item.name) ? "rotate-90" : ""}`}
                    aria-hidden="true"
                  />
                )}
              </Link>
              {item.children && (
                <div
                  className="absolute left-0 mt-2 w-52 bg-[#FFFFFF] border border-[#E0E0E0] rounded shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-150 z-50"
                  role="menu"
                >
                  {item.children.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href!}
                      className="block px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#1c1c1c]/70 hover:text-[#0B2A4A] hover:bg-[#F5F6F7] border-b border-[#E0E0E0]/30 last:border-b-0"
                      role="menuitem"
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
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden absolute top-20 left-0 w-full bg-[#FFFFFF] border-b border-[#E0E0E0] shadow-lg flex flex-col p-6 gap-4 z-50 max-h-[85vh] overflow-y-auto transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        role="navigation"
        aria-label="Mobile menu"
      >
        {mainNavigation.map((item) => (
          <div key={item.name} className="pb-2 border-b border-[#E0E0E0]/50">
            {item.children ? (
              <>
                <button
                  onClick={() => toggleSubmenu(item.name)}
                  className="flex items-center justify-between text-sm font-bold uppercase tracking-wider text-[#1C1C1C]/80 hover:text-[#0B2A4A] transition-colors w-full text-left"
                  aria-expanded={isSubmenuOpen(item.name)}
                  aria-controls={`submenu-${item.name}`}
                >
                  {item.name}
                  <ChevronRight
                    size={16}
                    className={`text-[#0B2A4A] transition-transform ${isSubmenuOpen(item.name) ? "rotate-90" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                {isSubmenuOpen(item.name) && (
                  <div
                    id={`submenu-${item.name}`}
                    className="ml-4 mt-2 flex flex-col space-y-2 border-l border-[#E0E0E0] pl-3"
                    role="menu"
                  >
                    {item.children.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href!}
                        onClick={() => setIsOpen(false)}
                        className="block text-xs font-bold uppercase tracking-wider text-[#1C1C1C]/60 hover:text-[#0B2A4A]"
                        role="menuitem"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                href={item.href || "#"}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between text-sm font-bold uppercase tracking-wider text-[#1C1C1C]/80 hover:text-[#0B2A4A] transition-colors"
              >
                {item.name}
              </Link>
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
      </div>
    </nav>
  );
}