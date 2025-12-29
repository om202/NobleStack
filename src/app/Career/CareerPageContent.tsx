"use client";

import { Send, Upload, FileText, Loader2, CheckCircle, AlertCircle, ArrowRight, MapPin, Clock, Briefcase } from "lucide-react";
import { useState } from "react";
import CTAButton from "../../components/CTAButton";
import { db, storage } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { getDeviceId } from "@/lib/device";

interface FormData {
    name: string;
    email: string;
    phone: string;
    position: string;
    experience: string;
    resume: File | null;
    message: string;
}

export default function CareerPageContent() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        resume: null,
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            // Validation for file type
            const allowedExtensions = /\.(pdf|doc|docx|rtf|txt)$/i;
            if (!allowedExtensions.test(file.name)) {
                alert("Please upload a valid document type (PDF, DOC, DOCX, RTF, TXT)");
                e.target.value = "";
                return;
            }

            // Validation for file size (5MB)
            if (file.size > 5 * 1024 * 1024) {
                alert("File size must be less than 5MB");
                e.target.value = "";
                return;
            }

            setFormData({
                ...formData,
                resume: file,
            });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");
        setErrorMessage("");

        try {
            let resumeUrl = "";

            if (formData.resume) {
                // Create a unique file name to avoid overwrites
                const fileName = `${Date.now()}_${formData.resume.name}`;
                const storageRef = ref(storage, `resumes/${fileName}`);

                // Upload file
                await uploadBytes(storageRef, formData.resume);
                // Note: We cannot getDownloadURL() because we disabled public reads for security.
                // We will store the path instead, so you can find it in the Firebase Console.
                resumeUrl = storageRef.fullPath;
            } else {
                throw new Error("Resume is required.");
            }

            // Save to Firestore
            await addDoc(collection(db, "applications"), {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                position: formData.position,
                experience: formData.experience,
                message: formData.message,
                resumePath: resumeUrl, // Storing path strictly
                submittedAt: serverTimestamp(),
                deviceId: getDeviceId(),
            });

            setSubmitStatus("success");
            setFormData({
                name: "",
                email: "",
                phone: "",
                position: "",
                experience: "",
                resume: null,
                message: "",
            });
        } catch (error: unknown) {
            console.error("Error submitting application:", error);
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
            <main className="py-12 px-4 min-h-screen bg-noble-dark">
                <section className="max-w-6xl mx-auto px-4 pt-24 pb-12 sm:pt-32 sm:pb-16">
                    {/* Header */}
                    <header className="text-center mb-12">
                        <h1 className="text-2xl md:text-3xl font-bold mb-6 leading-tight text-main-theme">
                            Join Our Team
                        </h1>

                        <blockquote className="text-base text-muted-theme mb-8 max-w-3xl mx-auto">
                            &ldquo;Be part of a movement to bring cutting-edge technology to
                            Nepal. Join our team of passionate developers, designers, and
                            innovators building the future.&rdquo;
                        </blockquote>
                    </header>

                    {/* Current Openings */}
                    <div className="mb-16 space-y-8">
                        <div className="grid grid-cols-1 gap-8">
                            {[
                                {
                                    title: "SEO Specialist Intern",
                                    value: "seo-specialist",
                                    location: "Remote / Kathmandu",
                                    type: "Internship",
                                    description:
                                        "Join us as an SEO Specialist Intern to learn and apply search engine optimization strategies. You will assist in keyword research, content optimization, and performance tracking.",
                                    responsibilities: [
                                        "Assist in executing paid search campaigns and analyzing results",
                                        "Learn to track website analytics and effective keyword strategies",
                                        "Help optimize copy and landing pages under supervision",
                                        "Perform keyword discovery and market trend research",
                                        "collaborate with team to implement SEO best practices"
                                    ],
                                    qualifications: [
                                        "Strong interest in SEO and digital marketing",
                                        "Basic understanding of HTML and web technologies",
                                        "Familiarity with Google Analytics is a plus",
                                        "Excellent written and verbal communication skills",
                                        "Creative mindset and willingness to learn"
                                    ]
                                },
                                {
                                    title: "Social Media Marketer Intern",
                                    value: "social-media-marketer",
                                    location: "Remote / Kathmandu",
                                    type: "Internship",
                                    description:
                                        "We are seeking a creative Social Media Marketer Intern to assist in managing our social channels. You will help create engaging content, draft posts, and interact with our community.",
                                    responsibilities: [
                                        "Assist in researching audience preferences and current trends",
                                        "Help create engaging text, image, and video content",
                                        "Draft and schedule daily social media posts",
                                        "Monitor channels and help with community engagement",
                                        "Collaborate with design team to ensure brand consistency"
                                    ],
                                    qualifications: [
                                        "Current student or recent graduate in Marketing or related field",
                                        "Passion for social media platforms and trends",
                                        "Basic copywriting and content creation skills",
                                        "Knowledge of design tools like Canva is a plus",
                                        "Eagerness to learn and adapt"
                                    ]
                                },
                            ].map((job, index) => (
                                <div
                                    key={index}
                                    className="bg-card-theme rounded-2xl p-6 sm:p-8 shadow-md border border-theme"
                                >
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">
                                                {job.title}
                                            </h3>
                                            <div className="flex flex-wrap gap-3 text-sm font-medium text-gray-400">
                                                <span className="bg-subtle-theme px-3 py-1 rounded-full border border-theme flex items-center gap-1">
                                                    <MapPin className="w-3 h-3" /> {job.location}
                                                </span>
                                                <span className="bg-subtle-theme px-3 py-1 rounded-full border border-theme flex items-center gap-1">
                                                    <Clock className="w-3 h-3" /> {job.type}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="max-w-none text-muted-theme mb-8">
                                        <p className="mb-6 leading-relaxed">{job.description}</p>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div>
                                                <h4 className="text-base font-semibold text-white mb-3 flex items-center gap-2">
                                                    <Briefcase className="w-4 h-4 text-blue-500" /> Key Responsibilities
                                                </h4>
                                                <ul className="list-disc pl-5 space-y-2 text-sm">
                                                    {job.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="text-base font-semibold text-white mb-3 flex items-center gap-2">
                                                    <CheckCircle className="w-4 h-4 text-blue-500" /> Requirements
                                                </h4>
                                                <ul className="list-disc pl-5 space-y-2 text-sm">
                                                    {job.qualifications.map((q, i) => <li key={i}>{q}</li>)}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-t border-theme pt-6 flex justify-end">
                                        <button
                                            onClick={() => {
                                                const form = document.getElementById("application-form");
                                                if (form) {
                                                    form.scrollIntoView({ behavior: "smooth" });
                                                    setFormData((prev) => ({
                                                        ...prev,
                                                        position: job.value,
                                                    }));
                                                }
                                            }}
                                            className="inline-flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 px-6 py-2.5 text-sm gap-2"
                                        >
                                            Apply Now <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Application Form */}
                    <div
                        id="application-form"
                        className="bg-card-theme rounded-2xl p-6 sm:p-8 shadow-md border border-theme"
                    >
                        <div className="text-center mb-12">
                            <div className="flex items-center justify-center gap-2 mb-2">
                                <FileText className="w-6 h-6 text-blue-600" />
                                <h3 className="text-lg font-semibold text-main-theme">
                                    Application Form
                                </h3>
                            </div>
                        </div>

                        {submitStatus === "success" ? (
                            <div className="text-center py-12">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                                    <CheckCircle className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-main-theme mb-4">
                                    Application Submitted!
                                </h3>
                                <p className="text-muted-theme mb-8">
                                    Thank you for your interest in joining Noble Stack. We&apos;ve
                                    received your application and will review it shortly.
                                </p>
                                <CTAButton
                                    type="button"
                                    variant="primary"
                                    onClick={() => setSubmitStatus("idle")}
                                    className="mx-auto"
                                >
                                    Submit Another Application
                                </CTAButton>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="space-y-4 sm:space-y-6 max-w-4xl mx-auto"
                            >
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
                                            className="w-full px-4 py-3 bg-subtle-theme border border-theme rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-main-theme placeholder-gray-500"
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
                                            className="w-full px-4 py-3 bg-subtle-theme border border-theme rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-main-theme placeholder-gray-500"
                                            placeholder="your@email.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-md-sm font-semibold text-muted-theme mb-2">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-subtle-theme border border-theme rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-main-theme placeholder-gray-500"
                                            placeholder="+977 (XXX) XXX-XXXX"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-md-sm font-semibold text-muted-theme mb-2">
                                            Position of Interest *
                                        </label>
                                        <select
                                            name="position"
                                            value={formData.position}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-subtle-theme border border-theme rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-main-theme"
                                            required
                                        >
                                            <option value="">Select a position</option>
                                            <option value="seo-specialist">SEO Specialist</option>
                                            <option value="social-media-marketer">
                                                Social Media Marketer
                                            </option>
                                            <option value="frontend-developer">
                                                Frontend Developer
                                            </option>
                                            <option value="backend-developer">
                                                Backend Developer
                                            </option>
                                            <option value="fullstack-developer">
                                                Fullstack Developer
                                            </option>
                                            <option value="ai-engineer">AI/ML Engineer</option>
                                            <option value="product-designer">
                                                Product Designer
                                            </option>
                                            <option value="devops-engineer">DevOps Engineer</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>


                                <div>
                                    <label className="block text-md-sm font-semibold text-muted-theme mb-2">
                                        Years of Experience *
                                    </label>
                                    <select
                                        name="experience"
                                        value={formData.experience}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-subtle-theme border border-theme rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-main-theme"
                                        required
                                    >
                                        <option value="">Select experience level</option>
                                        <option value="intern">Intern</option>
                                        <option value="0-1">0-1 years (Entry Level)</option>
                                        <option value="2-3">2-3 years (Junior)</option>
                                        <option value="4-6">4-6 years (Mid Level)</option>
                                        <option value="7-10">7-10 years (Senior)</option>
                                        <option value="10+">10+ years (Expert)</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-md-sm font-semibold text-muted-theme mb-2">
                                        Resume/CV *
                                    </label>
                                    <label className="border-2 border-dashed border-theme rounded-xl p-8 text-center hover:border-blue-400 transition-colors duration-300 block cursor-pointer bg-subtle-theme hover:bg-subtle-hover group">
                                        <Upload className="w-12 h-12 text-gray-500 mx-auto mb-4 group-hover:text-blue-500 transition-colors" />
                                        <p className="text-base text-muted-theme mb-2 font-medium">
                                            {formData.resume ? (
                                                <span className="text-blue-600 font-semibold">{formData.resume.name}</span>
                                            ) : (
                                                "Click to upload or drag and drop"
                                            )}
                                        </p>
                                        <p className="text-md-sm text-muted-theme">
                                            PDF, DOC, DOCX, RTF, TXT (max 5MB)
                                        </p>
                                        <input
                                            type="file"
                                            name="resume"
                                            accept=".pdf,.doc,.docx,.rtf,.txt"
                                            className="hidden"
                                            onChange={handleFileChange}
                                            required
                                        />
                                    </label>
                                </div>

                                <div>
                                    <label className="block text-md-sm font-semibold text-muted-theme mb-2">
                                        Cover Letter / Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={5}
                                        className="w-full px-4 py-3 bg-subtle-theme border border-theme rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-main-theme placeholder-gray-500"
                                        placeholder="Tell us about yourself and why you're interested in joining Noble Stack. What excites you about our mission?"
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
                                        {isSubmitting ? "Submitting..." : "Submit Application"}
                                    </CTAButton>
                                    <p className="text-md-sm text-muted-theme mt-4">
                                        We&apos;ll review your application and get back to you within
                                        48 hours
                                    </p>
                                </div>
                            </form>
                        )}
                    </div>
                </section>

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
            background: linear-gradient(
              135deg,
              #10b981,
              #059669,
              #0d9488,
              #0f766e,
              #0891b2,
              #0e7490,
              #0284c7,
              #0369a1,
              #10b981
            );
            background-size: 400% 400%;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: futureGlow 2.5s ease-in-out infinite;
            font-weight: 800;
            letter-spacing: -0.02em;
          }
        `}</style>
            </main >
        </>
    );
}
