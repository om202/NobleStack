import { Brain, LineChart, Sparkles, Layers, Bot, MessageCircle } from "lucide-react";
import { ArrowRight } from "lucide-react";
import ServiceCard from "../../../../components/ServiceCard";
import SectionHeader from "../../../../components/SectionHeader";
import CTAButton from "../../../../components/CTAButton";

export default function ServicesSection() {
  const services = [
    {
      icon: Brain,
      name: "Custom AI Software Development",
      description:
        "We build tailored AI systems for your exact operational needs: AI-powered SaaS platforms, predictive analytics systems, intelligent dashboards, recommendation engines, and fraud detection systems—all integrated seamlessly with existing enterprise infrastructure.",
    },
    {
      icon: LineChart,
      name: "Machine Learning Development",
      description:
        "Our ML engineers build systems capable of predictive forecasting, customer behavior modeling, demand prediction, fraud detection, anomaly detection, and recommendation algorithms—optimized for real-world production environments.",
    },
    {
      icon: Sparkles,
      name: "Generative AI Development",
      description:
        "We build generative AI solutions using modern large language models: AI copilots and assistants, intelligent document generation, AI knowledge bases, automated research systems, and AI-powered content platforms.",
    },
    {
      icon: Layers,
      name: "AI SaaS Product Development",
      description:
        "We help companies design AI-powered SaaS platforms with AI analytics dashboards, intelligent automation tools, predictive user insights, AI recommendation systems, and conversational AI interfaces that scale globally.",
    },
    {
      icon: Bot,
      name: "AI Automation Systems",
      description:
        "Our automation solutions include document processing automation, workflow automation, intelligent data extraction, customer onboarding automation, and internal operations automation—reducing costs while increasing productivity.",
    },
    {
      icon: MessageCircle,
      name: "Natural Language Processing Solutions",
      description:
        "We build NLP systems including AI chatbots, sentiment analysis systems, intelligent search engines, automated document classification, and voice assistants—enabling businesses to process large volumes of text efficiently.",
    },
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="AI Software Development Services"
          description="Every business has unique workflows and data structures. Our AI development services focus on building intelligent systems custom-tailored for your exact operational needs."
          imageSrc="/undraw_programming_j1zw.svg"
          imageAlt="AI services illustration"
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
            href="https://calendar.app.google/mWmd6v421Pk66LQ26"
            icon={ArrowRight}
          >
            Discuss Your AI Project
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
