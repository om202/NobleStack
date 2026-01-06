"use client";

import {
    Sparkles,
    Wand2,
    Image as ImageIcon,
    Zap,
    Download,
    Globe,
    MessageSquare,
    Coins,
    Shield,
    Users,
    FileText,
    TrendingUp,
} from "lucide-react";
import Image from "next/image";
import CTAButton from "../../components/CTAButton";
import ServiceCard from "../../components/ServiceCard";

export default function ProductsPageContent() {
    return (
        <main className="min-h-screen bg-page-theme transition-colors duration-300">
            <section className="max-w-6xl mx-auto px-3 pt-28 pb-12 sm:px-4 sm:pt-32 sm:pb-16 md:pt-40 md:pb-20">
                <h1 className="sr-only">Our Portfolio</h1>

                {/* Page Header */}
                <header className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-main-theme">
                        Our Portfolio
                    </h2>
                    <p className="text-base text-muted-theme max-w-3xl mx-auto">
                        Real products we've built and launched. These showcase our capabilities in AI development,
                        web applications, mobile apps (iOS/Android), and bringing ideas to market.
                    </p>
                </header>
                {/* Vibe AI Section */}
                <section id="vibe-ai" aria-label="Vibe AI Photo Editor" className="bg-card-theme rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm border border-theme mb-8">
                    <header className="text-center mb-12">
                        <div className="flex flex-col items-center justify-center gap-4 mb-6">
                            <Image
                                src="/vibe.png"
                                alt="Vibe AI Photo Editor Logo"
                                width={112}
                                height={112}
                                className="rounded-2xl shadow-lg"
                            />
                            <h2 className="text-xl md:text-2xl font-bold leading-tight text-main-theme">
                                Vibe AI Photo Editor
                            </h2>
                        </div>
                        {/* ... Rest of Vibe AI section ... (Using brief content for this tool call, but full content will be used in real edit) */}
                        <div className="space-y-4 mb-12 max-w-4xl mx-auto">
                            <p className="text-base text-muted-theme leading-relaxed">
                                Create stunning profile pictures and edit photos with AI-powered tools. Remove backgrounds instantly, enhance images, and transform your photos with professional filters and AI magic.
                            </p>
                        </div>

                        {/* Screenshot */}
                        <div className="mb-12 flex justify-center">
                            <figure className="rounded-[2rem] border border-theme shadow-lg overflow-hidden max-w-[300px]">
                                <Image
                                    src="/vibe_screen.png"
                                    alt="Vibe AI Photo Editor interface"
                                    width={300}
                                    height={650}
                                    className="w-full h-auto"
                                    priority
                                />
                            </figure>
                        </div>

                        {/* App Store Button */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href="https://apps.apple.com/us/app/ai-photo-editor-vibe/id6752835683"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block"
                            >
                                <CTAButton variant="primary" icon={Download} className="w-full sm:w-auto text-lg px-10 py-5">
                                    Download on App Store
                                </CTAButton>
                            </a>
                        </div>
                    </header>

                    {/* Key Features Section */}
                    <div className="mb-12">
                        <h3 className="text-lg md:text-xl font-bold text-center text-main-theme mb-12">
                            Key Features
                        </h3>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <ServiceCard
                                name="AI Background Removal"
                                description="Remove backgrounds instantly with precision AI technology for perfect profile pictures."
                                icon={Wand2}
                            />
                            <ServiceCard
                                name="Profile Picture Creator"
                                description="Create stunning profile pictures with AI-powered editing and professional filters."
                                icon={ImageIcon}
                            />
                            <ServiceCard
                                name="Smart Enhancement"
                                description="Automatically enhance colors, lighting, and details with advanced AI."
                                icon={Sparkles}
                            />
                            <ServiceCard
                                name="Secure & Private"
                                description="Sign in with Google or Apple. Your images are encrypted and securely stored."
                                icon={Zap}
                            />
                        </div>
                    </div>
                </section>

                {/* Create Profile Pic Web Section */}
                <section id="create-profile-pic" aria-label="Create Profile Pic" className="bg-page-theme rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm border border-theme mb-8">
                    <header className="text-center mb-12">
                        <div className="flex flex-col items-center justify-center gap-4 mb-6">
                            <Image
                                src="/create_profile_pic_icon.png"
                                alt="Create Profile Pic Logo"
                                width={112}
                                height={112}
                                className="rounded-2xl shadow-lg"
                            />
                            <h2 className="text-xl md:text-2xl font-bold leading-tight text-main-theme">
                                Create Profile Pic
                            </h2>
                        </div>

                        <div className="space-y-4 mb-12 max-w-4xl mx-auto">
                            <p className="text-base text-muted-theme leading-relaxed">
                                The web-based solution for professional profile pictures. Powered by Google&apos;s Nano Banana AI, just describe the changes you want in plain English. No subscription required.
                            </p>
                        </div>

                        {/* Screenshot */}
                        <div className="mb-12 flex justify-center">
                            <figure className="rounded-xl border border-theme shadow-lg overflow-hidden max-w-4xl w-full">
                                <Image
                                    src="/cpp_screenshot.png"
                                    alt="Create Profile Pic Interface"
                                    width={1200}
                                    height={675}
                                    className="w-full h-auto"
                                />
                            </figure>
                        </div>

                        {/* Web Link Button */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href="https://createprofilepic.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block"
                            >
                                <CTAButton variant="primary" icon={Globe} className="w-full sm:w-auto text-lg px-10 py-5">
                                    Try on Web
                                </CTAButton>
                            </a>
                        </div>
                    </header>

                    {/* Web Features Section */}
                    <div className="mb-12">
                        <h3 className="text-lg md:text-xl font-bold text-center text-main-theme mb-12">
                            Web Features
                        </h3>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <ServiceCard
                                name="Text-to-Edit"
                                description="Describe changes in plain English. AI understands your commands instantly."
                                icon={MessageSquare}
                            />
                            <ServiceCard
                                name="No Subscriptions"
                                description="Pay only for what you use. Start with free tokens and top up as needed."
                                icon={Coins}
                            />
                            <ServiceCard
                                name="Studio Quality"
                                description="Professional lighting and effects automatically applied to your photos."
                                icon={Zap}
                            />
                            <ServiceCard
                                name="Secure Storage"
                                description="Enterprise-grade security ensures your photos and projects are always safe."
                                icon={Shield}
                            />
                        </div>
                    </div>
                </section>

                {/* Loopn Section */}
                <section id="loopn" aria-label="Loopn" className="bg-card-theme rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm border border-theme mb-8">
                    <header className="text-center mb-12">
                        <div className="flex flex-col items-center justify-center gap-4 mb-6">
                            <Image
                                src="/loopn_logo.png"
                                alt="Loopn Logo"
                                width={112}
                                height={112}
                            />
                            <h2 className="text-xl md:text-2xl font-bold leading-tight text-main-theme">
                                Loopn
                            </h2>
                        </div>

                        <div className="space-y-4 mb-12 max-w-4xl mx-auto">
                            <p className="text-base text-muted-theme leading-relaxed">
                                Professional Networking & Career Matching using AI. Upload your resume and get matched instantly with compatible professionals for meaningful connections.
                            </p>
                        </div>

                        {/* Screenshot */}
                        <div className="mb-12 flex justify-center">
                            <figure className="rounded-xl border border-theme shadow-lg overflow-hidden max-w-4xl w-full">
                                <Image
                                    src="/loopn_screenshot.png"
                                    alt="Loopn Interface"
                                    width={1200}
                                    height={675}
                                    className="w-full h-auto"
                                />
                            </figure>
                        </div>

                        {/* Loopn Link Button */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href="https://www.loopn.io/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block"
                            >
                                <CTAButton variant="primary" icon={Globe} className="w-full sm:w-auto text-lg px-10 py-5">
                                    Visit Loopn
                                </CTAButton>
                            </a>
                        </div>
                    </header>

                    {/* Loopn Features Section */}
                    <div className="mb-12">
                        <h3 className="text-lg md:text-xl font-bold text-center text-main-theme mb-12">
                            Why Loopn?
                        </h3>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <ServiceCard
                                name="Resume Matching"
                                description="Upload your resume to find professionals with compatible skills and goals."
                                icon={FileText}
                            />
                            <ServiceCard
                                name="AI Connections"
                                description="Smart algorithms connect you with the right people for your career path."
                                icon={Users}
                            />
                            <ServiceCard
                                name="Career Growth"
                                description="Build meaningful professional relationships that help you advance."
                                icon={TrendingUp}
                            />
                            <ServiceCard
                                name="Instant Match"
                                description="Skip the search. Get instantly matched with professionals who match your profile."
                                icon={Zap}
                            />
                        </div>
                    </div>
                </section>

                {/* Auto Captions Section */}
                <section id="auto-captions" aria-label="Auto Captions" className="bg-page-theme rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm border border-theme mb-8">
                    <header className="text-center mb-12">
                        <div className="flex flex-col items-center justify-center gap-4 mb-6">
                            <Image
                                src="/autosubai_icon.png"
                                alt="Auto Captions Logo"
                                width={112}
                                height={112}
                                className="rounded-2xl shadow-lg"
                            />
                            <h2 className="text-xl md:text-2xl font-bold leading-tight text-main-theme">
                                Auto Captions
                            </h2>
                        </div>

                        <div className="space-y-4 mb-12 max-w-4xl mx-auto">
                            <p className="text-base text-muted-theme leading-relaxed">
                                Automated subtitle generator for any language. Instantly translate or generate captions for native voice with high accuracy.
                            </p>
                        </div>

                        {/* Screenshot */}
                        <div className="mb-12 flex justify-center">
                            <figure className="rounded-[2rem] border border-theme shadow-lg overflow-hidden max-w-[300px]">
                                <Image
                                    src="/autosubai_screen.png"
                                    alt="Auto Captions Interface"
                                    width={300}
                                    height={650}
                                    className="w-full h-auto"
                                />
                            </figure>
                        </div>

                        {/* Coming Soon Button */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <div className="inline-block">
                                <CTAButton variant="secondary" className="w-full sm:w-auto text-lg px-10 py-5 cursor-not-allowed opacity-80">
                                    Coming Soon
                                </CTAButton>
                            </div>
                        </div>
                    </header>

                    {/* Auto Captions Features Section */}
                    <div className="mb-12">
                        <h3 className="text-lg md:text-xl font-bold text-center text-main-theme mb-12">
                            Coming Features
                        </h3>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <ServiceCard
                                name="Multi-Language Support"
                                description="Generate subtitles in any language automatically with AI precision."
                                icon={Globe}
                            />
                            <ServiceCard
                                name="Native Voice"
                                description="Translate and generate captions that perfectly match native speech patterns."
                                icon={MessageSquare}
                            />
                            <ServiceCard
                                name="Auto Sync"
                                description="Perfectly synchronized captions that match your video's timing."
                                icon={Zap}
                            />
                            <ServiceCard
                                name="Easy Export"
                                description="Export to all popular subtitle formats compatible with major video editors."
                                icon={Download}
                            />
                        </div>
                    </div>
                </section>
            </section>
        </main>
    );
}
