import { useLiveQuery } from 'next-sanity/preview'

import PostPage, { PostPageProps } from '@/components/post/PostPage'
import { postAndMoreStoriesQuery } from '@/lib/sanity.queries'

export default function PreviewPostPage(props: PostPageProps) {
  const initialData = {
    post: props.post,
    morePosts: props.morePosts,
  }
  const [{ post, morePosts }, loadingPost] = useLiveQuery(
    initialData,
    postAndMoreStoriesQuery,
    {
      slug: props.post.slug,
    }
  )

  return (
    <PostPage
      draftMode
      loading={loadingPost}
      post={post}
      morePosts={morePosts}
    />
  )
}
