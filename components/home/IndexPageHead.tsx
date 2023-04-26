import Head from 'next/head'

import BlogMeta from '@/components/shared/BlogMeta'

const title = 'The Viz Collective'
const description = 'a blog by the dataviz team at Starschema'

// Because OG images must have a absolute URL, we use the
// `PROD_DOMAIN_NAME` environment variable to get the deployment’s URL.
const ogImage = `https://${process.env.PROD_DOMAIN_NAME}/images/index-og.png`

export default function IndexPageHead() {
  return (
    <Head>
      <title>The Viz Collective</title>
      <BlogMeta />
      <meta key="description" name="description" content={`${description}`} />
      <meta property="og:description" content={`${description}`} />
      <meta property="og:title" content={`${title}`} />

      <meta property="og:image" content={`${ogImage}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:domain"
        content={`${process.env.PROD_DOMAIN_NAME}`}
      />
      <meta
        property="twitter:url"
        content={`${process.env.PROD_DOMAIN_NAME}`}
      />
      <meta name="twitter:title" content={`${title}`} />
      <meta name="twitter:description" content={`${description}`} />
      <meta name="twitter:image" content={`${ogImage}`} />
    </Head>
  )
}
