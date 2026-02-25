import SectionHeader from '../../../../components/SectionHeader';

export default function EndToEndSection() {
    const services = [
        "Infrastructure and deployment assessment",
        "CI/CD pipeline and cloud architecture design",
        "Automation, containerization, and Infrastructure as Code setup",
        "Testing, security hardening, and performance optimization",
        "Production deployment and monitoring",
        "Continuous improvement and scaling",
    ];

    return (
        <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="Our Proven Deployment & DevOps Process"
                    description="This structured approach ensures reliability, security, and production readiness from day one."
                    imageSrc="/undraw_software-engineer_xv60.svg"
                    imageAlt="DevOps Process Illustration"
                />

                <div className="bg-subtle-theme rounded-2xl p-8 md:p-12 border border-theme">
                    <p className="text-lg text-main-theme/80 mb-6 leading-relaxed">
                        Our end-to-end DevOps process includes:
                    </p>
                    <ul className="space-y-3 text-lg text-main-theme/80 mb-6">
                        {services.map((service, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <span className="text-blue-500 mt-1 font-bold">{index + 1}.</span>
                                <span>{service}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="text-lg text-main-theme/80 leading-relaxed">
                        Whether you need CI/CD automation, cloud deployment, or enterprise DevOps consulting, we deliver infrastructure that scales with your business.
                    </p>
                </div>
            </div>
        </section>
    );
}
