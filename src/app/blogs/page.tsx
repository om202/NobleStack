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
        <div className="min-h-screen bg-gray-50">
            <section className="py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900">
                            Noble Stack Blogs
                        </h1>

                        <blockquote className="text-base sm:text-lg text-gray-500 mb-8 max-w-3xl mx-auto">
                            &ldquo;Explore our collection of articles on technology, design, and startup growth.&rdquo;
                        </blockquote>
                    </div>

                    {/* Blog Grid Card */}
                    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200">
                        {posts.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {posts.map((post) => (
                                    <BlogCard key={post.slug} post={post} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 text-gray-500">
                                <p>No posts found. Check back soon!</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
