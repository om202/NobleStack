import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Metadata } from "next";

interface Params {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
    const { slug } = await params;
    try {
        const post = getPostBySlug(slug, ["title", "excerpt", "coverImage"]);
        return {
            title: `${post.title} | NobleStack Blog`,
            description: post.excerpt,
            openGraph: {
                title: post.title,
                description: post.excerpt,
                images: post.coverImage ? [post.coverImage] : [],
                type: "article",
            },
        };
    } catch (e) {
        return {
            title: "Blog Not Found",
        };
    }
}

export async function generateStaticParams() {
    const posts = getAllPosts(["slug"]);

    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: Params) {
    const { slug } = await params;
    let post;
    try {
        post = getPostBySlug(slug, [
            "title",
            "date",
            "slug",
            "author",
            "content",
            "coverImage",
            "tags",
        ]);
    } catch (e) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-white">
            {/* Hero / Header */}
            <div className="relative h-[60vh] min-h-[400px] w-full bg-gray-900">
                {post.coverImage && (
                    <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end pb-20">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <Link
                            href="/blogs"
                            className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors group"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                            Back to Publications
                        </Link>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {post.tags?.map(tag => (
                                <span key={tag} className="bg-nobleblue-500/20 backdrop-blur-sm border border-nobleblue-400/30 text-nobleblue-200 text-sm px-3 py-1 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h1 className="text-3xl md:text-5xl md:leading-tight font-bold text-white mb-6">
                            {post.title}
                        </h1>

                        <div className="flex items-center gap-6 text-gray-300 text-sm md:text-base">
                            {post.author && (
                                <div className="flex items-center gap-2">
                                    {post.author.picture ? (
                                        <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gray-500">
                                            <Image
                                                src={post.author.picture}
                                                alt={post.author.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    ) : (
                                        <User className="w-5 h-5" />
                                    )}
                                    <span className="font-medium text-white">{post.author.name}</span>
                                </div>
                            )}
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{post.date}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="prose prose-lg prose-nobleblue max-w-none 
                    prose-headings:text-gray-900 prose-headings:font-bold
                    prose-p:text-gray-600 prose-p:leading-8
                    prose-a:text-nobleblue-600 prose-a:no-underline hover:prose-a:text-nobleblue-700
                    prose-strong:text-gray-900
                    prose-blockquote:border-l-nobleblue-500 prose-blockquote:bg-nobleblue-50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:text-gray-700
                    prose-img:rounded-xl prose-img:shadow-lg
                ">
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>
            </div>
        </article>
    );
}
