import Head from 'next/head'

import BlogMeta from '@/components/shared/BlogMeta'
import SocialMetaTags from '@/components/shared/SocialMetaTags'
import { DOMAIN_NAME } from '@/lib/constants'

const ogImage = `https://${DOMAIN_NAME}/images/index-og.png`

export default function ArticlesPageHead() {
  return (
    <Head>
      <title>The Viz Collective</title>
      <BlogMeta />
      <SocialMetaTags
        title="The Viz Collective"
        description="a blog by the dataviz team at Starschema"
        image={ogImage}
      />
    </Head>
  )
}
