import SectionHeader from '../../../../components/SectionHeader';

export default function WhyChooseSection() {
    const reasons = [
        "Enterprise DevOps Expertise — Our DevOps engineers, cloud architects, and SRE specialists have extensive experience deploying and managing high-availability, mission-critical systems for global enterprises and fast-growing startups.",
        "Custom DevOps Solutions — We design custom DevOps pipelines and deployment architectures based on your application stack, traffic requirements, compliance needs, and long-term growth goals. Every solution is built specifically for your business.",
        "End-to-End Deployment & Infrastructure Management — From CI/CD automation and container orchestration to monitoring, scaling, and optimization, we manage the complete DevOps lifecycle with full transparency.",
        "Secure, Scalable, and Production-Ready Infrastructure — Our DevOps solutions are cloud-native, security-focused, compliance-ready, and engineered for long-term performance and reliability.",
    ];

    return (
        <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="Why Choose Noble Stack as Your DevOps Services Company?"
                    description="Selecting the right DevOps partner directly impacts application reliability, performance, and security. Noble Stack combines deep DevOps expertise, cloud-native architecture, and enterprise-level engineering to deliver infrastructure that scales with your business."
                    imageSrc="/nbl.png"
                    imageAlt="Noble Stack Logo"
                    imageSize="small"
                />

                <div className="bg-subtle-theme rounded-2xl p-8 md:p-12 border border-theme">
                    <div className="grid md:grid-cols-2 gap-6">
                        {reasons.map((reason, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <span className="text-blue-500 mt-1 text-xl flex-shrink-0">✓</span>
                                <span className="text-lg text-main-theme/80">{reason}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
