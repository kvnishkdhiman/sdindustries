import { Wrench, Zap, LayoutDashboard, Database, Activity, Compass, Settings } from "lucide-react";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Our Services | SK Steels",
    description: "Comprehensive services for Steel Melting Shops, Rolling Mills, and Turnkey Project Management.",
};

export default function Services() {
    const categories = [
        {
            id: "consultancy",
            title: "Steel Plant Consultancy",
            desc: "Complete project management from concept to commissioning.",
            details: [
                "Feasibility Studies & Market Analysis",
                "Basic & Detailed Engineering",
                "Layout Planning & Optimization",
                "Project Monitoring & Cost Control",
                "Turnkey Execution Support"
            ],
            icon: Compass,
            bgColor: "bg-creme",
        },
        {
            id: "sms",
            title: "Steel Melting Shop (SMS)",
            desc: "Optimizing the heart of steel production.",
            details: [
                "Induction Furnace Efficiency Tuning",
                "Continuous Casting Machine (CCM) Setup",
                "Ladle Refining Furnace (LRF) Integration",
                "Quality Control Systems",
                "Scrap Management & Melt Loss Reduction"
            ],
            icon: Zap,
            bgColor: "bg-surface-2",
        },
        {
            id: "rolling",
            title: "Rolling Mill Solutions",
            desc: "Precision engineering for high-quality rolled products.",
            details: [
                "TMT Bar Mill Optimization",
                "Wire Rod & Structural Mill Design",
                "Strip & Slitting Line Engineering",
                "Automation & Roll Pass Design",
                "Yield Improvement Strategies"
            ],
            icon: Settings,
            bgColor: "bg-surface-3",
        },
    ];

    return (
        <div className="bg-background min-h-screen pb-20">
            <section className="bg-primary/5 py-20 text-center border-b border-primary/10">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto px-6">
                    We offer specialized engineering solutions tailored to the iron and steel industry, ensuring efficiency, quality, and profitability.
                </p>
            </section>

            <div className="container mx-auto px-6 py-16 space-y-24">
                {categories.map((cat, idx) => (
                    <div
                        key={cat.id}
                        id={cat.id}
                        className={`scroll-mt-24 grid md:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'md:grid-flow-dense md:flex-row-reverse' : ''}`}
                    >
                        <div className={`order-${idx % 2 === 1 ? 'last' : 'first'} space-y-6`}>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-full text-primary font-semibold text-sm uppercase tracking-wide">
                                <cat.icon size={16} /> Service Focus
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground">{cat.title}</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">{cat.desc}</p>

                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                {cat.details.map((detail, i) => (
                                    <li key={i} className="flex items-start gap-3 text-foreground/80">
                                        <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                                        <span>{detail}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-6">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center px-6 py-3 bg-foreground text-white font-medium rounded hover:bg-primary transition-colors"
                                >
                                    Consult an Expert
                                </Link>
                            </div>
                        </div>

                        <div className={`order-${idx % 2 === 1 ? 'first' : 'last'} h-[400px] w-full bg-secondary/10 rounded-2xl flex items-center justify-center border border-secondary/20 shadow-lg group hover:shadow-xl transition-all`}>
                            {/* Visual placeholder */}
                            <div className="text-center opacity-30 group-hover:opacity-50 transition-opacity">
                                <cat.icon size={80} className="mx-auto text-primary mb-4" />
                                <span className="text-2xl font-bold text-muted-foreground uppercase">{cat.title}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
