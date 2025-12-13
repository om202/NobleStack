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
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 h-full flex flex-col">
                <div className="relative h-48 w-full overflow-hidden">
                    {post.coverImage ? (
                        <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <div className="w-full h-full bg-linear-to-r from-nobleblue-50 to-nobleblue-100 flex items-center justify-center">
                            <span className="text-nobleblue-300 text-4xl font-bold opacity-30">Blog</span>
                        </div>
                    )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                    <div className="flex flex-col gap-2 mb-3">
                        <div className="flex items-center justify-between w-full">
                            {post.tags?.[0] && (
                                <span className="bg-nobleblue-50 text-nobleblue-600 text-xs font-medium px-2.5 py-1 rounded-full">
                                    {post.tags[0]}
                                </span>
                            )}
                            <span className="text-gray-400 text-xs">{post.date}</span>
                        </div>
                        {post.publisher && (
                            <span className="text-gray-500 text-xs font-medium block">
                                Published by {post.publisher}
                            </span>
                        )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-nobleblue-600 transition-colors line-clamp-2">
                        {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                        {post.excerpt}
                    </p>
                    <div className="flex items-center text-nobleblue-600 font-medium text-sm mt-auto">
                        Read Article <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                </div>
            </div>
        </Link>
    );
}
