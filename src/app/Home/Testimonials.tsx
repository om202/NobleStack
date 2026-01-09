"use client";

import { Star, Quote } from "lucide-react";
import SectionHeader from "../../components/SectionHeader";

export default function Testimonials() {
    const testimonials = [
        {
            name: "Rajesh S.",
            role: "Small Business Owner",
            company: "",
            image: "/testimonials/avatar-male-1.svg",
            rating: 5,
            text: "The team was easy to work with and kept me updated throughout the project. They took the time to understand what I actually needed, not just what I asked for. Appreciated their patience with my questions.",
        },
        {
            name: "Anjali G.",
            role: "Startup Founder",
            company: "",
            image: "/testimonials/avatar-female-1.svg",
            rating: 5,
            text: "As a first-time founder, I had a lot to learn about the tech side. Noble Stack walked me through every decision and helped me launch something I'm genuinely proud of. Responsive and honest throughout.",
        },
        {
            name: "Bikash T.",
            role: "Local Business Owner",
            company: "",
            image: "/testimonials/avatar-male-2.svg",
            rating: 5,
            text: "I needed a simple app for my business and they delivered exactly that—nothing overcomplicated, just something that works. Good communication and fair pricing for the quality of work.",
        },
    ];

    return (
        <section id="testimonials" className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme transition-colors">
            <div className="max-w-6xl mx-auto">
                <SectionHeader
                    title="What Our Clients Say"
                    description="Don't just take our word for it. Here's what business leaders across Nepal say about working with Noble Stack."
                    imageSrc="/undraw_interview_yz52.svg"
                    imageAlt="Client Testimonials Illustration"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <article
                            key={index}
                            className="bg-card-theme rounded-2xl p-4 sm:p-6 border border-theme hover:border-blue-500/50 transition-all duration-300 group relative flex flex-col"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Quote className="w-12 h-12 text-main-theme" />
                            </div>

                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                                    />
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <blockquote className="text-base text-muted-theme mb-6 leading-relaxed relative z-10 flex-1">
                                "{testimonial.text}"
                            </blockquote>

                            {/* Author Info - Always at bottom */}
                            <footer className="flex items-center gap-3 pt-4 border-t border-theme mt-auto">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <cite className="not-italic font-semibold text-main-theme block">
                                        {testimonial.name}
                                    </cite>
                                    <p className="text-sm text-muted-theme">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </footer>
                        </article>
                    ))}
                </div>

                {/* Schema.org Markup for SEO */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "Noble Stack",
                            "url": "https://www.noblestack.io",
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1),
                                "bestRating": 5,
                                "worstRating": 1,
                                "ratingCount": testimonials.length,
                                "reviewCount": testimonials.length
                            },
                            "review": testimonials.map(t => ({
                                "@type": "Review",
                                "author": {
                                    "@type": "Person",
                                    "name": t.name,
                                    "jobTitle": t.role,
                                    "worksFor": {
                                        "@type": "Organization",
                                        "name": t.company
                                    }
                                },
                                "reviewRating": {
                                    "@type": "Rating",
                                    "ratingValue": t.rating,
                                    "bestRating": 5,
                                    "worstRating": 1
                                },
                                "reviewBody": t.text
                            }))
                        })
                    }}
                />
            </div>
        </section>
    );
}
