import { Key, Lock, Shield, Eye } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import ServiceCard from '../../../../components/ServiceCard';
import SectionHeader from '../../../../components/SectionHeader';
import CTAButton from '../../../../components/CTAButton';

export default function ServicesSection() {
    const services = [
        {
            icon: Key,
            name: "Authentication and Authorization Services",
            description: "We design and implement secure identity and access management systems that protect users and business-critical resources. OAuth2, OpenID Connect, and SAML implementation. Multi-provider authentication using Google, GitHub, Auth0, Clerk, and Firebase. JWT token lifecycle and secure session management. Role-Based Access Control (RBAC) and permission modeling. Identity and Access Management (IAM) architecture. These solutions ensure secure user access, scalability, and compliance across distributed systems.",
        },
        {
            icon: Lock,
            name: "Data Protection and Encryption Services",
            description: "We secure sensitive data across its entire lifecycle using industry-standard encryption and secure storage practices. HTTPS and TLS encryption for data in transit. AES-256 encryption for data at rest. Secure secrets management using AWS Secrets Manager and HashiCorp Vault. Encrypted databases and field-level security. Secure backup, recovery, and key rotation strategies. This approach minimizes data exposure and strengthens system resilience.",
        },
        {
            icon: Eye,
            name: "Privacy and Compliance Consulting",
            description: "We help organizations meet global data protection regulations through structured privacy and compliance frameworks. GDPR compliance implementation. CCPA compliance consulting. User consent and preference management systems. Comprehensive audit trails and compliance logging. Data retention, anonymization, and deletion policies. Our solutions reduce regulatory risk while maintaining operational efficiency.",
        },
        {
            icon: Shield,
            name: "Advanced Application Security and Threat Protection",
            description: "We protect applications from modern threats using layered defense strategies and proactive monitoring. Multi-Factor Authentication and Two-Factor Authentication. Rate limiting and API abuse prevention. Distributed Denial-of-Service (DDoS) protection strategies. Secure session handling and timeout enforcement. Security headers and CORS configuration. These measures significantly reduce attack surfaces and improve system reliability.",
        },
    ];

    return (
        <section className="py-8 px-3 sm:py-12 sm:px-4 bg-page-theme">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <SectionHeader
                    title="Application Security Services We Provide"
                    description="Comprehensive security solutions designed to protect your applications, data, and users from modern threats."
                    imageSrc="/undraw_software-engineer_xv60.svg"
                    imageAlt="Security Services Illustration"
                />

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            name={service.name}
                            description={service.description}
                            icon={service.icon}
                        />
                    ))}
                </div>

                {/* CTA Button */}
                <div className="mt-12 text-center">
                    <CTAButton variant="secondary" href="https://calendar.app.google/mWmd6v421Pk66LQ26" icon={ArrowRight}>
                        Get Your Security Roadmap
                    </CTAButton>
                </div>
            </div>
        </section>
    );
}
