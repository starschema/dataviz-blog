import { notFound } from 'next/navigation'

import Container from '@/components/layout/BlogContainer'
import AuthorBioBox from '@/components/post/AuthorBioBox'
import PostBody from '@/components/post/Body'
import PostHeader from '@/components/post/header/Header'
import PostPageHead from '@/components/post/PostPageHead'
import MoreStories from '@/components/shared/MoreStories'
import SectionSeparator from '@/components/shared/SectionSeparator'
import type { Post } from '@/lib/sanity.queries'

export interface PostPageProps {
  draftMode?: boolean
  loading?: boolean
  post: Post
  morePosts: Post[]
}

const NO_POSTS: Post[] = []

export default function PostPage(props: PostPageProps) {
  const { draftMode, loading, morePosts = NO_POSTS, post } = props

  const slug = post?.slug

  if (!slug && !draftMode) {
    notFound()
  }

  return (
    <>
      <PostPageHead
        title={post.title}
        thumbnail={post.thumbnail}
        excerpt={post.excerpt}
      />
      <Container>
        {draftMode && !post ? (
          <p>Loading…</p>
        ) : (
          <>
            <article>
              <PostHeader
                title={post.title}
                thumbnail={post.thumbnail}
                date={post.date}
                authors={post.authors}
                excerpt={post.excerpt}
                layout={post.layout}
              />
              <SectionSeparator className="mb-8" />
              <PostBody content={post.content} />
              <SectionSeparator className="mb-8" />
              <AuthorBioBox authors={post.authors} />
            </article>
            <SectionSeparator className="mb-4" />
            {morePosts?.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </>
  )
}
