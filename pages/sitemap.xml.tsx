import { DOMAIN_NAME } from '@/lib/constants'
import { getAllPostsSlugs, getClient } from '@/lib/sanity.client'

const standardPages = ['/about', '/articles', '/']
const postsBasePath = '/posts'

export default function SiteMap() {
  return <div>loading</div>
}

export async function getServerSideProps({ res }) {
  const standardUrls = standardPages.map((path) => {
    const url = `https://${DOMAIN_NAME}${path}`
    return `
      <url>
        <loc>${url}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
      </url>
    `
  })
  const client = getClient()
  const slugs = await getAllPostsSlugs(client)
  const postsUrls = slugs.map((slug) => {
    const url = `https://${DOMAIN_NAME}${postsBasePath}/${slug.slug}`
    return `
      <url>
        <loc>${url}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.5</priority>
      </url>
    `
  })

  const locations = [...standardUrls, ...postsUrls]
  const createSitemap = () => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${locations.join('')}
    </urlset>
    `
  res.setHeader('Content-Type', 'text/xml')
  res.write(createSitemap())
  res.end()
  return {
    props: {},
  }
}
