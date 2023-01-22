import PostPreview from '@/components/shared/PostPreview'
import type { Post } from '@/lib/sanity.queries'
import breakpoints from '@/lib/tailwind.breakpoints'

export default function MoreStories({ posts }: { posts: Post[] }) {
  // @ts-ignore - breakpoints is typed incorrectly
  const sizes = `(max-width: ${breakpoints.md}) 100vw, (max-width: ${breakpoints.xl}) 50vw, 33vw`
  return (
    <section>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-24 md:gap-x-16 xl:grid-cols-3">
        {posts.map((post) => (
          <div key={post._id}>
            <PostPreview post={post} imageSizes={sizes} />
          </div>
        ))}
      </div>
    </section>
  )
}
