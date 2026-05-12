import { DollarSign, GraduationCap, TrendingUp, Clock } from "lucide-react";
import ServiceCard from "../../../components/ServiceCard";
import SectionHeader from "../../../components/SectionHeader";

export default function WhyNepalSection() {
  const points = [
    {
      icon: DollarSign,
      name: "Cost Advantage — Real Numbers",
      description:
        "Mobile developer rates in Nepal: $25–$80/hr vs. $100–$200 in the US and $80–$180 in the UK. Save $30k–$80k on a 4-month build with matching quality.",
    },
    {
      icon: GraduationCap,
      name: "Skilled Talent Pool",
      description:
        "Thousands of engineering graduates annually. Developers fluent in English, modern mobile frameworks, and experienced with international project delivery standards.",
    },
    {
      icon: TrendingUp,
      name: "Proven Track Record",
      description:
        "Nepal's software and BPO exports crossed NPR 12 billion in early FY 2024–25—over 20% YoY growth driven by real demand from global businesses returning for quality.",
    },
    {
      icon: Clock,
      name: "Timezone Compatibility",
      description:
        "Working from UTC+5:45—excellent alignment for Singapore, the UAE, the UK, and Australia, with workable async windows for US clients.",
    },
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Why Hire a Mobile App Company in Nepal?"
          description="Businesses from Singapore, the United States, Australia, and the UK increasingly choose Nepal-based teams for mobile app development—for engineering quality that competes with Western firms at dramatically lower cost."
          imageSrc="/Flag_of_Nepal.svg"
          imageAlt="Nepal flag"
          imageSize="small"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {points.map((point, index) => (
            <ServiceCard
              key={index}
              name={point.name}
              description={point.description}
              icon={point.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
