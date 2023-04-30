import Head from 'next/head'

import BlogMeta from '@/components/shared/BlogMeta'
import SocialMetaTags from '@/components/shared/SocialMetaTags'

export default function ArticlesPageHead() {
  return (
    <Head>
      <title>The Viz Collective</title>
      <BlogMeta />
      <SocialMetaTags
        title="The Viz Collective"
        description="a blog by the dataviz team at Starschema"
        image="https://thevizcollective.com/images/index-og.png"
      />
    </Head>
  )
}
