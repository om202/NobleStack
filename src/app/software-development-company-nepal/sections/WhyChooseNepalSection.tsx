import { DollarSign, Code, Clock, TrendingUp, MessageSquare } from "lucide-react";
import ServiceCard from "../../../components/ServiceCard";
import SectionHeader from "../../../components/SectionHeader";

export default function WhyChooseNepalSection() {
  const advantages = [
    {
      icon: DollarSign,
      name: "Cost-Effective Development",
      description:
        "Save 40–70% on development costs compared to US and European rates, without compromising on engineering quality or delivery standards.",
    },
    {
      icon: Code,
      name: "Highly Skilled Developers",
      description:
        "Access a deep pool of engineers with expertise in modern, scalable technologies and proven experience shipping production-grade software.",
    },
    {
      icon: Clock,
      name: "Time Zone Compatibility",
      description:
        "Comfortable overlap with Asia, Europe, and the Middle East ensures smooth daily syncs, predictable communication, and agile delivery cycles.",
    },
    {
      icon: TrendingUp,
      name: "Growing Tech Ecosystem",
      description:
        "Nepal's IT exports crossed NPR 12 billion in FY 2024–25, reflecting a rapidly maturing IT hub with a strong base of reliable engineering partners.",
    },
    {
      icon: MessageSquare,
      name: "Strong English Communication",
      description:
        "Excellent English proficiency across the engineering team ensures seamless collaboration, clear documentation, and accurate project understanding.",
    },
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Why Choose a Software Development Company in Nepal?"
          description="Nepal is now a serious destination for software outsourcing, an ideal choice for startups and enterprises that want high-quality engineering at competitive cost."
          imageSrc="/Flag_of_Nepal.svg"
          imageAlt="Nepal flag"
          imageSize="small"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {advantages.map((adv, idx) => (
            <ServiceCard
              key={idx}
              name={adv.name}
              description={adv.description}
              icon={adv.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
