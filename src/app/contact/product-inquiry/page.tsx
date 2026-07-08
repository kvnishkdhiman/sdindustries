"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";

export default function ProductInquiry() {
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
    <div className="bg-white min-h-screen pt-8 pb-16 flex flex-col items-center">
      <div className="container mx-auto px-6 max-w-xl w-full">
        <div className="border border-[#E0E0E0] rounded-[4px] p-8 bg-white shadow-sm">
          <h1 className="text-3xl font-bold font-heading text-[#0B2A4A] mb-2 text-center">Product Inquiry</h1>
          <p className="text-sm text-muted-foreground text-center font-body mb-6">
            Get technical data sheets, layout quotes, and engineering sizing assistance.
          </p>

          {submitted ? (
            <div className="text-center space-y-4 py-8">
              <div className="w-16 h-16 bg-[#F5F6F7] text-[#E4572E] rounded-full flex items-center justify-center mx-auto border border-[#E0E0E0]">
                <Send size={24} />
              </div>
              <h2 className="text-2xl font-bold">Inquiry Sent!</h2>
              <p className="text-sm text-muted-foreground font-body">
                Our sales engineering team will compile the necessary data sheets and follow up shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 px-6 py-2 bg-[#0B2A4A] text-white font-semibold text-sm rounded-[4px] hover:bg-[#0B2A4A]/90 transition-all"
              >
                Inquire Another Product
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-muted-foreground">Select Product *</label>
                <select required className="w-full border border-[#E0E0E0] rounded-[4px] p-2.5 bg-white text-sm">
                  <option value="TMT Bar Mill">TMT Bar Mill</option>
                  <option value="Structural Mill">Structural Mill</option>
                  <option value="Wire Rod Mill">Wire Rod Mill</option>
                  <option value="Mill Stands">Mill Stands</option>
                  <option value="Reheating Furnace">Reheating Furnace</option>
                  <option value="Rolling Mill Gearbox">Rolling Mill Gearbox</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-muted-foreground">Full Name *</label>
                <input type="text" required className="w-full border border-[#E0E0E0] rounded-[4px] p-2.5 text-sm bg-white" placeholder="Enter name" />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-muted-foreground">Company Email *</label>
                <input type="email" required className="w-full border border-[#E0E0E0] rounded-[4px] p-2.5 text-sm bg-white" placeholder="name@company.com" />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-muted-foreground">Phone Number *</label>
                <input type="tel" required className="w-full border border-[#E0E0E0] rounded-[4px] p-2.5 text-sm bg-white" placeholder="Enter phone" />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-muted-foreground">Detailed Requirements *</label>
                <textarea required rows={4} className="w-full border border-[#E0E0E0] rounded-[4px] p-2.5 text-sm bg-white" placeholder="Specify desired tonnage capacity, speed, or dimensions..." />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-[#E4572E] text-white font-bold uppercase tracking-wider text-sm rounded-[4px] hover:bg-[#E4572E]/90 transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? <Loader2 className="animate-spin" /> : "Submit Inquiry"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
