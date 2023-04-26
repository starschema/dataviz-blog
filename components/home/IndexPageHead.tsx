import Head from 'next/head'

import BlogMeta from '@/components/shared/BlogMeta'

export default function IndexPageHead() {
  return (
    <Head>
      <title>The Viz Collective</title>
      <BlogMeta />
      <meta
        key="description"
        name="description"
        content="a blog by the dataviz team at Starschema"
      />
      <meta
        property="og:description"
        content="a blog by the dataviz team at Starschema"
      />
      <meta property="og:title" content="The Viz Collective" />

      <meta
        property="og:image"
        // Because OG images must have a absolute URL, we use the
        // `PROD_DOMAIN_NAME` environment variable to get the deployment’s URL.
        content={`https://${process.env.PROD_DOMAIN_NAME}/images/index-og.png`}
      />
    </Head>
  )
}
