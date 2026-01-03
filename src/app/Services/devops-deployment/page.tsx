import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Server, Rocket, Activity, Cloud } from 'lucide-react';
import ServiceCard from '../../../components/ServiceCard';
import CTAButton from '../../../components/CTAButton';

export const metadata: Metadata = {
    title: "Deployment & DevOps - Noble Stack",
    description: "We ensure your product runs smoothly in production with modern DevOps practices — from zero-downtime deploys to intelligent monitoring.",
};

export const dynamic = 'force-static';

export default function DevOpsDeployment() {
    const capabilities = [
        {
            icon: Rocket,
            name: "CI/CD Automation",
            description: "GitHub Actions and GitLab CI pipeline design. Automated testing, building, and deployment. Blue-green and canary deployment strategies. Zero-downtime deployments with rollback capabilities.",
        },
        {
            icon: Server,
            name: "Containerization & Orchestration",
            description: "Docker containerization for consistency. Kubernetes cluster management and scaling. Container registries (Docker Hub, ECR, GCR). Image optimization and security scanning.",
        },
        {
            icon: Cloud,
            name: "Cloud Infrastructure Setup",
            description: "AWS, GCP, and Firebase deployment. Infrastructure as Code (Terraform, CloudFormation). Auto-scaling and load balancing configuration. CDN setup for global content delivery.",
        },
        {
            icon: Activity,
            name: "Monitoring & Observability",
            description: "Datadog, New Relic real-time monitoring. Centralized logging with ELK stack. Alert systems for critical issues. Performance metrics and APM integration.",
        },
    ];

    const bestPractices = [
        { name: "Infrastructure as Code", description: "Version-controlled infrastructure for reproducible environments" },
        { name: "Automated Testing", description: "Catch issues early with comprehensive test suites in CI/CD" },
        { name: "Security First", description: "Security scanning, secrets management, and compliance checks" },
        { name: "Cost Optimization", description: "Right-sized infrastructure to reduce cloud spending" },
        { name: "Disaster Recovery", description: "Backup strategies and incident response planning" },
        { name: "Documentation", description: "Clear runbooks and deployment procedures for your team" },
    ];

    return (
        <main className="min-h-screen bg-page-theme transition-colors duration-300">
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20 sm:pt-28">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-orange-950/30 dark:via-amber-950/20 dark:to-yellow-950/30" />
                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10"><div className="w-96 h-96 bg-gradient-to-br from-orange-400 to-amber-600 rounded-full blur-3xl" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 text-center">
                    <div className="mb-8 flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-amber-600 rounded-3xl blur-xl opacity-50" />
                            <div className="relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-500 to-amber-600 rounded-3xl flex items-center justify-center shadow-2xl">
                                <Rocket className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={1.5} />
                            </div>
                        </div>
                    </div>

                    <h1 className="text-[32px] md:text-[45px] font-bold mb-4 text-main-theme bg-gradient-to-br from-orange-600 to-amber-600 bg-clip-text text-transparent">
                        Deployment & DevOps
                    </h1>

                    <p className="text-base text-muted-theme mb-6 max-w-3xl mx-auto">
                        Reliable Infrastructure for Production-Ready Applications
                    </p>

                    <p className="text-base text-muted-theme max-w-2xl mx-auto leading-relaxed">
                        We ensure your product runs smoothly in production with modern DevOps practices — from zero-downtime deploys to intelligent monitoring.
                    </p>

                    <Link href="/Services" className="inline-flex items-center gap-2 mt-12 px-6 py-3 bg-card-theme border border-theme rounded-xl hover:bg-subtle-theme transition-colors duration-200">
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to Services</span>
                    </Link>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-xl md:text-2xl font-bold text-main-theme text-center mb-16">
                    DevOps Services We Provide
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {capabilities.map((capability, index) => (
                        <ServiceCard key={index} name={capability.name} description={capability.description} icon={capability.icon} />
                    ))}
                </div>
            </section>

            {/* Technologies Section */}
            <section className="max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-xl md:text-2xl font-bold text-main-theme text-center mb-16">
                    Key Technologies
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {[
                        "Docker & Kubernetes",
                        "GitHub Actions & GitLab CI",
                        "Terraform & CloudFormation",
                        "AWS, GCP & Azure",
                        "Jenkins & CircleCI",
                        "Datadog & New Relic",
                        "Nginx & Load Balancers",
                        "Prometheus & Grafana",
                        "ELK Stack (Elasticsearch, Logstash, Kibana)",
                        "Ansible & Chef",
                        "ArgoCD & Flux",
                        "Vault & Secrets Management",
                    ].map((tech, index) => (
                        <div key={index} className="bg-card-theme rounded-xl p-6 border border-theme text-center">
                            <p className="text-muted-theme font-medium">{tech}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-xl md:text-2xl font-bold text-main-theme text-center mb-12">
                    Our DevOps Best Practices
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {bestPractices.map((practice, index) => (
                        <div key={index} className="bg-card-theme rounded-xl p-6 border border-theme">
                            <h3 className="font-bold text-main-theme mb-2">{practice.name}</h3>
                            <p className="text-muted-theme">{practice.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 py-12 text-center">
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 rounded-3xl p-12 border border-theme">
                    <h2 className="text-2xl md:text-3xl font-bold text-main-theme mb-6">
                        Ready for Production-Grade Infrastructure?
                    </h2>
                    <p className="text-lg text-muted-theme mb-8 max-w-2xl mx-auto">
                        Let's build a deployment pipeline and infrastructure that scales with your success.
                    </p>
                    <CTAButton variant="primary" href="https://calendar.app.google/mWmd6v421Pk66LQ26">
                        Schedule Free Consultation
                    </CTAButton>
                </div>
            </section>
        </main>
    );
}
