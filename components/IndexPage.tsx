import Hero from 'components/Hero'
import Container from 'components/layout/BlogContainer'
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
  const [heroPost, ...morePosts] = posts || []

  return (
    <>
      <Hero />
      <SectionSeparator />
      <Container>
        <h3 className="mb-10 mt-6 text-3xl font-bold">Featured</h3>
        {heroPost && <PostPreview post={heroPost} isFeatured={true} />}
        <SectionSeparator />
        <h3 className="mb-10 mt-6 text-3xl font-bold">Latest Articles</h3>
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </>
  )
}
