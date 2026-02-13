"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Clients", href: "/clients" },
    { name: "Projects", href: "/projects" },
    { name: "Contact Us", href: "/contact" },
];

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-secondary/20 top-0 left-0 h-20 flex items-center">
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold flex items-center gap-2 text-foreground">
                    <span className="text-primary">SK</span> Steels
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors hover:underline underline-offset-4 decoration-primary"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded hover:bg-primary/90 transition-all shadow-sm hover:shadow-md"
                    >
                        Get a Quote
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-foreground hover:bg-secondary/20 rounded-md"
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
                        className="absolute top-20 left-0 w-full bg-background border-b border-secondary/20 shadow-lg md:hidden flex flex-col p-6 gap-4"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center justify-between text-lg font-medium text-foreground/80 hover:text-primary transition-colors border-b border-secondary/10 pb-2"
                            >
                                {link.name}
                                <ChevronRight size={16} className="text-secondary" />
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="mt-2 w-full text-center py-3 bg-primary text-white font-semibold rounded hover:bg-primary/90 transition-all"
                        >
                            Get a Quote
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
