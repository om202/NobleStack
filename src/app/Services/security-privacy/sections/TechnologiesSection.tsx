import SectionHeader from '../../../../components/SectionHeader';

export default function TechnologiesSection() {
    const techCategories = [
        {
            category: "Identity and Access Management",
            technologies: ["OAuth2", "OpenID Connect", "SAML", "Auth0", "Clerk", "Firebase Authentication"]
        },
        {
            category: "Encryption and Transport Security",
            technologies: ["AES-256 encryption", "HTTPS", "TLS", "SSL certificates"]
        },
        {
            category: "Cloud and Infrastructure Security",
            technologies: ["AWS Secrets Manager", "HashiCorp Vault", "Secure CI/CD pipelines"]
        },
        {
            category: "Monitoring and Testing",
            technologies: ["Audit logs", "Real-time monitoring", "Penetration testing", "Vulnerability scanning"]
        }
    ];

    return (
        <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="Security Technologies and Tools"
                    description="We use proven, enterprise-grade technologies to deliver secure and scalable systems."
                    imageSrc="/undraw_dev-environment_n5by.svg"
                    imageAlt="Technologies Illustration"
                />

                <div className="grid md:grid-cols-2 gap-8">
                    {techCategories.map((category, index) => (
                        <div key={index} className="bg-subtle-theme rounded-2xl p-8 border border-theme">
                            <h3 className="text-lg font-bold text-main-theme mb-4">{category.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="px-4 py-2 bg-card-theme rounded-lg border border-theme text-sm text-subtitle-theme"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
