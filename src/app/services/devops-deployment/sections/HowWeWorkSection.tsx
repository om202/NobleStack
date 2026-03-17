import SectionHeader from '../../../../components/SectionHeader';

export default function HowWeWorkSection() {
    const steps = [
        {
            number: 1,
            title: "Infrastructure and deployment assessment",
            description: "We evaluate your current infrastructure, deployment workflows, and identify gaps and opportunities.",
        },
        {
            number: 2,
            title: "CI/CD pipeline and cloud architecture design",
            description: "We design pipelines and cloud architecture tailored to your application stack and growth goals.",
        },
        {
            number: 3,
            title: "Automation, containerization, and IaC setup",
            description: "We implement automation, containerization, and Infrastructure as Code for reproducible environments.",
        },
        {
            number: 4,
            title: "Testing, security hardening, and optimization",
            description: "We run testing, security hardening, and performance optimization before production.",
        },
        {
            number: 5,
            title: "Production deployment and monitoring",
            description: "We deploy to production and set up monitoring and observability for ongoing reliability.",
        },
        {
            number: 6,
            title: "Continuous improvement and scaling",
            description: "We support continuous improvement, scaling, and evolution of your DevOps practices.",
        },
    ];

    return (
        <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="How We Deliver DevOps"
                    description="Our DevOps process is designed for clarity, security, and production readiness."
                    imageSrc="/undraw_working-at-home_pxaa.svg"
                    imageAlt="How We Work Illustration"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {steps.map((step) => (
                        <div key={step.number} className="bg-subtle-theme rounded-2xl p-8 border border-theme">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-blue-500">{step.number}</span>
                                </div>
                                <h3 className="text-lg font-bold text-main-theme">{step.title}</h3>
                            </div>
                            <p className="text-main-theme/80 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                <p className="text-lg text-main-theme/80 text-center max-w-3xl mx-auto">
                    This structured approach ensures reliability, security, and production readiness from day one.
                </p>
            </div>
        </section>
    );
}
