import SectionHeader from '../../../../components/SectionHeader';

export default function HowWeWorkSection() {
    const steps = [
        {
            number: 1,
            title: "Discovery & Strategy",
            description: "We analyze your business goals, target users, and technical requirements to define a clear mobile roadmap.",
        },
        {
            number: 2,
            title: "Architecture & Planning",
            description: "We design scalable, secure mobile and backend architecture, choosing the right stack (native or cross-platform) for your use case.",
        },
        {
            number: 3,
            title: "Design, Development & QA",
            description: "We create mobile-first UI/UX, build high-quality iOS and Android apps, and run rigorous QA and performance testing.",
        },
        {
            number: 4,
            title: "Launch & Optimization",
            description: "We handle App Store and Play Store deployment, monitor performance, and continuously optimize based on real user data.",
        },
    ];

    return (
        <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="How We Work"
                    description="Our mobile app development process is structured to reduce risk, increase quality, and accelerate time to market."
                    imageSrc="/undraw_working-at-home_pxaa.svg"
                    imageAlt="How We Work Illustration"
                />

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {steps.map((step) => (
                        <div key={step.number} className="bg-subtle-theme rounded-2xl p-8 border border-theme">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-blue-500">{step.number}</span>
                                </div>
                                <h3 className="text-xl font-bold text-main-theme">{step.title}</h3>
                            </div>
                            <p className="text-lg text-main-theme/80 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                <p className="text-lg text-main-theme/80 text-center max-w-3xl mx-auto">
                    This structured approach minimizes risk and accelerates time to market.
                </p>
            </div>
        </section>
    );
}
