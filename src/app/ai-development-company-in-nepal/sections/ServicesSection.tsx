import { Brain, LineChart, MessageCircle, ScanEye, Compass } from "lucide-react";
import { ArrowRight } from "lucide-react";
import ServiceCard from "../../../components/ServiceCard";
import SectionHeader from "../../../components/SectionHeader";
import CTAButton from "../../../components/CTAButton";

export default function ServicesSection() {
  const services = [
    {
      icon: Brain,
      name: "Custom AI Software Development",
      description:
        "We build tailored AI solutions aligned with your specific business objectives, including predictive analytics platforms, intelligent workflow automation systems, AI-powered SaaS applications, decision-support engines, and smart dashboards with real-time insights.",
    },
    {
      icon: LineChart,
      name: "Machine Learning Development",
      description:
        "Our engineers design, train, and deploy machine learning models using your business data for use cases like sales and revenue forecasting, fraud detection, customer behavior prediction, inventory demand planning, and risk analysis models.",
    },
    {
      icon: MessageCircle,
      name: "Natural Language Processing (NLP)",
      description:
        "We create AI systems that understand and process human language: AI chatbots, customer support automation, sentiment analysis, voice assistants, and document classification systems that improve response times and customer satisfaction.",
    },
    {
      icon: ScanEye,
      name: "Computer Vision Solutions",
      description:
        "Using advanced deep learning models, we build intelligent vision systems for quality inspection, facial recognition, object detection, medical image analysis, and security monitoring—with faster, more accurate visual analysis.",
    },
    {
      icon: Compass,
      name: "AI Consulting & Strategy",
      description:
        "Not sure where to start with AI? We help you identify automation opportunities, evaluate data readiness, design an implementation roadmap, estimate ROI, and reduce delivery risk so you can move forward with confidence.",
    },
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="AI Development Services in Nepal"
          description="Artificial intelligence is no longer optional. Businesses that adopt AI move faster, reduce costs, and outperform competitors. We design and ship production-ready AI systems that automate work, improve decisions, and unlock the value of your data."
          imageSrc="/undraw_ai-agent_pdkp.svg"
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
            Book a Free AI Strategy Session
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

