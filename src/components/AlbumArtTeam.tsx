"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { User } from "lucide-react";
import CTAButton from "./CTAButton";

interface TeamMember {
  name: string;
  role: string;
  expertise: string;
  image: string;
  bio: string;
}

const PlaceholderAvatar = ({ className }: { className?: string }) => (
  <div className={`w-full h-full bg-subtle-theme flex items-center justify-center ${className}`}>
    <User className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-muted-theme" />
  </div>
);

interface AlbumArtTeamProps {
  teamMembers: TeamMember[];
  autoRotateInterval?: number; // in milliseconds, default 3000
}

export default function AlbumArtTeam({
  teamMembers,
  autoRotateInterval = 3000,
}: AlbumArtTeamProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({});

  const shouldShowPlaceholder = (image: string, index: number) => {
    return !image ||
      image === '' ||
      image.includes('placeholder') ||
      imageErrors[index];
  };

  const handleImageError = (index: number) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  // Auto-rotate team members
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [teamMembers.length, autoRotateInterval]);

  const getCardStyle = (index: number) => {
    const position =
      (index - currentIndex + teamMembers.length) % teamMembers.length;

    if (position === 0) {
      // Center card
      return {
        transform: "translateX(0) scale(1)",
        zIndex: 3,
      };
    } else if (position === 1) {
      // Right card
      return {
        transform: "translateX(min(150px, 120px)) scale(0.9)",
        zIndex: 2,
      };
    } else if (position === teamMembers.length - 1) {
      // Left card
      return {
        transform: "translateX(max(-150px, -120px)) scale(0.9)",
        zIndex: 2,
      };
    } else {
      // Hidden cards
      return {
        transform: `translateX(${position > teamMembers.length / 2 ? -200 : 200
          }px) scale(0.8)`,
        zIndex: 1,
      };
    }
  };

  return (
    <div className="bg-card-theme rounded-2xl p-4 md:p-6 shadow-sm border border-theme overflow-hidden">
      <div className="relative h-[350px] md:h-[420px] lg:h-[480px]">
        <div className="absolute inset-0 flex items-center justify-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="absolute transition-all duration-1000 ease-in-out transform-gpu will-change-transform"
              style={getCardStyle(index)}
            >
              <div className="w-60 h-90 md:w-72 md:h-[420px] lg:w-80 lg:h-[460px] bg-subtle-theme rounded-2xl shadow-2xl border border-theme overflow-hidden transform-gpu">
                {/* Image Section */}
                <div className="relative h-48 md:h-56 lg:h-64 hero-gradient-bg flex items-center justify-center p-6 overflow-hidden">
                  {/* Decorative Blur Elements */}
                  <div className="hero-gradient-blur-blue"></div>
                  <div className="hero-gradient-blur-green"></div>
                  <div className="hero-gradient-blur-orange"></div>
                  <div className="hero-gradient-blur-amber"></div>

                  {/* Image container with relative positioning to appear above gradient */}
                  <div className="relative z-10 w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-2xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(75,85,99,0.8)]">
                    {shouldShowPlaceholder(member.image, index) ? (
                      <PlaceholderAvatar />
                    ) : (
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={176}
                        height={176}
                        className="w-full h-full object-cover"
                        onError={() => handleImageError(index)}
                      />
                    )}
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-6 md:p-8 text-center transform-gpu">
                  <h3 className="text-base md:text-lg font-bold text-main-theme mb-1 md:mb-2 transform-gpu">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 font-semibold text-sm md:text-base mb-3 md:mb-4 transform-gpu">
                    {member.role}
                  </p>
                  <p className="text-muted-theme text-sm md:text-base whitespace-pre-line leading-relaxed mb-4 transform-gpu">
                    {member.expertise}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-8">
        <h3 className="text-base font-bold text-main-theme mb-2">
          Meet Our Team
        </h3>
        <p className="text-base text-muted-theme max-w-xl mx-auto">
          Our diverse team of experts brings together years of experience in
          technology, design, and business strategy.
        </p>
        <div className="mt-6 flex justify-center">
          <CTAButton href="/Career" variant="primary">
            Interested to Join Us?
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
