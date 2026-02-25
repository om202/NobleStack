import SectionHeader from '../../../../components/SectionHeader';

export default function BestPracticesSection() {
    const practices = [
        {
            name: "Infrastructure as Code",
            description: "Reproducible and version-controlled environments for consistency and auditability.",
        },
        {
            name: "Automated testing",
            description: "Catch deployment issues early with comprehensive test suites in CI/CD.",
        },
        {
            name: "Security-first approach",
            description: "Secrets management and compliance checks integrated into every pipeline.",
        },
        {
            name: "Cost optimization",
            description: "Right-sized infrastructure to reduce cloud spending without sacrificing performance.",
        },
        {
            name: "Disaster recovery planning",
            description: "Backup strategies and incident response procedures for business continuity.",
        },
        {
            name: "Clear documentation",
            description: "Runbooks and deployment procedures so your team can operate with confidence.",
        },
    ];

    return (
        <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="Our DevOps Best Practices"
                    description="We apply proven practices to ensure reliability, security, and maintainability."
                    imageSrc="/undraw_programming_j1zw.svg"
                    imageAlt="Best Practices Illustration"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {practices.map((practice, index) => (
                        <div key={index} className="bg-subtle-theme rounded-2xl p-6 border border-theme">
                            <h3 className="font-bold text-main-theme mb-2">{practice.name}</h3>
                            <p className="text-muted-theme">{practice.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
