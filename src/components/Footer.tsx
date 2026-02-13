import Link from "next/link";
import { Mail, MapPin, Phone, Linkedin, Facebook, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-secondary/10 border-t border-secondary/20 pt-16 pb-8">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">
                        <span className="text-primary">SK</span> Steels
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Leading engineering consultancy for the steel industry. "Think different, Feel the difference."
                    </p>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>
                            <Link href="/about" className="hover:text-primary transition-colors">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" className="hover:text-primary transition-colors">
                                Our Services
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects" className="hover:text-primary transition-colors">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-primary transition-colors">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Services */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Services</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>
                            <Link href="/services#sms" className="hover:text-primary transition-colors">
                                Steel Melting Shop
                            </Link>
                        </li>
                        <li>
                            <Link href="/services#rolling" className="hover:text-primary transition-colors">
                                Rolling Mill Solutions
                            </Link>
                        </li>
                        <li>
                            <Link href="/services#consultancy" className="hover:text-primary transition-colors">
                                Project Consultancy
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Contact Us</h3>
                    <div className="space-y-3 text-sm text-muted-foreground">
                        <div className="flex items-start gap-3">
                            <MapPin className="text-primary shrink-0" size={18} />
                            <p>
                                123 Industrial Area, Phase II,
                                <br />
                                New Delhi, India 110020
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone className="text-primary shrink-0" size={18} />
                            <p>+91 987 654 3210</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail className="text-primary shrink-0" size={18} />
                            <p>info@sksteels.com</p>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-4">
                        <Link href="#" className="p-2 bg-secondary/20 rounded-full hover:bg-primary hover:text-white transition-all">
                            <Linkedin size={18} />
                        </Link>
                        <Link href="#" className="p-2 bg-secondary/20 rounded-full hover:bg-primary hover:text-white transition-all">
                            <Twitter size={18} />
                        </Link>
                        <Link href="#" className="p-2 bg-secondary/20 rounded-full hover:bg-primary hover:text-white transition-all">
                            <Facebook size={18} />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 mt-16 pt-8 border-t border-secondary/20 text-center text-sm text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} SK Steels. All rights reserved.</p>
            </div>
        </footer>
    );
}
