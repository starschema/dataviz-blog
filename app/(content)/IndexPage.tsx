import BlogHeader from 'components/BlogHeader'
import Hero from 'components/Hero'
import Container from 'components/layout/BlogContainer'
import Layout from 'components/layout/BlogLayout'
import MoreStories from 'components/MoreStories'
import PostPreview from 'components/post/PostPreview'
import SectionSeparator from 'components/SectionSeparator'
import type { Post, Settings } from 'lib/sanity.queries'

export default function IndexPage(props: {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  settings: Settings
}) {
  const { preview, loading, posts, settings } = props
  // const [heroPost, ...morePosts] = posts || []
  const [...morePosts] = posts || []

  return (
    <>
      <Layout preview={preview} loading={loading}>
        <Container>
          <Hero />
          <SectionSeparator />
          <h3 className="mb-10 text-3xl font-bold">Latest Articles</h3>
          {/* {heroPost && <PostPreview post={heroPost} isFeatured={true} />} */}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}
