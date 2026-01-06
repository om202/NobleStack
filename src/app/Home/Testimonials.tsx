"use client";

import { Star, Quote } from "lucide-react";

export default function Testimonials() {
    const testimonials = [
        {
            name: "Rajesh Shrestha",
            role: "Noble Stack Customer",
            company: "",
            image: "/testimonials/avatar-male-1.svg",
            rating: 5,
            text: "Noble Stack's AI solutions transformed our workflow and boosted productivity by 30%. Their team is exceptional at understanding business needs and delivering cutting-edge technology.",
        },
        {
            name: "Anjali Gurung",
            role: "Noble Stack Customer",
            company: "",
            image: "/testimonials/avatar-female-1.svg",
            rating: 5,
            text: "Working with Noble Stack was a game-changer for our e-commerce platform. Their full-stack expertise and attention to detail resulted in a lightning-fast website that doubled our conversions.",
        },
        {
            name: "Bikash Thapa",
            role: "Noble Stack Customer",
            company: "",
            image: "/testimonials/avatar-male-2.svg",
            rating: 5,
            text: "The mobile app Noble Stack built for us exceeded all expectations. Their knowledge of React Native and backend integration is world-class. Highly recommend for any serious tech project!",
        },
    ];

    return (
        <section id="testimonials" className="py-8 px-3 sm:py-12 sm:px-4 bg-page-theme transition-colors">
            <div className="max-w-6xl mx-auto">
                <header className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-main-theme">
                        What Our Clients Say
                    </h2>
                    <p className="text-base text-muted-theme max-w-3xl mx-auto">
                        Don't just take our word for it. Here's what business leaders across Nepal say about working with Noble Stack.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <article
                            key={index}
                            className="bg-card-theme rounded-2xl p-4 sm:p-6 border border-theme hover:border-blue-500/50 transition-all duration-300 group relative"
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
                            <blockquote className="text-base text-muted-theme mb-6 leading-relaxed relative z-10">
                                "{testimonial.text}"
                            </blockquote>

                            {/* Author Info */}
                            <footer className="flex items-center gap-3 pt-4 border-t border-theme">
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
                                    "bestRating": 5
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
