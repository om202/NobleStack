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
            <article className="bg-subtle-theme rounded-2xl overflow-hidden shadow-sm border border-theme hover:bg-subtle-hover hover:border-theme transition-[background-color,border-color] duration-300 h-full flex flex-col">
                <div className="relative h-48 w-full overflow-hidden">
                    {post.coverImage ? (
                        <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <div className="w-full h-full bg-linear-to-r from-bg-subtle to-bg-subtle-hover flex items-center justify-center">
                            <span className="text-muted-theme text-4xl font-bold opacity-30">Blog</span>
                        </div>
                    )}
                </div>
                <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-center justify-between w-full mb-4">
                        {post.publisher && (
                            <span className="text-muted-theme text-xs">
                                Published by {post.publisher}
                            </span>
                        )}
                        <time className="text-muted-theme text-xs">{post.date}</time>
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-main-theme mb-3 transition-colors line-clamp-2">
                        {post.title}
                    </h3>
                    <p className="text-muted-theme text-sm mb-6 line-clamp-3 flex-1">
                        {post.excerpt}
                    </p>
                    <div className="flex items-center justify-center text-main-theme font-medium text-sm mt-auto border border-theme rounded-lg px-4 py-2 bg-card-theme group-hover:bg-subtle-hover transition-colors pointer-events-none">
                        Read Article <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                </div>
            </article>
        </Link>
    );
}
