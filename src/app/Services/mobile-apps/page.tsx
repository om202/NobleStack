import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Smartphone, Zap, Bell, Wifi } from 'lucide-react';

export const metadata: Metadata = {
    title: "iOS & Android Apps - Noble Stack",
    description: "We build native and cross-platform mobile applications that deliver seamless experiences on iOS and Android — from concept to App Store deployment.",
};

export const dynamic = 'force-static';

export default function MobileApps() {
    return (
        <main className="min-h-screen bg-page-theme transition-colors duration-300">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20 sm:pt-28">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-teal-50 to-sky-50 dark:from-cyan-950/30 dark:via-teal-950/20 dark:to-sky-950/30" />

                {/* Icon with Gradient */}
                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10">
                    <div className="w-96 h-96 bg-gradient-to-br from-cyan-400 to-teal-600 rounded-full blur-3xl" />
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center">
                    {/* Icon */}
                    <div className="mb-8 flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-teal-600 rounded-3xl blur-xl opacity-50" />
                            <div className="relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-3xl flex items-center justify-center shadow-2xl">
                                <Smartphone className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={1.5} />
                            </div>
                        </div>
                    </div>

                    {/* Title */}
                    <h1 className="text-[32px] md:text-[45px] font-bold mb-4 text-main-theme bg-gradient-to-br from-cyan-600 to-teal-600 bg-clip-text text-transparent">
                        iOS & Android Apps
                    </h1>

                    {/* Subtitle */}
                    <p className="text-base text-muted-theme mb-6 max-w-3xl mx-auto">
                        Native & Cross-Platform Mobile Experiences
                    </p>

                    {/* Description */}
                    <p className="text-base text-muted-theme max-w-2xl mx-auto leading-relaxed">
                        We build native and cross-platform mobile applications that deliver seamless experiences on iOS and Android — from concept to App Store deployment.
                    </p>

                    {/* Back Link */}
                    <Link
                        href="/Services"
                        className="inline-flex items-center gap-2 mt-12 px-6 py-3 bg-card-theme border border-theme rounded-xl hover:bg-subtle-theme transition-colors duration-200"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to Services</span>
                    </Link>
                </div>
            </section>

            {/* Capabilities Section */}
            <section className="max-w-6xl mx-auto px-4 py-20">
                <h2 className="text-xl md:text-2xl font-bold text-main-theme text-center mb-16">
                    Mobile Development Services
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Cross-Platform Development */}
                    <div className="bg-card-theme rounded-2xl p-8 border border-theme hover:shadow-lg transition-shadow duration-300">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                            <Smartphone className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-main-theme mb-4">Cross-Platform Development</h3>
                        <ul className="space-y-3 text-muted-theme">
                            <li className="flex items-start">
                                <span className="text-cyan-500 mr-2">•</span>
                                <span>React Native for unified iOS & Android codebases</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-500 mr-2">•</span>
                                <span>Flutter for high-performance, beautiful UIs</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-500 mr-2">•</span>
                                <span>Expo for rapid prototyping and deployment</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-500 mr-2">•</span>
                                <span>Shared business logic across platforms</span>
                            </li>
                        </ul>
                    </div>

                    {/* Native Development */}
                    <div className="bg-card-theme rounded-2xl p-8 border border-theme hover:shadow-lg transition-shadow duration-300">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                            <Zap className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-main-theme mb-4">Native App Development</h3>
                        <ul className="space-y-3 text-muted-theme">
                            <li className="flex items-start">
                                <span className="text-cyan-500 mr-2">•</span>
                                <span>Swift & SwiftUI for modern iOS apps</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-500 mr-2">•</span>
                                <span>Kotlin & Jetpack Compose for Android</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-500 mr-2">•</span>
                                <span>Platform-specific features and optimizations</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-500 mr-2">•</span>
                                <span>Maximum performance for demanding apps</span>
                            </li>
                        </ul>
                    </div>

                    {/* Mobile Features */}
                    <div className="bg-card-theme rounded-2xl p-8 border border-theme hover:shadow-lg transition-shadow duration-300">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                            <Bell className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-main-theme mb-4">Mobile-First Features</h3>
                        <ul className="space-y-3 text-muted-theme">
                            <li className="flex items-start">
                                <span className="text-cyan-500 mr-2">•</span>
                                <span>Push notifications (FCM, APNs) for engagement</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-500 mr-2">•</span>
                                <span>In-app purchases & subscription management</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-500 mr-2">•</span>
                                <span>Camera, GPS, biometric authentication</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-500 mr-2">•</span>
                                <span>Deep linking and universal links</span>
                            </li>
                        </ul>
                    </div>

                    {/* Offline & Performance */}
                    <div className="bg-card-theme rounded-2xl p-8 border border-theme hover:shadow-lg transition-shadow duration-300">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                            <Wifi className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-main-theme mb-4">Offline & Performance</h3>
                        <ul className="space-y-3 text-muted-theme">
                            <li className="flex items-start">
                                <span className="text-cyan-500 mr-2">•</span>
                                <span>Offline-first architecture with local storage</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-500 mr-2">•</span>
                                <span>Background sync and conflict resolution</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-500 mr-2">•</span>
                                <span>Performance optimization for smooth 60fps</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-500 mr-2">•</span>
                                <span>App size optimization and lazy loading</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* App Store Deployment */}
            <section className="max-w-6xl mx-auto px-4 py-20">
                <h2 className="text-xl md:text-2xl font-bold text-main-theme text-center mb-12">
                    End-to-End App Lifecycle
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-card-theme rounded-xl p-6 border border-theme">
                        <h3 className="font-bold text-main-theme mb-2">App Store Deployment</h3>
                        <p className="text-muted-theme">Full submission process for Apple App Store and Google Play Store</p>
                    </div>
                    <div className="bg-card-theme rounded-xl p-6 border border-theme">
                        <h3 className="font-bold text-main-theme mb-2">Beta Testing</h3>
                        <p className="text-muted-theme">TestFlight and Play Console beta distribution for early feedback</p>
                    </div>
                    <div className="bg-card-theme rounded-xl p-6 border border-theme">
                        <h3 className="font-bold text-main-theme mb-2">OTA Updates</h3>
                        <p className="text-muted-theme">Over-the-air updates with CodePush for instant bug fixes</p>
                    </div>
                    <div className="bg-card-theme rounded-xl p-6 border border-theme">
                        <h3 className="font-bold text-main-theme mb-2">Analytics & Monitoring</h3>
                        <p className="text-muted-theme">Firebase Analytics, Crashlytics for performance tracking</p>
                    </div>
                    <div className="bg-card-theme rounded-xl p-6 border border-theme">
                        <h3 className="font-bold text-main-theme mb-2">App Store Optimization</h3>
                        <p className="text-muted-theme">Screenshots, descriptions, and keywords for better discovery</p>
                    </div>
                    <div className="bg-card-theme rounded-xl p-6 border border-theme">
                        <h3 className="font-bold text-main-theme mb-2">CI/CD Pipelines</h3>
                        <p className="text-muted-theme">Automated builds and deployments with Fastlane and App Center</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-4xl mx-auto px-4 py-20 text-center">
                <div className="bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-950/20 dark:to-teal-950/20 rounded-3xl p-12 border border-theme">
                    <h2 className="text-2xl md:text-3xl font-bold text-main-theme mb-6">
                        Ready to Build Your Mobile App?
                    </h2>
                    <p className="text-lg text-muted-theme mb-8 max-w-2xl mx-auto">
                        Let's create a mobile experience that delights your users on iOS and Android.
                    </p>
                    <Link
                        href="/Contact"
                        className="inline-block px-8 py-4 bg-gradient-to-br from-cyan-500 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                        Start Your App
                    </Link>
                </div>
            </section>
        </main>
    );
}
