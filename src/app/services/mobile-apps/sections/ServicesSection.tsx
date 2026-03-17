import { Smartphone, Zap, Bell, Wifi } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import ServiceCard from '../../../../components/ServiceCard';
import SectionHeader from '../../../../components/SectionHeader';
import CTAButton from '../../../../components/CTAButton';

export default function ServicesSection() {
    const services = [
        {
            icon: Smartphone,
            name: "Custom iOS App Development",
            description: "We build high-performance native iOS applications using Swift, SwiftUI, UIKit, Apple SDKs, APNs (push notifications), and Apple In-App Purchases. Our iOS apps are optimized for performance, security, and seamless integration with the Apple ecosystem—ideal for consumer apps, subscription platforms, FinTech solutions, and enterprise mobility.",
        },
        {
            icon: Zap,
            name: "Custom Android App Development",
            description: "We develop powerful Android applications using Kotlin, Jetpack Compose, and the Android SDK. Our Android apps are engineered for device compatibility, performance efficiency, and long-term maintainability, with support for Google Play Billing, FCM, and the broader Google ecosystem.",
        },
        {
            icon: Bell,
            name: "Cross-Platform App Development (React Native & Flutter)",
            description: "We reduce development time and cost by building high-quality cross-platform apps using React Native, Flutter, and Expo. A single shared TypeScript codebase powers both iOS and Android, enabling faster time to market, reduced maintenance overhead, and a consistent user experience—perfect for startups and SaaS products.",
        },
        {
            icon: Wifi,
            name: "Backend, API & Advanced Mobile Integrations",
            description: "We design and integrate robust backends and advanced mobile features: REST and GraphQL APIs, cloud integration (AWS, GCP, Firebase), real-time features, authentication systems, and payment gateways. We also implement push notifications (FCM & APNs), in-app purchases, biometrics, GPS and location services, deep linking, offline-first architecture, and background synchronization.",
        },
    ];

    return (
        <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <SectionHeader
                    title="Our Mobile App Development Services"
                    description="From native iOS and Android apps to cross-platform development, UI/UX design, and backend integration, we help you design, build, launch, and scale production-ready mobile applications."
                    imageSrc="/undraw_mobile-site_qjby.svg"
                    imageAlt="Mobile App Development Services Illustration"
                />

                {/* Services Grid */}
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
