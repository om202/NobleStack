import { Metadata } from 'next';
import ProductsPageContent from "./ProductsPageContent";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore our portfolio of AI-powered products including Vibe AI Photo Editor, Create Profile Pic, Loopn, and Auto Captions. Real projects showcasing our capabilities.",
  keywords: [
    "AI products Nepal",
    "Vibe AI Photo Editor",
    "Create Profile Pic",
    "Loopn",
    "Auto Captions",
    "AI photo editing tools",
    "AI automation tools",
    "Noble Stack products",
    "software products Kathmandu"
  ],
};

// Force static generation for optimal performance
export const dynamic = 'force-static';

export default function ProductsPage() {
  return <ProductsPageContent />;
}
