import { Metadata } from "next";
import HeroSection from "./sections/HeroSection";
import IntroSection from "./sections/IntroSection";
import ServicesSection from "./sections/ServicesSection";
import WhyChooseNepalSection from "./sections/WhyChooseNepalSection";
import ProcessSection from "./sections/ProcessSection";
import IndustriesSection from "./sections/IndustriesSection";
import WhyNobleStackSection from "./sections/WhyNobleStackSection";
import TechStackSection from "./sections/TechStackSection";
import CostSection from "./sections/CostSection";
import HowToChooseSection from "./sections/HowToChooseSection";
import FAQSection from "./sections/FAQSection";
import FinalCTASection from "./sections/FinalCTASection";

export const metadata: Metadata = {
  title: "Software Development Company in Nepal | Custom Solutions | Noble Stack",
  description: "Looking for a software development company in Nepal? Noble Stack builds custom software, SaaS platforms, web and mobile apps. Get scalable solutions at competitive pricing.",
  openGraph: {
    title: "Software Development Company in Nepal | Custom Solutions | Noble Stack",
    description: "Looking for a software development company in Nepal? Noble Stack builds custom software, SaaS platforms, web and mobile apps. Get scalable solutions at competitive pricing.",
    url: "https://noblestack.io/software-development-company-nepal",
    siteName: "Noble Stack",
  },
  alternates: {
    canonical: "https://noblestack.io/software-development-company-nepal",
  },
};

export const dynamic = "force-static";

export default function SoftwareDevelopmentCompanyNepalPage() {
  return (
    <main className="bg-page-theme overflow-hidden">
      <HeroSection />
      <div className="h-10 sm:h-16 bg-page-theme" />
      <IntroSection />
      <div className="h-10 sm:h-16 bg-page-theme" />
      <ServicesSection />
      <div className="h-10 sm:h-16 bg-page-theme" />
      <WhyChooseNepalSection />
      <div className="h-10 sm:h-16 bg-page-theme" />
      <ProcessSection />
      <div className="h-10 sm:h-16 bg-page-theme" />
      <IndustriesSection />
      <div className="h-10 sm:h-16 bg-page-theme" />
      <WhyNobleStackSection />
      <div className="h-10 sm:h-16 bg-page-theme" />
      <TechStackSection />
      <div className="h-10 sm:h-16 bg-page-theme" />
      <CostSection />
      <div className="h-10 sm:h-16 bg-page-theme" />
      <HowToChooseSection />
      <div className="h-10 sm:h-16 bg-page-theme" />
      <FAQSection />
      <div className="h-10 sm:h-16 bg-page-theme" />
      <FinalCTASection />
      
      {/* Schematic JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "Noble Stack",
      "url": "https://www.noblestack.io",
      "logo": "https://www.noblestack.io/logo.png",
      "description": "Noble Stack is a software development company in Nepal delivering scalable web, mobile, SaaS, and enterprise solutions for global clients.",
      "sameAs": [
        "https://www.linkedin.com/company/noblestack",
        "https://twitter.com/noblestack"
      ]
    },
    {
      "@type": "Service",
      "name": "Software Development Company in Nepal",
      "serviceType": "Custom Software Development",
      "provider": {
        "@type": "Organization",
        "name": "Noble Stack",
        "url": "https://www.noblestack.io"
      },
      "areaServed": [
        {
          "@type": "Country",
          "name": "Nepal"
        },
        {
          "@type": "Country",
          "name": "United States"
        },
        {
          "@type": "Country",
          "name": "Singapore"
        }
      ],
      "description": "Noble Stack provides custom software development, SaaS platforms, web applications, mobile apps, and enterprise software solutions from Nepal for global clients.",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Software Development Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Software Development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SaaS Application Development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Web Application Development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mobile App Development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Enterprise Software Solutions"
            }
          }
        ]
      }
    },
    {
      "@type": "WebPage",
      "name": "Software Development Company in Nepal",
      "url": "https://www.noblestack.io/software-development-company-nepal",
      "description": "Looking for a software development company in Nepal? Noble Stack builds custom software, SaaS platforms, web and mobile apps for global clients.",
      "inLanguage": "en",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Noble Stack",
        "url": "https://www.noblestack.io"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the best software development company in Nepal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The best software development company depends on your project needs, but you should look for proven experience, strong technical expertise, and successful delivery."
          }
        },
        {
          "@type": "Question",
          "name": "How much does software development cost in Nepal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Software development in Nepal typically costs between $5,000 and $80,000 or more depending on the complexity and requirements of the project."
          }
        },
        {
          "@type": "Question",
          "name": "Why hire developers from Nepal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nepal offers skilled developers, competitive pricing, and strong communication, making it a reliable destination for outsourcing software development."
          }
        },
        {
          "@type": "Question",
          "name": "What services do software companies provide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Software companies provide custom software development, web applications, mobile apps, SaaS platforms, and enterprise solutions."
          }
        },
        {
          "@type": "Question",
          "name": "Is Nepal good for outsourcing software development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Nepal is an emerging outsourcing hub with talented developers and cost-effective solutions for global businesses."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.noblestack.io"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Software Development Company in Nepal",
          "item": "https://www.noblestack.io/software-development-company-nepal"
        }
      ]
    }
  ]
})
        }}
      />
    </main>
  );
}
