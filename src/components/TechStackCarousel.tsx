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
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-center text-main-theme mb-4 sm:mb-6">
          {title}
        </h3>
      )}

      <div className="relative overflow-hidden bg-gray-900 rounded-2xl py-4 sm:py-6">
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

        <div className="scroll-container flex gap-4 sm:gap-8 px-2 sm:px-4">
          {infiniteTechnologies.map((tech, index) => (
            <figure
              key={index}
              className="flex-shrink-0 flex flex-col items-center justify-center gap-2 sm:gap-3 transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-110"
              style={{ minWidth: "100px", maxWidth: "140px" }}
            >
              <div className="bg-gray-850 rounded-lg sm:rounded-xl p-2 sm:p-3 flex items-center justify-center border border-theme">
                {React.createElement(tech.icon, {
                  style: { color: tech.color },
                  className: "w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14"
                })}
              </div>
              <figcaption className="text-xs sm:text-sm md:text-base font-medium text-main-theme whitespace-nowrap">
                {tech.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
