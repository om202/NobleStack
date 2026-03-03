import SectionHeader from '../../../../components/SectionHeader';

export default function EndToEndSection() {
    const services = [
        "Discovery and mobile product strategy",
        "User journey mapping and requirements analysis",
        "Mobile app UI/UX design and prototyping",
        "Native iOS, Android, and cross-platform development",
        "Backend, API, and third-party integration",
        "App Store & Play Store deployment and ASO",
        "Post-launch support, analytics, and optimization",
    ];

    return (
        <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="End-to-End Mobile App Development"
                    description="Our comprehensive mobile app development services cover the full lifecycle—from idea to launch and beyond."
                    imageSrc="/undraw_software-engineer_xv60.svg"
                    imageAlt="End-to-End Mobile Development Illustration"
                />

                <div className="bg-subtle-theme rounded-2xl p-8 md:p-12 border border-theme">
                    <p className="text-lg text-main-theme/80 mb-6 leading-relaxed">
                        Our end-to-end mobile app development services include:
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
                        Whether you need to build an MVP, modernize an existing application, or scale a production system, we engineer mobile solutions designed for long-term growth.
                    </p>
                </div>
            </div>
        </section>
    );
}
