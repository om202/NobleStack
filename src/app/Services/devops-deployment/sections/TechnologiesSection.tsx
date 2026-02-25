import SectionHeader from '../../../../components/SectionHeader';

export default function TechnologiesSection() {
    const categories = [
        {
            title: "Containers & orchestration",
            items: ["Docker", "Kubernetes"],
        },
        {
            title: "CI/CD tools",
            items: ["GitHub Actions", "GitLab CI", "Jenkins", "CircleCI"],
        },
        {
            title: "Infrastructure as Code",
            items: ["Terraform", "CloudFormation", "Ansible"],
        },
        {
            title: "Cloud platforms",
            items: ["AWS", "Google Cloud", "Microsoft Azure"],
        },
        {
            title: "Monitoring & observability",
            items: ["Datadog", "New Relic", "Prometheus", "Grafana"],
        },
        {
            title: "Security & secrets",
            items: ["Vault", "Secrets Manager"],
        },
        {
            title: "GitOps deployment",
            items: ["ArgoCD", "Flux"],
        },
        {
            title: "Networking & delivery",
            items: ["Nginx", "Load balancers", "CDN"],
        },
    ];

    const allTech = categories.flatMap((c) => c.items);

    return (
        <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="DevOps Technologies & Tools We Use"
                    description="We work with industry-leading DevOps, cloud, and infrastructure technologies."
                    imageSrc="/undraw_dev-environment_n5by.svg"
                    imageAlt="Technologies Illustration"
                />

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {allTech.map((tech, index) => (
                        <div key={index} className="bg-subtle-theme rounded-xl p-5 border border-theme text-center">
                            <p className="text-subtitle-theme font-medium">{tech}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
