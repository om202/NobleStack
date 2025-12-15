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
    } catch {
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
    } catch {
        notFound();
    }

    return (
        <article className="min-h-screen bg-noble-dark">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        headline: post.title,
                        image: post.coverImage ? [`https://www.noblestack.io${post.coverImage}`] : [],
                        datePublished: new Date(post.date).toISOString(),
                        dateModified: new Date(post.date).toISOString(),
                        author: {
                            "@type": "Person",
                            name: post.author?.name || "Noble Stack Team",
                            image: post.author?.picture ? `https://www.noblestack.io${post.author.picture}` : undefined
                        },
                        publisher: {
                            "@type": "Organization",
                            name: "Noble Stack",
                            logo: {
                                "@type": "ImageObject",
                                url: "https://www.noblestack.io/nbl.png"
                            }
                        },
                        description: post.excerpt,
                        mainEntityOfPage: {
                            "@type": "WebPage",
                            "@id": `https://www.noblestack.io/blogs/${post.slug}`
                        }
                    })
                }}
            />
            {/* Hero / Header */}
            <header className="relative h-[60vh] min-h-[400px] w-full bg-gray-900">
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
                                <time>{post.date}</time>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Content */}
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="prose prose-lg prose-invert max-w-none 
                    prose-headings:text-main-theme prose-headings:font-bold
                    prose-p:text-muted-theme prose-p:leading-8
                    prose-a:text-nobleblue-400 prose-a:no-underline hover:prose-a:text-nobleblue-300
                    prose-strong:text-main-theme
                    prose-blockquote:border-l-nobleblue-500 prose-blockquote:bg-nobleblue-500/10 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:text-muted-theme
                    prose-img:rounded-xl prose-img:shadow-lg
                    prose-code:text-nobleblue-300 prose-code:bg-gray-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                    prose-pre:bg-gray-800 prose-pre:border prose-pre:border-theme
                    prose-ul:text-muted-theme prose-ol:text-muted-theme
                    prose-li:text-muted-theme
                ">
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>
            </div>
        </article>
    );
}
