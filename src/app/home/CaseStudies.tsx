import { Workflow, Gauge, Brain, CheckCircle2 } from "lucide-react";
import SectionHeader from "../../components/SectionHeader";

const caseStudies = [
    {
        icon: Workflow,
        title: "AI Workflow Automation System",
        summary:
            "Built an internal automation platform that reduced repetitive operational tasks and improved workflow efficiency for a service-based business.",
        results: [
            "Reduced manual processing time",
            "Centralized internal workflows",
            "Improved response consistency",
            "Simplified operational management",
        ],
    },
    {
        icon: Gauge,
        title: "SEO-Optimized SaaS Platform",
        summary:
            "Developed a modern SaaS web application using Next.js and scalable backend architecture optimized for performance and search visibility.",
        results: [
            "Improved page speed performance",
            "Better SEO indexing coverage",
            "Responsive cross-device experience",
            "Scalable production infrastructure",
        ],
    },
    {
        icon: Brain,
        title: "AI-Powered Business Tools",
        summary:
            "Built AI-integrated systems designed to organize business knowledge, improve information retrieval, and automate support workflows.",
        results: [
            "Faster information access",
            "Reduced support workload",
            "Improved operational efficiency",
            "Centralized business data workflows",
        ],
    },
];

export default function CaseStudies() {
    return (
        <section
            id="case-studies"
            aria-label="Case studies and results"
            className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme transition-colors"
        >
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="Real Solutions With Real Business Impact"
                    description="We focus on building systems that improve operational efficiency, automate business processes, and create measurable digital outcomes for the companies we work with."
                    imageSrc="/undraw_engineering-team_13ax.svg"
                    imageAlt="Case studies and engineering outcomes illustration"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {caseStudies.map(({ icon: Icon, title, summary, results }) => (
                        <article
                            key={title}
                            className="bg-subtle-theme rounded-2xl p-5 sm:p-6 border border-theme flex flex-col h-full"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                                    <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h3 className="text-lg font-semibold text-main-theme leading-snug">
                                    {title}
                                </h3>
                            </div>
                            <p className="text-sm text-subtitle-theme leading-relaxed mb-4">
                                {summary}
                            </p>
                            <ul className="space-y-2 mt-auto">
                                {results.map((r) => (
                                    <li
                                        key={r}
                                        className="flex items-start gap-2 text-sm text-main-theme/85"
                                    >
                                        <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 shrink-0" />
                                        <span>{r}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

