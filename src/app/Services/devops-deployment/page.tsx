import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Server, Rocket, Activity, Cloud } from 'lucide-react';

export const metadata: Metadata = {
    title: "Deployment & DevOps - Noble Stack",
    description: "We ensure your product runs smoothly in production with modern DevOps practices — from zero-downtime deploys to intelligent monitoring.",
};

export const dynamic = 'force-static';

export default function DevOpsDeployment() {
    return (
        <main className="min-h-screen bg-page-theme transition-colors duration-300">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-orange-950/30 dark:via-amber-950/20 dark:to-yellow-950/30" />

                {/* Icon with Gradient */}
                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10">
                    <div className="w-96 h-96 bg-gradient-to-br from-orange-400 to-amber-600 rounded-full blur-3xl" />
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center">
                    {/* Icon */}
                    <div className="mb-8 flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-amber-600 rounded-3xl blur-xl opacity-50" />
                            <div className="relative w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-orange-500 to-amber-600 rounded-3xl flex items-center justify-center shadow-2xl">
                                <Rocket className="w-12 h-12 md:w-16 md:h-16 text-white" strokeWidth={1.5} />
                            </div>
                        </div>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-main-theme bg-gradient-to-br from-orange-600 to-amber-600 bg-clip-text text-transparent">
                        Deployment & DevOps
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-muted-theme mb-8 max-w-3xl mx-auto font-medium">
                        Reliable Infrastructure for Production-Ready Applications
                    </p>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-muted-theme max-w-2xl mx-auto leading-relaxed">
                        We ensure your product runs smoothly in production with modern DevOps practices — from zero-downtime deploys to intelligent monitoring.
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
                    DevOps Services We Provide
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* CI/CD Pipelines */}
                    <div className="bg-card-theme rounded-2xl p-8 border border-theme hover:shadow-lg transition-shadow duration-300">
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6">
                            <Rocket className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-main-theme mb-4">CI/CD Automation</h3>
                        <ul className="space-y-3 text-muted-theme">
                            <li className="flex items-start">
                                <span className="text-orange-500 mr-2">•</span>
                                <span>GitHub Actions and GitLab CI pipeline design</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-orange-500 mr-2">•</span>
                                <span>Automated testing, building, and deployment</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-orange-500 mr-2">•</span>
                                <span>Blue-green and canary deployment strategies</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-orange-500 mr-2">•</span>
                                <span>Zero-downtime deployments with rollback capabilities</span>
                            </li>
                        </ul>
                    </div>

                    {/* Containerization */}
                    <div className="bg-card-theme rounded-2xl p-8 border border-theme hover:shadow-lg transition-shadow duration-300">
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6">
                            <Server className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-main-theme mb-4">Containerization & Orchestration</h3>
                        <ul className="space-y-3 text-muted-theme">
                            <li className="flex items-start">
                                <span className="text-orange-500 mr-2">•</span>
                                <span>Docker containerization for consistency</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-orange-500 mr-2">•</span>
                                <span>Kubernetes cluster management and scaling</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-orange-500 mr-2">•</span>
                                <span>Container registries (Docker Hub, ECR, GCR)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-orange-500 mr-2">•</span>
                                <span>Image optimization and security scanning</span>
                            </li>
                        </ul>
                    </div>

                    {/* Cloud Infrastructure */}
                    <div className="bg-card-theme rounded-2xl p-8 border border-theme hover:shadow-lg transition-shadow duration-300">
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6">
                            <Cloud className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-main-theme mb-4">Cloud Infrastructure Setup</h3>
                        <ul className="space-y-3 text-muted-theme">
                            <li className="flex items-start">
                                <span className="text-orange-500 mr-2">•</span>
                                <span>AWS, GCP, and Firebase deployment</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-orange-500 mr-2">•</span>
                                <span>Infrastructure as Code (Terraform, CloudFormation)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-orange-500 mr-2">•</span>
                                <span>Auto-scaling and load balancing configuration</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-orange-500 mr-2">•</span>
                                <span>CDN setup for global content delivery</span>
                            </li>
                        </ul>
                    </div>

                    {/* Monitoring & Logging */}
                    <div className="bg-card-theme rounded-2xl p-8 border border-theme hover:shadow-lg transition-shadow duration-300">
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6">
                            <Activity className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-main-theme mb-4">Monitoring & Observability</h3>
                        <ul className="space-y-3 text-muted-theme">
                            <li className="flex items-start">
                                <span className="text-orange-500 mr-2">•</span>
                                <span>Datadog, New Relic real-time monitoring</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-orange-500 mr-2">•</span>
                                <span>Centralized logging with ELK stack</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-orange-500 mr-2">•</span>
                                <span>Alert systems for critical issues</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-orange-500 mr-2">•</span>
                                <span>Performance metrics and APM integration</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Best Practices Section */}
            <section className="max-w-6xl mx-auto px-4 py-20">
                <h2 className="text-3xl md:text-4xl font-bold text-main-theme text-center mb-12">
                    Our DevOps Best Practices
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-card-theme rounded-xl p-6 border border-theme">
                        <h3 className="font-bold text-main-theme mb-2">Infrastructure as Code</h3>
                        <p className="text-muted-theme">Version-controlled infrastructure for reproducible environments</p>
                    </div>
                    <div className="bg-card-theme rounded-xl p-6 border border-theme">
                        <h3 className="font-bold text-main-theme mb-2">Automated Testing</h3>
                        <p className="text-muted-theme">Catch issues early with comprehensive test suites in CI/CD</p>
                    </div>
                    <div className="bg-card-theme rounded-xl p-6 border border-theme">
                        <h3 className="font-bold text-main-theme mb-2">Security First</h3>
                        <p className="text-muted-theme">Security scanning, secrets management, and compliance checks</p>
                    </div>
                    <div className="bg-card-theme rounded-xl p-6 border border-theme">
                        <h3 className="font-bold text-main-theme mb-2">Cost Optimization</h3>
                        <p className="text-muted-theme">Right-sized infrastructure to reduce cloud spending</p>
                    </div>
                    <div className="bg-card-theme rounded-xl p-6 border border-theme">
                        <h3 className="font-bold text-main-theme mb-2">Disaster Recovery</h3>
                        <p className="text-muted-theme">Backup strategies and incident response planning</p>
                    </div>
                    <div className="bg-card-theme rounded-xl p-6 border border-theme">
                        <h3 className="font-bold text-main-theme mb-2">Documentation</h3>
                        <p className="text-muted-theme">Clear runbooks and deployment procedures for your team</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-4xl mx-auto px-4 py-20 text-center">
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 rounded-3xl p-12 border border-theme">
                    <h2 className="text-3xl md:text-4xl font-bold text-main-theme mb-6">
                        Ready for Production-Grade Infrastructure?
                    </h2>
                    <p className="text-lg text-muted-theme mb-8 max-w-2xl mx-auto">
                        Let's build a deployment pipeline and infrastructure that scales with your success.
                    </p>
                    <Link
                        href="/Contact"
                        className="inline-block px-8 py-4 bg-gradient-to-br from-orange-500 to-amber-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                        Deploy with Confidence
                    </Link>
                </div>
            </section>
        </main>
    );
}
