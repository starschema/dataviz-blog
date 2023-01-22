import Link from 'next/link'

import AuthorMeta from '@/components/post/AuthorMeta'
import Date from '@/components/shared/Date'
import FeaturedCoverImage from '@/components/shared/FeaturedCoverImage'
import type { Post } from '@/lib/sanity.queries'

interface Props {
  post: Omit<Post, '_id'>
}
export default function PostPreview(props: Props) {
  const { title, thumbnail, date, excerpt, slug } = props.post
  return (
    // FIXME: add layout for SM and below
    <div
      className="grid grid-flow-row grid-cols-1 items-center gap-6 bg-[#A5B4F7] px-2 py-6 shadow-[0_0_0_100vmax_#A5B4F7] md:grid-cols-2 md:gap-24 md:py-16"
      style={{ clipPath: 'inset(0 -100vmax)' }}
    >
      <Link href={`/posts/${slug}`}>
        <FeaturedCoverImage slug={slug} title={title} image={thumbnail} />
      </Link>
      <div className="h-fit bg-white p-8 md:p-12">
        <Link
          href={`/posts/${slug}`}
          className="underline-offset-4 hover:underline"
        >
          <h3 className="mb-3 text-2xl font-bold leading-tight md:text-4xl">
            {title}
          </h3>
        </Link>
        <AuthorMeta authors={props.post.authors} />
        <p>{excerpt}</p>
        <Date dateString={date} />
      </div>
    </div>
  )
}
