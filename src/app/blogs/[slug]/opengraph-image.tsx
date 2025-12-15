import { ImageResponse } from 'next/og'
import { getPostBySlug } from '@/lib/blog'

export const runtime = 'edge'

export const alt = 'Noble Stack Blog Post'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image({ params }: { params: { slug: string } }) {
    const post = getPostBySlug(params.slug, ['title', 'author', 'date'])

    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    padding: '80px',
                    color: 'white',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                }}
            >
                {/* Top Badge */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: 32,
                        color: '#60a5fa',
                        fontWeight: 600,
                        letterSpacing: '-0.5px',
                    }}
                >
                    Noble Stack Blog
                </div>

                {/* Main Title */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        maxWidth: '1000px',
                    }}
                >
                    <div
                        style={{
                            fontSize: post.title.length > 60 ? 52 : 64,
                            fontWeight: 'bold',
                            lineHeight: 1.2,
                            color: '#ffffff',
                            display: 'flex',
                            flexWrap: 'wrap',
                        }}
                    >
                        {post.title}
                    </div>
                </div>

                {/* Bottom Info */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                        fontSize: 28,
                        color: '#94a3b8',
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div
                            style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '24px',
                                fontWeight: 'bold',
                                color: 'white',
                            }}
                        >
                            {post.author?.name?.charAt(0) || 'N'}
                        </div>
                        <span style={{ fontWeight: 500 }}>
                            {post.author?.name || 'Noble Stack Team'}
                        </span>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                        }}
                    >
                        <span>📅</span>
                        <span>{post.date}</span>
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
