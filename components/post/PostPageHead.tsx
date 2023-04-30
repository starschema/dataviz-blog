import Head from 'next/head'

import BlogMeta from '@/components/shared/BlogMeta'
import SocialMetaTags from '@/components/shared/SocialMetaTags'
import { urlForImage } from '@/lib/sanity.image'
import { Post } from '@/lib/sanity.queries'

type PostPageHeadProps = Pick<Post, 'title' | 'thumbnail' | 'excerpt'>

export default function PostPageHead(props: PostPageHeadProps) {
  const { thumbnail, title, excerpt } = props
  const imageUrl = thumbnail?.asset?._ref && urlForImage(thumbnail).url()
  return (
    <Head>
      <title>{title}</title>
      <BlogMeta />
      <SocialMetaTags title={title} description={excerpt} image={imageUrl} />
    </Head>
  )
}
