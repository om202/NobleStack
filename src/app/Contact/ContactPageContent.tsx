"use client";

import {
    Send,
    Mail,
    Phone,
    MapPin,
    Clock,
    MessageSquare,
    Loader2,
    CheckCircle,
    AlertCircle,
    Linkedin,
    Facebook,
    Instagram,
    X,
    ExternalLink,
} from "lucide-react";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { useState } from "react";
import CTAButton from "../../components/CTAButton";
import ServiceCard from "../../components/ServiceCard";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { getDeviceId } from "@/lib/device";

interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    company: string;
    subject: string;
    message: string;
}

export default function ContactPageContent() {
    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const [showReviewDialog, setShowReviewDialog] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");
        setErrorMessage("");

        try {
            await addDoc(collection(db, "get_in_touch"), {
                ...formData,
                submittedAt: serverTimestamp(),
                deviceId: getDeviceId(),
            });

            setSubmitStatus("success");
            setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                subject: "",
                message: ""
            });
        } catch (error: unknown) {
            console.error("Error submitting contact form:", error);
            setSubmitStatus("error");
            const msg = error instanceof Error ? error.message : "Something went wrong. Please try again.";
            setErrorMessage(msg);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/* Hero Section */}
            <main className="min-h-screen bg-page-theme transition-colors duration-300">
                <section className="max-w-6xl mx-auto px-4 pt-32 pb-16 sm:pt-40 sm:pb-20">
                    {/* Header */}
                    <header className="text-center mb-12">
                        <h1 className="text-2xl md:text-3xl font-bold mb-6 leading-tight text-main-theme">
                            Get In Touch
                        </h1>

                        <blockquote className="text-base text-muted-theme mb-8 max-w-3xl mx-auto">
                            &ldquo;Ready to transform your ideas into intelligent digital solutions?
                            Let&apos;s discuss your project and explore how we can help you succeed.&rdquo;
                        </blockquote>
                    </header>

                    {/* Contact Form */}
                    <section id="contact-form" aria-label="Contact Form" className="bg-card-theme rounded-2xl p-6 sm:p-8 shadow-sm border border-theme">
                        <div className="text-center mb-12">
                            <div className="flex items-center justify-center gap-2 mb-2">
                                <MessageSquare className="w-6 h-6 text-blue-600" />
                                <h3 className="text-lg font-semibold text-main-theme">
                                    Send us a Message
                                </h3>
                            </div>
                        </div>

                        {submitStatus === "success" ? (
                            <div className="text-center py-12">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                                    <CheckCircle className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-main-theme mb-4">Message Sent!</h3>
                                <p className="text-muted-theme mb-8">
                                    Thank you for reaching out. We&apos;ve received your message and will be in touch shortly.
                                </p>
                                <CTAButton
                                    type="button"
                                    variant="primary"
                                    onClick={() => setSubmitStatus("idle")}
                                    className="mx-auto"
                                >
                                    Send Another Message
                                </CTAButton>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
                                {submitStatus === "error" && (
                                    <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3 text-red-700">
                                        <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold">Submission Failed</p>
                                            <p className="text-sm">{errorMessage}</p>
                                        </div>
                                    </div>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                    <div>
                                        <label className="block text-md-sm font-semibold text-muted-theme mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-subtle-theme border border-theme rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-main-theme placeholder:text-muted-theme/50"
                                            placeholder="Your full name"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-md-sm font-semibold text-muted-theme mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-subtle-theme border border-theme rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-main-theme placeholder:text-muted-theme/50"
                                            placeholder="your@email.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-md-sm font-semibold text-muted-theme mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-subtle-theme border border-theme rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-main-theme placeholder:text-muted-theme/50"
                                            placeholder="+977 (XXX) XXX-XXXX"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-md-sm font-semibold text-muted-theme mb-2">
                                            Company/Organization
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-subtle-theme border border-theme rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-main-theme placeholder:text-muted-theme/50"
                                            placeholder="Your company name"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-md-sm font-semibold text-muted-theme mb-2">
                                        Subject *
                                    </label>
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-subtle-theme border border-theme rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-main-theme"
                                        required
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="general-inquiry">General Inquiry</option>
                                        <option value="project-quote">Project Quote</option>
                                        <option value="partnership">Partnership Opportunity</option>
                                        <option value="support">Technical Support</option>
                                        <option value="career">Career Opportunities</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-md-sm font-semibold text-muted-theme mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={5}
                                        className="w-full px-4 py-3 bg-subtle-theme border border-theme rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-main-theme placeholder:text-muted-theme/50"
                                        placeholder="Tell us about your project, requirements, or any questions you have. What excites you about working with Noble Stack?"
                                        required
                                    ></textarea>
                                </div>

                                <div className="text-center">
                                    <CTAButton
                                        type="submit"
                                        variant="primary"
                                        icon={isSubmitting ? Loader2 : Send}
                                        className="mx-auto"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? "Sending..." : "Send Message"}
                                    </CTAButton>
                                    <p className="text-md-sm text-muted-theme mt-4">
                                        We&apos;ll get back to you within 24 hours
                                    </p>
                                </div>
                            </form>
                        )}
                    </section>

                    {/* Contact Information Cards */}
                    <section id="contact-info" aria-label="Contact Information" className="mt-16">
                        <div className="text-center mb-12">
                            <h3 className="text-lg font-semibold text-main-theme mb-3">
                                Ready to Start Your Project?
                            </h3>
                            <p className="text-base text-muted-theme max-w-2xl mx-auto">
                                Choose your preferred way to connect with us.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <ServiceCard
                                name="Email"
                                description="info@noblestack.io"
                                icon={Mail}
                                copyable={true}
                            />
                            <ServiceCard
                                name="Phone"
                                description="+977 985-1411602"
                                icon={Phone}
                                copyable={true}
                            />
                            <a
                                href="https://maps.app.goo.gl/FEdRQH1LSC6cRjMfA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <ServiceCard
                                    name="Location"
                                    description="Saraswati Marg, Kathmandu 44600, Nepal"
                                    icon={MapPin}
                                    copyable={true}
                                />
                            </a>
                            <ServiceCard
                                name="Hours"
                                description="Sun - Fri: 9AM - 5PM, Saturday (Closed)"
                                icon={Clock}
                            />
                        </div>

                        <div className="text-center mt-16 mb-12">
                            <h3 className="text-lg font-semibold text-main-theme mb-3">
                                Connect on Social Media
                            </h3>
                            <p className="text-base text-muted-theme max-w-2xl mx-auto">
                                Stay updated with our latest news and announcements.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <a
                                href="https://www.linkedin.com/company/noble-stack-pvt-ltd"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <ServiceCard
                                    name="LinkedIn"
                                    description="Follow us on LinkedIn"
                                    icon={Linkedin}
                                />
                            </a>
                            <a
                                href="https://www.facebook.com/people/Noble-Stack-Pvt-Ltd/61577564326108/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <ServiceCard
                                    name="Facebook"
                                    description="Like our Page"
                                    icon={Facebook}
                                />
                            </a>
                            <a
                                href="https://www.instagram.com/noble_stack_/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <ServiceCard
                                    name="Instagram"
                                    description="Follow us on Instagram"
                                    icon={Instagram}
                                />
                            </a>
                            <a
                                href="https://x.com/NobleStackNepal"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <ServiceCard
                                    name="X (Twitter)"
                                    description="Follow us on X"
                                    icon={FaXTwitter}
                                />
                            </a>
                            <a
                                href="https://www.youtube.com/@NobleStack"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <ServiceCard
                                    name="YouTube"
                                    description="Subscribe to our Channel"
                                    icon={FaYoutube}
                                />
                            </a>
                            <div className="block cursor-pointer" onClick={() => setShowReviewDialog(true)}>
                                <ServiceCard
                                    name="Google Review"
                                    description="Scan to review us on Google"
                                    imageSrc="/google.png"
                                    imageAlt="Google Logo"
                                />
                            </div>
                        </div>

                    </section>
                </section>

                {/* Google Review Dialog */}
                {showReviewDialog && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all duration-300">
                        <div className="bg-card-theme border border-theme rounded-3xl p-8 max-w-md w-full shadow-2xl relative animate-in fade-in zoom-in duration-300">
                            <button
                                onClick={() => setShowReviewDialog(false)}
                                className="absolute top-4 right-4 p-2 hover:bg-subtle-theme rounded-full transition-colors duration-200 text-muted-theme"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-main-theme mb-4">
                                    We&apos;d love your feedback!
                                </h3>
                                <p className="text-muted-theme mb-8">
                                    Your support means the world to us. If you enjoyed our services, please take a moment to leave us a review on Google.
                                </p>

                                <div className="bg-white p-4 rounded-2xl inline-block mb-8 shadow-inner border border-theme">
                                    <img
                                        src="/google-qr.png"
                                        alt="Google QR Code"
                                        className="w-48 h-48 md:w-64 md:h-64 object-contain"
                                    />
                                </div>

                                <div className="space-y-4">
                                    <p className="text-sm font-medium text-muted-theme">
                                        Scan the QR code with your phone camera
                                    </p>

                                    <div className="flex flex-col gap-3">
                                        <a
                                            href="https://g.page/r/CZN2-T24M49DEBI/review"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full"
                                        >
                                            <CTAButton
                                                variant="primary"
                                                className="w-full"
                                                icon={ExternalLink}
                                            >
                                                Leave a Review Online
                                            </CTAButton>
                                        </a>

                                        <CTAButton
                                            variant="secondary"
                                            className="w-full"
                                            onClick={() => setShowReviewDialog(false)}
                                        >
                                            I&apos;ll do it later
                                        </CTAButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <style jsx>{`
          @keyframes futureGlow {
            0% {
              background-position: 0% 50%;
            }
            25% {
              background-position: 50% 0%;
            }
            50% {
              background-position: 100% 50%;
            }
            75% {
              background-position: 50% 100%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          .future-text {
            background: linear-gradient(135deg, 
              #10b981, #059669, #0d9488, #0f766e, 
              #0891b2, #0e7490, #0284c7, #0369a1, 
              #10b981);
            background-size: 400% 400%;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: futureGlow 2.5s ease-in-out infinite;
            font-weight: 800;
            letter-spacing: -0.02em;
          }
        `}</style>
            </main>
        </>
    );
} 
