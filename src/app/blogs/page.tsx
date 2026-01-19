import React from "react";
import { getAllPosts } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";
import { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
    title: "Blogs - NobleStack",
    description: "Insights, strategies, and updates from the NobleStack team.",
    keywords: [
        "tech blogs Nepal",
        "AI insights",
        "web development trends",
        "startup advice",
        "technology news Kathmandu",
        "Noble Stack blog",
        "software development articles"
    ],
};

export default function BlogsPage() {
    const posts = getAllPosts(["title", "date", "slug", "coverImage", "excerpt", "tags", "publisher"]);

    return (
        <main className="min-h-screen bg-page-theme transition-colors duration-300">
            <section className="max-w-7xl mx-auto px-3 pt-28 pb-12 sm:px-4 sm:pt-32 sm:pb-16 md:pt-40 md:pb-20">
                {/* Header */}
                <SectionHeader
                    title="Noble Blogs"
                    description="Explore our collection of articles on technology, design, and startup growth."
                    imageSrc="/undraw_blog_1ca8.svg"
                    imageAlt="Noble Blogs"
                />

                {/* Spacer */}
                <div className="h-8 sm:h-12 md:h-16" />

                {/* Blog Grid Card */}
                <div className="bg-card-theme rounded-2xl p-6 sm:p-8 shadow-sm border border-theme">
                    {posts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post) => (
                                <BlogCard key={post.slug} post={post} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 text-muted-theme">
                            <p>No posts found. Check back soon!</p>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
