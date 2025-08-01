// app/rss/route.ts
import { baseUrl } from 'app/sitemap'

export async function GET() {
  // No more blog posts to fetch, so itemsXml is empty
  const itemsXml = ''

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>My Portfolio</title>
    <link>${baseUrl}</link>
    <description>This is my portfolio RSS feed</description>
    ${itemsXml}
  </channel>
</rss>`

  return new Response(rssFeed, {
    headers: { 'Content-Type': 'text/xml' },
  })
}