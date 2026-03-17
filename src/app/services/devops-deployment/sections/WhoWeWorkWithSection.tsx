import SectionHeader from '../../../../components/SectionHeader';

export default function WhoWeWorkWithSection() {
    const points = [
        {
            title: "Over 22 years of experience",
            description: "Software and infrastructure experience delivering production-ready systems worldwide.",
        },
        {
            title: "Global delivery model",
            description: "Offshore and remote DevOps teams serving USA, UK, Europe, Australia, the Middle East, and Asia.",
        },
        {
            title: "Secure development practices",
            description: "NDA protection and compliance-ready processes for enterprise and regulated industries.",
        },
        {
            title: "Transparent communication",
            description: "Dedicated engagement models and clear communication throughout the DevOps lifecycle.",
        },
        {
            title: "Performance-driven infrastructure",
            description: "Solutions built to scale with your business and deliver measurable outcomes.",
        },
    ];

    return (
        <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="Why Global Businesses Trust Noble Stack"
                    description="We are not just a DevOps services provider. We are a long-term deployment and infrastructure partner."
                    imageSrc="/undraw_working_n9u0.svg"
                    imageAlt="Global Trust Illustration"
                />

                <div className="grid md:grid-cols-2 gap-6">
                    {points.map((point, index) => (
                        <div key={index} className="bg-subtle-theme rounded-2xl p-8 border border-theme">
                            <h3 className="text-xl font-bold text-main-theme mb-3">{point.title}</h3>
                            <p className="text-lg text-main-theme/80 leading-relaxed">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
