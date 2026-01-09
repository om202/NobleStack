import SectionHeader from '../../../../components/SectionHeader';

export default function LifecycleSection() {
    const lifecycle = [
        {
            title: "App Store Deployment",
            description: "Complete submission and release process for Apple App Store and Google Play Store.",
        },
        {
            title: "Beta Testing",
            description: "TestFlight and Google Play Console beta distribution for early feedback and validation.",
        },
        {
            title: "OTA Updates",
            description: "Over-the-air updates using CodePush for rapid bug fixes and improvements.",
        },
        {
            title: "Analytics and Monitoring",
            description: "Firebase Analytics and Crashlytics for performance tracking and stability monitoring.",
        },
        {
            title: "App Store Optimization (ASO)",
            description: "Optimized screenshots, descriptions, and keywords for better visibility and downloads.",
        },
        {
            title: "CI/CD Pipelines",
            description: "Automated builds and deployments using Fastlane and App Center.",
        },
    ];

    return (
        <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
            <div className="max-w-6xl mx-auto">
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
