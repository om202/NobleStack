import { Metadata } from 'next';
import CareerPageContent from "./CareerPageContent";

export const metadata: Metadata = {
  title: "Careers - Join Noble Stack",
  description: "Join the elite team at Noble Stack. We're hiring engineers, designers, and innovators to build world-class AI and web products.",
};

export default function Career() {
  return <CareerPageContent />;
}
