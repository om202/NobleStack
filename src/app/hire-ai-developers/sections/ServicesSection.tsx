import { Brain, LineChart, MessageCircle, Sparkles, Bot } from "lucide-react";
import ServiceCard from "../../../components/ServiceCard";
import SectionHeader from "../../../components/SectionHeader";

export default function ServicesSection() {
  const services = [
    {
      icon: Brain,
      name: "Custom AI Development",
      description:
        "Building artificial intelligence solutions designed specifically for your unique requirements — automating processes, analyzing business data, and improving operational performance with scalable systems that integrate seamlessly.",
    },
    {
      icon: LineChart,
      name: "Machine Learning Development",
      description:
        "Building models that analyze large datasets and generate insights for better decision-making. Used for demand forecasting, fraud detection, recommendation engines, and predictive analytics.",
    },
    {
      icon: MessageCircle,
      name: "AI Chatbot Development",
      description:
        "Building conversational chatbots that understand user queries, provide instant responses, and assist customers across websites, mobile applications, and messaging platforms.",
    },
    {
      icon: Sparkles,
      name: "Generative AI Development",
      description:
        "Creating generative AI applications powered by large language models — AI assistants, automated content creation, intelligent document generation, and productivity-boosting AI tools.",
    },
    {
      icon: Bot,
      name: "AI Automation Solutions",
      description:
        "Automating repetitive tasks, processing large volumes of information, and streamlining business workflows across customer support, operations, and data management.",
    },
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="AI Development Services"
          description="Our AI development services are designed to help businesses adopt artificial intelligence technologies efficiently and effectively."
          imageSrc="/undraw_programming_j1zw.svg"
          imageAlt="AI development services illustration"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
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
