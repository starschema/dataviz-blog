import Head from 'next/head'

import BlogMeta from '@/components/shared/BlogMeta'

export default function ArticlesPageHead() {
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
        property="og:image"
        // FIXME: VERCEL_URL does not work on netlify and amplify
        content={`${
          process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : ''
        }/api/og?${new URLSearchParams({
          title: 'this is an image, it will be sorted out',
        })}`}
      />
    </Head>
  )
}
