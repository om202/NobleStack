import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { ArrowLeft, User } from "lucide-react";
import { Metadata } from "next";

interface Params {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
    const { slug } = await params;
    try {
        const post = getPostBySlug(slug, ["title", "excerpt", "coverImage"]);
        return {
            title: post.title,
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

// ISR: Revalidate every 24 hours for fresh content
export const revalidate = 86400;

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
        <article className="min-h-screen bg-page-theme transition-colors duration-300">
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
            {/* Header / Meta */}
            <header className="pt-32 pb-8 sm:pt-40">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <Link
                        href="/blogs"
                        className="inline-flex items-center text-muted-theme hover:text-main-theme mb-12 transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Stories
                    </Link>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags?.map(tag => (
                            <span key={tag} className="bg-subtle-theme border border-theme text-muted-theme text-xs sm:text-sm px-3 py-1 rounded-full transition-colors duration-300">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold text-main-theme mb-8 leading-tight tracking-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center justify-between py-6 border-y border-theme">
                        <div className="flex items-center gap-4">
                            {post.author ? (
                                <>
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden border border-theme">
                                        <Image
                                            src={post.author.picture || "/nbl.webp"}
                                            alt={post.author.name}
                                            fill
                                            sizes="48px"
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-bold text-main-theme text-sm sm:text-base">{post.author.name}</span>
                                        <div className="flex items-center gap-2 text-muted-theme text-xs sm:text-sm mt-0.5">
                                            <time>{post.date}</time>
                                            <span>•</span>
                                            <span>5 min read</span>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className="flex items-center gap-3 text-muted-theme">
                                    <User className="w-5 h-5" />
                                    <time className="text-sm">{post.date}</time>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            {/* Featured Image */}
            {post.coverImage && (
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                    <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-theme shadow-lg">
                        <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 1024px"
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            )}

            {/* Content */}
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="prose prose-lg dark:prose-invert max-w-none 
                    prose-headings:text-main-theme prose-headings:font-bold
                    prose-p:text-main-theme/90 prose-p:leading-8
                    prose-a:text-blue-500 prose-a:no-underline hover:prose-a:text-blue-400
                    prose-strong:text-main-theme
                    prose-blockquote:border-l-blue-500 prose-blockquote:bg-blue-500/10 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:text-main-theme
                    prose-img:rounded-xl prose-img:shadow-lg
                                        prose-code:text-blue-800 dark:prose-code:text-blue-300 prose-code:bg-subtle-theme prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                    prose-pre:bg-transparent prose-pre:p-0 prose-pre:m-0 prose-pre:border-0
                    prose-ul:text-main-theme prose-ol:text-main-theme
                    prose-li:text-main-theme
                    prose-table:text-main-theme prose-table:border-collapse prose-table:w-full
                    prose-th:bg-subtle-theme prose-th:text-main-theme prose-th:font-bold prose-th:px-4 prose-th:py-2 prose-th:border prose-th:border-theme
                    prose-td:text-main-theme/90 prose-td:px-4 prose-td:py-2 prose-td:border prose-td:border-theme
                ">
                    <ReactMarkdown
                        components={{
                            code({ className, children, node, ...props }) {
                                const match = /language-(\w+)/.exec(className || "");
                                // Check if this is a block-level code (has newlines) vs inline
                                const content = String(children);
                                const isBlock = content.includes('\n') || (node?.position && node.position.start.line !== node.position.end.line);

                                // For blocks with language OR plain multi-line blocks, use dark terminal style
                                if (match || isBlock) {
                                    return (
                                        <SyntaxHighlighter
                                            style={vscDarkPlus}
                                            language={match ? match[1] : "text"}
                                            PreTag="div"
                                            className="rounded-xl !my-6 text-base shadow-lg"
                                            showLineNumbers={!!match} // Only show line numbers for language-tagged code
                                            customStyle={{
                                                margin: 0,
                                                padding: '1rem',
                                                background: '#1e1e1e',
                                            }}
                                            lineNumberStyle={{
                                                minWidth: '2.5em',
                                                paddingRight: '1em',
                                                color: '#6e7681',
                                                userSelect: 'none',
                                            }}
                                            codeTagProps={{
                                                style: {
                                                    background: 'transparent',
                                                }
                                            }}
                                        >
                                            {content.replace(/\n$/, "")}
                                        </SyntaxHighlighter>
                                    );
                                }

                                // For inline code, use the styled inline code
                                return (
                                    <code className={className} {...props}>
                                        {children}
                                    </code>
                                );
                            },
                        }}
                        remarkPlugins={[remarkGfm]}
                    >
                        {post.content}
                    </ReactMarkdown>
                </div>
            </div>
        </article>
    );
}
