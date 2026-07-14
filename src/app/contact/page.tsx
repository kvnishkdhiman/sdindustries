"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData & { form?: string }>>({});

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, spamHoney: "" }),
      });
      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setErrors({ form: data.message || "Submission failed" });
      }
    } catch {
      setErrors({ form: "Network error. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData])
      setErrors((prev) => ({ ...prev, [name]: undefined }));
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
                  {/* TODO: Replace with verified office location */}
                  Connect directly with the head office for consulting, custom layout planning, and plant modernizations.
                </p>
              </div>

              <div className="space-y-6 font-body">
                <div className="flex items-start gap-4">
                  <MapPin className="text-[#E4572E] shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-lg">Office Address</h3>
                    <p className="text-white/80 text-sm">
                      {/* TODO: Replace with verified address */}
                      123 Industrial Area, City, State – 000000, Country
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="text-[#E4572E] shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-lg">Call Us</h3>
                    {/* TODO: Replace with verified phone number */}
                    <p className="text-white/80 text-sm">+1 555 000 0000</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="text-[#E4572E] shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-lg">Email Us</h3>
                    {/* TODO: Replace with verified email address */}
                    <p className="text-white/80 text-sm">info@example.com</p>
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
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider mb-1 text-muted-foreground">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border rounded-[4px] text-sm focus:outline-none focus:border-[#0B2A4A] transition-all bg-white ${
                      errors.name ? "border-[#E4572E]" : "border-[#E0E0E0]"
                    }`}
                    placeholder="Full name"
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
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider mb-1 text-muted-foreground">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border rounded-[4px] text-sm focus:outline-none focus:border-[#0B2A4A] transition-all bg-white ${
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
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider mb-1 text-muted-foreground">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border rounded-[4px] text-sm focus:outline-none focus:border-[#0B2A4A] transition-all bg-white ${
                      errors.message ? "border-[#E4572E]" : "border-[#E0E0E0]"
                    }`}
                    placeholder="Please details your project requirements..."
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