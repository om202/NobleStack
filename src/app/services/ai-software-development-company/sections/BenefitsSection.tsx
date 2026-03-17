import { Zap, BarChart3, Users, Lightbulb, TrendingUp } from "lucide-react";
import SectionHeader from "../../../../components/SectionHeader";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Zap,
      title: "Operational Efficiency",
      description:
        "AI systems automate complex processes and reduce human errors, improving productivity across teams.",
    },
    {
      icon: BarChart3,
      title: "Data-Driven Decision Making",
      description:
        "Machine learning models analyze massive datasets to deliver actionable insights in real time.",
    },
    {
      icon: Users,
      title: "Enhanced Customer Experiences",
      description:
        "AI-powered recommendation systems and chatbots personalize customer interactions at scale.",
    },
    {
      icon: Lightbulb,
      title: "Faster Innovation",
      description:
        "AI enables businesses to create new digital products and services faster than traditional development.",
    },
    {
      icon: TrendingUp,
      title: "Scalable Automation",
      description:
        "AI systems grow alongside business demand without requiring large increases in staff or resources.",
    },
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Benefits of AI Software Development"
          description="Organizations adopting AI software gain significant strategic advantages across operations, customer experience, and growth."
          imageSrc="/undraw_team-spirit_18vw.svg"
          imageAlt="AI benefits illustration"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-subtle-theme rounded-2xl p-6 md:p-7 border border-theme"
              >
                <Icon className="w-7 h-7 text-blue-500 mb-4" />
                <h3 className="text-lg font-semibold text-main-theme mb-3">
                  {benefit.title}
                </h3>
                <p className="text-base text-subtitle-theme leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Comparison note */}
        <div className="mt-8 bg-subtle-theme rounded-2xl p-6 md:p-8 border border-theme text-center">
          <p className="text-base text-subtitle-theme">
            <span className="font-semibold text-main-theme">Traditional Software vs AI Software:</span>{" "}
            AI software enables organizations to operate with greater intelligence and efficiency—learning from data, adapting to change, and automating decisions that traditional software cannot.
          </p>
        </div>
      </div>
    </section>
  );
}
