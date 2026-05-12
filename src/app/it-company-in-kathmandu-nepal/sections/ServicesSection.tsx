import {
  Monitor,
  Code2,
  BrainCircuit,
  Smartphone,
  Server,
  Layout,
  ArrowRight,
} from "lucide-react";
import ServiceCard from "../../../components/ServiceCard";
import SectionHeader from "../../../components/SectionHeader";
import CTAButton from "../../../components/CTAButton";

export default function ServicesSection() {
  const services = [
    {
      icon: Monitor,
      name: "Website Development",
      description:
        "Fast, responsive, SEO-friendly websites and corporate sites built with Next.js and React, designed to load quickly, rank well, and convert visitors into customers.",
    },
    {
      icon: Code2,
      name: "Custom Software Development",
      description:
        "ERPs, CRMs, admin dashboards, billing and inventory systems, HR tools, and enterprise software tailored to your specific business processes and operational workflow.",
    },
    {
      icon: BrainCircuit,
      name: "AI Development & Automation",
      description:
        "AI chatbots, workflow automation, AI-powered SaaS systems, and machine learning integrations that reduce manual work and unlock new operational capabilities.",
    },
    {
      icon: Smartphone,
      name: "Mobile App Development",
      description:
        "Native iOS and Android apps in Swift and Kotlin, plus cross-platform delivery in React Native and Flutter, shipped to the App Store and Google Play.",
    },
    {
      icon: Server,
      name: "SaaS Product Development",
      description:
        "Multi-tenant SaaS platforms with subscription billing, role-based access, and the operational maturity to handle real users from launch through scale.",
    },
    {
      icon: Layout,
      name: "UI/UX Design",
      description:
        "Modern, intuitive, conversion-focused interfaces, wireframes, prototypes, and complete design systems that work cleanly across web and mobile.",
    },
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Our IT Services in Kathmandu, Nepal"
          description="End-to-end engineering, from a single landing page to a complete AI-powered SaaS platform. Every project is custom-built for your goals."
          imageSrc="/undraw_dev-environment_n5by.svg"
          imageAlt="IT services illustration"
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
          <CTAButton variant="secondary" href="/contact" icon={ArrowRight}>
            Discuss Your Project
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
