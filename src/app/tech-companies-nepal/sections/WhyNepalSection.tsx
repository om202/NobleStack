import { Globe, Users, TrendingUp, Lightbulb } from "lucide-react";
import ServiceCard from "../../../components/ServiceCard";
import SectionHeader from "../../../components/SectionHeader";

export default function WhyNepalSection() {
  const points = [
    {
      icon: Users,
      name: "Skilled Engineers",
      description:
        "A rapidly growing pool of highly educated, English-speaking developers and AI specialists trained on modern tech stacks.",
    },
    {
      icon: TrendingUp,
      name: "Competitive Pricing",
      description:
        "High-quality engineering at 60–80% lower cost compared to Western markets, without compromising on output quality.",
    },
    {
      icon: Lightbulb,
      name: "AI Talent Pool",
      description:
        "A surging number of engineers specializing in machine learning, automation, and modern frameworks like Next.js.",
    },
    {
      icon: Globe,
      name: "Global Outsourcing Hub",
      description:
        "A strong IT ecosystem trusted by companies worldwide for scalable software, AI, and product engineering.",
    },
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Why Global Companies Choose Nepal"
          description="Nepal has rapidly evolved into a competitive destination for software development, AI solutions, and global outsourcing. Here is what makes it work."
          imageSrc="/Flag_of_Nepal.svg"
          imageAlt="Nepal flag"
          imageSize="small"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {points.map((point, idx) => (
            <ServiceCard
              key={idx}
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
