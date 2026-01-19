import { Globe, Server, Database } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import ServiceCard from '../../../../components/ServiceCard';
import SectionHeader from '../../../../components/SectionHeader';
import CTAButton from '../../../../components/CTAButton';

export default function CapabilitiesSection() {
    const capabilities = [
        {
            icon: Globe,
            name: "Modern Frontend Engineering",
            description: "Fast, responsive, and intuitive user interfaces that deliver excellent user experiences across devices. React and Next.js for scalable, SEO-friendly applications. Tailwind CSS for modern, responsive UI design. TypeScript for reliable, type-safe code. State management with Redux and Zustand. Progressive Web Apps (PWA) with offline support.",
        },
        {
            icon: Server,
            name: "Scalable Backend Systems",
            description: "Backend systems designed for reliability, security, and growth. Node.js, NestJS, and Express for robust APIs. REST and GraphQL API design. Microservices and event-driven architectures. Real-time features using WebSockets and Server-Sent Events.",
        },
        {
            icon: Database,
            name: "Data Management and Architecture",
            description: "Fast, secure, and future-ready data systems. PostgreSQL and MongoDB for structured and flexible data storage. Prisma ORM for type-safe and maintainable queries. Redis for caching, sessions, and performance optimization. Real-time data synchronization across platforms.",
        },
        {
            icon: Server,
            name: "Cloud Infrastructure and DevOps",
            description: "Production-ready products using modern cloud and DevOps practices. Docker containerization for consistent deployments. Cloud hosting on AWS, GCP, and Firebase. CI/CD pipelines using GitHub Actions. Auto-scaling, load balancing, and monitoring.",
        },
    ];

    return (
        <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <SectionHeader
                    title="What We Build"
                    description="Full-stack product engineering is more than development. It is about building products that solve real problems, scale with demand, and support business growth."
                    imageSrc="/undraw_server-cluster_7ugi.svg"
                    imageAlt="What We Build Illustration"
                />

                {/* Capabilities Grid */}
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

                {/* CTA Button */}
                <div className="mt-12 text-center">
                    <CTAButton variant="secondary" href="https://calendar.app.google/mWmd6v421Pk66LQ26" icon={ArrowRight}>
                        Schedule a Free Consultation
                    </CTAButton>
                </div>
            </div>
        </section>
    );
}
