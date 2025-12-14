"use client";

import React from "react";

interface TechItem {
  name: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
}

interface TechStackCarouselProps {
  technologies: TechItem[];
  title?: string;
}

export default function TechStackCarousel({
  technologies,
  title,
}: TechStackCarouselProps) {
  // Triple the array for seamless infinite scroll
  const infiniteTechnologies = [...technologies, ...technologies, ...technologies];

  return (
    <div className="mb-16">
      {title && (
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-center text-main-theme mb-6">
          {title}
        </h3>
      )}

      <div className="relative overflow-hidden bg-theme-bg rounded-2xl py-6">
        <style jsx>{`
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }
          .scroll-container {
            animation: scroll-left 20s linear infinite;
          }
          .scroll-container:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="scroll-container flex gap-8 px-4">
          {infiniteTechnologies.map((tech, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col items-center justify-center gap-3 transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-110"
              style={{ minWidth: "140px" }}
            >
              <div className="bg-gray-800 rounded-xl p-3 flex items-center justify-center border border-theme">
                {React.createElement(tech.icon, {
                  style: { color: tech.color },
                  className: "w-12 h-12 sm:w-14 sm:h-14"
                })}
              </div>
              <span className="text-sm sm:text-base font-medium text-main-theme whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
