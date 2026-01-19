import { Zap, Code, Link as LinkIcon, BarChart } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import ServiceCard from '../../../../components/ServiceCard';
import SectionHeader from '../../../../components/SectionHeader';
import CTAButton from '../../../../components/CTAButton';

export default function SolutionsSection() {
    const solutions = [
        {
            icon: Zap,
            name: "No-Code & Low-Code Workflow Automation",
            description: "We design powerful workflows using no-code and low-code platforms for rapid automation. Zapier, Make (Integromat), and n8n workflows. Multi-step automation with conditional logic. Cross-platform integrations and data synchronization. Error handling, retries, and fallback logic.",
        },
        {
            icon: Code,
            name: "Custom Automation Scripts",
            description: "For advanced or performance-critical workflows, we build fully custom automation systems. Python and Node.js automation scripts. Scheduled jobs and cron task management. Background workers and job queues. Cloud Functions on AWS Lambda and Google Cloud Functions.",
        },
        {
            icon: LinkIcon,
            name: "API & Service Integrations",
            description: "We connect your tools, platforms, and services into a unified automation ecosystem. Gmail, Slack, and Microsoft Teams automation. Stripe and PayPal payment workflows. Salesforce and HubSpot CRM synchronization. Custom API development and webhook handling.",
        },
        {
            icon: BarChart,
            name: "Real-Time Dashboards & Admin Panels",
            description: "We build dashboards to monitor, control, and manage automation systems. React-based admin panels and control systems. Real-time workflow monitoring and alerts. Analytics and reporting dashboards. Manual overrides and approval workflows.",
        },
    ];

    return (
        <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <SectionHeader
                    title="Automation Solutions We Build"
                    description="Automation is not just about connecting tools. It is about building reliable systems that operate continuously, recover from failures, and evolve with your operations."
                    imageSrc="/undraw_dev-environment_n5by.svg"
                    imageAlt="Automation Solutions Illustration"
                />

                {/* Solutions Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                    {solutions.map((solution, index) => (
                        <ServiceCard
                            key={index}
                            name={solution.name}
                            description={solution.description}
                            icon={solution.icon}
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
