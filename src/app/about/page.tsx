import Image from "next/image";
import { CheckCircle, Target, Lightbulb, Users } from "lucide-react";

export const metadata = {
    title: "About Us | SK Steels",
    description: "Learn about SK Steels, our mission, vision, and the experts behind our steel plant consultancy services.",
};

export default function About() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero */}
            <section className="bg-secondary/20 py-20 border-b border-secondary/20">
                <div className="container mx-auto px-6 text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground">About SK Steels</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A unit of complete SMS and Rolling Mill Solutions. We are dedicated to engineering excellence and innovation in the steel industry.
                    </p>
                </div>
            </section>

            {/* Intro & Philosophy */}
            <section className="py-20">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-foreground">
                            Our Philosophy: <span className="text-primary italic">"Think different, Feel the difference"</span>
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                            At SK Steels, we believe that true engineering excellence comes from constant research and the courage to implement new ideas.
                            Our goal is not just to build plants but to create efficient, sustainable systems that reduce overall production costs for our clients.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            We specialize in concept planning, feasibility studies, and detailed engineering for Steel Melting Shops (SMS) and Rolling Mills.
                        </p>

                        <div className="grid grid-cols-2 gap-6 pt-4">
                            <div className="flex gap-3">
                                <Target className="text-primary shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-foreground">Precision</h4>
                                    <p className="text-sm text-muted-foreground">Accuracy in every detail of engineering.</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <Lightbulb className="text-primary shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-foreground">Innovation</h4>
                                    <p className="text-sm text-muted-foreground">Cutting-edge technology adoption.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[400px] bg-secondary/30 rounded-2xl flex items-center justify-center">
                        <span className="text-muted-foreground opacity-50 font-medium">About Us Image Placeholder</span>
                    </div>
                </div>
            </section>

            {/* Leadership */}
            <section className="py-20 bg-secondary/5 border-t border-secondary/20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Experts</h2>
                        <p className="text-muted-foreground">Drive by passion, led by experience.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 justify-center">
                        {/* Leader 1 */}
                        <div className="bg-white p-6 rounded-xl border border-secondary/20 hover:border-primary/50 transition-all text-center group">
                            <div className="w-32 h-32 bg-secondary/20 rounded-full mx-auto mb-6 overflow-hidden group-hover:scale-105 transition-transform flex items-center justify-center text-secondary">
                                <Users size={40} />
                            </div>
                            <h3 className="text-xl font-bold text-foreground">S.K. Sharma</h3>
                            <p className="text-primary font-medium mb-4">Founder & Principal Consultant</p>
                            <p className="text-sm text-muted-foreground">
                                With over 25 years in the steel industry, Mr. Sharma leads the firm with a vision for technological advancement and client success.
                            </p>
                        </div>
                        {/* Add more team members as needed */}
                    </div>
                </div>
            </section>
        </div>
    );
}
