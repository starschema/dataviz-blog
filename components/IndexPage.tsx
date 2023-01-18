import Hero from 'components/Hero'
import Container from 'components/layout/BlogContainer'
import MoreStories from 'components/MoreStories'
import FeaturedPostPreview from 'components/post/FeaturedPostPreview'
import PostPreview from 'components/post/PostPreview'
import SectionSeparator from 'components/SectionSeparator'
import type { IndexPosts, Post } from 'lib/sanity.queries'

export default function IndexPage(props: { posts: IndexPosts }) {
  const { posts } = props
  const { featuredPost, latestPosts } = posts

  return (
    <>
      <Hero />
      <SectionSeparator />
      <Container>
        {featuredPost && <FeaturedPostPreview post={featuredPost} />}
        <SectionSeparator />
        <h3 className="mb-10 mt-6 text-3xl font-bold">Latest Articles</h3>
        {latestPosts.length > 0 && <MoreStories posts={latestPosts} />}
      </Container>
    </>
  )
}
