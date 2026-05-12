import { Rocket, MonitorSmartphone, Building2, Globe2, Store } from "lucide-react";
import ServiceCard from "../../../components/ServiceCard";
import SectionHeader from "../../../components/SectionHeader";

export default function WhoWeServeSection() {
  const segments = [
    {
      icon: Rocket,
      name: "Startups Building Their First App",
      description:
        "You have a product idea and need to validate it with real users. We help you ship a production-quality MVP to the App Store quickly—without building technical debt that will haunt you for years.",
    },
    {
      icon: MonitorSmartphone,
      name: "SaaS Companies Adding Mobile",
      description:
        "Your web platform is live and your users are asking for a mobile app. We build iOS and Android clients that connect cleanly to your existing backend and feel native to your users.",
    },
    {
      icon: Building2,
      name: "Enterprises Building Internal Apps",
      description:
        "Mobile apps that handle complex authentication, integrate with internal systems, meet security compliance, and scale. Role-based access, SSO, audit logging, and offline functionality.",
    },
    {
      icon: Globe2,
      name: "International Clients Outsourcing",
      description:
        "Companies in Singapore, Australia, the US, and the UK hire Noble Stack as their Nepal-based mobile engineering partner—delivering local-agency quality at 60–80% lower cost.",
    },
    {
      icon: Store,
      name: "Nepali Businesses Going Digital",
      description:
        "Local businesses in tourism, retail, healthcare, education, finance, and logistics that need a professional iOS or Android app to compete in Nepal's growing digital market.",
    },
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Who Noble Stack Builds Mobile Apps For"
          description="From startups validating their first MVP to enterprises shipping internal tools—we work across the full spectrum of mobile product needs."
          imageSrc="/undraw_team_85hs.svg"
          imageAlt="Who we serve illustration"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {segments.map((segment, index) => (
            <ServiceCard
              key={index}
              name={segment.name}
              description={segment.description}
              icon={segment.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
