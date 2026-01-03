import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Workflow, GitBranch, Webhook, Cog } from 'lucide-react';
import ServiceCard from '../../../components/ServiceCard';
import CTAButton from '../../../components/CTAButton';

export const metadata: Metadata = {
    title: "End-to-End Automation Systems - Noble Stack",
    description: "From business logic to background jobs, we build automation pipelines that save time, reduce human error, and scale with your growth.",
};

export const dynamic = 'force-static';

export default function AutomationSystems() {
    const capabilities = [
        {
            icon: GitBranch,
            name: "No-Code & Low-Code Workflows",
            description: "Zapier, n8n, and Make.com workflow design. Multi-step automation with conditional logic. Cross-platform integrations and data sync. Error handling and retry mechanisms.",
        },
        {
            icon: Cog,
            name: "Custom Automation Scripts",
            description: "Python and Node.js automation scripts. Scheduled tasks and cron job management. Cloud Functions (AWS Lambda, Google Cloud Functions). Background job queues and processing.",
        },
        {
            icon: Webhook,
            name: "API & Service Integrations",
            description: "Gmail, Slack, and Teams integrations. Stripe, PayPal payment automation. Salesforce, HubSpot CRM sync. Custom API development and webhooks.",
        },
        {
            icon: Workflow,
            name: "Real-Time Dashboards",
            description: "React Admin panels for workflow management. Real-time monitoring and notifications. Analytics and reporting dashboards. Manual override and approval workflows.",
        },
    ];

    const useCases = [
        { name: "Lead Processing", description: "Automatically qualify, route, and follow up with leads from multiple sources" },
        { name: "Invoice & Billing", description: "Generate invoices, send reminders, and process payments automatically" },
        { name: "Data Synchronization", description: "Keep data consistent across CRM, databases, and spreadsheets" },
        { name: "Report Generation", description: "Scheduled reports sent to stakeholders with real-time data" },
        { name: "Customer Onboarding", description: "Welcome emails, account setup, and training sequences" },
        { name: "Social Media", description: "Schedule posts, respond to mentions, and analyze engagement" },
    ];

    return (
        <main className="min-h-screen bg-page-theme transition-colors duration-300">
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20 sm:pt-28">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-950/30 dark:via-emerald-950/20 dark:to-teal-950/30" />
                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10">
                    <div className="w-96 h-96 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full blur-3xl" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center">
                    <div className="mb-8 flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 rounded-3xl blur-xl opacity-50" />
                            <div className="relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center shadow-2xl">
                                <Workflow className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={1.5} />
                            </div>
                        </div>
                    </div>

                    <h1 className="text-[32px] md:text-[45px] font-bold mb-4 text-main-theme bg-gradient-to-br from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        End-to-End Automation Systems
                    </h1>

                    <p className="text-base text-muted-theme mb-6 max-w-3xl mx-auto">
                        Intelligent Automation That Scales With Your Business
                    </p>

                    <p className="text-base text-muted-theme max-w-2xl mx-auto leading-relaxed">
                        From business logic to background jobs, we build automation pipelines that save time, reduce human error, and scale with your growth.
                    </p>

                    <Link href="/Services" className="inline-flex items-center gap-2 mt-12 px-6 py-3 bg-card-theme border border-theme rounded-xl hover:bg-subtle-theme transition-colors duration-200">
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to Services</span>
                    </Link>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-20">
                <h2 className="text-xl md:text-2xl font-bold text-main-theme text-center mb-16">
                    Automation Solutions We Build
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {capabilities.map((capability, index) => (
                        <ServiceCard key={index} name={capability.name} description={capability.description} icon={capability.icon} />
                    ))}
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-20">
                <h2 className="text-xl md:text-2xl font-bold text-main-theme text-center mb-12">
                    Common Automation Use Cases
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {useCases.map((useCase, index) => (
                        <div key={index} className="bg-card-theme rounded-xl p-6 border border-theme">
                            <h3 className="font-bold text-main-theme mb-2">{useCase.name}</h3>
                            <p className="text-muted-theme">{useCase.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 py-20 text-center">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-3xl p-12 border border-theme">
                    <h2 className="text-2xl md:text-3xl font-bold text-main-theme mb-6">
                        Ready to Automate Your Workflows?
                    </h2>
                    <p className="text-lg text-muted-theme mb-8 max-w-2xl mx-auto">
                        Let's identify repetitive tasks and build intelligent automation to free up your team's time.
                    </p>
                    <CTAButton variant="primary" href="https://calendar.app.google/mWmd6v421Pk66LQ26">
                        Schedule Free Consultation
                    </CTAButton>
                </div>
            </section>
        </main>
    );
}
