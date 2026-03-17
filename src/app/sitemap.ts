import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'
import fs from 'fs'
import path from 'path'

/**
 * Dynamically discover all service pages from the Services directory
 */
function getServicePages(): string[] {
  const servicesDir = path.join(process.cwd(), 'src/app/Services')

  try {
    const entries = fs.readdirSync(servicesDir, { withFileTypes: true })

    // Filter for directories only (each service sub-page is a directory with page.tsx)
    return entries
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)
  } catch (error) {
    console.error('Error reading Services directory:', error)
    return []
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.noblestack.io'

  // Get all blog posts for dynamic sitemap generation
  const posts = getAllPosts(['slug', 'date'])

  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  // Get all service pages dynamically
  const servicePages = getServicePages()
  const serviceUrls = servicePages.map((serviceName) => ({
    url: `${baseUrl}/Services/${serviceName}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/About`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/Services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    // Dynamically added service sub-pages
    ...serviceUrls,
    // Root-level AI pages
    {
      url: `${baseUrl}/ai-development-company-in-nepal`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hire-ai-developers`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/Products`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/Career`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/Contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    ...blogUrls,
  ]
}