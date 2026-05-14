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
        "Complete web applications built from frontend to backend to infrastructure using React, Next.js, Node.js, and PostgreSQL. Customer portals, internal dashboards, and multi-tenant platforms designed to scale without costly rewrites. We handle authentication, API design, database architecture, and deployment as a single integrated team.",
    },
    {
      icon: Monitor,
      name: "Corporate Website Development",
      description:
        "High-performance corporate websites built with strong Core Web Vitals, fast load times, and SEO-optimized architecture, so your business ranks well in Google and converts visitors into clients. We build mobile-first, include structured data markup, and deliver clean semantic HTML that search engines and AI systems can read clearly.",
    },
    {
      icon: Server,
      name: "SaaS Platform Development",
      description:
        "Full SaaS platforms from MVP to production. Multi-tenancy, subscription billing via Stripe, role-based access control, and the architectural decisions that matter when real users start arriving. Noble Stack has built its own SaaS products, we understand the tradeoffs between moving fast and building for scale.",
    },
    {
      icon: ShoppingCart,
      name: "E-Commerce Website Development",
      description:
        "Fast, mobile-first, conversion-optimized e-commerce stores built for Nepali and international markets. We integrate local payment gateways (eSewa, Khalti) and international processors (Stripe, PayPal), plus inventory management and multi-vendor marketplace architecture when needed.",
    },
    {
      icon: Cpu,
      name: "AI-Powered Web Development",
      description:
        "We integrate large language models, intelligent search, recommendation engines, and workflow automation directly into web applications, built into the architecture, not bolted on as plugins. Noble Stack uses OpenAI, Anthropic Claude, LangChain, and Pinecone to build AI capabilities that are fast, cost-efficient, and production-ready.",
    },
    {
      icon: Wrench,
      name: "Website Maintenance and Support",
      description:
        "Ongoing maintenance, performance monitoring, security patching, and feature development for live web applications, whether we built them or you inherited them. We offer structured monthly retainers so you always have a senior engineer available.",
    },
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Web Development Services We Offer"
          description="End-to-end web development, from a single landing page to a complex, data-intensive web application. Every project is custom-built for your goals, no templates, no page builders."
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
