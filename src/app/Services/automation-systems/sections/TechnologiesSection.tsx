import SectionHeader from '../../../../components/SectionHeader';

export default function TechnologiesSection() {
    return (
        <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
            <div className="max-w-6xl mx-auto">
                <SectionHeader
                    title="Key Technologies We Use"
                    description="We use reliable, production-proven tools and technologies. Our technology choices prioritize reliability, scalability, and observability."
                    imageSrc="/undraw_dev-environment_n5by.svg"
                    imageAlt="Technologies Illustration"
                />

                <div className="bg-subtle-theme rounded-2xl p-8 md:p-12 border border-theme">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-xl font-bold text-main-theme mb-3">Workflow Automation</h3>
                            <p className="text-lg text-main-theme/80">Zapier, Make, n8n</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-main-theme mb-3">Custom Automation</h3>
                            <p className="text-lg text-main-theme/80">Python, Node.js</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-main-theme mb-3">Cloud & Jobs</h3>
                            <p className="text-lg text-main-theme/80">AWS Lambda, Google Cloud Functions, Cron Jobs</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-main-theme mb-3">Integrations</h3>
                            <p className="text-lg text-main-theme/80">Stripe, PayPal, Gmail, Slack, Teams</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-main-theme mb-3">Data Tools</h3>
                            <p className="text-lg text-main-theme/80">Airtable, Google Sheets, Databases</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-main-theme mb-3">APIs & Messaging</h3>
                            <p className="text-lg text-main-theme/80">REST APIs, Webhooks, Redis, Message Queues</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
