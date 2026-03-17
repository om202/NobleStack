import SectionHeader from '../../../../components/SectionHeader';

export default function EndToEndSection() {
    const benefits = [
        "Save time and operational cost",
        "Improve data accuracy and consistency",
        "Reduce manual intervention",
        "Scale with growing workloads",
        "Integrate seamlessly with existing tools",
    ];

    return (
        <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="End-to-End Automation Systems That Scale"
                    description="Automation is not just about connecting tools. It is about building reliable systems that operate continuously, recover from failures, and evolve with your operations."
                    imageSrc="/undraw_software-engineer_xv60.svg"
                    imageAlt="End-to-End Automation Illustration"
                />

                <div className="bg-subtle-theme rounded-2xl p-8 md:p-12 border border-theme">
                    <p className="text-lg text-main-theme/80 mb-6 leading-relaxed">
                        Our automation systems are designed to:
                    </p>
                    <ul className="space-y-3 text-lg text-main-theme/80 mb-6">
                        {benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <span className="text-blue-500 mt-1">•</span>
                                <span>{benefit}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="text-lg text-main-theme/80 leading-relaxed">
                        Whether you need simple workflow automation or complex, event-driven systems, we build automation that is production-ready and maintainable.
                    </p>
                </div>
            </div>
        </section>
    );
}
