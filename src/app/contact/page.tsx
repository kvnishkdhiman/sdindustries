"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setSubmitted(true);
    };

    return (
        <div className="bg-background min-h-screen py-20 flex flex-col items-center">
            <div className="container mx-auto px-6 max-w-5xl w-full">
                <div className="grid md:grid-cols-2 gap-16 rounded-3xl overflow-hidden bg-white shadow-2xl min-h-[600px]">

                    {/* Contact Info Side */}
                    <div className="bg-primary text-white p-12 flex flex-col justify-between relative overflow-hidden">
                        <div className="z-10 space-y-8">
                            <div>
                                <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
                                <p className="text-primary-foreground/80 leading-relaxed">
                                    Have a project in mind? Looking for expert consultancy? Fill out the form or reach us directly.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <MapPin className="shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-lg">Office Address</h3>
                                        <p className="text-primary-foreground/80">
                                            123 Industrial Area, Phase II,<br />
                                            New Delhi, India 110020
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <Phone className="shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-lg">Call Us</h3>
                                        <p className="text-primary-foreground/80">+91 987 654 3210</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <Mail className="shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-lg">Email Us</h3>
                                        <p className="text-primary-foreground/80">info@sksteels.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="z-10 mt-12">
                            <div className="text-sm font-medium uppercase tracking-wider text-primary-foreground/60 mb-2">Follow Us</div>
                            <div className="flex gap-4">
                                {/* Social Icons would go here */}
                                <span className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 cursor-pointer transition-colors" />
                                <span className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 cursor-pointer transition-colors" />
                                <span className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 cursor-pointer transition-colors" />
                            </div>
                        </div>

                        {/* Decor */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-brown-dark/20 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl" />
                    </div>

                    {/* Form Side */}
                    <div className="p-12 flex flex-col justify-center bg-white text-foreground">
                        {submitted ? (
                            <div className="text-center space-y-4 animate-in fade-in zoom-in duration-500">
                                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Send size={40} />
                                </div>
                                <h2 className="text-3xl font-bold text-foreground">Message Sent!</h2>
                                <p className="text-muted-foreground">
                                    Thank you for reaching out. Our team will get back to you shortly.
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-6 px-6 py-2 bg-secondary/10 hover:bg-secondary/20 text-foreground font-medium rounded transition-colors"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        className="w-full px-4 py-3 bg-secondary/5 border border-secondary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full px-4 py-3 bg-secondary/5 border border-secondary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">Your Message</label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3 bg-secondary/5 border border-secondary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none text-foreground"
                                        placeholder="Tell us about your project..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-brown transition-all shadow-lg shadow-primary/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? <Loader2 className="animate-spin" /> : "Send Message"}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-96 bg-secondary/10 mt-20 relative flex items-center justify-center border-y border-secondary/20">
                <div className="text-center opacity-40">
                    <MapPin size={48} className="mx-auto mb-2" />
                    <p className="font-medium text-lg uppercase tracking-wider">Google Maps Integration</p>
                </div>
            </div>
        </div>
    );
}
