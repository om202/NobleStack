import SectionHeader from '../../../../components/SectionHeader';
import { TrendingDown, Zap, DollarSign } from 'lucide-react';

export default function ImpactSection() {
    const impacts = [
        {
            icon: TrendingDown,
            stat: "99.9%",
            title: "Reduced deployment downtime",
            description: "Through CI/CD automation and zero-downtime deployment strategies.",
        },
        {
            icon: Zap,
            stat: "40%",
            title: "Improved availability and performance",
            description: "Using Kubernetes auto-scaling and observability best practices.",
        },
        {
            icon: DollarSign,
            stat: "25%",
            title: "Lower cloud infrastructure costs",
            description: "Through optimization and right-sizing of resources.",
        },
    ];

    return (
        <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="Real-World DevOps Impact"
                    description="We focus on measurable outcomes, not just infrastructure implementation."
                    imageSrc="/undraw_engineering-team_13ax.svg"
                    imageAlt="Impact Illustration"
                />

                <div className="grid md:grid-cols-3 gap-6">
                    {impacts.map((item, index) => (
                        <div key={index} className="bg-subtle-theme rounded-2xl p-8 border border-theme text-center">
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-500/10 mb-4">
                                <item.icon className="w-7 h-7 text-blue-500" />
                            </div>
                            <p className="text-3xl font-bold text-main-theme mb-2">{item.stat}</p>
                            <h3 className="text-lg font-bold text-main-theme mb-2">{item.title}</h3>
                            <p className="text-main-theme/80">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
