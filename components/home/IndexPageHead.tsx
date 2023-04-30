import Head from 'next/head'

import BlogMeta from '@/components/shared/BlogMeta'
import SocialMetaTags from '@/components/shared/SocialMetaTags'
import { DOMAIN_NAME } from '@/lib/constants'

const title = 'The Viz Collective'
const description = 'a blog by the dataviz team at Starschema'

// Because OG images must have a absolute URL, we use the
// `DOMAIN_NAME` constant to get the deployment’s URL.
const ogImage = `https://${DOMAIN_NAME}/images/index-og.png`

export default function IndexPageHead() {
  return (
    <Head>
      <title>The Viz Collective</title>
      <BlogMeta />
      <SocialMetaTags title={title} description={description} image={ogImage} />
    </Head>
  )
}
