import SectionHeader from '../../../../components/SectionHeader';

export default function UseCasesSection() {
    const useCases = [
        {
            title: "Lead Processing Automation",
            description: "Automatically capture, qualify, route, and follow up with leads from multiple sources.",
        },
        {
            title: "Invoice & Billing Automation",
            description: "Generate invoices, send reminders, and process payments without manual intervention.",
        },
        {
            title: "Data Synchronization",
            description: "Keep CRM systems, databases, and spreadsheets perfectly in sync.",
        },
        {
            title: "Automated Reporting",
            description: "Generate and send scheduled reports with real-time data to stakeholders.",
        },
        {
            title: "Customer Onboarding Automation",
            description: "Automate welcome emails, account setup, and onboarding workflows.",
        },
        {
            title: "Social Media Automation",
            description: "Schedule posts, respond to mentions, and track engagement across platforms.",
        },
    ];

    return (
        <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="Common Automation Use Cases"
                    description="Real-world automation scenarios we implement for businesses."
                    imageSrc="/undraw_server-cluster_7ugi.svg"
                    imageAlt="Automation Use Cases Illustration"
                />

                <div className="grid md:grid-cols-3 gap-6">
                    {useCases.map((useCase, index) => (
                        <div key={index} className="bg-subtle-theme rounded-2xl p-8 border border-theme">
                            <h3 className="text-xl font-bold text-main-theme mb-3">{useCase.title}</h3>
                            <p className="text-lg text-main-theme/80 leading-relaxed">
                                {useCase.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
