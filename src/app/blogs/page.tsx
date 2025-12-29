import React from "react";
import { getAllPosts } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";
import { Metadata } from "next";

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
        <main className="min-h-screen bg-noble-dark">
            <header className="px-4 pt-24 pb-12 sm:pt-32 sm:pb-16 text-center">
                <blockquote className="text-base text-muted-theme mb-8 max-w-3xl mx-auto">
                    &ldquo;Explore our collection of articles on technology, design, and startup growth.&rdquo;
                </blockquote>
            </header>

            {/* Blog Grid Card */}
            <section aria-label="Blog Posts" className="max-w-6xl mx-auto px-4 pb-16">
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
