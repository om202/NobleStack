import SectionHeader from '../../../../components/SectionHeader';

export default function HowWeWorkSection() {
    const steps = [
        {
            number: 1,
            title: "Workflow Discovery",
            description: "We identify repetitive tasks, bottlenecks, and automation opportunities.",
        },
        {
            number: 2,
            title: "System Design",
            description: "We design scalable workflows, integrations, and failure-handling strategies.",
        },
        {
            number: 3,
            title: "Implementation & Testing",
            description: "We build, test, and validate automation under real-world conditions.",
        },
        {
            number: 4,
            title: "Deployment & Optimization",
            description: "We deploy, monitor, and continuously improve your automation systems.",
        },
    ];

    return (
        <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="How We Work"
                    description="Our automation development process ensures reliability and clarity at every stage."
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
                    This approach minimizes risk and ensures long-term success.
                </p>
            </div>
        </section>
    );
}
