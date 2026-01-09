import {
  Smartphone,
  Rocket,
  Globe,
  ArrowRight,
  Monitor,
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
import CTAButton from "../../components/CTAButton";



export default function FeaturesSection() {

  const webServices = [
    {
      name: "Full-Stack Web Development",
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
    { name: "Radix UI", icon: SiRadixui, color: "#161618" },
    { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
    { name: "Jest", icon: SiJest, color: "#C21325" },
    { name: "Prettier", icon: SiPrettier, color: "#F7B93E" },
    { name: "ESLint", icon: SiEslint, color: "#4B32C3" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  ];

  return (
    <section id="features" className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <SectionHeader
          title="Full-Stack Web Development Using Cutting-Edge Technologies"
          description="Specializing in lightning-fast, SEO-optimized websites and native mobile apps that look stunning on every device. From landing pages to complex web applications and iOS/Android apps, we create digital experiences that drive results."
          className="animate-fade-in"
        />

        {/* Modern Tech Stack */}
        <TechStackCarousel
          technologies={webTechStack}
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

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <CTAButton variant="secondary" href="https://calendar.app.google/mWmd6v421Pk66LQ26" icon={ArrowRight}>
            Schedule a Free Consultation
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
