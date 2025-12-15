import { Metadata } from 'next';
import CareerPageContent from "./CareerPageContent";

export const metadata: Metadata = {
  title: "Careers - Join Noble Stack",
  description: "Join the elite team at Noble Stack. We're hiring engineers, designers, and innovators to build world-class AI and web products.",
};

// Force static generation for optimal performance
export const dynamic = 'force-static';

export default function Career() {
  return <CareerPageContent />;
}
