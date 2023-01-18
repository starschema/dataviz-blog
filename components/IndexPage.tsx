import Hero from 'components/Hero'
import Container from 'components/layout/BlogContainer'
import MoreStories from 'components/MoreStories'
import PostPreview from 'components/post/PostPreview'
import SectionSeparator from 'components/SectionSeparator'
import type { IndexPosts, Post } from 'lib/sanity.queries'

export default function IndexPage(props: {
  preview?: boolean
  loading?: boolean
  posts: IndexPosts
}) {
  const { preview, loading, posts } = props
  const { featuredPost, latestPosts } = posts

  return (
    <>
      <Hero />
      <SectionSeparator />
      <Container>
        <h3 className="mb-10 mt-6 text-3xl font-bold">Featured</h3>
        {featuredPost && <PostPreview post={featuredPost} isFeatured={true} />}
        <SectionSeparator />
        <h3 className="mb-10 mt-6 text-3xl font-bold">Latest Articles</h3>
        {latestPosts.length > 0 && <MoreStories posts={latestPosts} />}
      </Container>
    </>
  )
}
