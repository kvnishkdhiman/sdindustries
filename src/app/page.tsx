"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Settings, TrendingUp, Users } from "lucide-react";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary/30 via-background to-background z-0" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-4xl mx-auto space-y-6"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-tight"
            >
              Engineering the Future of <br className="hidden md:block" />
              <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-brown">
                Steel Manufacturing
              </span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto"
            >
              We provide world-class consultancy, project management, and engineering solutions for Steel Melting Shops and Rolling Mills.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
            >
              <Link
                href="/contact"
                className="px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-brown transition-all hover:scale-105 shadow-lg shadow-primary/20 flex items-center gap-2 justify-center"
              >
                Start Your Project <ArrowRight size={20} />
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 bg-white/50 backdrop-blur-sm border border-secondary text-foreground font-semibold rounded-lg hover:bg-secondary/20 transition-all flex items-center gap-2 justify-center"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Abstract Decor */}
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-50 animate-pulse" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-50" />
      </section>

      {/* Stats Board */}
      <section className="py-12 bg-white border-y border-secondary/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Projects Completed", value: "100+", icon: CheckCircle },
              { label: "Years Experience", value: "25+", icon: TrendingUp },
              { label: "Global Clients", value: "50+", icon: Users },
              { label: "Expert Engineers", value: "20+", icon: Settings },
            ].map((stat, idx) => (
              <div key={idx} className="space-y-2 p-4 rounded-xl hover:bg-secondary/10 transition-colors cursor-default">
                <stat.icon className="mx-auto text-primary mb-3" size={32} />
                <div className="text-4xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">Our Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From concept to commissioning, we deliver comprehensive solutions tailored to your plant's specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Steel Plant Consultancy",
                desc: "End-to-end project management, feasibility studies, and basic engineering.",
                link: "/services#consultancy",
                bg: "bg-surface-1",
              },
              {
                title: "Steel Melting Shop (SMS)",
                desc: "Optimization of Induction Furnaces, CCM, and LRF for peak efficiency.",
                link: "/services#sms",
                bg: "bg-surface-2",
              },
              {
                title: "Rolling Mill Solutions",
                desc: "Advanced engineering for TMT Bar, Wire Rod, and Structural Mills.",
                link: "/services#rolling",
                bg: "bg-surface-3",
              },
            ].map((service, idx) => (
              <Link
                key={idx}
                href={service.link}
                className="group p-8 bg-white border border-secondary/20 rounded-2xl hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Settings size={80} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.desc}
                </p>
                <span className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                  Learn More <ArrowRight size={16} className="ml-2" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-secondary/5 relative overflow-hidden">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Why Partner with <br />
              <span className="text-primary">SK Steels?</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We don't just provide services; we build long-lasting partnerships. Our philosophy "Think different, Feel the difference" drives us to innovate constantly, reducing your production costs while improving quality.
            </p>
            <ul className="space-y-4">
              {[
                "Tailored Solutions for your specific plant needs",
                "Proven track record with over 100+ successful projects",
                "Innovative technology to reduce operational costs",
                "Comprehensive support from concept to commissioning",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-foreground font-medium">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="inline-block mt-4 px-8 py-3 border border-foreground text-foreground font-semibold rounded hover:bg-foreground hover:text-white transition-all"
            >
              About Our Company
            </Link>
          </div>
          <div className="relative h-[500px] w-full bg-secondary/20 rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
              {/* Placeholder for an industrial image */}
              <div className="text-center">
                <Settings className="w-24 h-24 mx-auto mb-4 opacity-20" />
                <p className="text-sm">High-Quality Industrial Image Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
