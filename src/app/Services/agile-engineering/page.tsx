import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, GitPullRequest, Users, CheckCircle, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
    title: "Agile, But Engineered - Noble Stack",
    description: "We move fast — but not recklessly. Our process merges the flexibility of agile with the discipline of software engineering.",
};

export const dynamic = 'force-static';

export default function AgileEngineering() {
    return (
        <main className="min-h-screen bg-page-theme transition-colors duration-300">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20 sm:pt-28">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-violet-50 to-purple-50 dark:from-indigo-950/30 dark:via-violet-950/20 dark:to-purple-950/30" />

                {/* Icon with Gradient */}
                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10">
                    <div className="w-96 h-96 bg-gradient-to-br from-indigo-400 to-violet-600 rounded-full blur-3xl" />
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center">
                    {/* Icon */}
                    <div className="mb-8 flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-violet-600 rounded-3xl blur-xl opacity-50" />
                            <div className="relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-3xl flex items-center justify-center shadow-2xl">
                                <GitPullRequest className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={1.5} />
                            </div>
                        </div>
                    </div>

                    {/* Title */}
                    <h1 className="text-[32px] md:text-[45px] font-bold mb-4 text-main-theme bg-gradient-to-br from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                        Agile, But Engineered
                    </h1>

                    {/* Subtitle */}
                    <p className="text-base text-muted-theme mb-6 max-w-3xl mx-auto">
                        Fast Iteration Meets Engineering Discipline
                    </p>

                    {/* Description */}
                    <p className="text-base text-muted-theme max-w-2xl mx-auto leading-relaxed">
                        We move fast — but not recklessly. Our process merges the flexibility of agile with the discipline of software engineering.
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
                <h2 className="text-xl md:text-2xl font-bold text-main-theme text-center mb-16">
                    Our Development Process
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Agile Methodologies */}
                    <div className="bg-card-theme rounded-2xl p-8 border border-theme hover:shadow-lg transition-shadow duration-300">
                        <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center mb-6">
                            <Users className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-main-theme mb-4">Agile Practices</h3>
                        <ul className="space-y-3 text-muted-theme">
                            <li className="flex items-start">
                                <span className="text-indigo-500 mr-2">•</span>
                                <span>Scrum and Kanban for flexible project management</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-500 mr-2">•</span>
                                <span>Weekly demos and sprint reviews</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-500 mr-2">•</span>
                                <span>Continuous feedback and iteration cycles</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-500 mr-2">•</span>
                                <span>Adaptive planning and rapid response to change</span>
                            </li>
                        </ul>
                    </div>

                    {/* Code Quality */}
                    <div className="bg-card-theme rounded-2xl p-8 border border-theme hover:shadow-lg transition-shadow duration-300">
                        <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center mb-6">
                            <GitPullRequest className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-main-theme mb-4">Code Quality & Reviews</h3>
                        <ul className="space-y-3 text-muted-theme">
                            <li className="flex items-start">
                                <span className="text-indigo-500 mr-2">•</span>
                                <span>Rigorous code reviews for every pull request</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-500 mr-2">•</span>
                                <span>Pair programming for complex features</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-500 mr-2">•</span>
                                <span>Automated linting (ESLint, Prettier) and formatting</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-500 mr-2">•</span>
                                <span>SonarQube for code quality metrics</span>
                            </li>
                        </ul>
                    </div>

                    {/* Testing */}
                    <div className="bg-card-theme rounded-2xl p-8 border border-theme hover:shadow-lg transition-shadow duration-300">
                        <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center mb-6">
                            <CheckCircle className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-main-theme mb-4">Comprehensive Testing</h3>
                        <ul className="space-y-3 text-muted-theme">
                            <li className="flex items-start">
                                <span className="text-indigo-500 mr-2">•</span>
                                <span>Unit testing with Jest and Vitest</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-500 mr-2">•</span>
                                <span>Integration testing for API endpoints</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-500 mr-2">•</span>
                                <span>End-to-end (E2E) testing with Playwright and Cypress</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-500 mr-2">•</span>
                                <span>Test-driven development (TDD) when appropriate</span>
                            </li>
                        </ul>
                    </div>

                    {/* Documentation */}
                    <div className="bg-card-theme rounded-2xl p-8 border border-theme hover:shadow-lg transition-shadow duration-300">
                        <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center mb-6">
                            <BookOpen className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-main-theme mb-4">Clear Documentation</h3>
                        <ul className="space-y-3 text-muted-theme">
                            <li className="flex items-start">
                                <span className="text-indigo-500 mr-2">•</span>
                                <span>Technical specifications and architecture docs</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-500 mr-2">•</span>
                                <span>API documentation with OpenAPI/Swagger</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-500 mr-2">•</span>
                                <span>Comprehensive changelogs and release notes</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-500 mr-2">•</span>
                                <span>Developer onboarding guides and READMEs</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Development Values */}
            <section className="max-w-6xl mx-auto px-4 py-20">
                <h2 className="text-xl md:text-2xl font-bold text-main-theme text-center mb-12">
                    Our Core Values
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-card-theme rounded-xl p-6 border border-theme">
                        <h3 className="font-bold text-main-theme mb-2">Ship Fast, Ship Right</h3>
                        <p className="text-muted-theme">Balance velocity with quality — features that work on day one</p>
                    </div>
                    <div className="bg-card-theme rounded-xl p-6 border border-theme">
                        <h3 className="font-bold text-main-theme mb-2">Transparent Communication</h3>
                        <p className="text-muted-theme">Regular updates, demos, and open channels with stakeholders</p>
                    </div>
                    <div className="bg-card-theme rounded-xl p-6 border border-theme">
                        <h3 className="font-bold text-main-theme mb-2">Continuous Improvement</h3>
                        <p className="text-muted-theme">Retrospectives, refactoring, and learning from every sprint</p>
                    </div>
                    <div className="bg-card-theme rounded-xl p-6 border border-theme">
                        <h3 className="font-bold text-main-theme mb-2">Collaborative Mindset</h3>
                        <p className="text-muted-theme">We work with you, not just for you — true partnership</p>
                    </div>
                    <div className="bg-card-theme rounded-xl p-6 border border-theme">
                        <h3 className="font-bold text-main-theme mb-2">Engineering Excellence</h3>
                        <p className="text-muted-theme">Clean code, design patterns, and architectural best practices</p>
                    </div>
                    <div className="bg-card-theme rounded-xl p-6 border border-theme">
                        <h3 className="font-bold text-main-theme mb-2">User-Centric Focus</h3>
                        <p className="text-muted-theme">Every decision informed by real user needs and feedback</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-4xl mx-auto px-4 py-20 text-center">
                <div className="bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-950/20 dark:to-violet-950/20 rounded-3xl p-12 border border-theme">
                    <h2 className="text-2xl md:text-3xl font-bold text-main-theme mb-6">
                        Ready to Work With a True Engineering Partner?
                    </h2>
                    <p className="text-lg text-muted-theme mb-8 max-w-2xl mx-auto">
                        Let's combine agile flexibility with engineering rigor to build your product the right way.
                    </p>
                    <Link
                        href="/Contact"
                        className="inline-block px-8 py-4 bg-gradient-to-br from-indigo-500 to-violet-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                        Start Your Project
                    </Link>
                </div>
            </section>
        </main>
    );
}
