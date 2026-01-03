import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, GitPullRequest, Users, CheckCircle, BookOpen } from 'lucide-react';
import ServiceCard from '../../../components/ServiceCard';
import CTAButton from '../../../components/CTAButton';

export const metadata: Metadata = {
    title: "Agile, But Engineered - Noble Stack",
    description: "We move fast — but not recklessly. Our process merges the flexibility of agile with the discipline of software engineering.",
};

export const dynamic = 'force-static';

export default function AgileEngineering() {
    const capabilities = [
        {
            icon: Users,
            name: "Agile Practices",
            description: "Scrum and Kanban for flexible project management. Weekly demos and sprint reviews. Continuous feedback and iteration cycles. Adaptive planning and rapid response to change.",
        },
        {
            icon: GitPullRequest,
            name: "Code Quality & Reviews",
            description: "Rigorous code reviews for every pull request. Pair programming for complex features. Automated linting (ESLint, Prettier) and formatting. SonarQube for code quality metrics.",
        },
        {
            icon: CheckCircle,
            name: "Comprehensive Testing",
            description: "Unit testing with Jest and Vitest. Integration testing for API endpoints. End-to-end (E2E) testing with Playwright and Cypress. Test-driven development (TDD) when appropriate.",
        },
        {
            icon: BookOpen,
            name: "Clear Documentation",
            description: "Technical specifications and architecture docs. API documentation with OpenAPI/Swagger. Comprehensive changelogs and release notes. Developer onboarding guides and READMEs.",
        },
    ];

    const values = [
        { name: "Ship Fast, Ship Right", description: "Balance velocity with quality — features that work on day one" },
        { name: "Transparent Communication", description: "Regular updates, demos, and open channels with stakeholders" },
        { name: "Continuous Improvement", description: "Retrospectives, refactoring, and learning from every sprint" },
        { name: "Collaborative Mindset", description: "We work with you, not just for you — true partnership" },
        { name: "Engineering Excellence", description: "Clean code, design patterns, and architectural best practices" },
        { name: "User-Centric Focus", description: "Every decision informed by real user needs and feedback" },
    ];

    return (
        <main className="min-h-screen bg-page-theme transition-colors duration-300">
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20 sm:pt-28">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-violet-50 to-purple-50 dark:from-indigo-950/30 dark:via-violet-950/20 dark:to-purple-950/30" />
                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10">
                    <div className="w-96 h-96 bg-gradient-to-br from-indigo-400 to-violet-600 rounded-full blur-3xl" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center">
                    <div className="mb-8 flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-violet-600 rounded-3xl blur-xl opacity-50" />
                            <div className="relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-3xl flex items-center justify-center shadow-2xl">
                                <GitPullRequest className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={1.5} />
                            </div>
                        </div>
                    </div>

                    <h1 className="text-[32px] md:text-[45px] font-bold mb-4 text-main-theme bg-gradient-to-br from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                        Agile, But Engineered
                    </h1>

                    <p className="text-base text-muted-theme mb-6 max-w-3xl mx-auto">
                        Fast Iteration Meets Engineering Discipline
                    </p>

                    <p className="text-base text-muted-theme max-w-2xl mx-auto leading-relaxed">
                        We move fast — but not recklessly. Our process merges the flexibility of agile with the discipline of software engineering.
                    </p>

                    <Link href="/Services" className="inline-flex items-center gap-2 mt-12 px-6 py-3 bg-card-theme border border-theme rounded-xl hover:bg-subtle-theme transition-colors duration-200">
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to Services</span>
                    </Link>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-20">
                <h2 className="text-xl md:text-2xl font-bold text-main-theme text-center mb-16">
                    Our Development Process
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {capabilities.map((capability, index) => (
                        <ServiceCard key={index} name={capability.name} description={capability.description} icon={capability.icon} />
                    ))}
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-20">
                <h2 className="text-xl md:text-2xl font-bold text-main-theme text-center mb-12">
                    Our Core Values
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {values.map((value, index) => (
                        <div key={index} className="bg-card-theme rounded-xl p-6 border border-theme">
                            <h3 className="font-bold text-main-theme mb-2">{value.name}</h3>
                            <p className="text-muted-theme">{value.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 py-20 text-center">
                <div className="bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-950/20 dark:to-violet-950/20 rounded-3xl p-12 border border-theme">
                    <h2 className="text-2xl md:text-3xl font-bold text-main-theme mb-6">
                        Ready to Work With a True Engineering Partner?
                    </h2>
                    <p className="text-lg text-muted-theme mb-8 max-w-2xl mx-auto">
                        Let's combine agile flexibility with engineering rigor to build your product the right way.
                    </p>
                    <CTAButton variant="primary" href="https://calendar.app.google/mWmd6v421Pk66LQ26">
                        Schedule Free Consultation
                    </CTAButton>
                </div>
            </section>
        </main>
    );
}
