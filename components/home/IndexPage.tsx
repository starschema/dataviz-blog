import type { IndexPosts } from 'lib/sanity.queries'

import FeaturedPostPreview from '@/components/home/FeaturedPostPreview'
import Hero from '@/components/home/Hero'
import IndexPageHead from '@/components/home/IndexPageHead'
import Container from '@/components/layout/BlogContainer'
import MoreStories from '@/components/shared/MoreStories'
import SectionSeparator from '@/components/shared/SectionSeparator'

export interface IndexPageProps {
  posts: IndexPosts
  draftMode?: boolean
  loading?: boolean
}

export default function IndexPage(props: IndexPageProps) {
  const { posts } = props
  const { featuredPost, latestPosts } = posts

  return (
    <>
      <IndexPageHead />
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
