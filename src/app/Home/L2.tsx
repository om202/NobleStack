"use client";

import {
  Smartphone,
  Rocket,
  Globe,
  ArrowRight,
  Monitor,
  Network,
  Layers,
  Package,
  Search,
  Shield,
  CheckCircle,
} from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiVercel,
  SiFigma,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiGraphql,
  SiFramer,
  SiRadixui,
  SiJest,
  SiPrettier,
  SiEslint,
  SiPostgresql,
} from "react-icons/si";
import React from "react";
import TechStackCarousel from "../../components/TechStackCarousel";

import ServiceCard from "../../components/ServiceCard";
import SectionHeader from "../../components/SectionHeader";



export default function FeaturesSection() {

  const webServices = [
    {
      name: "Modern Web Development",
      icon: Globe,
      status: "Specialized",
      description: "React, Next.js, TypeScript",
    },
    {
      name: "E-commerce Websites",
      icon: Smartphone,
      status: "Expert",
      description: "Shopify, Custom Solutions",
    },
    {
      name: "SaaS Platforms",
      icon: Monitor,
      status: "Advanced",
      description: "Full-Stack Applications",
    },
    {
      name: "Landing Pages",
      icon: Rocket,
      status: "Conversion Pro",
      description: "High-Converting Pages",
    },
  ];

  const webTechStack = [
    { name: "React.js", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Vercel", icon: SiVercel, color: "#000000" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "Redux", icon: SiRedux, color: "#764ABC" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Express.js", icon: SiExpress, color: "#000000" },
    { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
    { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
    { name: "REST API", icon: Network, color: "#FF6B35" },
    { name: "WebSockets", icon: Network, color: "#0066CC" },
    { name: "Zustand", icon: Package, color: "#FF8C00" },
    { name: "Radix UI", icon: SiRadixui, color: "#161618" },
    { name: "ShadCN UI", icon: Layers, color: "#000000" },
    { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
    { name: "SWR", icon: Search, color: "#000000" },
    { name: "Zod", icon: Shield, color: "#3E63DD" },
    { name: "Jest", icon: SiJest, color: "#C21325" },
    { name: "Prettier", icon: SiPrettier, color: "#F7B93E" },
    { name: "ESLint", icon: SiEslint, color: "#4B32C3" },
    { name: "Clerk", icon: CheckCircle, color: "#6C47FF" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  ];

  return (
    <section id="features" className="py-12 px-4 bg-noble-dark">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <SectionHeader
          title="We Build Modern"
          highlightedText="Websites That Convert"
          description="Specializing in lightning-fast, SEO-optimized websites that look stunning on every device. From landing pages to complex web applications, we create digital experiences that drive results."
          ctaText="Schedule a Free Consultation"
          ctaHref="https://calendar.app.google/mWmd6v421Pk66LQ26"
          ctaIcon={ArrowRight}
          className="animate-fade-in"
        />

        {/* Modern Tech Stack */}
        <TechStackCarousel
          technologies={webTechStack}
          title="Modern Web Technologies We Master"
        />

        {/* Web Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {webServices.map((service, index) => (
            <ServiceCard
              key={index}
              name={service.name}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
