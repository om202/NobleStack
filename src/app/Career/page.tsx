"use client";

import { Send, Upload, FileText, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
import CTAButton from "../../components/CTAButton";
import { db, storage } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

interface FormData {
  name: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  resume: File | null;
  message: string;
}

export default function Career() {
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
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        resume: e.target.files[0],
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
        const snapshot = await uploadBytes(storageRef, formData.resume);
        // Get download URL
        resumeUrl = await getDownloadURL(snapshot.ref);
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
        resumeUrl: resumeUrl,
        submittedAt: serverTimestamp(),
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
      <section className="py-12 px-4 min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900">
              Join Our Team
            </h1>

            <blockquote className="text-base sm:text-lg text-gray-500 mb-8 max-w-3xl mx-auto">
              &ldquo;Be part of a movement to bring cutting-edge technology to
              Nepal. Join our team of passionate developers, designers, and
              innovators building the future.&rdquo;
            </blockquote>
          </div>

          {/* Application Form */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-2">
                <FileText className="w-6 h-6 text-nobleblue-600" />
                <h3 className="text-xl font-semibold text-gray-700">
                  Application Form
                </h3>
              </div>
            </div>

            {submitStatus === "success" ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Application Submitted!</h3>
                <p className="text-gray-600 mb-8">
                  Thank you for your interest in joining Noble Stack. We&apos;ve received your application and will review it shortly.
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
                    <label className="block text-md-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-nobleblue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-md-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-nobleblue-500 focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-md-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-nobleblue-500 focus:border-transparent transition-all duration-300"
                      placeholder="+977 (XXX) XXX-XXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-md-sm font-semibold text-gray-700 mb-2">
                      Position of Interest *
                    </label>
                    <select
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-nobleblue-500 focus:border-transparent transition-all duration-300"
                      required
                    >
                      <option value="">Select a position</option>
                      <option value="frontend-developer">
                        Frontend Developer
                      </option>
                      <option value="backend-developer">Backend Developer</option>
                      <option value="fullstack-developer">
                        Fullstack Developer
                      </option>
                      <option value="ai-engineer">AI/ML Engineer</option>
                      <option value="product-designer">Product Designer</option>
                      <option value="devops-engineer">DevOps Engineer</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-md-sm font-semibold text-gray-700 mb-2">
                    Years of Experience
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-nobleblue-500 focus:border-transparent transition-all duration-300"
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
                  <label className="block text-md-sm font-semibold text-gray-700 mb-2">
                    Resume/CV *
                  </label>
                  <label className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-nobleblue-400 transition-colors duration-300 block cursor-pointer bg-gray-50 hover:bg-white group">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4 group-hover:text-nobleblue-500 transition-colors" />
                    <p className="text-base text-gray-600 mb-2 font-medium">
                      {formData.resume ? (
                        <span className="text-nobleblue-600 font-semibold">{formData.resume.name}</span>
                      ) : (
                        "Click to upload or drag and drop"
                      )}
                    </p>
                    <p className="text-md-sm text-gray-500">
                      PDF, DOC, DOCX (max 5MB)
                    </p>
                    <input
                      type="file"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={handleFileChange}
                      required
                    />
                  </label>
                </div>

                <div>
                  <label className="block text-md-sm font-semibold text-gray-700 mb-2">
                    Cover Letter / Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-nobleblue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Tell us about yourself and why you're interested in joining Noble Stack. What excites you about our mission?"
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
                  <p className="text-md-sm text-gray-500 mt-4">
                    We&apos;ll review your application and get back to you within
                    48 hours
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>

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
      </section>
    </>
  );
}
