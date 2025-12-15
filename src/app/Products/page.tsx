import { Metadata } from 'next';
import ProductsPageContent from "./ProductsPageContent";

export const metadata: Metadata = {
  title: "Products - Noble Stack",
  description: "Discover our suite of AI-powered products including Vibe AI Photo Editor, Create Profile Pic, Loopn, and Auto Captions.",
};

export default function ProductsPage() {
  return <ProductsPageContent />;
}
