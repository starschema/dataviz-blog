import Link from 'next/link'

import PostPreview from '@/components/shared/PostPreview'
import type { Post } from '@/lib/sanity.queries'
import { breakpoints } from '@/lib/tailwind.theme'

export default function MoreStories({ posts }: { posts: Post[] }) {
  // @ts-ignore - breakpoints is typed incorrectly
  const sizes = `(max-width: ${breakpoints.md}) 100vw, (max-width: ${breakpoints.xl}) 50vw, 33vw`
  return (
    <section className="mb-6 flex flex-col gap-2">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16 xl:grid-cols-3">
        {posts.map((post) => (
          <div key={post._id}>
            <PostPreview post={post} imageSizes={sizes} />
          </div>
        ))}
      </div>
      <Link
        href="/articles"
        className="text-lg underline decoration-teal-500 underline-offset-8 hover:decoration-4"
      >
        See more posts
      </Link>
    </section>
  )
}
