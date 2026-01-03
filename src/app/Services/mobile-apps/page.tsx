import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Smartphone, Zap, Bell, Wifi } from 'lucide-react';
import { SiReact, SiFlutter, SiSwift, SiKotlin, SiAndroid, SiApple, SiFirebase, SiExpo, SiTypescript, SiJavascript } from 'react-icons/si';
import ServiceCard from '../../../components/ServiceCard';
import CTAButton from '../../../components/CTAButton';

export const metadata: Metadata = {
    title: "iOS & Android Apps - Noble Stack",
    description: "We build native and cross-platform mobile applications that deliver seamless experiences on iOS and Android — from concept to App Store deployment.",
};

export const dynamic = 'force-static';

export default function MobileApps() {
    const capabilities = [
        {
            icon: Smartphone,
            name: "Cross-Platform Development",
            description: "React Native for unified iOS & Android codebases. Flutter for high-performance, beautiful UIs. Expo for rapid prototyping and deployment. Shared business logic across platforms.",
        },
        {
            icon: Zap,
            name: "Native App Development",
            description: "Swift & SwiftUI for modern iOS apps. Kotlin & Jetpack Compose for Android. Platform-specific features and optimizations. Maximum performance for demanding apps.",
        },
        {
            icon: Bell,
            name: "Mobile-First Features",
            description: "Push notifications (FCM, APNs) for engagement. In-app purchases & subscription management. Camera, GPS, biometric authentication. Deep linking and universal links.",
        },
        {
            icon: Wifi,
            name: "Offline & Performance",
            description: "Offline-first architecture with local storage. Background sync and conflict resolution. Performance optimization for smooth 60fps. App size optimization and lazy loading.",
        },
    ];

    const lifecycle = [
        { name: "App Store Deployment", description: "Full submission process for Apple App Store and Google Play Store" },
        { name: "Beta Testing", description: "TestFlight and Play Console beta distribution for early feedback" },
        { name: "OTA Updates", description: "Over-the-air updates with CodePush for instant bug fixes" },
        { name: "Analytics & Monitoring", description: "Firebase Analytics, Crashlytics for performance tracking" },
        { name: "App Store Optimization", description: "Screenshots, descriptions, and keywords for better discovery" },
        { name: "CI/CD Pipelines", description: "Automated builds and deployments with Fastlane and App Center" },
    ];

    return (
        <main className="min-h-screen bg-page-theme transition-colors duration-300">
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20 sm:pt-28">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-teal-50 to-sky-50 dark:from-cyan-950/30 dark:via-teal-950/20 dark:to-sky-950/30" />
                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10">
                    <div className="w-96 h-96 bg-gradient-to-br from-cyan-400 to-teal-600 rounded-full blur-3xl" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 text-center">
                    <div className="mb-8 flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-teal-600 rounded-3xl blur-xl opacity-50" />
                            <div className="relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-3xl flex items-center justify-center shadow-2xl">
                                <Smartphone className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={1.5} />
                            </div>
                        </div>
                    </div>

                    <h1 className="text-[32px] md:text-[45px] font-bold mb-4 text-main-theme bg-gradient-to-br from-cyan-600 to-teal-600 bg-clip-text text-transparent">
                        iOS & Android Apps
                    </h1>

                    <p className="text-base text-muted-theme mb-6 max-w-3xl mx-auto">
                        Native & Cross-Platform Mobile Experiences
                    </p>

                    <p className="text-base text-muted-theme max-w-2xl mx-auto leading-relaxed">
                        We build native and cross-platform mobile applications that deliver seamless experiences on iOS and Android — from concept to App Store deployment.
                    </p>

                    <Link href="/Services" className="inline-flex items-center gap-2 mt-12 px-6 py-3 bg-card-theme border border-theme rounded-xl hover:bg-subtle-theme transition-colors duration-200">
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to Services</span>
                    </Link>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-xl md:text-2xl font-bold text-main-theme text-center mb-16">
                    Mobile Development Services
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {capabilities.map((capability, index) => (
                        <ServiceCard key={index} name={capability.name} description={capability.description} icon={capability.icon} />
                    ))}
                </div>
            </section>

            {/* Technologies Section */}
            <section className="max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-xl md:text-2xl font-bold text-main-theme text-center mb-16">
                    Technologies We Use
                </h2>

                <div className="bg-card-theme rounded-2xl p-8 border border-theme">
                    <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {[
                            { Icon: SiReact, name: "React Native" },
                            { Icon: SiFlutter, name: "Flutter" },
                            { Icon: SiSwift, name: "Swift" },
                            { Icon: SiKotlin, name: "Kotlin" },
                            { Icon: SiExpo, name: "Expo" },
                            { Icon: SiTypescript, name: "TypeScript" },
                            { Icon: SiJavascript, name: "JavaScript" },
                            { Icon: SiAndroid, name: "Android" },
                            { Icon: SiApple, name: "iOS" },
                            { Icon: SiFirebase, name: "Firebase" },
                        ].map((tech, index) => (
                            <div key={index} className="flex flex-col items-center justify-center p-4 rounded-xl bg-subtle-theme hover:bg-subtle-hover transition-colors duration-200">
                                <tech.Icon className="w-8 h-8 mb-2 text-cyan-500 dark:text-cyan-400" />
                                <span className="text-sm text-muted-theme text-center">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-xl md:text-2xl font-bold text-main-theme text-center mb-12">
                    End-to-End App Lifecycle
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {lifecycle.map((item, index) => (
                        <div key={index} className="bg-card-theme rounded-xl p-6 border border-theme">
                            <h3 className="font-bold text-main-theme mb-2">{item.name}</h3>
                            <p className="text-muted-theme">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 py-12 text-center">
                <div className="bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-950/20 dark:to-teal-950/20 rounded-3xl p-12 border border-theme">
                    <h2 className="text-2xl md:text-3xl font-bold text-main-theme mb-6">
                        Ready to Build Your Mobile App?
                    </h2>
                    <p className="text-lg text-muted-theme mb-8 max-w-2xl mx-auto">
                        Let's create a mobile experience that delights your users on iOS and Android.
                    </p>
                    <CTAButton variant="primary" href="https://calendar.app.google/mWmd6v421Pk66LQ26">
                        Schedule Free Consultation
                    </CTAButton>
                </div>
            </section>
        </main>
    );
}
