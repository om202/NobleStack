import { Apple, Smartphone, LayoutGrid, BrainCircuit, Server, Settings } from "lucide-react";
import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      icon: <Apple className="w-8 h-8 text-slate-800 dark:text-slate-200" />,
      title: "iOS App Development in Nepal",
      description: "We build native iOS applications using Swift, SwiftUI, UIKit, and the full Apple SDK suite. Optimized for iPhone and iPad, App Store compliant, with iCloud, Apple Pay, Face ID and Push Notifications.",
      link: "/services/mobile-apps"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-green-500" />,
      title: "Android App Development in Nepal",
      description: "Android applications using Kotlin and Jetpack Compose. Fast, responsive UIs with Google Sign-In, biometric auth, FCM push processing, Google Pay, and offline-first architecture."
    },
    {
      icon: <LayoutGrid className="w-8 h-8 text-blue-400" />,
      title: "Cross-Platform App Development",
      description: "React Native (TypeScript) and Flutter (Dart). Reach both iOS and Android users without building two codebases. Reduces cost by up to 40% with native-like performance."
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-purple-500" />,
      title: "AI-Powered Mobile App Development",
      description: "Integrate LLMs, computer vision, recommendation engines, and voice interfaces directly into mobile apps. Proven experience shipping AI systems like Vibe AI Photo Editor."
    },
    {
      icon: <Server className="w-8 h-8 text-indigo-500" />,
      title: "Mobile App Backend and API Development",
      description: "Node.js, NestJS, GraphQL, and PostgreSQL architectures deployed on AWS. Real-time sync, auth flows, and payment integrations to power your mobile frontends."
    },
    {
      icon: <Settings className="w-8 h-8 text-orange-500" />,
      title: "App Store Optimization and Maintenance",
      description: "Full launch management for App Store Connect & Google Play Console. Post-launch support, crash tracking, OS compatibility updates, and security patching."
    }
  ];

  return (
    <section className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-main-theme mb-6">
          Our Mobile App Development Services in Nepal
        </h2>
        <p className="text-lg text-muted-theme">
          Noble Stack delivers complete mobile engineering — from initial product discovery to App Store launch and long-term support.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="bg-card-theme border border-theme rounded-2xl p-8 hover:border-blue-500/50 transition-colors group">
            <div className="mb-6">{service.icon}</div>
            <h3 className="text-xl font-bold text-main-theme mb-3">{service.title}</h3>
            <p className="text-muted-theme mb-6 leading-relaxed text-sm">
              {service.description}
            </p>
            {service.link && (
               <Link href={service.link} className="text-blue-500 font-medium text-sm inline-flex items-center group-hover:underline">
                 See our full iOS technical capabilities →
               </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
