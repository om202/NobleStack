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
  // Quadruple the array for ultra-smooth seamless infinite scroll
  const infiniteTechnologies = [...technologies, ...technologies, ...technologies, ...technologies];

  return (
    <div className="mb-16">
      {title && (
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-center text-main-theme mb-4 sm:mb-6">
          {title}
        </h3>
      )}

      <div className="relative overflow-hidden">
        {/* Left fade overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-card-theme to-transparent z-10 pointer-events-none" />

        {/* Right fade overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-card-theme to-transparent z-10 pointer-events-none" />

        <div className="scroll-container flex gap-4 sm:gap-8 px-2 sm:px-4 animate-scroll-left pause-on-hover will-change-transform">

          {infiniteTechnologies.map((tech, index) => (
            <figure
              key={index}
              className="flex-shrink-0 flex flex-col items-center justify-center gap-2 sm:gap-3 cursor-pointer"
              style={{ minWidth: "100px", maxWidth: "140px" }}
            >
              <div className="bg-subtle-theme rounded-lg sm:rounded-xl p-2 sm:p-3 flex items-center justify-center border border-theme">
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
