"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen py-12 flex flex-col items-center">
      <div className="container mx-auto px-6 max-w-5xl w-full">
        <div className="grid md:grid-cols-2 gap-8 border border-[#E0E0E0] rounded-[4px] overflow-hidden min-h-[500px]">
          {/* Info Side */}
          <div className="bg-[#0B2A4A] text-white p-12 flex flex-col justify-between">
            <div className="space-y-8">
              <div>
                <h1 className="text-3xl font-bold font-heading mb-4">Contact Us</h1>
                <p className="text-white/80 leading-relaxed font-body">
                  Connect directly with the Ludhiana head office for consulting, custom layout planning, and plant modernizations.
                </p>
              </div>

              <div className="space-y-6 font-body">
                <div className="flex items-start gap-4">
                  <MapPin className="shrink-0 mt-1 text-[#E4572E]" />
                  <div>
                    <h3 className="font-semibold text-lg">Office Address</h3>
                    <p className="text-white/80 text-sm">
                      Plot No. 47, Industrial Area Phase-II,<br />
                      Ludhiana, Punjab – 141003, India
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="shrink-0 text-[#E4572E]" />
                  <div>
                    <h3 className="font-semibold text-lg">Call Us</h3>
                    <p className="text-white/80 text-sm">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="shrink-0 text-[#E4572E]" />
                  <div>
                    <h3 className="font-semibold text-lg">Email Us</h3>
                    <p className="text-white/80 text-sm">info@sdindustries.co.in</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-12 flex flex-col justify-center bg-white text-[#1C1C1C]">
            {submitted ? (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-[#F5F6F7] text-[#E4572E] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#E0E0E0]">
                  <Send size={24} />
                </div>
                <h2 className="text-2xl font-bold">Message Sent!</h2>
                <p className="text-sm text-muted-foreground font-body">
                  Thank you for reaching out. Our team will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2 bg-[#0B2A4A] text-white font-semibold text-sm rounded-[4px] hover:bg-[#0B2A4A]/90 transition-all"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider mb-1 text-muted-foreground">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-2.5 border border-[#E0E0E0] rounded-[4px] text-sm focus:outline-none focus:border-[#0B2A4A] transition-all bg-white"
                    placeholder="Full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider mb-1 text-muted-foreground">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2.5 border border-[#E0E0E0] rounded-[4px] text-sm focus:outline-none focus:border-[#0B2A4A] transition-all bg-white"
                    placeholder="name@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider mb-1 text-muted-foreground">Your Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full px-4 py-2.5 border border-[#E0E0E0] rounded-[4px] text-sm focus:outline-none focus:border-[#0B2A4A] transition-all bg-white"
                    placeholder="Please details your project requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-[#E4572E] text-white font-bold uppercase tracking-wider text-sm rounded-[4px] hover:bg-[#E4572E]/90 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? <Loader2 className="animate-spin" /> : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
