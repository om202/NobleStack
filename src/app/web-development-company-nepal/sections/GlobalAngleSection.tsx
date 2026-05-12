import { TrendingUp, Code2, Clock } from "lucide-react";
import ServiceCard from "../../../components/ServiceCard";
import SectionHeader from "../../../components/SectionHeader";

export default function GlobalAngleSection() {
  const points = [
    {
      icon: TrendingUp,
      name: "Cost Advantage",
      description:
        "Web development rates in Nepal range from $25–$99/hr. Equivalent talent in the US or UK costs $100–$250/hr. Over a 3-month project, that adds up to $20,000–$60,000 in savings—without compromising quality.",
    },
    {
      icon: Code2,
      name: "Talent Quality",
      description:
        "Nepal produces thousands of engineering graduates annually. Noble Stack recruits from the top tier—developers fluent in modern frameworks and experienced with international clients.",
    },
    {
      icon: Clock,
      name: "Communication & Timezone",
      description:
        "Noble Stack operates from UTC+5:45 (Kathmandu)—a strong overlap with Singapore, the UAE, Europe, and Australia. All client communication happens in English.",
    },
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Why Build With a Web Company in Nepal?"
          description="Businesses in Singapore, the United States, Australia, and the UK increasingly partner with Nepal-based teams for a simple reason: the engineering quality is high and the cost is a fraction of Western rates."
          imageSrc="/Flag_of_Nepal.svg"
          imageAlt="Nepal flag"
          imageSize="small"
        />

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {points.map((point, idx) => (
            <ServiceCard
              key={idx}
              name={point.name}
              description={point.description}
              icon={point.icon}
            />
          ))}
        </div>

        <div className="bg-subtle-theme rounded-2xl p-6 md:p-8 border border-theme">
          <div className="text-2xl md:text-3xl font-bold text-main-theme mb-2">
            NPR 12 Billion+
          </div>
          <div className="text-sm font-medium text-blue-500 mb-3">
            IT Exports (FY 2024–25)
          </div>
          <p className="text-base text-subtitle-theme leading-relaxed">
            Nepal&apos;s software and BPO exports crossed NPR 12 billion in the
            first seven months of fiscal year 2024–25—a growth of over 20%
            year-on-year, reflecting rising global trust in Nepali technology
            companies.
            <span className="block mt-3 text-sm text-muted-theme">
              Source:{" "}
              <a
                href="https://nrb.org.np"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 underline"
              >
                Nepal Rastra Bank
              </a>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
