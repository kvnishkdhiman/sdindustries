"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { 
  ArrowRight, 
  CheckCircle, 
  Globe, 
  User,
  Mail,
  Phone,
  MessageSquare
} from "lucide-react";

const slides = [
  {
    image: "/assets/hero_bg.jpg",
    titleBold: "Bigger, Better and Stronger",
    titleRegular: "Your Reliable Partner in Steel Forming",
    desc: "SD Industries delivers turnkey metallurgy consultancy, advanced dynamic mechanical design, and high-performance manufacturing setups for rolling mills worldwide."
  }
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [inquiryProduct, setInquiryProduct] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "", spamHoney: "" });

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.spamHoney) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "", spamHoney: "" });
    }, 3000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#1C1C1C]">
      
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden bg-[#0B2A4A] text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src={slides[activeSlide].image}
            alt="SD Industries Steel Mill Banner"
            fill
            priority
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2A4A]/90 via-[#0B2A4A]/70 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 w-full">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight font-heading">
              {slides[activeSlide].titleBold} <br />
              <span className="font-normal text-white/95 text-2xl md:text-4xl block mt-2">
                {slides[activeSlide].titleRegular}
              </span>
            </h1>
            <p className="text-sm md:text-base text-white/80 max-w-2xl font-body leading-relaxed">
              {slides[activeSlide].desc}
            </p>
            <div className="pt-4">
              <Link
                href="/about/who-we-are"
                className="inline-block bg-[#E4572E] text-white font-bold uppercase tracking-widest text-xs px-8 py-4 rounded-[4px] hover:bg-[#E4572E]/90 transition-all shadow-md"
              >
                KNOW MORE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* "Who We Are" Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-heading text-[#0B2A4A] uppercase tracking-wider">
              <strong>Leading Rolling Mill</strong> Consultants & Manufacturers in India
            </h2>
            <p className="text-sm text-[#1C1C1C]/80 leading-relaxed font-body">
              Established in 1998, SD Industries Pvt. Ltd. (a government-recognized Star Export House) has built a legacy of engineering excellence. We provide comprehensive, turn-key engineering setups, from basic design and manufacturing of mill stands to complete plant commissioning.
            </p>
            <p className="text-sm text-[#1C1C1C]/80 leading-relaxed font-body">
              Our advanced machining plants in Ludhiana are ISO 9001:2015 certified, highlighting our commitment to quality, efficiency, and compliance. We partner with metallurgical corporations across the globe to optimize structural steel mill, wire rod mill, and reheating furnace efficiencies.
            </p>
            <div className="pt-2">
              <Link href="/about/who-we-are" className="text-[#E4572E] font-bold text-xs uppercase tracking-wider hover:underline flex items-center gap-1">
                Read our full profile <ArrowRight size={14} />
              </Link>
            </div>
          </div>
          <div className="relative h-[380px] border border-[#E0E0E0] rounded-[4px] overflow-hidden shadow-sm">
            <Image
              src="/assets/who_we_are.jpg"
              alt="SD Industries Engineers reviewing blueprints"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services/Solutions Card Grid */}
      <section className="py-20 bg-[#F5F6F7] border-y border-[#E0E0E0]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-2xl md:text-3xl font-heading text-[#0B2A4A] uppercase tracking-wider">
              <strong>Comprehensive Solutions</strong> & Specialized Products
            </h2>
            <p className="text-xs text-muted-foreground uppercase tracking-widest max-w-2xl mx-auto">
              From concept to turnkey delivery, we cover all aspects of rolling mill consulting and plant engineering.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Greenfield Plant Consultancy", desc: "Complete end-to-end design, civil layout coordination, procurement assistance, and plant erection management.", link: "/solutions" },
              { title: "Brownfield Plant Upgrades", desc: "Techno-economic modernization studies to boost output capacity, automate sequences, and upgrade mill gears.", link: "/solutions" },
              { title: "TMT Bar Mills", desc: "State-of-the-art structural layout designs for high-yield TMT bar processing, cooling beds, and thermex systems.", link: "/products/tmt-bar-mill" },
              { title: "Structural Rolling Mills", desc: "Heavy machinery stand alignment layouts for channel, angle, beam, and customized profiles rolling.", link: "/products/structural-mill" },
              { title: "Wire Rod Rolling Mills", desc: "High-speed wire rod block integration, coiling layouts, laying head maintenance solutions, and spool handling.", link: "/products/wire-rod-mill" },
              { title: "Mill Stand Manufacturing", desc: "Rugged and precise housing, roll chocks, cardan shaft mounts, and custom mechanical tolerances designs.", link: "/products/mill-stands" },
              { title: "Reheating Furnaces", desc: "Walking beam and pusher type furnace design optimization, thermodynamic modeling, and fuel efficiency systems.", link: "/products/reheating-furnace" },
              { title: "Rolling Mill Gearboxes", desc: "High-torque speed reducers, custom drive gear sizing, pinions design, and alignment lubrication consulting.", link: "/products/rolling-mill-gearbox" },
              { title: "Customised Steel Solutions", desc: "Special purpose shear alignment, automation control loops, tail-end guides, and custom mill tooling.", link: "/solutions" },
            ].map((card, idx) => (
              <div key={idx} className="bg-white p-8 border border-[#E0E0E0] rounded-[4px] flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <h3 className="text-base font-bold text-[#0B2A4A] mb-3 uppercase tracking-wider">{card.title}</h3>
                  <p className="text-xs text-[#1C1C1C]/80 leading-relaxed mb-6 font-body">{card.desc}</p>
                </div>
                <Link href={card.link} className="text-[#E4572E] text-xs font-bold uppercase tracking-wider hover:underline flex items-center gap-1">
                  More <ArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[380px] border border-[#E0E0E0] bg-[#F5F6F7] rounded-[4px] overflow-hidden">
            <Image
              src="/assets/product_sketch.jpg"
              alt="Rolling Mill Stand Blueprint"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-heading text-[#0B2A4A] uppercase tracking-wider">
              <strong>Engineering Precision</strong> & Product Innovation
            </h2>
            <p className="text-sm text-[#1C1C1C]/80 leading-relaxed font-body">
              At SD Industries, we develop robust equipment built to survive the extreme temperatures and dynamic load cycles of heavy metallurgy. Our designs utilize state-of-the-art finite element analysis (FEA) and stress profiles to maximize rolling output uptime.
            </p>
            <p className="text-sm text-[#1C1C1C]/80 leading-relaxed font-body">
              We continually iterate on mechanical wear layouts, offering clients solutions that drastically reduce roll replacement cycles and reduce specific power consumption levels.
            </p>
            <div className="pt-2">
              <Link
                href="/products/tmt-bar-mill"
                className="inline-block bg-[#0B2A4A] text-white font-bold uppercase tracking-wider text-xs px-6 py-3.5 rounded-[4px] hover:bg-[#0B2A4A]/90 transition-all shadow-sm"
              >
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Experience Counter Section */}
      <section className="py-16 bg-[#0B2A4A] text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "25+", label: "Years of Experience" },
              { value: "12+", label: "Countries Served" },
              { value: "3.5 Mn MT+", label: "Project Tonnage" },
              { value: "150+", label: "Group Manpower" }
            ].map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <div className="text-3xl md:text-4xl font-extrabold text-[#E4572E] font-heading">{stat.value}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us Section */}
      <section className="py-20 bg-white border-b border-[#E0E0E0]">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-heading text-[#0B2A4A] uppercase tracking-wider">
              <strong>Why Partner</strong> With SD Industries?
            </h2>
            <p className="text-sm text-[#1C1C1C]/80 leading-relaxed font-body">
              Our consultation model targets direct return on investment (ROI). By structuring operations to minimize energy waste and optimizing stand speeds, we bring mill profitability into tight alignment with modern energy standards.
            </p>
            <ul className="space-y-3 font-body text-xs text-[#1C1C1C]/80 font-bold uppercase tracking-wider">
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-[#E4572E]" /> Customized Greenfield & Brownfield plant engineering.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-[#E4572E]" /> Complete dynamic modeling for furnaces & mechanical stands.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-[#E4572E]" /> Stringent adherence to ISO 9001:2015 manufacturing standards.
              </li>
            </ul>
          </div>
          <div className="bg-[#F5F6F7] p-8 border border-[#E0E0E0] rounded-[4px] space-y-6">
            <h3 className="text-lg font-bold text-[#0B2A4A] uppercase tracking-wider">Client Endorsement</h3>
            <blockquote className="italic text-sm text-[#1C1C1C]/80 border-l-4 border-[#E4572E] pl-4 font-body">
              "SD Industries delivered our TMT mill upgrade on schedule with zero downtime. Their consultancy team understood our exact tonnage requirements."
            </blockquote>
            <div className="text-xs font-bold uppercase tracking-wider">
              — Plant Head, Reliant Steel Corp
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-20 bg-[#F5F6F7]">
        <div className="container mx-auto px-6 max-w-xl bg-white p-8 border border-[#E0E0E0] rounded-[4px] shadow-sm">
          <h2 className="text-xl font-bold text-[#0B2A4A] mb-2 text-center uppercase tracking-wider">Product & Consultancy Inquiry</h2>
          <p className="text-xs text-muted-foreground text-center uppercase tracking-widest mb-6">Partner with SD Industries Today</p>
          {formSubmitted ? (
            <div className="bg-green-50 text-green-700 p-4 rounded border border-green-200 text-center font-bold text-sm">
              Thank you! Your inquiry has been submitted successfully. Our team will contact you shortly.
            </div>
          ) : (
            <form onSubmit={handleInquirySubmit} className="space-y-4">
              <input
                type="text"
                name="spamHoney"
                value={formData.spamHoney}
                onChange={(e) => setFormData({ ...formData, spamHoney: e.target.value })}
                className="hidden"
              />
              
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider mb-1 text-muted-foreground">Select Product / Service *</label>
                <select
                  required
                  value={inquiryProduct}
                  onChange={(e) => setInquiryProduct(e.target.value)}
                  className="w-full border border-[#E0E0E0] rounded-[4px] p-2.5 bg-white text-xs font-bold uppercase tracking-wider"
                >
                  <option value="">-- Choose Category --</option>
                  <option value="Greenfield Setup">Greenfield Plant Setup</option>
                  <option value="Brownfield Upgrade">Brownfield Plant Upgrade</option>
                  <option value="TMT Bar Mill">TMT Bar Mill</option>
                  <option value="Structural Mill">Structural Mill</option>
                  <option value="Wire Rod Mill">Wire Rod Mill</option>
                  <option value="Mill Stands">Mill Stands</option>
                  <option value="Reheating Furnace">Reheating Furnace</option>
                  <option value="Gearboxes">Rolling Mill Gearbox</option>
                  <option value="Custom Solutions">Customized Solutions</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider mb-1 text-muted-foreground">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Enter full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border border-[#E0E0E0] rounded-[4px] p-2.5 text-xs bg-white"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider mb-1 text-muted-foreground">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border border-[#E0E0E0] rounded-[4px] p-2.5 text-xs bg-white"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider mb-1 text-muted-foreground">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765-43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full border border-[#E0E0E0] rounded-[4px] p-2.5 text-xs bg-white"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider mb-1 text-muted-foreground">Requirement / message *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Please details your project requirements or specific questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full border border-[#E0E0E0] rounded-[4px] p-2.5 text-xs bg-white"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#E4572E] text-white font-bold py-3.5 uppercase tracking-wider text-xs rounded-[4px] hover:bg-[#E4572E]/90 transition-all shadow-sm"
              >
                Submit Inquiry
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-20 bg-white border-b border-[#E0E0E0]">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-heading text-[#0B2A4A] uppercase tracking-wider">
              <strong>Global Footprint</strong> & Market Presence
            </h2>
            <p className="text-sm text-[#1C1C1C]/80 leading-relaxed font-body">
              SD Industries serves critical metallurgy centers across the globe. Our engineering plans have guided construction, setups, and commissioning sequences across multiple international boundaries.
            </p>
            <p className="text-xs font-bold uppercase tracking-widest text-[#E4572E]">Countries actively served:</p>
            <p className="text-sm text-[#1C1C1C]/80 font-body font-bold">
              India, UAE, Bangladesh, Nepal, Vietnam, Indonesia, Nigeria, Kenya, Egypt, Saudi Arabia.
            </p>
          </div>
          <div className="bg-[#F5F6F7] border border-[#E0E0E0] p-8 rounded-[4px] h-[300px] flex items-center justify-center">
            <div className="text-center space-y-4">
              <Globe className="text-[#0B2A4A] mx-auto opacity-40" size={64} />
              <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Global Operations Network Map</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clientele Logo Wall */}
      <section className="py-16 bg-[#F5F6F7]">
        <div className="container mx-auto px-6 space-y-12">
          <div className="text-center">
            <h2 className="text-xl font-bold text-[#0B2A4A] uppercase tracking-wider">Trusted By Industrial Giants</h2>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-2">Client Portfolio</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {["RSC", "SMS", "VSC", "JSC", "BSC", "ISC"].map((client, idx) => (
              <div key={idx} className="bg-white border border-[#E0E0E0] rounded-[4px] h-20 flex items-center justify-center font-bold text-[#0B2A4A]/40 text-xl tracking-wider select-none hover:border-[#E4572E] transition-colors">
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
