import Link from 'next/link'

import Author from '@/components/post/header/Author'
import Date from '@/components/shared/Date'
import CoverImage from '@/components/shared/Thumbnail'
import type { Post } from '@/lib/sanity.queries'
interface Props {
  post: Omit<Post, '_id'>
  withExcerpt?: boolean
  imageSizes?: string
}
export default function PostPreview(props: Props) {
  const { withExcerpt, imageSizes, post } = props
  const { title, thumbnail, date, excerpt, slug } = post
  return (
    <div className="">
      <div className="">
        <Link href={`/posts/${slug}`} className="hover:underline">
          <div className="mb-4">
            <CoverImage
              slug={slug}
              title={title}
              image={thumbnail}
              priority={false}
              sizes={imageSizes ? imageSizes : undefined}
            />
          </div>
          <h3 className="mb-3 text-xl font-medium leading-snug">{title}</h3>
        </Link>
        <div className="mb-4 text-lg">
          <Date dateString={date} />
        </div>
      </div>
      {withExcerpt && (
        <>
          <p className="mb-4 leading-relaxed">{excerpt}</p>
          <Author authors={post.authors} />
        </>
      )}
    </div>
  )
}
