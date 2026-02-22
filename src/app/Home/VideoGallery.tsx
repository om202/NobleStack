"use client";

import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import SectionHeader from "../../components/SectionHeader";
import { useState, useRef } from "react";

// Sub-component to handle the click-to-play facade
function VideoCard({ video }: { video: { id: number, url: string, title: string, thumbnailUrl?: string } }) {
    const [isPlaying, setIsPlaying] = useState(false);

    // Swap autoplay=false to autoplay=true when clicked so it instantly plays
    const autoplayUrl = video.url.replace("autoplay=false", "autoplay=true");

    // Extract video ID from URL (e.g., https://iframe.mediadelivery.net/embed/577800/777df40b-cc70...)
    const urlObj = new URL(video.url);
    const pathParts = urlObj.pathname.split('/');
    const videoId = pathParts[pathParts.length - 1];

    // Bunny Stream standard thumbnail URL constructed from the video ID
    const thumbnailUrl = video.thumbnailUrl || `https://vz-8246bf27-db5.b-cdn.net/${videoId}/thumbnail.jpg`;

    return (
        <div
            className="shrink-0 bg-card-theme rounded-2xl border border-theme hover:border-blue-500/50 transition-all duration-300 overflow-hidden group/video"
            style={{ width: '294px' }}
        >
            <div
                style={{ position: 'relative', paddingTop: '177.78%' }}
                className="bg-subtle-theme cursor-pointer"
                onClick={() => setIsPlaying(true)}
            >
                {isPlaying ? (
                    <iframe
                        src={autoplayUrl}
                        title={video.title}
                        loading="lazy"
                        width="100%"
                        height="100%"
                        style={{
                            border: 0,
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            height: '100%',
                            width: '100%',
                        }}
                        allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
                        allowFullScreen
                    />
                ) : (
                    <div
                        className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900 group-hover/video:opacity-90 transition-opacity bg-cover bg-center"
                        style={{ backgroundImage: `url(${thumbnailUrl})` }}
                    >
                        <div className="absolute inset-0 bg-black/30 group-hover/video:bg-black/10 transition-colors" />

                        {/* Play Button */}
                        <div className="relative z-10 w-16 h-16 rounded-full bg-blue-600/90 flex items-center justify-center text-white backdrop-blur-sm group-hover/video:scale-110 group-hover/video:bg-blue-500 transition-all duration-300 shadow-[0_0_30px_rgba(0,122,255,0.4)]">
                            <Play className="w-8 h-8 ml-1 fill-white" />
                        </div>
                    </div>
                )}
            </div>
            <div className="p-4">
                <h3 className="text-sm text-main-theme line-clamp-2 font-serif group-hover/video:text-blue-500 transition-colors">
                    {video.title}
                </h3>
            </div>
        </div>
    );
}

export default function VideoGallery() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const videos = [
        {
            id: 1,
            url: "https://iframe.mediadelivery.net/embed/577800/777df40b-ce70-4d1f-9f94-521205836ab1?autoplay=false&loop=false&muted=false&preload=false&responsive=true&defaultQuality=480p&maxQuality=480p",
            title: "Lets introduce Noble Stack!",
        },
        {
            id: 2,
            url: "https://iframe.mediadelivery.net/embed/577800/8487bd22-5d2b-46c5-b096-cff0cdb68006?autoplay=false&loop=false&muted=false&preload=false&responsive=true&defaultQuality=480p&maxQuality=480p",
            title: "What is Noble Appointments?",
        },
        {
            id: 3,
            url: "https://iframe.mediadelivery.net/embed/577800/d48e0897-bde9-4073-9854-9840514c51bb?autoplay=false&loop=false&muted=false&preload=false&responsive=true&defaultQuality=480p&maxQuality=480p",
            title: "Why Noble Stack is \"AI First\" company?",
        },
        {
            id: 4,
            url: "https://iframe.mediadelivery.net/embed/577800/5552ca92-1555-48e0-8227-c2b674ac888e?autoplay=false&loop=false&muted=false&preload=false&responsive=true&defaultQuality=480p&maxQuality=480p",
            title: "No Risk, No Future",
            thumbnailUrl: "https://vz-8246bf27-db5.b-cdn.net/5552ca92-1555-48e0-8227-c2b674ac888e/thumbnail_aed4dda5.jpg",
        },
    ];

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = scrollContainerRef.current.offsetWidth * 0.8;
            const newScrollLeft =
                scrollContainerRef.current.scrollLeft +
                (direction === "left" ? -scrollAmount : scrollAmount);

            scrollContainerRef.current.scrollTo({
                left: newScrollLeft,
                behavior: "smooth",
            });
        }
    };

    return (
        <section
            id="video-gallery"
            className="pt-6 pb-8 px-3 sm:pt-6 sm:pb-12 sm:px-4 bg-card-theme border-y border-theme transition-colors"
        >
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="Video Gallery"
                    description="Watch our latest project demos and success stories in action."
                    imageSrc="/undraw_portfolio_btd8.svg"
                    imageAlt="Video Gallery Illustration"
                />

                {/* Video Gallery Container */}
                <div className="relative group">
                    {/* Left Arrow Button */}
                    <button
                        onClick={() => scroll("left")}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 shadow-lg transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-110"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    {/* Scrollable Videos Container */}
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-4"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        {videos.map((video) => (
                            <VideoCard key={video.id} video={video} />
                        ))}
                    </div>

                    {/* Right Arrow Button */}
                    <button
                        onClick={() => scroll("right")}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 shadow-lg transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-110"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Custom CSS for hiding scrollbar */}
                <style jsx>{`
                    .scrollbar-hide::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>
            </div>
        </section>
    );
}
