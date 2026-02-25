import { Rocket, Server, Cloud, Activity } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import ServiceCard from '../../../../components/ServiceCard';
import SectionHeader from '../../../../components/SectionHeader';
import CTAButton from '../../../../components/CTAButton';

export default function CapabilitiesSection() {
    const capabilities = [
        {
            icon: Rocket,
            name: "CI/CD Automation & Pipeline Development",
            description: "We build reliable CI/CD pipelines that accelerate releases while maintaining stability and quality. GitHub Actions and GitLab CI pipeline design. Automated testing, build, and deployment workflows. Blue-green and canary deployment strategies. Zero-downtime deployments with rollback mechanisms. Ideal for SaaS platforms, enterprise applications, and fast-moving product teams.",
        },
        {
            icon: Server,
            name: "Containerization & Orchestration",
            description: "We standardize and scale applications using modern container technologies. Docker containerization for consistent environments. Kubernetes cluster setup, management, and scaling. Secure container registries (Docker Hub, ECR, GCR). Image optimization and vulnerability scanning.",
        },
        {
            icon: Cloud,
            name: "Cloud Infrastructure Setup & Management",
            description: "We design and deploy cloud-native infrastructure optimized for performance, availability, and cost efficiency. AWS, Google Cloud, Azure, and Firebase deployments. Infrastructure as Code using Terraform and CloudFormation. Auto-scaling, load balancing, and CDN configuration. High-availability and fault-tolerant architecture.",
        },
        {
            icon: Activity,
            name: "Monitoring, Observability & Performance Optimization",
            description: "We ensure system reliability through real-time visibility and proactive monitoring. Datadog and New Relic monitoring. Centralized logging with the ELK Stack. Alerts for critical system issues. Application performance monitoring and optimization.",
        },
    ];

    return (
        <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="Deployment & DevOps Services We Offer"
                    description="As a full-cycle DevOps services provider, we deliver modern infrastructure solutions tailored to high-growth and enterprise applications."
                    imageSrc="/undraw_server-cluster_7ugi.svg"
                    imageAlt="DevOps Services Illustration"
                />

                <div className="grid md:grid-cols-2 gap-6 mb-10">
                    {capabilities.map((capability, index) => (
                        <ServiceCard
                            key={index}
                            name={capability.name}
                            description={capability.description}
                            icon={capability.icon}
                        />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <CTAButton variant="secondary" href="https://calendar.app.google/mWmd6v421Pk66LQ26" icon={ArrowRight}>
                        Schedule a Free DevOps Consultation
                    </CTAButton>
                </div>
            </div>
        </section>
    );
}
