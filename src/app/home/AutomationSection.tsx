import { ArrowRight, Workflow, Database, LineChart, Cog } from "lucide-react";
import SectionHeader from "../../components/SectionHeader";
import ServiceCard from "../../components/ServiceCard";
import CTAButton from "../../components/CTAButton";

export default function AutomationSection() {
    const automationServices = [
        {
            name: "CRM & Workflow Automation",
            icon: Workflow,
            status: "Operational",
            description: "Lead routing, follow-ups, internal handoffs",
        },
        {
            name: "Internal Dashboards & Tools",
            icon: LineChart,
            status: "Custom Built",
            description: "Reporting, monitoring, ops portals",
        },
        {
            name: "API & System Integrations",
            icon: Cog,
            status: "Reliable",
            description: "Connect SaaS tools, CRMs, ERPs",
        },
        {
            name: "Data Processing Pipelines",
            icon: Database,
            status: "Scalable",
            description: "Batch & streaming workflows",
        },
    ];

    const benefits = [
        "Save Time",
        "Reduce Human Error",
        "Improve Team Productivity",
        "Streamline Workflows",
        "Scale Operations Efficiently",
    ];

    return (
        <section
            id="automation"
            className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme"
        >
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="Automation Systems & Internal Tools"
                    description="We help businesses reduce manual work and improve operational efficiency through custom automation systems, integrations, and internal business tools, engineered for the way your team actually works."
                    imageSrc="/undraw_working_n9u0.svg"
                    imageAlt="Business automation systems illustration"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {automationServices.map((service) => (
                        <ServiceCard
                            key={service.name}
                            name={service.name}
                            description={service.description}
                            icon={service.icon}
                        />
                    ))}
                </div>

                <ul className="flex flex-wrap justify-center gap-2 mb-10">
                    {benefits.map((b) => (
                        <li
                            key={b}
                            className="px-3 py-1.5 rounded-full bg-subtle-theme border border-theme text-sm text-main-theme/90"
                        >
                            {b}
                        </li>
                    ))}
                </ul>

                <div className="text-center">
                    <CTAButton variant="secondary" href="/Services/automation-systems" icon={ArrowRight}>
                        Learn About Automation Solutions
                    </CTAButton>
                </div>
            </div>
        </section>
    );
}
