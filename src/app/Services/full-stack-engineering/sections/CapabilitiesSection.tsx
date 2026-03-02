import { Smartphone, Apple } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import ServiceCard from '../../../../components/ServiceCard';
import SectionHeader from '../../../../components/SectionHeader';
import CTAButton from '../../../../components/CTAButton';

export default function CapabilitiesSection() {
    const capabilities = [
        {
            icon: Apple,
            name: "Custom iOS App Development",
            description:
                "High-performance native iOS applications built with Swift, SwiftUI, UIKit, and Apple SDKs. We integrate APNs for push notifications, Apple In-App Purchases for subscriptions and payments, and deliver apps that feel at home in the Apple ecosystem—optimized for security, performance, and App Store compliance.",
        },
        {
            icon: Smartphone,
            name: "Custom Android App Development",
            description:
                "Robust Android applications using Kotlin, Jetpack Compose, and the Android SDK. We design for device compatibility, performance efficiency, and long-term maintainability, with integrations such as Google Play Billing, FCM (Firebase Cloud Messaging), and modern Android libraries.",
        },
        {
            icon: Smartphone,
            name: "Cross-Platform Apps (React Native & Flutter)",
            description:
                "Faster time to market with a single codebase for iOS and Android. We build cross-platform apps using React Native, Flutter, Expo, and shared TypeScript codebases—balancing performance, native feel, and cost efficiency. Ideal for startups and SaaS companies launching MVPs or iterating quickly.",
        },
        {
            icon: Smartphone,
            name: "Backend, APIs & Integrations",
            description:
                "Mobile apps that are powered by robust backends and APIs. We design and integrate REST and GraphQL APIs, real-time features, authentication, and payment gateways—plus cloud services on AWS, GCP, and Firebase—to ensure your mobile app is secure, reliable, and ready to scale.",
        },
    ];

    return (
        <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <SectionHeader
                    title="Our Mobile App Development Services"
                    description="We design and build mobile applications that are fast, secure, and ready to scale across iOS and Android—whether you are shipping an MVP or a production-grade platform."
                    imageSrc="/undraw_server-cluster_7ugi.svg"
                    imageAlt="Mobile App Development Services Illustration"
                />

                {/* Capabilities Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                    {capabilities.map((capability, index) => (
                        <ServiceCard
                            key={index}
                            name={capability.name}
                            description={capability.description}
                            icon={capability.icon}
                        />
                    ))}
                </div>

                {/* CTA Button */}
                <div className="mt-12 text-center">
                    <CTAButton variant="secondary" href="https://calendar.app.google/mWmd6v421Pk66LQ26" icon={ArrowRight}>
                        Schedule a Free Consultation
                    </CTAButton>
                </div>
            </div>
        </section>
    );
}
