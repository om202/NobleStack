"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogPost } from "@/lib/blog";

interface BlogCardProps {
    post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
    return (
        <Link href={`/blogs/${post.slug}`} className="group h-full">
            <article className="bg-gray-800 rounded-2xl overflow-hidden shadow-sm border border-theme hover:shadow-md hover:border-nobleblue-500/50 transition-all duration-300 h-full flex flex-col">
                <div className="relative h-48 w-full overflow-hidden">
                    {post.coverImage ? (
                        <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <div className="w-full h-full bg-linear-to-r from-gray-700 to-gray-800 flex items-center justify-center">
                            <span className="text-gray-600 text-4xl font-bold opacity-30">Blog</span>
                        </div>
                    )}
                </div>
                <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-center justify-between w-full mb-4">
                        {post.publisher && (
                            <span className="text-gray-500 text-xs">
                                Published by {post.publisher}
                            </span>
                        )}
                        <time className="text-gray-500 text-xs">{post.date}</time>
                    </div>
                    <h3 className="text-xl font-bold text-main-theme mb-3 group-hover:text-nobleblue-400 transition-colors line-clamp-2">
                        {post.title}
                    </h3>
                    <p className="text-muted-theme text-sm mb-6 line-clamp-3 flex-1">
                        {post.excerpt}
                    </p>
                    <div className="flex items-center justify-center text-blue-400 font-medium text-sm mt-auto border border-blue-400/30 rounded-lg px-4 py-2 bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors pointer-events-none">
                        Read Article <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                </div>
            </article>
        </Link>
    );
}
