import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Insights, strategies, and updates from the Noble Stack team covering AI, web development, technology trends, and startup advice from Nepal.',
    keywords: [
        'tech blogs Nepal',
        'AI insights',
        'web development trends',
        'startup advice',
        'technology news Kathmandu',
        'Noble Stack blog',
        'software development articles',
        'machine learning tutorials',
        'Next.js guides',
        'React development Nepal'
    ],
    openGraph: {
        title: 'Noble Stack Blog - Tech Insights from Nepal',
        description: 'Explore our collection of articles on AI, web development, and startup growth from Kathmandu, Nepal.',
        type: 'website',
    },
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
