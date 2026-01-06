"use client";

import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import CTAButton from "./CTAButton";

// Facebook post iframe URLs
const FACEBOOK_POSTS = [
    {
        src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02zuMnmnxyKiGBch34Xz76aa9HrrLsAkKDHAG7fUb3qAKMoQZEveLXDUKuh6c7PgRql%26id%3D61577564326108&show_text=true&width=500",
        height: 589,
    },
    {
        src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F910076431358366%2F&show_text=true&width=267&t=0",
        height: 591,
    },
    {
        src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0tB9pv7qVXtWtQ1iHuGfyLb1b7rVwP9cf9cMvrHXi2wJ8EbV9PdguwZFvBTfVRWhHl%26id%3D61577564326108&show_text=true&width=500",
        height: 562,
    },
    {
        src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0xdKqsE2iCVyMG5VigXQeLtULS5uMv5LS23CmHfKPDk21Szp74u2j2zcFSkVT8aDQl%26id%3D61577564326108&show_text=true&width=500",
        height: 591,
    },
    {
        src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02sueHet8ES2EvogVUQ1kowHK1w7k2ViHGLS2GcXbdEwW7A9SuohRTB1SuZuNk2TZPl%26id%3D61577564326108&show_text=true&width=500",
        height: 648,
    },
    {
        src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02GVwv1iLNSdnQoRbZARfd7WRpSfdrY2CXAc64JDP7nwV6k7uuCSCrvAFpniZZSCoJl%26id%3D61577564326108&show_text=true&width=500",
        height: 712,
    },
];

const POSTS_PER_PAGE = 3;

export default function FacebookFeed() {
    const [visiblePosts, setVisiblePosts] = useState(POSTS_PER_PAGE);

    const showMore = () => {
        setVisiblePosts(prev => Math.min(prev + POSTS_PER_PAGE, FACEBOOK_POSTS.length));
    };

    const hasMore = visiblePosts < FACEBOOK_POSTS.length;

    return (
        <section className="max-w-6xl mx-auto px-3 py-8 sm:px-4 sm:py-12 md:py-16">
            {/* Section Header */}
            <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-main-theme">
                    Latest Updates
                </h2>
            </div>

            {/* Individual Facebook Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {FACEBOOK_POSTS.slice(0, visiblePosts).map((post, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl border border-theme overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                        <iframe
                            src={post.src}
                            width="100%"
                            height={post.height}
                            style={{ border: 'none', overflow: 'hidden' }}
                            scrolling="no"
                            frameBorder="0"
                            allowFullScreen={true}
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms"
                        />
                    </div>
                ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
                {hasMore && (
                    <CTAButton
                        variant="primary"
                        icon={ChevronDown}
                        onClick={showMore}
                    >
                        Show More Posts
                    </CTAButton>
                )}

                <CTAButton
                    variant="secondary"
                    icon={ExternalLink}
                    href="https://www.facebook.com/profile.php?id=61577564326108"
                >
                    View All on Facebook
                </CTAButton>
            </div>
        </section>
    );
}
