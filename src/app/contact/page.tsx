import { Metadata } from 'next';
import ContactPageContent from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us - Noble Stack",
  description: "Get in touch with Noble Stack for your AI and web development needs. We're here to help you build the future.",
};

// Force static generation for optimal performance
export const dynamic = 'force-static';

export default function Contact() {
  return <ContactPageContent />;
}