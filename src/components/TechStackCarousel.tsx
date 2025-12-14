"use client";

import React, { useState, useEffect } from "react";

interface TechItem {
  name: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
}

interface TechStackCarouselProps {
  technologies: TechItem[];
  title: string;
  autoScrollInterval?: number;
}

export default function TechStackCarousel({
  technologies,
  title,
  autoScrollInterval = 2000,
}: TechStackCarouselProps) {
  const [currentTechIndex, setCurrentTechIndex] = useState(0);

  // Auto-scroll through tech stack
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTechIndex((prev) => (prev + 1) % technologies.length);
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, [technologies.length, autoScrollInterval]);

  return (
    <div className="mb-16">
      <div className="relative bg-card-theme rounded-2xl p-4 sm:p-6 border border-theme min-h-[120px] sm:min-h-[140px] flex flex-col justify-center overflow-hidden">
        {/* Title */}
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-center text-main-theme mb-4 sm:mb-6">
          {title}
        </h3>

        {/* Currently Featured Technology */}
        <div className="text-center mb-4 sm:mb-6">
          <div
            key={currentTechIndex}
            className="flex flex-col items-center transition-opacity duration-500 ease-in-out"
          >
            <div className="w-24 h-24 sm:w-28 sm:h-28 bg-subtle-theme rounded-2xl flex items-center justify-center mb-4 border border-theme">
              {React.createElement(technologies[currentTechIndex].icon, {
                style: { color: technologies[currentTechIndex].color },
                className: "w-16 h-16 sm:w-20 sm:h-20"
              })}
            </div>
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-main-theme">
              {technologies[currentTechIndex].name}
            </h4>
          </div>
        </div>

        {/* Tech Stack Preview Grid */}
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
          {(() => {
            // Create a sliding window of 8 technologies around the current one
            const windowSize = Math.min(8, technologies.length);
            const startIndex = Math.max(
              0,
              currentTechIndex - Math.floor(windowSize / 2)
            );
            const endIndex = Math.min(
              technologies.length,
              startIndex + windowSize
            );
            const adjustedStartIndex = Math.max(0, endIndex - windowSize);

            return technologies
              .slice(adjustedStartIndex, endIndex)
              .map((tech, index) => {
                const actualIndex = adjustedStartIndex + index;
                return (
                  <div
                    key={actualIndex}
                    className={`text-center cursor-pointer transition-opacity duration-300 ease-in-out ${actualIndex === currentTechIndex
                      ? "opacity-100"
                      : "opacity-50 hover:opacity-75"
                      }`}
                    onClick={() => setCurrentTechIndex(actualIndex)}
                  >
                    <div className="bg-subtle-theme rounded-xl p-2 border border-theme">
                      <div className="flex justify-center mb-1">
                        <tech.icon
                          style={{ color: tech.color }}
                          className="w-5 h-5"
                        />
                      </div>
                      <h5 className="text-muted-theme font-medium text-md-sm sm:text-base truncate">
                        {tech.name}
                      </h5>
                    </div>
                  </div>
                );
              });
          })()}
        </div>

        {/* Full Width Progress Bar at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-subtle-theme rounded-b-2xl overflow-hidden">
          <div
            className="bg-gradient-to-r from-nobleblue-500 to-nobleblue-600 h-full transition-all duration-500 ease-in-out"
            style={{
              width: `${((currentTechIndex + 1) / technologies.length) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
