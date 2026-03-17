import SectionHeader from '../../../../components/SectionHeader';

export default function WhyChooseSection() {
    const reasons = [
        "Mobile-first product strategy shaped around your business goals",
        "Expertise in both native (Swift, Kotlin) and cross-platform (React Native, Flutter) development",
        "AI-ready and cloud-integrable architecture for future-proof systems",
        "Scalable, secure, and maintainable mobile codebases",
        "Transparent development process with clear communication and milestones",
        "Dedicated post-launch support and continuous improvement",
        "Based in Kathmandu, serving clients across Asia, Europe, and North America",
    ];

    return (
        <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="Why Choose Noble Stack"
                    description="We work as a long-term mobile engineering partner, not just a development vendor."
                    imageSrc="/nbl.webp"
                    imageAlt="Noble Stack Logo"
                    imageSize="small"
                />

                <div className="bg-subtle-theme rounded-2xl p-8 md:p-12 border border-theme">
                    <div className="grid md:grid-cols-2 gap-6">
                        {reasons.map((reason, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <span className="text-blue-500 mt-1 text-xl">✓</span>
                                <span className="text-lg text-main-theme/80">{reason}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
