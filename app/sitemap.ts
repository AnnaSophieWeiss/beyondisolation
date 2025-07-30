// app/sitemap.ts

export const baseUrl = 'https://portfolio-blog-starter.vercel.app'

export default function sitemap() {
  // No blog posts available → only include static routes
  const routes = ['', '/about', '/projects'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return routes
}
