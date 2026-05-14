import { TrendingUp, Code2, Clock } from "lucide-react";
import ServiceCard from "../../../components/ServiceCard";
import SectionHeader from "../../../components/SectionHeader";

export default function GlobalAngleSection() {
  const points = [
    {
      icon: TrendingUp,
      name: "Cost Advantage",
      description:
        "Web development rates in Nepal range from $25–$99/hr. Equivalent talent in the US or UK costs $100–$250/hr. Over a three-month project, that represents $20,000–$60,000 in direct savings, without compromising on code quality, timeline, or communication standards.",
    },
    {
      icon: Code2,
      name: "Engineering Talent",
      description:
        "Nepal produces thousands of software engineering graduates each year from institutions including Tribhuvan University, Kathmandu University, and Pokhara University. Noble Stack recruits from the top tier of this talent pool, developers fluent in modern frameworks with verifiable experience on international projects.",
    },
    {
      icon: Clock,
      name: "Timezone and Communication",
      description:
        "Noble Stack operates from UTC+5:45 (Kathmandu Standard Time). This timezone has meaningful daily overlap with Singapore, the UAE, the United Kingdom, and Australia's eastern cities. All client communication, documentation, and code comments are in English.",
    },
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Why Hire a Web Development Company in Nepal?"
          description="Businesses in Singapore, the United States, Australia, and the UK are increasingly outsourcing web development to Nepal for a simple reason: the engineering quality is high, the cost is a fraction of Western rates, and communication is conducted entirely in English."
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
            first seven months of fiscal year 2024–25, a year-on-year growth of
            over 20%, according to Nepal Rastra Bank data. This reflects rising
            global confidence in Nepali technology teams and their ability to
            deliver production-grade software for international clients.
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
