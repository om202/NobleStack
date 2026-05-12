import { MonitorSmartphone, BrainCircuit, Cloud, Layout } from "lucide-react";
import ServiceCard from "../../../components/ServiceCard";
import SectionHeader from "../../../components/SectionHeader";

export default function ServicesProvidedSection() {
  const services = [
    {
      icon: MonitorSmartphone,
      name: "Web & Mobile Development",
      description:
        "Custom Next.js and React web applications, plus native iOS and Android mobile apps built for performance and scale.",
    },
    {
      icon: BrainCircuit,
      name: "AI & Machine Learning",
      description:
        "Intelligent systems, AI chatbots, and generative AI integrations built into production-grade software products.",
    },
    {
      icon: Cloud,
      name: "SaaS Platforms",
      description:
        "Scalable B2B and B2C software products built from scratch—multi-tenancy, billing, role-based access, and reporting.",
    },
    {
      icon: Layout,
      name: "UI/UX Design",
      description:
        "Modern, user-centric interfaces designed for conversion, accessibility, and a clean experience across devices.",
    },
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Types of IT Services Offered in Nepal"
          description="Top tech companies in Nepal provide full-cycle engineering across modern stacks and domains—from MVP delivery to enterprise systems."
          imageSrc="/undraw_dev-environment_n5by.svg"
          imageAlt="Services illustration"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <ServiceCard
              key={idx}
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
