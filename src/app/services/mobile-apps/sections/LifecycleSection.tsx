import SectionHeader from '../../../../components/SectionHeader';

export default function LifecycleSection() {
    const lifecycle = [
        {
            title: "App Store & Play Store Deployment",
            description: "End-to-end submission and release management for the Apple App Store and Google Play Store, including compliance and review support.",
        },
        {
            title: "Beta Testing",
            description: "Beta distribution via TestFlight and Google Play Console to collect real-world feedback before full launch.",
        },
        {
            title: "OTA Updates",
            description: "Over-the-air (OTA) updates using CodePush and modern delivery pipelines for rapid bug fixes and feature rollouts.",
        },
        {
            title: "Analytics Integration",
            description: "Product and behavioral analytics integrations to understand user journeys, engagement, and retention across platforms.",
        },
        {
            title: "Crash Tracking & Performance Monitoring",
            description: "Crash tracking with tools like Firebase Crashlytics and performance monitoring to keep your app stable and fast.",
        },
        {
            title: "App Store Optimization (ASO)",
            description: "Optimized metadata, keywords, and creative assets to improve discoverability and conversion in app stores.",
        },
    ];

    return (
        <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="End-to-End App Lifecycle Management"
                    description="We support your mobile app throughout its entire lifecycle."
                    imageSrc="/undraw_dev-environment_n5by.svg"
                    imageAlt="App Lifecycle Management Illustration"
                />

                <div className="grid md:grid-cols-3 gap-6">
                    {lifecycle.map((item, index) => (
                        <div key={index} className="bg-subtle-theme rounded-2xl p-8 border border-theme">
                            <h3 className="text-xl font-bold text-main-theme mb-3">{item.title}</h3>
                            <p className="text-lg text-main-theme/80 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
