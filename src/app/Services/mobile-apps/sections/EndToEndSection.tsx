import SectionHeader from '../../../../components/SectionHeader';

export default function EndToEndSection() {
    const services = [
        "Discovery & strategy to align business goals, users, and technical requirements",
        "Architecture & planning for scalable, secure mobile systems",
        "UI/UX design for intuitive, mobile-first experiences",
        "Agile development of native and cross-platform applications",
        "QA, performance, and security testing across devices",
        "Launch, monitoring, and optimization for App Store and Play Store",
        "Post-launch support, maintenance, and feature expansion",
    ];

    return (
        <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="End-to-End Mobile App Development"
                    description="Our end-to-end mobile app development services cover every stage of the product lifecycle, from idea to long-term optimization."
                    imageSrc="/undraw_software-engineer_xv60.svg"
                    imageAlt="End-to-End Mobile Development Illustration"
                />

                <div className="bg-subtle-theme rounded-2xl p-8 md:p-12 border border-theme">
                    <p className="text-lg text-main-theme/80 mb-6 leading-relaxed">
                        Our structured mobile app development process reduces risk, improves quality, and accelerates time-to-market:
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
                        Whether you are building an MVP, modernizing an existing application, or scaling a production system, we ensure your mobile app is production-ready, scalable, and aligned with your growth goals.
                    </p>
                </div>
            </div>
        </section>
    );
}
