import Container from 'components/layout/BlogContainer'
import Layout from 'components/layout/BlogLayout'
import MoreStories from 'components/MoreStories'
import AuthorBioBox from 'components/post/AuthorBioBox'
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
              {/* tailwind removes the top margin from the first heading so we need to add a div here to add it back */}
              <SectionSeparator className='mb-8' />
              <PostBody content={post.content} />
              <SectionSeparator className='mb-8' />
              <AuthorBioBox authors={post.authors} />

            </article>
            <SectionSeparator className='mb-4' />
            {morePosts?.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  )
}
