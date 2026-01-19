import { Smartphone, Zap, Bell, Wifi } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import ServiceCard from '../../../../components/ServiceCard';
import SectionHeader from '../../../../components/SectionHeader';
import CTAButton from '../../../../components/CTAButton';

export default function ServicesSection() {
    const services = [
        {
            icon: Smartphone,
            name: "Cross-Platform App Development",
            description: "We build cross-platform applications that deliver consistent experiences across iOS and Android while reducing development time and cost. React Native for shared iOS and Android codebases. Flutter for high-performance, visually rich interfaces. Expo for rapid prototyping and faster iteration. Shared business logic across platforms.",
        },
        {
            icon: Zap,
            name: "Native App Development",
            description: "For performance-critical or platform-specific applications, we build fully native mobile apps. Swift and SwiftUI for modern iOS applications. Kotlin and Jetpack Compose for Android development. Deep platform integrations and custom animations. Hardware-level optimizations for performance.",
        },
        {
            icon: Bell,
            name: "Mobile-First Features",
            description: "We integrate advanced mobile features that enhance usability and engagement. Push notifications using FCM and APNs. In-app purchases and subscription management. Camera, GPS, and location-based services. Biometric authentication (Face ID, Touch ID). Deep linking and universal links.",
        },
        {
            icon: Wifi,
            name: "Offline Support and Performance Optimization",
            description: "We design mobile apps to perform reliably in real-world conditions. Offline-first architecture with local storage. Background synchronization and conflict resolution. Smooth animations and 60fps performance. App size optimization and lazy loading.",
        },
    ];

    return (
        <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <SectionHeader
                    title="Mobile Development Services"
                    description="Mobile app development is more than writing code. It is about creating reliable, engaging experiences that users trust and return to."
                    imageSrc="/undraw_mobile-site_qjby.svg"
                    imageAlt="Mobile Development Services Illustration"
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
