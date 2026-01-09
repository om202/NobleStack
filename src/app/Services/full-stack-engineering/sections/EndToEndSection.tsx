import SectionHeader from '../../../../components/SectionHeader';

export default function EndToEndSection() {
    const services = [
        "Product discovery and technical planning",
        "System architecture and technology selection",
        "Frontend and backend development",
        "Database design and data architecture",
        "Cloud infrastructure and DevOps",
        "Performance optimization and scaling",
        "Ongoing maintenance and product evolution",
    ];

    return (
        <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
            <div className="max-w-6xl mx-auto">
                <SectionHeader
                    title="End-to-End Full-Stack Product Engineering"
                    description="Our comprehensive product engineering services cover every aspect of building successful digital products."
                    imageSrc="/undraw_software-engineer_xv60.svg"
                    imageAlt="End-to-End Engineering Illustration"
                />

                <div className="bg-subtle-theme rounded-2xl p-8 md:p-12 border border-theme">
                    <p className="text-lg text-main-theme/80 mb-6 leading-relaxed">
                        Our end-to-end product engineering services include:
                    </p>
                    <ul className="space-y-3 text-lg text-main-theme/80 mb-6">
                        {services.map((service, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <span className="text-blue-500 mt-1">•</span>
                                <span>{service}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="text-lg text-main-theme/80 leading-relaxed">
                        Whether you are building an MVP, launching a SaaS platform, or modernizing an existing system, we engineer products with long-term success in mind.
                    </p>
                </div>
            </div>
        </section>
    );
}
