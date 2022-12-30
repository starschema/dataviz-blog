import BlogHeader from 'components/BlogHeader'
import Container from 'components/layout/BlogContainer'
import Layout from 'components/layout/BlogLayout'
import MoreStories from 'components/MoreStories'
import HeroPost from 'components/post/HeroPost'
import * as demo from 'lib/demo.data'
import type { Post, Settings } from 'lib/sanity.queries'

export default function IndexPage(props: {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  settings: Settings
}) {
  const { preview, loading, posts, settings } = props
  const [heroPost, ...morePosts] = posts || []

  return (
    <>
      <Layout preview={preview} loading={loading}>
        <Container>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              authors={heroPost.authors}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}