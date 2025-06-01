"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  expertise: string;
  image: string;
  bio: string;
}

interface AlbumArtTeamProps {
  teamMembers: TeamMember[];
  autoRotateInterval?: number; // in milliseconds, default 3000
}

export default function AlbumArtTeam({ 
  teamMembers, 
  autoRotateInterval = 3000 
}: AlbumArtTeamProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate team members
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [teamMembers.length, autoRotateInterval]);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white rounded-2xl p-8 shadow-sm border border-gray-200 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Meet Our Team
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our diverse team of experts brings together years of experience in technology, 
          design, and business strategy.
        </p>
      </div>

      <div className="relative h-[500px] perspective-1000">
        <div className="team-carousel absolute inset-0 flex items-center justify-center">
          {teamMembers.map((member, index) => {
            const offset = (index - currentIndex + teamMembers.length) % teamMembers.length;
            const isCenter = offset === 0;
            const isLeft = offset === teamMembers.length - 1;
            const isRight = offset === 1;
            
            let transform = '';
            let zIndex = 0;
            let opacity = 0.4;
            
            if (isCenter) {
              transform = 'translateX(0) rotateY(0deg) scale(1)';
              zIndex = 3;
              opacity = 1;
            } else if (isLeft) {
              transform = 'translateX(-120px) rotateY(35deg) scale(0.8)';
              zIndex = 2;
              opacity = 0.7;
            } else if (isRight) {
              transform = 'translateX(120px) rotateY(-35deg) scale(0.8)';
              zIndex = 2;
              opacity = 0.7;
            } else {
              transform = `translateX(${offset > teamMembers.length / 2 ? -200 : 200}px) rotateY(${offset > teamMembers.length / 2 ? 60 : -60}deg) scale(0.6)`;
              zIndex = 1;
              opacity = 0.3;
            }

            return (
            <div
              key={index}
              className={`team-card absolute transition-all duration-1000 ease-in-out transform-gpu`}
              style={{
                transform,
                zIndex,
                opacity,
              }}
            >
              {/* Main Card */}
              <div className="relative w-64 h-80 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                {/* Image Section */}
                <div className="h-48 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-6">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Info Section */}
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-500 text-xs whitespace-pre-line leading-relaxed">
                    {member.expertise}
                  </p>
                </div>
              </div>

              {/* Reflection */}
              <div className="absolute left-0 w-64 h-40 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-200 overflow-hidden opacity-15 transform scale-y-[-1] origin-top" style={{ top: 'calc(100% + 8px)' }}>
                <div className="h-24 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-3">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shadow-sm">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-3 text-center">
                  <h3 className="text-sm font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold text-xs mb-2">
                    {member.role}
                  </p>
                </div>
                {/* Strong fade out gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
              </div>
            </div>
            );
           })}
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
          perspective-origin: center center;
        }

        .team-carousel {
          transform-style: preserve-3d;
        }

        .team-card {
          transform-style: preserve-3d;
          will-change: transform, opacity;
        }
      `}</style>
    </div>
  );
} 