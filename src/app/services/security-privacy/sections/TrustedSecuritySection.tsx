import SectionHeader from '../../../../components/SectionHeader';

export default function TrustedSecuritySection() {
    return (
        <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="Trusted Security, Privacy, and Reliability Built for Production"
                    description="Noble Stack provides end-to-end web application security services for startups, scale-ups, and enterprises. Our security-first approach ensures your systems are designed to meet modern threat models, global compliance requirements, and enterprise reliability standards. From secure authentication to encrypted data pipelines and privacy compliance, we help organizations build applications that users and regulators trust."
                    imageSrc="/undraw_server-cluster_7ugi.svg"
                    imageAlt="Trusted Security Illustration"
                />
            </div>
        </section>
    );
}
