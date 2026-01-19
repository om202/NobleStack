import SectionHeader from '../../../../components/SectionHeader';

export default function WhoWeWorkWithSection() {
    const clients = [
        {
            title: "Startups",
            description: "Building MVPs and early-stage products",
        },
        {
            title: "SaaS Companies",
            description: "Scaling platforms and user bases",
        },
        {
            title: "Enterprises",
            description: "Modernizing legacy systems",
        },
        {
            title: "Founders",
            description: "Turning ideas into market-ready products",
        },
    ];

    return (
        <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="Who We Work With"
                    description="If you need reliable full-stack product engineering, we are built for it."
                    imageSrc="/undraw_working_n9u0.svg"
                    imageAlt="Who We Work With Illustration"
                />

                <div className="grid md:grid-cols-2 gap-6">
                    {clients.map((client, index) => (
                        <div key={index} className="bg-subtle-theme rounded-2xl p-8 border border-theme">
                            <h3 className="text-xl font-bold text-main-theme mb-3">{client.title}</h3>
                            <p className="text-lg text-main-theme/80 leading-relaxed">
                                {client.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
