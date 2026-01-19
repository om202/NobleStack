import SectionHeader from '../../../../components/SectionHeader';

export default function EndToEndSection() {
    const services = [
        "Product discovery and mobile strategy",
        "UI/UX design for mobile-first experiences",
        "Native and cross-platform app development",
        "Backend integration and API development",
        "Offline support and performance optimization",
        "App Store and Play Store deployment",
        "Post-launch support and continuous improvement",
    ];

    return (
        <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="End-to-End Mobile App Development"
                    description="Our end-to-end mobile development services cover every aspect of building successful mobile applications."
                    imageSrc="/undraw_software-engineer_xv60.svg"
                    imageAlt="End-to-End Mobile Development Illustration"
                />

                <div className="bg-subtle-theme rounded-2xl p-8 md:p-12 border border-theme">
                    <p className="text-lg text-main-theme/80 mb-6 leading-relaxed">
                        Our end-to-end mobile development services include:
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
                        Whether you are building a new mobile product or extending an existing platform, we ensure your app is production-ready and scalable.
                    </p>
                </div>
            </div>
        </section>
    );
}
