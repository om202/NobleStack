import {
  ArrowRight,
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
  SiShopify,
  SiGoogleads,
} from "react-icons/si";
import React from "react";
import TechStackCarousel from "../../components/TechStackCarousel";

import ServiceCard from "../../components/ServiceCard";
import SectionHeader from "../../components/SectionHeader";
import CTAButton from "../../components/CTAButton";



export default function FeaturesSection() {

  const webServices = [
    {
      name: "Custom Web Applications",
      icon: SiReact,
      status: "Specialized",
      description: "Next.js, React, TypeScript",
    },
    {
      name: "SaaS Product Development",
      icon: SiVercel,
      status: "Advanced",
      description: "Multi-tenant, scalable platforms",
    },
    {
      name: "E-Commerce Platforms",
      icon: SiShopify,
      status: "Expert",
      description: "Shopify & custom storefronts",
    },
    {
      name: "Enterprise Dashboards & APIs",
      icon: SiGoogleads,
      status: "Production Grade",
      description: "Admin systems, GraphQL, REST",
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
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <SectionHeader
          title="Full-Stack Web Development for Modern Businesses"
          description="We build fast, scalable, and SEO-friendly web applications using modern frontend and backend technologies. Whether you need a company website, SaaS platform, admin dashboard, marketplace, or enterprise system, we focus on performance, usability, and long-term scalability."
          className="animate-fade-in"
          imageSrc="/undraw_server-cluster_7ugi.svg"
          imageAlt="Full-stack web development services illustration"
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
          <CTAButton variant="secondary" href="/Services/full-stack-engineering" icon={ArrowRight}>
            View Web Development Services
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
