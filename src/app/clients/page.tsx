import { Globe, Trophy } from "lucide-react";

export const metadata = {
    title: "Our Clients | SD Industries",
    description: "Join our network of satisfied clients across the globe.",
};

export default function Clients() {
    const clients = Array.from({ length: 12 }, (_, i) => ({
        name: `Steel Co. ${i + 1}`,
        // TODO: Replace with verified client locations
        location: i % 3 === 0 ? "Country A" : i % 3 === 1 ? "Country B" : "Country C",
        id: i,
    }));

    return (
        <div className="bg-background min-h-screen py-20">
            <div className="container mx-auto px-6 text-center space-y-6 mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">Global Clientele</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    We accelerate growth for steel manufacturers worldwide. Our structured approach has earned us the trust of industry leaders.
                </p>

                <div className="flex justify-center gap-12 pt-8">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">100+</div>
                        <div className="text-sm font-medium text-muted-foreground uppercase">Satisfied Clients</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">15+</div>
                        <div className="text-sm font-medium text-muted-foreground uppercase">Countries Served</div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                {clients.map((client) => (
                    <div
                        key={client.id}
                        className="aspect-square bg-secondary/10 flex flex-col items-center justify-center p-6 rounded-xl border border-secondary/20 hover:border-primary/50 hover:bg-secondary/20 transition-all cursor-default group"
                    >
                        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Trophy size={24} className="text-primary" />
                        </div>
                        <h3 className="font-semibold text-foreground">{client.name}</h3>
                        <span className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                            <Globe size={10} /> {client.location}
                        </span>
                    </div>
                ))}
            </div>

            <div className="text-center mt-16">
                <p className="text-muted-foreground italic">And many more worldwide.</p>
            </div>
        </div>
    );
}
