import React from "react";
import { getAllPosts } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blogs - NobleStack",
    description: "Insights, strategies, and updates from the NobleStack team.",
};

export default function BlogsPage() {
    const posts = getAllPosts(["title", "date", "slug", "coverImage", "excerpt", "tags", "publisher"]);

    return (
        <main className="min-h-screen bg-noble-dark">
            <div className="py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Header Section */}
                    <header className="text-center mb-12">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-main-theme">
                            Noble Stack Blogs
                        </h1>

                        <blockquote className="text-base sm:text-lg text-muted-theme mb-8 max-w-3xl mx-auto">
                            &ldquo;Explore our collection of articles on technology, design, and startup growth.&rdquo;
                        </blockquote>
                    </header>

                    {/* Blog Grid Card */}
                    <section aria-label="Blog Posts" className="bg-gray-900 rounded-2xl p-6 sm:p-8 shadow-sm border border-theme">
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
                    </section>
                </div>
            </div>
        </main>
    );
}
