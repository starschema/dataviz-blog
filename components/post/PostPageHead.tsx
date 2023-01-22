import Head from 'next/head'

import BlogMeta from '@/components/shared/BlogMeta'
import { urlForImage } from '@/lib/sanity.image'
import { Post } from '@/lib/sanity.queries'

type PostPageHeadProps = Pick<Post, 'title' | 'thumbnail'>

export default function PostPageHead(props: PostPageHeadProps) {
  return (
    <Head>
      <title>{props.title}</title>
      <BlogMeta />
      {props.thumbnail?.asset?._ref && (
        <meta
          property="og:image"
          content={urlForImage(props.thumbnail)
            .width(1200)
            .height(627)
            .fit('crop')
            .url()}
        />
      )}
    </Head>
  )
}
