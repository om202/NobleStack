import SectionHeader from '../../../../components/SectionHeader';

export default function StandardsSection() {
    const standards = [
        {
            name: "Security-by-Design Architecture",
            description: "Security is embedded into system design from the first line of code."
        },
        {
            name: "Continuous Audits and Testing",
            description: "Regular vulnerability assessments and penetration testing identify and mitigate risks."
        },
        {
            name: "Zero Trust Architecture",
            description: "Every request is authenticated and authorized, regardless of origin."
        },
        {
            name: "Incident Response Readiness",
            description: "Defined incident response plans supported by real-time monitoring."
        },
        {
            name: "Least Privilege Access",
            description: "Minimal permissions are enforced across users, services, and infrastructure."
        },
        {
            name: "Continuous Monitoring",
            description: "Ongoing threat detection with automated alerts ensures rapid response."
        },
    ];

    return (
        <section className="py-8 px-3 sm:py-12 sm:px-4 bg-page-theme">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="Our Security Standards and Practices"
                    description="We follow industry-leading security practices to ensure your systems are protected at every layer."
                    imageSrc="/undraw_team_85hs.svg"
                    imageAlt="Security Standards Illustration"
                />

                <div className="grid md:grid-cols-3 gap-6">
                    {standards.map((standard, index) => (
                        <div key={index} className="bg-card-theme rounded-xl p-6 border border-theme hover:border-blue-500/50 transition-colors duration-200">
                            <h3 className="font-bold text-main-theme mb-2">{standard.name}</h3>
                            <p className="text-muted-theme">{standard.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
