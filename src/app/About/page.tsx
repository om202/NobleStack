import { Metadata } from 'next';
import AboutPageContent from "./AboutPageContent";

export const metadata: Metadata = {
  title: "About Us - Noble Stack",
  description: "Learn about Noble Stack, our mission, vision, and the team driving AI and web innovation in Nepal and South Asia.",
};

export default function About() {
  return <AboutPageContent />;
}
