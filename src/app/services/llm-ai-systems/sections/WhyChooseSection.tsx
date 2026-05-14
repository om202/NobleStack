import SectionHeader from '../../../../components/SectionHeader';

export default function WhyChooseSection() {
    const reasons = [
        "Proven experience building production AI systems",
        "Secure, scalable, and cost-optimized architectures",
        "Deep expertise in LLMs, RAG, and AI agents",
        "Designed for SaaS, enterprise, and data-driven platforms",
        "End-to-end ownership from strategy to deployment",
    ];

    return (
        <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="Why Choose Noble Stack for LLM AI Systems"
                    description="At Noble Stack, we design enterprise-grade AI architectures engineered for reliability, performance, and long-term scalability. Our systems are built to handle real users, real data, and real business risk."
                    imageSrc="/nbl.webp"
                    imageAlt="Noble Stack Logo"
                    imageSize="small"
                />

                <div className="bg-subtle-theme rounded-2xl p-8 md:p-12 border border-theme">
                    <p className="text-lg text-main-theme/80 mb-6">What sets us apart:</p>
                    <div className="grid md:grid-cols-2 gap-6">
                        {reasons.map((reason, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <span className="text-blue-500 mt-1 text-xl">●</span>
                                <span className="text-lg text-main-theme/80">{reason}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
