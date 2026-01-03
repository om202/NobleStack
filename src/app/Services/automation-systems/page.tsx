import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Workflow, GitBranch, Webhook, Cog } from 'lucide-react';

export const metadata: Metadata = {
    title: "End-to-End Automation Systems - Noble Stack",
    description: "From business logic to background jobs, we build automation pipelines that save time, reduce human error, and scale with your growth.",
};

export const dynamic = 'force-static';

export default function AutomationSystems() {
    return (
        <main className="min-h-screen bg-page-theme transition-colors duration-300">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-950/30 dark:via-emerald-950/20 dark:to-teal-950/30" />

                {/* Icon with Gradient */}
                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10">
                    <div className="w-96 h-96 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full blur-3xl" />
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center">
                    {/* Icon */}
                    <div className="mb-8 flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 rounded-3xl blur-xl opacity-50" />
                            <div className="relative w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center shadow-2xl">
                                <Workflow className="w-12 h-12 md:w-16 md:h-16 text-white" strokeWidth={1.5} />
                            </div>
                        </div>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-main-theme bg-gradient-to-br from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        End-to-End Automation Systems
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-muted-theme mb-8 max-w-3xl mx-auto font-medium">
                        Intelligent Automation That Scales With Your Business
                    </p>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-muted-theme max-w-2xl mx-auto leading-relaxed">
                        From business logic to background jobs, we build automation pipelines that save time, reduce human error, and scale with your growth.
                    </p>

                    {/* Back Link */}
                    <Link
                        href="/Services"
                        className="inline-flex items-center gap-2 mt-12 px-6 py-3 bg-card-theme border border-theme rounded-xl hover:bg-subtle-theme transition-colors duration-200"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to Services</span>
                    </Link>
                </div>
            </section>

            {/* Capabilities Section */}
            <section className="max-w-6xl mx-auto px-4 py-20">
                <h2 className="text-3xl md:text-4xl font-bold text-main-theme text-center mb-16">
                    Automation Solutions We Build
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Workflow Automation */}
                    <div className="bg-card-theme rounded-2xl p-8 border border-theme hover:shadow-lg transition-shadow duration-300">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                            <GitBranch className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-main-theme mb-4">No-Code & Low-Code Workflows</h3>
                        <ul className="space-y-3 text-muted-theme">
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">•</span>
                                <span>Zapier, n8n, and Make.com workflow design</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">•</span>
                                <span>Multi-step automation with conditional logic</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">•</span>
                                <span>Cross-platform integrations and data sync</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">•</span>
                                <span>Error handling and retry mechanisms</span>
                            </li>
                        </ul>
                    </div>

                    {/* Custom Automation */}
                    <div className="bg-card-theme rounded-2xl p-8 border border-theme hover:shadow-lg transition-shadow duration-300">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                            <Cog className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-main-theme mb-4">Custom Automation Scripts</h3>
                        <ul className="space-y-3 text-muted-theme">
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">•</span>
                                <span>Python and Node.js automation scripts</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">•</span>
                                <span>Scheduled tasks and cron job management</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">•</span>
                                <span>Cloud Functions (AWS Lambda, Google Cloud Functions)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">•</span>
                                <span>Background job queues and processing</span>
                            </li>
                        </ul>
                    </div>

                    {/* API Integration */}
                    <div className="bg-card-theme rounded-2xl p-8 border border-theme hover:shadow-lg transition-shadow duration-300">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                            <Webhook className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-main-theme mb-4">API & Service Integrations</h3>
                        <ul className="space-y-3 text-muted-theme">
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">•</span>
                                <span>Gmail, Slack, and Teams integrations</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">•</span>
                                <span>Stripe, PayPal payment automation</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">•</span>
                                <span>Salesforce, HubSpot CRM sync</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">•</span>
                                <span>Custom API development and webhooks</span>
                            </li>
                        </ul>
                    </div>

                    {/* Admin Dashboards */}
                    <div className="bg-card-theme rounded-2xl p-8 border border-theme hover:shadow-lg transition-shadow duration-300">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                            <Workflow className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-main-theme mb-4">Real-Time Dashboards</h3>
                        <ul className="space-y-3 text-muted-theme">
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">•</span>
                                <span>React Admin panels for workflow management</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">•</span>
                                <span>Real-time monitoring and notifications</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">•</span>
                                <span>Analytics and reporting dashboards</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">•</span>
                                <span>Manual override and approval workflows</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="max-w-6xl mx-auto px-4 py-20">
                <h2 className="text-3xl md:text-4xl font-bold text-main-theme text-center mb-12">
                    Common Automation Use Cases
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-card-theme rounded-xl p-6 border border-theme">
                        <h3 className="font-bold text-main-theme mb-2">Lead Processing</h3>
                        <p className="text-muted-theme">Automatically qualify, route, and follow up with leads from multiple sources</p>
                    </div>
                    <div className="bg-card-theme rounded-xl p-6 border border-theme">
                        <h3 className="font-bold text-main-theme mb-2">Invoice & Billing</h3>
                        <p className="text-muted-theme">Generate invoices, send reminders, and process payments automatically</p>
                    </div>
                    <div className="bg-card-theme rounded-xl p-6 border border-theme">
                        <h3 className="font-bold text-main-theme mb-2">Data Synchronization</h3>
                        <p className="text-muted-theme">Keep data consistent across CRM, databases, and spreadsheets</p>
                    </div>
                    <div className="bg-card-theme rounded-xl p-6 border border-theme">
                        <h3 className="font-bold text-main-theme mb-2">Report Generation</h3>
                        <p className="text-muted-theme">Scheduled reports sent to stakeholders with real-time data</p>
                    </div>
                    <div className="bg-card-theme rounded-xl p-6 border border-theme">
                        <h3 className="font-bold text-main-theme mb-2">Customer Onboarding</h3>
                        <p className="text-muted-theme">Welcome emails, account setup, and training sequences</p>
                    </div>
                    <div className="bg-card-theme rounded-xl p-6 border border-theme">
                        <h3 className="font-bold text-main-theme mb-2">Social Media</h3>
                        <p className="text-muted-theme">Schedule posts, respond to mentions, and analyze engagement</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-4xl mx-auto px-4 py-20 text-center">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-3xl p-12 border border-theme">
                    <h2 className="text-3xl md:text-4xl font-bold text-main-theme mb-6">
                        Ready to Automate Your Workflows?
                    </h2>
                    <p className="text-lg text-muted-theme mb-8 max-w-2xl mx-auto">
                        Let's identify repetitive tasks and build intelligent automation to free up your team's time.
                    </p>
                    <Link
                        href="/Contact"
                        className="inline-block px-8 py-4 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                        Start Automating
                    </Link>
                </div>
            </section>
        </main>
    );
}
