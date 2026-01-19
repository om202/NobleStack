import SectionHeader from '../../../../components/SectionHeader';

export default function WhyChooseSection() {
    const reasons = [
        "Mobile-first engineering mindset",
        "Expertise in both native and cross-platform development",
        "Scalable, secure, and maintainable codebases",
        "AI-ready and cloud-integrated solutions",
        "Transparent communication and delivery",
    ];

    return (
        <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="Why Choose Noble Stack"
                    description="We work as a long-term mobile engineering partner, not just a development vendor."
                    imageSrc="/nbl.png"
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
