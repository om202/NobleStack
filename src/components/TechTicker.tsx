"use client";

import React, { useState, useEffect } from 'react';
import {
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiOpenai, 
  SiAmazon, SiDocker, SiGraphql, SiMongodb, SiPostgresql,
  SiTailwindcss, SiPrisma, SiLangchain, SiVercel, SiFirebase,
  SiZapier, SiStripe, SiAnthropic, SiFigma, SiJest,
  SiFramer, SiRedux, SiExpress, SiNestjs,
  SiClerk, SiHuggingface, SiStreamlit, SiFastapi, SiN8N,
  SiMake, SiGithubactions, SiGitlab, SiPrettier, SiEslint,
  SiDatadog, SiSlack, SiGmail
} from 'react-icons/si';

interface Technology {
  name: string;
  color: string;
}

interface TechTickerProps {
  technologies: Technology[];
  interval?: number;
  className?: string;
}

const TECH_DESCRIPTIONS: { [key: string]: string } = {
  "React.js": "Modern JavaScript UI Library",
  "Next.js": "Full Stack React Framework",
  "TypeScript": "Type Safe JavaScript",
  "Node.js": "Server Side JavaScript Runtime",
  "OpenAI": "Advanced AI Language Models",
  "AWS": "Cloud Computing Services Platform",
  "Docker": "Application Container Platform",
  "GraphQL": "API Query Language",
  "MongoDB": "NoSQL Document Database",
  "PostgreSQL": "Relational Database System",
  "Tailwind CSS": "Utility First CSS Framework",
  "Prisma": "Modern Database ORM",
  "LangChain": "LLM Application Framework",
  "Vercel": "Frontend Deployment Platform",
  "Firebase": "Backend as Service",
  "Zapier": "Workflow Automation Platform",
  "Stripe": "Online Payment Processing",
  "Claude": "Conversational AI Assistant",
  "Figma": "Collaborative Design Tool",
  "Jest": "JavaScript Testing Framework",
  "Framer Motion": "React Animation Library",
  "Radix UI": "Low Level UI Components",
  "ShadCN UI": "React Component Library",
  "Redux": "State Management Library",
  "Zustand": "Lightweight State Manager",
  "SWR": "Data Fetching Library",
  "Zod": "TypeScript Schema Validator",
  "Express.js": "Node.js Web Framework",
  "NestJS": "Progressive Node.js Framework",
  "Clerk": "User Authentication Service",
  "Hugging Face": "Machine Learning Model Hub",
  "Pinecone": "Vector Database Service",
  "Weaviate": "Open Source Vector Database",
  "AWS Bedrock": "Managed AI Service",
  "Vertex AI": "Google Machine Learning Platform",
  "LangGraph": "LLM Application State Management",
  "CrewAI": "Multi Agent AI Framework",
  "Streamlit": "Python Data App Framework",
  "FastAPI": "Modern Python Web Framework",
  "n8n": "Workflow Automation Tool",
  "Make": "Visual Automation Platform",
  "GitHub Actions": "CI CD Automation",
  "GitLab CI": "Integrated DevOps Platform",
  "Prettier": "Code Formatting Tool",
  "ESLint": "JavaScript Code Linter",
  "Datadog": "Application Performance Monitoring",
  "Slack API": "Team Communication Integration",
  "Gmail API": "Email Service Integration"
};

const TECH_ICONS: { [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>> } = {
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  "TypeScript": SiTypescript,
  "Node.js": SiNodedotjs,
  "OpenAI": SiOpenai,
  "AWS": SiAmazon,
  "Docker": SiDocker,
  "GraphQL": SiGraphql,
  "MongoDB": SiMongodb,
  "PostgreSQL": SiPostgresql,
  "Tailwind CSS": SiTailwindcss,
  "Prisma": SiPrisma,
  "LangChain": SiLangchain,
  "Vercel": SiVercel,
  "Firebase": SiFirebase,
  "Zapier": SiZapier,
  "Stripe": SiStripe,
  "Claude": SiAnthropic,
  "Figma": SiFigma,
  "Jest": SiJest,
  "Framer Motion": SiFramer,
  "Redux": SiRedux,
  "Express.js": SiExpress,
  "NestJS": SiNestjs,
  "Clerk": SiClerk,
  "Hugging Face": SiHuggingface,
  "Streamlit": SiStreamlit,
  "FastAPI": SiFastapi,
  "n8n": SiN8N,
  "Make": SiMake,
  "GitHub Actions": SiGithubactions,
  "GitLab CI": SiGitlab,
  "Prettier": SiPrettier,
  "ESLint": SiEslint,
  "Datadog": SiDatadog,
  "Slack API": SiSlack,
  "Gmail API": SiGmail
};

const CARD_POSITIONS = [
  { transform: "translateX(0) scale(1)", zIndex: 5, opacity: 1 },           // Center
  { transform: "translateX(140px) scale(0.85)", zIndex: 3, opacity: 0.7 }, // Right
  { transform: "translateX(240px) scale(0.7)", zIndex: 2, opacity: 0.4 },  // Far right
];

export default function TechTicker({ 
  technologies, 
  interval = 2000,
  className = ""
}: TechTickerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % technologies.length);
    }, interval);
    return () => clearInterval(timer);
  }, [technologies.length, interval]);

  const getCardStyle = (index: number) => {
    const position = (index - currentIndex + technologies.length) % technologies.length;
    const totalTechs = technologies.length;
    
    // Handle visible positions
    if (position < CARD_POSITIONS.length) return CARD_POSITIONS[position];
    if (position === totalTechs - 1) return { ...CARD_POSITIONS[1], transform: "translateX(-140px) scale(0.85)" }; // Left
    if (position === totalTechs - 2) return { ...CARD_POSITIONS[2], transform: "translateX(-240px) scale(0.7)" };  // Far left
    
    // Hidden cards
    return {
      transform: `translateX(${position > totalTechs / 2 ? 400 : -400}px) scale(0.5)`,
      zIndex: 1,
      opacity: 0,
    };
  };

  const renderIcon = (techName: string) => {
    const IconComponent = TECH_ICONS[techName];
    if (IconComponent) {
      return (
        <IconComponent 
          className="mb-2" 
          style={{ 
            color: '#1F2937',
            width: '32px',
            height: '32px',
            minWidth: '32px',
            minHeight: '32px'
          }} 
        />
      );
    }
    return null;
  };

  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="relative h-32 flex items-center justify-center">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="absolute transition-all duration-1000 ease-in-out transform-gpu will-change-transform"
            style={getCardStyle(index)}
          >
            <div className="w-56 h-36 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg border border-gray-300 overflow-hidden transform-gpu relative">
              <div className="h-full flex flex-col items-center justify-center p-4 text-center transform-gpu">
                {renderIcon(tech.name)}
                <h3 className="text-lg font-bold text-gray-900 mb-1 transform-gpu">
                  {tech.name}
                </h3>
                <p className="text-gray-600 font-medium text-sm transform-gpu">
                  {TECH_DESCRIPTIONS[tech.name] || "Technology Solution"}
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/5 to-transparent pointer-events-none" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 