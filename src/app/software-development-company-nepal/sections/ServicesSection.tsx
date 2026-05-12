import { Monitor, Server, Smartphone, LayoutGrid, Building2, ArrowRight } from "lucide-react";
import ServiceCard from "../../../components/ServiceCard";
import SectionHeader from "../../../components/SectionHeader";
import CTAButton from "../../../components/CTAButton";

export default function ServicesSection() {
  const services = [
    {
      icon: LayoutGrid,
      name: "Custom Software Development",
      description:
        "Tailored software solutions designed around your specific business processes, ensuring scalability, maintainability, and a strong foundation for long-term growth.",
    },
    {
      icon: Server,
      name: "SaaS Platform Development",
      description:
        "From MVP to full-scale SaaS platforms with multi-tenancy, subscription billing, role-based access, and the operational maturity to handle real users.",
    },
    {
      icon: Monitor,
      name: "Web Application Development",
      description:
        "Fast, responsive, and high-performance web applications built with React, Next.js, and TypeScript, architected for SEO, performance, and scale from day one.",
    },
    {
      icon: Smartphone,
      name: "Mobile App Development",
      description:
        "Native iOS, Android, and cross-platform mobile applications built with Swift, Kotlin, React Native, and Flutter, shipped to the App Store and Google Play.",
    },
    {
      icon: Building2,
      name: "Enterprise Software Solutions",
      description:
        "Robust internal systems, ERPs, CRMs, and custom business platforms that streamline operations and integrate cleanly with your existing workflows.",
    },
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Our Software Development Services"
          description="Noble Stack provides comprehensive software development services, from concept to deployment, using modern, reliable technologies that scale with your business."
          imageSrc="/undraw_dev-environment_n5by.svg"
          imageAlt="Software services illustration"
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
            Discuss Your Project
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
