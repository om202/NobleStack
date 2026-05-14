import {
  ArrowRight,
} from "lucide-react";
import {
  SiOpenai,
  SiStreamlit,
  SiHuggingface,
  SiAmazon,
  SiGoogle,
  SiAnthropic,
  SiLangchain,
  SiFastapi,
  SiN8N,
  SiZapier,
  SiGoogletranslate,
} from "react-icons/si";
import React from "react";
import TechStackCarousel from "../../components/TechStackCarousel";

import ServiceCard from "../../components/ServiceCard";
import SectionHeader from "../../components/SectionHeader";
import CTAButton from "../../components/CTAButton";

export default function AIServicesSection() {


  const aiServices = [
    {
      name: "AI Chatbots & Virtual Assistants",
      icon: SiOpenai,
      status: "AI Expert",
      description: "GPT-4, Claude, custom models",
    },
    {
      name: "LLM-Powered Applications",
      icon: SiAnthropic,
      status: "Production Grade",
      description: "RAG, retrieval & reasoning",
    },
    {
      name: "Internal Knowledge Assistants",
      icon: SiHuggingface,
      status: "Enterprise",
      description: "Search across business data",
    },
    {
      name: "Workflow Automation Systems",
      icon: SiZapier,
      status: "Automation Pro",
      description: "AI-driven business workflows",
    },
  ];

  const aiTechStack = [
    { name: "OpenAI", icon: SiOpenai, color: "#00A67E" },
    { name: "Claude", icon: SiAnthropic, color: "#FF6B35" },
    {
      name: "Hugging Face Transformers",
      icon: SiHuggingface,
      color: "#FFD21E",
    },
    { name: "LangChain", icon: SiLangchain, color: "#339933" },
    { name: "AWS Bedrock", icon: SiAmazon, color: "#FF9900" },
    { name: "Google Vertex AI", icon: SiGoogle, color: "#4285F4" },
    { name: "LangGraph", icon: SiLangchain, color: "#32CD32" },
    { name: "Streamlit", icon: SiStreamlit, color: "#FF4B4B" },
    { name: "FastAPI", icon: SiFastapi, color: "#009688" },
    { name: "n8n", icon: SiN8N, color: "#EA4B71" },
    { name: "Zapier", icon: SiZapier, color: "#FF4A00" },
  ];

  return (
    <section
      id="ai-services"
      className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <SectionHeader
          title="AI Software Development for Practical Business Use Cases"
          description="We develop custom AI systems that help businesses automate repetitive tasks, improve customer experiences, organize internal knowledge, and build intelligent workflows. Our AI solutions are designed for practical business outcomes, not experimental demos."
          className="animate-fade-in"
          imageSrc="/undraw_ai-agent_pdkp.svg"
          imageAlt="AI software development illustration"
        />

        {/* AI Tech Stack - Auto Scrolling */}
        <TechStackCarousel
          technologies={aiTechStack}
        />

        {/* AI Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {aiServices.map((service, index) => (
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
          <CTAButton variant="secondary" href="/ai-development-company-in-nepal" icon={ArrowRight}>
            Explore AI Development Services
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
