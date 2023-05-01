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
      <Link href={`/posts/${slug}`} className="hover:underline">
        <CoverImage
          slug={slug}
          title={title}
          image={thumbnail}
          priority={false}
          sizes={imageSizes ? imageSizes : undefined}
        />
        <h3 className="mb-2 mt-4 text-xl font-medium leading-snug">{title}</h3>
      </Link>
      <div className="mb-4 text-lg">
        <Date dateString={date} className={withExcerpt ? 'my-4' : ''} />
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
