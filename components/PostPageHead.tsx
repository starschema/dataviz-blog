import BlogMeta from 'components/BlogMeta'
import { urlForImage } from 'lib/sanity.image'
import { Post } from 'lib/sanity.queries'

type PostPageHeadProps = Pick<Post, 'title' | 'coverImage'>

export default function PostPageHead(props: PostPageHeadProps) {
  return (
    <>
      <title>{props.title}</title>
      <BlogMeta />
      {props.coverImage?.asset?._ref && (
        <meta
          property="og:image"
          content={urlForImage(props.coverImage)
            .width(1200)
            .height(627)
            .fit('crop')
            .url()}
        />
      )}
    </>
  )
}
