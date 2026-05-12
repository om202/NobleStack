import { Layers, Monitor, Server, ShoppingCart, Cpu, Wrench, ArrowRight } from "lucide-react";
import ServiceCard from "../../../components/ServiceCard";
import SectionHeader from "../../../components/SectionHeader";
import CTAButton from "../../../components/CTAButton";

export default function ServicesSection() {
  const services = [
    {
      icon: Layers,
      name: "Full-Stack Web Application Development",
      description:
        "Complete web applications, frontend to backend to infrastructure, built with React, Next.js, Node.js, and PostgreSQL. Customer portals, internal dashboards, multi-tenant platforms designed to scale without costly rewrites.",
    },
    {
      icon: Monitor,
      name: "Corporate Website Development",
      description:
        "High-performance corporate websites with strong Core Web Vitals, fast load times, and SEO-optimized architecture, so your business ranks well and converts visitors into clients.",
    },
    {
      icon: Server,
      name: "SaaS Platform Development",
      description:
        "Full SaaS platforms from MVP to production. Multi-tenancy, subscription billing, role-based access, and the architectural decisions that matter when real users start arriving.",
    },
    {
      icon: ShoppingCart,
      name: "E-Commerce Website Development",
      description:
        "Fast, mobile-first, conversion-optimized e-commerce stores. Local payment gateways (eSewa, Khalti, Stripe), inventory management, and multi-vendor platforms when needed.",
    },
    {
      icon: Cpu,
      name: "AI-Powered Web Development",
      description:
        "We integrate large language models, intelligent search, recommendation engines, and automation directly into web applications, built into the stack, not bolted on.",
    },
    {
      icon: Wrench,
      name: "Maintenance and Support",
      description:
        "Ongoing maintenance, performance monitoring, security patching, and feature development for existing web applications, whether we built them or you inherited them.",
    },
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Web Development Services We Offer"
          description="End-to-end web development, from a single landing page to a complex, data-intensive web application. Every project is custom-built for your goals."
          imageSrc="/undraw_software-engineer_xv60.svg"
          imageAlt="Web services illustration"
        />

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              name={service.name}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <CTAButton
            variant="secondary"
            href="/contact"
            icon={ArrowRight}
          >
            Discuss Your Web Project
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
