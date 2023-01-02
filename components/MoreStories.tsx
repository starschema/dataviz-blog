import PostPreview from 'components/post/PostPreview'
import type { Post } from 'lib/sanity.queries'
import { Fragment } from 'react'

import SectionSeparator from './SectionSeparator'

export default function MoreStories({ posts }: { posts: Post[] }) {
  return (
    <section>
      {/* <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
        More Stories
      </h2> */}
      <div className="mb-0 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
        {posts.map((post) => (
          <Fragment key={post._id}>
            <SectionSeparator key={post._id} />
            <PostPreview
              key={post._id}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              authors={post.authors}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          </Fragment>
        ))}
      </div>
    </section>
  )
}
