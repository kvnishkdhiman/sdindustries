"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";

const PRODUCT_OPTIONS = [
  "TMT Bar Mill",
  "Structural Mill",
  "Wire Rod Mill",
  "Mill Stands",
  "Reheating Furnace",
  "Rolling Mill Gearbox",
] as const;

type FormData = {
  product: string;
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function ProductInquiry() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    product: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData & { form?: string }>>({});

  const validateForm = () => {
    const newErrors: Partial<FormData & { form?: string }> = {};
    if (!formData.product) newErrors.product = "Please select a product";
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.message.trim()) newErrors.message = "Requirements are required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact/product-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, spamHoney: "" }),
      });
      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
        setFormData({ product: "", name: "", email: "", phone: "", message: "" });
      } else {
        setErrors({ form: data.message || "Submission failed" } as Partial<FormData>);
      }
    } catch {
      setErrors({ form: "Network error. Please try again." } as Partial<FormData>);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData])
      setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  return (
    <div className="bg-white min-h-screen pt-8 pb-16 flex flex-col items-center">
      <div className="container mx-auto px-6 max-w-xl w-full">
        <div className="border border-[#E0E0E0] rounded-[4px] p-8 bg-white shadow-sm">
          <h1 className="text-3xl font-bold font-heading text-[#0B2A4A] mb-2 text-center">
            Product Inquiry
          </h1>
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
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label
                  className="block text-xs font-semibold uppercase tracking-wider mb-1 text-muted-foreground"
                >
                  Select Product *
                </label>
                <select
                  name="product"
                  required
                  value={formData.product}
                  onChange={handleChange}
                  className={`w-full border rounded-[4px] p-2.5 bg-white text-sm ${
                    errors.product ? "border-[#E4572E]" : "border-[#E0E0E0]"
                  }`}
                  aria-invalid={errors.product ? "true" : "false"}
                  aria-describedby={errors.product ? "product-error" : undefined}
                >
                  <option value="">-- Choose Category --</option>
                  {PRODUCT_OPTIONS.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
                {errors.product && (
                  <p id="product-error" className="mt-1.5 text-xs text-[#E4572E]" role="alert">
                    {errors.product}
                  </p>
                )}
              </div>

              <div>
                <label
                  className="block text-xs font-semibold uppercase tracking-wider mb-1 text-muted-foreground"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full border rounded-[4px] p-2.5 text-sm bg-white ${
                    errors.name ? "border-[#E4572E]" : "border-[#E0E0E0]"
                  }`}
                  placeholder="Enter name"
                  aria-invalid={errors.name ? "true" : "false"}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-xs text-[#E4572E]" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  className="block text-xs font-semibold uppercase tracking-wider mb-1 text-muted-foreground"
                >
                  Company Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full border rounded-[4px] p-2.5 text-sm bg-white ${
                    errors.email ? "border-[#E4572E]" : "border-[#E0E0E0]"
                  }`}
                  placeholder="name@company.com"
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs text-[#E4572E]" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  className="block text-xs font-semibold uppercase tracking-wider mb-1 text-muted-foreground"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full border rounded-[4px] p-2.5 text-sm bg-white ${
                    errors.phone ? "border-[#E4572E]" : "border-[#E0E0E0]"
                  }`}
                  placeholder="Enter phone"
                  aria-invalid={errors.phone ? "true" : "false"}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" className="mt-1.5 text-xs text-[#E4572E]" role="alert">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label
                  className="block text-xs font-semibold uppercase tracking-wider mb-1 text-muted-foreground"
                >
                  Detailed Requirements *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full border rounded-[4px] p-2.5 text-sm bg-white ${
                    errors.message ? "border-[#E4572E]" : "border-[#E0E0E0]"
                  }`}
                  placeholder="Specify desired tonnage capacity, speed, or dimensions..."
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-xs text-[#E4572E]" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              {errors.form && (
                <p className="text-xs text-[#E4572E]" role="alert">
                  {errors.form}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-[#E4572E] text-white font-bold uppercase tracking-wider text-sm rounded-[4px] hover:bg-[#E4572E]/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
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