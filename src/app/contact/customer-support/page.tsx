"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";

export default function CustomerSupport() {
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
          <h1 className="text-3xl font-bold font-heading text-[#0B2A4A] mb-2 text-center">Customer Support</h1>
          <p className="text-sm text-muted-foreground text-center font-body mb-6">
            Lodge mechanical or process advisory support tickets.
          </p>

          {submitted ? (
            <div className="text-center space-y-4 py-8">
              <div className="w-16 h-16 bg-[#F5F6F7] text-[#E4572E] rounded-full flex items-center justify-center mx-auto border border-[#E0E0E0]">
                <Send size={24} />
              </div>
              <h2 className="text-2xl font-bold">Ticket Created!</h2>
              <p className="text-sm text-muted-foreground font-body">
                Support request logged. An SD Industries engineer will follow up on alignment or gear metrics within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 px-6 py-2 bg-[#0B2A4A] text-white font-semibold text-sm rounded-[4px] hover:bg-[#0B2A4A]/90 transition-all"
              >
                Log Another Support Ticket
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-muted-foreground">Operational Plant Code / Name *</label>
                <input type="text" required className="w-full border border-[#E0E0E0] rounded-[4px] p-2.5 text-sm bg-white" placeholder="Enter plant ID or name" />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-muted-foreground">Urgency Level *</label>
                <select className="w-full border border-[#E0E0E0] rounded-[4px] p-2.5 bg-white text-sm">
                  <option value="Urgent (Production downtime risk)">Urgent (Production downtime risk)</option>
                  <option value="Medium (Performance tuning)">Medium (Performance tuning)</option>
                  <option value="Low (General advisory query)">Low (General query)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-muted-foreground">Support Topic *</label>
                <select className="w-full border border-[#E0E0E0] rounded-[4px] p-2.5 bg-white text-sm">
                  <option value="Mill Stand / Roll Alignment">Mill Stand / Roll Alignment</option>
                  <option value="Gearbox / Transmission Lubrication">Gearbox / Transmission Lubrication</option>
                  <option value="Furnace Heat / Scale loss tuning">Furnace Heat / Scale loss tuning</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-muted-foreground">Problem Description *</label>
                <textarea required rows={4} className="w-full border border-[#E0E0E0] rounded-[4px] p-2.5 text-sm bg-white" placeholder="Explain the dynamic load error or thermodynamic shift..." />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-[#E4572E] text-white font-bold uppercase tracking-wider text-sm rounded-[4px] hover:bg-[#E4572E]/90 transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? <Loader2 className="animate-spin" /> : "Submit Support Request"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
