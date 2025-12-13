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
  <div className={`w-full h-full bg-gray-50 flex items-center justify-center ${className}`}>
    <User className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-gray-400" />
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
    <div className="bg-gradient-to-b from-gray-50 to-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-200 overflow-hidden">
      <div className="relative h-[350px] md:h-[420px] lg:h-[480px]">
        <div className="absolute inset-0 flex items-center justify-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="absolute transition-all duration-1000 ease-in-out transform-gpu will-change-transform"
              style={getCardStyle(index)}
            >
              <div className="w-60 h-90 md:w-72 md:h-[420px] lg:w-80 lg:h-[460px] bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform-gpu">
                {/* Image Section */}
                <div className="h-48 md:h-56 lg:h-64 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-6">
                  <div className="w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-2xl overflow-hidden shadow-lg">
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
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-1 md:mb-2 transform-gpu">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold text-base md:text-lg mb-3 md:mb-4 transform-gpu">
                    {member.role}
                  </p>
                  <p className="text-gray-500 text-base md:text-lg whitespace-pre-line leading-relaxed mb-4 transform-gpu">
                    {member.expertise}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-8">
        <h3 className="text-lg font-medium text-gray-500 mb-2">
          Meet Our Team
        </h3>
        <p className="text-base text-gray-400 max-w-xl mx-auto">
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
