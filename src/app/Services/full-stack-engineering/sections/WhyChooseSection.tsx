import SectionHeader from '../../../../components/SectionHeader';

export default function WhyChooseSection() {
    const reasons = [
        "Mobile-first product strategy tailored to your business model",
        "Native and cross-platform expertise across iOS and Android",
        "AI-ready and cloud-integrable architecture from day one",
        "Scalable, secure, and maintainable codebases built for the long term",
        "Transparent development process and dedicated post-launch support",
    ];

    return (
        <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="Why Businesses Choose Noble Stack for Mobile Apps"
                    description="We are not just a development vendor—we are your long-term mobile engineering partner."
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
