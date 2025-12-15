import { Metadata } from 'next';
import ProductsPageContent from "./ProductsPageContent";

export const metadata: Metadata = {
  title: "Products - Noble Stack",
  description: "Discover our suite of AI-powered products including Vibe AI Photo Editor, Create Profile Pic, Loopn, and Auto Captions.",
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

export default function ProductsPage() {
  return <ProductsPageContent />;
}
