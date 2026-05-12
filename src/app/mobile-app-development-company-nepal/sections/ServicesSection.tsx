import { Apple, Smartphone, LayoutGrid, BrainCircuit, Server, Settings, ArrowRight } from "lucide-react";
import ServiceCard from "../../../components/ServiceCard";
import SectionHeader from "../../../components/SectionHeader";
import CTAButton from "../../../components/CTAButton";

export default function ServicesSection() {
  const services = [
    {
      icon: Apple,
      name: "iOS App Development in Nepal",
      description:
        "Native iOS applications built with Swift, SwiftUI, UIKit, and the full Apple SDK. Optimized for iPhone and iPad, App Store compliant, with iCloud, Apple Pay, Face ID, and push notification support.",
    },
    {
      icon: Smartphone,
      name: "Android App Development in Nepal",
      description:
        "Android applications using Kotlin and Jetpack Compose. Fast, responsive UIs with Google Sign-In, biometric auth, FCM push, Google Pay, and offline-first architecture.",
    },
    {
      icon: LayoutGrid,
      name: "Cross-Platform App Development",
      description:
        "React Native and Flutter for both iOS and Android from a single codebase. Reduces cost by up to 40% with native-like performance—the right starting point for most products.",
    },
    {
      icon: BrainCircuit,
      name: "AI-Powered Mobile Apps",
      description:
        "Integrate LLMs, computer vision, recommendation engines, and voice interfaces directly into mobile apps—proven through our own AI products like Vibe AI Photo Editor.",
    },
    {
      icon: Server,
      name: "Mobile Backend & API Development",
      description:
        "Node.js, NestJS, GraphQL, and PostgreSQL backends deployed on AWS. Real-time sync, auth flows, push delivery, and payment integrations to power your mobile frontends.",
    },
    {
      icon: Settings,
      name: "App Store Optimization & Maintenance",
      description:
        "Full launch management for App Store Connect and Google Play Console. Post-launch support, crash tracking, OS compatibility updates, and ongoing security patching.",
    },
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Our Mobile App Development Services"
          description="Complete mobile engineering—from initial product discovery to App Store launch and long-term support."
          imageSrc="/undraw_mobile-site_qjby.svg"
          imageAlt="Mobile services illustration"
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
          <CTAButton variant="secondary" href="/contact" icon={ArrowRight}>
            Discuss Your Mobile Project
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
