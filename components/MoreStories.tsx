import { Fragment } from 'react'

import type { Post } from '../lib/sanity.queries'
import PostPreview from './post/PostPreview'
import SectionSeparator from './SectionSeparator'

export default function MoreStories({ posts }: { posts: Post[] }) {
  return (
    <section>
      <div className="mb-0 grid grid-cols-1 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
        {posts.map((post) => (
          <div key={post._id}>
            <PostPreview post={post} isFeatured={false} />
            <SectionSeparator key={post._id} className="mt-4 mb-4" />
          </div>
        ))}
      </div>
    </section>
  )
}
