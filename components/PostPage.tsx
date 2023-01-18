import Container from 'components/layout/BlogContainer'
import MoreStories from 'components/MoreStories'
import AuthorBioBox from 'components/post/AuthorBioBox'
import PostBody from 'components/post/Body'
import PostHeader from 'components/post/Header'
import PostTitle from 'components/post/Title'
import PostPageHead from 'components/PostPageHead'
import SectionSeparator from 'components/SectionSeparator'
import type { Post, Settings } from 'lib/sanity.queries'
import Head from 'next/head'
import { notFound } from 'next/navigation'

export interface PostPageProps {
  preview?: boolean
  loading?: boolean
  post: Post
  morePosts: Post[]
  settings: Settings
}

const NO_POSTS: Post[] = []

export default function PostPage(props: PostPageProps) {
  const { preview, loading, morePosts = NO_POSTS, post, settings } = props

  const slug = post?.slug

  if (!slug && !preview) {
    notFound()
  }

  return (
    <>
      <Head>
        <PostPageHead />
      </Head>
      <Container>
        {preview && !post ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <PostHeader
                title={post.title}
                thumbnail={post.thumbnail}
                date={post.date}
                authors={post.authors}
                excerpt={post.excerpt}
                layoutType={post.layoutType}
              />
              {/* tailwind removes the top margin from the first heading so we need to add a div here to add it back */}
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
