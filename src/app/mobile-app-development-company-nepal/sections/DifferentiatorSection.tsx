import { Cpu, Rocket, Code2, LineChart } from "lucide-react";
import ServiceCard from "../../../components/ServiceCard";
import SectionHeader from "../../../components/SectionHeader";

export default function DifferentiatorSection() {
  const cards = [
    {
      icon: Rocket,
      name: "Real Products. Not Just Client Projects.",
      description:
        "Vibe AI Photo Editor is live on the US, Singapore, Australia, and Nepal Apple App Stores right now—verifiable proof of production mobile engineering you can download yourself.",
    },
    {
      icon: Cpu,
      name: "AI Is the Foundation, Not a Feature",
      description:
        "We are Nepal's AI-first mobile development company. AI capabilities are designed into every app at the architecture level from the first planning session—no costly rebuild later.",
    },
    {
      icon: Code2,
      name: "Modern Stack. Zero Legacy Code.",
      description:
        "Swift and SwiftUI for iOS. Kotlin and Jetpack Compose for Android. React Native and Flutter for cross-platform. No outdated hybrid wrappers. No technical debt you inherit.",
    },
    {
      icon: LineChart,
      name: "International Quality at Nepal Pricing",
      description:
        "Our engineers deliver output equivalent to US and European teams at 60–80% lower cost. Quality that matches Western agencies at a fraction of the price.",
    },
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Why Noble Stack Is Different"
          description="Most mobile development agencies in Nepal only do client work. Noble Stack builds and ships its own products—starting with Vibe AI Photo Editor, live on the App Store under real-world load."
          imageSrc="/undraw_team-spirit_18vw.svg"
          imageAlt="Differentiator illustration"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <ServiceCard
              key={index}
              name={card.name}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
