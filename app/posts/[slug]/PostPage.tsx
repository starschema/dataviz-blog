import AuthorBio from 'components/AuthorBio'
import AuthorBioBox from 'components/AuthorBioBox'
import Container from 'components/layout/BlogContainer'
import Layout from 'components/layout/BlogLayout'
import MoreStories from 'components/MoreStories'
import PostBody from 'components/post/Body'
import PostHeader from 'components/post/Header'
import PostTitle from 'components/post/Title'
import SectionSeparator from 'components/SectionSeparator'
import type { Post, Settings } from 'lib/sanity.queries'
import { notFound } from 'next/navigation'

export default function PostPage(props: {
  preview?: boolean
  loading?: boolean
  data: { post: Post; morePosts: Post[] }
  settings: Settings
}) {
  const { preview, loading, data, settings } = props
  const { post = {} as any, morePosts = [] } = data || {}

  const slug = post?.slug

  if (!slug && !preview) {
    notFound()
  }

  return (
    <Layout preview={preview} loading={loading}>
      <Container>
        {preview && !post ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                authors={post.authors}
                excerpt={post.excerpt}
              />
              <hr className="border-t border-neutral-400" />
              <PostBody content={post.content} />
              <AuthorBioBox authors={post.authors} />
            </article>
            <SectionSeparator />
            {morePosts?.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  )
}
