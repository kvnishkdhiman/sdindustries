import Link from "next/link";
import { ArrowRight, MapPin, Tag } from "lucide-react";

export const metadata = {
    title: "Our Success Stories | SK Steels",
    description: "Browse through our portfolio of successful Steel Plant, SMS, and Rolling Mill projects.",
};

const projects = [
    {
        title: "500 TPD Sponge Iron Plant",
        location: "Raipur, Chhattisgarh",
        category: "Turnkey Project",
        desc: "Complete project management from civil layout to cold commissioning. Achieved 100% capacity within 3 months.",
        tags: ["Project Management", "Consultancy"],
    },
    {
        title: "Modern TMT Bar Rolling Mill",
        location: "Durgapur, West Bengal",
        category: "Rolling Mill",
        desc: "Upgradation of existing mill to high-speed slit rolling technology, increasing yield by 15%.",
        tags: ["Rolling Mill", "Automation"],
    },
    {
        title: "25T Induction Furnace Installation",
        location: "Bellary, Karnataka",
        category: "SMS",
        desc: "Installation and commissioning of energy-efficient induction furnaces with pollution control systems.",
        tags: ["SMS", "Energy Efficiency"],
    },
    {
        title: "Wire Rod Mill Expansion",
        location: "Ludhiana, Punjab",
        category: "Rolling Mill",
        desc: "Capacity expansion project doubling the production from 100TPD to 200TPD with minimum downtime.",
        tags: ["Rolling Mill", "Expansion"],
    },
    {
        title: "Greenfield Integrated Steel Plant",
        location: "Odisha",
        category: "Consultancy",
        desc: "Feasibility study and basic engineering for a 0.5 MTPA integrated steel plant.",
        tags: ["Consultancy", "Feasibility"],
    },
];

export default function Projects() {
    return (
        <div className="bg-background min-h-screen py-20">
            <div className="container mx-auto px-6 mb-16 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Project Highlights</h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Delivering excellence across the steel manufacturing spectrum. Here are some of our landmark achievements.
                </p>
            </div>

            <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className="group bg-secondary/5 border border-secondary/20 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col"
                    >
                        <div className="h-48 bg-secondary/20 relative group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                            {/* Image Placeholder */}
                            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/50 text-sm font-medium uppercase tracking-widest bg-stripes-primary">
                                Project Image
                            </div>
                            <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                                {project.category}
                            </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col">
                            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>

                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                                <MapPin size={14} className="text-primary" />
                                {project.location}
                            </div>

                            <p className="text-muted-foreground text-sm mb-6 flex-1 leading-relaxed">
                                {project.desc}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map(tag => (
                                    <span key={tag} className="bg-secondary/20 text-foreground text-xs px-2 py-1 rounded font-medium flex items-center gap-1">
                                        <Tag size={10} /> {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-16">
                <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-semibold rounded hover:bg-brown transition-all"
                >
                    Discuss Your Project <ArrowRight size={18} />
                </Link>
            </div>
        </div>
    );
}
