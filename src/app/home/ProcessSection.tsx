import SectionHeader from "../../components/SectionHeader";

const steps = [
    {
        title: "Discovery & Planning",
        body: "We understand your business goals, technical requirements, product vision, target users, and operational challenges before development begins.",
    },
    {
        title: "Product Strategy & Architecture",
        body: "We define project structure, workflows, technology stack, database architecture, APIs, and development roadmap.",
    },
    {
        title: "UI/UX Design & Prototyping",
        body: "Our design process focuses on usability, accessibility, responsive layouts, and intuitive user experiences.",
    },
    {
        title: "Development & Integration",
        body: "We build frontend systems, backend APIs, AI integrations, mobile apps, automation workflows, and cloud infrastructure using scalable engineering practices.",
    },
    {
        title: "Testing & Optimization",
        body: "We perform quality assurance, security testing, performance optimization, responsiveness testing, and deployment validation.",
    },
    {
        title: "Deployment & Long-Term Support",
        body: "After launch, we continue supporting product growth through updates, monitoring, maintenance, scaling, and infrastructure improvements.",
    },
];

export default function ProcessSection() {
    return (
        <section
            id="process"
            aria-label="Our development process"
            className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme transition-colors"
        >
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="Our Development Process"
                    description="A structured engineering process used across AI development, web development, mobile app development, and SaaS product engineering projects."
                    imageSrc="/undraw_dev-environment_n5by.svg"
                    imageAlt="Software development process illustration"
                />

                <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 list-none p-0">
                    {steps.map((s, i) => (
                        <li
                            key={s.title}
                            className="bg-subtle-theme rounded-2xl p-5 border border-theme h-full"
                        >
                            <div className="flex items-start gap-3">
                                <span
                                    aria-hidden="true"
                                    className="shrink-0 w-9 h-9 rounded-lg bg-blue-600 text-white font-semibold flex items-center justify-center"
                                >
                                    {i + 1}
                                </span>
                                <div>
                                    <h3 className="text-base font-semibold text-main-theme mb-1">
                                        {s.title}
                                    </h3>
                                    <p className="text-sm text-subtitle-theme leading-relaxed">
                                        {s.body}
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
